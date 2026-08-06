"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const servicesData = [
  {
    icon: "/Assets/data.webp",
    title: "Web Development",
    number: "01",
    headinglink: "/website-design",
    description:
      "Your business can get a reliable facelift for long-term branding solutions across all verticals including e-commerce solutions and open source content management exclusively at Future IT Touch Pvt. Ltd.",
    tags: [
      { label: "PHP",      href: "/php-laravel-codeigniter-services" },
      { label: "Node Js",  href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Laravel",  href: "/php-laravel-codeigniter-services" },
      { label: "React js", href: "/reactjs-vuejs-nodejs-development-services" },
      { label: ".Net",     href: "/asp-dot-net-service" },
      { label: "Java",     href: "/java-application-development" },
    ],
    highlights: ["Custom CMS", "E-Commerce", "REST APIs", "Performance"],
  },
  {
    icon: "/Assets/shopping-cart.webp",
    title: "Ecommerce Development",
    number: "02",
    headinglink: "/ecommerce-website-development",
    description:
      "At Future IT Touch Pvt. Ltd., we deliver cutting edge technology solutions for online commerce industry. Our ecommerce solutions are built on latest technology.",
    tags: [
      { label: "Magento", href: "/wordpress-and-shopify-development" },
      { label: "WP",      href: "/wordpress-and-shopify-development" },
      { label: "Shopify", href: "/wordpress-and-shopify-development" },
      { label: "Laravel", href: "/php-laravel-codeigniter-services" },
    ],
    highlights: ["Payment Gateway", "Inventory", "Analytics", "Scalable"],
  },
  {
    icon: "/Assets/app-development.webp",
    title: "Mobile App Development",
    number: "03",
    headinglink: "/application-developement",
    description:
      "Transform and mobilize your business anytime, anywhere with custom mobile app development services from Future IT Touch Pvt. Ltd. India.",
    tags: [
      { label: "iPhone",         href: "/ios-application-development" },
      { label: "Android",        href: "/android-application-development" },
      { label: "Cross Platform", href: "/hybrid-application-development" },
    ],
    highlights: ["iOS & Android", "Push Alerts", "Offline Mode", "App Store"],
  },
  {
    icon: "/Assets/future.webp",
    title: "Trending Technologies",
    number: "04",
    headinglink: "/trending-technology",
    description:
      "Future IT Touch Pvt. Ltd. India, we create winning business models through innovative product development practices. Committed to delivering the right value.",
    tags: [
      { label: "React.js",   href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Node.js",    href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Angular.js", href: "/reactjs-vuejs-nodejs-development-services" },
    ],
    highlights: ["AI/ML", "Blockchain", "Cloud", "DevOps"],
  },
  {
    icon: "/Assets/marketing.webp",
    title: "Digital Marketing",
    number: "05",
    headinglink: "/digital-marketing-service",
    description:
      "Digital marketing is the best way to reach your audiences and create relationships with your client. We provide all types of digital marketing tools like PPC, SMO, SEO, SMM.",
    tags: [
      { label: "SEO", href: "/search-engine-optimization" },
      { label: "CMS", href: "/cms-development" },
      { label: "PPC", href: "/pay-per-click-service" },
      { label: "SMM", href: "/social-media-marketing-service" },
    ],
    highlights: ["SEO Rankings", "Social Media", "PPC Ads", "Analytics"],
  },
];

const palette = [
  { from: "#2dd4bf", to: "#06b6d4",  mid: "#0ea5e9",  bg: "rgba(204,251,241,.18)" },
  { from: "#6366f1", to: "#8b5cf6",  mid: "#a78bfa",  bg: "rgba(224,231,255,.20)" },
  { from: "#0ea5e9", to: "#2dd4bf",  mid: "#06b6d4",  bg: "rgba(186,230,253,.18)" },
  { from: "#8b5cf6", to: "#6366f1",  mid: "#818cf8",  bg: "rgba(237,233,254,.20)" },
  { from: "#2dd4bf", to: "#6366f1",  mid: "#818cf8",  bg: "rgba(204,251,241,.15)" },
];

