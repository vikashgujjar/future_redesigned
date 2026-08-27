# Future IT Touch — Website (Next.js)

Public marketing website for Future IT Touch Pvt. Ltd. — a fully
statically-exported Next.js 15 (App Router) site. Content that used to be
hardcoded across ~150 page/component files is now sourced at build time from
a separate Laravel + Filament CMS
([future-touch-services-admin](../future-touch-services-admin)), with a
bundled local fallback for every single piece of CMS-sourced content so a
CMS outage (or a fresh checkout with no CMS configured at all) can never
break the build.

```
Laravel CMS  →  GET /api/v1/*  (at `next build` time only — see below)  →  Next.js  →  static HTML/JS in out/
```

## Requirements

- Node.js 18+
- The Laravel admin API running and reachable at build time (see
  [future-touch-services-admin/README.md](../future-touch-services-admin/README.md))
  — or simply omit `NEXT_PUBLIC_API_URL` to build entirely from local
  fallback content (useful for a frontend-only checkout)

## Installation

```bash
npm install
cp .env.example .env.local
# edit .env.local — point NEXT_PUBLIC_API_URL at your running Laravel API
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is
already in use, run `npm run dev -- --port 3010` (or any free port) instead.

## Environment variables

All CMS-related fetchers live in `app/lib/cms.js` and use exactly one env
var — no other file hardcodes an API URL:

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the Laravel API, e.g. `http://localhost:8000/api/v1` (dev) or `https://admin.futuretouch.in/api/v1` (production) | No — omitting it makes every page build from local fallback content only |
| `NEXT_PUBLIC_FIREBASE_*` (7 vars) | Firebase project config for the OTP-verification lead-form flow | Yes, for OTP/lead-capture forms to work |
| `NEXT_PUBLIC_GOOGLE_REVIEWS_API_KEY` | Google Maps Platform key for the live Testimonials section | Yes, for live Google reviews (falls back to CMS testimonials, then a small hardcoded set, if unset/unreachable) |
| `NEXT_PUBLIC_OTP_API_URL`, `NEXT_PUBLIC_MAIL_API_URL` | Lead-form backend endpoints | No — default to the production `futuretouch.org` endpoints if unset |

See `.env.example` for the full list with comments. `.env.local` (and every
other `.env*` file except `.env.example`) is gitignored — never commit real
values.

## How CMS content reaches the site (important — read before editing pages)

This site builds with `output: "export"` (`next.config.mjs`) — **there is no
Node server at runtime**. Every `fetch()` in `app/lib/cms.js` and every
`generateMetadata()`/page component that calls it runs exactly once, **at
`next build` time**, never per visitor request. This has one major
consequence:

> **Editing content in the Laravel admin does nothing to the live site until
> the Next.js site is rebuilt and redeployed.** There is no live database
> connection from a visitor's browser — the CMS and the public website are
> connected only at build time.

The `DeployWebhookObserver` in the Laravel project exists to automate the
"rebuild" half of that — see its README section — but the underlying fact
(static export ⇒ build-time-only data) doesn't change regardless of how the
rebuild gets triggered.

Every CMS fetch fails soft: if the API is unreachable, returns an error, or
simply doesn't have a record yet, the calling page falls back to its own
bundled local content (the same hardcoded data that page always had) rather
than failing the build. A non-404 failure is logged to the build's console
output (`[cms] ... — falling back to local content.`) so a real
misconfiguration is visible in build logs rather than silently hidden
forever — but it never blocks `npm run build`.

## Development

```bash
npm run dev              # Turbopack dev server, hot reload
```

The dev server runs the actual Node runtime (not the static export), so CMS
fetches happen per-request here — a convenient way to see CMS edits reflected
without a full rebuild while developing.

## Production build (static export)

```bash
npm run build
```

This runs `next build`, which — because of `output: "export"` in
`next.config.mjs` — produces a fully static site in `out/`: every route
(including all 52 individual service/technology pages, ~5 blog posts, and
~1,900+ programmatic `/[country]/[serviceLocation]` SEO pages) is pre-rendered
to static HTML at build time. There is no `npm run start`/Node server for
production — `out/` is meant to be served by any static file host or CDN.

**Clean build**: if you suspect stale build output, remove the previous
build artifacts first:

```bash
rm -rf .next out
npm run build
```

**A note on this environment specifically**: running `npm run build` while a
`npm run dev` server is also running against the same project can corrupt
the `.next` directory (a Windows file-locking issue, not a Next.js bug) and
produce a spurious `Cannot find module for page: /_document`-style error.
Stop any running dev server before building if you hit that.

## Deployment process

1. Content is edited in the Laravel admin.
2. The admin's `DeployWebhookObserver` fires `DEPLOY_WEBHOOK_URL` (if
   configured) — typically a Vercel/Netlify deploy hook, or a custom CI
   trigger.
3. Your deploy pipeline runs `npm run build` here (with `NEXT_PUBLIC_API_URL`
   pointed at the production Laravel API) and publishes the resulting `out/`
   directory.
4. The rebuilt static site reflects the CMS edit.

There is currently no deployment pipeline configured in this environment —
step 3 needs a real CI/hosting setup (Vercel, Netlify, a GitHub Actions job
that runs `npm run build` and pushes `out/` somewhere, etc.) before the
webhook in step 2 has anywhere real to trigger.

## Project structure notes

- `app/lib/cms.js` — every CMS fetcher, plus `buildPageMetadata()`, the
  shared helper that turns a CMS `PageSeo` record into a full Next.js
  metadata object (title, description, keywords, robots, Open Graph,
  Twitter card) with local-fallback for every field.
- `app/lib/loadServicePage.js` — maps a CMS `ServicePage` record into the
  exact prop shapes `CommonServicePage.js` / `CommonTechPage.js` expect.
- `app/lib/serviceIcons.js` — resolves a CMS icon name string (e.g.
  `"paint-brush"`) back to the matching `react-icons` component. **Uses a
  curated named-import map, not a wildcard `import *`** — a wildcard import
  here previously bloated every service page's bundle from ~170KB to
  500KB+ by pulling in the entire `react-icons/fa`/`react-icons/si`
  libraries. Add a new icon by importing it by name and adding one entry to
  the map, never by switching back to a wildcard import.
- Every individual service/technology page (`app/<slug>/`) follows the same
  pattern: `page.js` fetches the CMS record (or `null`) and passes it as a
  `cms` prop; the sibling Component.js merges it with a `FALLBACK_CONTENT`
  object built from the original hardcoded content, so the page renders
  identically whether or not the CMS has a record for that slug yet.
