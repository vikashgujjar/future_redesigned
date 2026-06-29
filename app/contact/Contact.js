"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Location from "../components/Location";
import {
  FaEnvelope, FaLock, FaPhoneAlt, FaSkype,
  FaMapMarkerAlt, FaArrowRight, FaCheckCircle,
} from "react-icons/fa";
import dynamic from "next/dynamic";
const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });
import Swal from "sweetalert2";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { auth } from "../firebase.config";

const infoCards = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    detail: "Mon – Fri, 9 am to 5 pm",
    value: "(+91) 7056937000",
    href: "tel:+91-7056937000",
    from: "#2dd4bf", to: "#06b6d4",
    bg: "rgba(45,212,191,.08)", border: "rgba(45,212,191,.22)",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    detail: "We reply within 24 hours",
    value: "info@futuretouch.in",
    href: "mailto:info@futuretouch.in",
    from: "#6366f1", to: "#4f46e5",
    bg: "rgba(99,102,241,.08)", border: "rgba(99,102,241,.22)",
  },
  {
    icon: FaSkype,
    label: "Skype",
    detail: "Mon – Fri, 9 am to 5 pm",
    value: "Futuretouch",
    href: "skype:futuretouch",
    from: "#a855f7", to: "#7c3aed",
    bg: "rgba(168,85,247,.08)", border: "rgba(168,85,247,.22)",
  },
];

const whyItems = [
  "Expert team with 15+ years experience",
  "500+ successful projects delivered",
  "98% client satisfaction rate",
  "24/7 dedicated support",
];

