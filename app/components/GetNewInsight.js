"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { sendLeadNotification } from "../lib/useOtpFlow";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BENEFITS = [
  { icon:"✦", label:"Weekly Insights" },
  { icon:"⬡", label:"No Spam, Ever"   },
  { icon:"◈", label:"Free Forever"    },
];

export default function GetNewInsight() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      Swal.fire({ icon: "warning", title: "Invalid Email", text: "Please enter a valid email address." });
      return;
    }
    setLoading(true);
    try {
      await sendLeadNotification({
        name: "Newsletter Subscriber",
        email,
        service: "Newsletter Subscription",
        message: `New newsletter subscription request from ${email}.`,
      });
      window.location.href = "/welcome";
    } catch {
      setLoading(false);
      Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong. Please try again." });
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background:"linear-gradient(150deg,#04071a 0%,#080e28 50%,#050b20 100%)", fontFamily:"'Inter',sans-serif" }}>

      <style>{`
        @keyframes gniGrad  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes gniPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
        @keyframes gniSpin  { to{transform:rotate(360deg)} }
        @keyframes gniSpinR { to{transform:rotate(-360deg)} }
        @keyframes gniFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes gniShimmer { 0%{transform:translateX(-120%)} 100%{transform:translateX(220%)} }
        @keyframes gniBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }

        .gni-bar   { animation:gniBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
        .gni-pulse { animation:gniPulse 2.4s ease-in-out infinite }
        .gni-spin  { animation:gniSpin  22s linear infinite }
        .gni-spinr { animation:gniSpinR 28s linear infinite }
        .gni-float { animation:gniFloat 5s ease-in-out infinite }

        .gni-hl {
          background:linear-gradient(125deg,#22d3ee 0%,#a78bfa 50%,#f472b6 100%);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:gniGrad 5s ease-in-out infinite;
        }

        /* Glass form */
        .gni-form-wrap {
          position:relative; overflow:hidden;
          border-radius:999px;
          background:rgba(255,255,255,.07);
          border:1.5px solid rgba(255,255,255,.14);
          backdrop-filter:blur(16px);
          display:flex; align-items:center;
          box-shadow:0 8px 32px rgba(0,0,0,.28);
          transition:border-color .25s, box-shadow .25s;
        }
        .gni-form-wrap:focus-within {
          border-color:rgba(34,211,238,.40);
          box-shadow:0 8px 40px rgba(34,211,238,.14),0 0 0 4px rgba(34,211,238,.06);
        }
        .gni-form-wrap::before {
          content:''; position:absolute;
          top:0; left:-100%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);
          animation:gniShimmer 3.5s ease-in-out infinite 1.5s;
          pointer-events:none;
        }

        .gni-input {
          flex:auto; background:transparent; border:none; outline:none;
          color:#ffffff; font-family:'Inter',sans-serif; font-size:14.5px;
          padding:0 20px 0 24px;
          height:54px;
        }
        .gni-input::placeholder { color:rgba(255,255,255,.38); }

        .gni-submit {
          flex-shrink:1; display:flex; align-items:center; gap:8px;
          font-family:'Poppins',sans-serif; font-weight:700; font-size:12px;
          letter-spacing:.08em; text-transform:uppercase;
          color:#fff; border:none; cursor:pointer;
          margin:5px; height:44px; padding:0 22px; border-radius:999px;
          background:linear-gradient(135deg,#22d3ee,#6366f1,#a855f7);
          background-size:250% 250%; animation:gniGrad 4s ease-in-out infinite;
          box-shadow:0 4px 20px rgba(99,102,241,.30);
          position:relative; overflow:hidden;
          transition:transform .2s, box-shadow .2s;
        }
        .gni-submit::after {
          content:''; position:absolute;
          top:0; left:-100%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.20),transparent);
          animation:gniShimmer 2.8s ease-in-out infinite 1s;
        }
        .gni-submit:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(99,102,241,.42); }

        /* Benefit pill */
        .gni-pill {
          display:inline-flex; align-items:center; gap:7px;
          padding:7px 16px; border-radius:999px;
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.10);
          backdrop-filter:blur(10px);
          transition:border-color .2s, background .2s;
        }
        .gni-pill:hover { background:rgba(255,255,255,.10); border-color:rgba(255,255,255,.18); }
      `}</style>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

      {/* Ambient orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(ellipse,rgba(99,102,241,.12),transparent 65%)", filter:"blur(20px)" }} />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(34,211,238,.08),transparent 65%)" }} />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(167,139,250,.08),transparent 65%)" }} />

      {/* Spinning arcs */}
      <svg className="gni-spin absolute -top-12 -left-12 pointer-events-none hidden lg:block" width="240" height="240" viewBox="0 0 240 240" fill="none" aria-hidden="true">
        <circle cx="120" cy="120" r="110" stroke="rgba(34,211,238,.05)"  strokeWidth="1"  strokeDasharray="36 60" fill="none"/>
        <circle cx="120" cy="120" r="72"  stroke="rgba(167,139,250,.04)" strokeWidth=".8" strokeDasharray="22 38" fill="none"/>
      </svg>
      <svg className="gni-spinr absolute -bottom-12 -right-12 pointer-events-none hidden lg:block" width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <circle cx="100" cy="100" r="90" stroke="rgba(244,114,182,.04)" strokeWidth=".8" strokeDasharray="28 46" fill="none"/>
      </svg>

      <div className="relative z-10 max-w-[780px] mx-auto px-4 sm:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-7"
          style={{ background:"rgba(34,211,238,.07)", border:"1px solid rgba(34,211,238,.22)" }}>
          <span className="gni-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background:"linear-gradient(135deg,#22d3ee,#0ea5e9)" }} />
          <span className="text-[10px] font-bold uppercase tracking-[.22em]"
            style={{ color:"#67e8f9", fontFamily:"'Poppins',sans-serif" }}>
            Newsletter · Stay Updated
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-extrabold leading-[1.10] text-white mb-4"
          style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.9rem,4.5vw,3.4rem)" }}>
          Stay Ahead of the{" "}
          <span className="gni-hl">Digital Curve</span>
        </h2>

        {/* Accent bar */}
        <div className="gni-bar mx-auto h-[3px] w-14 rounded-full mb-6"
          style={{ background:"linear-gradient(90deg,#22d3ee,#a78bfa,#f472b6)" }} />

        {/* Subtitle */}
        <p className="text-[14.5px] leading-[1.86] mb-8 max-w-[560px] mx-auto"
          style={{ color:"rgba(180,210,240,.62)" }}>
          Get weekly insights on web development, digital marketing, and design trends — straight to your inbox. No noise, just value.
        </p>

        {/* Benefit pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {BENEFITS.map((b, i) => (
            <div key={i} className="gni-pill">
              <span className="text-[13px]" style={{ color:"#a78bfa" }}>{b.icon}</span>
              <span className="text-[12px] font-semibold"
                style={{ color:"rgba(255,255,255,.75)", fontFamily:"'Poppins',sans-serif" }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>

        {/* Email form */}
        <form className="gni-form-wrap max-w-[540px] mx-auto mb-5" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address..."
            className="gni-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="gni-submit" disabled={loading}>
            {loading ? (
              <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            ) : (
              <>
                <span className="sm:inline hidden">Subscribe</span>
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path d="M1.5 6h9M6.5 2l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Privacy note */}
        <p className="text-[11.5px] leading-relaxed"
          style={{ color:"rgba(255,255,255,.28)", fontFamily:"'Inter',sans-serif" }}>
          🔒 Your data is safe. We never share your personal information.{" "}
          <span style={{ color:"rgba(255,255,255,.45)", fontWeight:600 }}>Unsubscribe anytime.</span>
        </p>

      </div>
    </section>
  );
}
