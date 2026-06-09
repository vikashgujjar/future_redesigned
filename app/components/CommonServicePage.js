"use client";
import Image from "next/image";
import CommonBannerService from "./CommonBannerService";
import TechMarquee from "./TechMarquee";
import OverviewSection from "./OverviewSection";
import CustomSlider from "./CustomSlider";
import WhyFutureITTouch from "./WhyFutureITTouch";
import FAQSection from "./FAQSection";
import GetNewInsight from "./GetNewInsight";

/**
 * CommonServicePage
 * ─────────────────
 * A single reusable template for every service detail page.
 * Pass page-specific data via props — zero duplicate markup.
 *
 * Required props:
 *   bannerImg          – next/image StaticImageData  (banner right image / GIF)
 *   bannerTitle        – string
 *   bannerDesc         – string
 *
 *   overviewImage      – StaticImageData  (left panel of overview card)
 *   overviewImageAlt   – string
 *   overviewBadge      – string  (small pill label)
 *   overviewHeading    – string
 *   overviewHighlight  – string  (gradient-coloured word/phrase)
 *   overviewParagraphs – (string | { boldPrefix, text })[]
 *   overviewCtaText    – string
 *
 *   featuresBadge      – string
 *   featuresTitle      – string  (may include <em> for gradient word)
 *   featuresTitleHighlight – string  (word rendered in gradient)
 *   featuresStickyImg  – StaticImageData
 *   features           – { icon: ReactNode, title, description }[]
 *
 *   bizBadge           – string
 *   bizHeading         – string
 *   bizHighlight       – string
 *   bizCards           – { icons: ReactNode, title, desc }[]   (2–4 items)
 *
 *   sliderTitle        – string
 *   sliderCards        – { count, title, desc, image }[]
 *
 *   platformsTitle     – string
 *   platforms          – { icon: ReactNode, title, desc }[]
 *
 *   faqTitle           – string
 *   faqData            – { title, description }[]
 */


