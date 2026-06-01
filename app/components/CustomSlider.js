"use client";
import React, { useState, useEffect } from "react";

export default function CustomSlider({ cards = [], title }) {
  const [open, setOpen]       = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const toggleCard = (index) => {
    if (isMobile) setOpen(prev => prev === index ? null : index);
    else setOpen(index);
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

      <style>{`
        @keyframes csBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes csPing   { 75%,100%{transform:scale(2.1);opacity:0} }
        @keyframes csSlideUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .cs-bar  { animation:csBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:left }
        .cs-ping { position:relative }
        .cs-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:csPing 2s ease-out infinite;
        }
        .cs-card { transition: all .55s cubic-bezier(.22,1,.36,1); }
        .cs-card-overlay { transition: background .55s ease; }
        .cs-content { transition: opacity .35s ease, transform .35s ease; }
      `}</style>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 68%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.06),transparent 68%)" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
            <span className="cs-ping w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                fontFamily: "'Poppins',sans-serif",
              }}>
              Our Achievements
            </span>
          </div>

          <h2 className="font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.5vw,2.8rem)" }}>
            {title}{" "}
            <span style={{
              background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Future IT Touch Pvt. Ltd.
            </span>
          </h2>

          <div className="cs-bar h-[3px] w-14 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
        </div>

        {/* ── Accordion cards ── */}
        <div className={`flex gap-3 ${isMobile ? "flex-col" : "flex-row items-stretch"}`}>

          {cards.map((card, index) => {
            const isOpen = isMobile || open === index;

            return (
              <div
                key={card.title}
                className="cs-card min-h-[350px] relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => !isMobile && toggleCard(index)}
                style={{
                  /* Desktop: flex-1 when open, fixed 72px when closed */
                  flex: !isMobile ? (isOpen ? "1 1 0%" : "0 0 72px") : undefined,
                  width: isMobile ? "100%" : undefined,
                  height: isMobile ? "auto" : "100%",
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: isOpen
                    ? "1.5px solid rgba(45,212,191,.50)"
                    : "1px solid rgba(255,255,255,.10)",
                  boxShadow: isOpen
                    ? "0 0 0 4px rgba(45,212,191,.08), 0 24px 64px rgba(0,0,0,.38)"
                    : "0 4px 20px rgba(0,0,0,.18)",
                }}
              >
                {/* Overlay */}
                <div className="cs-card-overlay absolute inset-0"
                  style={{
                    background: isOpen
                      ? "linear-gradient(to top, rgba(5,6,15,.96) 0%, rgba(5,6,15,.72) 40%, rgba(5,6,15,.22) 100%)"
                      : "linear-gradient(to top, rgba(5,6,15,.88) 0%, rgba(5,6,15,.65) 100%)",
                  }} />

                {/* ── Collapsed desktop indicator ── */}
                {!isMobile && !isOpen && (
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 z-10 gap-2">
                    <div className="w-[3px] h-8 rounded-full"
                      style={{ background: "linear-gradient(to bottom,rgba(45,212,191,.55),rgba(99,102,241,.35))" }} />
                    <span
                      className="text-white/50 text-[10px] font-bold uppercase tracking-[.12em]"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: "'Poppins',sans-serif" }}>
                      {card.count}
                    </span>
                  </div>
                )}

                {/* ── Expanded content ── */}
                <div
                  className={`cs-content absolute bottom-0 left-0 right-0 p-7 z-10 ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
                  }`}>

                  {/* Teal accent bar */}
                  <div className="h-[3px] w-10 rounded-full mb-5"
                    style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

                  {/* Count */}
                  <div className="font-extrabold leading-none mb-2"
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "clamp(2.4rem,5vw,3.6rem)",
                      background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                    {card.count}
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-white text-lg mb-3 leading-snug"
                    style={{ fontFamily: "'Poppins',sans-serif" }}>
                    {card.title}
                  </h4>

                  {/* Description */}
                  <p className={`text-[13px] leading-[1.80] ${!isMobile ? "line-clamp-4" : ""}`}
                    style={{ color: "rgba(255,255,255,.58)" }}>
                    {card.desc}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-5 h-px rounded-full"
                    style={{ background: "linear-gradient(90deg,transparent,rgba(45,212,191,.40),rgba(99,102,241,.35),transparent)" }} />
                </div>

                {/* Active glow top strip */}
                {isOpen && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] z-20"
                    style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
