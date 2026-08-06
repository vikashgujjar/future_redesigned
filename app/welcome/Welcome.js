"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight, FaPhoneAlt, FaEnvelope,
  FaSearch, FaUserTie, FaRocket, FaShieldAlt,
} from "react-icons/fa";
import useYearsExperience from "../lib/useYearsExperience";
import WebPageSchema from "../components/schema/WebPageSchema";

const PALETTE = [
  { from: "#2dd4bf", to: "#06b6d4" },
  { from: "#6366f1", to: "#4f46e5" },
  { from: "#a855f7", to: "#7c3aed" },
];

const STEPS = [
  {
    icon: FaSearch,
    title: "We Review Your Request",
    desc: "Our team studies your requirements in detail — usually within a few hours of you reaching out.",
  },
  {
    icon: FaUserTie,
    title: "An Expert Gets In Touch",
    desc: "A dedicated specialist will call or email you within 24 hours to understand your goals further.",
  },
  {
    icon: FaRocket,
    title: "We Kick Off Together",
    desc: "Once we're aligned on scope and timeline, we get to work turning your vision into reality.",
  },
];

const CONFETTI_COLORS = ["#2dd4bf", "#6366f1", "#a855f7", "#f59e0b", "#ec4899", "#10b981"];
const CONFETTI = Array.from({ length: 18 }).map((_, i) => {
  const angle = (i / 18) * Math.PI * 2;
  const radius = 92 + (i % 3) * 26;
  return {
    dx: Math.round(Math.cos(angle) * radius),
    dy: Math.round(Math.sin(angle) * radius),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: (i % 6) * 0.045,
    size: 5 + (i % 3) * 2,
  };
});

