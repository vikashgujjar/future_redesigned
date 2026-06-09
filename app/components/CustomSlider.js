"use client";
import React, { useState } from "react";

const ACCENTS = [
  { from:"#06b6d4", to:"#0284c7" },
  { from:"#6366f1", to:"#4f46e5" },
  { from:"#10b981", to:"#059669" },
  { from:"#f59e0b", to:"#d97706" },
  { from:"#ec4899", to:"#db2777" },
];

export default function CustomSlider({ cards = [], title }) {
  const [active, setActive] = useState(0);

  if (!cards.length) return null;

  const cur  = cards[active];
  const ac   = ACCENTS[active % ACCENTS.length];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

      <style>{`
        @keyframes slBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes slGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes slPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
        @keyframes slImgIn  { from{opacity:0;transform:scale(1.04)} to{opacity:1;transform:scale(1)} }
        @keyframes slTabIn  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }

        .sl-bar    { animation:slBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
        .sl-pulse  { animation:slPulse 2.4s ease-in-out infinite }
        .sl-hl {
          background:linear-gradient(125deg,#06b6d4,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:slGrad 5s ease-in-out infinite;
        }

        /* Image panel */
        .sl-img-panel { position:relative; overflow:hidden; border-radius:24px; }
        .sl-img-panel img {
          width:100%; height:100%; object-fit:cover; display:block;
          animation:slImgIn .55s cubic-bezier(.22,1,.36,1);
        }
        .sl-img-overlay {
          position:absolute; inset:0; border-radius:24px;
          background:linear-gradient(160deg,rgba(4,7,26,.22) 0%,rgba(4,7,26,.72) 100%);
        }
        .sl-img-content {
          position:absolute; bottom:0; left:0; right:0;
          padding:32px 36px; z-index:2;
        }

        /* Stat row tabs */
        .sl-tab {
          display:flex; align-items:center; gap:18px;
          padding:16px 20px; border-radius:14px; cursor:pointer;
          border:1px solid transparent;
          transition:background .22s, border-color .22s, transform .22s;
          position:relative; overflow:hidden;
        }
        .sl-tab:hover { background:rgba(99,102,241,.04); }
        .sl-tab.active {
          background:#ffffff;
          box-shadow:0 4px 20px rgba(99,102,241,.10),0 1px 4px rgba(0,0,0,.05);
        }
        .sl-tab.active::before {
          content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
          border-radius:3px 0 0 3px;
          background:var(--tab-color);
        }

        .sl-tab-num {
          font-family:'Poppins',sans-serif; font-weight:900; line-height:1;
          font-size:clamp(1.6rem,2.8vw,2.2rem);
          display:inline-block; flex-shrink:0; min-width:72px;
          background:var(--tab-gradient);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          transition:font-size .22s;
        }
        .sl-tab.active .sl-tab-num { font-size:clamp(2rem,3.2vw,2.8rem); }

        .sl-tab-title {
          font-family:'Poppins',sans-serif; font-weight:600;
          font-size:.88rem; color:#374151;
          transition:color .22s;
        }
        .sl-tab.active .sl-tab-title { color:#111827; font-weight:700; }

        .sl-tab-sep { height:1px; background:rgba(99,102,241,.10); margin:0 4px; }

        /* Arrow icon */
        .sl-tab-arrow {
          margin-left:auto; opacity:0; transform:translateX(-6px);
          transition:opacity .22s, transform .22s; flex-shrink:0;
        }
        .sl-tab.active .sl-tab-arrow { opacity:1; transform:translateX(0); }

        /* Panel big count overlay */
        .sl-big-count {
          font-family:'Poppins',sans-serif; font-weight:900; line-height:1;
          display:inline-block;
          font-size:clamp(3.5rem,7vw,6rem);
          animation:slTabIn .4s cubic-bezier(.22,1,.36,1);
        }
        .sl-panel-title {
          font-family:'Poppins',sans-serif; font-weight:700;
          color:#ffffff; font-size:clamp(1rem,1.8vw,1.35rem);
          animation:slTabIn .4s cubic-bezier(.22,1,.36,1) .05s both;
        }
        .sl-panel-badge {
          display:inline-flex; align-items:center; gap:7px;
          padding:5px 14px; border-radius:999px;
          background:rgba(255,255,255,.12); backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,.22);
          margin-bottom:18px;
          animation:slTabIn .4s cubic-bezier(.22,1,.36,1) both;
        }
      `}</style>

      {/* Bg decoration */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(6,182,212,.06),transparent 65%)" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
            style={{ background:"rgba(6,182,212,.08)", border:"1px solid rgba(6,182,212,.22)" }}>
            <span className="sl-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#06b6d4,#0ea5e9)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{ color:"#0891b2", fontFamily:"'Poppins',sans-serif" }}>
              Our Achievements
            </span>
          </div>
          <h2 className="font-extrabold leading-[1.12] mb-4"
            style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.55rem,3.2vw,2.6rem)" }}>
            {title}{" "}
            <span className="sl-hl">Future IT Touch Pvt. Ltd.</span>
          </h2>
          <div className="sl-bar mx-auto h-[3px] w-14 rounded-full"
            style={{ background:"linear-gradient(90deg,#06b6d4,#6366f1,#a855f7)" }} />
        </div>

        {/* ── Split layout: image left + tabs right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-6 xl:gap-8 items-stretch">

          {/* LEFT — Image panel */}
          <div className="sl-img-panel" style={{ minHeight:"460px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={active} src={cur.image} alt={cur.title} style={{ height:"100%", minHeight:"460px" }} />
            <div className="sl-img-overlay" />

            {/* Colored tint overlay per accent */}
            <div className="absolute inset-0 rounded-[24px] pointer-events-none"
              style={{ background:`linear-gradient(160deg,${ac.from}18,${ac.to}22,transparent 55%)` }} />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[24px]"
              style={{ background:`linear-gradient(90deg,${ac.from},${ac.to})` }} />

            {/* Content overlay bottom */}
            <div className="sl-img-content">
              {/* Small badge */}
              <div className="sl-panel-badge">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${ac.from},${ac.to})` }} />
                <span className="text-[10px] font-bold uppercase tracking-[.15em] text-white/80"
                  style={{ fontFamily:"'Poppins',sans-serif" }}>
                  Achievement {String(active+1).padStart(2,"0")}
                </span>
              </div>

              {/* Big count — inline style only, no CSS class for gradient */}
              {/* <div className="sl-big-count" style={{
                background:`linear-gradient(135deg,${ac.from},${ac.to})`,
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip:"text",
              }}>
                {cur.count}
              </div> */}

              {/* Title */}
              <p className="sl-panel-title mt-1">{cur.title}</p>

              {/* Separator */}
              <div className="mt-3 h-px"
                style={{ background:`linear-gradient(90deg,${ac.from}60,${ac.to}40,transparent)` }} />
            </div>
          </div>

          {/* RIGHT — Stat tabs */}
          <div className="flex flex-col justify-center gap-1 p-2"
            style={{ background:"rgba(248,250,255,.7)", backdropFilter:"blur(16px)", borderRadius:"20px",
                     border:"1px solid rgba(99,102,241,.09)", boxShadow:"0 4px 24px rgba(99,102,241,.06)" }}>

            {/* Active description area */}
            <div className="px-4 pt-4 pb-3 mb-1">
              <p key={`desc-${active}`} className="text-[13px] leading-[1.84]"
                style={{ color:"#475569", animation:"slTabIn .35s cubic-bezier(.22,1,.36,1)" }}>
                {cur.desc}
              </p>
            </div>

            <div className="mx-4 h-px mb-1" style={{ background:"rgba(99,102,241,.10)" }} />

            {/* Tab list */}
            {cards.map((card, i) => {
              const tac = ACCENTS[i % ACCENTS.length];
              const isActive = i === active;
              return (
                <React.Fragment key={i}>
                  <button
                    className={`sl-tab${isActive ? " active" : ""}`}
                    style={{ "--tab-color": tac.from, "--tab-gradient": `linear-gradient(135deg,${tac.from},${tac.to})` }}
                    onClick={() => setActive(i)}>

                    {/* Number — all gradient props inline */}
                    <span className="sl-tab-num" style={{
                      background:`linear-gradient(135deg,${tac.from},${tac.to})`,
                      WebkitBackgroundClip:"text",
                      WebkitTextFillColor:"transparent",
                      backgroundClip:"text",
                    }}>
                      {card.count}
                    </span>

                    <span className="sl-tab-title">{card.title}</span>

                    <svg className="sl-tab-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke={tac.from} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {i < cards.length - 1 && <div className="sl-tab-sep mx-4" />}
                </React.Fragment>
              );
            })}

            <div className="pb-2" />
          </div>
        </div>

      </div>
    </section>
  );
}
