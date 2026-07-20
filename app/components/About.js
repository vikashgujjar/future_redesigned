"use client";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_START_YEAR } from "../lib/companyStats";

/* ── Feature items — same content as original ── */
const features = [
  {
    icon: "/Assets/market-positioning.webp",
    title: "Brand Strategy & Art Direction",
    from: "#2dd4bf",
    to: "#6366f1",
  },
  {
    icon: "/Assets/ui.webp",
    title: "UX/UI Design & Website / App Design",
    from: "#6366f1",
    to: "#a855f7",
  },
  {
    icon: "/Assets/trending-topic.webp",
    title: "Trending Designing Experience",
    from: "#2dd4bf",
    to: "#06b6d4",
  },
  {
    icon: "/Assets/compass.webp",
    title: "Digital Innovation & Solutions",
    from: "#4f46e5",
    to: "#2dd4bf",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 sm:pb-44 px-5 sm:px-8 md:px-12 xl:px-24 bg-white">

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes aboutRingSpin  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes aboutRingSpin2 { from{transform:rotate(360deg)} to{transform:rotate(0deg)}   }
        @keyframes aboutArcCW     { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes aboutArcCCW    { from{transform:rotate(360deg)} to{transform:rotate(0deg)}   }
        @keyframes aboutFloat {
          0%,100%{transform:translateY(0px);}
          50%    {transform:translateY(-8px);}
        }
        @keyframes aboutBarGrow {
          from{transform:scaleX(0);}
          to  {transform:scaleX(1);}
        }
        /* Image float — preserves the rotation tilt */
        @keyframes aboutImgFloat1 {
          0%,100%{ transform:rotate(-2deg) translateY(0px);   }
          50%    { transform:rotate(-2deg) translateY(-12px);  }
        }
        @keyframes aboutImgFloat2 {
          0%,100%{ transform:rotate(2deg) translateY(0px);  }
          50%    { transform:rotate(2deg) translateY(-9px);  }
        }
      `}</style>

      {/* ── Soft radial glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[45%] h-[55%]"
          style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(45,212,191,0.07) 0%, transparent 65%)" }}/>
        <div className="absolute bottom-0 right-0 w-[40%] h-[50%]"
          style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(99,102,241,0.07) 0%, transparent 65%)" }}/>
      </div>

      {/* ── TOP-LEFT animated arc vectors ── */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="abTL1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.55"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.03"/>
            </linearGradient>
            <linearGradient id="abTL2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.40"/>
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.03"/>
            </linearGradient>
          </defs>
          {/* Outer arc */}
          <g style={{ transformOrigin:"0px 0px", animation:"aboutArcCW 32s linear infinite" }}>
            <circle cx="0" cy="0" r="180" stroke="url(#abTL1)" strokeWidth="1.5" fill="none"
              strokeDasharray="95 145" strokeLinecap="round"/>
          </g>
          {/* Mid arc */}
          <g style={{ transformOrigin:"0px 0px", animation:"aboutArcCCW 22s linear infinite" }}>
            <circle cx="0" cy="0" r="125" stroke="url(#abTL1)" strokeWidth="1.2" fill="none"
              strokeDasharray="65 100" strokeLinecap="round"/>
          </g>
          {/* Inner arc */}
          <g style={{ transformOrigin:"0px 0px", animation:"aboutArcCW 42s linear infinite" }}>
            <circle cx="0" cy="0" r="78" stroke="url(#abTL2)" strokeWidth="1" fill="none"
              strokeDasharray="42 65" strokeLinecap="round"/>
          </g>
          {/* Floating dots */}
          <circle cx="95" cy="75" r="2" fill="#2dd4bf" opacity="0.25"
            style={{ animation:"aboutFloat 4.5s ease-in-out infinite" }}/>
          <circle cx="55" cy="110" r="1.5" fill="#6366f1" opacity="0.2"
            style={{ animation:"aboutFloat 6s ease-in-out infinite 1s" }}/>
          <circle cx="130" cy="45" r="1.5" fill="#2dd4bf" opacity="0.22"
            style={{ animation:"aboutFloat 5s ease-in-out infinite 2s" }}/>
        </svg>
      </div>

      {/* ── BOTTOM-RIGHT animated arc vectors ── */}
      <div className="absolute -bottom-10 -right-10 w-[280px] h-[280px] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="abBR1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.50"/>
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.03"/>
            </linearGradient>
            <linearGradient id="abBR2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.38"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.03"/>
            </linearGradient>
          </defs>
          {/* Outer arc */}
          <g style={{ transformOrigin:"280px 280px", animation:"aboutArcCCW 28s linear infinite" }}>
            <circle cx="280" cy="280" r="170" stroke="url(#abBR1)" strokeWidth="1.5" fill="none"
              strokeDasharray="88 135" strokeLinecap="round"/>
          </g>
          {/* Mid arc */}
          <g style={{ transformOrigin:"280px 280px", animation:"aboutArcCW 20s linear infinite" }}>
            <circle cx="280" cy="280" r="118" stroke="url(#abBR1)" strokeWidth="1.2" fill="none"
              strokeDasharray="60 95" strokeLinecap="round"/>
          </g>
          {/* Inner arc */}
          <g style={{ transformOrigin:"280px 280px", animation:"aboutArcCCW 38s linear infinite" }}>
            <circle cx="280" cy="280" r="72" stroke="url(#abBR2)" strokeWidth="1" fill="none"
              strokeDasharray="38 60" strokeLinecap="round"/>
          </g>
          {/* Floating dots */}
          <circle cx="185" cy="200" r="2" fill="#6366f1" opacity="0.22"
            style={{ animation:"aboutFloat 5s ease-in-out infinite 0.5s" }}/>
          <circle cx="220" cy="165" r="1.5" fill="#818cf8" opacity="0.18"
            style={{ animation:"aboutFloat 7s ease-in-out infinite 2.5s" }}/>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ════════════════════════
            LEFT — Image composition
        ════════════════════════ */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">

          {/* CSS dot-grid pattern */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl" aria-hidden="true"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}/>

          {/* Animated outer dashed ring */}
          <div className="absolute bottom-4 left-4 w-36 h-36 rounded-full border-2 border-dashed border-teal-400/30 pointer-events-none"
            style={{ animation: "aboutRingSpin 22s linear infinite" }}/>
          <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full border border-dashed border-indigo-400/20 pointer-events-none"
            style={{ animation: "aboutRingSpin2 16s linear infinite" }}/>

          {/* ── Main image (large, floating tilt) ── */}
          <div className="absolute top-0 left-0 w-[68%] z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100/60"
            style={{ animation: "aboutImgFloat1 8s ease-in-out infinite" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-indigo-600/10 z-10 pointer-events-none rounded-2xl" />
            <Image
              src="/Assets/hero-about-1.webp"
              width={420}
              height={520}
              alt="Team working together"
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* ── Secondary image (overlapping bottom-right, floating) ── */}
          <div className="absolute bottom-0 right-0 w-[54%] z-20 rounded-2xl overflow-hidden border-[5px] border-white shadow-xl shadow-teal-100/50"
            style={{ animation: "aboutImgFloat2 10s ease-in-out infinite 1.8s" }}>
            <Image
              src="/Assets/h2-about-img-right.webp"
              width={300}
              height={360}
              alt="Creative digital solutions"
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* ── Floating badge — "Since 2017" ── */}
          <div className="absolute top-4 right-0 z-30 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100/80 backdrop-blur-sm"
            style={{ animation: "aboutFloat 5s ease-in-out infinite" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-200">
                <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest leading-none mb-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}>Established</p>
                <p className="text-sm font-bold text-gray-800 leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>Since {COMPANY_START_YEAR}</p>
              </div>
            </div>
          </div>

          {/* ── Sparkle accent top-left ── */}
          <svg className="absolute -top-3 left-[30%] w-7 h-7 pointer-events-none"
            style={{ opacity: 0.22, animation: "aboutFloat 7s ease-in-out infinite 1s" }}
            viewBox="0 0 36 36" fill="none">
            <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="#2dd4bf"/>
          </svg>

          {/* Gradient accent line below main image */}
          <div className="absolute bottom-0 left-0 w-[68%] h-1 rounded-full z-30"
            style={{ background: "linear-gradient(to right, #2dd4bf, #6366f1)" }}/>
        </div>

        {/* ════════════════════════
            RIGHT — Content panel
        ════════════════════════ */}
        <div>

          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-indigo-50
            border border-teal-200/70 px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-indigo-600 animate-pulse flex-shrink-0" />
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-bold leading-tight mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            Creative Problem{" "}
            <br className="hidden sm:block" />
            Solving{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
              Innovation
            </span>
          </h2>

          {/* Decorative gradient divider */}
          <div className="w-16 h-1 rounded-full mb-5"
            style={{ background: "linear-gradient(to right, #2dd4bf, #6366f1)" }}/>

          {/* Description */}
          <p className="text-gray-500 text-base lg:text-[15px] leading-relaxed mb-8 max-w-[520px]"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Founded in {COMPANY_START_YEAR}, Future IT Touch is a leading website designing and development company
            in India. We specialize in creating innovative and user-friendly digital solutions that
            help businesses thrive in the online world. Our dedicated team combines creativity and
            technical expertise to deliver exceptional results tailored to your needs.
          </p>

          {/* Feature cards — 2 × 2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {features.map((feat, i) => (
              <div
                key={i}
                className="group relative flex items-center gap-3.5 p-4 rounded-2xl
                  border border-gray-100 hover:border-transparent
                  bg-white hover:bg-gradient-to-br hover:from-teal-50/60 hover:to-indigo-50/60
                  shadow-sm hover:shadow-md hover:shadow-indigo-100/50
                  transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Animated left accent bar */}
                <div className="absolute left-0 top-0 h-full w-0.5 rounded-r-full origin-top"
                  style={{
                    background: `linear-gradient(to bottom, ${feat.from}, ${feat.to})`,
                    animation: "aboutBarGrow 0.6s ease-out both",
                    animationDelay: `${i * 0.1}s`,
                  }}/>

                {/* Icon container */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${feat.from}18, ${feat.to}18)` }}>
                  <Image
                    src={feat.icon}
                    width={26}
                    height={26}
                    alt={feat.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Title */}
                <h5 className="text-sm font-bold text-gray-700 group-hover:text-indigo-700 leading-snug transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {feat.title}
                </h5>

                {/* Hover shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent
                  skew-x-12 pointer-events-none"/>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/contact"
            className="relative overflow-hidden group inline-flex items-center gap-2
              bg-gradient-to-r from-teal-400 to-indigo-700 text-white font-semibold
              px-8 py-3.5 rounded-full shadow-lg shadow-indigo-200/50
              hover:shadow-indigo-300/60 hover:-translate-y-0.5 transition-all duration-200"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="relative z-10">Read More</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none"
              stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
              transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
