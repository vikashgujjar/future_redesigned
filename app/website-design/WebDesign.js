"use client";
import React from "react";
import Image from "next/image";
import company from "../Assets/about-service.webp";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import service1 from "../Assets/service-img-1_1.webp";
import service2 from "../Assets/service-img-2.webp";
import service3 from "../Assets/service-img-3.webp";
import service4 from "../Assets/service-img-4.webp";
import GetNewInsight from "../components/GetNewInsight";

const services = [
  { title: "Web Application Development", category: "APP",            bgColor: "#e9ddff", href: "/web-app-development",        image: service1.src, alt: "Web App",             from: "#2dd4bf", to: "#6366f1" },
  { title: "Small Business Website",       category: "Marketing",      bgColor: "#ffdadb", href: "/business-developement",      image: service2.src, alt: "Small Business Website", from: "#6366f1", to: "#8b5cf6" },
  { title: "CMS Web Development",          category: "CMS",            bgColor: "#d6edff", href: "/cms-development",            image: service3.src, alt: "CMS",                  from: "#0ea5e9", to: "#2dd4bf" },
  { title: "Website Design & Development", category: "Website Design", bgColor: "#ffede1", href: "/web-app-developemnt-corporate", image: service4.src, alt: "Website Design",   from: "#a855f7", to: "#6366f1" },
];

