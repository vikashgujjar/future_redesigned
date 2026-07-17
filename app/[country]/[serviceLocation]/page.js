import { notFound } from "next/navigation";
import CommonServicePage from "../../components/CommonServicePage";
import CommonTechPage from "../../components/techcommomcomponents/CommonTechPage";
import { SERVICES, getServiceBySlug } from "../../data/location-seo/services";
import { TECHNOLOGIES, getTechnologyLocationPath } from "../../data/location-seo/technologies";
import { ALL_LOCATIONS, getLocation } from "../../data/location-seo/locations";
import { buildLocationContent, buildTechnologyLocationContent } from "../../data/location-seo/content";
import { getCategoryContent, getTechCategoryContent, SHARED_SLIDER_CARDS } from "../../data/location-seo/categoryContent";

const SITE_URL = "https://futuretouch.in";
// Reusing the exact, already-verified banner image CommonTechPage.js uses as
// its own default across ~20 technology pages — proven working, thematically
// generic, and avoids hotlinking unverified new Unsplash photo IDs across
// 1,178 pages.
const BANNER_IMG = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85";

const SERVICE_LOCATION_MARKER = "-company-in-";

function parseServiceLocation(serviceLocation) {
  const idx = serviceLocation.indexOf(SERVICE_LOCATION_MARKER);
  if (idx === -1) return null;
  return {
    serviceSlug: serviceLocation.slice(0, idx),
    citySlug: serviceLocation.slice(idx + SERVICE_LOCATION_MARKER.length),
  };
}

// Every service-location path, precomputed so technology-location
// generation can skip any keyword slug that happens to collide with one
// (e.g. service "ios-app-development" and technology "swift-app-development"
// both produce the keyword "ios-app-development-company"). Service pages
// win those rare collisions since they're resolved first below.
const SERVICE_LOCATION_PATHS = new Set();
for (const service of SERVICES) {
  for (const location of ALL_LOCATIONS) {
    SERVICE_LOCATION_PATHS.add(`/${location.countryCode}/${service.slug}${SERVICE_LOCATION_MARKER}${location.citySlug}`);
  }
}

// Technology-location pages don't parse a hand-rolled URL marker — they
// resolve via a direct lookup built from getTechnologyLocationPath()
// itself (technologies.js), the single source of truth for those slugs.
// This guarantees resolution can never drift out of sync with what that
// function actually generates, and needs no new marker convention.
const TECH_LOCATION_PARAMS = [];
const TECH_LOCATION_LOOKUP = new Map();
for (const technology of TECHNOLOGIES) {
  for (const location of ALL_LOCATIONS) {
    const path = getTechnologyLocationPath(technology, location.countryCode, location.citySlug);
    if (!path || SERVICE_LOCATION_PATHS.has(path)) continue;
    const [, country, serviceLocation] = path.split("/");
    TECH_LOCATION_PARAMS.push({ country, serviceLocation });
    TECH_LOCATION_LOOKUP.set(path, { technology, location });
  }
}

function resolve(params) {
  // Service resolution — unchanged, tried first.
  const parsed = parseServiceLocation(params.serviceLocation);
  if (parsed) {
    const service = getServiceBySlug(parsed.serviceSlug);
    const location = getLocation(params.country, parsed.citySlug);
    if (service && location) return { type: "service", service, location };
  }

  // Technology resolution — direct lookup, no marker parsing.
  const techMatch = TECH_LOCATION_LOOKUP.get(`/${params.country}/${params.serviceLocation}`);
  if (techMatch) return { type: "technology", ...techMatch };

  return null;
}

// With `output: "export"` every param combination must come from
// generateStaticParams — there's no server to fall back on at request time.
// Setting this explicitly documents that intent; an undeclared path (one no
// internal link or sitemap entry ever points at) simply won't have a static
// file on the host, which is a normal, harmless 404 in production.
export const dynamicParams = false;

export function generateStaticParams() {
  const params = [];
  for (const service of SERVICES) {
    for (const location of ALL_LOCATIONS) {
      params.push({
        country: location.countryCode,
        serviceLocation: `${service.slug}${SERVICE_LOCATION_MARKER}${location.citySlug}`,
      });
    }
  }
  return [...params, ...TECH_LOCATION_PARAMS];
}

export function generateMetadata({ params }) {
  const resolved = resolve(params);
  if (!resolved) return {};
  const content = resolved.type === "technology"
    ? buildTechnologyLocationContent(resolved.technology, resolved.location)
    : buildLocationContent(resolved.service, resolved.location);
  const canonicalPath = `/${params.country}/${params.serviceLocation}`;
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
    twitter: {
      card: "summary_large_image",
      title,
      description: content.metaDescription,
      images: [BANNER_IMG],
    },
  };
}

export default function ServiceLocationPage({ params }) {
  const resolved = resolve(params);
  if (!resolved) notFound();

  if (resolved.type === "technology") {
    const { technology, location } = resolved;
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

  const { service, location } = resolved;
  const content = buildLocationContent(service, location);
  const category = getCategoryContent(service.category);

  return (
    <CommonServicePage
      bannerImg={BANNER_IMG}
      bannerTitle={content.title}
      bannerDesc={content.bannerDesc}
      areaServed={location.cityName}
      breadcrumbs={content.breadcrumbs}

      overviewImage={BANNER_IMG}
      overviewImageAlt={`${service.name} in ${location.cityName}`}
      overviewBadge={`${service.name} in ${location.cityName}`}
      overviewHeading={`${service.name} Built For`}
      overviewHighlight={`${location.cityName} Businesses`}
      overviewParagraphs={content.overviewParagraphs}
      overviewCtaText="Get a Free Quote"

      featuresBadge="Our Process"
      featuresTitle={`Why Businesses in ${location.cityName} Choose Us`}
      featuresTitleHighlight={`for ${service.name}`}
      features={category.features}

      bizBadge="Our Advantages"
      bizHeading="Partner with Us for"
      bizHighlight="Growth & Innovation"
      bizCards={category.bizCards}

      sliderTitle="Delivering Innovative Experiences"
      sliderCards={SHARED_SLIDER_CARDS}

      platformsTitle={`${service.name} Solutions We Deliver`}
      platforms={category.platforms}

      techBadge="Our Tech Stack"
      techHeading="Technologies"
      techHeadingHighlight="We Use"
      techCategories={category.techCategories}

      faqTitle={`${service.name} in ${location.cityName} — FAQs`}
      faqData={content.faqData}
    />
  );
}
