import { getServicePage } from "./cms";
import { getServiceIcon } from "./serviceIcons";

function withIcon(row, key) {
  if (!row) return row;
  return { ...row, [key]: getServiceIcon(row[key]) };
}

/* Maps a CMS ServicePage API record (template_type "service") into the exact
   prop shape CommonServicePage.js expects. Icon fields come back from the
   CMS as plain strings (e.g. "paint-brush") and are converted to the same
   react-icons element the local fallback data renders directly.

   Pure shape translation only — no fallback merging here. Each page's own
   Component.js knows its own local image/content fallback and merges it in
   per-field (e.g. `cms?.bannerImg || localBannerImg`), since that's the only
   place that actually has those local values without duplicating them. */
export function mapServicePageProps(cms) {
  return {
    bannerImg: cms.banner.image,
    bannerTitle: cms.banner.title,
    bannerDesc: cms.banner.desc,
    overviewImage: cms.overview.image,
    overviewImageAlt: cms.overview.image_alt,
    overviewBadge: cms.overview.badge,
    overviewHeading: cms.overview.heading,
    overviewHighlight: cms.overview.highlight,
    overviewParagraphs: cms.overview.paragraphs,
    overviewCtaText: cms.overview.cta_text,
    features: cms.features.map((f) => withIcon(f, "icon")),
    bizCards: cms.biz_cards.map((c) => withIcon(c, "icons")),
    sliderCards: cms.slider_cards,
    platforms: cms.platforms.map((p) => withIcon(p, "icon")),
    techCategories: cms.tech_categories,
    faqData: cms.faq,
  };
}

/* Maps a CMS ServicePage record (template_type "technology") into the exact
   prop shape CommonTechPage.js expects: banner={title,breadcrumb,category,
   tagline,bgImage}, intro={badge,heading,highlight,paras,stats,highlights},
   services=[], process=[], features=[], stack=[], slider=[], faq={title,items}.

   Pure shape translation only, same as mapServicePageProps — no fallback
   merging here. `banner.breadcrumb`/`banner.category`/`intro.stats`/
   `intro.highlights` have no CMS columns at all (cosmetic section chrome,
   same idea as the service template's badge/heading props), and
   `service_items`/`process_steps`/`tech_categories` are optional in the
   schema, so each page's own Component.js merges all of these in from its
   local fallback object — the only place that has those local values. */
export function mapTechPageProps(cms) {
  return {
    banner: {
      title: cms.banner.title,
      tagline: cms.banner.desc,
      bgImage: cms.banner.image,
    },
    intro: {
      badge: cms.overview.badge,
      heading: cms.overview.heading,
      highlight: cms.overview.highlight,
      paras: cms.overview.paragraphs,
    },
    services: cms.service_items?.length ? cms.service_items.map((s) => withIcon(s, "icon")) : null,
    process: cms.process_steps?.length ? cms.process_steps.map((s) => withIcon(s, "icon")) : null,
    features: cms.features.map((f) => withIcon(f, "icon")),
    stack: cms.tech_categories?.length ? cms.tech_categories.flatMap((c) => c.techs || []) : null,
    slider: cms.slider_cards,
    faq: { items: cms.faq },
  };
}

/** Fetches the CMS ServicePage record for `slug`, or null if not migrated /
 *  unreachable (build must never fail — caller uses its own local fallback). */
export async function getServicePageCms(slug) {
  return getServicePage(slug);
}

export async function loadServicePageSeo(slug, fallbackMetadata) {
  const cms = await getServicePage(slug);
  if (!cms?.seo?.title && !cms?.seo?.description) return fallbackMetadata;

  return {
    title: cms.seo.title || fallbackMetadata.title,
    description: cms.seo.description || fallbackMetadata.description,
    keywords: cms.seo.keywords?.length ? cms.seo.keywords : fallbackMetadata.keywords,
  };
}
