import { notFound } from "next/navigation";
import { getPages, getPageBySlug, getPageSeo, getServicePages, getServicePage } from "../lib/cms";
import { mapServicePageProps, mapTechPageProps, isSectionDisabled } from "../lib/loadServicePage";
import SectionRenderer from "../components/sections/SectionRenderer";
import CommonServicePage from "../components/CommonServicePage";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import reservedSlugs from "../lib/reservedSlugs";

/* CMS-created single-segment pages — sibling to ./[serviceLocation]/page.js,
   which handles two-segment location URLs (e.g.
   /in/website-design-company-in-delhi). Both must live under a dynamic
   segment named exactly "country": Next.js requires every dynamic route at
   the same tree position to share one param name, and this file only
   matches when there's just ONE path segment, so the "country" name is
   purely a routing-tree label here. Naming it `slug` internally keeps that
   clear. Two independent CMS sources land here:
     1. Page Builder pages (Page + PageSection) — generic hero/rich-text/etc.
        sections, rendered via SectionRenderer.
     2. Service/Technology pages created directly in the admin whose slug has
        no bespoke Next.js directory (the 52 existing services/technologies
        each still have their own hand-built app/<slug>/ page — this branch
        only ever catches a genuinely NEW service/technology) — rendered via
        the same CommonServicePage/CommonTechPage templates those bespoke
        pages use, driven entirely by CMS content with no local fallback.
   A Page Builder page wins if a slug were ever created in both places. */

// A generic banner/hero image for a brand-new service/technology page that
// hasn't had an image uploaded yet — matches CommonTechPage.js's own built-in
// banner fallback so a freshly-created page never fails to render an image.
const GENERIC_SERVICE_IMAGE = "/Assets/stock/photo-1518770660439-4636190af475.webp";

// With `output: "export"` every path must be known at build time.
export const dynamicParams = false;

// A placeholder slug nothing ever links to. Next's static export rejects a
// route whose generateStaticParams() resolves to zero entries at all
// (verified: it happens the moment the CMS has no published pages yet — a
// fresh install, or every CMS page unpublished) with a "missing
// generateStaticParams()" error, even though the function IS defined and
// DID run. Keeping the array non-empty sidesteps that, and this slug simply
// 404s if anyone ever requests it directly.
const PLACEHOLDER_SLUG = "__no_cms_pages__";

export async function generateStaticParams() {
  const [pages, servicePages] = await Promise.all([getPages(), getServicePages()]);
  const reserved = reservedSlugs();

  const pageSlugs = new Set(pages.filter((p) => !reserved.has(p.slug)).map((p) => p.slug));
  const newServiceSlugs = (servicePages || [])
    .map((p) => p.slug)
    .filter((slug) => !reserved.has(slug) && !pageSlugs.has(slug));

  const params = [...pageSlugs, ...newServiceSlugs].map((slug) => ({ country: slug }));

  return params.length ? params : [{ country: PLACEHOLDER_SLUG }];
}

export async function generateMetadata({ params }) {
  const { country: slug } = await params;
  const seo = await getPageSeo(slug);
  const page = await getPageBySlug(slug);
  if (page || seo) {
    const title = seo?.title || page?.title || "Future IT Touch";
    const description = seo?.description || "";
    return {
      title,
      description,
      robots: { index: seo?.robots?.index ?? true, follow: seo?.robots?.follow ?? true },
      openGraph: { title: seo?.og_title || title, description: seo?.og_description || description },
      twitter: { card: "summary_large_image", title: seo?.og_title || title, description: seo?.og_description || description },
    };
  }

  const servicePage = await getServicePage(slug);
  if (!servicePage) return {};
  const title = servicePage.seo?.title || servicePage.banner?.title || "Future IT Touch";
  const description = servicePage.seo?.description || servicePage.overview?.paragraphs?.[0] || "";
  return {
    title,
    description,
    keywords: servicePage.seo?.keywords?.length ? servicePage.seo.keywords : undefined,
  };
}

export default async function CmsPage({ params }) {
  const { country: slug } = await params;
  const page = await getPageBySlug(slug);

  if (page) {
    return (
      <div>
        <SectionRenderer sections={page.sections} />
      </div>
    );
  }

  // Not a Page Builder page — check whether it's a Service/Technology page
  // created directly in the admin with no bespoke Next.js directory.
  const servicePageCms = await getServicePage(slug);
  if (servicePageCms) {
    if (servicePageCms.template_type === "technology") {
      const content = mapTechPageProps(servicePageCms);
      content.banner = { ...content.banner, bgImage: content.banner.bgImage || GENERIC_SERVICE_IMAGE };
      // mapTechPageProps() intentionally returns null (not []) for these when
      // the CMS has nothing yet, so a bespoke page's own `|| FALLBACK_CONTENT.x`
      // can tell "empty" apart from "not set". This route has no local
      // fallback to merge with, so null must become [] here instead —
      // otherwise CommonTechPage's own `x = []` default params never kick in
      // (they only apply to `undefined`, not an explicit `null`) and it
      // crashes on `.length`/`.map` of a genuinely new, still-empty section.
      content.services = content.services || [];
      content.process = content.process || [];
      content.stack = content.stack || [];
      content.slider = content.slider || [];
      // Neither CommonServicePage nor CommonTechPage read an `enabledSections`
      // prop directly — every bespoke page (app/<slug>/Component.js) applies
      // isSectionDisabled() itself before handing arrays down. This route has
      // no bespoke wrapper, so it must do the same gating here or an admin's
      // section toggle would be silently ignored for a genuinely new page.
      const hideTech = (key) => isSectionDisabled(content.enabledSections, key);
      if (hideTech("services")) content.services = [];
      if (hideTech("process")) content.process = [];
      if (hideTech("why")) content.features = [];
      if (hideTech("stack")) content.stack = [];
      if (hideTech("faq")) content.faq = { ...content.faq, items: [] };
      return <CommonTechPage {...content} />;
    }
    const content = mapServicePageProps(servicePageCms);
    content.bannerImg = content.bannerImg || GENERIC_SERVICE_IMAGE;
    content.overviewImage = content.overviewImage || GENERIC_SERVICE_IMAGE;
    const hideService = (key) => isSectionDisabled(content.enabledSections, key);
    if (hideService("features")) content.features = [];
    if (hideService("biz")) content.bizCards = [];
    if (hideService("slider")) content.sliderCards = [];
    if (hideService("platforms")) content.platforms = [];
    if (hideService("techstack")) content.techCategories = [];
    if (hideService("faq")) content.faqData = [];
    return <CommonServicePage {...content} />;
  }

  // No local fallback exists for a CMS-only page — if the CMS has nothing
  // for this slug (deleted, unpublished since the params list was built, or
  // genuinely unreachable), fail the page cleanly instead of rendering a
  // broken shell. generateStaticParams already filtered to published slugs,
  // so reaching this with nothing found means the CMS state changed between
  // those fetches, or the API is down — either way, 404 is the correct,
  // honest outcome for a page whose only source of truth is gone.
  notFound();
}
