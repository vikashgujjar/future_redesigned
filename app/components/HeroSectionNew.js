"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaArrowRight, FaPlay } from "react-icons/fa";

/* ─── Slide data — same content as original ─── */
const contentData = [
  {
    image: "/images/HeroSection/slider-img-1.webp",
    tag: "Website Development",
    title: "Excellent Website Design &",
    mainText: "Development Services",
    description:
      "Crafting unforgettable online experiences through our exceptional website design and development services, where every detail is meticulously tailored to create a one-of-a-kind digital presence",
  },
  {
    image: "/images/HeroSection/newimg.webp",
    tag: "Digital Marketing",
    title: "Grow Your Business Online with",
    mainText: "Professional Digital Marketing Services",
    description:
      "Improve Your Website Visibility in Search Engine Results Pages and Increase Website Ranking with White Hat SEO Services.",
  },
];

export default function HeroSectionNew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  /* ── Auto-slide ── */
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentIndex + 1) % contentData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  /* ── Scroll zoom ── */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index) => {
    if (index === currentIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 350);
  };

  const { image, tag, title, mainText, description } = contentData[currentIndex];
  /* subtle zoom: scale 1 → 1.12 over first 400px of scroll */
  const imgScale = 1 + Math.min(scrollY * 0.0003, 0.12);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-106px)] overflow-hidden bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes heroArcCW   { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes heroArcCCW  { from{transform:rotate(360deg)} to{transform:rotate(0deg)}   }
        @keyframes heroFloat   {
          0%,100%{transform:translateY(0px) rotate(0deg); opacity:.65;}
          50%    {transform:translateY(-9px) rotate(6deg); opacity:1;}
        }
        @keyframes heroSlideUp {
          from{opacity:0; transform:translateY(24px);}
          to  {opacity:1; transform:translateY(0);}
        }
        @keyframes heroPulse   {
          0%,100%{opacity:.05;transform:scale(1);}
          50%    {opacity:.12;transform:scale(1.06);}
        }
        @keyframes heroImgFade {
          from{opacity:0; transform:scale(1.04);}
          to  {opacity:1; transform:scale(1);}
        }
        /* Diagonal clip on desktop only */
        @media (min-width: 1024px) {
          .hero-img-panel {
            clip-path: polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        .hero-text-enter { animation: heroSlideUp 0.55s ease-out both; }
        .hero-text-enter-1 { animation: heroSlideUp 0.55s ease-out 0.08s both; }
        .hero-text-enter-2 { animation: heroSlideUp 0.55s ease-out 0.16s both; }
        .hero-text-enter-3 { animation: heroSlideUp 0.55s ease-out 0.24s both; }
        .hero-text-enter-4 { animation: heroSlideUp 0.55s ease-out 0.32s both; }
        .hero-img-enter    { animation: heroImgFade 0.7s ease-out both; }
      `}</style>

      {/* ════════════════════════════════════════
          LEFT-SIDE GRADIENT MESH
      ════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Base sweep: teal top-left → indigo bottom-left → transparent at 55% */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(140deg, rgba(204,251,241,0.60) 0%, rgba(224,231,255,0.40) 22%, rgba(241,245,249,0.20) 42%, transparent 58%)"
        }} />

        {/* Teal radial orb — top-left corner */}
        <div className="absolute top-0 left-0 w-[52%] h-[58%]" style={{
          background: "radial-gradient(ellipse at 0% 0%, rgba(45,212,191,0.18) 0%, transparent 65%)"
        }} />

        {/* Indigo radial orb — bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-[42%] h-[52%]" style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(99,102,241,0.14) 0%, transparent 65%)"
        }} />

        {/* Soft cyan accent — mid-left */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[30%] h-[40%]" style={{
          background: "radial-gradient(ellipse at 0% 50%, rgba(34,211,238,0.10) 0%, transparent 70%)"
        }} />

        {/* Feathered edge toward center — blends gradient into clean white before image */}
        <div className="absolute top-0 left-[42%] w-[18%] h-full" style={{
          background: "linear-gradient(to right, rgba(241,245,249,0.50) 0%, transparent 100%)"
        }} />
      </div>

      {/* ════════════════════════════════════════
          ANIMATED SVG BACKGROUND VECTORS
      ════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* ── Top-left radiating arcs (teal) ── */}
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px]">
          <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hTL1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35"/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.04"/>
              </linearGradient>
            </defs>
            <g style={{ transformOrigin:"0px 0px", animation:"heroArcCW 45s linear infinite" }}>
              <circle cx="0" cy="0" r="320" stroke="url(#hTL1)" strokeWidth="1.5" fill="none"
                strokeDasharray="160 260" strokeLinecap="round"/>
            </g>
            <g style={{ transformOrigin:"0px 0px", animation:"heroArcCCW 30s linear infinite" }}>
              <circle cx="0" cy="0" r="230" stroke="url(#hTL1)" strokeWidth="1" fill="none"
                strokeDasharray="115 185" strokeLinecap="round"/>
            </g>
            <g style={{ transformOrigin:"0px 0px", animation:"heroArcCW 55s linear infinite" }}>
              <circle cx="0" cy="0" r="155" stroke="url(#hTL1)" strokeWidth="1" fill="none"
                strokeDasharray="78 130" strokeLinecap="round"/>
            </g>
          </svg>
        </div>

        {/* ── Bottom-right radiating arcs (indigo) ── */}
        <div className="absolute -bottom-24 -right-24 w-[480px] h-[480px]">
          <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hBR1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.01"/>
              </linearGradient>
            </defs>
            <g style={{ transformOrigin:"480px 480px", animation:"heroArcCCW 38s linear infinite" }}>
              <circle cx="480" cy="480" r="290" stroke="url(#hBR1)" strokeWidth="1.5" fill="none"
                strokeDasharray="145 235" strokeLinecap="round"/>
            </g>
            <g style={{ transformOrigin:"480px 480px", animation:"heroArcCW 26s linear infinite" }}>
              <circle cx="480" cy="480" r="200" stroke="url(#hBR1)" strokeWidth="1" fill="none"
                strokeDasharray="100 165" strokeLinecap="round"/>
            </g>
            <g style={{ transformOrigin:"480px 480px", animation:"heroArcCCW 48s linear infinite" }}>
              <circle cx="480" cy="480" r="125" stroke="url(#hBR1)" strokeWidth="1" fill="none"
                strokeDasharray="62 105" strokeLinecap="round"/>
            </g>
          </svg>
        </div>

        {/* ── Floating 4-point sparkle stars ── */}
        <svg className="absolute top-[14%] left-[6%] w-9 h-9"
          style={{ opacity:.18, animation:"heroFloat 7s ease-in-out infinite" }}
          viewBox="0 0 36 36" fill="none">
          <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#2dd4bf"/>
        </svg>
        <svg className="absolute bottom-[22%] left-[12%] w-6 h-6"
          style={{ opacity:.15, animation:"heroFloat 9s ease-in-out infinite 1.5s" }}
          viewBox="0 0 36 36" fill="none">
          <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#6366f1"/>
        </svg>
        <svg className="absolute top-[55%] left-[40%] w-5 h-5"
          style={{ opacity:.12, animation:"heroFloat 11s ease-in-out infinite 3s" }}
          viewBox="0 0 36 36" fill="none">
          <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#2dd4bf"/>
        </svg>

        {/* ── Small geometric rings ── */}
        <div className="absolute top-[30%] left-[28%] w-5 h-5 rounded-full border-2 border-teal-400/20"
          style={{ animation:"heroFloat 6s ease-in-out infinite 0.8s" }}/>
        <div className="absolute top-[72%] left-[22%] w-3.5 h-3.5 rounded-full border border-indigo-400/20"
          style={{ animation:"heroFloat 8s ease-in-out infinite 2s" }}/>
        <div className="absolute top-[18%] left-[48%] w-2.5 h-2.5 rounded-full bg-teal-400/15"
          style={{ animation:"heroFloat 5s ease-in-out infinite 1s" }}/>

        {/* ── Soft radial glow blobs ── */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[360px] h-[360px] rounded-full"
          style={{ background:"radial-gradient(circle, #2dd4bf 0%, transparent 70%)",
            opacity:.05, animation:"heroPulse 9s ease-in-out infinite" }}/>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[320px] h-[320px] rounded-full"
          style={{ background:"radial-gradient(circle, #6366f1 0%, transparent 70%)",
            opacity:.05, animation:"heroPulse 11s ease-in-out infinite 5s" }}/>

        {/* ── Diagonal accent line (center) ── */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none" viewBox="0 0 1400 700" fill="none">
          <defs>
            <linearGradient id="hDiag" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0"/>
              <stop offset="40%" stopColor="#2dd4bf" stopOpacity="1"/>
              <stop offset="60%" stopColor="#6366f1" stopOpacity="1"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <line x1="0" y1="350" x2="1400" y2="350" stroke="url(#hDiag)" strokeWidth="1"/>
        </svg>
      </div>

      {/* ════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════ */}
      <div className="relative z-10 w-full h-full min-h-[calc(100vh-106px)]
        grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* ══ LEFT — Text panel ══ */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-14 lg:py-0 lg:max-w-[680px] lg:ml-auto">

          {/* Tag badge */}
          {!animating && (
            <div className="hero-text-enter inline-flex items-center gap-2 self-start
              bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-200/70
              px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-indigo-600 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">
                {tag}
              </span>
            </div>
          )}

          {/* Sub-title */}
          {!animating && (
            <h3 className="hero-text-enter-1 text-base sm:text-lg text-gray-500 font-medium mb-2 leading-relaxed">
              {title}
            </h3>
          )}

          {/* Main heading */}
          {!animating && (
            <h1
              className="hero-text-enter-2 text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-bold leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-teal-500 to-indigo-700 text-transparent bg-clip-text">
                {mainText}
              </span>
            </h1>
          )}

          {/* Description */}
          {!animating && (
            <p className="hero-text-enter-3 text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-[500px]">
              {description}
            </p>
          )}

          {/* CTA row */}
          {!animating && (
            <div className="hero-text-enter-4 flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#scroll-down"
                className="relative overflow-hidden group inline-flex items-center gap-2
                  bg-gradient-to-r from-teal-400 to-indigo-700 text-white font-semibold
                  px-7 py-3.5 rounded-full shadow-lg shadow-indigo-200/50
                  hover:shadow-indigo-300/60 hover:-translate-y-0.5 transition-all duration-200"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="relative z-10">Get Started</span>
                <FaArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </a>

              <Link
                href="/our-portfolio"
                className="flex items-center gap-2.5 text-gray-600 font-semibold text-sm
                  hover:text-indigo-600 transition-colors group"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="w-10 h-10 rounded-full border-2 border-gray-200
                  group-hover:border-indigo-400 flex items-center justify-center
                  transition-colors shadow-sm group-hover:shadow-indigo-100">
                  <FaPlay className="w-3 h-3 ml-0.5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                </span>
                View Our Work
              </Link>
            </div>
          )}

          {/* Slide indicator pills */}
          <div className="flex items-center gap-2">
            {contentData.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`transition-all duration-400 rounded-full ${
                  currentIndex === i
                    ? "w-8 h-2.5 bg-gradient-to-r from-teal-400 to-indigo-600 shadow-sm"
                    : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-xs text-gray-400 font-medium">
              {String(currentIndex + 1).padStart(2, "0")} / {String(contentData.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ══ RIGHT — Image panel ══ */}
        <div className="hero-img-panel relative h-[300px] sm:h-[420px] lg:h-[calc(100vh-106px)] overflow-hidden">

          {/* Image with scroll zoom */}
          <div
            key={currentIndex}
            className="hero-img-enter absolute inset-0 w-full h-full"
            style={{
              transform: `scale(${imgScale})`,
              transformOrigin: "center center",
              transition: "transform 0.08s linear",
            }}
          >
            <img
              src={image}
              alt={mainText}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Subtle duotone tint — keeps light theme feel without hiding image */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.06] via-transparent to-indigo-600/[0.08] z-[5]" />

          {/* Bottom vignette — subtle, not white-out */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-[6]" />

          {/* Decorative corner brackets */}
          <div className="absolute top-6 right-6 w-14 h-14 border-t-2 border-r-2 border-teal-400/60 rounded-tr-xl z-20" />
          <div className="absolute bottom-12 right-6 w-14 h-14 border-b-2 border-r-2 border-indigo-400/60 rounded-br-xl z-20" />

          {/* Tag badge — pushed right enough to clear the diagonal cut */}
          <div className="absolute bottom-12 left-20 z-20
            bg-white/85 backdrop-blur-md border border-white/60
            px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-indigo-600 animate-pulse flex-shrink-0" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              {tag}
            </span>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 hidden lg:flex">
        <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300/70 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-indigo-500/60 animate-bounce" />
        </div>
      </div>

    </section>
  );
}