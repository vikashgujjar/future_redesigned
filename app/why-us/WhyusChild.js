"use client";
import Image from "next/image";
import Link from "next/link";
import WhyChoose from "../components/WhyChoose";
import GetNewInsight from "../components/GetNewInsight";

export default function WhyusChild() {
  return (
    <>
      {/* ── Page Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)", fontFamily:"'Inter',sans-serif" }}>

        {/* Background image */}
        <Image
          src="/Assets/stock/photo-1600880292089-90a7e086ee0c.webp"
          alt="Why Choose Future IT Touch"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.82) 0%,rgba(20,10,60,.78) 50%,rgba(4,5,24,.85) 100%)" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        {/* Glow orbs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />

        {/* Horizontal accent line */}
        <div className="absolute left-0 right-0 pointer-events-none"
          style={{ top:"50%", height:"1px", background:"linear-gradient(90deg,transparent,rgba(45,212,191,.18),rgba(99,102,241,.14),transparent)" }} />

        {/* Centered content */}
        <div className="relative z-10 text-center px-4">

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-5">
            <Link href="/"
              className="text-[11px] font-semibold uppercase tracking-[.18em] transition-colors duration-200 hover:text-teal-400"
              style={{ color:"rgba(255,255,255,.50)", fontFamily:"'Poppins',sans-serif", textDecoration:"none" }}>
              Home
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-[.18em]"
              style={{ color:"#2dd4bf", fontFamily:"'Poppins',sans-serif" }}>
              Why Us
            </span>
          </nav>

          {/* Title */}
          <h1 className="font-extrabold leading-[1.08] text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)" }}>
            Why Choose{" "}
            <span style={{
              background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>
              Future IT Touch
            </span>
          </h1>

          {/* Accent bar */}
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Intro Section ── */}
      <section className="relative overflow-hidden py-16 sm:py-20"
        style={{ background:"linear-gradient(160deg,#f0fbfa 0%,#ffffff 45%,#f1f1fd 100%)", fontFamily:"'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(67,56,202,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />

        <div className="relative z-10 max-w-[860px] mx-auto px-5 sm:px-8 text-center">

          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
            style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                fontFamily:"'Poppins',sans-serif" }}>
              We Are a Creative Agency
            </span>
          </div>

          <h2 className="font-extrabold leading-[1.12] mb-5"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.6rem,3.5vw,2.6rem)", color:"#0c1230" }}>
            Why Choose{" "}
            <span style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Future IT Touch Pvt. Ltd.
            </span>
          </h2>

          <div className="mx-auto mb-6 h-[3px] w-14 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

          <p className="text-[15px] leading-[1.90]" style={{ color:"#4a5070" }}>
            Here are some of the reasons we think you should consider working with{" "}
            <span className="font-semibold" style={{ color:"#4f46e5" }}>Future IT Touch Pvt. Ltd.</span>{" "}
            — your full-service web development, online marketing, and web hosting company. We create
            experiences that are attractive, simple to use, and drive results for your company. We are
            not your typical web development agency. Sure, we're strong on corporate branding and web
            design, but we're really focused on making things work for your audience — and your business.
          </p>
        </div>
      </section>

      {/* ── Why Choose Component ── */}
      <WhyChoose />

      <GetNewInsight />
    </>
  );
}
