"use client";
import { useEffect, useState } from "react";
import { FaTimes, FaShieldAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });

const RESEND_COOLDOWN = 30;

export default function OtpVerifyModal({ show, onClose, otp, setOtp, onVerify, onResend, loading }) {
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN);

  // Reset the resend cooldown every time the modal is opened
  useEffect(() => {
    if (show) setCooldown(RESEND_COOLDOWN);
  }, [show]);

  useEffect(() => {
    if (!show || cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [show, cooldown]);

  if (!show) return null;

  const filled = otp.length;

  const handleResend = () => {
    if (cooldown > 0) return;
    setCooldown(RESEND_COOLDOWN);
    onResend();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#04050f]/80 backdrop-blur-md px-4">
      <style>{`
        @keyframes otpPop        { from{opacity:0;transform:scale(.92) translateY(14px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes otpSpin       { to{transform:rotate(360deg)} }
        @keyframes otpFloat      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes otpPulseRing  { 0%,100%{opacity:.45;transform:scale(1)} 50%{opacity:.9;transform:scale(1.1)} }
        @keyframes otpGradShift  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes otpDotIn      { from{opacity:0;transform:scale(.4)} to{opacity:1;transform:scale(1)} }

        .otp-pop       { animation: otpPop .42s cubic-bezier(.22,1,.36,1) both; }
        .otp-ring-spin { animation: otpSpin 7s linear infinite; }
        .otp-icon-float{ animation: otpFloat 3.4s ease-in-out infinite; }
        .otp-pulse     { animation: otpPulseRing 2.4s ease-in-out infinite; }
        .otp-cta       { animation: otpGradShift 4s ease-in-out infinite; background-size: 220% 220%; }
        .otp-dot-fill  { animation: otpDotIn .3s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      <div className="otp-pop relative w-full max-w-md rounded-[26px] overflow-hidden border border-white/10"
        role="dialog" aria-modal="true" aria-labelledby="otp-modal-title"
        style={{
          background: "linear-gradient(160deg,#070b1e 0%,#0b1030 55%,#080b22 100%)",
          boxShadow: "0 40px 100px rgba(0,0,0,.6), 0 0 0 1px rgba(45,212,191,.08)",
        }}>

        {/* dot-grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-70"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.035) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

        {/* ambient glow orbs */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.20),transparent 65%)" }} />

        <button onClick={onClose}
          aria-label="Close"
          style={{ position: "absolute", top: "16px", right: "16px" }}
          className="z-20 w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white/60 hover:text-white transition-all duration-200">
          <FaTimes className="text-xs" />
        </button>

        <div className="relative z-10 px-7 pt-9 pb-2 flex flex-col items-center text-center">
          {/* icon: spinning conic ring + pulsing halo */}
          <div className="relative w-16 h-16 mb-5 otp-icon-float">
            <div className="otp-pulse absolute -inset-2 rounded-full"
              style={{ background: "radial-gradient(circle,rgba(45,212,191,.35),transparent 70%)" }} />
            <div className="otp-ring-spin absolute -inset-1 rounded-full"
              style={{ background: "conic-gradient(#2dd4bf,#6366f1,#a855f7,#2dd4bf)" }} />
            <div className="absolute inset-[3px] rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#0a0f2e,#050814)" }}>
              <FaShieldAlt className="text-[#2dd4bf] text-xl" />
            </div>
          </div>

          <h2 id="otp-modal-title" className="font-[Poppins,sans-serif] font-extrabold text-white text-xl mb-1.5">Verify Your Number</h2>
          <p className="text-white/45 text-[13px] max-w-[240px] leading-relaxed">
            Enter the 6-digit code we just sent to your phone
          </p>

          {/* live fill-progress dots */}
          <div className="flex items-center gap-1.5 mt-5 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}
                className={`block w-1.5 h-1.5 rounded-full transition-transform duration-300 ${i < filled ? "otp-dot-fill" : ""}`}
                style={{ background: i < filled ? "linear-gradient(135deg,#2dd4bf,#6366f1)" : "rgba(255,255,255,.12)" }} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full px-3">
            <OtpInput value={otp} onChange={(v) => setOtp(v)}
              OTPLength={6} otpType="number" disabled={false} autoFocus
              className="gap-2.5 px-3"
              inputClassName="border-2 border-white/10 rounded-2xl bg-white/[.04] text-white text-xl font-extrabold outline-none transition-all duration-200 focus:border-[#2dd4bf] focus:bg-white/[.08] focus:shadow-[0_0_0_4px_rgba(45,212,191,.15)]"
              inputStyles={{ width: "46px", height: "46px", margin: "0 5px", textAlign: "center" }} />
          </div>
          <button onClick={handleResend} disabled={cooldown > 0}
            className="mt-6 mb-1 text-[12px] font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed"
            style={{ color: cooldown > 0 ? "rgba(255,255,255,.30)" : "#2dd4bf" }}>
            {cooldown > 0 ? `Resend code in 0:${String(cooldown).padStart(2, "0")}` : "Didn't get it? Resend code"}
          </button>
        </div>

        {/* Verify CTA */}
        <div className="relative z-10 px-7 pb-7 pt-5">
          <button disabled={loading || filled < 6} onClick={onVerify}
            className="otp-cta relative overflow-hidden w-full py-3.5 rounded-2xl text-white text-sm font-bold font-[Poppins,sans-serif] tracking-wide flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7)", boxShadow: "0 10px 30px rgba(45,212,191,.30)" }}>
            {loading
              ? <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              : (
                <>
                  Verify &amp; Continue
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )
            }
          </button>
        </div>

      </div>
    </div>
  );
}
