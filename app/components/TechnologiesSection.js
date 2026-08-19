"use client";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Icon CDNs used:
   - https://cdn.simpleicons.org/{slug}          → brand-colored SVG
   - https://cdn.simpleicons.org/{slug}/white    → white SVG (for logos that are black by default)
   - devicon (jsdelivr) for brands missing from simple-icons (AWS, Oracle, SQL Server)
   If any icon fails to load, the pill automatically falls back to a monogram tile.
   ───────────────────────────────────────────────────────────── */
const SI = (slug) => `https://cdn.simpleicons.org/${slug}`;
const DEV = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const DEFAULT_CATEGORIES = [
  {
    title: "Front End",
    techs: [
      { name: "React.js",   icon: SI("react") },
      { name: "Next.js",    icon: SI("nextdotjs/white") },
      { name: "Angular",    icon: SI("angular") },
      { name: "Vue.js",     icon: SI("vuedotjs") },
      { name: "Svelte",     icon: SI("svelte") },
      { name: "TypeScript", icon: SI("typescript") },
      { name: "JavaScript", icon: SI("javascript") },
      { name: "HTML/CSS",   icon: SI("html5") },
      { name: "PWA",        icon: SI("pwa") },
    ],
  },
  {
    title: "Back End",
    techs: [
      { name: "Node.js",    icon: SI("nodedotjs") },
      { name: "NestJS",     icon: SI("nestjs") },
      { name: "PHP",        icon: SI("php") },
      { name: "Laravel",    icon: SI("laravel") },
      { name: "Python",     icon: SI("python") },
      { name: "Django",     icon: SI("django/white") },
      { name: "Flask",      icon: SI("flask/white") },
      { name: "Express.js", icon: SI("express/white") },
      { name: ".NET",       icon: SI("dotnet") },
      { name: "Java Spring",icon: SI("spring") },
      { name: "Ruby",       icon: SI("ruby") },
    ],
  },
  {
    title: "Mobile Apps",
    techs: [
      { name: "Flutter",      icon: SI("flutter") },
      { name: "React Native", icon: SI("react") },
      { name: "Android",      icon: SI("android") },
      { name: "iOS",          icon: SI("apple/white") },
      { name: "Kotlin",       icon: SI("kotlin") },
      { name: "Swift",        icon: SI("swift") },
    ],
  },
  {
    title: "Database Development",
    techs: [
      { name: "MySQL",         icon: SI("mysql") },
      { name: "PostgreSQL",    icon: SI("postgresql") },
      { name: "MongoDB",       icon: SI("mongodb") },
      { name: "Redis",         icon: SI("redis") },
      { name: "MariaDB",       icon: SI("mariadb") },
      { name: "SQL Server",    icon: DEV("microsoftsqlserver/microsoftsqlserver-plain.svg") },
      { name: "Oracle DB",     icon: DEV("oracle/oracle-original.svg") },
      { name: "Elasticsearch", icon: SI("elasticsearch") },
      { name: "Cassandra",     icon: SI("apachecassandra") },
    ],
  },
  {
    title: "DevOps & Cloud",
    techs: [
      { name: "Docker",         icon: SI("docker") },
      { name: "Kubernetes",     icon: SI("kubernetes") },
      { name: "AWS",            icon: DEV("amazonwebservices/amazonwebservices-original-wordmark.svg") },
      { name: "Google Cloud",   icon: SI("googlecloud") },
      { name: "Github Actions", icon: SI("githubactions") },
      { name: "Grafana",        icon: SI("grafana") },
      { name: "Nginx",          icon: SI("nginx") },
      { name: "Vercel",         icon: SI("vercel/white") },
    ],
  },
  {
    title: "eCommerce & CMS",
    techs: [
      { name: "Shopify",     icon: SI("shopify") },
      { name: "WooCommerce", icon: SI("woocommerce") },
      { name: "WordPress",   icon: SI("wordpress") },
      { name: "Magento",     icon: SI("magento") },
      { name: "Strapi",      icon: SI("strapi") },
      { name: "Sanity",      icon: SI("sanity") },
    ],
  },
];