export default function ServiceSectionNew() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleTab = (i) => {
    if (i === active) return;
    setActive(i);
    setAnimKey(k => k + 1);
  };

  const svc = servicesData[active];
  const pal = palette[active];

  return (
    <section className="svc-root relative overflow-hidden py-20 sm:py-28">
      <style>{`
        .svc-root { font-family:'Inter',sans-serif; background:#f8faff }

        /* ── bg ── */
        .svc-bg {
          background:
            radial-gradient(ellipse at 0% 0%,   rgba(204,251,241,.65) 0%, transparent 45%),
            radial-gradient(ellipse at 100% 100%,rgba(224,231,255,.60) 0%, transparent 45%),
            radial-gradient(ellipse at 100% 0%,  rgba(199,210,254,.38) 0%, transparent 40%),
            radial-gradient(ellipse at 0%  100%, rgba(167,243,208,.32) 0%, transparent 40%),
            linear-gradient(150deg,#f0fdf9 0%,#f8fafc 40%,#eef2ff 80%,#f5f3ff 100%);
        }
        .svc-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.09) 1px, transparent 1px);
          background-size:28px 28px;
        }

        /* ── keyframes ── */
        @keyframes svcCW    { to{transform:rotate(360deg)}  }
        @keyframes svcCCW   { to{transform:rotate(-360deg)} }
        @keyframes svcDot   { 0%,100%{transform:translateY(0) scale(1);opacity:.55} 50%{transform:translateY(-8px) scale(1.35);opacity:.9} }
        @keyframes svcIn    { from{opacity:0;transform:translateY(18px) scale(.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes svcFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes svcPulse { 0%,100%{opacity:.18;transform:scale(1)} 50%{opacity:.38;transform:scale(1.05)} }
        @keyframes svcSlide { from{left:-60%} to{left:120%} }
        @keyframes svcBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes svcFade  { from{opacity:0} to{opacity:1} }
        @keyframes svcNumUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes svcGlow  { 0%,100%{opacity:.5} 50%{opacity:1} }

        .svc-panel    { animation:svcIn .45s cubic-bezier(.22,.87,.48,1) both }
        .svc-float    { animation:svcFloat 6s ease-in-out infinite }
        .svc-ring     { animation:svcPulse 3s ease-in-out infinite }
        .svc-glow     { animation:svcGlow 3.5s ease-in-out infinite }
        .svc-bar      { animation:svcBarIn .8s cubic-bezier(.22,1,.36,1) .25s both; transform-origin:left }

        /* ── sidebar nav ── */
        .svc-nav-item {
          position:relative; overflow:hidden;
          transition:all .28s ease;
          border:1px solid transparent;
          cursor:pointer;
        }
        .svc-nav-item::after {
          content:''; position:absolute; top:0; left:-60%; width:50%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);
          transform:skewX(-15deg);
        }
        .svc-nav-item:hover::after { animation:svcSlide .5s ease forwards }

        /* ── feature highlight chips ── */
        .svc-chip {
          transition:all .2s;
        }
        .svc-chip:hover { transform:translateY(-2px) }

        /* ── tag pills ── */
        .svc-tag {
          background:rgba(248,250,252,1);
          border:1px solid rgba(203,213,225,.9);
          color:#64748b;
          transition:all .2s;
          display:inline-block;
        }
        .svc-tag:hover {
          background:rgba(204,251,241,.5);
          border-color:rgba(45,212,191,.5);
          color:#0d9488;
          transform:translateY(-1px);
        }

        /* ── CTA btn ── */
        .svc-cta {
          position:relative; overflow:hidden;
          transition:transform .2s,box-shadow .2s;
        }
        .svc-cta:hover { transform:translateY(-2px) scale(1.02) }
        .svc-cta::after {
          content:''; position:absolute; top:0; left:-80%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);
          transform:skewX(-18deg);
        }
        .svc-cta:hover::after { animation:svcSlide .55s ease forwards }

        /* ── grad text ── */
        .svc-grad-text {
          background:linear-gradient(135deg,#2dd4bf,#6366f1);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          color:transparent;
        }

        /* ── number watermark ── */
        .svc-watermark {
          background:linear-gradient(135deg,var(--sf),var(--st));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          color:transparent;
          opacity:.08;
        }

        /* ── stat num ── */
        .svc-stat-num {
          background:linear-gradient(135deg,var(--sf),var(--st));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          color:transparent;
        }

        /* ── progress bar ── */
        .svc-progress {
          background:linear-gradient(90deg,var(--sf),var(--st));
          transition:background 1s;
        }

        /* ── icon gradient ring ── */
        .svc-icon-ring {
          background:linear-gradient(135deg,var(--sf),var(--st));
          transition:background 1s;
        }

        @media(max-width:1023px){
          .svc-sidebar { display:none }
          .svc-mobile-tabs { display:flex }
        }
        @media(min-width:1024px){
          .svc-mobile-tabs { display:none }
        }
      `}</style>

      {/* ── backgrounds ── */}
      <div className="svc-bg absolute inset-0 pointer-events-none" />
      <div className="svc-dotgrid absolute inset-0 pointer-events-none" />

      {/* blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(45,212,191,.16) 0%,transparent 65%)", transform:"translate(-30%,-30%)" }}/>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.14) 0%,transparent 65%)", transform:"translate(30%,30%)" }}/>

      {/* top-left rotating diamonds */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="300" height="300" viewBox="0 0 300 300" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="svgTL" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity=".35"/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity=".04"/>
          </linearGradient>
        </defs>
        <g style={{transformOrigin:"0px 0px",animation:"svcCW 38s linear infinite"}}>
          <polygon points="200,0 0,200 -200,0 0,-200" stroke="url(#svgTL)" strokeWidth="1.4" strokeDasharray="22 12" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"0px 0px",animation:"svcCCW 25s linear infinite"}}>
          <polygon points="140,0 0,140 -140,0 0,-140" stroke="rgba(34,211,238,.22)" strokeWidth="1.5" strokeDasharray="16 10" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"0px 0px",animation:"svcCW 15s linear infinite"}}>
          <polygon points="85,0 0,85 -85,0 0,-85" stroke="rgba(45,212,191,.28)" strokeWidth="1.8" strokeDasharray="11 8" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(56,56)" style={{animation:"svcDot 4s ease-in-out infinite"}}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(45,212,191,.65)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(45,212,191,.65)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
      </svg>

      {/* bottom-right rotating hexagons */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="300" height="300" viewBox="0 0 300 300" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="svgBR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity=".30"/>
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity=".04"/>
          </linearGradient>
        </defs>
        <g style={{transformOrigin:"300px 300px",animation:"svcCCW 32s linear infinite"}}>
          <polygon points="488,300 394,137 206,137 112,300 206,463 394,463" stroke="url(#svgBR)" strokeWidth="1.4" strokeDasharray="20 10" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"300px 300px",animation:"svcCW 21s linear infinite"}}>
          <polygon points="430,300 365,187 235,187 170,300 235,413 365,413" stroke="rgba(139,92,246,.22)" strokeWidth="1.5" strokeDasharray="15 9" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"300px 300px",animation:"svcCCW 13s linear infinite"}}>
          <polygon points="375,300 337.5,234 262.5,234 225,300 262.5,366 337.5,366" stroke="rgba(99,102,241,.28)" strokeWidth="1.8" strokeDasharray="10 7" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(260,264)" style={{animation:"svcDot 4.5s ease-in-out infinite"}}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(99,102,241,.65)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(99,102,241,.65)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
      </svg>

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">

        {/* ══ SECTION HEADER ══ */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ background:"rgba(204,251,241,.75)", border:"1px solid rgba(45,212,191,.35)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }}/>
            <span className="text-[10.5px] font-bold uppercase tracking-[.22em] svc-grad-text"
              style={{ fontFamily:"'Poppins',sans-serif" }}>
              Our Services
            </span>
          </div>
          <h2 className="font-bold leading-tight text-gray-900 m-0 mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,4.2vw,3.4rem)" }}>
            We Empower Clients To{" "}
            <span style={{
              background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>Be Loved</span>
          </h2>
          <div className="mx-auto w-16 h-[3px] rounded-full svc-bar"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1)" }}/>
        </div>

        {/* ══ MOBILE TABS ══ */}
        <div className="svc-mobile-tabs flex-wrap justify-center gap-2 mb-8">
          {servicesData.map((s, i) => {
            const p = palette[i];
            const isA = active === i;
            return (
              <button key={i} onClick={()=>handleTab(i)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold outline-none transition-all duration-250"
                style={isA ? {
                  background:`linear-gradient(135deg,${p.from},${p.to})`,
                  color:"#fff",
                  boxShadow:`0 4px 16px ${p.to}40`,
                  fontFamily:"'Poppins',sans-serif",
                } : {
                  background:"rgba(255,255,255,.85)",
                  border:"1px solid rgba(203,213,225,.9)",
                  color:"#64748b",
                  fontFamily:"'Poppins',sans-serif",
                }}>
                <span className="text-[9px] font-black opacity-60">{s.number}</span>
                {s.title}
              </button>
            );
          })}
        </div>

        {/* ══ MAIN BODY: sidebar + showcase ══ */}
        <div className="flex gap-6 xl:gap-8 items-stretch">

          {/* ════ SIDEBAR NAV (desktop only) ════ */}
          <div className="svc-sidebar flex-shrink-0 w-[220px] xl:w-[250px] flex flex-col gap-2">
            {servicesData.map((s, i) => {
              const p = palette[i];
              const isA = active === i;
              return (
                <div
                  key={i}
                  className="svc-nav-item rounded-2xl p-3.5 flex items-center gap-3"
                  onClick={()=>handleTab(i)}
                  style={isA ? {
                    background:`linear-gradient(135deg,${p.from}18,${p.to}12)`,
                    border:`1px solid ${p.from}40`,
                    boxShadow:`0 4px 18px ${p.from}18`,
                  } : {
                    background:"rgba(255,255,255,.80)",
                    border:"1px solid rgba(203,213,225,.7)",
                  }}
                >
                  {/* Color dot */}
                  <div className="flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300"
                    style={{ background: isA ? `linear-gradient(135deg,${p.from},${p.to})` : "rgba(203,213,225,1)",
                      boxShadow: isA ? `0 0 8px ${p.from}80` : "none" }}/>

                  {/* Icon */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: isA ? `linear-gradient(135deg,${p.from}22,${p.to}14)` : "rgba(248,250,252,1)",
                      border: isA ? `1px solid ${p.from}30` : "1px solid rgba(203,213,225,.8)" }}>
                    <Image src={s.icon} width={20} height={20} alt={s.title} className="w-5 h-5 object-contain"/>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black opacity-40 leading-none mb-0.5"
                      style={{ fontFamily:"'Poppins',sans-serif", color: isA ? p.from : "#94a3b8" }}>
                      {s.number}
                    </p>
                    <p className="text-[12.5px] font-semibold leading-snug truncate transition-colors"
                      style={{ fontFamily:"'Poppins',sans-serif", color: isA ? "#1e293b" : "#64748b" }}>
                      {s.title}
                    </p>
                  </div>

                  {/* Active arrow */}
                  {isA && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke={p.from} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              );
            })}

            {/* View All */}
            <Link href="/service"
              className="svc-cta mt-2 text-white text-[11.5px] font-bold tracking-[.08em] uppercase text-center py-3 rounded-2xl no-underline flex items-center justify-center gap-2"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow:"0 6px 22px rgba(99,102,241,.30)", fontFamily:"'Poppins',sans-serif" }}>
              View All
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5h8M5.5 1.5l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* ════ SHOWCASE PANEL ════ */}
          <div
            key={animKey}
            className="svc-panel flex-1 min-w-0 rounded-3xl overflow-hidden"
            style={{
              background:"rgba(255,255,255,.88)",
              border:"1px solid rgba(203,213,225,.55)",
              boxShadow:"0 20px 60px rgba(99,102,241,.09),0 4px 20px rgba(45,212,191,.07)",
              backdropFilter:"blur(16px)",
              "--sf": pal.from,
              "--st": pal.to,
            }}
          >
            {/* ── TOP HERO STRIP ── */}
            <div
              className="relative overflow-hidden px-8 sm:px-10 lg:px-12 pt-10 pb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              style={{ background:`linear-gradient(135deg,${pal.from}14,${pal.to}09)`,
                borderBottom:"1px solid rgba(203,213,225,.45)" }}
            >
              {/* Watermark number — huge behind everything */}
              <div
                className="svc-watermark absolute right-4 -top-2 text-[9rem] leading-none font-black select-none pointer-events-none"
                style={{ fontFamily:"'Poppins',sans-serif", "--sf":pal.from, "--st":pal.to }}
              >
                {svc.number}
              </div>

              {/* Pulsing rings + icon */}
              <div className="relative flex-shrink-0 w-24 h-24 flex items-center justify-center">
                {[90,68,48].map((r,ri)=>(
                  <div key={ri} className="svc-ring absolute rounded-full"
                    style={{ width:r, height:r,
                      border:`${ri===0?"1":"1.5"}px solid ${pal.from}`,
                      opacity:.22-ri*.05,
                      animationDelay:`${ri*0.8}s`,
                    }}/>
                ))}
                <div
                  className="svc-float relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background:`linear-gradient(135deg,${pal.from}28,${pal.to}18)`,
                    border:`1px solid ${pal.from}40`,
                    boxShadow:`0 8px 28px ${pal.from}30` }}
                >
                  <Image src={svc.icon} width={36} height={36} alt={svc.title} className="w-9 h-9 object-contain"/>
                </div>
              </div>

              {/* Title + progress */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[10px] font-black tracking-[.14em] opacity-50"
                    style={{ fontFamily:"'Poppins',sans-serif",
                      background:`linear-gradient(90deg,${pal.from},${pal.to})`,
                      WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                    {svc.number}
                  </span>
                  <div className="w-8 h-px" style={{ background:`linear-gradient(90deg,${pal.from},${pal.to})` }}/>
                  <span className="text-[10px] font-semibold text-slate-400 tracking-[.08em] uppercase">
                    {active + 1} of {servicesData.length}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 leading-snug mb-3 m-0"
                  style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.4rem,2.8vw,2rem)" }}>
                  {svc.title}
                </h3>

                {/* Animated progress bar */}
                <div className="w-full max-w-[280px] h-[3px] bg-slate-100 rounded-full overflow-hidden">
                  <div
                    key={`bar-${animKey}`}
                    className="svc-bar svc-progress h-full rounded-full"
                    style={{ width:`${((active+1)/servicesData.length)*100}%`, "--sf":pal.from, "--st":pal.to }}
                  />
                </div>
              </div>

              {/* Highlight chips row */}
              <div className="flex-shrink-0 flex flex-col gap-2 hidden xl:flex">
                {svc.highlights.map((h,hi)=>(
                  <div key={hi} className="svc-chip flex items-center gap-2 px-3 py-1.5 rounded-xl"
                    style={{ background:`linear-gradient(135deg,${pal.from}12,${pal.to}08)`,
                      border:`1px solid ${pal.from}25` }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background:`linear-gradient(135deg,${pal.from},${pal.to})` }}/>
                    <span className="text-[11px] font-semibold text-slate-600 whitespace-nowrap">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── BOTTOM BODY ── */}
            <div className="px-8 sm:px-10 lg:px-12 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">

                {/* Left: description + tags + CTA */}
                <div>
                  <p className="text-slate-500 text-[14.5px] leading-[1.85] mb-6 max-w-[540px]">
                    {svc.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {svc.tags.map((tag,ti)=>(
                      <Link key={ti} href={tag.href}
                        className="svc-tag text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full no-underline">
                        {tag.label}
                      </Link>
                    ))}
                  </div>

                  {/* CTA + dots */}
                  <div className="flex flex-wrap items-center gap-5">
                    <Link href={svc.headinglink}
                      className="svc-cta inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white text-[13px] font-semibold no-underline"
                      style={{ background:`linear-gradient(135deg,${pal.from},${pal.to})`,
                        boxShadow:`0 8px 28px ${pal.to}45`, fontFamily:"'Poppins',sans-serif" }}>
                      Learn More
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M1.5 6.5h9M7 2.5l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>

                    {/* Step dots */}
                    <div className="flex items-center gap-1.5">
                      {servicesData.map((_,di)=>(
                        <button key={di} onClick={()=>handleTab(di)}
                          aria-label={`Service ${di+1}`}
                          className="rounded-full border-none cursor-pointer p-0 transition-all duration-300"
                          style={{
                            width: active===di ? 24 : 7,
                            height: 7,
                            background: active===di
                              ? `linear-gradient(90deg,${pal.from},${pal.to})`
                              : "rgba(203,213,225,1)",
                            boxShadow: active===di ? `0 0 10px ${pal.from}60` : "none",
                          }}/>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: stats mini cards */}
                <div className="hidden sm:flex flex-col gap-3 min-w-[140px]">
                  {[
                    { v:"200+", l:"Projects" },
                    { v:"98%",  l:"Satisfaction" },
                    { v:"5★",   l:"Rating" },
                  ].map((st,si)=>(
                    <div key={si}
                      className="rounded-2xl p-4 flex flex-col gap-0.5 text-center"
                      style={{ background:`linear-gradient(135deg,${pal.from}10,${pal.to}07)`,
                        border:`1px solid ${pal.from}22` }}>
                      <div className="svc-stat-num font-extrabold leading-none"
                        style={{ fontFamily:"'Poppins',sans-serif", fontSize:"1.5rem",
                          "--sf":pal.from, "--st":pal.to }}>
                        {st.v}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium tracking-[.06em] uppercase">{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}