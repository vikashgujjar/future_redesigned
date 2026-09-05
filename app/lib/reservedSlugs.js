import fs from "fs";
import path from "path";

/* Top-level app/ directory names — every slug a CMS-created Page or the
   sitemap must treat as already spoken for, since Next.js always resolves
   a literal static route ahead of the [slug] catch-all for the same path.
   Shared by app/[slug]/page.js and app/sitemap.js so both stay in sync
   automatically as routes are added or removed. */
export default function reservedSlugs() {
  const appDir = path.join(process.cwd(), "app");
  return new Set(
    fs.readdirSync(appDir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
      .map((e) => e.name)
  );
}
