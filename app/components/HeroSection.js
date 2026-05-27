// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import Link from "next/link";
// import { FaArrowRight, FaPlay } from "react-icons/fa";

// /* ─── Slide data — same content as original ─── */
// const contentData = [
//   {
//     image: "/images/HeroSection/slider-img-1.webp",
//     tag: "Website Development",
//     title: "Excellent Website Design &",
//     mainText: "Development Services",
//     description:
//       "Crafting unforgettable online experiences through our exceptional website design and development services, where every detail is meticulously tailored to create a one-of-a-kind digital presence",
//   },
//   {
//     image: "/images/HeroSection/newimg.webp",
//     tag: "Digital Marketing",
//     title: "Grow Your Business Online with",
//     mainText: "Professional Digital Marketing Services",
//     description:
//       "Improve Your Website Visibility in Search Engine Results Pages and Increase Website Ranking with White Hat SEO Services.",
//   },
// ];

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const sectionRef = useRef(null);

//   /* ── Auto-slide ── */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToSlide((currentIndex + 1) % contentData.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   /* ── Scroll zoom ── */
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const goToSlide = (index) => {
//     if (index === currentIndex || animating) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setAnimating(false);
//     }, 350);
//   };

//   const { image, tag, title, mainText, description } = contentData[currentIndex];
//   /* subtle zoom: scale 1 → 1.12 over first 400px of scroll */
//   const imgScale = 1 + Math.min(scrollY * 0.0003, 0.12);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[calc(100vh-106px)] overflow-hidden bg-white"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       {/* ── Keyframes ── */}
//       <style>{`
//         @keyframes heroArcCW   { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
//         @keyframes heroArcCCW  { from{transform:rotate(360deg)} to{transform:rotate(0deg)}   }
//         @keyframes heroFloat   {
//           0%,100%{transform:translateY(0px) rotate(0deg); opacity:.65;}
//           50%    {transform:translateY(-9px) rotate(6deg); opacity:1;}
//         }
//         @keyframes heroSlideUp {
//           from{opacity:0; transform:translateY(24px);}
//           to  {opacity:1; transform:translateY(0);}
//         }
//         @keyframes heroPulse   {
//           0%,100%{opacity:.05;transform:scale(1);}
//           50%    {opacity:.12;transform:scale(1.06);}
//         }
//         @keyframes heroImgFade {
//           from{opacity:0; transform:scale(1.04);}
//           to  {opacity:1; transform:scale(1);}
//         }
//         /* Diagonal clip on desktop only */
//         @media (min-width: 1024px) {
//           .hero-img-panel {
//             clip-path: polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%);
//           }
//         }
//         .hero-text-enter { animation: heroSlideUp 0.55s ease-out both; }
//         .hero-text-enter-1 { animation: heroSlideUp 0.55s ease-out 0.08s both; }
//         .hero-text-enter-2 { animation: heroSlideUp 0.55s ease-out 0.16s both; }
//         .hero-text-enter-3 { animation: heroSlideUp 0.55s ease-out 0.24s both; }
//         .hero-text-enter-4 { animation: heroSlideUp 0.55s ease-out 0.32s both; }
//         .hero-img-enter    { animation: heroImgFade 0.7s ease-out both; }
//       `}</style>

//       {/* ════════════════════════════════════════
//           LEFT-SIDE GRADIENT MESH
//       ════════════════════════════════════════ */}
//       <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

//         {/* Base sweep: teal top-left → indigo bottom-left → transparent at 55% */}
//         <div className="absolute inset-0" style={{
//           background: "linear-gradient(140deg, rgba(204,251,241,0.60) 0%, rgba(224,231,255,0.40) 22%, rgba(241,245,249,0.20) 42%, transparent 58%)"
//         }} />

//         {/* Teal radial orb — top-left corner */}
//         <div className="absolute top-0 left-0 w-[52%] h-[58%]" style={{
//           background: "radial-gradient(ellipse at 0% 0%, rgba(45,212,191,0.18) 0%, transparent 65%)"
//         }} />

//         {/* Indigo radial orb — bottom-left corner */}
//         <div className="absolute bottom-0 left-0 w-[42%] h-[52%]" style={{
//           background: "radial-gradient(ellipse at 0% 100%, rgba(99,102,241,0.14) 0%, transparent 65%)"
//         }} />

//         {/* Soft cyan accent — mid-left */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[30%] h-[40%]" style={{
//           background: "radial-gradient(ellipse at 0% 50%, rgba(34,211,238,0.10) 0%, transparent 70%)"
//         }} />

//         {/* Feathered edge toward center — blends gradient into clean white before image */}
//         <div className="absolute top-0 left-[42%] w-[18%] h-full" style={{
//           background: "linear-gradient(to right, rgba(241,245,249,0.50) 0%, transparent 100%)"
//         }} />
//       </div>

//       {/* ════════════════════════════════════════
//           ANIMATED SVG BACKGROUND VECTORS
//       ════════════════════════════════════════ */}
//       <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

//         {/* ── Top-left radiating arcs (teal) ── */}
//         <div className="absolute -top-24 -left-24 w-[520px] h-[520px]">
//           <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <linearGradient id="hTL1" x1="100%" y1="100%" x2="0%" y2="0%">
//                 <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35"/>
//                 <stop offset="100%" stopColor="#6366f1" stopOpacity="0.04"/>
//               </linearGradient>
//             </defs>
//             <g style={{ transformOrigin:"0px 0px", animation:"heroArcCW 45s linear infinite" }}>
//               <circle cx="0" cy="0" r="320" stroke="url(#hTL1)" strokeWidth="1.5" fill="none"
//                 strokeDasharray="160 260" strokeLinecap="round"/>
//             </g>
//             <g style={{ transformOrigin:"0px 0px", animation:"heroArcCCW 30s linear infinite" }}>
//               <circle cx="0" cy="0" r="230" stroke="url(#hTL1)" strokeWidth="1" fill="none"
//                 strokeDasharray="115 185" strokeLinecap="round"/>
//             </g>
//             <g style={{ transformOrigin:"0px 0px", animation:"heroArcCW 55s linear infinite" }}>
//               <circle cx="0" cy="0" r="155" stroke="url(#hTL1)" strokeWidth="1" fill="none"
//                 strokeDasharray="78 130" strokeLinecap="round"/>
//             </g>
//           </svg>
//         </div>

//         {/* ── Bottom-right radiating arcs (indigo) ── */}
//         <div className="absolute -bottom-24 -right-24 w-[480px] h-[480px]">
//           <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <linearGradient id="hBR1" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2"/>
//                 <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.01"/>
//               </linearGradient>
//             </defs>
//             <g style={{ transformOrigin:"480px 480px", animation:"heroArcCCW 38s linear infinite" }}>
//               <circle cx="480" cy="480" r="290" stroke="url(#hBR1)" strokeWidth="1.5" fill="none"
//                 strokeDasharray="145 235" strokeLinecap="round"/>
//             </g>
//             <g style={{ transformOrigin:"480px 480px", animation:"heroArcCW 26s linear infinite" }}>
//               <circle cx="480" cy="480" r="200" stroke="url(#hBR1)" strokeWidth="1" fill="none"
//                 strokeDasharray="100 165" strokeLinecap="round"/>
//             </g>
//             <g style={{ transformOrigin:"480px 480px", animation:"heroArcCCW 48s linear infinite" }}>
//               <circle cx="480" cy="480" r="125" stroke="url(#hBR1)" strokeWidth="1" fill="none"
//                 strokeDasharray="62 105" strokeLinecap="round"/>
//             </g>
//           </svg>
//         </div>

//         {/* ── Floating 4-point sparkle stars ── */}
//         <svg className="absolute top-[14%] left-[6%] w-9 h-9"
//           style={{ opacity:.18, animation:"heroFloat 7s ease-in-out infinite" }}
//           viewBox="0 0 36 36" fill="none">
//           <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#2dd4bf"/>
//         </svg>
//         <svg className="absolute bottom-[22%] left-[12%] w-6 h-6"
//           style={{ opacity:.15, animation:"heroFloat 9s ease-in-out infinite 1.5s" }}
//           viewBox="0 0 36 36" fill="none">
//           <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#6366f1"/>
//         </svg>
//         <svg className="absolute top-[55%] left-[40%] w-5 h-5"
//           style={{ opacity:.12, animation:"heroFloat 11s ease-in-out infinite 3s" }}
//           viewBox="0 0 36 36" fill="none">
//           <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#2dd4bf"/>
//         </svg>

//         {/* ── Small geometric rings ── */}
//         <div className="absolute top-[30%] left-[28%] w-5 h-5 rounded-full border-2 border-teal-400/20"
//           style={{ animation:"heroFloat 6s ease-in-out infinite 0.8s" }}/>
//         <div className="absolute top-[72%] left-[22%] w-3.5 h-3.5 rounded-full border border-indigo-400/20"
//           style={{ animation:"heroFloat 8s ease-in-out infinite 2s" }}/>
//         <div className="absolute top-[18%] left-[48%] w-2.5 h-2.5 rounded-full bg-teal-400/15"
//           style={{ animation:"heroFloat 5s ease-in-out infinite 1s" }}/>

//         {/* ── Soft radial glow blobs ── */}
//         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[360px] h-[360px] rounded-full"
//           style={{ background:"radial-gradient(circle, #2dd4bf 0%, transparent 70%)",
//             opacity:.05, animation:"heroPulse 9s ease-in-out infinite" }}/>
//         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[320px] h-[320px] rounded-full"
//           style={{ background:"radial-gradient(circle, #6366f1 0%, transparent 70%)",
//             opacity:.05, animation:"heroPulse 11s ease-in-out infinite 5s" }}/>

//         {/* ── Diagonal accent line (center) ── */}
//         <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none" viewBox="0 0 1400 700" fill="none">
//           <defs>
//             <linearGradient id="hDiag" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0"/>
//               <stop offset="40%" stopColor="#2dd4bf" stopOpacity="1"/>
//               <stop offset="60%" stopColor="#6366f1" stopOpacity="1"/>
//               <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
//             </linearGradient>
//           </defs>
//           <line x1="0" y1="350" x2="1400" y2="350" stroke="url(#hDiag)" strokeWidth="1"/>
//         </svg>
//       </div>

//       {/* ════════════════════════════════════════
//           MAIN CONTENT
//       ════════════════════════════════════════ */}
//       <div className="relative z-10 w-full h-full min-h-[calc(100vh-106px)]
//         grid grid-cols-1 lg:grid-cols-2 items-center">

//         {/* ══ LEFT — Text panel ══ */}
//         <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-14 lg:py-0 lg:max-w-[680px] lg:ml-auto">

//           {/* Tag badge */}
//           {!animating && (
//             <div className="hero-text-enter inline-flex items-center gap-2 self-start
//               bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-200/70
//               px-4 py-1.5 rounded-full mb-5">
//               <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-indigo-600 animate-pulse flex-shrink-0" />
//               <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">
//                 {tag}
//               </span>
//             </div>
//           )}

//           {/* Sub-title */}
//           {!animating && (
//             <h3 className="hero-text-enter-1 text-base sm:text-lg text-gray-500 font-medium mb-2 leading-relaxed">
//               {title}
//             </h3>
//           )}

//           {/* Main heading */}
//           {!animating && (
//             <h1
//               className="hero-text-enter-2 text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-bold leading-tight mb-5"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               <span className="bg-gradient-to-r from-teal-500 to-indigo-700 text-transparent bg-clip-text">
//                 {mainText}
//               </span>
//             </h1>
//           )}

//           {/* Description */}
//           {!animating && (
//             <p className="hero-text-enter-3 text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-[500px]">
//               {description}
//             </p>
//           )}

//           {/* CTA row */}
//           {!animating && (
//             <div className="hero-text-enter-4 flex flex-wrap items-center gap-4 mb-10">
//               <a
//                 href="#scroll-down"
//                 className="relative overflow-hidden group inline-flex items-center gap-2
//                   bg-gradient-to-r from-teal-400 to-indigo-700 text-white font-semibold
//                   px-7 py-3.5 rounded-full shadow-lg shadow-indigo-200/50
//                   hover:shadow-indigo-300/60 hover:-translate-y-0.5 transition-all duration-200"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 <span className="relative z-10">Get Started</span>
//                 <FaArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
//                   transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
//               </a>

//               <Link
//                 href="/our-portfolio"
//                 className="flex items-center gap-2.5 text-gray-600 font-semibold text-sm
//                   hover:text-indigo-600 transition-colors group"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 <span className="w-10 h-10 rounded-full border-2 border-gray-200
//                   group-hover:border-indigo-400 flex items-center justify-center
//                   transition-colors shadow-sm group-hover:shadow-indigo-100">
//                   <FaPlay className="w-3 h-3 ml-0.5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
//                 </span>
//                 View Our Work
//               </Link>
//             </div>
//           )}

//           {/* Slide indicator pills */}
//           <div className="flex items-center gap-2">
//             {contentData.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToSlide(i)}
//                 aria-label={`Slide ${i + 1}`}
//                 className={`transition-all duration-400 rounded-full ${
//                   currentIndex === i
//                     ? "w-8 h-2.5 bg-gradient-to-r from-teal-400 to-indigo-600 shadow-sm"
//                     : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
//                 }`}
//               />
//             ))}
//             <span className="ml-2 text-xs text-gray-400 font-medium">
//               {String(currentIndex + 1).padStart(2, "0")} / {String(contentData.length).padStart(2, "0")}
//             </span>
//           </div>
//         </div>

//         {/* ══ RIGHT — Image panel ══ */}
//         <div className="hero-img-panel relative h-[300px] sm:h-[420px] lg:h-[calc(100vh-106px)] overflow-hidden">

//           {/* Image with scroll zoom */}
//           <div
//             key={currentIndex}
//             className="hero-img-enter absolute inset-0 w-full h-full"
//             style={{
//               transform: `scale(${imgScale})`,
//               transformOrigin: "center center",
//               transition: "transform 0.08s linear",
//             }}
//           >
//             <img
//               src={image}
//               alt={mainText}
//               className="w-full h-full object-cover object-center"
//             />
//           </div>

//           {/* Subtle duotone tint — keeps light theme feel without hiding image */}
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.06] via-transparent to-indigo-600/[0.08] z-[5]" />

