import { notFound } from "next/navigation";
import CommonServicePage from "../../components/CommonServicePage";
import CommonTechPage from "../../components/techcommomcomponents/CommonTechPage";
import { TECHNOLOGIES, getTechnologyLocationPath } from "../../data/location-seo/technologies";
import { ALL_LOCATIONS } from "../../data/location-seo/locations";
import { buildLocationContent, buildTechnologyLocationContent } from "../../data/location-seo/content";
import { getCategoryContent, getTechCategoryContent, SHARED_SLIDER_CARDS } from "../../data/location-seo/categoryContent";
import { loadMergedLocations, loadMergedServices, loadOverridesMap } from "../../data/location-seo/loadCmsLocations";
import { isSectionDisabled } from "../../lib/loadServicePage";

const SITE_URL = "https://futuretouch.in";
// Reusing the exact, already-verified banner image CommonTechPage.js uses as
// its own default across ~20 technology pages — proven working, thematically
// generic, and avoids hotlinking unverified new Unsplash photo IDs across
// 1,178 pages.
const BANNER_IMG = "/Assets/stock/photo-1518770660439-4636190af475.webp";

const SERVICE_LOCATION_MARKER = "-company-in-";

function parseServiceLocation(serviceLocation) {
  const idx = serviceLocation.indexOf(SERVICE_LOCATION_MARKER);
  if (idx === -1) return null;
  return {
    serviceSlug: serviceLocation.slice(0, idx),
    citySlug: serviceLocation.slice(idx + SERVICE_LOCATION_MARKER.length),
  };
}

// Technology-location pages are untouched by the CMS work below — they
// still resolve purely from the site's original static TECHNOLOGIES ×
// ALL_LOCATIONS dataset, exactly as before.
const TECH_LOCATION_PARAMS = [];
const TECH_LOCATION_LOOKUP = new Map();
for (const technology of TECHNOLOGIES) {
  for (const location of ALL_LOCATIONS) {
    const path = getTechnologyLocationPath(technology, location.countryCode, location.citySlug);
    if (!path) continue;
    const [, country, serviceLocation] = path.split("/");
    TECH_LOCATION_PARAMS.push({ country, serviceLocation });
    TECH_LOCATION_LOOKUP.set(path, { technology, location });
  }
}

/* Merged (static + CMS-added) service/location resolution — used by both
   generateStaticParams and the page itself, so what gets built and what
   resolves at request time can never drift apart. Respects a
   LocationPageOverride's is_published=false by excluding that one
   combination, and applies any content overrides on top of the normal
   generated content. */
async function resolveService(params) {
  const parsed = parseServiceLocation(params.serviceLocation);
  if (!parsed) return null;

  const [services, locations, overridesMap] = await Promise.all([
    loadMergedServices(),
    loadMergedLocations(),
    loadOverridesMap(),
  ]);
  const service = services.find((s) => s.slug === parsed.serviceSlug);
  const location = locations.find((l) => l.countryCode === params.country && l.citySlug === parsed.citySlug);
  if (!service || !location) return null;

  const override = overridesMap.get(`${location.countryCode}/${location.citySlug}/${service.slug}`);
  if (override?.is_published === false) return null;

  return { service, location, override };
}

function resolveTechnology(params) {
  const techMatch = TECH_LOCATION_LOOKUP.get(`/${params.country}/${params.serviceLocation}`);
  return techMatch ? { type: "technology", ...techMatch } : null;
}

// With `output: "export"` every param combination must come from
// generateStaticParams — there's no server to fall back on at request time.
// Setting this explicitly documents that intent; an undeclared path (one no
// internal link or sitemap entry ever points at) simply won't have a static
// file on the host, which is a normal, harmless 404 in production.
export const dynamicParams = false;

export async function generateStaticParams() {
  const [services, locations, overridesMap] = await Promise.all([
    loadMergedServices(),
    loadMergedLocations(),
    loadOverridesMap(),
  ]);

  const params = [];
  const serviceLocationPaths = new Set();
  for (const service of services) {
    for (const location of locations) {
      const path = `/${location.countryCode}/${service.slug}${SERVICE_LOCATION_MARKER}${location.citySlug}`;
      const override = overridesMap.get(`${location.countryCode}/${location.citySlug}/${service.slug}`);
      if (override?.is_published === false) continue;
      serviceLocationPaths.add(path);
      params.push({
        country: location.countryCode,
        serviceLocation: `${service.slug}${SERVICE_LOCATION_MARKER}${location.citySlug}`,
      });
    }
  }

  // Technology-location generation — unchanged: still skips any keyword
  // slug that happens to collide with a service page's URL, service wins.
  const techParams = TECH_LOCATION_PARAMS.filter(
    (p) => !serviceLocationPaths.has(`/${p.country}/${p.serviceLocation}`)
  );

  return [...params, ...techParams];
}