const TILE_STYLES = [
  "bg-teal-400/10 text-teal-300 border-teal-400/25",
  "bg-indigo-400/10 text-indigo-300 border-indigo-400/25",
  "bg-cyan-400/10 text-cyan-300 border-cyan-400/25",
  "bg-violet-400/10 text-violet-300 border-violet-400/25",
];

const monogram = (name) => {
  const clean = name.replace(/[^a-zA-Z0-9 ]/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return clean.slice(0, 2).charAt(0).toUpperCase() + clean.slice(1, 2).toLowerCase();
};

/* Icon with automatic monogram fallback if the CDN image fails */
function TechIcon({ tech, ti }) {
  const [failed, setFailed] = useState(false);

  if (!tech.icon || failed) {
    return (
      <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border font-[Poppins,sans-serif] text-[9px] font-extrabold ${TILE_STYLES[ti % TILE_STYLES.length]}`}>
        {monogram(tech.name)}
      </span>
    );
  }

  return (
    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
      <img
        src={tech.icon}
        alt={tech.name}
        width={16}
        height={16}
        loading="lazy"
        className="h-4 w-4 object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export default function TechnologiesSectionDark({
  badgeText = "Our Tech Stack",
  heading = "Technologies",
  headingHighlight = "We Use",
  description = "We pick the right tool for every project — modern, battle-tested technologies that keep your product fast, secure, and easy to scale.",
  categories = DEFAULT_CATEGORIES,
}) {
  if (!categories || categories.length === 0) return null;

  /* Accept both ["React"] and [{ name, icon }] formats */
  const normalized = categories.map((cat) => ({
    ...cat,
    techs: cat.techs.map((t) => (typeof t === "string" ? { name: t } : t)),
  }));

  return (
    <section className="relative overflow-x-clip bg-[linear-gradient(160deg,#070b22_0%,#0b102c_45%,#0e0e33_100%)] font-[Inter,sans-serif]">

      {/* ── Background details ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="pointer-events-none absolute -top-48 right-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.10),transparent_65%)] animate-[pulse_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-48 left-1/5 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_65%)] animate-[pulse_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 pb-16 pt-16 sm:px-8 lg:pb-20 lg:pt-20">

        {/* ════════ Header — left aligned like the reference ════════ */}
        <div className="mb-12 max-w-[720px]">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-teal-400/25 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600" />
            </span>
            <span className="bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text font-[Poppins,sans-serif] text-[10px] font-bold uppercase tracking-[0.22em] text-transparent">
              {badgeText}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 font-[Poppins,sans-serif] text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.1] text-white">
            {heading}{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>

          {/* Accent bar */}
          <div className="mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-400 to-indigo-700" />

          {description && (
            <p className="max-w-[600px] text-[14.5px] leading-[1.9] text-[#9aa3c7]">
              {description}
            </p>
          )}
        </div>

        {/* ════════ All categories open at once — 2-column grid ════════ */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          {normalized.map((cat) => (
            <div key={cat.title}>

              {/* Category title */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-7 w-[4px] flex-shrink-0 rounded-full bg-gradient-to-b from-teal-400 to-indigo-600" />
                <h3 className="font-[Poppins,sans-serif] text-xl font-bold text-white sm:text-2xl">
                  {cat.title}
                </h3>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 font-[Poppins,sans-serif] text-[10px] font-bold text-teal-300">
                  {cat.techs.length}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.techs.map((tech, ti) => (
                  <span
                    key={tech.name}
                    className="inline-flex cursor-default items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-1.5 pr-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(45,212,191,0.18)]"
                  >
                    <TechIcon tech={tech} ti={ti} />
                    <span className="font-[Poppins,sans-serif] text-[12.5px] font-semibold text-[#dbe1f7]">
                      {tech.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom brand hairline */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
    </section>
  );
}