//           {/* Bottom vignette — subtle, not white-out */}
//           <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-[6]" />

//           {/* Decorative corner brackets */}
//           <div className="absolute top-6 right-6 w-14 h-14 border-t-2 border-r-2 border-teal-400/60 rounded-tr-xl z-20" />
//           <div className="absolute bottom-12 right-6 w-14 h-14 border-b-2 border-r-2 border-indigo-400/60 rounded-br-xl z-20" />

//           {/* Tag badge — pushed right enough to clear the diagonal cut */}
//           <div className="absolute bottom-12 left-20 z-20
//             bg-white/85 backdrop-blur-md border border-white/60
//             px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-indigo-600 animate-pulse flex-shrink-0" />
//             <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
//               {tag}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ── Scroll indicator ── */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 hidden lg:flex">
//         <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em]">
//           Scroll
//         </span>
//         <div className="w-5 h-8 rounded-full border-2 border-gray-300/70 flex items-start justify-center pt-1.5">
//           <div className="w-1 h-2 rounded-full bg-indigo-500/60 animate-bounce" />
//         </div>
//       </div>

//     </section>
//   );
// }


"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "Website Development",
    eyebrow: "We Build Your",
    headline: "Digital Future.",
    sub: "Excellent Website Design &",
    subBold: "Development Services",
    description:
      "Crafting unforgettable online experiences through exceptional website design and development — where every detail is meticulously tailored to create a one-of-a-kind digital presence.",
    color: "#00D4FF",
    colorB: "#0066FF",
    image: "/images/HeroSection/slider-img-1.webp",
    stat1: { v: "12+", l: "Years Expertise" },
    stat2: { v: "5000+", l: "Projects Done" },
  },
  {
    tag: "Digital Marketing",
    eyebrow: "We Amplify Your",
    headline: "Search Visibility.",
    sub: "Professional Digital Marketing &",
    subBold: "SEO Services",
    description:
      "Improve your website visibility in search engine results and increase ranking with white-hat SEO strategies built for long-term, sustainable growth.",
    color: "#A855F7",
    colorB: "#6366F1",
    image: "/images/HeroSection/newimg.webp",
    stat1: { v: "3×", l: "Average ROI" },
    stat2: { v: "Top 3", l: "SERP Rankings" },
  },
];

