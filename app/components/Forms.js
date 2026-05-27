"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });
import Link from "next/link";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";

const Forms = () => {
  const router = useRouter();
  const [showOTP, setShowOTP] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    S_subject: "",
    cr_code: "+91",
    userEmailsir: "Info@digitalyaatra.com",
    message: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(r => r.json())
      .then(data => {
        const codes = data
          .map(c => ({
            shortName: c.cca2,
            dialCode: c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : ""),
          }))
          .filter(c => c.dialCode);
        setCountryCodes(codes);
      })
      .catch(err => console.error("Error fetching country codes:", err));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const urlEncoded = new URLSearchParams();
    for (const [k, v] of Object.entries(formData)) urlEncoded.append(k, v);
    try {
      await axios.post("https://futuretouchmail.onrender.com/send-email", urlEncoded);
      setLoading(false);
      setFormData({ S_name: "", S_email: "", S_phone: "", S_subject: "", message: "" });
      Swal.fire({ icon: "success", title: "Success!", text: "Your query has been submitted." })
        .then(r => { if (r.isConfirmed) window.location.href = "/"; });
    } catch {
      setLoading(false);
      Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
    }
  };

  function onCaptchVerify() {
    if (typeof window !== "undefined" && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible", callback: () => onSignup(), "expired-callback": () => { } },
        auth
      );
    }
  }

  function onSignup() {
    const { S_name, S_email, S_phone, message } = formData;
    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({ icon: "warning", title: "Missing Information", text: "Please fill out all the mandatory fields." });
      return;
    }
    setShowOTP(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = formData.cr_code + formData.S_phone;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then(result => { window.confirmationResult = result; setLoading(false); setShowOTP(true); })
      .catch(err => { console.log(err); setLoading(false); });
  }

  const onOTPVerify = async () => {
    setLoading(true);
    window.confirmationResult.confirm(otp)
      .then(async () => {
        const urlEncoded = new URLSearchParams();
        for (const [k, v] of Object.entries(formData)) urlEncoded.append(k, v);
        try {
          const res = await axios.post("https://futuretouchmail.onrender.com/send-email", urlEncoded);
          setLoading(false);
          console.log(res);
          setFormData({ S_name: "", S_email: "", S_phone: "", S_subject: "", message: "" });
          Swal.fire({ icon: "success", title: "Success!", text: "Your query has been submitted." })
            .then(r => { if (r.isConfirmed) { setLoading(false); setOTP(""); router.push("/"); } });
        } catch {
          setLoading(false);
          Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
        }
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({ icon: "error", title: "Invalid OTP", text: "Please enter the correct OTP." });
      });
  };

  return (
    <section
      id="scroll-down"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 xl:px-24"
      style={{ background: "#05060F" }}
    >
      {/* ── shared styles (same input pattern as banner/hero) ── */}
      <style>{`
        /* ── Dot grid ── */
        .frm-dotgrid {
          background-image: radial-gradient(rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        /* ── Input — identical to .hs-input in HeroSection ── */
        .frm-input {
          width: 100%;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 9px;
          padding: 11px 14px;
          color: #fff;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          outline: none;
          box-sizing: border-box;
          transition: border-color .25s, box-shadow .25s, background .25s;
        }
        .frm-input::placeholder { color: rgba(255,255,255,.22); }
        .frm-input:focus {
          background: rgba(255,255,255,.07);
          border-color: #2dd4bf;
          box-shadow: 0 0 0 3px rgba(45,212,191,.14);
        }
        .frm-select { appearance: none; cursor: pointer; }
        .frm-select option { background: #0d0f1f; color: #fff; }

        /* ── Label — identical to hero form labels ── */
        .frm-label {
          display: block;
          font-size: 9.5px;
          color: rgba(255,255,255,.30);
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 6px;
          font-family: 'Inter', sans-serif;
        }

        /* ── Card glow border wrapper ── */
        .frm-card-wrap {
          position: relative;
        }
        .frm-card-wrap::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 22px;
          background: linear-gradient(135deg,rgba(45,212,191,.35),rgba(99,102,241,.22),rgba(255,255,255,.04),rgba(45,212,191,.14));
          z-index: 0;
        }
        /* ── Card inner ── */
        .frm-card {
          position: relative;
          z-index: 1;
          border-radius: 21px;
          background: rgba(7,9,22,.88);
          backdrop-filter: blur(32px);
          overflow: hidden;
        }

        /* ── Top shimmer bar ── */
        .frm-top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 21px 21px 0 0;
          background: linear-gradient(90deg, transparent 0%, #2dd4bf 30%, #6366f1 70%, transparent 100%);
          opacity: .75;
        }

        /* ── Submit button ── */
        .frm-submit-btn {
          background: linear-gradient(135deg, #0d9488, #4338ca);
          box-shadow: 0 4px 24px rgba(45,212,191,.30);
          transition: transform .2s, box-shadow .2s;
          border: none;
          cursor: pointer;
        }
        .frm-submit-btn:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 10px 32px rgba(45,212,191,.45);
        }

        /* ── Spinning ring for call-agent image ── */
        @keyframes frmSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        .frm-img-spin { animation: frmSpin 6s linear infinite; }

        /* ── OTP input override ── */
        .frm-otp-input input {
          width: 44px !important;
          height: 50px !important;
          border-radius: 9px !important;
          border: 1px solid rgba(255,255,255,.12) !important;
          background: rgba(255,255,255,.05) !important;
          color: #fff !important;
          font-size: 18px !important;
          font-weight: 700 !important;
          text-align: center !important;
          outline: none !important;
          transition: border-color .2s, box-shadow .2s !important;
        }
        .frm-otp-input input:focus {
          border-color: #2dd4bf !important;
          box-shadow: 0 0 0 3px rgba(45,212,191,.18) !important;
        }
      `}</style>

      <div id="recaptcha-container" />

      {/* dot grid */}
      <div className="frm-dotgrid absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ambient glow — teal TL */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.12) 0%,transparent 65%)" }} />
      {/* ambient glow — indigo BR */}
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.10) 0%,transparent 65%)" }} />

      {/* SVG rotating rings — TR decoration */}
      <div className="absolute -top-20 right-[5%] w-72 h-72 pointer-events-none hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 288 288" fill="none" width="288" height="288">
          <circle cx="144" cy="144" r="130" stroke="rgba(45,212,191,.06)" strokeWidth="1"
            strokeDasharray="55 95" strokeLinecap="round"
            style={{ transformOrigin: "144px 144px", animation: "frmSpin 50s linear infinite" }} />
          <circle cx="144" cy="144" r="90" stroke="rgba(99,102,241,.07)" strokeWidth="1"
            strokeDasharray="38 65" strokeLinecap="round"
            style={{ transformOrigin: "144px 144px", animation: "frmSpin 32s linear infinite reverse" }} />
        </svg>
      </div>

      {/* ══════════════════════════════════════
          OTP POPUP
      ══════════════════════════════════════ */}
      {showOTP && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(5,6,15,.85)", backdropFilter: "blur(8px)" }}
        >
          <div
            className="relative flex flex-col items-center p-8 rounded-[22px] max-w-sm w-full mx-4"
            style={{
              background: "rgba(7,9,22,.92)",
              border: "1px solid rgba(45,212,191,.25)",
              backdropFilter: "blur(32px)",
              boxShadow: "0 0 0 1px rgba(45,212,191,.10), 0 24px 60px rgba(0,0,0,.55)",
            }}
          >
            {/* top bar */}
            <div className="frm-top-bar" />

            {/* close */}
            <button
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 hover:bg-white/10 transition"
              onClick={() => setShowOTP(false)}>
              ✕
            </button>

            {/* icon */}
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 mt-2"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 8px 28px rgba(45,212,191,.35)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>

            <h2 className="text-[17px] font-bold text-white mb-1" style={{ fontFamily: "'Poppins',sans-serif" }}>
              Phone Verification
            </h2>
            <p className="text-[12px] text-white/40 text-center mb-6" style={{ fontFamily: "'Inter',sans-serif" }}>
              Enter the OTP sent to your phone
            </p>

            <OtpInput
              value={otp}
              onChange={v => setOTP(v)}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="frm-otp-input"
            />

            <p className="text-[11px] text-white/25 text-center mt-4 mb-6" style={{ fontFamily: "'Inter',sans-serif" }}>
              Please wait 2–3 minutes for the OTP to arrive.
            </p>

            {/* divider */}
            <div className="w-full h-px bg-white/[.06] mb-5" />

            <div className="flex w-full gap-3">
              <button
                className="flex-1 py-3 rounded-[9px] text-[11px] font-bold tracking-[.10em] uppercase transition-all"
                style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.10)", color: "rgba(255,255,255,.55)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(45,212,191,.4)"; e.currentTarget.style.color = "#2dd4bf"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.10)"; e.currentTarget.style.color = "rgba(255,255,255,.55)"; }}>
                Resend OTP
              </button>
              <button
                disabled={loading}
                onClick={onOTPVerify}
                className="frm-submit-btn flex-1 py-3 rounded-[9px] font-extrabold text-[11px] tracking-[.12em] uppercase text-black flex items-center justify-center gap-2">
                {loading ? (
                  <div className="w-5 h-5 border-t-2 border-b-2 border-black rounded-full animate-spin" />
                ) : "Verify & Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          MAIN LAYOUT
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 xl:gap-10 items-start">

        {/* ── LEFT: FORM CARD ───────────────────── */}
        <div className="frm-card-wrap">
          <div className="frm-card p-7 sm:p-9">
            <div className="frm-top-bar" />

            {/* card heading */}
            <p className="text-[9.5px] text-white/30 tracking-[.18em] uppercase mb-1 mt-1" style={{ fontFamily: "'Inter',sans-serif" }}>
              Send us a message
            </p>
            <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Poppins',sans-serif" }}>
              Get in Touch
            </h3>

            <div className="flex flex-col gap-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="frm-label">Name</label>
                  <input
                    type="text" name="S_name" placeholder="Your Name"
                    className="frm-input" value={formData.S_name} onChange={handleChange} />
                </div>
                <div>
                  <label className="frm-label">Email Address</label>
                  <input
                    type="email" name="S_email" placeholder="you@example.com"
                    className="frm-input" value={formData.S_email} onChange={handleChange} />
                </div>
              </div>

              {/* File + Skype */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="frm-label">Attachment</label>
                  <input
                    type="file" name="photo" accept="image/*"
                    className="frm-input file:mr-3 file:rounded-md file:border-0 file:bg-white/10 file:text-white/60 file:text-[11px] file:font-semibold file:py-1 file:px-2.5 file:cursor-pointer cursor-pointer pt-[9px]"
                  />
                </div>
                <div>
                  <label className="frm-label">Skype ID</label>
                  <input
                    type="text" name="skype_id" placeholder="live:yourskype"
                    className="frm-input" value={formData.skype_id || ""} onChange={handleChange} />
                </div>
              </div>

              {/* Phone with country code */}
              <div>
                <label className="frm-label">Phone Number</label>
                <div className="relative">
                  <select
                    onChange={handleChange}
                    name="cr_code"
                    value={formData.cr_code}
                    className="frm-input frm-select absolute left-0 top-0 h-full w-[76px] rounded-r-none border-r border-white/[.07] text-[11px] text-center px-1"
                    style={{ borderRadius: "9px 0 0 9px" }}
                  >
                    {countryCodes.map((c, i) => (
                      <option key={i} value={c.dialCode}>
                        {c.shortName} ({c.dialCode})
                      </option>
                    ))}
                  </select>
                  <input
                    type="text" name="S_phone" placeholder="98765 43210"
                    value={formData.S_phone} onChange={handleChange}
                    className="frm-input"
                    style={{ paddingLeft: 88, borderRadius: "0 9px 9px 0" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="frm-label">Your Message</label>
                <textarea
                  name="message" rows={5} placeholder="Tell us about your project..."
                  className="frm-input"
                  style={{ resize: "none", borderRadius: 9 }}
                  value={formData.message} onChange={handleChange}
                />
              </div>

              {/* divider */}
              <div className="h-px bg-white/[.06]" />

              {/* Submit */}
              <button
                type="button"
                onClick={onSignup}
                className="frm-submit-btn w-full py-3.5 rounded-[9px] font-extrabold text-[11px] tracking-[.14em] uppercase text-black flex items-center justify-center gap-2"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {loading ? (
                  <div className="w-5 h-5 border-t-2 border-b-2 border-black rounded-full animate-spin" />
                ) : (
                  <>
                    Submit Now
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── RIGHT: INFO CARD ──────────────────── */}
        <div className="frm-card-wrap">
          <div className="frm-card p-7 sm:p-9">
            <div className="frm-top-bar" />

            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full mb-3"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse flex-shrink-0" />
              <span
                className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
                style={{ fontFamily: "'Inter',sans-serif" }}>
                Request A Free Quote
              </span>
            </div>

            <h3
              className="text-xl font-bold text-white mb-3 leading-snug"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Ready to Turn Your Vision<br className="hidden sm:block" /> into Reality?
            </h3>

            <p
              className="text-[13px] leading-relaxed mb-7"
              style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.45)" }}>
              Fill out the form and share the specifics of your project. Whether it&apos;s a bold
              new venture, a creative initiative, or an innovative solution, we&apos;re here to help
              you make it happen. Your journey starts here — let&apos;s shape the future together.
            </p>

            {/* divider */}
            <div className="w-full h-px bg-white/[.06] mb-6" />

            {/* Help Line */}
            <div
              className="flex items-center gap-4 p-4 rounded-[13px] mb-6"
              style={{ background: "rgba(45,212,191,.07)", border: "1px solid rgba(45,212,191,.18)" }}>

              {/* spinning ring + image */}
              <div className="relative w-14 h-14 flex-shrink-0">
                {/* spinning conic ring */}
                <div
                  className="frm-img-spin absolute -inset-[3px] rounded-full"
                  style={{ background: "conic-gradient(#2dd4bf, #6366f1, rgba(255,255,255,.15), #2dd4bf)" }}
                />
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#0d0f1f]">
                  <Image
                    src="/Assets/call-agent.webp"
                    width={52}
                    height={52}
                    alt="help-line"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <label className="frm-label" style={{ marginBottom: 4 }}>Help Line</label>
                <Link
                  href="tel:+917056937000"
                  className="text-white font-bold text-base hover:text-teal-400 transition-colors"
                  style={{ fontFamily: "'Poppins',sans-serif" }}>
                  +91 70569-37000
                </Link>
              </div>
            </div>

            {/* Google Map */}
            <div
              className="overflow-hidden rounded-[13px]"
              style={{ border: "1px solid rgba(255,255,255,.07)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
                width="100%"
                height="190"
                style={{ border: 0, display: "block", filter: "grayscale(20%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Future IT Touch Private Limited - Location"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Forms;