export default function WebDesign() {
  return (
    <>
      <style>{`
        @keyframes wdCW      { to { transform: rotate(360deg) } }
        @keyframes wdCCW     { to { transform: rotate(-360deg) } }
        @keyframes wdPing    { 75%,100% { transform: scale(2.1); opacity: 0 } }
        @keyframes wdBarIn   { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes wdUp      { from { opacity:0; transform: translateY(20px) } to { opacity:1; transform: translateY(0) } }
        @keyframes wdFloat   { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(4deg)} }
        @keyframes wdBlobMov { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-16px,18px)} }

        .wd-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .wd-ping { position: relative }
        .wd-ping::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          background: inherit; animation: wdPing 2s ease-out infinite;
        }
        .wd-bar  { animation: wdBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left }
        .wd-up   { animation: wdUp .65s cubic-bezier(.22,1,.36,1) both }
        .wd-up-1 { animation-delay: .05s }
        .wd-up-2 { animation-delay: .13s }
        .wd-up-3 { animation-delay: .21s }
        .wd-card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .wd-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(99,102,241,.14) !important; }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO / BANNER — dark split with browser mockup
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden flex items-center"
        style={{
          background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
          fontFamily: "'Inter',sans-serif",
          minHeight: "clamp(520px,88vh,740px)",
        }}>

        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none z-[1] opacity-[.036]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none z-[1]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.028) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Ambient blobs */}
        <div className="absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.17) 0%,transparent 65%)", animation: "wdBlobMov 16s ease-in-out infinite" }} />
        <div className="absolute -bottom-48 right-0 w-[540px] h-[540px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.20) 0%,transparent 65%)", animation: "wdBlobMov 20s ease-in-out infinite reverse" }} />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(139,92,246,.10) 0%,transparent 65%)" }} />

        {/* SVG rotating arcs */}
        <svg className="absolute top-0 left-0 pointer-events-none z-[2]" width="420" height="420"
          viewBox="0 0 420 420" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="wdTL" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity=".30" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity=".03" />
            </linearGradient>
          </defs>
          <g style={{ transformOrigin:"0 0", animation:"wdCW 45s linear infinite" }}>
            <circle cx="0" cy="0" r="310" stroke="url(#wdTL)" strokeWidth="1.2" strokeDasharray="80 130" strokeLinecap="round" fill="none" />
          </g>
          <g style={{ transformOrigin:"0 0", animation:"wdCCW 30s linear infinite" }}>
            <circle cx="0" cy="0" r="210" stroke="rgba(45,212,191,.10)" strokeWidth="1" strokeDasharray="55 90" strokeLinecap="round" fill="none" />
          </g>
          <g style={{ transformOrigin:"0 0", animation:"wdCW 20s linear infinite" }}>
            <circle cx="0" cy="0" r="120" stroke="rgba(99,102,241,.16)" strokeWidth="1.4" strokeDasharray="35 58" strokeLinecap="round" fill="none" />
          </g>
        </svg>

        {/* Horizontal accent line */}
        <div className="absolute top-1/2 left-0 right-0 h-px pointer-events-none z-[2]"
          style={{ background: "linear-gradient(90deg,transparent,rgba(45,212,191,.12),rgba(99,102,241,.10),transparent)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28 py-20">
          <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-16 items-center">

            {/* LEFT: Text */}
            <div>
              {/* <div className="wd-up wd-up-1 inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-6"
                style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
                <span className="wd-ping w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    fontFamily: "'Poppins',sans-serif",
                  }}>
                  Website Design & Development
                </span>
              </div> */}

              <h1 className="wd-up wd-up-1 font-extrabold leading-[1.06] mb-5"
                style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,4vw,3rem)", color: "#fff" }}>
                WEBSITE DESIGN &{" "}
                <span style={{
                  background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  DEVELOPMENT SERVICES
                </span>
              </h1>

              <div className="wd-bar h-[3px] w-16 rounded-full mb-6"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

              <p className="wd-up wd-up-2 text-[14.5px] leading-[1.90] mb-8 max-w-[580px]"
                style={{ color: "rgba(255,255,255,.55)" }}>
                The biggest challenge faced by any small business is to expand its customer base.
                With the rising expenses of electronic and print media, the only option left for the
                small business owners is to create a strong digital presence. A professionally developed
                website for small business is the first step toward achieving this aim.{" "}
                <span className="font-semibold" style={{
                  background: "linear-gradient(135deg,#a78bfa,#818cf8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Future IT Touch Pvt. Ltd.
                </span>{" "}
                company providing a range of business website design services to clients worldwide.
                Our small business website design services are customized exclusively for startups at
                affordable rates. In the last 15 years, we have delivered effective web solutions to
                a number of small businesses and helped them enhance their growth online.
              </p>

              <div className="wd-up wd-up-3 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    boxShadow: "0 4px 24px rgba(45,212,191,.38)",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  Quick Enquiry <FaAngleRight className="w-3 h-3" />
                </Link>
                <a
                  href="tel:+917056937000"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.14)",
                    color: "rgba(255,255,255,.75)",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  Call us - 7056937000
                </a>
              </div>
            </div>

            {/* RIGHT: Browser mockup */}
            <div className="hidden lg:block relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-[30px] pointer-events-none"
                style={{ background: "linear-gradient(135deg,rgba(45,212,191,.24),rgba(99,102,241,.28))", filter: "blur(28px)", opacity: .65 }} />

              <div className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 40px 90px rgba(0,0,0,.60), 0 0 0 1px rgba(255,255,255,.08)" }}>

                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-3"
                  style={{ background: "#1e2336", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                  <div className="flex items-center gap-1.5">
                    {["#ff6b6b","#ffd93d","#2dd4bf"].map((c,i) => (
                      <span key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 ml-1"
                    style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }}>
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm0 0v10M1 6h10M2 3.5C3.3 4.8 4.6 5.4 6 5.4s2.7-.6 4-1.9M2 8.5C3.3 7.2 4.6 6.6 6 6.6s2.7.6 4 1.9"
                        stroke="rgba(255,255,255,.35)" strokeWidth="1.1" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,.35)", fontFamily: "'Inter',sans-serif" }}>
                      futuretouch.in
                    </span>
                  </div>
                </div>

                {/* Website preview */}
                <div className="p-4 space-y-3" style={{ background: "#fff" }}>

                  {/* Hero strip */}
                  <div className="relative rounded-xl overflow-hidden" style={{ height: 108 }}>
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(120deg,#2dd4bf 0%,#6366f1 60%,#8b5cf6 100%)" }} />
                    <div className="absolute top-3 right-4 flex gap-2">
                      {[28,22,20,18].map((w,i) => (
                        <span key={i} style={{ display:"block", width:w, height:6, background:"rgba(255,255,255,.30)", borderRadius:3 }} />
                      ))}
                    </div>
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 space-y-2">
                      <div style={{ height:12, width:136, background:"rgba(255,255,255,.92)", borderRadius:4 }} />
                      <div style={{ height:7, width:96, background:"rgba(255,255,255,.42)", borderRadius:3 }} />
                      <div className="flex gap-2 mt-2">
                        <div style={{ height:18, width:58, background:"rgba(255,255,255,.90)", borderRadius:9 }} />
                        <div style={{ height:18, width:46, border:"1px solid rgba(255,255,255,.45)", borderRadius:9 }} />
                      </div>
                    </div>
                  </div>

                  {/* 3 service cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { from:"#2dd4bf", to:"#06b6d4", bg:"rgba(45,212,191,.07)" },
                      { from:"#6366f1", to:"#8b5cf6", bg:"rgba(99,102,241,.07)" },
                      { from:"#a855f7", to:"#ec4899", bg:"rgba(168,85,247,.07)" },
                    ].map((c,i) => (
                      <div key={i} className="rounded-xl p-3 space-y-2"
                        style={{ background:c.bg, border:`1px solid ${c.from}28` }}>
                        <div style={{ width:28, height:28, borderRadius:8, background:`linear-gradient(135deg,${c.from},${c.to})` }} />
                        <div className="space-y-1">
                          <div style={{ height:6, width:"70%", background:`${c.from}55`, borderRadius:3 }} />
                          <div style={{ height:5, width:"90%", background:"rgba(0,0,0,.08)", borderRadius:3 }} />
                          <div style={{ height:5, width:"60%", background:"rgba(0,0,0,.06)", borderRadius:3 }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 2-col bottom */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { bg:"rgba(45,212,191,.05)", bd:"rgba(45,212,191,.14)", gr:"rgba(45,212,191,.14),rgba(99,102,241,.10)" },
                      { bg:"rgba(99,102,241,.05)", bd:"rgba(99,102,241,.14)", gr:"rgba(99,102,241,.14),rgba(139,92,246,.10)" },
                    ].map((c,i) => (
                      <div key={i} className="rounded-xl p-3 space-y-2"
                        style={{ background:c.bg, border:`1px solid ${c.bd}` }}>
                        <div style={{ height:55, background:`linear-gradient(135deg,${c.gr})`, borderRadius:8 }} />
                        <div style={{ height:6, width:"78%", background:"rgba(0,0,0,.08)", borderRadius:3 }} />
                        <div style={{ height:5, width:"55%", background:"rgba(0,0,0,.05)", borderRadius:3 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating decorative squares */}
              <div className="absolute -top-5 -right-5 w-14 h-14 rounded-2xl pointer-events-none"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)", opacity:.72, animation:"wdFloat 5s ease-in-out infinite", boxShadow:"0 8px 24px rgba(45,212,191,.40)" }} />
              <div className="absolute -bottom-4 -left-4 w-11 h-11 rounded-xl pointer-events-none"
                style={{ background:"linear-gradient(135deg,#6366f1,#a855f7)", opacity:.65, animation:"wdFloat 7s ease-in-out infinite 1.5s", boxShadow:"0 6px 18px rgba(99,102,241,.38)" }} />
              <div className="absolute top-1/2 -right-7 w-9 h-9 rounded-xl pointer-events-none"
                style={{ background:"linear-gradient(135deg,#a855f7,#ec4899)", opacity:.55, animation:"wdFloat 6s ease-in-out infinite 3s" }} />
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-[3]"
          style={{ background: "linear-gradient(to bottom,transparent,rgba(6,11,26,.45))" }} />
      </section>

      {/* ═══════════════════════════════════════
          COMPANY / ABOUT SECTION
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        {/* Section backgrounds */}
        <div className="wd-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">

          {/* Showcase card */}
          <div className="relative rounded-[28px] overflow-hidden"
            style={{
              boxShadow: "0 50px 100px rgba(99,102,241,.14), 0 20px 40px rgba(0,0,0,.08), 0 0 0 1px rgba(99,102,241,.08)",
            }}>

            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-20"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT: Full-bleed image with gradient color-wash */}
              <div className="relative overflow-hidden" style={{ minHeight: "clamp(320px,45vw,580px)" }}>
                <Image
                  src={company.src}
                  alt="About Company"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                {/* Teal-indigo gradient color-wash overlay */}
                <div className="absolute inset-0 z-[1]"
                  style={{ background: "linear-gradient(145deg,rgba(13,148,136,.60) 0%,rgba(99,102,241,.68) 55%,rgba(139,92,246,.75) 100%)" }} />

                {/* Fine dot pattern on top */}
                <div className="absolute inset-0 z-[2] opacity-[.18]"
                  style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                {/* Corner bracket — top left */}
                <div className="absolute top-7 left-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderTop: "2.5px solid rgba(255,255,255,.40)", borderLeft: "2.5px solid rgba(255,255,255,.40)", borderRadius: "8px 0 0 0" }} />

                {/* Corner bracket — bottom right */}
                <div className="absolute bottom-7 right-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderBottom: "2.5px solid rgba(255,255,255,.40)", borderRight: "2.5px solid rgba(255,255,255,.40)", borderRadius: "0 0 8px 0" }} />

                {/* Large decorative circle rings */}
                <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1.5px solid rgba(255,255,255,.14)" }} />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1px solid rgba(255,255,255,.10)" }} />

                {/* Sparkle SVGs */}
                <svg className="absolute top-[28%] right-[18%] z-[3] pointer-events-none"
                  width="22" height="22" viewBox="0 0 36 36" fill="none" style={{ opacity: .50, animation: "wdFloat 5s ease-in-out infinite" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white"/>
                </svg>
                <svg className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none"
                  width="14" height="14" viewBox="0 0 36 36" fill="none" style={{ opacity: .35, animation: "wdFloat 7s ease-in-out infinite 1.5s" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white"/>
                </svg>

                {/* Bottom fade into card seam on mobile */}
                <div className="absolute bottom-0 left-0 right-0 h-16 z-[4] lg:hidden"
                  style={{ background: "linear-gradient(to bottom,transparent,rgba(7,9,26,.35))" }} />
              </div>

              {/* RIGHT: Content */}
              <div className="bg-white px-8 py-12 sm:px-10 sm:py-14 xl:px-14 xl:py-16 flex flex-col justify-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 self-start rounded-full px-4 py-1.5 mb-5"
                  style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      fontFamily: "'Poppins',sans-serif",
                    }}>
                    What our clients say about Future IT Touch Pvt. Ltd.
                  </span>
                </div>

                <h3 className="font-bold leading-tight text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.65rem,3vw,2.5rem)" }}>
                  Website For Small Business &amp; Startups
                </h3>

                <div className="wd-bar h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

                <p className="text-[14.5px] text-gray-500 leading-[1.92] mb-8">
                  Rise from a startup to an established brand. Whether you run a small business or
                  have invested in a startup, we can build a professional website at a very reasonable
                  price point. We use the latest technologies, create attractive design layouts, and
                  develop business-oriented features to upscale user experience. A well-built website
                  for small businesses can convert visitors into buyers by creating a strong impression
                  within their target audience. This in turn increases revenue and helps your business
                  grow.
                </p>

                <button
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    boxShadow: "0 4px 22px rgba(45,212,191,.28)",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  Learn More <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white"
        style={{ fontFamily: "'Inter',sans-serif" }}>

        <style>{`
          .svc-row {
            border-left: 4px solid transparent;
            transition: background .22s, border-left-color .22s, padding-left .22s;
          }
          .svc-row:hover {
            background: rgba(99,102,241,.03);
            padding-left: 20px;
          }
        `}</style>

        <div className="wd-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 68%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.06),transparent 68%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">

          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
              <span className="wd-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Services We&apos;re Provided
              </span>
            </div>
            <h2 className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.5rem)" }}>
              Our Web Development Services
            </h2>
            <div className="wd-bar mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          {/* Top gradient divider */}
          <div className="h-[2px] w-full rounded-full mb-1"
            style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

          {/* Numbered service rows */}
          <div className="space-y-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="svc-row group flex items-center gap-4 sm:gap-7 py-7 px-4 rounded-xl"
                style={{
                  borderBottom: i < services.length - 1 ? "1px solid rgba(99,102,241,.07)" : "none",
                  borderLeftColor: service.from,
                }}
                onMouseEnter={e => e.currentTarget.style.borderLeftColor = service.from}
                onMouseLeave={e => e.currentTarget.style.borderLeftColor = "transparent"}
              >
                {/* Gradient number */}
                <div className="w-10 sm:w-14 flex-shrink-0 text-center select-none"
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "clamp(1.4rem,2.5vw,2rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    background: `linear-gradient(135deg,${service.from},${service.to})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    opacity: .55,
                  }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Category chip — hidden on xs */}
                <div className=" min-w-[150px] hidden sm:inline-flex">
                <span className="hidden sm:inline-flex flex-shrink-0 text-[9.5px] font-bold uppercase tracking-[.18em] px-3 py-1.5 rounded-full"
                  style={{
                    background: `${service.from}14`,
                    border: `1px solid ${service.from}44`,
                    color: service.from,
                    fontFamily: "'Poppins',sans-serif",
                  }}>
                  {service.category}
                </span>
                </div>

                {/* Image bubble */}
                <div
                  className="w-[72px] h-[72px] sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: service.bgColor }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 110%,${service.from}20,transparent 65%)` }} />
                  <Image
                    src={service.image}
                    width={72}
                    height={72}
                    alt={service.alt}
                    className="w-12 sm:w-16 h-auto object-contain relative z-10"
                  />
                </div>

                {/* Title */}
                <h4
                  className="flex-1 font-bold text-gray-900 leading-snug transition-colors duration-200 group-hover:text-indigo-600"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(.95rem,1.8vw,1.22rem)" }}>
                  {service.title}
                </h4>

                {/* Learn More button */}
                <Link
                  href={service.href}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-[11.5px] font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg,${service.from},${service.to})`,
                    color: "#fff",
                    fontFamily: "'Poppins',sans-serif",
                    boxShadow: `0 3px 14px ${service.from}30`,
                  }}>
                  <span className="hidden sm:inline">Learn More</span>
                  <FaAngleRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom gradient divider */}
          <div className="h-[2px] w-full rounded-full mt-1"
            style={{ background: "linear-gradient(90deg,#a855f7,#6366f1,#2dd4bf)" }} />
        </div>
      </section>

      {/* Newsletter */}
      <GetNewInsight />
    </>
  );
}
