"use client";
import Image from "next/image";

const IconCheck  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconZap    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconShield = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconStar   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IconLayers = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IconGlobe  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;

const FEAT_ICONS = [<IconCheck/>, <IconZap/>, <IconShield/>, <IconStar/>, <IconLayers/>, <IconGlobe/>];

const FEAT_TILE = [
  "border-teal-200 bg-teal-50 text-teal-600",
  "border-indigo-200 bg-indigo-50 text-indigo-700",
  "border-cyan-200 bg-cyan-50 text-cyan-600",
  "border-violet-200 bg-violet-50 text-violet-700",
  "border-emerald-200 bg-emerald-50 text-emerald-600",
  "border-blue-200 bg-blue-50 text-blue-700",
];

export default function OverviewSectionSplit({
  image,
  imageAlt         = "Service illustration",
  badgeText        = "Who We Are",
  heading          = "Building Digital",
  headingHighlight = "Excellence",
  headingAfter     = "For Modern Brands",
  paragraphs       = [],
  ctaText          = "Get In Touch",
  ctaHref          = "tel:+917056937000",
  since            = "Since 2017",
  trustedLabel     = "Trusted by 500+ Clients",
}) {
  const textParas    = paragraphs.filter(p => typeof p === "string");
  const featureCards = paragraphs.filter(p => typeof p === "object" && p.boldPrefix);

  const introPara = textParas[0];
  const bodyParas = textParas.slice(1);

  const tags = ["Web Development","Mobile Apps","UI/UX Design","Shopify Experts","Next.js & React","Flutter Apps","Laravel Backend","eCommerce Solutions"];

  return (
    <section className="relative overflow-x-clip bg-[linear-gradient(160deg,#f0fbfa_0%,#ffffff_45%,#f1f1fd_100%)] font-[Inter,sans-serif]">

      {/* ── Background details ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(67,56,202,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="pointer-events-none absolute -top-48 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.10),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(67,56,202,0.09),transparent_65%)]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-4 pb-16 pt-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:pb-24 lg:pt-24">

        {/* ════════ LEFT — sticky intro panel (pins until the section ends) ════════ */}
        <div className="h-fit self-start text-center lg:sticky lg:top-24 lg:text-left">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 shadow-[0_2px_12px_rgba(45,212,191,0.12)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-teal-400 to-indigo-700" />
            </span>
            <span className="bg-gradient-to-r from-teal-500 to-indigo-700 bg-clip-text font-[Poppins,sans-serif] text-[10px] font-bold uppercase tracking-[0.22em] text-transparent">
              {badgeText}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 font-[Poppins,sans-serif] text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.14] text-[#0c1230]">
            {heading}{" "}
            {headingHighlight && (
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-indigo-700 bg-clip-text text-transparent">
                {headingHighlight}
              </span>
            )}
            {headingAfter && <> {headingAfter}</>}
          </h2>

          {/* Accent bar */}
          <div className="mx-auto mb-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-400 to-indigo-700 lg:mx-0" />

          {/* Intro paragraph */}
          {introPara && (
            <p className="mx-auto mb-8 max-w-[520px] text-[14.5px] leading-[1.9] text-[#4a5070] lg:mx-0">
              {introPara}
            </p>
          )}

          {/* Stats strip */}
          <div className="mb-8 flex items-center justify-center gap-6 lg:justify-start">
            {[["500+","Clients"],["15+","Yrs Exp"],["98%","Happy"]].map(([val,label], i) => (
              <div key={label} className={`flex flex-col items-center gap-1 lg:items-start ${i > 0 ? "border-l border-indigo-100 pl-6" : ""}`}>
                <span className="bg-gradient-to-r from-teal-500 to-indigo-700 bg-clip-text font-[Poppins,sans-serif] text-2xl font-extrabold leading-none text-transparent">
                  {val}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8b8fa8]">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={ctaHref}
            className="group/cta inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 to-indigo-700 px-8 py-3.5 font-[Poppins,sans-serif] text-[13.5px] font-semibold text-white no-underline shadow-[0_8px_28px_rgba(45,212,191,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(67,56,202,0.35)]"
          >
            {ctaText}
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
              <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Tags — small wrap under CTA */}
          <div className="mt-9 hidden flex-wrap gap-2 lg:flex">
            {tags.slice(0, 6).map((t, i) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white/85 px-3 py-1 font-[Poppins,sans-serif] text-[11px] font-semibold text-[#334155] shadow-[0_2px_8px_rgba(67,56,202,0.06)]"
              >
                <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${i % 2 === 0 ? "bg-teal-400" : "bg-indigo-600"}`} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ════════ RIGHT — flowing content column ════════ */}
        <div>

          {/* Image card */}
          <div className="group relative mb-9 overflow-hidden rounded-3xl border border-white shadow-[0_24px_60px_rgba(12,18,48,0.12)]">
            <div className="relative h-[280px] w-full sm:h-[360px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230]/60 via-transparent to-transparent" />

              {/* Verified chip */}
              <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-2 shadow-[0_4px_18px_rgba(12,18,48,0.18)] backdrop-blur-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-indigo-700">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="font-[Poppins,sans-serif] text-[9.5px] font-bold uppercase tracking-[0.12em] text-indigo-700">
                  Verified Agency
                </span>
              </div>

              {/* Since badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 backdrop-blur-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-indigo-700 text-white">
                  <IconStar/>
                </span>
                <div className="leading-tight">
                  <p className="font-[Poppins,sans-serif] text-[13px] font-extrabold text-white">{since}</p>
                  <p className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-white/70">{trustedLabel}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bulk paragraphs — first one gets a drop cap */}
          {bodyParas.length > 0 && (
            <div className="mb-10 space-y-5">
              {bodyParas.map((para, i) => (
                <p
                  key={i}
                  className={`text-[14px] leading-[1.95] text-[#4a5070] ${
                    i === 0
                      ? "first-letter:float-left first-letter:mr-2.5 first-letter:bg-gradient-to-br first-letter:from-teal-400 first-letter:to-indigo-700 first-letter:bg-clip-text first-letter:font-[Poppins,sans-serif] first-letter:text-[44px] first-letter:font-extrabold first-letter:leading-[0.85] first-letter:text-transparent"
                      : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Feature timeline — vertical rows with connector line */}
          {featureCards.length > 0 && (
            <div className="relative mb-10 space-y-4 pl-2">
              {/* Connector line */}
              <span className="absolute bottom-5 left-[26px] top-5 w-px bg-gradient-to-b from-teal-300 via-indigo-300 to-indigo-200" />
              {featureCards.map((p, i) => (
                <div
                  key={i}
                  className="group/row relative flex items-start gap-4 rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-[0_4px_20px_rgba(12,18,48,0.06)] backdrop-blur-md transition-all duration-200 hover:translate-x-1 hover:shadow-[0_12px_30px_rgba(12,18,48,0.11)]"
                >
                  <span className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border ${FEAT_TILE[i % FEAT_TILE.length]}`}>
                    {FEAT_ICONS[i % FEAT_ICONS.length]}
                  </span>
                  <div>
                    <p className="mb-1 font-[Poppins,sans-serif] text-[13.5px] font-bold leading-tight text-[#1e2a4a]">{p.boldPrefix}</p>
                    {p.text && <p className="text-[12.5px] leading-[1.8] text-[#6b7280]">{p.text}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tags on mobile (left column hides them) */}
          <div className="flex flex-wrap justify-center gap-2 lg:hidden">
            {tags.map((t, i) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white/85 px-3 py-1 font-[Poppins,sans-serif] text-[11px] font-semibold text-[#334155] shadow-[0_2px_8px_rgba(67,56,202,0.06)]"
              >
                <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${i % 2 === 0 ? "bg-teal-400" : "bg-indigo-600"}`} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom brand hairline */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent opacity-50" />
    </section>
  );
}