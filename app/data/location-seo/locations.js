// Location data for location-based landing pages (Service × Location SEO).
// `code` is the accurate ISO-ish country code used as the URL segment:
// /{code}/{service-slug}-services-in-{city-slug}
//
// Middle East cities are split across their real countries (not bundled
// under one region) so the URL segment matches the city's actual country —
// e.g. Dubai and Abu Dhabi both sit under "ae" (UAE), Riyadh under "sa".

export const COUNTRIES = [
  {
    code: "us",
    country: "United States",
    region: "North America",
    cities: [
      { name: "New York", blurb: "a global hub for finance, media, and technology" },
      { name: "California", blurb: "home to Silicon Valley and one of the world's largest tech economies" },
      { name: "Texas", blurb: "one of the fastest-growing business and tech hubs in the US" },
      { name: "Miami", blurb: "a fast-growing hub for startups and international trade" },
      { name: "Chicago", blurb: "a major Midwest hub for finance, logistics, and enterprise business" },
      { name: "Los Angeles", blurb: "a leading hub for media, entertainment, and consumer brands" },
      { name: "Dallas", blurb: "a major corporate and technology hub in the southern US" },
      { name: "Phoenix", blurb: "one of the fastest-growing tech and business hubs in the Southwest" },
      { name: "Houston", blurb: "a major hub for energy, healthcare, and enterprise business" },
      { name: "Las Vegas", blurb: "a growing hub for hospitality, events, and small business" },
    ],
  },
  {
    code: "ca",
    country: "Canada",
    region: "North America",
    cities: [
      { name: "Toronto", blurb: "Canada's largest business and technology hub" },
      { name: "Vancouver", blurb: "a major West Coast hub for tech and startups" },
      { name: "Montreal", blurb: "a growing hub for tech, gaming, and creative industries" },
      { name: "Calgary", blurb: "a major hub for energy and enterprise business in Western Canada" },
      { name: "Edmonton", blurb: "a growing business hub in Alberta" },
      { name: "Ottawa", blurb: "Canada's capital and a growing tech and government-services hub" },
    ],
  },
  {
    code: "in",
    country: "India",
    region: "Asia Pacific",
    cities: [
      { name: "Bangalore", blurb: "India's leading technology and startup hub" },
      { name: "Hyderabad", blurb: "a major hub for IT services and enterprise technology" },
      { name: "Pune", blurb: "a fast-growing hub for IT and manufacturing" },
      { name: "Chennai", blurb: "a major hub for IT services and manufacturing in South India" },
      { name: "Noida", blurb: "a growing hub for IT and business process outsourcing" },
      { name: "Gurgaon", blurb: "a leading corporate and technology hub in the Delhi NCR region" },
      { name: "Mumbai", blurb: "India's financial capital and a major commercial hub" },
      { name: "Chandigarh", blurb: "a growing IT and business hub in North India" },
      { name: "Delhi", blurb: "India's capital and a major business and commercial center" },
      { name: "Kolkata", blurb: "a historic commercial hub in Eastern India" },
    ],
  },
  {
    code: "au",
    country: "Australia",
    region: "Asia Pacific",
    cities: [
      { name: "Melbourne", blurb: "a leading hub for business, tech, and creative industries" },
      { name: "Sydney", blurb: "Australia's largest business and financial hub" },
      { name: "Brisbane", blurb: "a fast-growing hub for business and technology in Queensland" },
      { name: "Perth", blurb: "a major hub for business in Western Australia" },
      { name: "Adelaide", blurb: "a growing hub for tech and innovation in South Australia" },
      { name: "Canberra", blurb: "Australia's capital and a hub for government and enterprise services" },
    ],
  },
  {
    code: "sa",
    country: "Middle East",
    region: "Asia & Africa",
    cities: [
      { name: "Riyadh", blurb: "Saudi Arabia's capital and a fast-growing hub for business and digital transformation" },
      { name: "Dubai", blurb: "a leading global hub for business, trade, and innovation" },
      { name: "Kuwait", blurb: "a major commercial hub in the Gulf region" },
      { name: "Qatar", blurb: "a fast-growing hub for business and digital transformation in the Gulf" },
      { name: "Abu Dhabi", blurb: "the UAE's capital and a major hub for business and investment" },
      { name: "Egypt", blurb: "a major and fast-growing digital economy in North Africa" },
    ],
  }
];

export const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Flat list of every { citySlug, cityName, countryCode, country, region, blurb }
export const ALL_LOCATIONS = COUNTRIES.flatMap((c) =>
  c.cities.map((city) => ({
    citySlug: slugify(city.name),
    cityName: city.name,
    countryCode: c.code,
    country: c.country,
    region: c.region,
    blurb: city.blurb,
  }))
);

export function getLocation(countryCode, citySlug) {
  return ALL_LOCATIONS.find(
    (l) => l.countryCode === countryCode && l.citySlug === citySlug
  );
}

export function getCountryByCode(code) {
  return COUNTRIES.find((c) => c.code === code);
}
