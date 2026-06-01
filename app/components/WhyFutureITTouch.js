"use client";
import React, { useState } from "react";

const GRADIENTS = [
  { from: "#2dd4bf", to: "#6366f1" },
  { from: "#6366f1", to: "#8b5cf6" },
  { from: "#0ea5e9", to: "#2dd4bf" },
  { from: "#a855f7", to: "#6366f1" },
  { from: "#2dd4bf", to: "#0ea5e9" },
  { from: "#8b5cf6", to: "#2dd4bf" },
];

export default function WhyFutureITTouch({ platforms = [], title }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visiblePlatforms = platforms.slice(0, visibleCount);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <style>{`
        @keyframes wftCW  { to { transform: rotate(360deg)  } }
        @keyframes wftCCW { to { transform: rotate(-360deg) } }
        @keyframes wftBarIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes wftPing  { 75%,100% { transform: scale(2.1); opacity: 0 } }

        .wft-bar  { animation: wftBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left }
        .wft-ping { position: relative }
        .wft-ping::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          background: inherit; animation: wftPing 2s ease-out infinite;
        }
        .wft-dotgrid {
          background-image: radial-gradient(rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .wft-card {
          transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .28s;
        }
        .wft-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(0,0,0,.45) !important;
        }
        .wft-card-glow {
          opacity: 0;
          transition: opacity .3s ease;
        }
        .wft-card:hover .wft-card-glow { opacity: 1 }
        .wft-icon-ring {
          transition: box-shadow .28s ease;
        }
        .wft-card:hover .wft-icon-ring {
          box-shadow: 0 0 0 6px rgba(45,212,191,.12), 0 6px 22px rgba(45,212,191,.30) !important;
        }
      `}</style>

      {/* ── Background layers ── */}
      <div className="wft-dotgrid absolute inset-0 pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.13) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.13) 0%,transparent 65%)" }} />

      {/* SVG arcs — top-left */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="320" height="320"
        viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <g style={{ transformOrigin: "0 0", animation: "wftCW 48s linear infinite" }}>
          <circle cx="0" cy="0" r="230" stroke="rgba(45,212,191,.07)" strokeWidth="1.2"
            strokeDasharray="70 115" strokeLinecap="round" fill="none" />
        </g>
        <g style={{ transformOrigin: "0 0", animation: "wftCCW 32s linear infinite" }}>
          <circle cx="0" cy="0" r="148" stroke="rgba(99,102,241,.07)" strokeWidth="1"
            strokeDasharray="48 80" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      {/* SVG arcs — bottom-right */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="280" height="280"
        viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <g style={{ transformOrigin: "280px 280px", animation: "wftCCW 38s linear infinite" }}>
          <circle cx="280" cy="280" r="195" stroke="rgba(139,92,246,.07)" strokeWidth="1.2"
            strokeDasharray="60 100" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
            <span className="wft-ping w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                fontFamily: "'Poppins',sans-serif",
              }}>
              Platforms &amp; Technologies
            </span>
          </div>

          <h2 className="font-extrabold text-white mb-4"
            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.5vw,2.6rem)", lineHeight: 1.12 }}>
            {title}
          </h2>

          <p className="text-[13.5px] max-w-[520px] mx-auto mb-5"
            style={{ color: "rgba(255,255,255,.42)", lineHeight: 1.8 }}>
            We master the tools that power modern digital products — from storefronts to enterprise platforms.
          </p>

          <div className="wft-bar h-[3px] w-14 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {visiblePlatforms.map((elm, index) => {
            const grad = GRADIENTS[index % GRADIENTS.length];
            return (
              <div
                key={index}
                className="wft-card relative group rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(7,9,22,.84)",
                  border: "1px solid rgba(255,255,255,.07)",
                  boxShadow: "0 4px 28px rgba(0,0,0,.32)",
                }}
              >
                {/* Gradient top strip */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg,${grad.from},${grad.to})`, opacity: .65 }} />

                {/* Hover border glow */}
                <div className="wft-card-glow absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${grad.from}44` }} />

                <div className="p-6 sm:p-7">

                  {/* Icon */}
                  <div
                    className="wft-icon-ring w-13 h-13 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{
                      width: 52, height: 52,
                      background: `linear-gradient(135deg,${grad.from},${grad.to})`,
                      boxShadow: `0 4px 18px ${grad.from}44`,
                    }}
                  >
                    <span style={{ color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {elm.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h5 className="font-bold text-white mb-3 leading-snug"
                    style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(.95rem,1.8vw,1.05rem)" }}>
                    {elm.title}
                  </h5>

                  {/* Accent divider */}
                  <div className="h-px mb-3 rounded-full"
                    style={{ background: `linear-gradient(90deg,${grad.from}55,transparent)` }} />

                  {/* Description */}
                  <p className="text-[13px] leading-[1.82]"
                    style={{ color: "rgba(255,255,255,.48)" }}>
                    {elm.desc}
                  </p>

                  {/* Bottom subtle corner indicator */}
                  <div className="flex items-center gap-1.5 mt-5">
                    <div className="w-1.5 h-1.5 rounded-full"
                      style={{ background: `linear-gradient(135deg,${grad.from},${grad.to})` }} />
                    <div className="h-px flex-1 rounded-full"
                      style={{ background: `linear-gradient(90deg,${grad.from}33,transparent)` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Load More ── */}
        {visibleCount < platforms.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[.14em] uppercase px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5 border-none cursor-pointer"
              style={{
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                boxShadow: "0 4px 24px rgba(45,212,191,.35)",
              }}
            >
              Load More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M2 7l4 4 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
