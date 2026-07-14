const SITE_URL = "https://futuretouch.in";
const SITE_NAME = "Future IT Touch Private Limited";
const LOGO_URL = `${SITE_URL}/images/Header/secondary-logo.webp`;

const SAME_AS = [
  "https://www.facebook.com/Futureittouch",
  "https://x.com/futureittouch",
  "https://in.linkedin.com/company/future-it-touch",
  "https://www.instagram.com/future_it_touch/",
  "https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about",
  "https://github.com/Future-IT-Touch-Private-Limited",
];

// Combined Organization + LocalBusiness + WebSite (with SearchAction) graph,
// rendered once in the root layout so every page carries consistent
// entity/brand signals for search engines and AI crawlers.
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
      image: LOGO_URL,
      telephone: "+91-7056937000",
      email: "info@futuretouch.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandigarh",
        addressRegion: "Chandigarh",
        addressCountry: "IN",
      },
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
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

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
