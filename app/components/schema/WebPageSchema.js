const SITE_URL = "https://futuretouch.in";

// type: "ContactPage" | "AboutPage" | "WebPage"
export default function WebPageSchema({ type = "WebPage", name, description, path }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
