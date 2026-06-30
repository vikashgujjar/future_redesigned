"use client";
import React from "react";
import Image from "next/image";

const services = [
  {
    src:   "/Assets/search.webp",
    alt:   "SEO",
    title: "Search Engine Optimisation",
    desc:  "Boost your website's visibility with our personalized SEO services, designed to improve search rankings and connect you with your ideal audience.",
    fi: "#2dd4bf", ti: "#06b6d4", num: "01",
  },
  {
    src:   "/Assets/family.webp",
    alt:   "Social Media",
    title: "Social Media Marketing",
    desc:  "Enhance your brand's reach with our customized Social Media Marketing services, designed to authentically engage your audience and foster meaningful growth.",
    fi: "#6366f1", ti: "#8b5cf6", num: "02",
  },
  {
    src:   "/Assets/digital-marketing.webp",
    alt:   "SEM",
    title: "Search Engine Marketing / Paid Ads",
    desc:  "Drive targeted traffic and enhance your online presence with our specialized Search Engine Marketing and Paid Ads services, crafted to optimize ROI and achieve measurable success.",
    fi: "#0ea5e9", ti: "#2dd4bf", num: "03",
  },
];

export default function DigitalMarketingService() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 xl:px-24"
      style={{ background: "#f8faff" }}
    >
      <style>{`
        .dms-dot {
          background-image: radial-gradient(circle, rgba(99,102,241,.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .dms-svc {
          background: #ffffff;
          border: 1px solid rgba(99,102,241,.10);
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .dms-svc:hover { transform: translateY(-4px); }
        .dms-hero-card { min-height: 590px; }
        @media (min-width: 1024px) { .dms-hero-card { min-height: 500px; } }
      `}</style>

      {/* bg dot grid */}
      <div className="dms-dot absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ambient glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.08) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.08) 0%,transparent 65%)" }} />

      {/* ══════════════════════════════════════════
          BENTO GRID  — hero card  +  service cards
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">

        {/* ── HERO CARD ── 3 / 5 cols ──────────── */}
        <div
          className="dms-hero-card lg:col-span-3 relative rounded-3xl overflow-hidden flex flex-col p-8 sm:p-10 lg:p-12"
          style={{
            background: "linear-gradient(145deg,#0d9488 0%,#1e3a8a 50%,#4f46e5 100%)",
          }}
        >
          {/* decorative circles */}
          <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,.10)" }} />
          <div className="absolute -bottom-14 -left-14 w-52 h-52 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,.08)" }} />
          <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-12 h-12 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,.06)" }} />
          <div className="absolute top-7 left-[46%] w-7 h-7 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,.07)" }} />
          <div className="absolute bottom-14 left-[22%] w-5 h-5 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,.06)" }} />

          {/* dot pattern */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,.055) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />

          {/* ── text — top-left ── */}
          <div className="relative z-10 max-w-xs sm:max-w-sm">
            {/* Bilbo script */}
            <span
              className="text-xl sm:text-2xl tracking-widest block mb-4"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive", color: "rgba(255,255,255,.75)" }}>
              Digital Marketing Services
            </span>

            {/* h2 */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              We Make Finest<br />
              Marketing With{" "}
              <span style={{ color: "#7dd3fa" }}>Great Passion</span>
            </h2>

            {/* divider */}
            <div className="w-14 h-1 rounded-full mt-5"
              style={{ background: "rgba(255,255,255,.30)" }} />
          </div>

          {/* ── illustration — bottom-right, absolutely placed ── */}
          <div
            className="absolute bottom-0 right-0 w-full md:w-[60%] pointer-events-none"
            aria-hidden="true"
          >
            <Image
              src="/Assets/connect_img.png"
              width={460}
              height={380}
              alt="Digital Marketing Illustration"
              className="object-contain w-full drop-shadow-2xl"
            />
          </div>
        </div>

        {/* ── SERVICE CARDS ── 2 / 5 cols ─────── */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {services.map((svc, i) => (
            <div
              key={i}
              className="dms-svc relative flex items-start gap-4 p-5 rounded-2xl overflow-hidden flex-1"
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 0 1.5px ${svc.fi}88, 0 14px 36px ${svc.fi}20`;
                e.currentTarget.style.borderColor = svc.fi + "60";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor = "";
              }}
            >
              {/* left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: `linear-gradient(to bottom,${svc.fi},${svc.ti})` }}
              />

              {/* ghost number watermark */}
              <span
                className="absolute right-4 top-2 font-black select-none pointer-events-none"
                style={{
                  fontSize: 52,
                  lineHeight: 1,
                  fontFamily: "'Poppins',sans-serif",
                  color: svc.fi,
                  opacity: 0.09,
                }}>
                {svc.num}
              </span>

              {/* icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ml-2"
                style={{
                  background: `linear-gradient(135deg,${svc.fi}28,${svc.ti}20)`,
                  border: `1.5px solid ${svc.fi}60`,
                  boxShadow: `0 4px 12px ${svc.fi}28`,
                }}>
                <Image src={svc.src} width={26} height={26} alt={svc.alt}
                  className="w-6 h-6 object-contain" />
              </div>

              {/* text */}
              <div className="flex-1 pr-10">
                <h4
                  className="text-base font-bold mb-1.5 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
                  style={{ fontFamily: "'Poppins',sans-serif" }}>
                  {svc.title}
                </h4>
                <p
                  className="text-xs leading-relaxed text-gray-400"
                  style={{ fontFamily: "'Inter',sans-serif" }}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