export async function generateMetadata({ params }) {
  const p = await params;
  const svcResolved = await resolveService(p);

  if (svcResolved) {
    const { service, location, override } = svcResolved;
    const content = buildLocationContent(service, location);
    const canonicalPath = `/${p.country}/${p.serviceLocation}`;
    // Cascade: this exact location's override wins, then the service's own
    // SEO defaults (reused across every city it appears in), then the
    // auto-generated "{Service} Company in {City}" content — so a CMS-added
    // service can set its SEO once instead of per-city, without requiring
    // every one of the ~1,900 existing pages to have a stored value at all.
    const title = override?.meta_title || service.seoTitle || `${content.title} | Future IT Touch`;
    const description = override?.meta_description || service.seoDescription || content.metaDescription;
    const keywords = override?.seo_keywords?.length ? override.seo_keywords : (service.seoKeywords?.length ? service.seoKeywords : content.keywords);
    const heroImage = override?.hero_image || service.image || BANNER_IMG;
    const ogTitle = override?.og_title || title;
    const ogDescription = override?.og_description || description;
    const ogImage = override?.og_image || heroImage;
    const twitterTitle = override?.twitter_title || ogTitle;
    const twitterDescription = override?.twitter_description || ogDescription;
    const twitterImage = override?.twitter_image || ogImage;
    // Only an explicit false actually suppresses indexing — override.robots_index
    // is null/undefined for every page an admin hasn't touched, which must mean
    // "use the normal indexable default," not "block this page."
    const indexable = override?.robots_index !== false;

    return {
      title,
      description,
      keywords,
      alternates: { canonical: canonicalPath },
      robots: { index: indexable, follow: true },
      openGraph: {
        type: "website",
        url: `${SITE_URL}${canonicalPath}`,
        title: ogTitle,
        description: ogDescription,
        images: [{ url: ogImage, width: 1200, height: 630, alt: content.title }],
      },
      twitter: { card: "summary_large_image", title: twitterTitle, description: twitterDescription, images: [twitterImage] },
    };
  }

  const techResolved = resolveTechnology(p);
  if (!techResolved) return {};
  const content = buildTechnologyLocationContent(techResolved.technology, techResolved.location);
  const canonicalPath = `/${p.country}/${p.serviceLocation}`;
  const title = `${content.title} | Future IT Touch`;

  return {
    title,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: { canonical: canonicalPath },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${canonicalPath}`,
      title,
      description: content.metaDescription,
      images: [{ url: BANNER_IMG, width: 1200, height: 630, alt: content.title }],
    },
    twitter: { card: "summary_large_image", title, description: content.metaDescription, images: [BANNER_IMG] },
  };
}

export default async function ServiceLocationPage({ params }) {
  const p = await params;
  const svcResolved = await resolveService(p);

  if (svcResolved) {
    const { service, location, override } = svcResolved;
    const content = buildLocationContent(service, location);
    const category = getCategoryContent(service.category);
    const heroHeading = override?.hero_heading || content.title;
    // Cascade: this exact location's override wins, then the service's own
    // default (reused across every city it appears in), then the shared
    // generic banner — same precedence as the SEO cascade above.
    const heroImage = override?.hero_image || service.image || BANNER_IMG;
    const heroImageAlt = override?.hero_image_alt || service.imageAlt || undefined;

    // Cascade for section visibility: this exact location's own override (if
    // it actually sets one) wins outright; otherwise fall back to the
    // service's own default; otherwise every section shows. A disable at
    // either level is never silently re-shown by the "show everything"
    // fallback of last resort — see isSectionDisabled() for why that's safe.
    const enabledSections = override?.enabled_sections?.length ? override.enabled_sections : service.enabledSections;
    const hide = (key) => isSectionDisabled(enabledSections, key);

    return (
      <CommonServicePage
        bannerImg={heroImage}
        bannerImgAlt={heroImageAlt}
        bannerBadge={override?.hero_badge || undefined}
        bannerCtaText={override?.cta_text || undefined}
        bannerCtaUrl={override?.cta_url || undefined}
        bannerTitle={heroHeading}
        bannerDesc={override?.hero_description || content.bannerDesc}
        areaServed={location.cityName}
        breadcrumbs={content.breadcrumbs}

        overviewImage={heroImage}
        overviewImageAlt={`${service.name} in ${location.cityName}`}
        overviewBadge={`${service.name} in ${location.cityName}`}
        overviewHeading={`${service.name} Built For`}
        overviewHighlight={`${location.cityName} Businesses`}
        overviewParagraphs={content.overviewParagraphs}
        overviewCtaText="Get a Free Quote"

        featuresBadge="Our Process"
        featuresTitle={`Why Businesses in ${location.cityName} Choose Us`}
        featuresTitleHighlight={`for ${service.name}`}
        features={hide("features") ? [] : category.features}

        bizBadge="Our Advantages"
        bizHeading="Partner with Us for"
        bizHighlight="Growth & Innovation"
        bizCards={hide("biz") ? [] : category.bizCards}

        sliderTitle="Delivering Innovative Experiences"
        sliderCards={hide("slider") ? [] : SHARED_SLIDER_CARDS}

        platformsTitle={`${service.name} Solutions We Deliver`}
        platforms={hide("platforms") ? [] : category.platforms}

        techBadge="Our Tech Stack"
        techHeading="Technologies"
        techHeadingHighlight="We Use"
        techCategories={hide("techstack") ? [] : category.techCategories}

        faqTitle={`${service.name} in ${location.cityName} — FAQs`}
        faqData={hide("faq") ? [] : content.faqData}
      />
    );
  }

  const techResolved = resolveTechnology(p);
  if (!techResolved) notFound();

  const { technology, location } = techResolved;
  const content = buildTechnologyLocationContent(technology, location);
  const category = getTechCategoryContent(technology.category);

  return (
    <CommonTechPage
      banner={{
        bgImage: BANNER_IMG,
        category: technology.category,
        breadcrumb: content.title,
        title: content.title,
        tagline: content.bannerDesc,
      }}
      intro={{
        badge: `Future IT Touch · ${technology.category}`,
        heading: `${technology.name} Built For`,
        highlight: `${location.cityName} Businesses`,
        paras: content.overviewParagraphs.map((p) => (typeof p === "string" ? p : p.text)),
        stats: [],
      }}
      services={category.services}
      process={category.process}
      features={category.features}
      stack={category.stack}
      slider={SHARED_SLIDER_CARDS}
      faq={{ title: `${technology.name} in ${location.cityName} — FAQs`, items: content.faqData }}
      areaServed={location.cityName}
      breadcrumbs={content.breadcrumbs}
    />
  );
}
