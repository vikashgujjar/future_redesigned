"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Globe, Building2, Heart } from "lucide-react";
import { SERVICES } from "../data/location-seo/services";
import { TECHNOLOGIES, getTechnologyLocationPath } from "../data/location-seo/technologies";
import { COUNTRIES, ALL_LOCATIONS, slugify } from "../data/location-seo/locations";
import useYearsExperience from "../lib/useYearsExperience";

// Canonical service pages (unchanged, existing routes) → their matching
// entry in the shared services taxonomy, so the SAME slug is used whether a
// visitor is on the original service page or a new location page.
const CANONICAL_SERVICE_LOOKUP = new Map(SERVICES.map((s) => [s.canonicalPath, s]));

const SERVICE_LOCATION_MARKER = "-company-in-";

// Detects which service (if any) the current page is "about", so city links
// can point at the right /{country}/{service}-company-in-{city} page.
// Matches both the original canonical service pages (e.g. /website-design)
// and the new location pages themselves (e.g. /us/seo-company-in-dallas),
// so links stay correct while browsing between location pages too.
function detectActiveService(pathname) {
  const canonical = CANONICAL_SERVICE_LOOKUP.get(pathname);
  if (canonical) return canonical;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 2) {
    const idx = segments[1].indexOf(SERVICE_LOCATION_MARKER);
    if (idx !== -1) {
      const serviceSlug = segments[1].slice(0, idx);
      return SERVICES.find((s) => s.slug === serviceSlug) || null;
    }
  }
  return null;
}

// Canonical technology pages (unchanged, existing routes) → their matching
// entry in the shared technologies taxonomy.
const CANONICAL_TECH_LOOKUP = new Map(TECHNOLOGIES.map((t) => [t.canonicalPath, t]));

// Every service-location path, so a technology keyword slug that happens to
// collide with one (e.g. "ios-app-development-company" is produced by both
// the "ios-app-development" service and the "swift-app-development"
// technology) never gets registered here — that path is a service page.
const SERVICE_LOCATION_PATHS = new Set();
for (const service of SERVICES) {
  for (const location of ALL_LOCATIONS) {
    SERVICE_LOCATION_PATHS.add(`/${location.countryCode}/${service.slug}${SERVICE_LOCATION_MARKER}${location.citySlug}`);
  }
}

// Technology location pages don't use a hand-rolled URL marker — their
// slugs come from getTechnologyLocationPath() (technologies.js), the same
// authoritative source the route itself resolves against. Precomputing a
// pathname → technology lookup here means detection can never drift out of
// sync with what that function actually generates.
const TECH_LOCATION_LOOKUP = new Map();
for (const technology of TECHNOLOGIES) {
  for (const location of ALL_LOCATIONS) {
    const path = getTechnologyLocationPath(technology, location.countryCode, location.citySlug);
    if (path && !SERVICE_LOCATION_PATHS.has(path)) TECH_LOCATION_LOOKUP.set(path, technology);
  }
}

// Detects which technology (if any) the current page is "about" — mirrors
// detectActiveService, matching both canonical technology pages (e.g.
// /reactjs-vuejs-nodejs-development-services) and technology location pages
// themselves (e.g. /us/react-js-development-company-in-new-york).
function detectActiveTechnology(pathname) {
  return CANONICAL_TECH_LOOKUP.get(pathname) || TECH_LOCATION_LOOKUP.get(pathname) || null;
}

// Visual-only accent colors + HQ/featured flags, keyed by country code.
// Kept local to this component since they're presentation, not SEO data.
const COUNTRY_STYLE = {
  us: { fi: "#2dd4bf", ti: "#06b6d4" },
  ca: { fi: "#6366f1", ti: "#8b5cf6" },
  in: { fi: "#0d9488", ti: "#4338ca", hq: true, featuredCity: "Gurgaon" },
  au: { fi: "#0ea5e9", ti: "#2dd4bf" },
  ae: { fi: "#8b5cf6", ti: "#6366f1" },
  sa: { fi: "#8b5cf6", ti: "#6366f1" },
  kw: { fi: "#8b5cf6", ti: "#6366f1" },
  qa: { fi: "#8b5cf6", ti: "#6366f1" },
  eg: { fi: "#8b5cf6", ti: "#6366f1" },
};

