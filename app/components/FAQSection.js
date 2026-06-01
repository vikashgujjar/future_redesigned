"use client";
import React, { useState } from "react";
import Link from "next/link";

const INITIAL_SHOW = 6;

export default function FAQSection({ faqData = [], title }) {
  const [openIndex, setOpenIndex]   = useState(0);
  const [showAll,   setShowAll]     = useState(false);

  const visible = showAll ? faqData : faqData.slice(0, INITIAL_SHOW);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}
    >
      <style>{`
        @keyframes faqCW    { to { transform: rotate(360deg)  } }
        @keyframes faqCCW   { to { transform: rotate(-360deg) } }
        @keyframes faqBarIn { from { transform: scaleX(0) }  to { transform: scaleX(1) } }
        @keyframes faqPing  { 75%,100% { transform: scale(2.1); opacity: 0 } }

        .faq-bar  { animation: faqBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left }
        .faq-ping { position: relative }
        .faq-ping::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          background: inherit; animation: faqPing 2s ease-out infinite;
        }
        .faq-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Smooth accordion via grid-template-rows */
        .faq-body { display: grid; transition: grid-template-rows .38s cubic-bezier(.22,1,.36,1); }
        .faq-body.open   { grid-template-rows: 1fr }
        .faq-body.closed { grid-template-rows: 0fr }

        /* Card hover lift */
        .faq-card {
          transition: box-shadow .25s, border-color .25s, transform .25s cubic-bezier(.22,1,.36,1);
        }
        .faq-card:hover { transform: translateY(-2px); }

        /* Plus→Cross icon */
        .faq-icon { transition: transform .38s cubic-bezier(.22,1,.36,1), background .25s; }
        .faq-icon.open  { transform: rotate(45deg) }
        .faq-icon.closed { transform: rotate(0deg)  }

        /* Number badge */
        .faq-badge { transition: background .25s, color .25s, box-shadow .25s }
        .faq-badge.open  {
          background: linear-gradient(135deg,#2dd4bf,#6366f1);
          color: #fff;
          box-shadow: 0 4px 14px rgba(45,212,191,.35);
        }
        .faq-badge.closed {
          background: rgba(99,102,241,.09);
          color: #6366f1;
        }

        /* Left accent bar */
        .faq-accent { transition: transform .35s ease, opacity .35s ease; transform-origin: top; }
        .faq-accent.open   { transform: scaleY(1); opacity: 1 }
        .faq-accent.closed { transform: scaleY(0); opacity: 0 }

        /* CTA card shimmer */
        .faq-cta-shine { position: relative; overflow: hidden }
        .faq-cta-shine::after {
          content: ''; position: absolute;
          top: -50%; left: -80%; width: 55%; height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
          transform: skewX(-18deg);
          animation: faqShine 4s ease-in-out infinite 1.5s;
        }
        @keyframes faqShine { 0%,100%{left:-80%} 50%{left:140%} }
      `}</style>

      {/* ── Background decorations ── */}
      <div className="faq-dotgrid absolute inset-0 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.06) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.06) 0%,transparent 65%)" }} />

      {/* SVG arcs — top-right */}
      <svg className="absolute top-0 right-0 pointer-events-none" width="320" height="320"
        viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <g style={{ transformOrigin: "320px 0", animation: "faqCCW 48s linear infinite" }}>
          <circle cx="320" cy="0" r="225" stroke="rgba(99,102,241,.065)" strokeWidth="1.2"
            strokeDasharray="70 115" strokeLinecap="round" fill="none" />
        </g>
        <g style={{ transformOrigin: "320px 0", animation: "faqCW 30s linear infinite" }}>
          <circle cx="320" cy="0" r="140" stroke="rgba(45,212,191,.07)" strokeWidth="1"
            strokeDasharray="44 74" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      {/* SVG arcs — bottom-left */}
      <svg className="absolute bottom-0 left-0 pointer-events-none" width="260" height="260"
        viewBox="0 0 260 260" fill="none" aria-hidden="true">
        <g style={{ transformOrigin: "0 260px", animation: "faqCW 38s linear infinite" }}>
          <circle cx="0" cy="260" r="175" stroke="rgba(45,212,191,.06)" strokeWidth="1.2"
            strokeDasharray="55 92" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">
        <div className="grid lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-12 xl:gap-20 items-start">

          {/* ════ LEFT — Sticky info panel ════ */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-5">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full px-4 py-1.5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
              <span className="faq-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                FAQ
              </span>
            </div>

            {/* Heading */}
            <div>
              <p className="text-sm text-gray-400 italic mb-1.5 tracking-[.01em]">
                Common Questions
              </p>
              <h2 className="font-extrabold text-gray-900 m-0 leading-[1.08]"
                style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.9rem,3.2vw,2.8rem)" }}>
                Frequently{" "}
                <span style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Asked
                </span>
                <br />Questions
              </h2>
              {title && (
                <p className="text-[13px] font-semibold mt-2"
                  style={{
                    background: "linear-gradient(135deg,#6366f1,#2dd4bf)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    fontFamily: "'Poppins',sans-serif",
                  }}>
                  {title}
                </p>
              )}
            </div>

            {/* Accent bar */}
            <div className="faq-bar h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

            {/* Description */}
            <p className="text-[13.5px] text-gray-500 leading-[1.85] max-w-[340px]">
              We've compiled the most common questions to help you get the information you need quickly and clearly.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-3">
              {[
                { val: `${faqData.length}+`, label: "FAQs", from: "#2dd4bf", to: "#6366f1" },
                { val: "24/7",               label: "Support", from: "#6366f1", to: "#8b5cf6" },
              ].map((s, i) => (
                <div key={i} className="flex-1 flex flex-col items-center py-3.5 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg,${s.from}14,${s.to}0d)`,
                    border: `1px solid ${s.from}30`,
                  }}>
                  <span className="text-2xl font-extrabold leading-none"
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      background: `linear-gradient(135deg,${s.from},${s.to})`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                    {s.val}
                  </span>
                  <span className="text-[10px] text-gray-500 tracking-[.10em] uppercase font-semibold mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="faq-cta-shine relative rounded-2xl overflow-hidden p-5"
              style={{ background: "linear-gradient(135deg,#2dd4bf 0%,#6366f1 55%,#8b5cf6 100%)" }}>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-5 -left-5 w-18 h-18 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white/08 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-[9px] font-bold uppercase tracking-[.18em] text-white/70 mb-1"
                  style={{ fontFamily: "'Poppins',sans-serif" }}>
                  Still have questions?
                </span>
                <h4 className="text-white font-bold text-[15px] mb-4 leading-snug"
                  style={{ fontFamily: "'Poppins',sans-serif" }}>
                  Our experts are<br />ready to help you
                </h4>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white font-bold text-[11px] uppercase tracking-[.12em] px-5 py-2.5 rounded-full no-underline transition-all hover:bg-white/90 hover:shadow-lg"
                  style={{ color: "#4f46e5", fontFamily: "'Poppins',sans-serif" }}
                >
                  Contact Us
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M5.5 1.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ════ RIGHT — Accordion ════ */}
          <div className="flex sticky top-0 flex-col gap-3 mt-1 lg:mt-3">
            {visible.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-card relative bg-white rounded-2xl overflow-hidden"
                  style={{
                    border: isOpen
                      ? "1px solid rgba(45,212,191,.40)"
                      : "1px solid rgba(0,0,0,.07)",
                    boxShadow: isOpen
                      ? "0 10px 36px rgba(45,212,191,.10), 0 2px 8px rgba(0,0,0,.04)"
                      : "0 2px 10px rgba(0,0,0,.05)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className={`faq-accent absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl ${isOpen ? "open" : "closed"}`}
                    style={{ background: "linear-gradient(to bottom,#2dd4bf,#6366f1,#a855f7)" }}
                  />

                  {/* Large faded background number */}
                  <div
                    className="absolute right-5 top-1/2 -translate-y-1/2 select-none pointer-events-none font-extrabold"
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "clamp(3.2rem,6vw,5rem)",
                      lineHeight: 1,
                      background: isOpen
                        ? "linear-gradient(135deg,rgba(45,212,191,.12),rgba(99,102,241,.09))"
                        : "rgba(0,0,0,.04)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      transition: "background .3s",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 text-left px-5 sm:px-6 py-5 focus:outline-none"
                    style={{ background: "transparent", border: "none", cursor: "pointer", paddingRight: "4.5rem" }}
                  >
                    {/* Number badge */}
                    <span
                      className={`faq-badge flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-extrabold ${isOpen ? "open" : "closed"}`}
                      style={{ fontFamily: "'Poppins',sans-serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span
                      className="flex-1 font-semibold text-[14.5px] sm:text-[15px] leading-snug"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        color: isOpen ? "#111827" : "#374151",
                        transition: "color .25s",
                      }}
                    >
                      {faq.title}
                    </span>

                    {/* Plus / Cross icon */}
                    <span
                      className={`faq-icon flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${isOpen ? "open" : "closed"}`}
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg,#2dd4bf,#6366f1)"
                          : "rgba(99,102,241,.09)",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M5.5 1v9M1 5.5h9" stroke={isOpen ? "#fff" : "#6366f1"}
                          strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth answer expand */}
                  <div className={`faq-body ${isOpen ? "open" : "closed"}`}>
                    <div style={{ overflow: "hidden" }}>
                      <div className="px-5 sm:px-6 pb-5 pl-[4.25rem]">
                        <div className="h-px mb-3.5 rounded-full"
                          style={{ background: "linear-gradient(90deg,rgba(45,212,191,.35),rgba(99,102,241,.22),transparent)" }} />
                        <p className="text-[13.5px] leading-[1.90] text-gray-500 m-0">
                          {faq.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Show more / less */}
            {faqData.length > INITIAL_SHOW && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAll(p => !p)}
                  className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[.14em] uppercase px-7 py-3.5 rounded-full text-white border-none cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    boxShadow: "0 4px 22px rgba(45,212,191,.32)",
                  }}
                >
                  {showAll ? "Show Less" : `Show All ${faqData.length} FAQs`}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    style={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform .3s" }}>
                    <path d="M6 2v8M2 6l4 4 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
