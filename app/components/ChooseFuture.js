"use client"
import { FaHandshake, FaUsers, FaCode, FaHeart, FaCheckCircle, FaComments } from "react-icons/fa";
import { useState } from "react";
import Login from "./Login";

const reasons = [
  {
    icon: <FaHandshake />,
    title: "Reliable Service. In House Team",
    desc: "Our dedicated in-house team delivers consistent, high-quality results you can count on — no outsourcing, just pure expertise.",
    from: "#2dd4bf", to: "#6366f1",
  },
  {
    icon: <FaUsers />,
    title: "Trusted by People Like You",
    desc: "500+ satisfied clients globally trust us to power their digital presence. Join a growing community of happy businesses.",
    from: "#6366f1", to: "#8b5cf6",
  },
  {
    icon: <FaCode />,
    title: "Complete Technical Competency",
    desc: "From UI/UX to backend and DevOps, our team covers the full technology stack to build scalable, future-proof products.",
    from: "#0ea5e9", to: "#2dd4bf",
  },
  {
    icon: <FaHeart />,
    title: "Friendly & Cordial in Nature",
    desc: "We believe great relationships build great products. Our team is approachable, transparent, and always in your corner.",
    from: "#a855f7", to: "#6366f1",
  },
  {
    icon: <FaCheckCircle />,
    title: "Excellent Quality Delivered on Time",
    desc: "We follow agile methodologies and rigorous QA to ensure every deliverable meets the highest standards — right on schedule.",
    from: "#2dd4bf", to: "#0ea5e9",
  },
  {
    icon: <FaComments />,
    title: "Effective & Continuous Communication",
    desc: "Stay in the loop at every stage. We provide regular updates, progress reports, and are always just a message away.",
    from: "#8b5cf6", to: "#2dd4bf",
  },
];

