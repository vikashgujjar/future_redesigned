"use client";
import { useState } from "react";
import Image from "next/image";
import CommonBannerService from "./CommonBannerService";
import TechMarquee from "./TechMarquee";
import OverviewSection from "./OverviewSection";
import CustomSlider from "./CustomSlider";
import WhyFutureITTouch from "./WhyFutureITTouch";
import TechnologiesSection from "./TechnologiesSection";
import FAQSection from "./FAQSection";
import GetNewInsight from "./GetNewInsight";

const FEAT_COLORS = [
  { from:"#06b6d4", to:"#0284c7" },
  { from:"#6366f1", to:"#4f46e5" },
  { from:"#10b981", to:"#059669" },
  { from:"#f59e0b", to:"#d97706" },
  { from:"#ec4899", to:"#db2777" },
  { from:"#8b5cf6", to:"#7c3aed" },
  { from:"#0ea5e9", to:"#06b6d4" },
];

const BIZ_COLORS = [
  { from:"#22d3ee", to:"#0ea5e9", glow:"rgba(34,211,238,.20)"  },
  { from:"#a78bfa", to:"#7c3aed", glow:"rgba(167,139,250,.20)" },
  { from:"#34d399", to:"#059669", glow:"rgba(52,211,153,.20)"  },
  { from:"#fbbf24", to:"#d97706", glow:"rgba(251,191,36,.20)"  },
];

