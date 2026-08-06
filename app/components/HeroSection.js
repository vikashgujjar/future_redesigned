"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { COUNTRY_CODES } from "./countryData";
import { SERVICES } from "../data/services";
import Swal from "sweetalert2";
import useOtpFlow from "../lib/useOtpFlow";
import OtpVerifyModal from "./OtpVerifyModal";
import useYearsExperience from "../lib/useYearsExperience";

const slides = [
  {
    tag: "Website Development",
    eyebrow: "We Build Your",
    headline: "Digital Future.",
    sub: "Excellent Website Design &",
    subBold: "Development Services",
    description:
      "Crafting unforgettable online experiences through exceptional website design and development — where every detail is meticulously tailored to create a one-of-a-kind digital presence.",
    color: "#00D4FF",
    colorB: "#0066FF",
    image: "/images/HeroSection/slider-img-1.webp",
    stat1: { v: "12+", l: "Years Expertise" },
    stat2: { v: "5000+", l: "Projects Done" },
  },
  {
    tag: "Digital Marketing",
    eyebrow: "We Amplify Your",
    headline: "Search Visibility.",
    sub: "Professional Digital Marketing &",
    subBold: "SEO Services",
    description:
      "Improve your website visibility in search engine results and increase ranking with white-hat SEO strategies built for long-term, sustainable growth.",
    color: "#A855F7",
    colorB: "#6366F1",
    image: "/images/HeroSection/newimg.webp",
    stat1: { v: "3×", l: "Average ROI" },
    stat2: { v: "Top 3", l: "SERP Rankings" },
  },
];

const MARQUEE_ITEMS = [
  "Website Development","Digital Marketing","SEO Optimization",
  "UI/UX Design","Mobile Apps","E-Commerce","Brand Strategy","Performance Audits",
];

