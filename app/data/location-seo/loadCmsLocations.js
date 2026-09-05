import { COUNTRIES, ALL_LOCATIONS, slugify } from "./locations";
import { SERVICES } from "./services";
import { getLocationCities, getLocationServicesCatalog, getLocationOverrides } from "../../lib/cms";

/* Merges the site's original, unchanged ~1,900-page dataset with Laravel's
   Location Cities. The original ~90 cities are also seeded into Location
   Cities (LocationCatalogSeeder) with identical values, so by default this
   changes nothing — but once an admin edits one of those seeded rows (name,
   blurb, region), that edit now reaches every page built for that city,
   because a CMS row whose country+city matches an existing static entry
   OVERRIDES that entry's editable fields instead of being dropped as a
   duplicate. A CMS row with no static match is a brand-new location,
   appended as-is. */
export async function loadMergedLocations() {
  const cmsCities = await getLocationCities();
  const cmsByKey = new Map(cmsCities.map((c) => [`${c.countryCode}/${c.citySlug}`, c]));

  const merged = ALL_LOCATIONS.map((loc) => {
    const key = `${loc.countryCode}/${loc.citySlug}`;
    const cms = cmsByKey.get(key);
    if (!cms) return loc;
    cmsByKey.delete(key);
    return { ...loc, cityName: cms.cityName, country: cms.country, region: cms.region, blurb: cms.blurb };
  });

  return [...merged, ...cmsByKey.values()];
}

export async function loadMergedServices() {
  const cmsServices = await getLocationServicesCatalog();
  const existingSlugs = new Set(SERVICES.map((s) => s.slug));
  const merged = cmsServices.filter((s) => !existingSlugs.has(s.slug));
  return [...SERVICES, ...merged];
}

/* { "in/chandigarh/website-design": {...override} } for O(1) lookup. */
export async function loadOverridesMap() {
  const overrides = await getLocationOverrides();
  return new Map(overrides.map((o) => [`${o.country_code}/${o.city_slug}/${o.service_slug}`, o]));
}

/* Countries grouped with their cities, for LocationSection.js's "global
   presence" homepage widget — same override-on-match precedence as
   loadMergedLocations() above: a Location City an admin edited shows its
   edited name here too, a brand-new country/city gets its own card, and
   everything else renders exactly as the original static dataset always
   has. Every city carries `slug` explicitly (not left for the caller to
   derive) so a renamed or CMS-added city still links to the right page. */
export async function loadMergedCountries() {
  const cmsCities = await getLocationCities();
  const cmsByKey = new Map(cmsCities.map((c) => [`${c.countryCode}/${c.citySlug}`, c]));

  const countries = COUNTRIES.map((c) => ({
    code: c.code,
    country: c.country,
    region: c.region,
    cities: c.cities.map((city) => {
      const slug = slugify(city.name);
      const cms = cmsByKey.get(`${c.code}/${slug}`);
      if (!cms) return { name: city.name, slug };
      cmsByKey.delete(`${c.code}/${slug}`);
      return { name: cms.cityName, slug: cms.citySlug };
    }),
  }));
  const byCode = new Map(countries.map((c) => [c.code, c]));

  for (const city of cmsByKey.values()) {
    let country = byCode.get(city.countryCode);
    if (!country) {
      country = { code: city.countryCode, country: city.country, region: city.region, cities: [] };
      byCode.set(city.countryCode, country);
      countries.push(country);
    }
    country.cities.push({ name: city.cityName, slug: city.citySlug });
  }

  return countries;
}
