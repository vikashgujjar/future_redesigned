const API_URL = process.env.NEXT_PUBLIC_API_URL;

/* This site builds with `output: "export"` (next.config.mjs) — there is no
   server at runtime, so every fetch here runs once, at `next build` time,
   not per-request. Publishing a CMS edit means rebuilding/redeploying the
   Next.js site, same as any other statically-generated content on this site.

   Every call is wrapped so a CMS outage (or no NEXT_PUBLIC_API_URL configured
   at all, e.g. a fresh local checkout) can never fail the build — callers
   fall back to their own bundled static data when this returns null. */
async function fetchCms(path) {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) {
      if (res.status !== 404) {
        console.error(`[cms] ${path} returned ${res.status} — falling back to local content.`);
      }
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`[cms] ${path} unreachable (${err.message}) — falling back to local content.`);
    return null;
  }
}

export async function getSiteSettings() {
  const json = await fetchCms("/settings");
  return json?.data ?? null;
}

export async function getNavigationMenu(key) {
  const json = await fetchCms(`/navigation/${key}`);
  return json?.data ?? null;
}

export async function getBlogPosts() {
  const json = await fetchCms("/blog");
  return json?.data ?? null;
}

export async function getBlogPost(slug) {
  const json = await fetchCms(`/blog/${slug}`);
  return json?.data ?? null;
}

export async function getHomePageContent() {
  const json = await fetchCms("/home-page");
  return json?.data ?? null;
}

export async function getWhyChooseContent() {
  const json = await fetchCms("/why-choose");
  return json?.data ?? null;
}

export async function getAboutPageContent() {
  const json = await fetchCms("/about-page");
  return json?.data ?? null;
}

export async function getMissionPageContent() {
  const json = await fetchCms("/mission-page");
  return json?.data ?? null;
}

export async function getContactPageContent() {
  const json = await fetchCms("/contact-page");
  return json?.data ?? null;
}

export async function getPortfolioPageContent() {
  const json = await fetchCms("/portfolio-page");
  return json?.data ?? null;
}

export async function getPageSeo(pageKey) {
  const json = await fetchCms(`/page-seo/${pageKey}`);
  return json?.data ?? null;
}

/* Builds a full Next.js metadata object (title, description, keywords,
   robots, Open Graph, Twitter card) from a CMS PageSeo record, falling back
   to `fallback` field-by-field when the CMS has no record for this page yet
   (or is unreachable). Centralized here so every static page's
   generateMetadata() gets robots/OG/Twitter wiring "for free" instead of
   each page re-implementing it — previously only title/description were
   ever set, so an editor flipping "noindex" or setting an OG image in the
   admin had no effect on the actual page output. `extra` lets a page add
   fields the shared shape doesn't cover (e.g. `alternates.canonical`). */
export async function buildPageMetadata(pageKey, fallback, extra = {}) {
  const seo = await getPageSeo(pageKey);
  const title = seo?.title || fallback.title;
  const description = seo?.description || fallback.description;
  const keywords = seo?.keywords?.length ? seo.keywords : fallback.keywords;
  const ogTitle = seo?.og_title || title;
  const ogDescription = seo?.og_description || description;
  const ogImage = seo?.og_image || fallback.ogImage;

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    robots: {
      index: seo?.robots?.index ?? true,
      follow: seo?.robots?.follow ?? true,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    ...extra,
  };
}

export async function getPortfolioItems() {
  const json = await fetchCms("/portfolio");
  return json?.data ?? null;
}

export async function getTeamMembers() {
  const json = await fetchCms("/team");
  return json?.data ?? null;
}

export async function getTestimonials() {
  const json = await fetchCms("/testimonials");
  return json?.data ?? null;
}

export async function getFaqGroups() {
  const json = await fetchCms("/faqs");
  return json?.data ?? null;
}

export async function getPricing() {
  const json = await fetchCms("/pricing");
  return json?.data ?? null;
}

export async function getOfficeLocations() {
  const json = await fetchCms("/locations");
  return json?.data ?? null;
}

export async function getIndustries() {
  const json = await fetchCms("/industries");
  return json?.data ?? null;
}

export async function getServicePages() {
  const json = await fetchCms("/service-pages");
  return json?.data ?? null;
}

export async function getServicePage(slug) {
  const json = await fetchCms(`/service-pages/${slug}`);
  return json?.data ?? null;
}

export async function getServiceListingItems() {
  const json = await fetchCms("/service-listing");
  return json?.data ?? null;
}

export async function getServiceIndexContent() {
  const json = await fetchCms("/service-index");
  return json?.data ?? null;
}

export async function getTechnologyCategories() {
  const json = await fetchCms("/technology-categories");
  return json?.data ?? null;
}

/* CMS-created pages — see app/[slug]/page.js. Unlike every other fetcher
   here, an unreachable CMS during a real production build is NOT safe to
   silently ignore for these: there is no local fallback content for a
   page that only exists in the CMS, so `generateStaticParams` failing
   quietly would just mean that page's URL silently vanishes from the
   site. Both callers surface the failure instead of swallowing it. */
export async function getPages() {
  const json = await fetchCms("/pages");
  return json ?? [];
}

export async function getPageBySlug(slug) {
  const json = await fetchCms(`/pages/${slug}`);
  return json?.data ?? null;
}

/* Additional countries/cities/services for the /[country]/[serviceLocation]
   programmatic pages, layered on top of the site's original built-in
   dataset (app/data/location-seo/*.js) — see loadCmsLocations.js. Each
   fails soft to an empty list, same as everything else here: a CMS outage
   simply means no CMS-added location pages get built that run, the
   original ~1,900 pages are entirely unaffected either way. */
export async function getLocationCities() {
  const json = await fetchCms("/location-cities");
  return json?.data ?? [];
}

export async function getLocationServicesCatalog() {
  const json = await fetchCms("/location-services");
  return json?.data ?? [];
}

export async function getLocationOverrides() {
  const json = await fetchCms("/location-overrides");
  return json?.data ?? [];
}

/* Shape a mega-menu NavigationMenu (parent items with children) into the
   { heading, icon, href, items:[{label,href}] } columns Header.js renders. */
export function toMegaColumns(menu) {
  if (!menu?.items?.length) return null;
  return menu.items.map((parent) => ({
    heading: parent.label,
    icon: parent.icon,
    href: parent.url,
    items: (parent.children ?? []).map((child) => ({ label: child.label, href: child.url })),
  }));
}

/* Shape a flat NavigationMenu into the [{label,href}] list Header.js/Footer.js render. */
export function toFlatLinks(menu) {
  if (!menu?.items?.length) return null;
  return menu.items.map((item) => ({ label: item.label, href: item.url }));
}