const locations = COUNTRIES.map((c) => ({
  code: c.code,
  country: c.country,
  region: c.region,
  cities: c.cities.map((city) => city.name),
  ...COUNTRY_STYLE[c.code],
}));

export default function LocationSection() {
  const pathname = usePathname();
  const activeService = detectActiveService(pathname);
  const activeTechnology = !activeService ? detectActiveTechnology(pathname) : null;
  const activeName = activeService?.name || activeTechnology?.name || null;
  const yearsExperience = useYearsExperience();

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 md:px-10 xl:px-24"
      style={{ background: "#f8faff" }}
    >
      <style>{`
        .loc-dot {
          background-image: radial-gradient(circle, rgba(99,102,241,.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .loc-arena-dot {
          background-image: radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .loc-card {
          transition: transform .24s ease, box-shadow .24s ease;
        }
        .loc-card:hover {
          transform: translateY(-6px);
        }
        @keyframes locSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        .loc-globe-spin { animation: locSpin 18s linear infinite; transform-origin: center; }
        @keyframes locHeartBeat {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.28); }
        }
        .loc-heart { animation: locHeartBeat 1.6s ease-in-out infinite; display: inline-flex; }
        @keyframes locPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .6; transform: scale(1.35); }
        }
        .loc-hq-dot { animation: locPulse 2s ease-in-out infinite; }
        .loc-city-link:hover {
          border-color: rgba(45,212,191,.55) !important;
          background: rgba(45,212,191,.10) !important;
        }
      `}</style>

      {/* dot grid */}
      <div className="loc-dot absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ambient glows */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.08) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.08) 0%,transparent 65%)" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ══ HEADING ══════════════════════════════ */}
        <div className="text-center mb-10">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse flex-shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
              style={{ fontFamily: "'Inter',sans-serif" }}>
              {activeName ? `${activeName} — Delivered Worldwide` : "Our Global Presence"}
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Poppins',sans-serif" }}>
            {activeName ? (
              <>
                {activeName}{" "}
                <span className="bg-gradient-to-r from-teal-400 to-indigo-700 bg-clip-text text-transparent">
                  for Clients Worldwide
                </span>
              </>
            ) : (
              <>
                Growing Businesses{" "}
                <span className="bg-gradient-to-r from-teal-400 to-indigo-700 bg-clip-text text-transparent">
                  for {yearsExperience} Years
                </span>
              </>
            )}
          </h2>

          <p className="flex items-center justify-center gap-2 text-sm text-gray-500"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            Made with{" "}
            <span className="loc-heart text-red-500"><Heart size={14} fill="currentColor" /></span>
            {" "}in 50 cities around the world
          </p>

          <div className="w-14 h-1 rounded-full mx-auto mt-5"
            style={{ background: "linear-gradient(to right,#2dd4bf,#6366f1)" }} />
        </div>

        {/* ══ COUNTRY CARDS GRID ═══════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="loc-card max-h-[350px] relative rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "linear-gradient(145deg,#070d1a 0%,#0c1330 100%)",
                border: loc.hq
                  ? `1px solid ${loc.fi}55`
                  : "1px solid rgba(255,255,255,.07)",
                boxShadow: loc.hq
                  ? `0 0 0 1px ${loc.fi}22, 0 20px 50px rgba(0,0,0,.40), 0 0 36px ${loc.fi}18`
                  : "0 8px 32px rgba(0,0,0,.28)",
              }}
            >
              {/* arena dot grid */}
              <div className="loc-arena-dot absolute inset-0 pointer-events-none" />

              {/* top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(to right,${loc.fi},${loc.ti})` }} />

              {/* corner glow TL */}
              <div className="absolute -top-14 -left-14 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle,${loc.fi}22 0%,transparent 65%)` }} />
              {/* corner glow BR */}
              <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle,${loc.ti}18 0%,transparent 65%)` }} />

              {/* HQ badge */}
              {loc.hq && (
                <div
                  className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: `${loc.fi}22`, border: `1px solid ${loc.fi}55` }}
                >
                  <span className="loc-hq-dot w-1.5 h-1.5 rounded-full" style={{ background: loc.fi }} />
                  <span
                    className="text-[9px] font-black uppercase tracking-widest"
                    style={{ color: loc.fi, fontFamily: "'Inter',sans-serif" }}>
                    HQ
                  </span>
                </div>
              )}

              <div className="relative z-10 p-5 flex flex-col gap-4 flex-1">

                {/* flag + region + name */}
                <div>
                  <img
                    src={`https://flagcdn.com/w80/${loc.code}.png`}
                    alt={loc.country}
                    width={36}
                    height={36}
                    className="mb-3 block min-h-[36px] object-cover object-top-left"
                    style={{ borderRadius: 6, boxShadow: "0 2px 10px rgba(0,0,0,.45)" }}
                  />
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[.16em] mb-0.5"
                    style={{ fontFamily: "'Inter',sans-serif", color: loc.fi }}>
                    {loc.region}
                  </p>
                  <h3
                    className="text-[17px] font-bold text-white leading-tight"
                    style={{ fontFamily: "'Poppins',sans-serif" }}>
                    {loc.country}
                  </h3>
                </div>

                {/* gradient divider */}
                <div className="w-8 h-[2px] rounded-full -mt-1"
                  style={{ background: `linear-gradient(to right,${loc.fi},${loc.ti})` }} />

                {/* stats row */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${loc.fi}20`, border: `1px solid ${loc.fi}40` }}>
                      <Building2 size={11} style={{ color: loc.fi }} />
                    </div>
                    <span
                      className="text-[11px] font-semibold"
                      style={{ color: "rgba(255,255,255,.50)", fontFamily: "'Inter',sans-serif" }}>
                      {loc.cities.length} {loc.cities.length === 1 ? "City" : "Cities"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${loc.ti}20`, border: `1px solid ${loc.ti}40` }}>
                      <Globe size={11} className="loc-globe-spin" style={{ color: loc.ti }} />
                    </div>
                    <span
                      className="text-[11px] font-semibold"
                      style={{ color: "rgba(255,255,255,.50)", fontFamily: "'Inter',sans-serif" }}>
                      Active
                    </span>
                  </div>
                </div>

                {/* city grid */}
                <div className="grid grid-cols-2 max-h-[120px] overflow-auto gap-1.5 mt-0 scrollbar-hide">
                  {loc.cities.map((city, ci) => {
                    const isFeatured = city === loc.featuredCity;
                    const href = activeService
                      ? `/${loc.code}/${activeService.slug}${SERVICE_LOCATION_MARKER}${slugify(city)}`
                      : activeTechnology
                      ? getTechnologyLocationPath(activeTechnology, loc.code, slugify(city))
                      : null;

                    const cityTile = (
                      <>
                        <MapPin
                          size={10}
                          className="flex-shrink-0"
                          style={{ color: isFeatured ? loc.fi : "rgba(255,255,255,.32)" }}
                        />
                        <span
                          className="text-[11px] leading-tight"
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            color: isFeatured ? "#ffffff" : "rgba(255,255,255,.60)",
                            fontWeight: isFeatured ? 700 : 500,
                          }}>
                          {city}
                        </span>
                      </>
                    );

                    const tileStyle = {
                      background: isFeatured
                        ? `linear-gradient(135deg,${loc.fi}30,${loc.ti}20)`
                        : "rgba(255,255,255,.045)",
                      border: isFeatured
                        ? `1px solid ${loc.fi}55`
                        : "1px solid rgba(255,255,255,.07)",
                      boxShadow: isFeatured ? `0 2px 12px ${loc.fi}20` : "none",
                    };

                    return href ? (
                      <Link
                        key={ci}
                        href={href}
                        title={`${activeName} in ${city}`}
                        className="loc-city-link flex items-center gap-1.5 px-2.5 py-2 rounded-xl transition-colors duration-200"
                        style={tileStyle}
                      >
                        {cityTile}
                      </Link>
                    ) : (
                      <div
                        key={ci}
                        title={city}
                        className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl"
                        style={tileStyle}
                      >
                        {cityTile}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