export default function CommonServicePage({
  // Banner
  bannerImg,
  bannerTitle,
  bannerDesc,

  // Overview
  overviewImage,
  overviewImageAlt = "Service illustration",
  overviewBadge,
  overviewHeading,
  overviewHighlight,
  overviewParagraphs = [],
  overviewCtaText = "Get In Touch",

  // Features
  featuresBadge = "Our Process",
  featuresTitle = "Why choose us",
  featuresTitleHighlight = "",
  featuresStickyImg,
  features = [],

  // Business value cards (dark navy strip)
  bizBadge = "Our Advantages",
  bizHeading = "Partner with Us for",
  bizHighlight = "Growth & Innovation",
  bizCards = [],

  // Slider
  sliderTitle = "Delivering Innovative Experiences",
  sliderCards = [],

  // Platforms / tech
  platformsTitle = "Technologies We Use",
  platforms = [],

  // FAQ
  faqTitle = "Frequently Asked Questions",
  faqData = [],
}) {
  return (
    <>
      <style>{`
        @keyframes cspFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes cspBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes cspPing  { 75%,100%{transform:scale(2.1);opacity:0} }
        .csp-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .csp-bar  { animation: cspBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left; }
        .csp-ping { position:relative; }
        .csp-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:cspPing 2s ease-out infinite;
        }
        .csp-feat-card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .csp-feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(99,102,241,.14) !important; }
        .csp-biz-card  { transition: transform .25s cubic-bezier(.22,1,.36,1); }
        .csp-biz-card:hover  { transform: translateY(-4px); }
      `}</style>

      {/* ── 1. Banner ── */}
      <CommonBannerService
        imgSrc={bannerImg}
        title={bannerTitle}
        desc={bannerDesc}
      />

      {/* ── 2. Tech Marquee ── */}
      <TechMarquee />

      {/* ── 3. Overview / About ── */}
      <OverviewSection
        image={overviewImage}
        imageAlt={overviewImageAlt}
        badgeText={overviewBadge}
        heading={overviewHeading}
        headingHighlight={overviewHighlight}
        paragraphs={overviewParagraphs}
        ctaText={overviewCtaText}
      />

      {/* ── 4. Features section ── */}
      {features.length > 0 && (
        <section className="relative py-16 sm:py-20 lg:py-24"
          style={{ background:"#f8faff", fontFamily:"'Inter',sans-serif" }}>
          <style>{`
            @keyframes fsPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
            @keyframes fsBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
            @keyframes fsBFlow { 0%{background-position:0% 50%} 100%{background-position:300% 50%} }
            @keyframes fsFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
            @keyframes fsGrad  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

            .fs-bar   { animation:fsBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
            .fs-pulse { animation:fsPulse 2.4s ease-in-out infinite }
            .fs-float { animation:fsFloat 5s ease-in-out infinite }

            .fs-hl {
              background:linear-gradient(125deg,#06b6d4,#7c3aed,#db2777);
              background-size:200% 200%;
              -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
              animation:fsGrad 5s ease-in-out infinite;
            }

            .fs-img-border {
              background:linear-gradient(135deg,#06b6d4,#7c3aed,#f472b6,#06b6d4);
              background-size:300% 300%;
              animation:fsBFlow 4s linear infinite;
              border-radius:24px; padding:2px;
            }

            .fs-row {
              display:flex; align-items:flex-start; gap:20px;
              padding:20px 22px;
              border-radius:16px;
              border:1px solid rgba(99,102,241,.10);
              background:#ffffff;
              box-shadow:0 2px 16px rgba(99,102,241,.06);
              transition:transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s, border-color .25s;
              position:relative; overflow:hidden;
            }
            .fs-row::after {
              content:''; position:absolute; left:0; top:0; bottom:0; width:3px; border-radius:2px 0 0 2px;
              background:linear-gradient(180deg,#06b6d4,#7c3aed);
              transform:scaleY(0); transform-origin:top;
              transition:transform .3s cubic-bezier(.22,1,.36,1);
            }
            .fs-row:hover { transform:translateX(6px); box-shadow:0 8px 32px rgba(99,102,241,.13); border-color:rgba(99,102,241,.22); }
            .fs-row:hover::after { transform:scaleY(1); }

            .fs-num {
              font-size:1.9rem; font-weight:900; line-height:1; min-width:52px;
              font-family:'Poppins',sans-serif; flex-shrink:0;
              background:linear-gradient(135deg,#06b6d4,#7c3aed);
              -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
              opacity:.35; transition:opacity .25s;
            }
            .fs-row:hover .fs-num { opacity:1; }

            .fs-icon {
              width:44px; height:44px; border-radius:14px; flex-shrink:0;
              display:flex; align-items:center; justify-content:center; font-size:20px;
              transition:transform .25s, box-shadow .25s;
            }
            .fs-row:hover .fs-icon { transform:scale(1.08); }
          `}</style>

          {/* Subtle background blobs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(99,102,241,.05),transparent 65%)" }} />
          <div className="absolute -bottom-40 -left-40 w-[460px] h-[460px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(6,182,212,.05),transparent 65%)" }} />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
                style={{ background:"rgba(6,182,212,.08)", border:"1px solid rgba(6,182,212,.22)" }}>
                <span className="fs-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#06b6d4,#0ea5e9)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#0891b2", fontFamily:"'Poppins',sans-serif" }}>
                  {featuresBadge}
                </span>
              </div>
              <h2 className="font-extrabold leading-[1.12] mb-4" style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.55rem,3.2vw,2.6rem)" }}>
                {featuresTitle}{" "}
                {featuresTitleHighlight && <span className="fs-hl">{featuresTitleHighlight}</span>}
              </h2>
              <div className="fs-bar mx-auto h-[3px] w-14 rounded-full"
                style={{ background:"linear-gradient(90deg,#06b6d4,#7c3aed,#db2777)" }} />
            </div>

            {/* ── Two-column: image left | feature list right ── */}
            <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr] gap-10 xl:gap-16 items-start">

              {/* LEFT — image panel (static, tall) */}
              {featuresStickyImg && (
                <div className="hidden lg:block sticky top-48 self-start">
                  <div className="relative">
                    {/* Glow behind */}
                    <div className="absolute -inset-5 rounded-[32px] pointer-events-none"
                      style={{ background:"radial-gradient(ellipse at 50% 50%,rgba(6,182,212,.10),rgba(124,58,237,.08),transparent 70%)", filter:"blur(28px)" }} />

                    {/* Animated neon border */}
                    <div className="fs-img-border">
                      <div style={{ borderRadius:"22px", overflow:"hidden" }}>
                        <Image
                          src={featuresStickyImg}
                          alt="service visual"
                          width={520}
                          height={600}
                          className="w-full object-cover"
                          style={{ height:"clamp(420px,65vh,680px)", objectFit:"cover" }}
                          sizes="(max-width:1280px) 40vw, 520px"
                        />
                        <div className="absolute inset-0 pointer-events-none"
                          style={{ background:"linear-gradient(180deg,transparent 55%,rgba(4,7,20,.55) 100%)" }} />
                      </div>
                    </div>

                    {/* Count badge */}
                    <div className="fs-float absolute -bottom-4 -right-4 z-10 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                      style={{ background:"#ffffff", border:"1px solid rgba(6,182,212,.22)", boxShadow:"0 10px 32px rgba(99,102,241,.14)" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background:"linear-gradient(135deg,#06b6d4,#7c3aed)" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-extrabold text-[13px] leading-none" style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif" }}>{features.length} Key Features</p>
                        <p className="text-[10px] mt-0.5 uppercase tracking-wider font-medium" style={{ color:"#6b7280" }}>In This Service</p>
                      </div>
                    </div>

                    {/* Top-left verified chip */}
                    <div className="absolute -top-3 -left-3 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5"
                      style={{ background:"#ffffff", border:"1px solid rgba(124,58,237,.22)", boxShadow:"0 4px 16px rgba(124,58,237,.12)" }}>
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background:"linear-gradient(135deg,#7c3aed,#a855f7)" }}>
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-[.12em]" style={{ color:"#7c3aed", fontFamily:"'Poppins',sans-serif" }}>Verified Service</span>
                    </div>
                  </div>
                </div>
              )}

              {/* RIGHT — numbered feature rows */}
              <div className="flex flex-col gap-3">
                {features.map((feature, idx) => {
                  const COLORS = [
                    { icon:"#0891b2", iconBg:"rgba(6,182,212,.10)", iconBorder:"rgba(6,182,212,.20)" },
                    { icon:"#7c3aed", iconBg:"rgba(124,58,237,.10)",iconBorder:"rgba(124,58,237,.20)"},
                    { icon:"#be185d", iconBg:"rgba(244,114,182,.10)",iconBorder:"rgba(244,114,182,.22)"},
                    { icon:"#059669", iconBg:"rgba(52,211,153,.10)", iconBorder:"rgba(52,211,153,.20)"},
                    { icon:"#d97706", iconBg:"rgba(251,191,36,.10)", iconBorder:"rgba(251,191,36,.20)"},
                    { icon:"#2563eb", iconBg:"rgba(96,165,250,.10)", iconBorder:"rgba(96,165,250,.20)"},
                    { icon:"#0891b2", iconBg:"rgba(6,182,212,.10)", iconBorder:"rgba(6,182,212,.20)" },
                  ];
                  const c = COLORS[idx % COLORS.length];
                  return (
                    <div key={idx} className="fs-row">
                      {/* Big gradient number */}
                      <span className="fs-num">{String(idx + 1).padStart(2,"0")}</span>

                      {/* Icon */}
                      <div className="fs-icon"
                        style={{ background:c.iconBg, border:`1px solid ${c.iconBorder}`, color:c.icon }}>
                        {feature.icon}
                      </div>

                      {/* Title + desc */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold leading-snug mb-1.5" style={{ color:"#0f172a", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(.88rem,1.3vw,.97rem)" }}>
                          {feature.title}
                        </h4>
                        <p className="text-[13px] leading-[1.82]" style={{ color:"#64748b" }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── 5. Business value cards (dark navy) ── */}
      {bizCards.length > 0 && (
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
          style={{ background:"linear-gradient(150deg,#04071a 0%,#080e28 50%,#050b20 100%)", fontFamily:"'Inter',sans-serif" }}>

          <style>{`
            @keyframes bvcFlow   { 0%{background-position:0% 50%} 100%{background-position:300% 50%} }
            @keyframes bvcGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
            @keyframes bvcSpin   { to{transform:rotate(360deg)} }
            @keyframes bvcSpinR  { to{transform:rotate(-360deg)} }
            @keyframes bvcPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
            @keyframes bvcFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
            @keyframes bvcBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
            @keyframes bvcFadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

            .bvc-pulse   { animation:bvcPulse 2.4s ease-in-out infinite }
            .bvc-bar     { animation:bvcBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
            .bvc-spin    { animation:bvcSpin  18s linear infinite }
            .bvc-spinr   { animation:bvcSpinR 24s linear infinite }
            .bvc-float   { animation:bvcFloat 5s ease-in-out infinite }

            .bvc-hl {
              background:linear-gradient(125deg,#2dd4bf 0%,#6366f1 50%,#a855f7 100%);
              background-size:200% 200%;
              -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
              animation:bvcGrad 5s ease-in-out infinite;
            }

            .bvc-card {
              display:flex; align-items:stretch;
              border-radius:20px; overflow:hidden;
              border:1px solid rgba(255,255,255,.07);
              background:rgba(255,255,255,.03);
              box-shadow:0 12px 48px rgba(0,0,0,.45),0 0 0 1px rgba(255,255,255,.04);
              transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, border-color .3s;
              position:relative;
            }
            .bvc-card:hover {
              transform:translateY(-6px);
              border-color:rgba(255,255,255,.13);
              box-shadow:0 24px 64px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08);
            }

            /* Left accent panel */
            .bvc-panel {
              position:relative; overflow:hidden; flex-shrink:0;
              width:160px; display:flex; flex-direction:column;
              align-items:center; justify-content:center; gap:12px;
              padding:28px 20px;
            }
            @media (max-width:640px) {
              .bvc-card { flex-direction:column; }
              .bvc-panel { width:100%; padding:24px 20px 20px; flex-direction:row; justify-content:flex-start; gap:16px; }
              .bvc-panel-num { font-size:2.4rem !important; }
            }

            .bvc-panel-num {
              font-size:3.8rem; font-weight:900; line-height:1;
              font-family:'Poppins',sans-serif;
              color:rgba(255,255,255,.92);
              text-shadow: 0 0 40px rgba(255,255,255,.22);
              transition:transform .3s;
            }
            .bvc-card:hover .bvc-panel-num { transform:scale(1.06); }

            .bvc-icon-ring {
              width:56px; height:56px; border-radius:50%;
              display:flex; align-items:center; justify-content:center; font-size:22px;
              background:rgba(255,255,255,.15);
              border:1.5px solid rgba(255,255,255,.32);
              backdrop-filter:blur(10px);
              box-shadow:0 0 24px rgba(255,255,255,.14),0 8px 20px rgba(0,0,0,.22);
              transition:transform .28s, box-shadow .28s;
              color:#fff; flex-shrink:0;
            }
            .bvc-card:hover .bvc-icon-ring { transform:scale(1.10); box-shadow:0 0 36px rgba(255,255,255,.22),0 10px 28px rgba(0,0,0,.28); }

            /* Right content panel */
            .bvc-content {
              flex:1; padding:28px 28px 28px 24px;
              display:flex; flex-direction:column; justify-content:center;
              border-left:1px solid rgba(255,255,255,.06);
              position:relative;
            }
            @media (max-width:640px) {
              .bvc-content { border-left:none; border-top:1px solid rgba(255,255,255,.06); padding:20px 22px 24px; }
            }

            .bvc-title-bar {
              width:0; height:2px; border-radius:2px;
              transition:width .4s cubic-bezier(.22,1,.36,1);
              margin-bottom:14px;
            }
            .bvc-card:hover .bvc-title-bar { width:44px; }

            /* Hover spotlight from panel side */
            .bvc-spotlight {
              position:absolute; inset:0; pointer-events:none; opacity:0;
              transition:opacity .35s;
              border-radius:20px;
            }
            .bvc-card:hover .bvc-spotlight { opacity:1; }

            /* Animated top border */
            .bvc-top-line {
              position:absolute; top:0; left:0; right:0; height:2px;
              background-size:300% 300%;
              animation:bvcFlow 4s linear infinite;
              opacity:0; border-radius:20px 20px 0 0;
              transition:opacity .3s;
            }
            .bvc-card:hover .bvc-top-line { opacity:1; }

            /* Dot grid */
            .bvc-grid-bg {
              background-image:radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px);
              background-size:28px 28px;
            }
          `}</style>

          {/* Dot grid bg */}
          <div className="bvc-grid-bg absolute inset-0 pointer-events-none" />

          {/* Ambient orbs */}
          <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(45,212,191,.10),transparent 65%)" }} />
          <div className="absolute -bottom-48 -right-48 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(99,102,241,.12),transparent 65%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(168,85,247,.04),transparent 60%)" }} />

          {/* Spinning arc — top right */}
          <svg className="bvc-spin absolute -top-8 -right-8 pointer-events-none hidden lg:block" width="260" height="260" viewBox="0 0 260 260" fill="none" aria-hidden="true">
            <circle cx="130" cy="130" r="120" stroke="rgba(45,212,191,.06)" strokeWidth="1" strokeDasharray="40 64" fill="none"/>
            <circle cx="130" cy="130" r="80"  stroke="rgba(99,102,241,.05)"  strokeWidth=".8" strokeDasharray="24 40" fill="none"/>
          </svg>
          <svg className="bvc-spinr absolute -bottom-8 -left-8 pointer-events-none hidden lg:block" width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <circle cx="100" cy="100" r="92" stroke="rgba(168,85,247,.05)" strokeWidth=".8" strokeDasharray="28 48" fill="none"/>
          </svg>

          <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
                style={{ background:"rgba(45,212,191,.07)", border:"1px solid rgba(45,212,191,.24)" }}>
                <span className="bvc-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#5eead4", fontFamily:"'Poppins',sans-serif" }}>
                  {bizBadge}
                </span>
              </div>
              <h2 className="font-extrabold leading-[1.12] text-white mb-4"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.55rem,3.2vw,2.6rem)" }}>
                {bizHeading}{" "}
                {bizHighlight && <span className="bvc-hl">{bizHighlight}</span>}
              </h2>
              <div className="bvc-bar mx-auto h-[3px] w-14 rounded-full"
                style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            </div>

            {/* Cards — vertical stack */}
            <div className="flex flex-col gap-5">
              {bizCards.map((card, i) => {
                const PALETTES = [
                  { from:"#2dd4bf", to:"#06b6d4",  spotlight:"rgba(45,212,191,.07)"  },
                  { from:"#6366f1", to:"#a855f7",  spotlight:"rgba(99,102,241,.09)"  },
                  { from:"#0ea5e9", to:"#2dd4bf",  spotlight:"rgba(14,165,233,.07)"  },
                  { from:"#a855f7", to:"#ec4899",  spotlight:"rgba(168,85,247,.08)"  },
                ];
                const p = PALETTES[i % PALETTES.length];
                return (
                  <div key={i} className="bvc-card">
                    {/* Animated top border */}
                    <div className="bvc-top-line"
                      style={{ background:`linear-gradient(90deg,transparent,${p.from},${p.to},transparent)` }} />

                    {/* Spotlight overlay */}
                    <div className="bvc-spotlight"
                      style={{ background:`radial-gradient(ellipse at 15% 50%,${p.spotlight},transparent 55%)` }} />

                    {/* LEFT — accent panel */}
                    <div className="bvc-panel"
                      style={{ background:`linear-gradient(160deg,${p.from}22,${p.to}18,rgba(0,0,0,.0) 100%)`,
                               borderRight:"1px solid rgba(255,255,255,.06)" }}>
                      {/* Subtle panel grid */}
                      <div className="absolute inset-0 pointer-events-none opacity-[.15]"
                        style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize:"16px 16px" }} />
                      {/* Glow ring behind icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full pointer-events-none"
                        style={{ background:`radial-gradient(circle,${p.from}22,transparent 70%)`, filter:"blur(12px)" }} />

                      <span className="bvc-panel-num relative z-10"
                        style={{ background:`linear-gradient(135deg,${p.from},${p.to})`,
                                 WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                        {String(i + 1).padStart(2,"0")}
                      </span>
                      <div className="bvc-icon-ring relative z-10">
                        {card.icons}
                      </div>
                    </div>

                    {/* RIGHT — content */}
                    <div className="bvc-content">
                      <div className="bvc-title-bar"
                        style={{ background:`linear-gradient(90deg,${p.from},${p.to})` }} />
                      <h4 className="font-bold text-white leading-snug mb-3"
                        style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(.95rem,1.5vw,1.1rem)" }}>
                        {card.title}
                      </h4>
                      <p className="text-[13.5px] leading-[1.86]"
                        style={{ color:"rgba(180,205,240,.58)" }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Slider ── */}
      {sliderCards.length > 0 && (
        <CustomSlider cards={sliderCards} title={sliderTitle} />
      )}

      {/* ── 7. Platforms / Tech ── */}
      {platforms.length > 0 && (
        <WhyFutureITTouch platforms={platforms} title={platformsTitle} />
      )}

      {/* ── 8. FAQ ── */}
      {faqData.length > 0 && (
        <FAQSection faqData={faqData} title={faqTitle} />
      )}

      {/* ── 9. Blog insights ── */}
      <GetNewInsight />
    </>
  );
}
