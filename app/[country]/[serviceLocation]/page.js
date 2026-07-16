import { notFound } from "next/navigation";
import CommonServicePage from "../../components/CommonServicePage";
import { SERVICES, getServiceBySlug } from "../../data/location-seo/services";
import { ALL_LOCATIONS, getLocation } from "../../data/location-seo/locations";
import { buildLocationContent } from "../../data/location-seo/content";
import { getCategoryContent, SHARED_SLIDER_CARDS } from "../../data/location-seo/categoryContent";

const SITE_URL = "https://futuretouch.in";
// Reusing the exact, already-verified banner image CommonTechPage.js uses as
// its own default across ~20 technology pages — proven working, thematically
// generic, and avoids hotlinking unverified new Unsplash photo IDs across
// 1,178 pages.
const BANNER_IMG = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85";

const SERVICE_LOCATION_MARKER = "-services-in-";

function parseServiceLocation(serviceLocation) {
  const idx = serviceLocation.indexOf(SERVICE_LOCATION_MARKER);
  if (idx === -1) return null;
  return {
    serviceSlug: serviceLocation.slice(0, idx),
    citySlug: serviceLocation.slice(idx + SERVICE_LOCATION_MARKER.length),
  };
}

function resolve(params) {
  const parsed = parseServiceLocation(params.serviceLocation);
  if (!parsed) return null;
  const service = getServiceBySlug(parsed.serviceSlug);
  const location = getLocation(params.country, parsed.citySlug);
  if (!service || !location) return null;
  return { service, location };
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
  return params;
}

export function generateMetadata({ params }) {
  const resolved = resolve(params);
  if (!resolved) return {};
  const { service, location } = resolved;
  const content = buildLocationContent(service, location);
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