export default function Page() {
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    S_subject: "",
    cr_code: "+91",
    check_term: "",
    userEmailsir: "info@futuretouch.in",
    message: "",
  });

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { callback: () => { onSignup(); }, "expired-callback": () => {} },
        auth
      );
    }
  }

  function onSignup() {
    const { S_name, S_email, S_phone, message } = formData;
    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({ icon: "warning", title: "Missing Information", text: "Please fill out all mandatory fields." });
      return;
    }
    setShowOTP(true);
    onCaptchVerify();
    toast.success("OTP sent successfully!");
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formData.cr_code + formData.S_phone, appVerifier)
      .then((res) => { window.confirmationResult = res; setLoading(false); setShowOTP(true); })
      .catch((err) => { console.log(err); setLoading(false); });
  }

  function reSend() {
    const { S_name, S_email, S_phone, message } = formData;
    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({ icon: "warning", title: "Missing Information", text: "Please fill out all mandatory fields." });
      return;
    }
    onCaptchVerify();
    signInWithPhoneNumber(auth, formData.cr_code + formData.S_phone, window.recaptchaVerifier)
      .then((res) => { window.confirmationResult = res; setLoading(false); setShowOTP(true); })
      .catch((err) => { console.log(err); setLoading(false); });
  }

  const onOTPVerify = async () => {
    setLoading(true);
    window.confirmationResult.confirm(otp)
      .then(async () => {
        const urlEncodedData = new URLSearchParams();
        for (const [k, v] of Object.entries(formData)) urlEncodedData.append(k, v);
        try {
          await axios.post("https://futuretouchmail.onrender.com/send-email", urlEncodedData);
          setLoading(false);
          setFormData({ S_name:"",S_email:"",S_phone:"",S_subject:"",message:"" });
          Swal.fire({ icon:"success",title:"Success!",text:"Your query has been submitted." })
            .then(r => { if (r.isConfirmed) { setOTP(false); window.location.href = "/"; } });
        } catch {
          setLoading(false);
          Swal.fire({ icon:"error",title:"Oops...",text:"Something went wrong!" });
        }
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({ icon:"error",title:"Invalid OTP",text:"Please enter the correct OTP." });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <style>{`
        @keyframes ctGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes ctPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

        .ct-hl {
          background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:ctGrad 5s ease-in-out infinite;
        }
        .ct-ping { animation:ctPing 2.4s ease-in-out infinite; }

        .ct-info-card {
          border-radius:18px; padding:20px 22px;
          display:flex; align-items:center; gap:16px;
          border:1px solid; transition:transform .3s, box-shadow .3s;
        }
        .ct-info-card:hover { transform:translateY(-5px); box-shadow:0 20px 50px rgba(0,0,0,.08); }
        .ct-icon-wrap {
          width:48px; height:48px; border-radius:14px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
        }

        .ct-field {
          width:100%; padding:13px 16px; border-radius:12px;
          border:1px solid rgba(99,102,241,.15); background:#fff;
          font-size:13.5px; color:#374151; font-family:'Inter',sans-serif;
          outline:none; transition:border-color .2s, box-shadow .2s;
        }
        .ct-field:focus {
          border-color:rgba(99,102,241,.45);
          box-shadow:0 0 0 3px rgba(99,102,241,.08);
        }
        .ct-field::placeholder { color:#94a3b8; }

        .ct-label {
          display:block; font-size:11.5px; font-weight:700; letter-spacing:.06em;
          text-transform:uppercase; margin-bottom:6px;
          color:#374151; font-family:'Poppins',sans-serif;
        }

        .ct-submit {
          width:100%; padding:15px; border-radius:14px; border:none; cursor:pointer;
          font-size:15px; font-weight:700; color:#fff; font-family:'Poppins',sans-serif;
          background:linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7);
          box-shadow:0 8px 28px rgba(99,102,241,.28);
          transition:transform .2s, box-shadow .2s; letter-spacing:.04em;
        }
        .ct-submit:hover { transform:translateY(-2px); box-shadow:0 14px 40px rgba(99,102,241,.38); }
        .ct-submit:active { transform:translateY(0); }

        .ct-check { width:16px; height:16px; accent-color:#6366f1; cursor:pointer; margin-top:1px; }

        .ct-otp-overlay {
          position:fixed; inset:0; z-index:9999;
          display:flex; align-items:center; justify-content:center;
          background:rgba(4,5,24,.75); backdrop-filter:blur(6px);
        }
        .ct-otp-box {
          background:#fff; border-radius:24px; padding:40px 36px;
          max-width:420px; width:90%; position:relative;
          box-shadow:0 40px 80px rgba(0,0,0,.22);
        }
        .ct-otp-close {
          position:absolute; top:16px; right:16px;
          background:none; border:none; cursor:pointer; color:#64748b;
          padding:4px; border-radius:8px; transition:color .2s,background .2s;
        }
        .ct-otp-close:hover { color:#374151; background:rgba(0,0,0,.06); }
        .ct-otp-btn {
          padding:11px 24px; border-radius:10px; font-size:13px; font-weight:700;
          font-family:'Poppins',sans-serif; cursor:pointer; transition:all .2s;
        }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=1600&q=85"
          alt="Contact Us"
          fill priority unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.82) 0%,rgba(20,10,60,.78) 50%,rgba(4,5,24,.85) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-5">
            <Link href="/"
              style={{ color:"rgba(255,255,255,.50)", fontFamily:"'Poppins',sans-serif",
                textDecoration:"none", fontSize:"11px", fontWeight:600,
                letterSpacing:".18em", textTransform:"uppercase" }}
              className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ color:"#2dd4bf", fontFamily:"'Poppins',sans-serif",
              fontSize:"11px", fontWeight:600, letterSpacing:".18em", textTransform:"uppercase" }}>
              Contact Us
            </span>
          </nav>
          <h1 className="font-extrabold text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)", lineHeight:1.08 }}>
            Get In{" "}
            <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Touch
            </span>
          </h1>
          <p style={{ color:"rgba(255,255,255,.65)", fontFamily:"'Inter',sans-serif",
            fontSize:"clamp(.9rem,1.8vw,1.05rem)", maxWidth:480, margin:"0 auto 18px" }}>
            Have a project in mind? We'd love to hear from you.
          </p>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Main Section ── */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-40 -left-40 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
              style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
              <span className="ct-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif",
                fontSize:"10px", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase" }}>
                Future IT Touch · Let's Connect
              </span>
            </div>
            <h2 className="font-extrabold mb-4"
              style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.65rem,3.5vw,2.6rem)",
                color:"#0c1230", lineHeight:1.10 }}>
              Have a Question? <span className="ct-hl">Write a Message</span>
            </h2>
            <div className="mx-auto h-[3px] w-14 rounded-full mb-5"
              style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p style={{ fontSize:"13.5px", color:"#64748b", maxWidth:480, margin:"0 auto", lineHeight:1.85 }}>
              We will get back to you as soon as we receive your message.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-10 xl:gap-14 items-start">

            {/* ── LEFT: Info + Why choose us ── */}
            <div className="space-y-5">

              {infoCards.map((c, i) => (
                <div key={i} className="ct-info-card"
                  style={{ background:c.bg, borderColor:c.border }}>
                  <div className="ct-icon-wrap"
                    style={{ background:`linear-gradient(135deg,${c.from},${c.to})` }}>
                    <c.icon size={18} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:"10px", fontWeight:700,
                      letterSpacing:".14em", textTransform:"uppercase", color:c.from, marginBottom:2 }}>
                      {c.label}
                    </p>
                    <p style={{ fontSize:"12px", color:"#64748b", marginBottom:4 }}>{c.detail}</p>
                    <a href={c.href}
                      style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:"14px",
                        color:"#0c1230", textDecoration:"none" }}>
                      {c.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Why choose */}
              <div className="rounded-[18px] overflow-hidden"
                style={{ border:"1px solid rgba(99,102,241,.12)",
                  boxShadow:"0 4px 24px rgba(99,102,241,.08)" }}>
                <div className="px-6 py-4"
                  style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7)" }}>
                  <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:"15px",
                    color:"#fff", margin:0 }}>
                    Why Choose Us
                  </p>
                </div>
                <div className="px-6 py-5 bg-white space-y-3">
                  {whyItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle size={13} style={{ color:"#2dd4bf", flexShrink:0 }} />
                      <span style={{ fontSize:"13px", color:"#374151", fontWeight:500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="rounded-[18px] p-5 flex gap-4 items-start"
                style={{ background:"rgba(99,102,241,.06)", border:"1px solid rgba(99,102,241,.14)" }}>
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background:"linear-gradient(135deg,#6366f1,#a855f7)" }}>
                  <FaMapMarkerAlt size={15} color="#fff" />
                </div>
                <div>
                  <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:"12px",
                    letterSpacing:".10em", textTransform:"uppercase", color:"#4f46e5", marginBottom:4 }}>
                    Our Office
                  </p>
                  <p style={{ fontSize:"13px", color:"#475569", lineHeight:1.7 }}>
                    Future IT Touch Pvt. Ltd.<br />
                    Sector 17, Chandigarh, India
                  </p>
                </div>
              </div>

            </div>

            {/* ── RIGHT: Form ── */}
            <div className="rounded-[24px] bg-white p-8 sm:p-10"
              style={{ border:"1px solid rgba(99,102,241,.10)",
                boxShadow:"0 8px 40px rgba(99,102,241,.10),0 2px 8px rgba(0,0,0,.04)" }}>

              <div className="mb-8">
                <div className="h-[3px] w-12 rounded-full mb-4"
                  style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1)" }} />
                <h3 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800,
                  fontSize:"clamp(1.1rem,2vw,1.4rem)", color:"#0c1230", marginBottom:4 }}>
                  Send Us a Message
                </h3>
                <p style={{ fontSize:"13px", color:"#64748b" }}>
                  Fill out the form below and we'll respond within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="ct-label">Full Name *</label>
                  <input type="text" name="S_name" placeholder="John Doe"
                    value={formData.S_name} onChange={handleChange}
                    className="ct-field" />
                </div>
                <div>
                  <label className="ct-label">Email Address *</label>
                  <input type="email" name="S_email" placeholder="john@example.com"
                    value={formData.S_email} onChange={handleChange}
                    className="ct-field" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="ct-label">Phone Number *</label>
                  <div className="flex gap-2">
                    <select name="cr_code" value={formData.cr_code} onChange={handleChange}
                      className="ct-field" style={{ width:80, flexShrink:0, paddingLeft:10 }}>
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+971">+971</option>
                      <option value="+65">+65</option>
                    </select>
                    <input type="text" name="S_phone" placeholder="7056937000"
                      value={formData.S_phone} onChange={handleChange}
                      className="ct-field" style={{ flex:1 }} />
                  </div>
                </div>
                <div>
                  <label className="ct-label">Service Required</label>
                  <select name="S_subject" value={formData.S_subject} onChange={handleChange}
                    className="ct-field">
                    <option value="">Select a service</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="App Design">App Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="ct-label">Your Message *</label>
                <textarea name="message" placeholder="Tell us about your project…"
                  rows={5} value={formData.message} onChange={handleChange}
                  className="ct-field" style={{ resize:"vertical", lineHeight:1.7 }} />
              </div>

              <div className="flex items-start gap-3 mb-7">
                <input type="checkbox" id="check_term" name="check_term"
                  checked={formData.check_term}
                  onChange={() => setFormData(p => ({ ...p, check_term: !p.check_term }))}
                  className="ct-check" />
                <label htmlFor="check_term"
                  style={{ fontSize:"13px", color:"#64748b", lineHeight:1.6, cursor:"pointer" }}>
                  I agree to the{" "}
                  <Link href="#"
                    style={{ color:"#4f46e5", fontWeight:600, textDecoration:"none" }}>
                    Terms &amp; Conditions
                  </Link>{" "}
                  of Future IT Touch.
                </label>
              </div>

              <button type="button" className="ct-submit" onClick={onSignup}>
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" />
                    Sending…
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <FaArrowRight size={13} />
                  </span>
                )}
              </button>

              <p className="flex items-center justify-center gap-2 mt-5"
                style={{ fontSize:"12px", color:"#94a3b8", fontFamily:"'Poppins',sans-serif" }}>
                <FaLock size={10} />
                We respect your privacy and never share your data.
              </p>

              <div id="recaptcha-container" />
            </div>

          </div>
        </div>
      </section>

      {/* ── OTP Modal ── */}
      {showOTP && (
        <div className="ct-otp-overlay">
          <div className="ct-otp-box">
            <button className="ct-otp-close" onClick={() => setShowOTP(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="text-center mb-7">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)" }}>
                <FaPhoneAlt size={22} color="#fff" />
              </div>
              <h2 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:"1.25rem",
                color:"#0c1230", marginBottom:6 }}>
                Verify Your Number
              </h2>
              <p style={{ fontSize:"13px", color:"#64748b" }}>
                Enter the 6-digit OTP sent to your phone.
              </p>
            </div>

            <div className="flex justify-center mb-4">
              <OtpInput
                value={otp}
                onChange={setOTP}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container"
              />
            </div>

            <p style={{ fontSize:"12px", color:"#94a3b8", textAlign:"center", marginBottom:24 }}>
              Please wait 2–3 minutes for the OTP.
            </p>

            <div className="flex gap-3">
              <button className="ct-otp-btn" onClick={reSend}
                style={{ flex:1, background:"rgba(99,102,241,.08)", color:"#4f46e5",
                  border:"1.5px solid rgba(99,102,241,.25)" }}>
                Resend OTP
              </button>
              <button className="ct-otp-btn" onClick={onOTPVerify} disabled={loading}
                style={{ flex:1, border:"none",
                  background:"linear-gradient(135deg,#6366f1,#4f46e5)", color:"#fff",
                  boxShadow:"0 6px 20px rgba(99,102,241,.30)" }}>
                {loading ? (
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white" />
                    Verifying
                  </div>
                ) : "Verify & Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Map ── */}
      <Location />
      <div style={{ padding:"0 5vw 56px" }}>
        <div style={{ borderRadius:20, overflow:"hidden",
          boxShadow:"0 8px 40px rgba(99,102,241,.10)", border:"1px solid rgba(99,102,241,.10)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
            width="100%" height="440"
            style={{ border:0, display:"block" }}
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Future IT Touch Private Limited - Location"
          />
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
