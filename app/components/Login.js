"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../firebase.config";
import {
  FaUser, FaEnvelope, FaPhone, FaCommentDots,
  FaCalendarAlt, FaCode, FaDollarSign, FaFileAlt,
  FaCloudUploadAlt, FaTimes, FaArrowRight, FaCheckCircle,
} from "react-icons/fa";


import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import dynamic from "next/dynamic";   // ✅ ADD THIS

// import OtpInput from "otp-input-react";
const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });

import Swal from "sweetalert2";
import axios from "axios";
const toFlag = (code = "") =>
  [...code.toUpperCase()].map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join("");

// https://email.futuretouch.in/ 

// put this email

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

  const [loading, setLoading] = useState(false);
  const [showOTP2, setShowOTP2] = useState(false);
  const [otp, setOTP] = useState("");




  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",

    web_url: "",
    // userEmailsir: "info@futuretouch.in",
    userEmailsir: "email.futuretouch.in",
    company_name: "",
    S_subject: "",
    S_services: "",
    country: "",
    cr_code: "+91",
    state_city: "",
    service_type: "",
    budget_range: "",
    service_type: "",
    message: "",
    skype_id: "",
    term_condition: false,
    uploadfile: null,
  });

  const handleChange = (e) => {
    console.log();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add form submission logic here
  };

  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const codes = data
          .map((country) => ({
            shortName: country.cca2,
            dialCode:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .filter((country) => country.dialCode);
        setCountryCodes(codes);
      })
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

function onCaptchVerify() {
  if (typeof window !== "undefined" && !window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          onSignup();
        },
        "expired-callback": () => {},
      },
      auth
    );
  }
}

  function onSignup() {
    const { S_name, S_email, S_phone, message } = formData;

    if (!S_name || !S_email || !S_phone) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill out all the mandatory fields.",
      });
      return;
    }

    setShowOTP2(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = formData.cr_code + formData.S_phone;
    console.log(formatPh);
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP2(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const onOTPVerify = async () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);

        const urlEncodedData = new URLSearchParams();
        for (const [key, value] of Object.entries(formData)) {
          urlEncodedData.append(key, value);
        }

        try {
          const response = await axios.post(
            "https://futuretouchmail.onrender.com/send-email",
            urlEncodedData
          );
          setLoading(false);
          console.log(response);
          setFormData({
            S_name: "",
            S_email: "",
            S_phone: "",
            S_subject: "",
            message: "",
          });

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your query has been submitted.",
          }).then((result) => {
            if (result.isConfirmed) {
              setLoading(false);
              console.log("hello User");

              setOTP(false);

              window.location.href = "/";
            }
          });
        } catch (error) {
          setLoading(false);
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "Please enter the correct OTP.",
        });
      });
  };

  const handleResendOTP = () => {
    const appVerifier = window.recaptchaVerifier;
    const formatPh = formData.cr_code + formData.S_phone;

    Swal.fire({
      title: "Resend OTP",
      text: "Are you sure you want to resend OTP?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, resend OTP",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP2(true);
            Swal.fire({
              icon: "success",
              title: "OTP Resent",
              text: "OTP has been successfully resent.",
            });
          })
          .catch((error) => {
            setLoading(false);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to resend OTP. Please try again later.",
            });
          });
      }
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
              className="relative z-10 w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 border border-white/10"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          {/* ── Scrollable form body ── */}
          <div className="bg-white overflow-y-auto flex-1 px-6 py-5">
            <div id="recaptcha-container" />
            <input type="hidden" name="action" value="request_form" />

            {/* Row 1 — Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="S_name" placeholder="Full Name *" required
                  value={formData.S_name} onChange={handleChange} className={inputCls} />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="S_email" placeholder="Email Address *" required
                  value={formData.S_email} onChange={handleChange} className={inputCls} />
              </div>
            </div>

            {/* Row 2 — Phone + Skype */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative flex">
                <select
                  onChange={handleChange} name="cr_code" value={formData.cr_code}
                  className="h-11 w-[96px] flex-shrink-0 text-xs bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl outline-none text-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 px-2"
                >
                  {countryCodes.length === 0
                    ? <option value="+91">🇮🇳 +91</option>
                    : countryCodes.map((c, i) => (
                        <option key={i} value={c.dialCode}>
                          {toFlag(c.shortName)} {c.dialCode}
                        </option>
                      ))
                  }
                </select>
                <div className="relative flex-1">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                  <input type="text" name="S_phone" placeholder="Phone Number *"
                    value={formData.S_phone} onChange={handleChange}
                    className="w-full h-11 pl-9 pr-3 text-sm text-[#050748] bg-white border border-gray-200 rounded-r-xl outline-none placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
                </div>
              </div>
              <div className="relative">
                <FaCommentDots className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="skype_id" placeholder="Skype ID"
                  value={formData.skype_id} onChange={handleChange} className={inputCls} />
              </div>
            </div>

            {/* Row 3 — Start time + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none z-10" />
                <select name="start_time" value={formData.start_time} onChange={handleChange} className={selectCls}>
                  <option value="">When to start?</option>
                  <option value="ASAP">ASAP</option>
                  <option value="In a week">In a week</option>
                  <option value="In a month">In a month</option>
                </select>
              </div>
              <div className="relative">
                <FaCode className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none z-10" />
                <select name="service_type" value={formData.service_type} onChange={handleChange} className={selectCls}>
                  <option value="">Choose a Service</option>
                  <option value="Web Designing">Web Designing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Software development">Software development</option>
                  <option value="saas model development">SAAS model development</option>
                  <option value="Cyber Security Service">Cyber Security Service</option>
                </select>
              </div>
            </div>

            {/* Row 4 — Budget + File Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <FaDollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-300 text-sm pointer-events-none" />
                <input type="text" name="budget_range" placeholder="Budget Range"
                  value={formData.budget_range} onChange={handleChange} className={inputCls} />
              </div>
              <label className="relative flex items-center justify-center h-11 rounded-xl border-2 border-dashed border-indigo-300 bg-indigo-50/60 cursor-pointer hover:bg-indigo-100/60 transition-colors gap-2 group">
                <FaCloudUploadAlt className="text-base text-indigo-400 group-hover:text-indigo-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-500">Attach a File</span>
                <span className="text-[10px] text-gray-400 hidden sm:inline">(JPG, PNG, PDF)</span>
                <input type="file" name="file" accept=".jpg,.jpeg,.png,.gif,.pdf"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
              </label>
            </div>

            {/* Row 5 — Project Description */}
            <div className="relative mb-4">
              <FaFileAlt className="absolute left-3.5 top-3.5 text-indigo-300 text-sm pointer-events-none" />
              <textarea name="message" placeholder="Project Description"
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

      {/* ── OTP Verification Modal ── */}
      {showOTP2 && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(5,7,72,.35)] border border-white/10">

            {/* OTP Header */}
            <div className="relative bg-[linear-gradient(135deg,#050b20,#0a0f2e)] px-6 py-5 overflow-hidden">
              <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.20),transparent_65%)]" />
              <button onClick={() => setShowOTP2(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200">
                <FaTimes className="text-xs" />
              </button>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                  <FaPhone className="text-white text-lg" />
                </div>
                <h2 className="font-[Poppins,sans-serif] font-extrabold text-white text-lg">Verify Your Number</h2>
                <p className="text-white/50 text-xs mt-1">Enter the 6-digit OTP sent to your phone</p>
              </div>
            </div>

            {/* OTP Body */}
            <div className="bg-white px-6 py-6 flex flex-col items-center">
              <OtpInput value={otp} onChange={(v) => setOTP(v)}
                OTPLength={6} otpType="number" disabled={false} autoFocus
                className="opt-container" />

              <p className="text-center text-gray-400 text-xs mt-4 mb-6 max-w-xs">
                Please wait 2–3 minutes for the OTP to arrive. Check your SMS inbox.
              </p>

              <div className="flex w-full gap-3">
                <button onClick={handleResendOTP}
                  className="flex-1 h-11 rounded-xl border-2 border-indigo-400 text-indigo-500 text-sm font-bold font-[Poppins,sans-serif] hover:bg-indigo-50 transition-colors duration-200">
                  Resend OTP
                </button>
                <button disabled={loading} onClick={onOTPVerify}
                  className="flex-1 h-11 rounded-xl text-white text-sm font-bold font-[Poppins,sans-serif] bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] hover:shadow-[0_6px_20px_rgba(45,212,191,.4)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {loading
                    ? <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    : <><FaCheckCircle className="text-base" /> Verify</>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
