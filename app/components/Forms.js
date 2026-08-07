"use client";

import React, { useState, useEffect } from "react";
import { COUNTRY_CODES } from "./countryData";
import { SERVICES } from "../data/services";
import { swalFire } from "../lib/swal";
import Image from "next/image";
import Link from "next/link";
import useOtpFlow from "../lib/useOtpFlow";
import OtpVerifyModal from "./OtpVerifyModal";
import MapEmbed from "./MapEmbed";

const Forms = () => {
  const { showOTP, setShowOTP, otp, setOtp: setOTP, loading, sendOtp, resendOtp, verifyOtp } = useOtpFlow();
  const [fileDrag, setFileDrag] = useState(false);

  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    service: "",
    cr_code: "+91",
    file: null,
  });

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(d => {
        const match = COUNTRY_CODES.find(c => c.shortName === d.country_code);
        if (match) setFormData(prev => ({ ...prev, cr_code: match.dialCode }));
      })
      .catch(() => { });
  }, []);

  const buildPayload = () => ({
    S_name: `${formData.first} ${formData.last}`.trim(),
    S_email: formData.email,
    S_phone: formData.phone,
    S_subject: formData.service,
    cr_code: formData.cr_code,
  });

  const resetForm = () =>
    setFormData(prev => ({ first: "", last: "", email: "", phone: "", service: "", cr_code: prev.cr_code, file: null }));

  const getPhone = () => formData.cr_code + formData.phone;

  async function onSignup() {
    const { first, last, email, phone } = formData;
    if (!first || !last || !email || !phone) {
      swalFire({ icon: "warning", title: "Missing Information", text: "Please fill out all the mandatory fields." });
      return;
    }
    await sendOtp(getPhone());
  }

  const onOTPVerify = async () => {
    await verifyOtp({
      phone: getPhone(),
      subject: "Future IT Touch New Lead - Quote Request",
      formData: buildPayload(),
      lead: { name: `${formData.first} ${formData.last}`.trim(), email: formData.email, service: formData.service },
      onSuccess: resetForm,
    });
  };

  async function handleResendOTP() {
    await resendOtp(getPhone());
  }

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

        /* ── File upload zone ── */
        .frm-file-zone {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 7px; padding: 20px 16px; border-radius: 9px; cursor: pointer;
          border: 1.5px dashed rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
          transition: border-color .2s, background .2s;
        }
        .frm-file-zone:hover {
          border-color: rgba(45,212,191,.45);
          background: rgba(45,212,191,.04);
        }
        .frm-file-zone.drag-over {
          border-color: rgba(45,212,191,.70);
          background: rgba(45,212,191,.07);
        }

        /* ── Spinning ring for call-agent image ── */
        @keyframes frmSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        .frm-img-spin { animation: frmSpin 6s linear infinite; }

      `}</style>

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

      <OtpVerifyModal
        show={showOTP}
        onClose={() => setShowOTP(false)}
        otp={otp}
        setOtp={setOTP}
        onVerify={onOTPVerify}
        onResend={handleResendOTP}
        loading={loading}
      />

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

            <div className="flex flex-col gap-2.5">
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-2.5">
                {[{ k: "first", ph: "First Name" }, { k: "last", ph: "Last Name" }].map(f => (
                  <div key={f.k}>
                    <label className="frm-label" htmlFor={`frm_${f.k}`}>{f.ph}</label>
                    <input id={`frm_${f.k}`} className="frm-input" placeholder={f.ph}
                      value={formData[f.k]}
                      onChange={e => setFormData({ ...formData, [f.k]: e.target.value })} />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label className="frm-label" htmlFor="frm_email">Email Address</label>
                <input id="frm_email" className="frm-input" type="email" placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>

              {/* Phone */}
              <div>
                <label className="frm-label" htmlFor="frm_phone">Phone Number</label>
                <div className="relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pr-2 border-r border-white/10 pointer-events-none"
                    style={{ color: "rgba(255,255,255,.45)", fontSize: 12, fontWeight: 500 }}
                  >
                    <span style={{ fontSize: 14 }}>
                      {COUNTRY_CODES.find(c => c.dialCode === formData.cr_code)?.flag ?? "🌐"}
                    </span>
                    <span>{formData.cr_code}</span>
                  </span>
                  <input id="frm_phone" className="frm-input phone-autofill-fix" type="tel" placeholder="98765 43210"
                    style={{ paddingLeft: 72 }}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="frm-label" htmlFor="frm_service">Select Service</label>
                <div className="relative">
                  <select id="frm_service" className="frm-input frm-select"
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}>
                    <option value="" disabled>Choose your service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5l3 3 3-3" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="frm-label" htmlFor="frm-file-input">Attach File</label>
                <label
                  htmlFor="frm-file-input"
                  className={`frm-file-zone${fileDrag ? " drag-over" : ""}`}
                  onDragOver={e => { e.preventDefault(); setFileDrag(true); }}
                  onDragLeave={() => setFileDrag(false)}
                  onDrop={e => {
                    e.preventDefault();
                    setFileDrag(false);
                    const f = e.dataTransfer.files[0];
                    if (f) setFormData(prev => ({ ...prev, file: f }));
                  }}
                >
                  {formData.file ? (
                    <>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                        stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <polyline points="9 15 12 18 15 15" />
                        <line x1="12" y1="12" x2="12" y2="18" />
                      </svg>
                      <span style={{ fontSize: 12, color: "#2dd4bf", fontWeight: 600 }}>
                        {formData.file.name}
                      </span>
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,.25)" }}>
                        {(formData.file.size / 1024).toFixed(0)} KB · Click to change
                      </span>
                    </>
                  ) : (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="rgba(255,255,255,.35)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 16 12 12 8 16" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                      </svg>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,.45)", fontWeight: 500 }}>
                        Drag & drop or{" "}
                        <span style={{ color: "#2dd4bf" }}>click to upload</span>
                      </span>
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,.20)" }}>
                        PNG, JPG, PDF, DOC · up to 10 MB
                      </span>
                    </>
                  )}
                </label>
                <input
                  id="frm-file-input"
                  type="file"
                  accept="image/*,.pdf,.doc,.docx"
                  style={{ display: "none" }}
                  onChange={e => setFormData(prev => ({ ...prev, file: e.target.files[0] || null }))}
                />
              </div>

              {/* divider */}
              <div className="h-px bg-white/[.06] my-0.5" />

              {/* Submit */}
              <button
                type="button"
                onClick={onSignup}
                className="frm-submit-btn w-full py-3.5 rounded-[9px] font-extrabold text-[11px] tracking-[.14em] uppercase text-white flex items-center justify-center gap-2"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {loading ? (
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                ) : (
                  <>
                    Submit Now
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
              <MapEmbed
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
                height={230}
                style={{ filter: "grayscale(20%) contrast(1.05)" }}
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
