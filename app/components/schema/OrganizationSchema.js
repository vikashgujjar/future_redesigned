import { getSiteSettings } from "../../lib/cms";

const SITE_URL = "https://futuretouch.in";
const SITE_NAME = "Future IT Touch Private Limited";
const LOGO_URL = `${SITE_URL}/images/Header/secondary-logo.webp`;

// Single source of truth is the CMS SiteSetting singleton — this is only the
// fail-soft fallback used when the CMS is unreachable at build time, kept in
// sync with SiteSettingSeeder so structured data never regresses on a CMS outage.
const FALLBACK_SETTINGS = {
  contact: { phone_primary: "+91-7056937000", email: "info@futuretouch.in" },
  address: { city: "Chandigarh", state: "Chandigarh", country: "IN" },
  social: {
    facebook: "https://www.facebook.com/Futureittouch",
    x: "https://x.com/futureittouch",
    linkedin: "https://in.linkedin.com/company/future-it-touch",
    instagram: "https://www.instagram.com/future_it_touch/",
    youtube: "https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about",
    github: "https://github.com/Future-IT-Touch-Private-Limited",
  },
};

export default async function OrganizationSchema() {
  const cms = await getSiteSettings();
  const settings = {
    ...FALLBACK_SETTINGS,
    ...cms,
    contact: { ...FALLBACK_SETTINGS.contact, ...cms?.contact },
    address: { ...FALLBACK_SETTINGS.address, ...cms?.address },
    social: { ...FALLBACK_SETTINGS.social, ...cms?.social },
  };
  const siteName = settings.site_name || SITE_NAME;
  const sameAs = Object.values(settings.social).filter(Boolean);

  // Combined Organization + LocalBusiness + WebSite (with SearchAction) graph,
  // rendered once in the root layout so every page carries consistent
  // entity/brand signals for search engines and AI crawlers.
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: siteName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
        },
        image: LOGO_URL,
        telephone: settings.contact.phone_primary,
        email: settings.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: settings.address.city,
          addressRegion: settings.address.state,
          addressCountry: settings.address.country,
        },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteName,
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
