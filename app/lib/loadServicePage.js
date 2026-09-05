import { getServicePage } from "./cms";
import { getServiceIcon } from "./serviceIcons";

function withIcon(row, key) {
  if (!row) return row;
  return { ...row, [key]: getServiceIcon(row[key]) };
}

/* CommonServicePage.js/CommonTechPage.js's own chrome props (featuresBadge,
   whyHeading, etc.) use JS default parameters for their fallback text —
   which only activate on literal `undefined`, not `null`. The CMS always
   sends `null` for an unset field, so every chrome field must be coerced
   here or every page's chrome would render blank instead of falling back
   to the shared component's built-in default text. */
function orUndef(v) {
  return v || undefined;
}

/* `enabledSections` is either null (nothing ever configured — every section
   shows) or an explicit allow-list. Deliberately NOT applied inside the
   mapper functions below: a page's own Component.js merges CMS content
   with its local fallback per-field, and doing the disable check here too
   would be indistinguishable from "CMS just doesn't have this content yet"
   — an admin disabling a section would silently get overridden by the
   page's own fallback data. Call this from a page's own merge logic
   instead, AFTER combining CMS + local fallback, as the final word. */
export function isSectionDisabled(enabledSections, key) {
  return Boolean(enabledSections?.length) && !enabledSections.includes(key);
}

/* Maps a CMS ServicePage API record (template_type "service") into the exact
   prop shape CommonServicePage.js expects, plus `enabledSections` for the
   page's own merge logic to apply via isSectionDisabled(). Icon fields come
   back from the CMS as plain strings (e.g. "paint-brush") and are converted
   to the same react-icons element the local fallback data renders directly.

   Pure shape translation only — no fallback merging here. Each page's own
   Component.js knows its own local image/content fallback and merges it in
   per-field (e.g. `cms?.bannerImg || localBannerImg`), since that's the only
   place that actually has those local values without duplicating them. */
export function mapServicePageProps(cms) {
  const chrome = cms.chrome || {};
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
    featuresBadge: orUndef(chrome.features?.badge),
    featuresTitle: orUndef(chrome.features?.title),
    featuresTitleHighlight: orUndef(chrome.features?.highlight),
    features: cms.features.map((f) => withIcon(f, "icon")),
    bizBadge: orUndef(chrome.biz?.badge),
    bizHeading: orUndef(chrome.biz?.heading),
    bizHighlight: orUndef(chrome.biz?.highlight),
    bizCards: cms.biz_cards.map((c) => withIcon(c, "icons")),
    sliderTitle: orUndef(chrome.slider?.title),
    sliderCards: cms.slider_cards,
    platformsTitle: orUndef(chrome.platforms?.title),
    platforms: cms.platforms.map((p) => withIcon(p, "icon")),
    techBadge: orUndef(chrome.techstack?.badge),
    techHeading: orUndef(chrome.techstack?.heading),
    techHeadingHighlight: orUndef(chrome.techstack?.highlight),
    techDescription: orUndef(chrome.techstack?.description),
    techCategories: cms.tech_categories,
    faqTitle: orUndef(chrome.faq?.title),
    faqData: cms.faq,
    enabledSections: cms.enabled_sections,
  };
}

/* Maps a CMS ServicePage record (template_type "technology") into the exact
   prop shape CommonTechPage.js expects: banner={title,breadcrumb,category,
   tagline,bgImage}, intro={badge,heading,highlight,paras,stats,highlights},
   services=[], process=[], features=[], stack=[], slider=[], faq={title,items},
   plus the section-chrome props (servicesBadge, whyHeading, ...) added
   alongside CommonTechPage.js's own default text for each, and
   `enabledSections` for the page's own merge logic (see mapServicePageProps
   for why the disable check doesn't happen in here).

   `banner.breadcrumb`/`banner.category`/`intro.stats`/`intro.highlights`
   still have no CMS columns (cosmetic, page-identity chrome rather than
   business copy), so each page's own Component.js merges those in from its
   local fallback object, same as before. */
export function mapTechPageProps(cms) {
  const tt = cms.tt_chrome || {};
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
    servicesBadge: orUndef(tt.services?.badge),
    servicesHeading: orUndef(tt.services?.heading),
    servicesHighlight: orUndef(tt.services?.highlight),
    processBadge: orUndef(tt.process?.badge),
    processHeading: orUndef(tt.process?.heading),
    processHighlight: orUndef(tt.process?.highlight),
    processDescription: orUndef(tt.process?.description),
    whyBadge: orUndef(tt.why?.badge),
    whyHeading: orUndef(tt.why?.heading),
    whyHighlight: orUndef(tt.why?.highlight),
    stackBadge: orUndef(tt.stack?.badge),
    stackHeading: orUndef(tt.stack?.heading),
    stackHighlight: orUndef(tt.stack?.highlight),
    stackDescription: orUndef(tt.stack?.description),
    faqBadge: orUndef(tt.faq?.badge),
    enabledSections: cms.enabled_sections,
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
