"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import useOtpFlow from "../lib/useOtpFlow";
import {
  FaUser, FaEnvelope, FaPhone, FaCommentDots,
  FaCalendarAlt, FaCode, FaDollarSign, FaFileAlt,
  FaCloudUploadAlt, FaTimes, FaArrowRight,
} from "react-icons/fa";

import { swalFire } from "../lib/swal";
import { COUNTRY_CODES } from "./countryData";
import { SERVICES } from "../data/services";
import OtpVerifyModal from "./OtpVerifyModal";

const Login = ({ handleClosePopup ,isPopupOpen}) => {

    useEffect(() => {
      if (isPopupOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isPopupOpen]);

  const { showOTP: showOTP2, setShowOTP: setShowOTP2, otp, setOtp: setOTP, loading, sendOtp, resendOtp, verifyOtp } = useOtpFlow();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",

    web_url: "",
    company_name: "",
    S_subject: "",
    S_services: "",
    country: "",
    cr_code: "+91",
    state_city: "",
    budget_range: "",
    service_type: "",
    message: "",
    skype_id: "",
    term_condition: false,
    uploadfile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const countryCodes = COUNTRY_CODES;

  // Auto-detect the visitor's country code from their IP on first load
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        const match = countryCodes.find((c) => c.shortName === data.country_code);
        if (match) setFormData((prev) => ({ ...prev, cr_code: match.dialCode }));
      })
      .catch(() => {});
  }, []);

  const getPhone = () => formData.cr_code + formData.S_phone;

  async function onSignup() {
    const { S_name, S_email, S_phone } = formData;

    if (!S_name || !S_email || !S_phone) {
      swalFire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill out all the mandatory fields.",
      });
      return;
    }

    await sendOtp(getPhone());
  }

  const onOTPVerify = async () => {
    await verifyOtp({
      phone: getPhone(),
      subject: "Future IT Touch New Lead - Quick Quote Popup",
      formData,
      lead: { name: formData.S_name, email: formData.S_email, service: formData.service_type, message: formData.message },
    });
  };

  const handleResendOTP = () => {
    swalFire({
      title: "Resend OTP",
      text: "Are you sure you want to resend OTP?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, resend OTP",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) resendOtp(getPhone());
    });
  };

  const inputCls = "w-full h-11 pl-10 pr-4 text-[#050748] text-sm bg-white border border-gray-200 rounded-xl outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100";
  const selectCls = "w-full h-11 pl-10 pr-4 text-sm bg-white border border-gray-200 rounded-xl outline-none transition-all duration-200 text-gray-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 appearance-none";

  return (
    <>
      {/* ── Backdrop ── */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

        {/* ── Modal card ── */}
        <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(5,7,72,.28)] border border-white/10">

          {/* ── Header band ── */}
          <div className="relative flex-shrink-0 bg-[linear-gradient(135deg,#050b20,#0a0f2e)] px-7 py-5 flex items-center justify-between overflow-hidden">
            <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.18),transparent_65%)]" />
            <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.18),transparent_65%)]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mb-2 text-[9px] font-bold tracking-[.22em] uppercase text-[#2dd4bf] font-[Poppins,sans-serif]">
                <span className="w-1.5 h-1.5 rounded-full animate-ping bg-[#2dd4bf]" />
                Free Consultation
              </div>
              <h3 className="font-[Poppins,sans-serif] font-extrabold text-xl text-white leading-tight">
                Get a{" "}
                <span className="bg-[linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7)] bg-[length:200%_200%] bg-clip-text text-transparent [animation:tcpGrad_5s_ease-in-out_infinite]">
                  Free Quote
                </span>
              </h3>
            </div>

            <button
              onClick={handleClosePopup}
              aria-label="Close"
              className="relative z-10 w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 border border-white/10"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          {/* ── Scrollable form body ── */}
          <div className="bg-white overflow-y-auto flex-1 px-6 py-5">
            <input type="hidden" name="action" value="request_form" />

            {/* Row 1 — Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="S_name" placeholder="Full Name *" aria-label="Full Name" required
                  value={formData.S_name} onChange={handleChange} className={inputCls} />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="S_email" placeholder="Email Address *" aria-label="Email Address" required
                  value={formData.S_email} onChange={handleChange} className={inputCls} />
              </div>
            </div>

            {/* Row 2 — Phone + Skype */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative flex">
                <select
                  onChange={handleChange} name="cr_code" value={formData.cr_code}
                  aria-label="Country code"
                  className="h-11 w-[78px] flex-shrink-0 text-sm bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl outline-none text-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 px-2"
                >
                  {countryCodes.map((c, i) => (
                    <option key={i} value={c.dialCode} title={c.name}>
                      {c.flag} {c.dialCode}
                    </option>
                  ))}
                </select>
                <div className="relative flex-1">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                  <input type="text" name="S_phone" placeholder="Phone Number *" aria-label="Phone Number"
                    value={formData.S_phone} onChange={handleChange}
                    className="w-full h-11 pl-9 pr-3 text-sm text-[#050748] bg-white border border-gray-200 rounded-r-xl outline-none placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
                </div>
              </div>
              <div className="relative">
                <FaCommentDots className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="skype_id" placeholder="Skype ID" aria-label="Skype ID"
                  value={formData.skype_id} onChange={handleChange} className={inputCls} />
              </div>
            </div>

            {/* Row 3 — Start time + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none z-10" />
                <select name="start_time" value={formData.start_time} onChange={handleChange} aria-label="When to start" className={selectCls}>
                  <option value="">When to start?</option>
                  <option value="ASAP">ASAP</option>
                  <option value="In a week">In a week</option>
                  <option value="In a month">In a month</option>
                </select>
              </div>
              <div className="relative">
                <FaCode className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none z-10" />
                <select name="service_type" value={formData.service_type} onChange={handleChange} aria-label="Choose a service" className={selectCls}>
                  <option value="">Choose a Service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4 — Budget + File Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <FaDollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="budget_range" placeholder="Budget Range" aria-label="Budget Range"
                  value={formData.budget_range} onChange={handleChange} className={inputCls} />
              </div>
              <label className="relative flex items-center justify-center h-11 rounded-xl border-2 border-dashed border-indigo-300 bg-indigo-50/60 cursor-pointer hover:bg-indigo-100/60 transition-colors gap-2 group">
                <FaCloudUploadAlt className="text-base text-indigo-400 group-hover:text-indigo-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-500">Attach a File</span>
                <span className="text-[10px] text-gray-400 hidden sm:inline">(JPG, PNG, PDF)</span>
                <input type="file" name="file" accept=".jpg,.jpeg,.png,.gif,.pdf" aria-label="Attach a file"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
              </label>
            </div>

            {/* Row 5 — Project Description */}
            <div className="relative mb-4">
              <FaFileAlt className="absolute left-3.5 top-3.5 text-indigo-300 text-sm pointer-events-none" />
              <textarea name="message" placeholder="Project Description" aria-label="Project Description"
                value={formData.message} onChange={handleChange} rows={3}
                className="w-full pl-10 pr-4 pt-2.5 pb-2.5 text-sm text-[#050748] bg-white border border-gray-200 rounded-xl outline-none placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 resize-none transition-all duration-200" />
            </div>

            {/* Row 6 — Terms + Submit */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input type="checkbox" name="term_condition"
                  checked={formData.term_condition} onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-indigo-500 rounded cursor-pointer flex-shrink-0" />
                <span className="text-sm text-gray-500 leading-snug">
                  I accept the{" "}
                  <Link href="/Terms-Conditions" target="_blank"
                    className="font-semibold text-indigo-500 hover:text-indigo-700 underline underline-offset-2">
                    Terms &amp; Conditions
                  </Link>
                </span>
              </label>

              <button type="submit" onClick={onSignup}
                className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full text-white font-[Poppins,sans-serif] text-sm font-bold tracking-[.06em] uppercase whitespace-nowrap hover:shadow-[0_8px_28px_rgba(45,212,191,.45)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                Get Free Quote <FaArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <OtpVerifyModal
        show={showOTP2}
        onClose={() => setShowOTP2(false)}
        otp={otp}
        setOtp={setOTP}
        onVerify={onOTPVerify}
        onResend={handleResendOTP}
        loading={loading}
      />
    </>
  );
};

export default Login;
