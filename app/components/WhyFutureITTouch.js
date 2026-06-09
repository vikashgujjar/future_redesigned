"use client";
import React, { useState } from "react";

const PALETTES = [
  { from:"#06b6d4", to:"#0284c7", light:"rgba(6,182,212,.08)",  border:"rgba(6,182,212,.35)"  },
  { from:"#6366f1", to:"#4f46e5", light:"rgba(99,102,241,.08)", border:"rgba(99,102,241,.35)"  },
  { from:"#10b981", to:"#059669", light:"rgba(16,185,129,.08)", border:"rgba(16,185,129,.35)"  },
  { from:"#f59e0b", to:"#d97706", light:"rgba(245,158,11,.08)", border:"rgba(245,158,11,.35)"  },
  { from:"#ec4899", to:"#db2777", light:"rgba(236,72,153,.08)", border:"rgba(236,72,153,.35)"  },
  { from:"#8b5cf6", to:"#7c3aed", light:"rgba(139,92,246,.08)", border:"rgba(139,92,246,.35)"  },
];

export default function WhyFutureITTouch({ platforms = [], title }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visible = platforms.slice(0, visibleCount);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

      <style>{`
        @keyframes wftBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes wftGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes wftPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
        @keyframes wftFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes wftIn     { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        .wft-bar   { animation:wftBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
        .wft-pulse { animation:wftPulse 2.4s ease-in-out infinite }
        .wft-hl {
          background:linear-gradient(125deg,#06b6d4,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:wftGrad 5s ease-in-out infinite;
        }

        /* Card */
        .wft-card {
          background:#ffffff;
          border-radius:22px; overflow:hidden;
          border:1px solid rgba(0,0,0,.06);
          box-shadow:0 2px 12px rgba(99,102,241,.06),0 1px 3px rgba(0,0,0,.04);
          display:flex; flex-direction:column;
          transition:transform .28s cubic-bezier(.22,1,.36,1),
                      box-shadow .28s ease,
                      border-color .28s ease;
          position:relative;
        }
        .wft-card:hover {
          transform:translateY(-8px);
          box-shadow:0 20px 48px rgba(99,102,241,.13),0 4px 12px rgba(0,0,0,.07);
        }

        /* Top coloured panel */
        .wft-panel {
          position:relative; overflow:hidden;
          height:148px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          transition:filter .28s ease;
        }
        .wft-card:hover .wft-panel { filter:brightness(1.06); }

        /* Dot mesh inside panel */
        .wft-mesh {
          position:absolute; inset:0;
          background-image:radial-gradient(rgba(255,255,255,.28) 1px,transparent 1px);
          background-size:18px 18px;
        }

        /* Watermark number */
        .wft-watermark {
          position:absolute; right:-8px; bottom:-14px;
          font-family:'Poppins',sans-serif; font-weight:900; line-height:1;
          font-size:6.5rem; color:rgba(255,255,255,.12);
          user-select:none; pointer-events:none;
        }

        /* Icon ring */
        .wft-icon {
          position:relative; z-index:2;
          width:62px; height:62px; border-radius:18px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(255,255,255,.20);
          border:1.5px solid rgba(255,255,255,.38);
          backdrop-filter:blur(10px);
          box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 20px rgba(255,255,255,.14);
          font-size:26px; color:#fff;
          transition:transform .28s, box-shadow .28s;
        }
        .wft-card:hover .wft-icon {
          transform:scale(1.10) translateY(-2px);
          box-shadow:0 12px 36px rgba(0,0,0,.22),0 0 30px rgba(255,255,255,.20);
        }

        /* Floating sparkle star */
        .wft-star {
          position:absolute; top:14px; left:14px; opacity:.5;
          animation:wftFloat 4s ease-in-out infinite;
        }

        /* Content area */
        .wft-body { flex:1; padding:20px 22px 22px; display:flex; flex-direction:column; }

        /* Top bar accent that reveals on hover */
        .wft-accent-bar {
          height:2px; width:28px; border-radius:2px;
          margin-bottom:12px;
          transition:width .3s cubic-bezier(.22,1,.36,1);
        }
        .wft-card:hover .wft-accent-bar { width:44px; }

        /* Hover bloom overlay */
        .wft-bloom {
          position:absolute; inset:0; border-radius:22px;
          opacity:0; pointer-events:none;
          transition:opacity .35s ease;
        }
        .wft-card:hover .wft-bloom { opacity:1; }

        /* Bottom row */
        .wft-foot {
          display:flex; align-items:center; gap:8px; margin-top:auto; padding-top:14px;
        }
        .wft-foot-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
        .wft-foot-line { flex:1; height:1px; border-radius:1px; }

        /* Load more btn */
        .wft-btn {
          display:inline-flex; align-items:center; gap:8px;
          font-family:'Poppins',sans-serif; font-weight:700;
          font-size:11.5px; letter-spacing:.12em; text-transform:uppercase;
          color:#fff; padding:12px 28px; border-radius:999px; border:none; cursor:pointer;
          background:linear-gradient(135deg,#06b6d4,#6366f1,#a855f7);
          background-size:250% 250%; animation:wftGrad 4s ease-in-out infinite;
          box-shadow:0 6px 28px rgba(99,102,241,.28);
          transition:transform .22s, box-shadow .22s;
        }
        .wft-btn:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(99,102,241,.36); }
      `}</style>

      {/* Bg soft blobs */}
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(6,182,212,.07),transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.035) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
            style={{ background:"rgba(6,182,212,.08)", border:"1px solid rgba(6,182,212,.22)" }}>
            <span className="wft-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#06b6d4,#0ea5e9)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{ color:"#0891b2", fontFamily:"'Poppins',sans-serif" }}>
              Platforms &amp; Technologies
            </span>
          </div>

          <h2 className="font-extrabold leading-[1.12] mb-3"
            style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.55rem,3.2vw,2.6rem)" }}>
            {title}
          </h2>

          <p className="text-[13.5px] max-w-[480px] mx-auto mb-5 leading-[1.82]"
            style={{ color:"#64748b" }}>
            We master the tools that power modern digital products — from storefronts to enterprise platforms.
          </p>

          <div className="wft-bar mx-auto h-[3px] w-14 rounded-full"
            style={{ background:"linear-gradient(90deg,#06b6d4,#6366f1,#a855f7)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {visible.map((elm, i) => {
            const p = PALETTES[i % PALETTES.length];
            return (
              <div key={i} className="wft-card">

                {/* Hover bloom */}
                <div className="wft-bloom" style={{ background:`radial-gradient(ellipse at 50% 0%,${p.light},transparent 65%)` }} />

                {/* Colored top panel */}
                <div className="wft-panel"
                  style={{ background:`linear-gradient(135deg,${p.from},${p.to})` }}>
                  <div className="wft-mesh" />
                  <span className="wft-watermark">{String(i + 1).padStart(2,"0")}</span>

                  {/* Floating sparkle */}
                  <svg className="wft-star" width="14" height="14" viewBox="0 0 36 36" fill="none">
                    <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="rgba(255,255,255,.7)"/>
                  </svg>

                  {/* Second sparkle */}
                  <svg className="absolute bottom-4 right-10 opacity-30 pointer-events-none" width="9" height="9"
                    viewBox="0 0 36 36" fill="none" style={{ animation:"wftFloat 6s ease-in-out infinite .8s" }}>
                    <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white"/>
                  </svg>

                  {/* Icon */}
                  <div className="wft-icon">{elm.icon}</div>
                </div>

                {/* Content */}
                <div className="wft-body">
                  <div className="wft-accent-bar"
                    style={{ background:`linear-gradient(90deg,${p.from},${p.to})` }} />

                  <h5 className="font-bold leading-snug mb-2.5"
                    style={{ color:"#0f172a", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(.93rem,1.5vw,1.03rem)" }}>
                    {elm.title}
                  </h5>

                  <p className="text-[13px] leading-[1.84] flex-1" style={{ color:"#64748b" }}>
                    {elm.desc}
                  </p>

                  <div className="wft-foot">
                    <div className="wft-foot-dot"
                      style={{ background:`linear-gradient(135deg,${p.from},${p.to})` }} />
                    <div className="wft-foot-line"
                      style={{ background:`linear-gradient(90deg,${p.from}33,transparent)` }} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Load more */}
        {visibleCount < platforms.length && (
          <div className="flex justify-center mt-12">
            <button className="wft-btn" onClick={() => setVisibleCount(v => v + 6)}>
              Load More
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M2 7l4 4 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
