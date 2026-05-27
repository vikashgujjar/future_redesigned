"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

/* ─── service data ────────────────────────────────────── */
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
  },
];

/* per-service accent palette */
const palette = [
  { from: "#2dd4bf", to: "#06b6d4" },
  { from: "#6366f1", to: "#8b5cf6" },
  { from: "#0ea5e9", to: "#2dd4bf" },
  { from: "#8b5cf6", to: "#6366f1" },
  { from: "#2dd4bf", to: "#6366f1" },
];

/* ─── component ──────────────────────────────────────── */
export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey]         = useState(0);

  const handleTab = (i) => {
    if (i === activeIndex) return;
    setActiveIndex(i);
    setAnimKey((k) => k + 1);
  };

  const svc = servicesData[activeIndex];
  const pal = palette[activeIndex];

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 xl:px-24"
      style={{
        fontFamily: "'Inter', sans-serif",
        background:
          "radial-gradient(ellipse at 0% 0%,   rgba(204,251,241,.70) 0%, transparent 45%)," +
          "radial-gradient(ellipse at 100% 100%, rgba(224,231,255,.65) 0%, transparent 45%)," +
          "radial-gradient(ellipse at 100% 0%,  rgba(199,210,254,.40) 0%, transparent 40%)," +
          "radial-gradient(ellipse at 0%  100%, rgba(167,243,208,.35) 0%, transparent 40%)," +
          "linear-gradient(150deg, #f0fdf9 0%, #f8fafc 40%, #eef2ff 80%, #f5f3ff 100%)",
      }}
    >
      {/* ── keyframes ───────────────────────────────── */}
      <style>{`
        @keyframes svcCW        { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes svcCCW       { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes svcDot       {
          0%,100%{ transform:translateY(0) scale(1);    opacity:.55; }
          50%    { transform:translateY(-8px) scale(1.4); opacity:.9; }
        }
        @keyframes svcIn        {
          from{ opacity:0; transform:translateY(22px) scale(.97); }
          to  { opacity:1; transform:translateY(0)    scale(1);   }
        }
        @keyframes svcIconFloat {
          0%,100%{ transform:translateY(0px);  }
          50%    { transform:translateY(-12px); }
        }
        @keyframes svcRingPulse {
          0%,100%{ opacity:.20; transform:scale(1);    }
          50%    { opacity:.45; transform:scale(1.05); }
        }
        @keyframes svcGridFade  {
          from{ opacity:0; } to{ opacity:1; }
        }
        .svc-panel      { animation: svcIn .44s cubic-bezier(.22,.87,.48,1) both; }
        .svc-icon-float { animation: svcIconFloat 5s ease-in-out infinite; }
        .svc-ring-pulse { animation: svcRingPulse 3s ease-in-out infinite; }

        /* light dot grid */
        .svc-dot-grid {
          background-image: radial-gradient(circle, rgba(99,102,241,.09) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* light tab inactive */
        .svc-tab-idle {
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(203,213,225,.8);
          color: #64748b;
          transition: all .25s ease;
        }
        .svc-tab-idle:hover {
          background: rgba(204,251,241,.5);
          border-color: rgba(45,212,191,.5);
          color: #0d9488;
        }

        /* light panel */
        .svc-glass {
          background: rgba(255,255,255,.85);
          border: 1px solid rgba(203,213,225,.6);
          backdrop-filter: blur(16px);
        }

        /* tag pills light */
        .svc-tag {
          background: rgba(248,250,252,1);
          border: 1px solid rgba(203,213,225,.9);
          color: #64748b;
          transition: all .2s ease;
        }
        .svc-tag:hover {
          background: rgba(204,251,241,.5);
          border-color: rgba(45,212,191,.5);
          color: #0d9488;
        }

        /* step dot inactive */
        .svc-step-idle {
          background: rgba(203,213,225,1);
        }
      `}</style>

      {/* ── dot grid overlay ────────────────────────── */}
      <div className="svc-dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ── radial glow blobs ───────────────────────── */}
      <div
        className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle, rgba(45,212,191,.18) 0%, transparent 65%)", transform:"translate(-30%,-30%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle, rgba(99,102,241,.16) 0%, transparent 65%)", transform:"translate(30%,30%)" }}
        aria-hidden="true"
      />

      {/* ── TOP-LEFT: rotating nested diamonds ─────────── */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="320" height="320"
        viewBox="0 0 320 320" fill="none" aria-hidden="true">

        {/* diamond ring — large, slow CW */}
        <g style={{ transformOrigin:"0px 0px", animation:"svcCW 40s linear infinite" }}>
          <polygon points="195,0 0,195 -195,0 0,-195"
            stroke="rgba(45,212,191,.18)" strokeWidth="1.4"
            strokeDasharray="22 11" strokeLinecap="round" fill="none"/>
        </g>
        {/* diamond ring — mid, CCW */}
        <g style={{ transformOrigin:"0px 0px", animation:"svcCCW 27s linear infinite" }}>
          <polygon points="138,0 0,138 -138,0 0,-138"
            stroke="rgba(34,211,238,.23)" strokeWidth="1.6"
            strokeDasharray="16 10" strokeLinecap="round" fill="none"/>
        </g>
        {/* diamond ring — small, fast CW */}
        <g style={{ transformOrigin:"0px 0px", animation:"svcCW 16s linear infinite" }}>
          <polygon points="83,0 0,83 -83,0 0,-83"
            stroke="rgba(45,212,191,.30)" strokeWidth="2"
            strokeDasharray="11 8" strokeLinecap="round" fill="none"/>
        </g>

        {/* sparkle + */}
        <g transform="translate(54,54)" style={{ animation:"svcDot 4s ease-in-out infinite" }}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(45,212,191,.65)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(45,212,191,.65)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
        {/* sparkle × */}
        <g transform="translate(102,30)" style={{ animation:"svcDot 5.5s ease-in-out 1.3s infinite" }}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(34,211,238,.55)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(34,211,238,.55)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
        {/* sparkle + small */}
        <g transform="translate(30,108)" style={{ animation:"svcDot 7s ease-in-out 2.6s infinite" }}>
          <line x1="-3" y1="0" x2="3" y2="0" stroke="rgba(45,212,191,.45)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(45,212,191,.45)" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ── BOTTOM-RIGHT: rotating nested hexagons ──── */}
      {/* hexagon vertices at (cx,cy) r: (cx+r,cy),(cx+r/2,cy-r*0.866),(cx-r/2,cy-r*0.866),(cx-r,cy),(cx-r/2,cy+r*0.866),(cx+r/2,cy+r*0.866) */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="320" height="320"
        viewBox="0 0 320 320" fill="none" aria-hidden="true">

        {/* hexagon — large, slow CCW, cx=cy=320, r=188 */}
        <g style={{ transformOrigin:"320px 320px", animation:"svcCCW 34s linear infinite" }}>
          <polygon points="508,320 414,157 226,157 132,320 226,483 414,483"
            stroke="rgba(99,102,241,.18)" strokeWidth="1.4"
            strokeDasharray="20 10" strokeLinecap="round" fill="none"/>
        </g>
        {/* hexagon — mid, CW, r=130 */}
        <g style={{ transformOrigin:"320px 320px", animation:"svcCW 23s linear infinite" }}>
          <polygon points="450,320 385,207 255,207 190,320 255,433 385,433"
            stroke="rgba(139,92,246,.23)" strokeWidth="1.6"
            strokeDasharray="15 9" strokeLinecap="round" fill="none"/>
        </g>
        {/* hexagon — small, fast CCW, r=76 */}
        <g style={{ transformOrigin:"320px 320px", animation:"svcCCW 14s linear infinite" }}>
          <polygon points="396,320 358,254 282,254 244,320 282,386 358,386"
            stroke="rgba(99,102,241,.30)" strokeWidth="2"
            strokeDasharray="10 7" strokeLinecap="round" fill="none"/>
        </g>

        {/* sparkle + */}
        <g transform="translate(268,272)" style={{ animation:"svcDot 4.5s ease-in-out infinite" }}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(99,102,241,.65)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(99,102,241,.65)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
        {/* sparkle × */}
        <g transform="translate(297,237)" style={{ animation:"svcDot 6s ease-in-out 1.6s infinite" }}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(139,92,246,.55)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(139,92,246,.55)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ════════════════════════════════════════════
          SECTION HEADER
      ════════════════════════════════════════════ */}
      <div className="relative z-10 text-center mb-10 lg:mb-14">

        {/* badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
          style={{ background:"rgba(204,251,241,.7)", border:"1px solid rgba(45,212,191,.35)" }}
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse" />
          <span
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{
              fontFamily:"'Inter',sans-serif",
              background:"linear-gradient(to right,#2dd4bf,#06b6d4)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
            }}
          >
            Our Services
          </span>
        </div>

        {/* heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
          style={{ fontFamily:"'Poppins',sans-serif" }}
        >
          We Empower Clients To{" "}
          <span style={{
            background:"linear-gradient(to right,#2dd4bf,#6366f1)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}>
            Be Loved
          </span>
        </h2>

        {/* divider */}
        <div
          className="mx-auto mt-4 w-16 h-1 rounded-full"
          style={{ background:"linear-gradient(to right,#2dd4bf,#6366f1)" }}
        />
      </div>

      {/* ════════════════════════════════════════════
          TAB PILLS
      ════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 lg:mb-12">
        {servicesData.map((s, i) => {
          const isActive = activeIndex === i;
          const p = palette[i];
          return (
            <button
              key={i}
              onClick={() => handleTab(i)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold outline-none transition-all duration-300
                ${isActive ? "text-white" : "svc-tab-idle"}`}
              style={isActive ? {
                background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                boxShadow: `0 6px 22px ${p.to}40, 0 0 0 1px ${p.from}25`,
              } : {
                background: "rgba(255,255,255,.80)",
                border: "1px solid rgba(203,213,225,.9)",
                color: "#64748b",
              }}
            >
              <span
                className="text-[10px] font-black"
                style={{ opacity: isActive ? .7 : .5 }}
              >
                {s.number}
              </span>
              <span style={{ fontFamily:"'Poppins',sans-serif" }}>{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* ════════════════════════════════════════════
          SHOWCASE PANEL
      ════════════════════════════════════════════ */}
      <div
        key={animKey}
        className="svc-panel svc-glass relative z-10 max-w-5xl mx-auto rounded-3xl overflow-hidden"
        style={{
          boxShadow:`0 20px 60px rgba(99,102,241,.10), 0 4px 20px rgba(45,212,191,.08), 0 0 0 1px rgba(203,213,225,.6)`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">

          {/* ── LEFT: icon visual zone ─────────────── */}
          <div
            className="relative flex flex-col items-center justify-center py-12 lg:py-16 px-10 overflow-hidden"
            style={{
              background: `linear-gradient(140deg, ${pal.from}22 0%, ${pal.to}14 100%), rgba(248,250,252,.6)`,
              borderRight: "1px solid rgba(203,213,225,.5)",
            }}
          >
            {/* pulsing concentric rings */}
            {[150, 115, 82].map((r, ri) => (
              <div
                key={ri}
                className="svc-ring-pulse absolute rounded-full"
                style={{
                  width:  r * 2,
                  height: r * 2,
                  top:    `calc(50% - ${r}px)`,
                  left:   `calc(50% - ${r}px)`,
                  border: `${ri === 1 ? "1.5px" : "1px"} solid ${pal.from}`,
                  opacity: 0.22 - ri * 0.04,
                  animationDelay: `${ri * 0.9}s`,
                }}
              />
            ))}

            {/* icon card — white card on dark bg looks premium */}
            <div
              className="svc-icon-float relative z-10 w-28 h-28 lg:w-36 lg:h-36 rounded-3xl
                flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,.92)",
                border: `1px solid rgba(203,213,225,.7)`,
                boxShadow: `0 16px 44px ${pal.from}30, 0 4px 12px rgba(0,0,0,.06)`,
              }}
            >
              <Image
                src={svc.icon}
                width={80}
                height={80}
                alt={svc.title}
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-lg"
              />
            </div>

            {/* ghost number watermark */}
            <span
              className="absolute bottom-4 right-5 text-[7rem] leading-none font-black select-none pointer-events-none"
              style={{
                fontFamily:"'Poppins',sans-serif",
                background:`linear-gradient(135deg,${pal.from},${pal.to})`,
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                opacity:.12,
              }}
            >
              {svc.number}
            </span>

            {/* spinning dashed diamond decoration — top-left */}
            <svg
              className="absolute top-4 left-4 pointer-events-none"
              width="48" height="48" viewBox="-24 -24 48 48" fill="none"
              style={{ animation:"svcCW 12s linear infinite" }}
            >
              <polygon points="20,0 0,20 -20,0 0,-20"
                stroke={`${pal.from}70`} strokeWidth="1.5"
                strokeDasharray="9 5" strokeLinecap="round" fill="none"/>
            </svg>
            {/* spinning dashed triangle decoration — bottom-right */}
            <svg
              className="absolute bottom-5 right-5 pointer-events-none"
              width="32" height="32" viewBox="-16 -16 32 32" fill="none"
              style={{ animation:"svcCCW 9s linear infinite" }}
            >
              <polygon points="0,-14 12,7 -12,7"
                stroke={`${pal.to}65`} strokeWidth="1.2"
                strokeDasharray="7 4" strokeLinecap="round" fill="none"/>
            </svg>

            {/* corner glow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-tl-3xl"
              style={{ background:`radial-gradient(ellipse at 0% 0%, ${pal.from}18 0%, transparent 60%)` }}
            />
          </div>

          {/* ── RIGHT: content ─────────────────────── */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

            {/* ghost number */}
            <span
              className="text-5xl font-black leading-none mb-1 select-none block"
              style={{
                fontFamily:"'Poppins',sans-serif",
                background:`linear-gradient(135deg,${pal.from},${pal.to})`,
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                opacity:.22,
              }}
            >
              {svc.number}
            </span>

            {/* title */}
            <h3
              className="text-2xl sm:text-3xl lg:text-[1.85rem] font-bold text-gray-900 leading-snug mb-3"
              style={{ fontFamily:"'Poppins',sans-serif" }}
            >
              {svc.title}
            </h3>

            {/* gradient accent line */}
            <div
              className="w-12 h-1 rounded-full mb-5"
              style={{ background:`linear-gradient(to right,${pal.from},${pal.to})` }}
            />

            {/* description */}
            <p
              className="text-sm sm:text-base leading-7 text-gray-500 mb-6"
              style={{ fontFamily:"'Inter',sans-serif" }}
            >
              {svc.description}
            </p>

            {/* tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {svc.tags.map((tag, ti) => (
                <Link
                  key={ti}
                  href={tag.href}
                  className="svc-tag text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                >
                  {tag.label}
                </Link>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-5">
              <Link
                href={svc.headinglink}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                  text-white text-sm font-semibold
                  hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  fontFamily:"'Poppins',sans-serif",
                  background:`linear-gradient(135deg,${pal.from},${pal.to})`,
                  boxShadow:`0 8px 28px ${pal.to}50`,
                }}
              >
                Learn More
                <FaArrowRight className="text-xs" />
              </Link>

              {/* step indicator dots */}
              <div className="flex items-center gap-1.5">
                {servicesData.map((_, di) => (
                  <button
                    key={di}
                    onClick={() => handleTab(di)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:  activeIndex === di ? 22 : 6,
                      height: 6,
                      background: activeIndex === di
                        ? `linear-gradient(to right,${pal.from},${pal.to})`
                        : "rgba(203,213,225,1)",
                    }}
                    aria-label={`Go to service ${di + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── View All CTA ─────────────────────────────── */}
      <div className="relative z-10 text-center mt-10">
        <Link
          href="/service"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full
            text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
          style={{
            fontFamily:"'Poppins',sans-serif",
            background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
            boxShadow:"0 8px 30px rgba(99,102,241,.40)",
            color:"#fff",
          }}
        >
          View All Services
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
