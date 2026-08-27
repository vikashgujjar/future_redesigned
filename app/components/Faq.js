"use client";
import { useState } from "react";
import FaqSchema from "./schema/FaqSchema";

const PALETTE = [
  { fi: "#2dd4bf", ti: "#06b6d4" },
  { fi: "#6366f1", ti: "#8b5cf6" },
  { fi: "#0ea5e9", ti: "#2dd4bf" },
  { fi: "#a855f7", ti: "#6366f1" },
];

const FALLBACK_FAQ_DATA = [
  {
    question: "What is a digital platform?",
    answer:
      "A digital platform is an online space that enables users to connect, communicate, or conduct business effectively using various digital tools and resources.",
  },
  {
    question: "How can a digital platform help your business grow?",
    answer:
      "Digital platforms expand your business reach, increase customer engagement, streamline operations, and provide valuable data insights to boost growth and efficiency.",
  },
  {
    question: "How do I book my slot to meet with your technical team?",
    answer:
      "You can schedule a meeting with our technical team by visiting our website, selecting your preferred time, and completing the booking form.",
  },
  {
    question: "How many projects have you completed so far?",
    answer:
      "We have successfully completed numerous projects, each tailored to our clients' unique requirements, ensuring quality and timely delivery across various industries.",
  },
];

export default function Faq({ items: cmsItems } = {}) {
  const [active, setActive] = useState(0);
  const faqData = (cmsItems?.length ? cmsItems : FALLBACK_FAQ_DATA).map((item, i) => ({
    id: String(i + 1).padStart(2, "0"),
    question: item.question,
    answer: item.answer,
    ...PALETTE[i % PALETTE.length],
  }));
  const cur = faqData[active];

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 xl:px-24"
      style={{ background: "#ffffff" }}
    >
      <FaqSchema items={faqData.map(({ question, answer }) => ({ question, answer }))} />
      <style>{`
        .faq-section-dot {
          background-image: radial-gradient(circle, rgba(99,102,241,.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .faq-arena-dot {
          background-image: radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .faq-q-btn { transition: transform .20s ease, box-shadow .20s ease; }
        .faq-q-btn:not(.faq-q-active):hover { transform: translateX(4px); }
        .faq-q-active { transform: translateX(6px); }

        @keyframes faqSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-content-in { animation: faqSlideIn .28s ease both; }

        @keyframes faqDotPulse {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.4); }
        }
      `}</style>

      {/* section dot grid */}
      <div className="faq-section-dot absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ambient glows */}
      <div className="absolute -top-32 -right-32 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.07) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.07) 0%,transparent 65%)" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ══════════════════════════════════
            HEADING BAND  (2-col)
        ══════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-12">

          {/* left */}
          <div className="flex flex-col gap-4">
            {/* badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse flex-shrink-0" />
              <span
                className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
                style={{ fontFamily: "'Inter',sans-serif" }}>
                FAQ
              </span>
            </div>


            {/* h2 */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Our Expert{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-700 bg-clip-text text-transparent">
                Answers
              </span>
            </h2>

            {/* divider */}
            <div className="w-14 h-1 rounded-full"
              style={{ background: "linear-gradient(to right,#2dd4bf,#6366f1)" }} />
          </div>

          {/* right — description */}
          <p
            className="text-sm sm:text-base leading-7 text-gray-500"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            Our team continuously engages in professional development and industry
            events to stay abreast of the latest IT trends and technologies. This
            ensures we can provide innovative solutions that keep you ahead of the
            competition.
          </p>
        </div>

        {/* ══════════════════════════════════
            INTERACTIVE  Q + A  AREA
        ══════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">

          {/* ── LEFT: question selector — 2 / 5 cols ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {faqData.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`faq-q-btn ${active === i ? "faq-q-active" : ""} w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left`}
                style={{
                  background: active === i
                    ? `linear-gradient(135deg,${item.fi},${item.ti})`
                    : "#ffffff",
                  border: active === i
                    ? "1px solid transparent"
                    : "1px solid rgba(99,102,241,.12)",
                  boxShadow: active === i ? `0 8px 28px ${item.fi}45` : "none",
                }}
              >
                {/* number */}
                <span
                  className="text-xl font-black flex-shrink-0 w-8 text-center"
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    color: active === i ? "rgba(255,255,255,.65)" : item.fi,
                  }}>
                  {item.id}
                </span>

                {/* question */}
                <span
                  className="text-sm font-semibold flex-1 leading-snug"
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    color: active === i ? "#ffffff" : "#374151",
                  }}>
                  {item.question}
                </span>

                {/* active chevron */}
                <svg
                  className="flex-shrink-0"
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke={active === i ? "rgba(255,255,255,.75)" : "transparent"}
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>

          {/* ── RIGHT: answer display — 3 / 5 cols ── */}
          <div
            className="lg:col-span-3 relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg,#070d1a 0%,#0c1330 100%)",
              border: "1px solid rgba(255,255,255,.07)",
              boxShadow: "0 24px 60px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.05)",
              minHeight: 340,
            }}
          >
            {/* arena dot grid */}
            <div className="faq-arena-dot absolute inset-0 pointer-events-none" />

            {/* top gradient accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300"
              style={{ background: `linear-gradient(to right,${cur.fi},${cur.ti})` }}
            />

            {/* corner glow — top-left */}
            <div
              className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none transition-all duration-500"
              style={{ background: `radial-gradient(circle,${cur.fi}25 0%,transparent 65%)` }}
            />
            {/* corner glow — bottom-right */}
            <div
              className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full pointer-events-none transition-all duration-500"
              style={{ background: `radial-gradient(circle,${cur.ti}20 0%,transparent 65%)` }}
            />

            {/* ghost number watermark */}
            <span
              className="absolute right-6 top-2 font-black select-none pointer-events-none"
              style={{
                fontSize: 110,
                lineHeight: 1,
                fontFamily: "'Poppins',sans-serif",
                color: cur.fi,
                opacity: 0.07,
              }}>
              {cur.id}
            </span>

            {/* ── animated content ── */}
            <div
              key={active}
              className="faq-content-in relative z-10 p-8 sm:p-10 flex flex-col gap-5 h-full"
            >
              {/* "Question X" chip */}
              <div
                className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full"
                style={{
                  background: cur.fi + "22",
                  border: `1px solid ${cur.fi}44`,
                }}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: cur.fi,
                    animation: "faqDotPulse 2s ease-in-out infinite",
                  }} />
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ fontFamily: "'Inter',sans-serif", color: cur.fi }}>
                  Question {cur.id}
                </span>
              </div>

              {/* question text */}
              <h3
                className="text-xl sm:text-2xl font-bold text-white leading-snug"
                style={{ fontFamily: "'Poppins',sans-serif" }}>
                {cur.question}
              </h3>

              {/* divider */}
              <div
                className="w-12 h-[2px] rounded-full"
                style={{ background: `linear-gradient(to right,${cur.fi},${cur.ti})` }}
              />

              {/* answer */}
              <p
                className="text-sm sm:text-base leading-relaxed flex-1"
                style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.58)" }}>
                {cur.answer}
              </p>

              {/* progress pills */}
              <div className="flex items-center gap-2">
                {faqData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to question ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:  active === i ? 22 : 6,
                      height: 6,
                      background: active === i
                        ? `linear-gradient(to right,${cur.fi},${cur.ti})`
                        : "rgba(255,255,255,.18)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
