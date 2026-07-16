const SITE_URL = "https://futuretouch.in";

// items: [{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]
// A null path (no dedicated page for that trail step) omits the `item` URL,
// which schema.org allows for non-linked breadcrumb positions.
export default function BreadcrumbSchema({ items = [] }) {
  if (!items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
