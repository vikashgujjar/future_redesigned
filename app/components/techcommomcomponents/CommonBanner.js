import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CommonBanner({ img, title, desc }) {
  return (
    <>
      <style>{`
        @keyframes tcbBlob  { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-16px,18px)} }
        @keyframes tcbCW    { to { transform: rotate(360deg) } }
        @keyframes tcbCCW   { to { transform: rotate(-360deg) } }
        @keyframes tcbBarIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes tcbFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .tcb-bar { animation: tcbBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left }
        .tcb-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section className="relative overflow-hidden flex items-center"
        style={{
          background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
          fontFamily: "'Inter',sans-serif",
          minHeight: "clamp(480px,75vh,700px)",
        }}>

        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none z-[1] opacity-[.036]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
        <div className="tcb-dotgrid absolute inset-0 pointer-events-none z-[1]" />

        {/* Blobs */}
        <div className="absolute -top-48 -left-48 w-[580px] h-[580px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.16) 0%,transparent 65%)", animation: "tcbBlob 16s ease-in-out infinite" }} />
        <div className="absolute -bottom-48 right-0 w-[520px] h-[520px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.18) 0%,transparent 65%)", animation: "tcbBlob 20s ease-in-out infinite reverse" }} />

        {/* SVG arcs */}
        <svg className="absolute top-0 left-0 pointer-events-none z-[2]" width="380" height="380"
          viewBox="0 0 380 380" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="tcbTL" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity=".28" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity=".03" />
            </linearGradient>
          </defs>
          <g style={{ transformOrigin: "0 0", animation: "tcbCW 45s linear infinite" }}>
            <circle cx="0" cy="0" r="290" stroke="url(#tcbTL)" strokeWidth="1.2" strokeDasharray="75 125" strokeLinecap="round" fill="none" />
          </g>
          <g style={{ transformOrigin: "0 0", animation: "tcbCCW 30s linear infinite" }}>
            <circle cx="0" cy="0" r="190" stroke="rgba(45,212,191,.09)" strokeWidth="1" strokeDasharray="50 85" strokeLinecap="round" fill="none" />
          </g>
        </svg>

        <div className="absolute top-1/2 left-0 right-0 h-px pointer-events-none z-[2]"
          style={{ background: "linear-gradient(90deg,transparent,rgba(45,212,191,.12),rgba(99,102,241,.10),transparent)" }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28 py-20">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-16 items-center">

            {/* Left: text */}
            <div>
              <h1 className="font-extrabold leading-[1.08] mb-5"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "clamp(1.5rem,4vw,3rem)",
                  background: "linear-gradient(120deg,#ffffff 40%,#2dd4bf 70%,#6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                {title}
              </h1>

              <div className="tcb-bar h-[3px] w-16 rounded-full mb-6"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

              <p className="text-[14.5px] leading-[1.90] mb-8 max-w-[580px] text-justify"
                style={{ color: "rgba(255,255,255,.58)" }}>
                {desc}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 24px rgba(45,212,191,.38)", fontFamily: "'Poppins',sans-serif" }}>
                  Quick Enquiry
                </Link>
                <Link href="tel:+917056937000"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 no-underline"
                  style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", color: "rgba(255,255,255,.78)", fontFamily: "'Poppins',sans-serif" }}>
                  Call us - 7056937000
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-5 rounded-[28px] pointer-events-none"
                style={{ background: "linear-gradient(135deg,rgba(45,212,191,.20),rgba(99,102,241,.22))", filter: "blur(24px)", opacity: .60 }} />
              <div className="relative rounded-2xl overflow-hidden flex items-center justify-center p-6"
                style={{ border: "1px solid rgba(255,255,255,.10)", boxShadow: "0 32px 80px rgba(0,0,0,.55)", background: "rgba(255,255,255,.04)", minHeight: 280 }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                <Image
                  src={img}
                  width={400}
                  height={380}
                  alt="Service illustration"
                  className="w-full h-auto object-contain relative z-10"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl pointer-events-none"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", opacity: .70, animation: "tcbFloat 5s ease-in-out infinite", boxShadow: "0 6px 20px rgba(45,212,191,.38)" }} />
              <div className="absolute -bottom-3 -left-3 w-9 h-9 rounded-lg pointer-events-none"
                style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", opacity: .62, animation: "tcbFloat 7s ease-in-out infinite 1.5s" }} />
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-[3]"
          style={{ background: "linear-gradient(to bottom,transparent,rgba(6,11,26,.40))" }} />
      </section>
    </>
  );
}