export default function Welcome() {
  const yearsExperience = useYearsExperience();
  const [refCode, setRefCode] = useState(null);

  useEffect(() => {
    setRefCode(`FT-${Date.now().toString(36).toUpperCase()}`);
  }, []);

  return (
    <>
      <WebPageSchema
        type="WebPage"
        name="Thank You - Future IT Touch Private Limited"
        description="Confirmation page shown after a visitor submits an enquiry to Future IT Touch."
        path="/welcome"
      />

      <style>{`
        @keyframes wlcUp     { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes wlcPop    { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
        @keyframes wlcSpin   { to{transform:rotate(360deg)} }
        @keyframes wlcPulse  { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.12)} }
        @keyframes wlcBlob   { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(24px,-18px) scale(1.06)} }
        @keyframes wlcConfetti {
          0%   { transform: translate(0,0) scale(1);   opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(var(--dx),var(--dy)) scale(0); opacity: 0; }
        }
        @keyframes wlcCheck  { from{stroke-dashoffset:24} to{stroke-dashoffset:0} }

        .wlc-e1 { animation: wlcUp .6s cubic-bezier(.22,1,.36,1) .05s both; }
        .wlc-e2 { animation: wlcUp .6s cubic-bezier(.22,1,.36,1) .14s both; }
        .wlc-e3 { animation: wlcUp .6s cubic-bezier(.22,1,.36,1) .22s both; }
        .wlc-e4 { animation: wlcUp .6s cubic-bezier(.22,1,.36,1) .30s both; }
        .wlc-badge-pop { animation: wlcPop .55s cubic-bezier(.22,1,.36,1) .1s both; }
        .wlc-ring-spin { animation: wlcSpin 7s linear infinite; }
        .wlc-halo      { animation: wlcPulse 2.6s ease-in-out infinite; }
        .wlc-blob      { animation: wlcBlob 12s ease-in-out infinite; }
        .wlc-check     { stroke-dasharray: 24; animation: wlcCheck .5s ease .45s both; }

        .wlc-dotgrid {
          background-image: radial-gradient(rgba(255,255,255,.03) 1px,transparent 1px);
          background-size: 26px 26px;
        }

        .wlc-grad-text {
          background: linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .wlc-btn-grad {
          background: linear-gradient(135deg,#2dd4bf,#6366f1);
          box-shadow: 0 8px 28px rgba(99,102,241,.35);
          transition: transform .2s, box-shadow .2s;
        }
        .wlc-btn-grad:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(99,102,241,.48); }

        .wlc-btn-outline {
          border: 1px solid rgba(255,255,255,.16);
          color: rgba(255,255,255,.75);
          transition: color .2s, border-color .2s, background .2s;
        }
        .wlc-btn-outline:hover { color:#fff; border-color: rgba(255,255,255,.32); background: rgba(255,255,255,.05); }

        .wlc-step-card {
          transition: transform .3s, box-shadow .3s, border-color .3s;
        }
        .wlc-step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(99,102,241,.14);
        }

        .wlc-confetti-piece {
          position: absolute; top: 50%; left: 50%; border-radius: 2px;
          animation: wlcConfetti 1.1s cubic-bezier(.22,.8,.4,1) both;
        }
      `}</style>

      {/* ── Hero / confirmation ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center px-4 py-20 sm:py-28"
        style={{ minHeight: "78vh", background: "#05060F", fontFamily: "'Inter',sans-serif" }}
      >
        <div className="wlc-dotgrid absolute inset-0 pointer-events-none" />
        <div className="wlc-blob absolute -top-32 -left-24 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.16) 0%,transparent 65%)" }} />
        <div className="wlc-blob absolute -bottom-32 -right-24 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.16) 0%,transparent 65%)", animationDelay: "-6s" }} />

        <div className="relative z-10 text-center max-w-2xl mx-auto">

          {/* Success icon with confetti burst */}
          <div className="wlc-badge-pop relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-8">
            {CONFETTI.map((c, i) => (
              <span
                key={i}
                className="wlc-confetti-piece"
                style={{
                  width: c.size, height: c.size, background: c.color,
                  "--dx": `${c.dx}px`, "--dy": `${c.dy}px`,
                  animationDelay: `${0.35 + c.delay}s`,
                }}
              />
            ))}
            <div className="wlc-halo absolute -inset-3 rounded-full"
              style={{ background: "radial-gradient(circle,rgba(45,212,191,.35),transparent 70%)" }} />
            <div className="wlc-ring-spin absolute -inset-1 rounded-full"
              style={{ background: "conic-gradient(#2dd4bf,#6366f1,#a855f7,#2dd4bf)" }} />
            <div className="absolute inset-[4px] rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#0a0f2e,#050814)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M4 12.5l5 5L20 6.5" className="wlc-check" stroke="#2dd4bf" strokeWidth="2.4"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Badge */}
          <div className="wlc-e1 inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
            <span style={{ color: "#2dd4bf", fontFamily: "'Poppins',sans-serif",
              fontSize: "10px", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase" }}>
              Message Received
            </span>
          </div>

          {/* Headline */}
          <h1 className="wlc-e2 font-extrabold text-white mb-4"
            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.8rem,5vw,3rem)", lineHeight: 1.15 }}>
            Thank You for <span className="wlc-grad-text">Reaching Out</span>
          </h1>

          <p className="wlc-e2 text-white/60 text-[14px] sm:text-[15px] leading-relaxed max-w-lg mx-auto mb-3">
            We've received your details and our team is already on it.
            Expect a call or email from a Future IT Touch specialist within the next 24 hours.
          </p>

          {refCode && (
            <p className="wlc-e2 text-white/25 text-[11px] tracking-[.1em] uppercase mb-9"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Reference&nbsp;ID&nbsp;·&nbsp;{refCode}
            </p>
          )}
          {!refCode && <div className="mb-9" />}

          {/* CTAs */}
          <div className="wlc-e3 flex flex-wrap items-center justify-center gap-3">
            <Link href="/"
              className="wlc-btn-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-bold no-underline"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Back to Home
              <FaArrowRight size={12} />
            </Link>
            <Link href="/our-portfolio"
              className="wlc-btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold no-underline"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Explore Our Portfolio
            </Link>
          </div>

          {/* Direct contact chips */}
          <div className="wlc-e4 flex flex-wrap items-center justify-center gap-5 mt-9 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <a href="tel:+91-7056937000"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] font-medium no-underline transition-colors duration-200">
              <FaPhoneAlt size={11} style={{ color: "#2dd4bf" }} />
              +91 70569-37000
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a href="mailto:info@futuretouch.in"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] font-medium no-underline transition-colors duration-200">
              <FaEnvelope size={11} style={{ color: "#6366f1" }} />
              info@futuretouch.in
            </a>
          </div>
        </div>
      </section>

      {/* ── What happens next ── */}
      <section className="relative py-16 sm:py-20"
        style={{ background: "linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily: "'Inter',sans-serif" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(99,102,241,.09)", border: "1px solid rgba(99,102,241,.24)" }}>
              <FaShieldAlt size={10} style={{ color: "#4f46e5" }} />
              <span style={{ color: "#4f46e5", fontFamily: "'Poppins',sans-serif",
                fontSize: "10px", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>
                What Happens Next
              </span>
            </div>
            <h2 className="font-extrabold mb-3"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3.2vw,2.2rem)", color: "#0c1230" }}>
              Here's What You Can Expect
            </h2>
            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((step, i) => {
              const a = PALETTE[i % PALETTE.length];
              const Icon = step.icon;
              return (
                <div key={i} className="wlc-step-card relative rounded-2xl bg-white p-7"
                  style={{ border: "1px solid rgba(99,102,241,.10)", boxShadow: "0 4px 24px rgba(99,102,241,.06)" }}>
                  <div className="absolute -top-3 -right-2 font-extrabold text-[64px] leading-none select-none pointer-events-none"
                    style={{ fontFamily: "'Poppins',sans-serif", color: a.from, opacity: 0.07 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                    style={{ background: `linear-gradient(135deg,${a.from},${a.to})` }}>
                    <Icon size={17} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1rem", color: "#0c1230" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 pt-10"
            style={{ borderTop: "1px solid rgba(99,102,241,.10)" }}>
            {[
              { v: yearsExperience, l: "Years Experience" },
              { v: "5000+", l: "Projects Delivered" },
              { v: "98%", l: "Client Satisfaction" },
              { v: "24/7", l: "Dedicated Support" },
            ].map((st, i) => (
              <div key={i} className="text-center">
                <div className="font-extrabold mb-1"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.3rem,2.4vw,1.8rem)",
                    background: `linear-gradient(90deg,${PALETTE[i % PALETTE.length].from},${PALETTE[i % PALETTE.length].to})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {st.v}
                </div>
                <div style={{ fontSize: "10.5px", color: "#64748b", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600 }}>
                  {st.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
