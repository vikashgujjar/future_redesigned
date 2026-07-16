const SITE_URL = "https://futuretouch.in";

export default function ServiceSchema({ name, description, areaServed = "Worldwide" }) {
  if (!name) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
