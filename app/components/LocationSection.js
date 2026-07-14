import { MapPin, Globe, Building2, Heart } from "lucide-react";

const locations = [
  {
    code: "us",
    country: "United States",
    region: "North America",
    cities: [
      "New York", "Phoenix", "Dallas", "Miami", "Las Vegas", "San Francisco",
      "Los Angeles", "Houston", "Seattle", "San Diego", "Denver", "Atlanta",
      "New Jersey", "Chicago", "Cuba",
    ],
    fi: "#2dd4bf", ti: "#06b6d4",
  },
  {
    code: "ca",
    country: "Canada",
    region: "North America",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa"],
    fi: "#6366f1", ti: "#8b5cf6",
  },
  {
    code: "in",
    country: "India",
    region: "Asia Pacific",
    cities: [
      "Bangalore", "Hyderabad", "Pune", "Chennai", "Noida", "Gurgaon",
      "Mumbai", "Chandigarh", "Delhi", "Kolkata",
    ],
    featuredCity: "Gurgaon",
    hq: true,
    fi: "#0d9488", ti: "#4338ca",
  },
  {
    code: "au",
    country: "Australia",
    region: "Asia Pacific",
    cities: ["Melbourne", "Sydney", "Brisbane", "Perth", "Adelaide", "Canberra"],
    fi: "#0ea5e9", ti: "#2dd4bf",
  },
  {
    code: "sa",
    country: "Middle East",
    region: "Asia & Africa",
    cities: ["Riyadh", "Dubai", "Dubai SEO", "Kuwait", "Qatar", "Abu Dhabi", "Egypt"],
    fi: "#8b5cf6", ti: "#6366f1",
  },
];

export default function LocationSection() {
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
              Our Global Presence
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Poppins',sans-serif" }}>
            Growing Businesses{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 bg-clip-text text-transparent">
              Since 2001
            </span>
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
                      {loc.cities.length} Cities
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
                    return (
                      <div
                        key={ci}
                        className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl"
                        style={{
                          background: isFeatured
                            ? `linear-gradient(135deg,${loc.fi}30,${loc.ti}20)`
                            : "rgba(255,255,255,.045)",
                          border: isFeatured
                            ? `1px solid ${loc.fi}55`
                            : "1px solid rgba(255,255,255,.07)",
                          boxShadow: isFeatured ? `0 2px 12px ${loc.fi}20` : "none",
                        }}
                      >
                        <MapPin
                          size={10}
                          className="flex-shrink-0"
                          style={{ color: isFeatured ? loc.fi : "rgba(255,255,255,.32)" }}
                        />
                        <span
                          className="text-[11px] leading-tight truncate"
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            color: isFeatured ? "#ffffff" : "rgba(255,255,255,.60)",
                            fontWeight: isFeatured ? 700 : 500,
                          }}>
                          {city}
                        </span>
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
