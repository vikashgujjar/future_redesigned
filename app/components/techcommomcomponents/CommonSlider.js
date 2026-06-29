"use client";
import React, { useState, useEffect, useCallback } from "react";

const PALETTE = [
  { from: "#2dd4bf", to: "#06b6d4" },
  { from: "#6366f1", to: "#4f46e5" },
  { from: "#a855f7", to: "#7c3aed" },
  { from: "#10b981", to: "#059669" },
  { from: "#f59e0b", to: "#d97706" },
];

const HL = "bg-[linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7)] bg-[length:200%_200%] bg-clip-text text-transparent [animation:tcpGrad_5s_ease-in-out_infinite]";

export default function CommonSlider({ cards }) {
  const [active, setActive]   = useState(0);
  const [progKey, setProgKey] = useState(0);

  const ac   = (i) => PALETTE[i % PALETTE.length];
  const grad = (a, dir = "135deg") => `linear-gradient(${dir},${a.from},${a.to})`;

  const goTo = useCallback((i) => {
    setActive(i);
    setProgKey(k => k + 1);
  }, []);

  const goPrev = () => goTo((active - 1 + cards.length) % cards.length);
  const goNext = () => goTo((active + 1) % cards.length);

  useEffect(() => {
    const t = setTimeout(() => goTo((active + 1) % cards.length), 5000);
    return () => clearTimeout(t);
  }, [active, cards.length, goTo]);

  if (!cards || cards.length === 0) return null;

  const card = cards[active];
  const a    = ac(active);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(155deg,#f4f8ff_0%,#ffffff_50%,#f0f4ff_100%)] py-16 sm:py-20 lg:py-28 font-['Inter',sans-serif]">

      {/* Light BG grid */}
      <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(99,102,241,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.05)_1px,transparent_1px)] [background-size:52px_52px]" />
      {/* Soft orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.12),transparent_65%)]" />
      <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.10),transparent_65%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16">

        {/* ── Section heading ── */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#2dd4bf]/26 bg-[#2dd4bf]/[.09] mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#0d9488]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping inline-block flex-shrink-0" />
            Our Achievements
          </div>
          <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,3vw,2.2rem)] leading-[1.15] text-[#0f172a] mb-3">
            Build, Engage &amp; <span className={HL}>Succeed</span>
          </h2>
          <p className="text-[#64748b] text-[.9rem] max-w-md mx-auto">
            Numbers that prove our commitment to delivering exceptional results for every client.
          </p>
        </div>

        {/* ── Main 2-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-center">

          {/* LEFT: text content */}
          <div key={`txt-${active}`} className="[animation:tcpSlide_.55s_cubic-bezier(.22,1,.36,1)_both] order-2 lg:order-1">

            {/* Step pill */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="font-['Poppins',sans-serif] font-extrabold text-[10px] tracking-[.28em] uppercase"
                style={{ color: a.from }}>
                {String(active + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
              </span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Hero number */}
            <div
              className="font-['Poppins',sans-serif] font-extrabold leading-none tracking-tighter mb-4 bg-clip-text text-transparent [font-size:clamp(4rem,12vw,9rem)]"
              style={{ backgroundImage: grad(a) }}>
              {card.count}
            </div>

            {/* Title */}
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#0f172a] leading-tight mb-3 [font-size:clamp(1.1rem,2.2vw,1.6rem)]">
              {card.title}
            </h3>

            {/* Gradient rule */}
            <div className="h-[3px] w-14 rounded-full mb-4"
              style={{ background: grad(a, "90deg") }} />

            {/* Description */}
            <p className="text-[#475569] leading-[1.72] max-w-lg mb-8 [font-size:clamp(.87rem,1.3vw,1rem)]">
              {card.desc}
            </p>

            {/* Prev / Dots / Next */}
            <div className="flex items-center gap-4">
              <button onClick={goPrev} aria-label="Previous"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-700 hover:shadow-sm transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5">
                {cards.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                    className="rounded-full transition-all duration-300 focus:outline-none"
                    style={i === active
                      ? { width: 26, height: 8, background: grad(a, "90deg") }
                      : { width: 8, height: 8, background: "rgba(0,0,0,.12)" }} />
                ))}
              </div>

              <button onClick={goNext} aria-label="Next"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-700 hover:shadow-sm transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: image card */}
          <div key={`img-${active}`} className="[animation:tcpSlide_.55s_cubic-bezier(.22,1,.36,1)_.08s_both] order-1 lg:order-2">
            <div className="relative">
              {/* Depth layers */}
              <div className="absolute top-4 left-4 right-[-7px] bottom-[-7px] rounded-3xl border border-slate-200"
                style={{ background: `${a.to}12` }} />
              <div className="absolute top-8 left-8 right-[-13px] bottom-[-13px] rounded-3xl border border-slate-100"
                style={{ background: `${a.from}07` }} />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden h-[240px] sm:h-[320px] lg:h-[420px]"
                style={{ boxShadow: `0 0 0 1px ${a.from}20, 0 20px 55px rgba(0,0,0,.16), 0 0 55px ${a.from}14` }}>
                <img src={card.image} alt={card.title}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "brightness(.72) saturate(1.1)" }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,5,24,.92)_0%,rgba(4,5,24,.10)_55%,transparent_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,5,24,.28)_0%,transparent_50%)]" />

                {/* Live badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/[.90] border border-white/80 [backdrop-filter:blur(10px)]">
                  <span className="w-1.5 h-1.5 rounded-full animate-ping flex-shrink-0"
                    style={{ background: a.from }} />
                  <span className="font-['Poppins',sans-serif] font-semibold text-[10px] tracking-[.15em] uppercase text-slate-600">Live</span>
                </div>

                {/* Bottom stat */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between gap-2">
                  <div>
                    <div className="font-['Poppins',sans-serif] font-extrabold leading-none bg-clip-text text-transparent mb-1 [font-size:clamp(1.4rem,4vw,2rem)]"
                      style={{ backgroundImage: grad(a, "90deg") }}>
                      {card.count}
                    </div>
                    <div className="font-['Poppins',sans-serif] font-semibold text-white [font-size:clamp(.75rem,1.5vw,.9rem)]">{card.title}</div>
                  </div>
                  <div className="flex-shrink-0 px-2.5 py-1.5 rounded-xl bg-white/[.88] border border-white/70 [backdrop-filter:blur(10px)]">
                    <div className="text-[9px] font-['Poppins',sans-serif] font-semibold text-slate-400 leading-tight">Updated</div>
                    <div className="text-[10px] font-['Poppins',sans-serif] font-bold text-slate-700">2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div className="mt-8 lg:mt-12 h-[2px] bg-slate-200 rounded-full overflow-hidden">
          <div
            key={`prog-${active}-${progKey}`}
            className="h-full w-full rounded-full [transform-origin:left] [animation:sliderProgress_5s_linear_forwards]"
            style={{ backgroundImage: grad(a, "90deg") }}
          />
        </div>

        {/* ── Thumbnail strip ──
             Mobile: horizontal scroll with fixed-width cards
             Desktop: equal-width grid
        ── */}
        <div className="mt-4 overflow-x-auto scrollbar-hide -mx-5 px-5 sm:-mx-10 sm:px-10 xl:-mx-16 xl:px-16 pb-1">
          <div className="flex gap-2.5 lg:grid"
            style={{ gridTemplateColumns: `repeat(${cards.length}, 1fr)` }}>
            {cards.map((c, i) => {
              const ci    = ac(i);
              const isCur = i === active;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`View ${c.title}`}
                  className={`relative w-full flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 focus:outline-none border-2 ${
                    isCur
                      ? "opacity-100 shadow-lg scale-[1.03]"
                      : "border-transparent opacity-45 hover:opacity-70"
                  }`}
                  style={{
                    height: 120,
                    // On desktop grid, width is auto — override via lg breakpoint not available in inline style, handled by flex-shrink-0 + lg:grid
                    borderColor: isCur ? ci.from : "transparent",
                  }}>
                  {/* Thumb image */}
                  <img src={c.image} alt={c.title}
                    className="w-full h-full object-cover object-center" />
                  {/* Overlay */}
                  <div className="absolute inset-0"
                    style={{ background: isCur ? "rgba(4,5,24,.3)" : "rgba(0,0,0,.48)" }} />
                  {/* Labels */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-1">
                    <span className="font-['Poppins',sans-serif] font-extrabold text-[11px] sm:text-xs text-white [text-shadow:0_1px_8px_rgba(0,0,0,.9)] leading-tight">
                      {c.count}
                    </span>
                    <span className="font-['Poppins',sans-serif] font-medium text-[8px] text-white/70 text-center leading-tight [text-shadow:0_1px_4px_rgba(0,0,0,.8)] line-clamp-1">
                      {c.title.split(" ").slice(0, 3).join(" ")}
                    </span>
                  </div>
                  {/* Active bottom bar */}
                  {isCur && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
                      style={{ background: grad(ci, "90deg") }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