export default function CommonServicePage({
  bannerImg, bannerTitle, bannerDesc,
  overviewImage, overviewImageAlt = "Service illustration",
  overviewBadge, overviewHeading, overviewHighlight,
  overviewParagraphs = [], overviewCtaText = "Get In Touch",
  featuresBadge = "Our Process", featuresTitle = "Why choose us",
  featuresTitleHighlight = "", featuresStickyImg, features = [],
  bizBadge = "Our Advantages", bizHeading = "Partner with Us for",
  bizHighlight = "Growth & Innovation", bizCards = [],
  sliderTitle = "Delivering Innovative Experiences", sliderCards = [],
  platformsTitle = "Technologies We Use", platforms = [],
  techBadge = "Our Tech Stack", techHeading = "Technologies", techHeadingHighlight = "We Use",
  techDescription, techCategories = [],
  faqTitle = "Frequently Asked Questions", faqData = [],
}) {
  const [activeFeature, setActiveFeature] = useState(0);

  const cur = features[activeFeature] || features[0];
  const curColor = FEAT_COLORS[activeFeature % FEAT_COLORS.length];

  /* resolve image src for both string URLs and Next.js StaticImageData */
  const imgSrc = featuresStickyImg
    ? (typeof featuresStickyImg === "string" ? featuresStickyImg : featuresStickyImg.src)
    : null;

  return (
    <>
      {/* ── 1. Banner ── */}
      <CommonBannerService imgSrc={bannerImg} title={bannerTitle} desc={bannerDesc} />

      {/* ── 2. Tech Marquee ── */}
      <TechMarquee />

      {/* ── 3. Overview ── */}
      <OverviewSection
        image={overviewImage} imageAlt={overviewImageAlt}
        badgeText={overviewBadge} heading={overviewHeading}
        headingHighlight={overviewHighlight} paragraphs={overviewParagraphs}
        ctaText={overviewCtaText}
      />

      {/* ── 7b. Technologies Stack ── */}
      {techCategories.length > 0 && (
        <TechnologiesSection
          badgeText={techBadge}
          heading={techHeading}
          headingHighlight={techHeadingHighlight}
          description={techDescription}
          categories={techCategories}
        />
      )}
      {/* ════════════════════════════════════════
          4. FEATURES — Interactive Tab Explorer
      ════════════════════════════════════════ */}
      {features.length > 0 && (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
          style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

          <style>{`
            @keyframes fexBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
            @keyframes fexGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
            @keyframes fexPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
            @keyframes fexImgIn  { from{opacity:0;transform:scale(1.03)} to{opacity:1;transform:scale(1)} }
            @keyframes fexContentIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
            @keyframes fexFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

            .fex-bar   { animation:fexBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
            .fex-pulse { animation:fexPulse 2.4s ease-in-out infinite }
            .fex-hl {
              background:linear-gradient(125deg,#06b6d4,#6366f1,#a855f7);
              background-size:200% 200%;
              -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
              animation:fexGrad 5s ease-in-out infinite;
            }

            /* Tab button */
            .fex-tab {
              width:100%; display:flex; align-items:center; gap:14px;
              padding:14px 18px; border-radius:14px; cursor:pointer;
              border:1px solid transparent; background:transparent; text-align:left;
              transition:background .2s, border-color .2s, transform .2s;
              position:relative; overflow:hidden;
            }
            .fex-tab:hover  { background:rgba(99,102,241,.04); }
            .fex-tab.active {
              background:#ffffff;
              border-color:rgba(99,102,241,.14);
              box-shadow:0 4px 20px rgba(99,102,241,.10),0 1px 4px rgba(0,0,0,.04);
              transform:translateX(4px);
            }
            .fex-tab.active::before {
              content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
              border-radius:3px 0 0 3px; background:var(--tab-from);
            }

            .fex-tab-num {
              font-family:'Poppins',sans-serif; font-weight:900; line-height:1;
              font-size:1.15rem; min-width:32px; flex-shrink:0;
              display:inline-block;
              transition:opacity .2s;
              opacity:.3;
            }
            .fex-tab.active .fex-tab-num { opacity:1; }

            .fex-tab-icon {
              width:38px; height:38px; border-radius:12px; flex-shrink:0;
              display:flex; align-items:center; justify-content:center; font-size:17px;
              transition:transform .2s, box-shadow .2s;
            }
            .fex-tab.active .fex-tab-icon { transform:scale(1.08); }

            .fex-tab-title {
              font-family:'Poppins',sans-serif; font-weight:600; font-size:.87rem;
              color:#374151; transition:color .2s; flex:1; line-height:1.3;
            }
            .fex-tab.active .fex-tab-title { color:#111827; font-weight:700; }

            .fex-tab-arrow {
              flex-shrink:0; opacity:0; transform:translateX(-5px);
              transition:opacity .2s, transform .2s;
            }
            .fex-tab.active .fex-tab-arrow { opacity:1; transform:translateX(0); }

            /* Right panel */
            .fex-panel {
              border-radius:24px; overflow:hidden; position:relative;
              min-height:500px; display:flex; flex-direction:column; justify-content:flex-end;
            }
            .fex-panel-img {
              position:absolute; inset:0; background-size:cover; background-position:center;
              animation:fexImgIn .5s cubic-bezier(.22,1,.36,1);
              transition:transform .5s cubic-bezier(.22,1,.36,1);
            }
            .fex-panel:hover .fex-panel-img { transform:scale(1.04); }
            .fex-panel-overlay {
              position:absolute; inset:0;
              background:linear-gradient(160deg,rgba(4,7,26,.18) 0%,rgba(4,7,26,.82) 100%);
            }
            .fex-panel-content {
              position:relative; z-index:2; padding:22px 20px;
              animation:fexContentIn .4s cubic-bezier(.22,1,.36,1);
            }
            @media (min-width:480px) { .fex-panel-content { padding:28px 30px; } }
            @media (min-width:640px) { .fex-panel-content { padding:36px 38px; } }
            .fex-panel-icon {
              width:68px; height:68px; border-radius:20px;
              display:flex; align-items:center; justify-content:center; font-size:28px;
              background:rgba(255,255,255,.18); border:1.5px solid rgba(255,255,255,.35);
              backdrop-filter:blur(12px);
              box-shadow:0 8px 28px rgba(0,0,0,.20),0 0 24px rgba(255,255,255,.12);
              margin-bottom:20px; color:#fff;
              animation:fexFloat 5s ease-in-out infinite;
            }
            .fex-panel-badge {
              display:inline-flex; align-items:center; gap:7px;
              padding:5px 14px; border-radius:999px; margin-bottom:16px;
              background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.22);
              backdrop-filter:blur(10px);
            }

            /* No-image fallback panel */
            .fex-fallback {
              border-radius:24px; overflow:hidden;
              min-height:500px; display:flex; flex-direction:column; justify-content:center;
              padding:40px; position:relative;
            }
            .fex-fallback-icon-wrap {
              width:96px; height:96px; border-radius:28px;
              display:flex; align-items:center; justify-content:center; font-size:40px;
              margin-bottom:28px; color:#fff;
              box-shadow: 0 16px 40px var(--icon-glow);
              animation:fexFloat 5s ease-in-out infinite;
            }
          `}</style>

          {/* Soft bg blobs */}
          <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />
          <div className="absolute -bottom-40 -left-40 w-[440px] h-[440px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(6,182,212,.06),transparent 65%)" }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

            {/* Header */}
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
                style={{ background:"rgba(6,182,212,.08)", border:"1px solid rgba(6,182,212,.22)" }}>
                <span className="fex-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#06b6d4,#0ea5e9)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#0891b2", fontFamily:"'Poppins',sans-serif" }}>
                  {featuresBadge}
                </span>
              </div>
              <h2 className="font-extrabold leading-[1.12] mb-4"
                style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.55rem,3.2vw,2.6rem)" }}>
                {featuresTitle}{" "}
                {featuresTitleHighlight && <span className="fex-hl">{featuresTitleHighlight}</span>}
              </h2>
              <div className="fex-bar mx-auto h-[3px] w-14 rounded-full"
                style={{ background:"linear-gradient(90deg,#06b6d4,#6366f1,#a855f7)" }} />
            </div>

            {/* Two-pane layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px] gap-6 xl:gap-10 items-stretch">

              {/* LEFT — Tab list */}
              <div className="flex flex-col gap-1.5 justify-center p-3"
                style={{ background:"rgba(248,250,255,.7)", backdropFilter:"blur(16px)",
                         borderRadius:"20px", border:"1px solid rgba(99,102,241,.08)",
                         boxShadow:"0 4px 24px rgba(99,102,241,.06)" }}>

                {/* Count hint */}
                <div className="flex items-center gap-2 px-4 pt-3 pb-2 mb-1">
                  <div className="h-px flex-1 rounded-full"
                    style={{ background:"linear-gradient(90deg,rgba(99,102,241,.12),transparent)" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[.18em]"
                    style={{ color:"#94a3b8", fontFamily:"'Poppins',sans-serif" }}>
                    {features.length} Features
                  </span>
                  <div className="h-px flex-1 rounded-full"
                    style={{ background:"linear-gradient(90deg,transparent,rgba(99,102,241,.12))" }} />
                </div>

                {features.map((f, i) => {
                  const fc = FEAT_COLORS[i % FEAT_COLORS.length];
                  const isActive = i === activeFeature;
                  return (
                    <button key={i}
                      className={`fex-tab${isActive ? " active" : ""}`}
                      style={{ "--tab-from": fc.from }}
                      onClick={() => setActiveFeature(i)}>

                      {/* Number */}
                      <span className="fex-tab-num" style={{
                        background:`linear-gradient(135deg,${fc.from},${fc.to})`,
                        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                        display:"inline-block",
                      }}>
                        {String(i + 1).padStart(2,"0")}
                      </span>

                      {/* Icon */}
                      <span className="fex-tab-icon"
                        style={{ background:`linear-gradient(135deg,${fc.from}18,${fc.to}14)`,
                                 border:`1px solid ${fc.from}28`, color:fc.from }}>
                        {f.icon}
                      </span>

                      {/* Title */}
                      <span className="fex-tab-title">{f.title}</span>

                      {/* Arrow */}
                      <svg className="fex-tab-arrow" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M3 7.5h9M8 3.5l4 4-4 4" stroke={fc.from} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  );
                })}

                <div className="pb-2" />
              </div>

              {/* RIGHT — Detail panel */}
              {imgSrc ? (
                <div className="fex-panel">
                  {/* Background image */}
                  <div key={`img-${activeFeature}`} className="fex-panel-img"
                    style={{ backgroundImage:`url(${imgSrc})` }} />

                  {/* Dark overlay */}
                  <div className="fex-panel-overlay" />

                  {/* Accent tint per feature */}
                  <div className="absolute inset-0 pointer-events-none rounded-[24px]"
                    style={{ background:`linear-gradient(160deg,${curColor.from}20,${curColor.to}18,transparent 55%)` }} />

                  {/* Top accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[24px]"
                    style={{ background:`linear-gradient(90deg,${curColor.from},${curColor.to})` }} />

                  {/* Content */}
                  <div key={`content-${activeFeature}`} className="fex-panel-content">
                    {/* Small badge */}
                    <div className="fex-panel-badge">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background:`linear-gradient(135deg,${curColor.from},${curColor.to})` }} />
                      <span className="text-[10px] font-bold uppercase tracking-[.14em] text-white/75"
                        style={{ fontFamily:"'Poppins',sans-serif" }}>
                        Feature {String(activeFeature + 1).padStart(2,"0")}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="fex-panel-icon" style={{
                      background:`linear-gradient(135deg,${curColor.from}44,${curColor.to}33)`,
                    }}>
                      {cur?.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white leading-snug mb-3"
                      style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.1rem,2vw,1.4rem)" }}>
                      {cur?.title}
                    </h3>

                    {/* Separator */}
                    <div className="mb-4 h-px"
                      style={{ background:`linear-gradient(90deg,${curColor.from}60,${curColor.to}40,transparent)` }} />

                    {/* Description */}
                    <p className="text-[13.5px] leading-[1.84]"
                      style={{ color:"rgba(220,235,255,.68)" }}>
                      {cur?.description}
                    </p>
                  </div>
                </div>
              ) : (
                /* No image — colored gradient panel */
                <div key={`fallback-${activeFeature}`} className="fex-fallback"
                  style={{ background:`linear-gradient(140deg,${curColor.from}15,${curColor.to}12,rgba(248,250,255,1) 65%)`,
                           border:`1px solid ${curColor.from}20` }}>
                  <div className="fex-fallback-icon-wrap"
                    style={{ background:`linear-gradient(135deg,${curColor.from},${curColor.to})`,
                             "--icon-glow":`${curColor.from}44` }}>
                    {cur?.icon}
                  </div>
                  <h3 className="font-bold leading-snug mb-4"
                    style={{ color:"#0f172a", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.2rem,2.2vw,1.55rem)" }}>
                    {cur?.title}
                  </h3>
                  <div className="mb-4 h-[2px] w-12 rounded-full"
                    style={{ background:`linear-gradient(90deg,${curColor.from},${curColor.to})` }} />
                  <p className="text-[14px] leading-[1.90]" style={{ color:"#475569" }}>
                    {cur?.description}
                  </p>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════
          5. BUSINESS VALUE — Premium Card Grid
      ════════════════════════════════════════ */}
      {bizCards.length > 0 && (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
          style={{ background:"linear-gradient(150deg,#04071a 0%,#080e28 50%,#050b20 100%)", fontFamily:"'Inter',sans-serif" }}>

          <style>{`
            @keyframes bizBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
            @keyframes bizGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
            @keyframes bizPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
            @keyframes bizFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
            @keyframes bizSpin   { to{transform:rotate(360deg)} }
            @keyframes bizSpinR  { to{transform:rotate(-360deg)} }

            .biz-bar   { animation:bizBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
            .biz-pulse { animation:bizPulse 2.4s ease-in-out infinite }
            .biz-spin  { animation:bizSpin  20s linear infinite }
            .biz-spinr { animation:bizSpinR 26s linear infinite }
            .biz-hl {
              background:linear-gradient(125deg,#22d3ee,#a78bfa,#f472b6);
              background-size:200% 200%;
              -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
              animation:bizGrad 5s ease-in-out infinite;
            }

            /* Card */
            .biz-card {
              border-radius:22px; overflow:hidden; display:flex; flex-direction:column;
              border:1px solid rgba(255,255,255,.07);
              background:rgba(255,255,255,.03);
              box-shadow:0 10px 40px rgba(0,0,0,.40),0 0 0 1px rgba(255,255,255,.04);
              transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, border-color .3s;
              position:relative;
            }
            .biz-card:hover {
              transform:translateY(-10px);
              border-color:rgba(255,255,255,.14);
              box-shadow:0 28px 72px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.09);
            }

            /* Top panel */
            .biz-panel {
              position:relative; overflow:hidden;
              height:160px; display:flex; align-items:center; justify-content:center;
              flex-direction:column; gap:10px;
            }
            .biz-panel-mesh {
              position:absolute; inset:0;
              background-image:radial-gradient(rgba(255,255,255,.22) 1px,transparent 1px);
              background-size:18px 18px;
            }
            .biz-panel-wm {
              position:absolute; right:-6px; bottom:-14px;
              font-family:'Poppins',sans-serif; font-weight:900; line-height:1;
              font-size:6rem; color:rgba(255,255,255,.10);
              user-select:none; pointer-events:none;
            }
            .biz-panel-icon {
              width:64px; height:64px; border-radius:20px;
              display:flex; align-items:center; justify-content:center; font-size:26px;
              background:rgba(255,255,255,.18); border:1.5px solid rgba(255,255,255,.35);
              backdrop-filter:blur(12px); color:#fff;
              box-shadow:0 8px 28px rgba(0,0,0,.22),0 0 20px rgba(255,255,255,.12);
              position:relative; z-index:2;
              transition:transform .28s, box-shadow .28s;
              animation:bizFloat 5s ease-in-out infinite;
            }
            .biz-card:hover .biz-panel-icon {
              transform:scale(1.10) translateY(-2px);
              box-shadow:0 12px 36px rgba(0,0,0,.28),0 0 32px rgba(255,255,255,.18);
            }

            /* Sparkle in panel */
            .biz-star { position:absolute; opacity:.55; animation:bizFloat 4s ease-in-out infinite; }

            /* Content */
            .biz-body {
              flex:1; display:flex; flex-direction:column;
              padding:22px 24px 24px;
              background:rgba(255,255,255,.03); backdrop-filter:blur(14px);
            }
            .biz-divider {
              height:2px; width:28px; border-radius:2px; margin-bottom:14px;
              transition:width .3s cubic-bezier(.22,1,.36,1);
            }
            .biz-card:hover .biz-divider { width:44px; }

            /* Glow bloom under card on hover */
            .biz-bloom {
              position:absolute; inset:0; border-radius:22px; pointer-events:none;
              opacity:0; transition:opacity .35s;
            }
            .biz-card:hover .biz-bloom { opacity:1; }

            /* Top neon strip */
            .biz-topstrip {
              position:absolute; top:0; left:0; right:0; height:3px; border-radius:22px 22px 0 0;
              opacity:0; transition:opacity .3s;
            }
            .biz-card:hover .biz-topstrip { opacity:1; }
          `}</style>

          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

          {/* Orbs */}
          <div className="absolute -top-48 -left-48 w-[540px] h-[540px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(34,211,238,.09),transparent 65%)" }} />
          <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(167,139,250,.09),transparent 65%)" }} />

          {/* Spinning arcs */}
          <svg className="biz-spin absolute -top-10 -right-10 pointer-events-none hidden lg:block" width="260" height="260" viewBox="0 0 260 260" fill="none" aria-hidden="true">
            <circle cx="130" cy="130" r="120" stroke="rgba(34,211,238,.05)"  strokeWidth="1"  strokeDasharray="40 64" fill="none"/>
            <circle cx="130" cy="130" r="78"  stroke="rgba(167,139,250,.04)" strokeWidth=".8" strokeDasharray="24 40" fill="none"/>
          </svg>
          <svg className="biz-spinr absolute -bottom-10 -left-10 pointer-events-none hidden lg:block" width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <circle cx="100" cy="100" r="90" stroke="rgba(244,114,182,.04)" strokeWidth=".8" strokeDasharray="28 48" fill="none"/>
          </svg>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
                style={{ background:"rgba(34,211,238,.07)", border:"1px solid rgba(34,211,238,.22)" }}>
                <span className="biz-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#22d3ee,#0ea5e9)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#67e8f9", fontFamily:"'Poppins',sans-serif" }}>
                  {bizBadge}
                </span>
              </div>
              <h2 className="font-extrabold leading-[1.12] text-white mb-4"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.55rem,3.2vw,2.6rem)" }}>
                {bizHeading}{" "}
                {bizHighlight && <span className="biz-hl">{bizHighlight}</span>}
              </h2>
              <div className="biz-bar mx-auto h-[3px] w-14 rounded-full"
                style={{ background:"linear-gradient(90deg,#22d3ee,#a78bfa,#f472b6)" }} />
            </div>

            {/* Card grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${bizCards.length === 4 ? "lg:grid-cols-2" : bizCards.length >= 3 ? "lg:grid-cols-3" : ""} gap-6`}>
              {bizCards.map((card, i) => {
                const bc = BIZ_COLORS[i % BIZ_COLORS.length];
                return (
                  <div key={i} className="biz-card">

                    {/* Hover bloom */}
                    <div className="biz-bloom"
                      style={{ background:`radial-gradient(ellipse at 50% 0%,${bc.glow},transparent 60%)` }} />

                    {/* Top neon strip */}
                    <div className="biz-topstrip"
                      style={{ background:`linear-gradient(90deg,${bc.from},${bc.to})` }} />

                    {/* Colored top panel */}
                    <div className="biz-panel"
                      style={{ background:`linear-gradient(135deg,${bc.from},${bc.to})` }}>
                      <div className="biz-panel-mesh" />
                      <span className="biz-panel-wm">{String(i + 1).padStart(2,"0")}</span>

                      {/* Sparkle */}
                      <svg className="biz-star" style={{ top:14, left:14 }} width="13" height="13" viewBox="0 0 36 36" fill="none">
                        <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="rgba(255,255,255,.8)"/>
                      </svg>
                      <svg className="biz-star" style={{ bottom:16, right:18, animationDelay:".9s", opacity:.3, width:8, height:8 }} viewBox="0 0 36 36" fill="none">
                        <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white"/>
                      </svg>

                      {/* Icon */}
                      <div className="biz-panel-icon">{card.icons}</div>
                    </div>

                    {/* Content */}
                    <div className="biz-body">
                      <div className="biz-divider"
                        style={{ background:`linear-gradient(90deg,${bc.from},${bc.to})` }} />
                      <h4 className="font-bold text-white leading-snug mb-3"
                        style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(.95rem,1.6vw,1.08rem)" }}>
                        {card.title}
                      </h4>
                      <p className="text-[13px] leading-[1.86] flex-1"
                        style={{ color:"rgba(180,210,240,.55)" }}>
                        {card.desc}
                      </p>

                      {/* Footer */}
                      <div className="mt-5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background:`linear-gradient(135deg,${bc.from},${bc.to})` }} />
                        <div className="flex-1 h-px rounded-full"
                          style={{ background:`linear-gradient(90deg,${bc.from}33,transparent)` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Slider ── */}
      {sliderCards.length > 0 && <CustomSlider cards={sliderCards} title={sliderTitle} />}

      {/* ── 7. Platforms / Tech ── */}
      {platforms.length > 0 && <WhyFutureITTouch platforms={platforms} title={platformsTitle} />}

      {/* ── 9. Blog insights ── */}
      <GetNewInsight />

      {/* ── 8. FAQ ── */}
      {faqData.length > 0 && <FAQSection faqData={faqData} title={faqTitle} />}

    </>
  );
}
