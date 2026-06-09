"use client";
import Image from "next/image";

const IconCheck  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconZap    = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconShield = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconStar   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IconLayers = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IconGlobe  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
const IconUsers  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;

const FEAT_ICONS   = [<IconCheck/>,<IconZap/>,<IconShield/>,<IconStar/>,<IconLayers/>,<IconGlobe/>];
const FEAT_COLORS  = [
  { icon:"#2dd4bf", bg:"rgba(45,212,191,.10)",  border:"rgba(45,212,191,.22)"  },
  { icon:"#6366f1", bg:"rgba(99,102,241,.10)",   border:"rgba(99,102,241,.22)"  },
  { icon:"#a855f7", bg:"rgba(168,85,247,.10)",   border:"rgba(168,85,247,.22)"  },
  { icon:"#06b6d4", bg:"rgba(6,182,212,.10)",    border:"rgba(6,182,212,.22)"   },
  { icon:"#8b5cf6", bg:"rgba(139,92,246,.10)",   border:"rgba(139,92,246,.22)"  },
  { icon:"#2dd4bf", bg:"rgba(45,212,191,.10)",   border:"rgba(45,212,191,.22)"  },
];

export default function OverviewSectionStacked({
  image,
  imageAlt        = "Service illustration",
  badgeText       = "Who We Are",
  heading         = "Building Digital",
  headingHighlight= "Excellence",
  headingAfter    = "For Modern Brands",
  paragraphs      = [],
  ctaText         = "Get In Touch",
  ctaHref         = "tel:+917056937000",
  since           = "Since 2017",
  trustedLabel    = "Trusted by 500+ Clients",
}) {
  const textParas    = paragraphs.filter(p => typeof p === "string");
  const featureCards = paragraphs.filter(p => typeof p === "object" && p.boldPrefix);

  return (
    <section className="ovS-root relative overflow-hidden"
      style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 45%,#f2eeff 100%)", fontFamily:"'Inter',sans-serif" }}>
      <style>{`
        @keyframes ovS-glow   { 0%,100%{opacity:.55} 50%{opacity:1} }
        @keyframes ovS-bar    { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes ovS-fadeU  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ovS-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes ovS-ping   { 75%,100%{transform:scale(2.2);opacity:0} }
        @keyframes ovS-shimmer{ 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes ovS-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .ovS-dotgrid {
          background-image: radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px);
          background-size: 30px 30px;
        }
        .ovS-bar    { animation:ovS-bar .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:left }
        .ovS-ping::after { content:''; position:absolute; inset:0; border-radius:50%; background:inherit; animation:ovS-ping 2.2s ease-out infinite; }
        .ovS-hl {
          background:linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7,#2dd4bf);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:ovS-shimmer 4s linear infinite;
        }

        /* ── Stacked image panel ── */
        .ovS-img-wrap {
          position:relative;
          border-radius:24px;
          overflow:hidden;
          box-shadow: 0 0 0 1.5px rgba(45,212,191,.20), 0 28px 72px rgba(6,11,30,.16), 0 0 80px rgba(45,212,191,.08);
        }
        .ovS-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(180deg,transparent 40%,rgba(6,11,30,.55) 100%);
        }

        /* ── Scrolling tag strip ── */
        .ovS-strip { overflow:hidden; white-space:nowrap; }
        .ovS-strip-track { display:inline-flex; animation:ovS-scroll 22s linear infinite; }
        .ovS-strip-track:hover { animation-play-state:paused; }
        .ovS-tag {
          display:inline-flex; align-items:center; gap:7px;
          margin: 0 6px;
          background:rgba(255,255,255,.82); backdrop-filter:blur(10px);
          border:1px solid rgba(99,102,241,.14);
          border-radius:50px; padding:7px 16px;
          font-size:12px; font-weight:600; color:#334155;
          font-family:'Poppins',sans-serif;
          white-space:nowrap;
          box-shadow:0 2px 10px rgba(99,102,241,.08);
        }
        .ovS-tag-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }

        /* ── Feature pill cards ── */
        .ovS-pill {
          display:flex; align-items:flex-start; gap:12px;
          background:rgba(255,255,255,.80); backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,.90);
          border-radius:16px; padding:16px 18px;
          box-shadow:0 4px 20px rgba(6,11,30,.07);
          transition:transform .22s, box-shadow .22s;
          position:relative; overflow:hidden;
        }
        .ovS-pill::before {
          content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
          background:linear-gradient(180deg,#2dd4bf,#6366f1);
          transform:scaleY(0); transform-origin:top;
          transition:transform .3s cubic-bezier(.22,1,.36,1);
        }
        .ovS-pill:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(6,11,30,.11); }
        .ovS-pill:hover::before { transform:scaleY(1); }

        /* ── CTA ── */
        .ovS-cta {
          background:linear-gradient(135deg,#2dd4bf,#6366f1);
          border-radius:50px; color:#fff !important; text-decoration:none !important;
          box-shadow:0 6px 28px rgba(45,212,191,.30);
          transition:transform .22s, box-shadow .22s;
          position:relative; overflow:hidden;
        }
        .ovS-cta:hover { transform:translateY(-2px); box-shadow:0 14px 40px rgba(45,212,191,.40); }

        /* ── Stat chip ── */
        .ovS-stat {
          background:rgba(255,255,255,.88); backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,.85);
          border-radius:50px;
          box-shadow:0 3px 14px rgba(6,11,30,.08);
          transition:transform .2s, box-shadow .2s;
        }
        .ovS-stat:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(99,102,241,.14); }

        /* ── Floating badge ── */
        .ovS-badge {
          background:rgba(255,255,255,.90); backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,.85);
          border-radius:16px;
          box-shadow:0 8px 28px rgba(6,11,30,.12);
          animation:ovS-float 5s ease-in-out infinite;
        }

        @media(prefers-reduced-motion:reduce){ * { animation:none !important; transition:none !important; } }
      `}</style>

      {/* Background */}
      <div className="ovS-dotgrid absolute inset-0 pointer-events-none"/>
      <div className="absolute -top-60 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(45,212,191,.06),transparent 65%)" }}/>
      <div className="absolute -bottom-60 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }}/>
      <div className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{ background:"linear-gradient(90deg,transparent,#2dd4bf 30%,#6366f1 70%,transparent)", animation:"ovS-glow 3s ease-in-out infinite" }}/>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 xl:px-12 pt-16 pb-0">

        {/* ── TOP: Badge + Heading + Stats ─────────────────── */}
        <div className="flex flex-col items-center text-center mb-10">

          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
            style={{ background:"rgba(45,212,191,.08)", border:"1px solid rgba(45,212,191,.24)" }}>
            <span className="relative ovS-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }}/>
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontFamily:"'Poppins',sans-serif" }}>
              {badgeText}
            </span>
          </div>

          <h2 className="font-bold leading-[1.13] mb-3"
            style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.9rem,4vw,3.1rem)" }}>
            {heading}{" "}
            {headingHighlight && <span className="ovS-hl">{headingHighlight}</span>}
            {headingAfter && <> {headingAfter}</>}
          </h2>

          <div className="ovS-bar h-[3px] w-16 rounded-full mx-auto mb-6"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1)" }}/>

          {textParas.length > 0 && (
            <p className="text-[14.5px] leading-[1.9] max-w-[640px] mb-6" style={{ color:"#4a5070" }}>
              {textParas[0]}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center gap-3 flex-wrap justify-center mb-10">
            <div className="ovS-stat inline-flex items-center gap-2 px-4 py-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", color:"#fff" }}>
                <IconStar/>
              </div>
              <span className="text-[12px] font-semibold" style={{ color:"#334155", fontFamily:"'Poppins',sans-serif" }}>{since}</span>
            </div>
            <div className="w-px h-4" style={{ background:"rgba(99,102,241,.2)" }}/>
            <div className="ovS-stat inline-flex items-center gap-2 px-4 py-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)", color:"#fff" }}>
                <IconUsers/>
              </div>
              <span className="text-[12px] font-semibold" style={{ color:"#334155", fontFamily:"'Poppins',sans-serif" }}>{trustedLabel}</span>
            </div>
          </div>
        </div>

        {/* ── STACKED IMAGE — full width ────────────────────── */}
        <div className="ovS-img-wrap w-full" style={{ height:"clamp(320px,48vw,580px)" }}>
          <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover object-center"/>
          <div className="ovS-img-overlay"/>

          {/* Floating badge bottom-left */}
          <div className="ovS-badge absolute bottom-5 left-5 z-20 flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", color:"#fff" }}>
              <IconStar/>
            </div>
            <div>
              <p className="font-extrabold text-[13px] leading-none" style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif" }}>{since}</p>
              <p className="text-[9.5px] tracking-[.07em] uppercase font-semibold mt-0.5" style={{ color:"#6b7280" }}>{trustedLabel}</p>
            </div>
          </div>

          {/* Verified chip top-right */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 rounded-full px-3 py-2"
            style={{ background:"rgba(255,255,255,.90)", backdropFilter:"blur(12px)", border:"1px solid rgba(99,102,241,.20)", boxShadow:"0 4px 18px rgba(99,102,241,.14)", animation:"ovS-float 6s ease-in-out infinite 1s" }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)", color:"#fff" }}>
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-[9.5px] font-bold uppercase tracking-[.12em]"
              style={{ color:"#6366f1", fontFamily:"'Poppins',sans-serif" }}>Verified Agency</span>
          </div>

          {/* Sparkles */}
          <svg className="absolute top-[18%] left-[8%] pointer-events-none" width="16" height="16" viewBox="0 0 36 36" fill="none" style={{ opacity:.5, animation:"ovS-float 5s ease-in-out infinite" }}>
            <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#2dd4bf"/>
          </svg>
          <svg className="absolute bottom-[22%] right-[10%] pointer-events-none" width="10" height="10" viewBox="0 0 36 36" fill="none" style={{ opacity:.4, animation:"ovS-float 7s ease-in-out infinite 1.5s" }}>
            <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#a855f7"/>
          </svg>
        </div>

        {/* ── SCROLLING TAGS STRIP ──────────────────────────── */}
        <div className="ovS-strip py-5 -mx-4 sm:-mx-8 xl:-mx-12 my-8"
          style={{ borderTop:"1px solid rgba(99,102,241,.08)", borderBottom:"1px solid rgba(99,102,241,.08)", background:"rgba(255,255,255,.50)" }}>
          <div className="ovS-strip-track">
            {[...Array(2)].map((_, gi) =>
              ["Web Development","Mobile Apps","UI/UX Design","Shopify Experts","Next.js & React","Flutter Apps","Laravel Backend","eCommerce Solutions"].map((t,i) => (
                <span key={`${gi}-${i}`} className="ovS-tag">
                  <span className="ovS-tag-dot" style={{ background: i%3===0?"#2dd4bf":i%3===1?"#6366f1":"#a855f7" }}/>
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ── FEATURE PILLS GRID ────────────────────────────── */}
        {featureCards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {featureCards.map((p,i) => {
              const c = FEAT_COLORS[i % FEAT_COLORS.length];
              return (
                <div key={i} className="ovS-pill">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background:c.bg, border:`1px solid ${c.border}`, color:c.icon }}>
                    {FEAT_ICONS[i % FEAT_ICONS.length]}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold mb-1 leading-tight" style={{ color:"#1e2a4a", fontFamily:"'Poppins',sans-serif" }}>{p.boldPrefix}</p>
                    {p.text && <p className="text-[12px] leading-[1.75]" style={{ color:"#6b7280" }}>{p.text}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── BOTTOM: para + CTA ───────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-14 pt-2">
          {textParas[1] && (
            <p className="text-[14px] leading-[1.9] max-w-[560px]" style={{ color:"#4a5070" }}>{textParas[1]}</p>
          )}
          <a href={ctaHref}
            className="ovS-cta inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold text-[13.5px] flex-shrink-0"
            style={{ fontFamily:"'Poppins',sans-serif" }}>
            {ctaText}
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background:"linear-gradient(90deg,transparent,#6366f1 30%,#2dd4bf 70%,transparent)", opacity:.5 }}/>
    </section>
  );
}