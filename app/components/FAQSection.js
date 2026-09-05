"use client";
import React, { useState } from "react";
import Link from "next/link";

const INITIAL_SHOW = 5;

const ITEM_COLORS = [
  { from:"#06b6d4", to:"#0284c7" },
  { from:"#6366f1", to:"#4f46e5" },
  { from:"#10b981", to:"#059669" },
  { from:"#f59e0b", to:"#d97706" },
  { from:"#ec4899", to:"#db2777" },
];

export default function FAQSection({ faqData = [], title }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll,   setShowAll]   = useState(false);
  const visible = showAll ? faqData : faqData.slice(0, INITIAL_SHOW);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

      <style>{`
        @keyframes faqBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes faqGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes faqPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
        @keyframes faqShine  { 0%,100%{left:-80%} 50%{left:140%} }
        @keyframes faqSpin   { to{transform:rotate(360deg)} }
        @keyframes faqSpinR  { to{transform:rotate(-360deg)} }

        .faq-bar   { animation:faqBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
        .faq-pulse { animation:faqPulse 2.4s ease-in-out infinite }
        .faq-spin  { animation:faqSpin  24s linear infinite }
        .faq-spinr { animation:faqSpinR 30s linear infinite }

        .faq-hl {
          background:linear-gradient(125deg,#06b6d4,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:faqGrad 5s ease-in-out infinite;
        }

        /* Accordion item */
        .faq-item {
          background:#ffffff; border-radius:18px; overflow:hidden;
          border:1px solid rgba(0,0,0,.06);
          box-shadow:0 2px 12px rgba(99,102,241,.05),0 1px 3px rgba(0,0,0,.03);
          transition:box-shadow .25s, border-color .25s, transform .25s cubic-bezier(.22,1,.36,1);
          position:relative;
        }
        .faq-item:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(99,102,241,.10); }
        .faq-item.open  {
          border-color:rgba(99,102,241,.18);
          box-shadow:0 8px 32px rgba(99,102,241,.12),0 2px 8px rgba(0,0,0,.04);
        }

        /* Left accent bar */
        .faq-left-bar {
          position:absolute; left:0; top:0; bottom:0; width:3px;
          transform:scaleY(0); transform-origin:top;
          transition:transform .32s cubic-bezier(.22,1,.36,1);
          border-radius:3px 0 0 3px;
        }
        .faq-item.open .faq-left-bar { transform:scaleY(1); }

        /* Toggle button */
        .faq-trigger {
          width:100%; display:flex; align-items:center; gap:10px;
          padding:14px 14px 14px 16px;
          background:transparent; border:none; cursor:pointer; text-align:left;
        }
        @media (min-width:480px) { .faq-trigger { gap:14px; padding:16px 18px 16px 20px; } }
        @media (min-width:640px) { .faq-trigger { gap:16px; padding:18px 20px 18px 22px; } }

        /* Number chip */
        .faq-num {
          flex-shrink:0; width:36px; height:36px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          font-family:'Poppins',sans-serif; font-weight:800; font-size:12px;
          transition:background .25s, color .25s, box-shadow .25s;
        }
        .faq-num.open  { color:#fff; box-shadow:0 4px 14px rgba(99,102,241,.28); }
        .faq-num.closed{ background:rgba(99,102,241,.08); color:#6366f1; }

        /* Question */
        .faq-q {
          flex:1; font-family:'Poppins',sans-serif; font-weight:600;
          font-size:clamp(.88rem,1.4vw,.97rem); line-height:1.42;
          color:#1e293b; transition:color .22s;
          text-align:left;
        }
        .faq-item.open .faq-q { color:#111827; font-weight:700; }

        /* Plus/X icon */
        .faq-icon {
          flex-shrink:0; width:30px; height:30px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          transition:transform .32s cubic-bezier(.22,1,.36,1), background .25s;
        }
        .faq-icon.open  { transform:rotate(45deg); }
        .faq-icon.closed{ transform:rotate(0deg); }

        /* Answer expand */
        .faq-body { display:grid; transition:grid-template-rows .35s cubic-bezier(.22,1,.36,1); }
        .faq-body.open   { grid-template-rows:1fr }
        .faq-body.closed { grid-template-rows:0fr }

        /* Watermark number */
        .faq-wm {
          display:none;
          position:absolute; right:16px; top:50%; transform:translateY(-50%);
          font-family:'Poppins',sans-serif; font-weight:900; line-height:1;
          font-size:clamp(3rem,5vw,4.5rem); pointer-events:none; user-select:none;
          transition:color .25s;
        }
        @media (min-width:640px) { .faq-wm { display:block; } }

        /* Left panel CTA card */
        .faq-cta { position:relative; overflow:hidden; border-radius:20px; padding:26px; }
        .faq-cta-shine { position:relative; overflow:hidden; }
        .faq-cta-shine::after {
          content:''; position:absolute;
          top:-50%; left:-80%; width:55%; height:200%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);
          transform:skewX(-18deg);
          animation:faqShine 5s ease-in-out infinite 2s;
        }

        /* Load more btn */
        .faq-btn {
          display:inline-flex; align-items:center; gap:8px;
          font-family:'Poppins',sans-serif; font-weight:700;
          font-size:11.5px; letter-spacing:.12em; text-transform:uppercase;
          color:#fff; padding:12px 28px; border-radius:999px; border:none; cursor:pointer;
          background:linear-gradient(135deg,#06b6d4,#6366f1,#a855f7);
          background-size:250% 250%; animation:faqGrad 4s ease-in-out infinite;
          box-shadow:0 6px 26px rgba(99,102,241,.26);
          transition:transform .22s, box-shadow .22s;
        }
        .faq-btn:hover { transform:translateY(-2px); box-shadow:0 10px 34px rgba(99,102,241,.36); }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
      <div className="absolute -top-40 -right-40 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(6,182,212,.06),transparent 65%)" }} />
      <svg className="faq-spin absolute top-0 right-0 pointer-events-none hidden xl:block" width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <circle cx="280" cy="0" r="200" stroke="rgba(99,102,241,.05)" strokeWidth="1" strokeDasharray="52 84" fill="none"/>
        <circle cx="280" cy="0" r="130" stroke="rgba(6,182,212,.04)"  strokeWidth=".8" strokeDasharray="32 54" fill="none"/>
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] gap-10 xl:gap-16 items-start">

          {/* LEFT sticky panel */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-5">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 self-start rounded-full px-4 py-1.5"
              style={{ background:"rgba(6,182,212,.08)", border:"1px solid rgba(6,182,212,.22)" }}>
              <span className="faq-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#06b6d4,#0ea5e9)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{ color:"#0891b2", fontFamily:"'Poppins',sans-serif" }}>
                FAQ
              </span>
            </div>

            {/* Heading */}
            <div>
              <p className="text-[12px] text-slate-400 font-medium uppercase tracking-[.16em] mb-2"
                style={{ fontFamily:"'Poppins',sans-serif" }}>
                Common Questions
              </p>
              <h2 className="font-extrabold leading-[1.08]"
                style={{ color:"#060b1e", fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.9rem,3.2vw,2.8rem)" }}>
                Frequently{" "}
                <span className="faq-hl">Asked</span>
                <br />Questions
              </h2>
              {title && (
                <p className="text-[13px] font-semibold mt-2"
                  style={{ background:"linear-gradient(135deg,#6366f1,#06b6d4)",
                           WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                           fontFamily:"'Poppins',sans-serif" }}>
                  {title}
                </p>
              )}
            </div>

            {/* Accent bar */}
            <div className="faq-bar h-[3px] w-14 rounded-full"
              style={{ background:"linear-gradient(90deg,#06b6d4,#6366f1)" }} />

            {/* Description */}
            <p className="text-[13.5px] leading-[1.85] max-w-[320px]" style={{ color:"#64748b" }}>
              We've compiled the most common questions to help you get the answers you need quickly and clearly.
            </p>

            {/* Stats row */}
            <div className="hidden lg:flex gap-3">
              {[
                { val:`${faqData.length}+`, label:"FAQs Listed", from:"#06b6d4", to:"#0284c7" },
                { val:"24/7", label:"Support",    from:"#6366f1", to:"#4f46e5" },
              ].map((s, i) => (
                <div key={i} className="flex-1 flex flex-col items-center py-4 rounded-2xl"
                  style={{ background:`linear-gradient(135deg,${s.from}10,${s.to}08)`,
                           border:`1px solid ${s.from}25` }}>
                  <span className="font-extrabold leading-none mb-1" style={{
                    fontFamily:"'Poppins',sans-serif", fontSize:"1.6rem",
                    background:`linear-gradient(135deg,${s.from},${s.to})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                    display:"inline-block",
                  }}>
                    {s.val}
                  </span>
                  <span className="text-[10px] text-slate-400 tracking-[.10em] uppercase font-semibold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="hidden lg:block faq-cta faq-cta-shine"
              style={{ background:"linear-gradient(135deg,#06b6d4 0%,#6366f1 55%,#a855f7 100%)" }}>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-white/10 pointer-events-none" />
              <div className="relative z-10">
                <span className="block text-[9px] font-bold uppercase tracking-[.18em] text-white/70 mb-1.5"
                  style={{ fontFamily:"'Poppins',sans-serif" }}>
                  Still have questions?
                </span>
                <h4 className="text-white font-bold text-[15px] mb-4 leading-snug"
                  style={{ fontFamily:"'Poppins',sans-serif" }}>
                  Our experts are<br />ready to help you
                </h4>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white font-bold text-[11px] uppercase tracking-[.12em] px-5 py-2.5 rounded-full no-underline transition-all hover:bg-white/90 hover:shadow-lg"
                  style={{ color:"#4f46e5", fontFamily:"'Poppins',sans-serif" }}>
                  Contact Us
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M5.5 1.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT — Accordion */}
          <div className="flex flex-col gap-3 mt-1 lg:mt-2">
            {visible.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const c = ITEM_COLORS[idx % ITEM_COLORS.length];
              return (
                <div key={idx} className={`faq-item${isOpen ? " open" : ""}`}>

                  {/* Left color bar */}
                  <div className="faq-left-bar"
                    style={{ background:`linear-gradient(180deg,${c.from},${c.to})` }} />

                  {/* Watermark */}
                  <div className="faq-wm"
                    style={{ color: isOpen
                      ? `${c.from}18`
                      : "rgba(0,0,0,.04)" }}>
                    {String(idx + 1).padStart(2,"0")}
                  </div>

                  {/* Trigger */}
                  <button className="faq-trigger" onClick={() => setOpenIndex(isOpen ? null : idx)}>

                    {/* Number chip */}
                    <span className={`faq-num ${isOpen ? "open" : "closed"}`}
                      style={ isOpen
                        ? { background:`linear-gradient(135deg,${c.from},${c.to})` }
                        : undefined }>
                      {String(idx + 1).padStart(2,"0")}
                    </span>

                    {/* Question */}
                    <span className="faq-q" style={{ paddingRight:"3rem" }}>{faq.title}</span>

                    {/* Icon */}
                    <span className={`faq-icon ${isOpen ? "open" : "closed"}`}
                      style={{ background: isOpen
                        ? `linear-gradient(135deg,${c.from},${c.to})`
                        : "rgba(99,102,241,.08)" }}>
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M5.5 1v9M1 5.5h9"
                          stroke={isOpen ? "#fff" : "#6366f1"}
                          strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>

                  {/* Body */}
                  <div className={`faq-body ${isOpen ? "open" : "closed"}`}>
                    <div style={{ overflow:"hidden" }}>
                      <div className="px-4 pb-5 sm:px-6 sm:pl-[4.5rem]">
                        <div className="h-px mb-3.5 rounded-full"
                          style={{ background:`linear-gradient(90deg,${c.from}40,${c.to}25,transparent)` }} />
                        <p className="text-[13.5px] leading-[1.88] m-0 [&_a]:text-[#4f46e5] [&_a]:font-semibold" style={{ color:"#64748b" }}
                          dangerouslySetInnerHTML={{ __html: faq.description }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Show more/less */}
            {faqData.length > INITIAL_SHOW && (
              <div className="flex justify-start mt-3">
                <button className="faq-btn" onClick={() => setShowAll(p => !p)}>
                  {showAll ? "Show Less" : `Show All ${faqData.length} FAQs`}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    style={{ transform:showAll ? "rotate(180deg)" : "none", transition:"transform .3s" }}>
                    <path d="M6 2v8M2 6l4 4 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
