const SITE_URL = "https://futuretouch.in";

export default function ServiceSchema({ name, description }) {
  if (!name) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
