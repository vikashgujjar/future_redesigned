"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

/* ─── data ───────────────────────────────────────────── */
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

const palette = [
  { from: "#2dd4bf", to: "#06b6d4" },
  { from: "#6366f1", to: "#8b5cf6" },
  { from: "#0ea5e9", to: "#2dd4bf" },
  { from: "#8b5cf6", to: "#6366f1" },
  { from: "#2dd4bf", to: "#6366f1" },
];

/* ─── main ─────────────────────────────────────────────── */
export default function Service() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 xl:px-24 overflow-hidden"
      style={{
        fontFamily: "'Inter',sans-serif",
        background:
          "radial-gradient(ellipse at 0% 0%,   rgba(204,251,241,.70) 0%, transparent 45%)," +
          "radial-gradient(ellipse at 100% 100%, rgba(224,231,255,.65) 0%, transparent 45%)," +
          "radial-gradient(ellipse at 100% 0%,  rgba(199,210,254,.40) 0%, transparent 40%)," +
          "radial-gradient(ellipse at 0%  100%, rgba(167,243,208,.35) 0%, transparent 40%)," +
          "linear-gradient(150deg,#f0fdf9 0%,#f8fafc 40%,#eef2ff 80%,#f5f3ff 100%)",
      }}
    >
      <style>{`
        /* bg dot grid */
        .svc2-dot {
          background-image: radial-gradient(circle, rgba(99,102,241,.09) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        @keyframes svcCW  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes svcCCW { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes svcDot {
          0%,100%{ transform:translateY(0) scale(1);      opacity:.55; }
          50%    { transform:translateY(-8px) scale(1.4); opacity:.9; }
        }

        /* horizontal accordion item */
        .svc2-item {
          transition: flex .52s cubic-bezier(.22,.87,.48,1),
                      border-color .32s ease,
                      box-shadow .32s ease,
                      background .32s ease;
          cursor: pointer;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* collapsed info fades out when item is active */
        .svc2-collapsed {
          transition: opacity .22s ease, transform .22s ease;
        }
        /* expanded content fades in */
        .svc2-expanded {
          transition: opacity .30s ease .18s, transform .30s ease .18s;
        }

        /* content entrance */
        @keyframes svc2In {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .svc2-content-in { animation: svc2In .38s ease both; }

        /* tag pill hover */
        .svc2-tag {
          transition: background .18s, border-color .18s, color .18s;
        }

        /* mobile accordion */
        .svc2-mob-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height .42s cubic-bezier(.22,.87,.48,1);
        }
        .svc2-mob-body.open { max-height: 700px; }

        /* rotating chevron */
        .svc2-chevron { transition: transform .28s ease; }
        .svc2-chevron.open { transform: rotate(180deg); }
      `}</style>

      {/* bg dot grid */}
      <div className="svc2-dot absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* radial glow blobs */}
      <div className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(45,212,191,.18) 0%,transparent 65%)", transform:"translate(-30%,-30%)" }} />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.16) 0%,transparent 65%)", transform:"translate(30%,30%)" }} />

      {/* ── TOP-LEFT: rotating nested diamonds ── */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="320" height="320"
        viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <g style={{ transformOrigin:"0px 0px", animation:"svcCW 40s linear infinite" }}>
          <polygon points="195,0 0,195 -195,0 0,-195"
            stroke="rgba(45,212,191,.18)" strokeWidth="1.4" strokeDasharray="22 11" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{ transformOrigin:"0px 0px", animation:"svcCCW 27s linear infinite" }}>
          <polygon points="138,0 0,138 -138,0 0,-138"
            stroke="rgba(34,211,238,.23)" strokeWidth="1.6" strokeDasharray="16 10" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{ transformOrigin:"0px 0px", animation:"svcCW 16s linear infinite" }}>
          <polygon points="83,0 0,83 -83,0 0,-83"
            stroke="rgba(45,212,191,.30)" strokeWidth="2" strokeDasharray="11 8" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(54,54)" style={{ animation:"svcDot 4s ease-in-out infinite" }}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(45,212,191,.65)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(45,212,191,.65)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
        <g transform="translate(102,30)" style={{ animation:"svcDot 5.5s ease-in-out 1.3s infinite" }}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(34,211,238,.55)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(34,211,238,.55)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
        <g transform="translate(30,108)" style={{ animation:"svcDot 7s ease-in-out 2.6s infinite" }}>
          <line x1="-3" y1="0" x2="3" y2="0" stroke="rgba(45,212,191,.45)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(45,212,191,.45)" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ── BOTTOM-RIGHT: rotating nested hexagons ── */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="320" height="320"
        viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <g style={{ transformOrigin:"320px 320px", animation:"svcCCW 34s linear infinite" }}>
          <polygon points="508,320 414,157 226,157 132,320 226,483 414,483"
            stroke="rgba(99,102,241,.18)" strokeWidth="1.4" strokeDasharray="20 10" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{ transformOrigin:"320px 320px", animation:"svcCW 23s linear infinite" }}>
          <polygon points="450,320 385,207 255,207 190,320 255,433 385,433"
            stroke="rgba(139,92,246,.23)" strokeWidth="1.6" strokeDasharray="15 9" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{ transformOrigin:"320px 320px", animation:"svcCCW 14s linear infinite" }}>
          <polygon points="396,320 358,254 282,254 244,320 282,386 358,386"
            stroke="rgba(99,102,241,.30)" strokeWidth="2" strokeDasharray="10 7" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(268,272)" style={{ animation:"svcDot 4.5s ease-in-out infinite" }}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(99,102,241,.65)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(99,102,241,.65)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
        <g transform="translate(297,237)" style={{ animation:"svcDot 6s ease-in-out 1.6s infinite" }}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(139,92,246,.55)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(139,92,246,.55)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ── HEADING ─────────────────────────────── */}
      <div className="relative z-10 text-center mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
          style={{ background:"rgba(45,212,191,.10)", border:"1px solid rgba(45,212,191,.28)" }}>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
            style={{ fontFamily:"'Inter',sans-serif" }}>
            Our Services
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
          style={{ fontFamily:"'Poppins',sans-serif" }}>
          We Empower Clients To{" "}
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 bg-clip-text text-transparent">
            Be Loved
          </span>
        </h2>

        <div className="mx-auto mt-4 w-16 h-1 rounded-full"
          style={{ background:"linear-gradient(to right,#2dd4bf,#6366f1)" }} />
      </div>

      {/* ════════════════════════════════════════
          DESKTOP — Horizontal expanding accordion
      ════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto hidden lg:flex gap-3"
        style={{ height: 420 }}>
        {servicesData.map((svc, i) => {
          const isActive = active === i;
          const pal = palette[i];
          return (
            <div
              key={i}
              className="svc2-item"
              style={{
                flex: isActive ? "1" : "0 0 78px",
                background: isActive
                  ? `linear-gradient(160deg,${pal.from}18 0%,${pal.to}0a 50%,rgba(255,255,255,.92) 100%)`
                  : "rgba(255,255,255,.80)",
                border: `1px solid ${isActive ? pal.from + "50" : "rgba(203,213,225,.70)"}`,
                boxShadow: isActive
                  ? `0 20px 60px ${pal.from}22, 0 4px 20px rgba(45,212,191,.10), 0 0 0 1px ${pal.from}18`
                  : "0 2px 10px rgba(99,102,241,.06)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={() => setActive(i)}
            >
              {/* top gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ background: `linear-gradient(to right,${pal.from},${pal.to})` }} />

              {/* corner glow (active only) */}
              {isActive && (
                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle,${pal.from}18 0%,transparent 65%)` }} />
              )}

              {/* ── COLLAPSED state ── */}
              <div
                className="svc2-collapsed absolute inset-0 flex flex-col items-center pt-6 pb-6"
                style={{
                  opacity: isActive ? 0 : 1,
                  transform: isActive ? "scale(.9)" : "scale(1)",
                  pointerEvents: isActive ? "none" : "auto",
                }}
              >
                {/* number — pinned at top */}
                <span className="text-[11px] font-black mb-4"
                  style={{ color: pal.from, fontFamily:"'Poppins',sans-serif" }}>
                  {svc.number}
                </span>

                {/* icon — fixed position just below number, same across all cards */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${pal.from}1c`, border: `1px solid ${pal.from}45` }}>
                  <Image src={svc.icon} width={22} height={22} alt={svc.title}
                    className="object-contain opacity-80" />
                </div>

                {/* vertical title — pushed to bottom */}
                <span
                  className="mt-auto text-[10.5px] font-bold uppercase tracking-[.18em] whitespace-nowrap select-none"
                  style={{
                    color: "#64748b",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    fontFamily:"'Poppins',sans-serif",
                  }}
                >
                  {svc.title}
                </span>
              </div>

              {/* ── EXPANDED state ── */}
              <div
                className="svc2-expanded absolute inset-0 p-8 flex flex-col overflow-hidden"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(24px)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* ghost number watermark */}
                <span
                  className="absolute right-4 top-3 select-none pointer-events-none"
                  style={{
                    fontSize: "9rem", lineHeight: 1,
                    fontFamily:"'Poppins',sans-serif",
                    color: pal.from, opacity: .055,
                  }}
                >
                  {svc.number}
                </span>

                {/* animated content wrapper */}
                <div key={active} className="svc2-content-in flex flex-col h-full">

                  {/* icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg,${pal.from},${pal.to})`,
                      boxShadow: `0 10px 28px ${pal.to}55`,
                    }}
                  >
                    <Image src={svc.icon} width={34} height={34} alt={svc.title}
                      className="w-8 h-8 object-contain drop-shadow" />
                  </div>

                  {/* label + title */}
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] mb-1"
                    style={{ color: pal.from, fontFamily:"'Inter',sans-serif" }}>
                    Service {svc.number}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-3"
                    style={{ fontFamily:"'Poppins',sans-serif" }}>
                    {svc.title}
                  </h3>

                  {/* divider */}
                  <div className="w-10 h-[2px] rounded-full mb-4 flex-shrink-0"
                    style={{ background: `linear-gradient(to right,${pal.from},${pal.to})` }} />

                  {/* description */}
                  <p className="text-[13px] leading-[1.82] flex-1 overflow-hidden text-gray-500"
                    style={{ fontFamily:"'Inter',sans-serif" }}>
                    {svc.description}
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-5 flex-shrink-0">
                    {svc.tags.map((tag, ti) => (
                      <Link key={ti} href={tag.href}
                        className="svc2-tag text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{
                          background: `${pal.from}14`,
                          border: `1px solid ${pal.from}40`,
                          color: pal.from,
                          fontFamily:"'Inter',sans-serif",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${pal.from}28`; }}
                        onMouseLeave={e => { e.currentTarget.style.background = `${pal.from}14`; }}
                      >
                        {tag.label}
                      </Link>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={svc.headinglink}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold self-start flex-shrink-0 hover:-translate-y-0.5 transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg,${pal.from},${pal.to})`,
                      boxShadow: `0 6px 22px ${pal.to}55`,
                      fontFamily:"'Poppins',sans-serif",
                    }}
                  >
                    Learn More <FaArrowRight size={11} />
                  </Link>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ════════════════════════════════════════
          MOBILE — Vertical accordion
      ════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto lg:hidden space-y-3">
        {servicesData.map((svc, i) => {
          const isOpen = active === i;
          const pal = palette[i];
          return (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: isOpen
                  ? `linear-gradient(160deg,${pal.from}14,${pal.to}08,rgba(255,255,255,.92))`
                  : "rgba(255,255,255,.82)",
                border: `1px solid ${isOpen ? pal.from + "45" : "rgba(203,213,225,.70)"}`,
                boxShadow: isOpen ? `0 8px 28px ${pal.from}18` : "0 2px 8px rgba(99,102,241,.05)",
                backdropFilter: "blur(12px)",
                transition: "background .30s, border-color .30s, box-shadow .30s",
              }}
            >
              {/* top accent */}
              <div className="h-[3px]"
                style={{ background: `linear-gradient(to right,${pal.from},${pal.to})` }} />

              {/* header row */}
              <div
                className="flex items-center gap-4 px-4 py-4 cursor-pointer select-none"
                onClick={() => setActive(isOpen ? -1 : i)}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isOpen
                      ? `linear-gradient(135deg,${pal.from},${pal.to})`
                      : `${pal.from}1c`,
                    border: `1px solid ${pal.from}45`,
                    boxShadow: isOpen ? `0 4px 16px ${pal.to}45` : "none",
                    transition: "all .30s",
                  }}
                >
                  <Image src={svc.icon} width={22} height={22} alt={svc.title}
                    className="object-contain drop-shadow" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[9.5px] font-bold uppercase tracking-[.16em] mb-0.5"
                    style={{ color: pal.from, fontFamily:"'Inter',sans-serif" }}>
                    Service {svc.number}
                  </p>
                  <h3 className="text-[15px] font-bold text-gray-900 truncate"
                    style={{ fontFamily:"'Poppins',sans-serif" }}>
                    {svc.title}
                  </h3>
                </div>

                {/* chevron */}
                <div
                  className={`svc2-chevron w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isOpen ? "open" : ""}`}
                  style={{
                    background: isOpen ? `${pal.from}20` : "rgba(203,213,225,.40)",
                    border: `1px solid ${isOpen ? pal.from + "40" : "rgba(203,213,225,.70)"}`,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke={isOpen ? pal.from : "#94a3b8"}
                      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* expandable body */}
              <div className={`svc2-mob-body ${isOpen ? "open" : ""}`}>
                <div className="px-4 pb-5 space-y-4">
                  <div className="w-8 h-[2px] rounded-full"
                    style={{ background: `linear-gradient(to right,${pal.from},${pal.to})` }} />
                  <p className="text-[13px] leading-7 text-gray-500"
                    style={{ fontFamily:"'Inter',sans-serif" }}>
                    {svc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag, ti) => (
                      <Link key={ti} href={tag.href}
                        className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{
                          background: `${pal.from}14`,
                          border: `1px solid ${pal.from}40`,
                          color: pal.from,
                          fontFamily:"'Inter',sans-serif",
                        }}>
                        {tag.label}
                      </Link>
                    ))}
                  </div>
                  <Link href={svc.headinglink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:-translate-y-0.5 transition-all"
                    style={{
                      background: `linear-gradient(135deg,${pal.from},${pal.to})`,
                      boxShadow: `0 4px 16px ${pal.to}45`,
                      fontFamily:"'Poppins',sans-serif",
                    }}>
                    Learn More <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── View All CTA ─────────────────────────── */}
      <div className="relative z-10 text-center mt-12">
        <Link
          href="/service"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white hover:-translate-y-0.5 transition-all duration-300"
          style={{
            fontFamily:"'Poppins',sans-serif",
            background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
            boxShadow:"0 8px 30px rgba(99,102,241,.40)",
          }}
        >
          View All Services <FaArrowRight size={11} />
        </Link>
      </div>
    </section>
  );
}