const SERVICES = [
  "Website Development",
  "Digital Marketing",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce Solutions",
  "SEO & Content Strategy",
];

const MARQUEE_ITEMS = [
  "Website Development","Digital Marketing","SEO Optimization",
  "UI/UX Design","Mobile Apps","E-Commerce","Brand Strategy","Performance Audits",
];

export default function HeroSection() {
  const [idx, setIdx]           = useState(0);
  const [tick, setTick]         = useState(0);
  const [phase, setPhase]       = useState("idle");
  const [scrollY, setScrollY]   = useState(0);
  const [form, setForm]         = useState({ first:"", last:"", email:"", phone:"", service:"" });
  const [submitted, setSubmitted] = useState(false);
  const [mouse, setMouse]       = useState({ x:0, y:0 });
  const timerRef   = useRef(null);
  const sectionRef = useRef(null);

  const slide = slides[idx];
  const c  = slide.color;
  const cB = slide.colorB;

  /* scroll zoom */
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* mouse parallax */
  useEffect(() => {
    const fn = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: ((e.clientX - rect.left) / rect.width  - 0.5) * 2,
        y: ((e.clientY - rect.top)  / rect.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const imgScale = 1 + Math.min(scrollY * 0.00035, 0.14);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => advance((p) => (p + 1) % slides.length), 6500
    );
  };
  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  const advance = (fn) => {
    setPhase("exit");
    setTimeout(() => {
      setIdx(fn);
      setTick(t => t + 1);
      setPhase("enter");
      setTimeout(() => setPhase("idle"), 700);
    }, 380);
  };

  const goTo = (i) => {
    if (i === idx || phase !== "idle") return;
    advance(() => i);
    startTimer();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ first:"", last:"", email:"", phone:"", service:"" });
    }, 3500);
  };

  const ex = phase === "exit" ? " hs-exit" : "";

  /* CSS vars injected once via a style tag — all dynamic color values */
  const cssVars = `
    :root {
      --hc:  ${c};
      --hcb: ${cB};
    }
  `;

  return (
    <section
      ref={sectionRef}
      className="hs-section relative overflow-hidden bg-[#05060F] flex items-center min-h-[calc(100vh-106px)]"
    >
      {/* ── Dynamic CSS vars + keyframes ── */}
      <style>{`
        ${cssVars}
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=Syne:wght@700;800&display=swap');

        /* ── Keyframes ── */
        @keyframes hsUp   { from{opacity:0;transform:translateY(28px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes hsFade { from{opacity:0}                              to{opacity:1} }
        @keyframes hsExit { from{opacity:1;transform:translateY(0)}      to{opacity:0;transform:translateY(-14px)} }
        @keyframes hsBgIn { from{opacity:0;transform:scale(1.09)}        to{opacity:1;transform:scale(1)} }
        @keyframes hsSpin { from{transform:rotate(0)}                    to{transform:rotate(360deg)} }
        @keyframes hsBar  { from{width:0%}                               to{width:100%} }
        @keyframes hsMrq  { from{transform:translateX(0)}                to{transform:translateX(-50%)} }
        @keyframes hsPing { 75%,100%{transform:scale(2.2);opacity:0} }
        @keyframes hsImgRev { from{opacity:0;transform:scale(.88) rotate(-3deg)} to{opacity:1;transform:scale(1) rotate(0)} }
        @keyframes hsFloat  { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-10px) rotate(1.5deg)} }
        @keyframes hsBlobMove {
          0%,100%{transform:translate(0,0) scale(1)}
          33%    {transform:translate(36px,-28px) scale(1.07)}
          66%    {transform:translate(-18px,22px) scale(.94)}
        }
        @keyframes hsGlowPulse { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes hsCardIn { from{opacity:0;transform:translateY(22px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes hsSweep  { from{left:-80%} to{left:140%} }

        /* ── Animation helper classes ── */
        .hs-e1  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .00s both }
        .hs-e2  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .07s both }
        .hs-e3  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .14s both }
        .hs-e4  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .21s both }
        .hs-e5  { animation: hsFade .65s ease .29s both }
        .hs-e6  { animation: hsFade .65s ease .37s both }
        .hs-e7  { animation: hsCardIn .7s cubic-bezier(.22,1,.36,1) .15s both }
        .hs-exit{ animation: hsExit .38s ease-in both }

        .hs-bg-in  { animation: hsBgIn .9s cubic-bezier(.22,1,.36,1) both }
        .hs-img-in { animation: hsImgRev .75s cubic-bezier(.22,1,.36,1) both }
        .hs-bar    { animation: hsBar 6.5s linear both }
        .hs-float  { animation: hsFloat 8s ease-in-out infinite }
        .hs-blob   { animation: hsBlobMove 14s ease-in-out infinite }
        .hs-mrq    { display:flex; width:max-content; animation:hsMrq 22s linear infinite }

        .hs-spin-slow { animation: hsSpin 50s linear infinite; transform-origin: center }
        .hs-spin-med  { animation: hsSpin 32s linear infinite reverse; transform-origin: center }
        .hs-spin-fast { animation: hsSpin 22s linear infinite; transform-origin: center }
        .hs-spin-ring { animation: hsSpin 6s linear infinite }
        .hs-glow-bar  { animation: hsGlowPulse 3s ease-in-out infinite }

        /* ── Ping dot ── */
        .hs-ping { position:relative }
        .hs-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:hsPing 1.8s ease-out infinite;
        }

        /* ── Grain texture ── */
        .hs-section::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:4; opacity:.036;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ── Dot grid ── */
        .hs-dotgrid {
          background-image: radial-gradient(rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── Gradient text — uses CSS vars so it always reflects current slide color ── */
        .hs-grad-text {
          background: linear-gradient(120deg, #fff 0%, var(--hc) 50%, var(--hcb) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }
        .hs-grad-text-accent {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }
        .hs-grad-bg {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          transition: background 1s;
        }
        .hs-grad-bg-soft {
          background: linear-gradient(135deg, color-mix(in srgb, var(--hc) 22%, transparent), color-mix(in srgb, var(--hcb) 14%, transparent));
          transition: background 1s;
        }
        .hs-grad-border-glow {
          background: linear-gradient(135deg, color-mix(in srgb,var(--hc) 40%,transparent), color-mix(in srgb,var(--hcb) 25%,transparent), rgba(255,255,255,.05), color-mix(in srgb,var(--hc) 20%,transparent));
          transition: background 1s;
        }
        .hs-top-bar {
          background: linear-gradient(90deg, transparent 0%, var(--hc) 30%, var(--hcb) 70%, transparent 100%);
          transition: background 1s;
        }
        .hs-progress-bar {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          transition: background 1s;
        }
        .hs-tag-bg {
          background: linear-gradient(135deg, color-mix(in srgb,var(--hc) 18%,transparent), color-mix(in srgb,var(--hcb) 12%,transparent));
          border: 1px solid color-mix(in srgb, var(--hc) 30%, transparent);
          transition: all 1s;
        }
        .hs-tag-dot {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          transition: background 1s;
        }
        .hs-outlined-text {
          -webkit-text-stroke: 1.5px var(--hc);
          color: transparent;
          transition: -webkit-text-stroke-color 1s;
        }
        .hs-stat-val {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }
        .hs-dot-active {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          box-shadow: 0 0 12px color-mix(in srgb, var(--hc) 60%, transparent);
          transition: all .4s;
        }
        .hs-dot-inactive {
          background: rgba(255,255,255,.15);
          transition: all .4s;
        }
        .hs-badge-icon { fill: var(--hc); transition: fill 1s }
        .hs-badge-border { border: 1px solid color-mix(in srgb, var(--hc) 35%, transparent) }

        /* ── CTA gradient btn ── */
        .hs-btn-grad {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          box-shadow: 0 4px 28px color-mix(in srgb,var(--hc) 40%,transparent), 0 0 0 1px color-mix(in srgb,var(--hc) 20%,transparent);
          transition: transform .2s, box-shadow .2s, background 1s;
        }
        .hs-btn-grad:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 36px color-mix(in srgb,var(--hc) 55%,transparent), 0 0 0 1px color-mix(in srgb,var(--hc) 30%,transparent);
        }
        .hs-btn-outline {
          color: rgba(255,255,255,.52);
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.10);
          transition: color .2s, border-color .2s;
        }
        .hs-btn-outline:hover { color:#fff; border-color:rgba(255,255,255,.22) }

        /* shimmer sweep */
        .hs-sbtn { position:relative; overflow:hidden }
        .hs-sbtn::after {
          content:''; position:absolute; top:0; left:-80%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);
          transform:skewX(-18deg);
        }
        .hs-sbtn:hover::after { animation: hsSweep .55s ease forwards }

        /* ── Submit btn glow ── */
        .hs-submit-btn {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          box-shadow: 0 4px 24px color-mix(in srgb, var(--hc) 45%, transparent);
          transition: transform .2s, box-shadow .2s, background 1s;
        }
        .hs-submit-btn:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 10px 32px color-mix(in srgb, var(--hc) 60%, transparent);
        }

        /* ── Success check circle ── */
        .hs-success-ring {
          background: linear-gradient(135deg, color-mix(in srgb,var(--hc) 25%,transparent), color-mix(in srgb,var(--hcb) 15%,transparent));
          border: 2px solid var(--hc);
          box-shadow: 0 0 30px color-mix(in srgb, var(--hc) 40%, transparent);
          transition: all 1s;
        }
        .hs-success-icon { stroke: var(--hc); transition: stroke 1s }

        /* ── Form inputs ── */
        .hs-input {
          width: 100%;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 9px;
          padding: 10px 14px;
          color: #fff;
          font-size: 13px;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          transition: border-color .25s, box-shadow .25s, background .25s;
        }
        .hs-input::placeholder { color: rgba(255,255,255,.22) }
        .hs-input:focus {
          background: rgba(255,255,255,.07);
          border-color: var(--hc);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--hc) 14%, transparent);
        }
        .hs-select { appearance: none; cursor: pointer }
        .hs-select option { background: #0d0f1f; color: #fff }

        /* ── Blob bg ── */
        .hs-blob-main {
          background: radial-gradient(ellipse, color-mix(in srgb,var(--hc) 16%,transparent) 0%, color-mix(in srgb,var(--hcb) 8%,transparent) 45%, transparent 72%);
          transition: background 1s;
        }
        .hs-blob-secondary {
          background: radial-gradient(ellipse, color-mix(in srgb,var(--hcb) 12%,transparent) 0%, transparent 65%);
          transition: background 1s;
          animation: hsBlobMove 18s ease-in-out infinite reverse;
        }

        /* ── Ring SVG colors ── */
        .hs-ring-stroke-a { stroke: var(--hc); stroke-opacity: .07 }
        .hs-ring-stroke-b { stroke: var(--hcb); stroke-opacity: .08 }

        /* ── Horiz accent line ── */
        .hs-h-line {
          background: linear-gradient(90deg, transparent 0%, color-mix(in srgb,var(--hc) 20%,transparent) 30%, color-mix(in srgb,var(--hc) 35%,transparent) 50%, color-mix(in srgb,var(--hcb) 20%,transparent) 70%, transparent 100%);
          transition: background 1s;
        }

        /* ── Circular image ring ── */
        .hs-img-ring {
          background: conic-gradient(var(--hc), var(--hcb), rgba(255,255,255,.2), var(--hc));
          transition: background 1s;
        }
        .hs-img-overlay {
          background: radial-gradient(ellipse at 70% 30%, color-mix(in srgb,var(--hc) 22%,transparent) 0%, transparent 65%);
          transition: background 1s;
        }

        /* ── Marquee separator ── */
        .hs-mrq-sep {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }

        /* ── Responsive font for headline ── */
        .hs-headline {
          font-size: clamp(2rem, 5.5vw, 3.8rem);
          white-space: nowrap;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }
        @media (max-width: 480px) {
          .hs-headline { font-size: clamp(1.7rem, 8vw, 2.4rem) }
        }

        .hs-subBold {
          font-family: 'Syne', sans-serif;
          font-size: clamp(.9rem, 2vw, 1.35rem);
          font-weight: 700;
          letter-spacing: -0.015em;
        }
        .hs-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 800;
          line-height: 1;
        }
        .hs-form-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: -0.015em;
        }
        .hs-success-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
        }
      `}</style>

      {/* ══ BG IMAGE — scroll zoom ══ */}
      <div
        key={`bg-${tick}`}
        className="hs-bg-in absolute inset-0 z-0"
        style={{ transform:`scale(${imgScale})`, transformOrigin:"center", transition:"transform .06s linear" }}
      >
        <img src={slide.image} alt="" aria-hidden="true" className="w-full h-full object-cover object-center block" />
      </div>

      {/* ── Overlays ── */}
      {/* Dark gradient */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background:"linear-gradient(115deg,rgba(5,6,15,.97) 0%,rgba(5,6,15,.92) 42%,rgba(5,6,15,.72) 68%,rgba(5,6,15,.28) 100%)" }}
      />

      {/* Blob main */}
      <div
        className="hs-blob hs-blob-main absolute z-[2] pointer-events-none"
        style={{
          top:"10%", left:"-5%",
          width:"min(520px,80vw)", height:"min(480px,70vw)",
          borderRadius:"60% 40% 55% 45%/50% 60% 40% 50%",
          transform:`translate(${mouse.x*20}px,${mouse.y*14}px)`,
        }}
      />
      {/* Blob secondary */}
      <div
        className="hs-blob-secondary absolute z-[2] pointer-events-none rounded-full"
        style={{ bottom:"-15%", right:"20%", width:"min(400px,60vw)", height:"min(380px,55vw)" }}
      />

      {/* Dot grid */}
      <div className="hs-dotgrid absolute inset-0 z-[2] pointer-events-none" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-36 z-[3] pointer-events-none"
        style={{ background:"linear-gradient(to top,rgba(5,6,15,1) 0%,transparent 100%)" }}
      />

      {/* SVG Rings */}
      <div
        className="absolute z-[3] pointer-events-none hidden sm:block"
        style={{
          top:-130, right:-90, width:420, height:420,
          transform:`translate(${mouse.x*-18}px,${mouse.y*-12}px)`,
          transition:"transform .8s ease",
        }}
      >
        <svg viewBox="0 0 420 420" fill="none" width="420" height="420">
          <defs>
            <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={c} stopOpacity=".22"/>
              <stop offset="100%" stopColor={cB} stopOpacity=".04"/>
            </linearGradient>
          </defs>
          <circle cx="210" cy="210" r="190" stroke="url(#rg1)" strokeWidth="1"
            strokeDasharray="70 110" strokeLinecap="round" className="hs-spin-slow"/>
          <circle cx="210" cy="210" r="140" strokeWidth="1"
            strokeDasharray="45 75" strokeLinecap="round" className="hs-spin-med hs-ring-stroke-a"/>
          <circle cx="210" cy="210" r="90" strokeWidth="1"
            strokeDasharray="28 48" strokeLinecap="round" className="hs-spin-fast hs-ring-stroke-b"/>
        </svg>
      </div>

      {/* Horizontal accent line */}
      <div className="hs-h-line absolute top-1/2 left-0 right-0 h-px z-[3] pointer-events-none" />

      {/* ══ MAIN LAYOUT ══ */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center min-h-[calc(100vh-106px)]">

        {/* ════ LEFT — Text ════ */}
        <div className="flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-[5vw] pt-10 pb-6 lg:py-0 w-full lg:w-[53%]">

          {/* Progress bar */}
          <div className="relative w-full max-w-[500px] h-px bg-white/[.08] mb-8 overflow-hidden rounded-full">
            <div key={`bar-${tick}`} className="hs-bar hs-progress-bar absolute left-0 top-0 h-full rounded-full" />
          </div>

          {/* Tag + counter */}
          <div className={`hs-e1${ex} flex items-center justify-between max-w-[500px] mb-5`}>
            <div className="hs-tag-bg inline-flex items-center gap-2 rounded-full px-3 py-1.5">
              <span className="hs-ping hs-tag-dot w-[7px] h-[7px] rounded-full flex-shrink-0 block" />
              <span className="hs-grad-text-accent text-[9.5px] font-semibold tracking-[.22em] uppercase">
                {slide.tag}
              </span>
            </div>
            <span className="text-[11px] text-white/20 font-bold tracking-[.12em]" style={{fontFamily:"'Syne',sans-serif"}}>
              0{idx+1} <span className="text-white/10">—</span> 0{slides.length}
            </span>
          </div>

          {/* Eyebrow */}
          <p className={`hs-e2${ex} text-sm sm:text-base text-white/40 font-light italic mb-1 tracking-[.02em]`}>
            {slide.eyebrow}
          </p>

          {/* Headline — single line, gradient on last word via split */}
          <div key={`hl-${tick}`} className={`hs-e3${ex} mb-2`}>
            <h1 className="hs-headline m-0">
              {(() => {
                const words = slide.headline.split(" ");
                const last  = words.pop();
                return (
                  <>
                    <span className="text-white">{words.join(" ")}{words.length ? " " : ""}</span>
                    <span className="hs-grad-text">{last}</span>
                  </>
                );
              })()}
            </h1>
          </div>

          {/* Sub headline */}
          <div className={`hs-e4${ex} flex flex-col gap-0.5 mb-4`}>
            <span className="text-[13px] text-white/30 font-normal tracking-[.01em]">{slide.sub}</span>
            <span className="hs-subBold hs-outlined-text">{slide.subBold}</span>
          </div>

          {/* Description */}
          <p className={`hs-e5${ex} text-[13.5px] text-white/45 leading-[1.82] max-w-[430px] mb-7 font-normal`}>
            {slide.description}
          </p>

          {/* CTAs */}
          <div className={`hs-e6${ex} flex flex-wrap items-center gap-3 mb-8`}>
            <a
              href="#scroll-down"
              className="hs-btn-grad hs-sbtn inline-flex items-center gap-2 font-bold text-[11px] tracking-[.12em] uppercase px-6 py-3 rounded-lg text-black no-underline"
            >
              Get Started
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5h8M5.5 1.5l4 4-4 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link
              href="/our-portfolio"
              className="hs-btn-outline inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.10em] uppercase px-5 py-3 rounded-lg no-underline"
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1 4.5h7M4.5 1l3.5 3.5L4.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Portfolio
            </Link>
          </div>

          {/* Stats + dots */}
          <div className={`hs-e6${ex} flex items-stretch max-w-[460px] pt-5 border-t border-white/[.06]`}>
            {[slide.stat1, slide.stat2].map((st, si) => (
              <div
                key={si}
                className={`flex-1 ${si===0 ? "pr-6 border-r border-white/[.06]" : "pl-6"}`}
              >
                <div className="hs-stat-num hs-stat-val mb-1">{st.v}</div>
                <div className="text-[10px] text-white/[.28] tracking-[.10em] uppercase font-medium">{st.l}</div>
              </div>
            ))}
            {/* Slide dots */}
            <div className="flex-1 flex items-end justify-end gap-1.5 pb-0.5">
              {slides.map((_,i) => (
                <button
                  key={i}
                  onClick={()=>goTo(i)}
                  aria-label={`Slide ${i+1}`}
                  className={`border-none cursor-pointer p-0 rounded-full block ${i===idx ? "hs-dot-active w-7 h-2" : "hs-dot-inactive w-2 h-2"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ════ RIGHT — Form ════ */}
        <div className="flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-[3vw] lg:pr-[5vw] pt-2 pb-12 lg:py-0 w-full lg:w-[47%]">
          <div className="w-full max-w-[420px] lg:max-w-[390px] relative hs-e7">

            {/* Gradient border glow */}
            <div className="hs-grad-border-glow absolute -inset-px rounded-[22px] z-0" />

            {/* Card */}
            <div className="relative z-10 rounded-[21px] p-6 sm:p-7 overflow-hidden bg-[rgba(7,9,22,0.82)] backdrop-blur-[32px]">

              {/* Top shimmer bar */}
              <div className="hs-top-bar hs-glow-bar absolute top-0 left-0 right-0 h-0.5 rounded-t-[21px]" />

              {/* Floating circular image */}
              <div className="hs-float absolute -top-11 -right-5 w-[120px] h-[120px] sm:w-[132px] sm:h-[132px] rounded-full z-10">
                <div className="hs-spin-ring hs-img-ring absolute -inset-[3px] rounded-full z-0" />
                <div className="absolute inset-[3px] rounded-full overflow-hidden z-10 bg-[#07091A]">
                  <img key={`ci-${tick}`} className="hs-img-in w-full h-full object-cover object-center" src={slide.image} alt="" />
                  <div className="hs-img-overlay absolute inset-0" />
                </div>
              </div>

              {/* Badge */}
              <div className="hs-grad-bg-soft hs-badge-border inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 mb-5">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1l1.3 2.6L10 4.1 8 6l.5 2.9L6 7.6 3.5 8.9 4 6 2 4.1l2.7-.5z" className="hs-badge-icon"/>
                </svg>
                <span className="hs-grad-text-accent text-[9px] font-bold tracking-[.18em] uppercase">
                  Let's Build Together
                </span>
              </div>

              <h3 className="hs-form-title text-white mb-5">Start Your Project Today</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="hs-success-ring w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12l5.5 5.5 10.5-10" className="hs-success-icon" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="hs-success-title text-white text-[15px] mb-1.5">Message Received!</p>
                  <p className="text-white/40 text-[13px]">Our team will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {[{k:"first",ph:"First Name"},{k:"last",ph:"Last Name"}].map(f=>(
                      <div key={f.k}>
                        <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5">{f.ph}</label>
                        <input className="hs-input" placeholder={f.ph} value={form[f.k]}
                          onChange={e=>setForm({...form,[f.k]:e.target.value})} required />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5">Email Address</label>
                    <input className="hs-input" type="email" placeholder="john@example.com"
                      value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[12px] text-white/30 font-medium pr-2 border-r border-white/10">+91</span>
                      <input className="hs-input pl-[46px]" type="tel" placeholder="98765 43210"
                        value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5">Select Service</label>
                    <div className="relative">
                      <select className="hs-input hs-select" value={form.service}
                        onChange={e=>setForm({...form,service:e.target.value})} required>
                        <option value="" disabled>Choose your service</option>
                        {SERVICES.map(s=><option key={s} value={s}>{s}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5l3 3 3-3" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="h-px bg-white/[.06] my-0.5" />

                  <button type="submit" className="hs-submit-btn hs-sbtn w-full py-3.5 rounded-[9px] font-extrabold text-[11px] tracking-[.14em] uppercase border-none cursor-pointer flex items-center justify-center gap-2 text-black" style={{fontFamily:"inherit"}}>
                    Submit Now
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="text-[10px] text-white/20 text-center m-0 tracking-[.04em]">
                    Free consultation · No spam · Reply within 24h
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ══ MARQUEE ══ */}
      <div className="absolute bottom-0 left-0 right-0 h-[30px] z-20 overflow-hidden flex items-center border-t border-white/[.04] backdrop-blur-md bg-[rgba(5,6,15,.88)]">
        <div className="hs-mrq">
          {Array(2).fill(MARQUEE_ITEMS).flat().map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-[8.5px] text-white/[.50] tracking-[.24em] uppercase font-medium whitespace-nowrap px-5">{item}</span>
              <span className="hs-mrq-sep text-[7px] opacity-35">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}