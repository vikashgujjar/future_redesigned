"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Ism from "../Assets/lsm.gif";
import gm  from "../Assets/gm.webp";
import d1  from "../Assets/d1.webp";
import { businessData } from "../common/Service_comp";
import GetNewInsight from "../components/GetNewInsight";

export default function Business() {
  return (
    <>
      <style>{`
        @keyframes bizCW    { to { transform: rotate(360deg)  } }
        @keyframes bizCCW   { to { transform: rotate(-360deg) } }
        @keyframes bizBarIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes bizPing  { 75%,100% { transform: scale(2.1); opacity: 0 } }
        @keyframes bizFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes bizBlob  { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-16px,18px)} }

        .biz-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .biz-ping { position: relative }
        .biz-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:bizPing 2s ease-out infinite;
        }
        .biz-bar { animation: bizBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left }
        .biz-feat-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s;
        }
        .biz-feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(99,102,241,.12) !important; }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden flex items-center"
        style={{
          background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
          fontFamily: "'Inter',sans-serif",
          minHeight: "clamp(480px,80vh,720px)",
        }}>

        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none z-[1] opacity-[.036]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
        <div className="biz-dotgrid absolute inset-0 pointer-events-none z-[1]" />

        {/* Blobs */}
        <div className="absolute -top-48 -left-48 w-[580px] h-[580px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.16) 0%,transparent 65%)", animation: "bizBlob 16s ease-in-out infinite" }} />
        <div className="absolute -bottom-48 right-0 w-[520px] h-[520px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.18) 0%,transparent 65%)", animation: "bizBlob 20s ease-in-out infinite reverse" }} />

        {/* SVG arcs */}
        <svg className="absolute top-0 left-0 pointer-events-none z-[2]" width="380" height="380"
          viewBox="0 0 380 380" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="bizTL" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity=".28" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity=".03" />
            </linearGradient>
          </defs>
          <g style={{ transformOrigin:"0 0", animation:"bizCW 45s linear infinite" }}>
            <circle cx="0" cy="0" r="290" stroke="url(#bizTL)" strokeWidth="1.2" strokeDasharray="75 125" strokeLinecap="round" fill="none" />
          </g>
          <g style={{ transformOrigin:"0 0", animation:"bizCCW 30s linear infinite" }}>
            <circle cx="0" cy="0" r="190" stroke="rgba(45,212,191,.09)" strokeWidth="1" strokeDasharray="50 85" strokeLinecap="round" fill="none" />
          </g>
        </svg>

        <div className="absolute top-1/2 left-0 right-0 h-px pointer-events-none z-[2]"
          style={{ background: "linear-gradient(90deg,transparent,rgba(45,212,191,.12),rgba(99,102,241,.10),transparent)" }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28 py-20">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-16 items-center">

            {/* Left: text */}
            <div>
              <h1 className="font-extrabold leading-[1.06] mb-5"
                style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,4vw,3rem)", color: "#fff" }}>
                SMALL BUSINESS{" "}
                <span style={{
                  background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  WEBSITE DESIGN
                </span>
              </h1>

              <div className="biz-bar h-[3px] w-16 rounded-full mb-6"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

              <p className="text-[14.5px] leading-[1.90] mb-8 max-w-[580px]"
                style={{ color: "rgba(255,255,255,.58)" }}>
                The biggest challenge faced by any small business is to expand it&apos;s customer base.
                With the rising expenses of electronic and print media, the only option left for the small
                business owners is to create a strong digital presence. A professionally developed website
                for small business is the first step toward achieving this aim. Future IT Touch Pvt. Ltd. is
                an certified company providing a range of business website design services to clients
                worldwide. Our small business website design services are customized exclusively for startups
                at affordable rates. In the last 15 years, we have delivered effective web solutions to a
                number of small businesses and helped them enhance their growth online.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 24px rgba(45,212,191,.38)", fontFamily: "'Poppins',sans-serif" }}>
                  Quick Enquiry
                </Link>
                <a href="tel:+917056937000"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 no-underline"
                  style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", color: "rgba(255,255,255,.78)", fontFamily: "'Poppins',sans-serif" }}>
                  Call us - 7056937000
                </a>
              </div>
            </div>

            {/* Right: image */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-5 rounded-[28px] pointer-events-none"
                style={{ background: "linear-gradient(135deg,rgba(45,212,191,.20),rgba(99,102,241,.22))", filter: "blur(24px)", opacity: .60 }} />
              <div className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,.10)", boxShadow: "0 32px 80px rgba(0,0,0,.55)" }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                <Image src={gm.src} alt="Business website design illustration"
                  width={460} height={380} className="w-full h-auto block object-cover" />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top,rgba(6,11,26,.35) 0%,transparent 60%)" }} />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl pointer-events-none"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", opacity: .70, animation: "bizFloat 5s ease-in-out infinite", boxShadow: "0 6px 20px rgba(45,212,191,.38)" }} />
              <div className="absolute -bottom-3 -left-3 w-9 h-9 rounded-lg pointer-events-none"
                style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", opacity: .62, animation: "bizFloat 7s ease-in-out infinite 1.5s" }} />
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-[3]"
          style={{ background: "linear-gradient(to bottom,transparent,rgba(6,11,26,.40))" }} />
      </section>

      {/* ═══════════════════════════════════════
          ABOUT — Website For Small Business
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        <div className="biz-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
          <div className="relative rounded-[28px] overflow-hidden"
            style={{ boxShadow: "0 50px 100px rgba(99,102,241,.14), 0 20px 40px rgba(0,0,0,.08), 0 0 0 1px rgba(99,102,241,.08)" }}>

            {/* Top gradient strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-20"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* ── Left: full-bleed image with overlay ── */}
              <div className="relative overflow-hidden" style={{ minHeight: "clamp(320px,45vw,580px)" }}>
                <Image src={d1.src} alt="Small business website design" fill
                  sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-center" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 z-[1]"
                  style={{ background: "linear-gradient(145deg,rgba(13,148,136,.60) 0%,rgba(99,102,241,.68) 55%,rgba(139,92,246,.75) 100%)" }} />

                {/* Dot grid overlay */}
                <div className="absolute inset-0 z-[2] opacity-[.18]"
                  style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

                {/* Corner brackets */}
                <div className="absolute top-7 left-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderTop: "2.5px solid rgba(255,255,255,.40)", borderLeft: "2.5px solid rgba(255,255,255,.40)", borderRadius: "8px 0 0 0" }} />
                <div className="absolute bottom-7 right-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderBottom: "2.5px solid rgba(255,255,255,.40)", borderRight: "2.5px solid rgba(255,255,255,.40)", borderRadius: "0 0 8px 0" }} />

                {/* Decorative circles */}
                <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1.5px solid rgba(255,255,255,.14)" }} />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1px solid rgba(255,255,255,.10)" }} />

                {/* Sparkles */}
                <svg className="absolute top-[28%] right-[18%] z-[3] pointer-events-none" width="22" height="22"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .50, animation: "bizFloat 5s ease-in-out infinite" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>
                <svg className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none" width="14" height="14"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .35, animation: "bizFloat 7s ease-in-out infinite 1.5s" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>

                {/* Floating stat badge */}
                <div className="absolute bottom-8 left-8 z-[4] flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.22)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-white text-[15px] leading-none"
                      style={{ fontFamily: "'Poppins',sans-serif" }}>Since 2005</p>
                    <p className="text-white/65 text-[10px] tracking-[.08em] uppercase font-semibold mt-0.5">Trusted by 500+ Clients</p>
                  </div>
                </div>
              </div>

              {/* ── Right: Content ── */}
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
                    Website For Small Business &amp; Startups
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-bold leading-tight text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.65rem,3vw,2.5rem)" }}>
                  Rise from a Startup to an{" "}
                  <span style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Established Brand
                  </span>
                </h2>

                {/* Accent bar */}
                <div className="biz-bar h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

                {/* Body text */}
                <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                  <p>
                    Whether you run a small business or have invested in a startup, we can build a professional
                    website for business at a very reasonable price point. We use the latest technologies, create
                    attractive design layouts, and develop business-oriented features to upscale user experience.
                    A well-built website for small businesses can convert visitors into buyers by creating a strong
                    impression within their target audience. This, in turn, increases revenue and helps your business grow.
                  </p>
                  <p>
                    At Future IT Touch Pvt. Ltd., we take utmost care in delivering websites as search engine
                    friendly for wider reach and best ROI. Our responsive coding ensures optimal viewing experience
                    across various mobile devices. We effectively link your website with social media platforms to
                    enhance your brand identity further. Make your business grow into an established brand with our
                    all-inclusive small business web design services.
                  </p>
                </div>

                {/* CTA */}
                <a href="tel:+917056937000"
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 22px rgba(45,212,191,.28)", fontFamily: "'Poppins',sans-serif" }}>
                  Start Your Business Website
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BUSINESS DATA FEATURES
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none z-[1]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.14),transparent 65%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.14),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          {/* ── Section header ── */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="biz-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Our Development Process
              </span>
            </div>
            <h2 className="font-extrabold text-white mb-3"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Rated as the Top{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Android App Development
              </span>{" "}
              Company in India
            </h2>
            <div className="biz-bar mx-auto h-[3px] w-14 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
            <p className="text-[14px] max-w-[540px] mx-auto"
              style={{ color: "rgba(255,255,255,.45)" }}>
              We follow a step-by-step procedure in developing the apps to maintain a steady pace and
              provide you with on-time delivery.
            </p>
          </div>

          {/* ── Gradient banner cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
            {businessData.map((item, i) => {
              const gradients = [
                { from: "#2dd4bf", to: "#6366f1" },
                { from: "#6366f1", to: "#8b5cf6" },
                { from: "#0ea5e9", to: "#2dd4bf" },
                { from: "#a855f7", to: "#6366f1" },
              ];
              const g = gradients[i % gradients.length];
              return (
                <div key={i}
                  className="biz-card group relative rounded-[20px] overflow-hidden flex flex-col"
                  style={{
                    border: "1px solid rgba(255,255,255,.08)",
                    boxShadow: "0 12px 48px rgba(0,0,0,.40), 0 0 0 1px rgba(255,255,255,.05)",
                  }}>

                  {/* Gradient banner */}
                  <div className="relative flex items-center justify-center py-11 overflow-hidden"
                    style={{ background: `linear-gradient(135deg,${g.from},${g.to})` }}>
                    <div className="absolute inset-0 opacity-[.18]"
                      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.18)" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.12)" }} />
                    <svg className="absolute top-4 left-5 pointer-events-none" width="16" height="16"
                      viewBox="0 0 36 36" fill="none"
                      style={{ opacity: .45, animation: "bizFloat 5s ease-in-out infinite" }}>
                      <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                    </svg>
                    <div className="absolute top-1 right-3 select-none pointer-events-none font-extrabold leading-none"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "5.5rem", color: "rgba(255,255,255,.12)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Glass icon */}
                    <div className="relative z-10 w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-3xl"
                      style={{
                        background: "rgba(255,255,255,.20)", backdropFilter: "blur(12px)",
                        border: "1.5px solid rgba(255,255,255,.38)",
                        boxShadow: "0 8px 28px rgba(0,0,0,.22), 0 0 20px rgba(255,255,255,.12)",
                        color: "#fff",
                      }}>
                      <item.icon />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col p-7"
                    style={{ background: "rgba(255,255,255,.04)", backdropFilter: "blur(16px)" }}>
                    <div className="w-10 h-[3px] rounded-full mb-4"
                      style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />
                    <h4 className="font-bold text-white mb-3 leading-snug"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1.12rem" }}>
                      {item.title}
                    </h4>
                    <p className="text-[13.5px] leading-[1.84] flex-1"
                      style={{ color: "rgba(255,255,255,.50)" }}>
                      {item.description}
                    </p>
                    <div className="mt-6 h-[1px] rounded-full"
                      style={{ background: `linear-gradient(90deg,transparent,${g.from}55,${g.to}44,transparent)` }} />
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%,${g.from}14,transparent 55%)` }} />
                </div>
              );
            })}
          </div>

          {/* ── Image + bottom paragraph row ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-center">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{ border: "1px solid rgba(255,255,255,.08)", boxShadow: "0 24px 60px rgba(0,0,0,.45)" }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
              <Image src={Ism.src} alt="Business development process illustration"
                width={400} height={400} className="w-full h-auto block" />
            </div>

            {/* Bottom paragraph */}
            <div className="flex flex-col gap-4">
              <div className="h-px w-full rounded-full"
                style={{ background: "linear-gradient(90deg,rgba(45,212,191,.35),rgba(99,102,241,.28),transparent)" }} />
              <p className="text-[14.5px] leading-[1.92]"
                style={{ color: "rgba(255,255,255,.52)" }}>
                In the last 15 years, we have worked with hundreds of online retailers and delivered their
                customers with a beautiful online shopping experience. From startup to enterprise, single vendor
                to multi vendor, B2C to B2B business - we have provided effective eCommerce solutions to a global
                clientele. We have also built several eCommerce mobile apps as per the need of the businesses.
              </p>
              <div className="h-px w-full rounded-full"
                style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,.28),rgba(45,212,191,.35))" }} />
            </div>

          </div>

        </div>
      </section>

      <GetNewInsight />
    </>
  );
}