const ChooseFuture = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleButtonClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", fontFamily: "'Inter',sans-serif" }}
    >
      <style>{`
        @keyframes cfCW   { to { transform: rotate(360deg)  } }
        @keyframes cfCCW  { to { transform: rotate(-360deg) } }
        @keyframes cfBarIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes cfPing  { 75%,100% { transform: scale(2.1); opacity: 0 } }
        .cf-dotgrid {
          background-image: radial-gradient(rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .cf-bar  { animation: cfBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left; }
        .cf-ping { position: relative; }
        .cf-ping::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          background: inherit; animation: cfPing 2s ease-out infinite;
        }
        .cf-card { transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .28s; }
        .cf-card:hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(0,0,0,.45) !important; }
        .cf-card-glow { opacity: 0; transition: opacity .3s ease; }
        .cf-card:hover .cf-card-glow { opacity: 1; }
        .cf-icon { transition: box-shadow .28s ease; }
        .cf-card:hover .cf-icon { box-shadow: 0 0 0 6px rgba(45,212,191,.12), 0 6px 22px rgba(45,212,191,.30) !important; }
      `}</style>

      {/* Background layers */}
      <div className="cf-dotgrid absolute inset-0 pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.13) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.13) 0%,transparent 65%)" }} />

      {/* SVG arcs — top left */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="320" height="320"
        viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <g style={{ transformOrigin: "0 0", animation: "cfCW 48s linear infinite" }}>
          <circle cx="0" cy="0" r="230" stroke="rgba(45,212,191,.07)" strokeWidth="1.2"
            strokeDasharray="70 115" strokeLinecap="round" fill="none" />
        </g>
        <g style={{ transformOrigin: "0 0", animation: "cfCCW 32s linear infinite" }}>
          <circle cx="0" cy="0" r="148" stroke="rgba(99,102,241,.07)" strokeWidth="1"
            strokeDasharray="48 80" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      {/* SVG arcs — bottom right */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="280" height="280"
        viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <g style={{ transformOrigin: "280px 280px", animation: "cfCCW 38s linear infinite" }}>
          <circle cx="280" cy="280" r="195" stroke="rgba(139,92,246,.07)" strokeWidth="1.2"
            strokeDasharray="60 100" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
            <span className="cf-ping w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
              We Deliver Our Best
            </span>
          </div>

          <h2 className="font-extrabold text-white mb-4"
            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.5vw,2.6rem)", lineHeight: 1.12 }}>
            Why Choose{" "}
            <span style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Future IT Touch
            </span>{" "}
            Pvt. Ltd.
          </h2>

          <p className="text-[13.5px] max-w-[520px] mx-auto mb-5"
            style={{ color: "rgba(255,255,255,.42)", lineHeight: 1.8 }}>
            We are committed to delivering exceptional digital solutions built on trust, quality, and continuous innovation.
          </p>

          <div className="cf-bar h-[3px] w-14 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {reasons.map((item, index) => (
            <div key={index} className="cf-card relative group rounded-2xl overflow-hidden"
              style={{ background: "rgba(7,9,22,.84)", border: "1px solid rgba(255,255,255,.07)", boxShadow: "0 4px 28px rgba(0,0,0,.32)" }}>

              {/* Gradient top strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg,${item.from},${item.to})`, opacity: .65 }} />

              {/* Hover border glow */}
              <div className="cf-card-glow absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${item.from}44` }} />

              <div className="p-6 sm:p-7">
                {/* Icon */}
                <div className="cf-icon w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 text-white text-2xl"
                  style={{ background: `linear-gradient(135deg,${item.from},${item.to})`, boxShadow: `0 4px 18px ${item.from}44` }}>
                  {item.icon}
                </div>

                {/* Title */}
                <h5 className="font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(.95rem,1.8vw,1.05rem)" }}>
                  {item.title}
                </h5>

                {/* Accent divider */}
                <div className="h-px mb-3 rounded-full"
                  style={{ background: `linear-gradient(90deg,${item.from}55,transparent)` }} />

                {/* Description */}
                <p className="text-[13px] leading-[1.82]" style={{ color: "rgba(255,255,255,.48)" }}>
                  {item.desc}
                </p>

                {/* Bottom indicator */}
                <div className="flex items-center gap-1.5 mt-5">
                  <div className="w-1.5 h-1.5 rounded-full"
                    style={{ background: `linear-gradient(135deg,${item.from},${item.to})` }} />
                  <div className="h-px flex-1 rounded-full"
                    style={{ background: `linear-gradient(90deg,${item.from}33,transparent)` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="relative overflow-hidden mt-16 rounded-2xl px-8 py-10 lg:px-14 lg:py-12
          flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left"
          style={{ background: "linear-gradient(135deg,#0d9488 0%,#4338ca 60%,#4f46e5 100%)", border: "1px solid rgba(255,255,255,.10)" }}>

          <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,.10)" }} />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,.09)" }} />
          <div className="absolute top-1/2 -translate-y-1/2 right-8 w-14 h-14 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,.06)" }} />
          <div className="absolute top-5 left-[36%] w-8 h-8 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,.07)" }} />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,.05)" }} />

          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[.18em] mb-2"
              style={{ color: "rgba(255,255,255,.55)", fontFamily: "'Poppins',sans-serif" }}>
              Ready to Begin?
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Let&apos;s Start{" "}
              <span style={{ color: "#7dd3fa" }}>New Project</span>{" "}
              Together
            </h3>
          </div>

          <button
            onClick={handleButtonClick}
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-white font-semibold
              px-8 py-3.5 rounded-full shadow-lg hover:bg-white/90 hover:shadow-xl
              hover:-translate-y-0.5 transition-all duration-200"
            style={{ fontFamily: "'Poppins',sans-serif", color: "#4338ca" }}
          >
            Request A Quote
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#4338ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>

      {isPopupOpen && (
        <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}
    </section>
  );
};

export default ChooseFuture;