export default function HeroSection() {
  const [idx, setIdx]           = useState(0);
  const [tick, setTick]         = useState(0);
  const [phase, setPhase]       = useState("idle");
  const [scrollY, setScrollY]   = useState(0);
  const [form, setForm]         = useState({ first:"", last:"", email:"", phone:"", service:"" });
  const [submitted, setSubmitted] = useState(false);
  const [mouse, setMouse]       = useState({ x:0, y:0 });
  const [phoneCC, setPhoneCC]   = useState(COUNTRY_CODES.find(c => c.shortName === "IN"));
  const { showOTP, setShowOTP, otp, setOtp: setOTP, loading, sendOtp, resendOtp, verifyOtp } = useOtpFlow();
  const timerRef   = useRef(null);
  const sectionRef = useRef(null);
  const yearsExperience = useYearsExperience();

  const slide = slides[idx];
  const c  = slide.color;
  const cB = slide.colorB;

  /* scroll zoom */
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* mouse parallax */
  useEffect(() => {
    const fn = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: ((e.clientX - rect.left) / rect.width  - 0.5) * 2,
        y: ((e.clientY - rect.top)  / rect.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  /* auto-detect country from IP */
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(d => {
        const match = COUNTRY_CODES.find(c => c.shortName === d.country_code);
        if (match) setPhoneCC(match);
      })
      .catch(() => {});
  }, []);

  const imgScale = 1 + Math.min(scrollY * 0.00035, 0.14);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => advance((p) => (p + 1) % slides.length), 6500
    );
  };
  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  const advance = (fn) => {
    setPhase("exit");
    setTimeout(() => {
      setIdx(fn);
      setTick(t => t + 1);
      setPhase("enter");
      setTimeout(() => setPhase("idle"), 700);
    }, 380);
  };

  const goTo = (i) => {
    if (i === idx || phase !== "idle") return;
    advance(() => i);
    startTimer();
  };

  const getPhone = () => phoneCC.dialCode + form.phone;

  async function onSignup() {
    const { first, last, email, phone } = form;
    if (!first || !last || !email || !phone) {
      Swal.fire({ icon: "warning", title: "Missing Information", text: "Please fill out all the mandatory fields." });
      return;
    }
    await sendOtp(getPhone());
  }

  const onOTPVerify = async () => {
    await verifyOtp({
      phone: getPhone(),
      subject: "Future IT Touch New Lead - Homepage Hero Form",
      formData: {
        S_name: `${form.first} ${form.last}`.trim(),
        S_email: form.email,
        S_phone: form.phone,
        S_subject: form.service,
        cr_code: phoneCC.dialCode,
      },
      lead: { name: `${form.first} ${form.last}`.trim(), email: form.email, service: form.service },
      onSuccess: () => setSubmitted(true),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup();
  };

  const ex = phase === "exit" ? " hs-exit" : "";

  /* CSS vars injected once via a style tag — all dynamic color values */
  const cssVars = `
    :root {
      --hc:  ${c};
      --hcb: ${cB};
    }
  `;

  return (
    <section
      ref={sectionRef}
      className="hs-section relative overflow-hidden bg-[#05060F] flex items-center min-h-[calc(100vh-106px)]"
    >
      {/* ── Dynamic CSS vars + keyframes ── */}
      <style>{`
        ${cssVars}
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=Syne:wght@700;800&display=swap');

        /* ── Keyframes ── */
        @keyframes hsUp   { from{opacity:0;transform:translateY(28px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes hsFade { from{opacity:0}                              to{opacity:1} }
        @keyframes hsExit { from{opacity:1;transform:translateY(0)}      to{opacity:0;transform:translateY(-14px)} }
        @keyframes hsBgIn { from{opacity:0;transform:scale(1.09)}        to{opacity:1;transform:scale(1)} }
        @keyframes hsSpin { from{transform:rotate(0)}                    to{transform:rotate(360deg)} }
        @keyframes hsBar  { from{width:0%}                               to{width:100%} }
        @keyframes hsMrq  { from{transform:translateX(0)}                to{transform:translateX(-50%)} }
        @keyframes hsPing { 75%,100%{transform:scale(2.2);opacity:0} }
        @keyframes hsImgRev { from{opacity:0;transform:scale(.88) rotate(-3deg)} to{opacity:1;transform:scale(1) rotate(0)} }
        @keyframes hsFloat  { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-10px) rotate(1.5deg)} }
        @keyframes hsBlobMove {
          0%,100%{transform:translate(0,0) scale(1)}
          33%    {transform:translate(36px,-28px) scale(1.07)}
          66%    {transform:translate(-18px,22px) scale(.94)}
        }
        @keyframes hsGlowPulse { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes hsCardIn { from{opacity:0;transform:translateY(22px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes hsSweep  { from{left:-80%} to{left:140%} }

        /* ── Animation helper classes ── */
        .hs-e1  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .00s both }
        .hs-e2  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .07s both }
        .hs-e3  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .14s both }
        .hs-e4  { animation: hsUp   .65s cubic-bezier(.22,1,.36,1) .21s both }
        .hs-e5  { animation: hsFade .65s ease .29s both }
        .hs-e6  { animation: hsFade .65s ease .37s both }
        .hs-e7  { animation: hsCardIn .7s cubic-bezier(.22,1,.36,1) .15s both }
        .hs-exit{ animation: hsExit .38s ease-in both }

        .hs-bg-in  { animation: hsBgIn .9s cubic-bezier(.22,1,.36,1) both }
        .hs-img-in { animation: hsImgRev .75s cubic-bezier(.22,1,.36,1) both }
        .hs-bar    { animation: hsBar 6.5s linear both }
        .hs-float  { animation: hsFloat 8s ease-in-out infinite }
        .hs-blob   { animation: hsBlobMove 14s ease-in-out infinite }
        .hs-mrq    { display:flex; width:max-content; animation:hsMrq 22s linear infinite }

        .hs-spin-slow { animation: hsSpin 50s linear infinite; transform-origin: center }
        .hs-spin-med  { animation: hsSpin 32s linear infinite reverse; transform-origin: center }
        .hs-spin-fast { animation: hsSpin 22s linear infinite; transform-origin: center }
        .hs-spin-ring { animation: hsSpin 6s linear infinite }
        .hs-glow-bar  { animation: hsGlowPulse 3s ease-in-out infinite }

        /* ── Ping dot ── */
        .hs-ping { position:relative }
        .hs-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:hsPing 1.8s ease-out infinite;
        }

        /* ── Grain texture ── */
        .hs-section::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:4; opacity:.036;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ── Dot grid ── */
        .hs-dotgrid {
          background-image: radial-gradient(rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── Gradient text — uses CSS vars so it always reflects current slide color ── */
        .hs-grad-text {
          background: linear-gradient(120deg, #fff 0%, var(--hc) 50%, var(--hcb) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }
        .hs-grad-text-accent {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }
        .hs-grad-bg {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          transition: background 1s;
        }
        .hs-grad-bg-soft {
          background: linear-gradient(135deg, color-mix(in srgb, var(--hc) 22%, transparent), color-mix(in srgb, var(--hcb) 14%, transparent));
          transition: background 1s;
        }
        .hs-grad-border-glow {
          background: linear-gradient(135deg, color-mix(in srgb,var(--hc) 40%,transparent), color-mix(in srgb,var(--hcb) 25%,transparent), rgba(255,255,255,.05), color-mix(in srgb,var(--hc) 20%,transparent));
          transition: background 1s;
        }
        .hs-top-bar {
          background: linear-gradient(90deg, transparent 0%, var(--hc) 30%, var(--hcb) 70%, transparent 100%);
          transition: background 1s;
        }
        .hs-progress-bar {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          transition: background 1s;
        }
        .hs-tag-bg {
          background: linear-gradient(135deg, color-mix(in srgb,var(--hc) 18%,transparent), color-mix(in srgb,var(--hcb) 12%,transparent));
          border: 1px solid color-mix(in srgb, var(--hc) 30%, transparent);
          transition: all 1s;
        }
        .hs-tag-dot {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          transition: background 1s;
        }
        .hs-outlined-text {
          -webkit-text-stroke: 1px var(--hc);
          color: color-mix(in srgb, var(--hc) 28%, transparent);
          letter-spacing: 0.1em !important;
          transition: -webkit-text-stroke-color 1s, color 1s;
          font-family: 'Playfair Display', serif !important;
        }
        .hs-stat-val {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }
        .hs-dot-active {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          box-shadow: 0 0 12px color-mix(in srgb, var(--hc) 60%, transparent);
          transition: all .4s;
        }
        .hs-dot-inactive {
          background: rgba(255,255,255,.15);
          transition: all .4s;
        }
        .hs-badge-icon { fill: var(--hc); transition: fill 1s }
        .hs-badge-border { border: 1px solid color-mix(in srgb, var(--hc) 35%, transparent) }

        /* ── CTA gradient btn ── */
        .hs-btn-grad {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          box-shadow: 0 4px 28px color-mix(in srgb,var(--hc) 40%,transparent), 0 0 0 1px color-mix(in srgb,var(--hc) 20%,transparent);
          transition: transform .2s, box-shadow .2s, background 1s;
        }
        .hs-btn-grad:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 36px color-mix(in srgb,var(--hc) 55%,transparent), 0 0 0 1px color-mix(in srgb,var(--hc) 30%,transparent);
        }
        .hs-btn-outline {
          color: rgba(255,255,255,.52);
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.10);
          transition: color .2s, border-color .2s;
        }
        .hs-btn-outline:hover { color:#fff; border-color:rgba(255,255,255,.22) }

        /* shimmer sweep */
        .hs-sbtn { position:relative; overflow:hidden }
        .hs-sbtn::after {
          content:''; position:absolute; top:0; left:-80%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);
          transform:skewX(-18deg);
        }
        .hs-sbtn:hover::after { animation: hsSweep .55s ease forwards }

        /* ── Submit btn glow ── */
        .hs-submit-btn {
          background: linear-gradient(135deg, var(--hc), var(--hcb));
          box-shadow: 0 4px 24px color-mix(in srgb, var(--hc) 45%, transparent);
          transition: transform .2s, box-shadow .2s, background 1s;
        }
        .hs-submit-btn:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 10px 32px color-mix(in srgb, var(--hc) 60%, transparent);
        }

        /* ── Success check circle ── */
        .hs-success-ring {
          background: linear-gradient(135deg, color-mix(in srgb,var(--hc) 25%,transparent), color-mix(in srgb,var(--hcb) 15%,transparent));
          border: 2px solid var(--hc);
          box-shadow: 0 0 30px color-mix(in srgb, var(--hc) 40%, transparent);
          transition: all 1s;
        }
        .hs-success-icon { stroke: var(--hc); transition: stroke 1s }

        /* ── Form inputs ── */
        .hs-input {
          width: 100%;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 9px;
          padding: 10px 14px;
          color: #fff;
          font-size: 13px;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          transition: border-color .25s, box-shadow .25s, background .25s;
        }
        .hs-input::placeholder { color: rgba(255,255,255,.22) }
        .hs-input:focus {
          background: rgba(255,255,255,.07);
          border-color: var(--hc);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--hc) 14%, transparent);
        }
        .hs-select { appearance: none; cursor: pointer }
        .hs-select option { background: #0d0f1f; color: #fff }

        /* ── Blob bg ── */
        .hs-blob-main {
          background: radial-gradient(ellipse, color-mix(in srgb,var(--hc) 16%,transparent) 0%, color-mix(in srgb,var(--hcb) 8%,transparent) 45%, transparent 72%);
          transition: background 1s;
        }
        .hs-blob-secondary {
          background: radial-gradient(ellipse, color-mix(in srgb,var(--hcb) 12%,transparent) 0%, transparent 65%);
          transition: background 1s;
          animation: hsBlobMove 18s ease-in-out infinite reverse;
        }

        /* ── Ring SVG colors ── */
        .hs-ring-stroke-a { stroke: var(--hc); stroke-opacity: .07 }
        .hs-ring-stroke-b { stroke: var(--hcb); stroke-opacity: .08 }

        /* ── Horiz accent line ── */
        .hs-h-line {
          background: linear-gradient(90deg, transparent 0%, color-mix(in srgb,var(--hc) 20%,transparent) 30%, color-mix(in srgb,var(--hc) 35%,transparent) 50%, color-mix(in srgb,var(--hcb) 20%,transparent) 70%, transparent 100%);
          transition: background 1s;
        }

        /* ── Circular image ring ── */
        .hs-img-ring {
          background: conic-gradient(var(--hc), var(--hcb), rgba(255,255,255,.2), var(--hc));
          transition: background 1s;
        }
        .hs-img-overlay {
          background: radial-gradient(ellipse at 70% 30%, color-mix(in srgb,var(--hc) 22%,transparent) 0%, transparent 65%);
          transition: background 1s;
        }

        /* ── Marquee separator ── */
        .hs-mrq-sep {
          background: linear-gradient(90deg, var(--hc), var(--hcb));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          transition: background 1s;
        }

        /* ── Responsive font for headline ── */
        .hs-headline {
          font-size: clamp(2rem, 5.5vw, 3.8rem);
          white-space: nowrap;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }
        @media (max-width: 480px) {
          .hs-headline { font-size: clamp(1.7rem, 8vw, 2.4rem) }
        }

        .hs-subBold {
          font-family: 'Syne', sans-serif;
          font-size: clamp(.9rem, 2vw, 1.35rem);
          font-weight: 700;
          letter-spacing: -0.015em;
        }
        .hs-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 800;
          line-height: 1;
        }
        .hs-form-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.015em;
        }
        .hs-success-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
        }
      `}</style>

      {/* ══ BG IMAGE — scroll zoom ══ */}
      <div
        key={`bg-${tick}`}
        className="hs-bg-in absolute inset-0 z-0"
        style={{ transform:`scale(${imgScale})`, transformOrigin:"center", transition:"transform .06s linear" }}
      >
        <img src={slide.image} alt="" aria-hidden="true" className="w-full h-full object-cover object-center block" />
      </div>

      {/* ── Overlays ── */}
      {/* Dark gradient */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background:"linear-gradient(115deg,rgba(5,6,15,.97) 0%,rgba(5,6,15,.92) 42%,rgba(5,6,15,.72) 68%,rgba(5,6,15,.28) 100%)" }}
      />

      {/* Blob main */}
      <div
        className="hs-blob hs-blob-main absolute z-[2] pointer-events-none"
        style={{
          top:"10%", left:"-5%",
          width:"min(520px,80vw)", height:"min(480px,70vw)",
          borderRadius:"60% 40% 55% 45%/50% 60% 40% 50%",
          transform:`translate(${mouse.x*20}px,${mouse.y*14}px)`,
        }}
      />
      {/* Blob secondary */}
      <div
        className="hs-blob-secondary absolute z-[2] pointer-events-none rounded-full"
        style={{ bottom:"-15%", right:"20%", width:"min(400px,60vw)", height:"min(380px,55vw)" }}
      />

      {/* Dot grid */}
      <div className="hs-dotgrid absolute inset-0 z-[2] pointer-events-none" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-36 z-[3] pointer-events-none"
        style={{ background:"linear-gradient(to top,rgba(5,6,15,1) 0%,transparent 100%)" }}
      />

      {/* SVG Rings */}
      <div
        className="absolute z-[3] pointer-events-none hidden sm:block"
        style={{
          top:-130, right:-90, width:420, height:420,
          transform:`translate(${mouse.x*-18}px,${mouse.y*-12}px)`,
          transition:"transform .8s ease",
        }}
      >
        <svg viewBox="0 0 420 420" fill="none" width="420" height="420">
          <defs>
            <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={c} stopOpacity=".22"/>
              <stop offset="100%" stopColor={cB} stopOpacity=".04"/>
            </linearGradient>
          </defs>
          <circle cx="210" cy="210" r="190" stroke="url(#rg1)" strokeWidth="1"
            strokeDasharray="70 110" strokeLinecap="round" className="hs-spin-slow"/>
          <circle cx="210" cy="210" r="140" strokeWidth="1"
            strokeDasharray="45 75" strokeLinecap="round" className="hs-spin-med hs-ring-stroke-a"/>
          <circle cx="210" cy="210" r="90" strokeWidth="1"
            strokeDasharray="28 48" strokeLinecap="round" className="hs-spin-fast hs-ring-stroke-b"/>
        </svg>
      </div>

      {/* Horizontal accent line */}
      <div className="hs-h-line absolute top-1/2 left-0 right-0 h-px z-[3] pointer-events-none" />

      {/* ══ MAIN LAYOUT ══ */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center min-h-[calc(100vh-106px)]">

        {/* ════ LEFT — Text ════ */}
        <div className="flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-[5vw] pt-10 pb-6 lg:py-0 w-full lg:w-[53%]">

          {/* Progress bar */}
          <div className="relative w-full max-w-[500px] h-px bg-white/[.08] mb-8 overflow-hidden rounded-full">
            <div key={`bar-${tick}`} className="hs-bar hs-progress-bar absolute left-0 top-0 h-full rounded-full" />
          </div>

          {/* Tag + counter */}
          <div className={`hs-e1${ex} flex items-center justify-between max-w-[500px] mb-5`}>
            <div className="hs-tag-bg inline-flex items-center gap-2 rounded-full px-3 py-1.5">
              <span className="hs-ping hs-tag-dot w-[7px] h-[7px] rounded-full flex-shrink-0 block" />
              <span className="hs-grad-text-accent text-[9.5px] font-semibold tracking-[.22em] uppercase">
                {slide.tag}
              </span>
            </div>
            <span className="text-[11px] text-white/20 font-bold tracking-[.12em]" style={{fontFamily:"'Syne',sans-serif"}}>
              0{idx+1} <span className="text-white/10">—</span> 0{slides.length}
            </span>
          </div>

          {/* Eyebrow */}
          <p className={`hs-e2${ex} text-sm sm:text-base text-white/40 font-light italic mb-1 tracking-[.02em]`}>
            {slide.eyebrow}
          </p>

          {/* Headline — single line, gradient on last word via split */}
          <div key={`hl-${tick}`} className={`hs-e3${ex} mb-2`}>
            <h1 className="hs-headline m-0">
              {(() => {
                const words = slide.headline.split(" ");
                const last  = words.pop();
                return (
                  <>
                    <span className="text-white">{words.join(" ")}{words.length ? " " : ""}</span>
                    <span className="hs-grad-text">{last}</span>
                  </>
                );
              })()}
            </h1>
          </div>

          {/* Sub headline */}
          <div className={`hs-e4${ex} flex flex-col gap-0.5 mb-4`}>
            <span className="text-[13px] text-white/70 font-normal tracking-[.01em]">{slide.sub}</span>
            <span className="hs-subBold hs-outlined-text">{slide.subBold}</span>
          </div>

          {/* Description */}
          <p className={`hs-e5${ex} text-[13.5px] text-white/75 leading-[1.82] max-w-[430px] mb-7 font-normal`}>
            {slide.description}
          </p>

          {/* CTAs */}
          <div className={`hs-e6${ex} flex flex-wrap items-center gap-3 mb-8`}>
            <a
              href="#scroll-down"
              className="hs-btn-grad hs-sbtn inline-flex items-center gap-2 font-bold text-[11px] tracking-[.12em] uppercase px-6 py-3 rounded-lg text-white no-underline"
            >
              Get Started
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5h8M5.5 1.5l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link
              href="/our-portfolio"
              className="hs-btn-outline inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.10em] uppercase px-5 py-3 rounded-lg no-underline"
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1 4.5h7M4.5 1l3.5 3.5L4.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Portfolio
            </Link>
          </div>

          {/* Stats + dots */}
          <div className={`hs-e6${ex} flex items-stretch max-w-[460px] pt-5 border-t border-white/[.06]`}>
            {[slide.stat1, slide.stat2].map((st, si) => (
              <div
                key={si}
                className={`flex-1 ${si===0 ? "pr-6 border-r border-white/[.06]" : "pl-6"}`}
              >
                <div className="hs-stat-num hs-stat-val mb-1">{st.l === "Years Expertise" ? yearsExperience : st.v}</div>
                <div className="text-[10px] text-white/[.28] tracking-[.10em] uppercase font-medium">{st.l}</div>
              </div>
            ))}
            {/* Slide dots */}
            <div className="flex-1 flex items-end justify-end gap-1.5 pb-0.5">
              {slides.map((_,i) => (
                <button
                  key={i}
                  onClick={()=>goTo(i)}
                  aria-label={`Slide ${i+1}`}
                  className={`border-none cursor-pointer p-0 rounded-full block ${i===idx ? "hs-dot-active w-7 h-2" : "hs-dot-inactive w-2 h-2"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ════ RIGHT — Form ════ */}
        <div className="flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-[3vw] lg:pr-[5vw] pt-2 pb-12 lg:py-0 w-full lg:w-[47%]">
          <div className="w-full max-w-[420px] lg:max-w-[390px] relative hs-e7">

            {/* Gradient border glow */}
            <div className="hs-grad-border-glow absolute -inset-px rounded-[22px] z-0" />

            {/* Card */}
            <div className="relative z-10 rounded-[21px] p-6 sm:p-7 overflow-hidden bg-[rgba(7,9,22,0.82)] backdrop-blur-[32px]">

              {/* Top shimmer bar */}
              <div className="hs-top-bar hs-glow-bar absolute top-0 left-0 right-0 h-0.5 rounded-t-[21px]" />

              {/* Floating circular image */}
              <div className="hs-float absolute -top-11 -right-5 w-[120px] h-[120px] sm:w-[132px] sm:h-[132px] rounded-full z-10">
                <div className="hs-spin-ring hs-img-ring absolute -inset-[3px] rounded-full z-0" />
                <div className="absolute inset-[3px] rounded-full overflow-hidden z-10 bg-[#07091A]">
                  <img key={`ci-${tick}`} className="hs-img-in w-full h-full object-cover object-center" src={slide.image} alt="" />
                  <div className="hs-img-overlay absolute inset-0" />
                </div>
              </div>

              {/* Badge */}
              <div className="hs-grad-bg-soft hs-badge-border inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 mb-5">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1l1.3 2.6L10 4.1 8 6l.5 2.9L6 7.6 3.5 8.9 4 6 2 4.1l2.7-.5z" className="hs-badge-icon"/>
                </svg>
                <span className="hs-grad-text-accent text-[9px] font-bold tracking-[.18em] uppercase">
                  Let's Build Together
                </span>
              </div>

              <h3 className="hs-form-title text-white mb-5">Start Your Project Today</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="hs-success-ring w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12l5.5 5.5 10.5-10" className="hs-success-icon" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="hs-success-title text-white text-[15px] mb-1.5">Message Received!</p>
                  <p className="text-white/40 text-[13px]">Our team will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {[{k:"first",ph:"First Name"},{k:"last",ph:"Last Name"}].map(f=>(
                      <div key={f.k}>
                        <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5" htmlFor={`hs_${f.k}`}>{f.ph}</label>
                        <input id={`hs_${f.k}`} className="hs-input" placeholder={f.ph} value={form[f.k]}
                          onChange={e=>setForm({...form,[f.k]:e.target.value})} required />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5" htmlFor="hs_email">Email Address</label>
                    <input id="hs_email" className="hs-input" type="email" placeholder="john@example.com"
                      value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5" htmlFor="hs_phone">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pr-2 border-r border-white/10 pointer-events-none"
                        style={{ color: "rgba(255,255,255,.45)", fontSize: 12, fontWeight: 500 }}>
                        <span style={{ fontSize: 14 }}>{phoneCC.flag}</span>
                        <span>{phoneCC.dialCode}</span>
                      </span>
                      <input id="hs_phone" className="hs-input phone-autofill-fix" style={{ paddingLeft: 72 }} type="tel" placeholder="98765 43210"
                        value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[9.5px] text-white/30 tracking-[.12em] uppercase mb-1.5" htmlFor="hs_service">Select Service</label>
                    <div className="relative">
                      <select id="hs_service" className="hs-input hs-select" value={form.service}
                        onChange={e=>setForm({...form,service:e.target.value})} required>
                        <option value="" disabled>Choose your service</option>
                        {SERVICES.map(s=><option key={s} value={s}>{s}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5l3 3 3-3" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="h-px bg-white/[.06] my-0.5" />

                  <button type="submit" disabled={loading} className="hs-submit-btn hs-sbtn w-full py-3.5 rounded-[9px] font-extrabold text-[11px] tracking-[.14em] uppercase border-none cursor-pointer flex items-center justify-center gap-2 text-white disabled:opacity-60" style={{fontFamily:"inherit"}}>
                    {loading ? (
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        Submit Now
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-white/20 text-center m-0 tracking-[.04em]">
                    Free consultation · No spam · Reply within 24h
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <OtpVerifyModal
        show={showOTP}
        onClose={() => setShowOTP(false)}
        otp={otp}
        setOtp={setOTP}
        onVerify={onOTPVerify}
        onResend={() => resendOtp(getPhone())}
        loading={loading}
      />

      {/* ══ MARQUEE ══ */}
      <div className="absolute bottom-0 left-0 right-0 h-[30px] z-20 overflow-hidden flex items-center border-t border-white/[.04] backdrop-blur-md bg-[rgba(5,6,15,.88)]">
        <div className="hs-mrq">
          {Array(2).fill(MARQUEE_ITEMS).flat().map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-[8.5px] text-white/[.50] tracking-[.24em] uppercase font-medium whitespace-nowrap px-5">{item}</span>
              <span className="hs-mrq-sep text-[7px] opacity-35">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}