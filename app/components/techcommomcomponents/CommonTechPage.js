"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CommonSlider from "./CommonSlider";
import GetNewInsight from "../GetNewInsight";
import { COUNTRY_CODES } from "../countryData";
import { SERVICES } from "../../data/services";
import { swalFire } from "../../lib/swal";
import useOtpFlow from "../../lib/useOtpFlow";
import OtpVerifyModal from "../OtpVerifyModal";
import ServiceSchema from "../schema/ServiceSchema";
import FaqSchema from "../schema/FaqSchema";
import BreadcrumbSchema from "../schema/BreadcrumbSchema";

// Animated gradient text — static string so Tailwind v4 scans it at build time
const HL = "bg-[linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7)] bg-[length:200%_200%] bg-clip-text text-transparent [animation:tcpGrad_5s_ease-in-out_infinite]";

const PALETTE = [
  { from: "#2dd4bf", to: "#06b6d4" },
  { from: "#6366f1", to: "#4f46e5" },
  { from: "#a855f7", to: "#7c3aed" },
  { from: "#10b981", to: "#059669" },
  { from: "#f59e0b", to: "#d97706" },
  { from: "#ec4899", to: "#db2777" },
];

export default function CommonTechPage({
  banner   = {},
  intro    = {},
  services = [],
  process  = [],
  features = [],
  stack    = [],
  slider   = [],
  faq      = {},
  areaServed = "Worldwide",
  breadcrumbs,
}) {
  const pathname = usePathname();
  const [openFaq,  setOpenFaq]  = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "", cr_code: "+91" });
  const { showOTP, setShowOTP, otp, setOtp: setOTP, loading, sendOtp, resendOtp, verifyOtp } = useOtpFlow();

  const handleField = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  // Auto-detect the visitor's country code from their IP
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(d => {
        const match = COUNTRY_CODES.find(c => c.shortName === d.country_code);
        if (match) setFormData(prev => ({ ...prev, cr_code: match.dialCode }));
      })
      .catch(() => {});
  }, []);

  const getPhone = () => formData.cr_code + formData.phone;

  async function onSignup() {
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      swalFire({ icon: "warning", title: "Missing Information", text: "Please fill out all the mandatory fields." });
      return;
    }
    await sendOtp(getPhone());
  }

  const onOTPVerify = async () => {
    await verifyOtp({
      phone: getPhone(),
      subject: `Future IT Touch New Lead - ${banner.breadcrumb || banner.title || "Technology"} Page`,
      formData: {
        S_name: formData.name,
        S_email: formData.email,
        S_phone: formData.phone,
        S_subject: formData.service,
        cr_code: formData.cr_code,
        message: formData.message,
      },
      lead: { name: formData.name, email: formData.email, service: formData.service, message: formData.message },
      onSuccess: () => setFormSent(true),
    });
  };

  async function handleResendOTP() {
    await resendOtp(getPhone());
  }

  const handleSubmit = (e) => { e.preventDefault(); onSignup(); };

  const ac   = (i) => PALETTE[i % PALETTE.length];
  const grad = (a, dir = "135deg") => `linear-gradient(${dir},${a.from},${a.to})`;

  const bgSrc       = banner.bgImage || "/Assets/stock/photo-1518770660439-4636190af475.webp";
  const highlights  = intro.highlights || features.slice(0, 4).map(f => f.title);
  const expertItems = features.slice(0, 5);

  const Chevron = () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path d="M2 1.5l3 2.5-3 2.5" stroke="rgba(255,255,255,.24)"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const breadcrumbItems = breadcrumbs || [{ name: "Home", path: "/" }, { name: banner.breadcrumb || banner.title, path: pathname }];

  return (
    <>
      <ServiceSchema name={banner.breadcrumb || banner.title} description={banner.tagline} areaServed={areaServed} />
      <BreadcrumbSchema items={breadcrumbItems} />
      {faq.items && faq.items.length > 0 && (
        <FaqSchema items={faq.items.map((item) => ({ question: item.title, answer: item.description }))} />
      )}

      {/* ════════════════════════════════
          1. BANNER
      ════════════════════════════════ */}
      <section className="relative overflow-hidden overflow-x-clip font-['Inter',sans-serif]">
        <Image src={bgSrc} alt={banner.title || "Technology"} fill priority unoptimized
          className="object-cover object-center brightness-[.45]" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,5,24,.97)_0%,rgba(8,14,40,.90)_45%,rgba(4,5,24,.60)_100%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(45,212,191,.08)_0%,transparent_45%,rgba(99,102,191,.10)_100%)]" />
        <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:26px_26px]" />

        {/* Colour orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[560px] h-[560px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.18),transparent_62%)]" />
        <div className="absolute bottom-[-15%] right-[25%] w-[480px] h-[480px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.16),transparent_62%)]" />
        <div className="absolute top-[30%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,.12),transparent_62%)]" />

        {/* Scan beam */}
        <div className="absolute pointer-events-none top-[38%] left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(45,212,191,.55),rgba(99,102,241,.40),transparent)] [animation:tcpBeam_3.8s_ease-in-out_infinite]" />

        {/* Desktop rules */}
        <div className="absolute pointer-events-none top-[15%] left-0 right-0 h-px hidden lg:block bg-[linear-gradient(90deg,rgba(45,212,191,.08),transparent_60%)]" />
        <div className="absolute pointer-events-none bottom-[15%] left-0 right-0 h-px hidden lg:block bg-[linear-gradient(90deg,transparent_40%,rgba(99,102,241,.08))]" />

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-10 xl:px-16 py-14 sm:py-20 lg:py-28 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0 text-center lg:text-left lg:pr-8 [animation:tcpSlide_.7s_cubic-bezier(.22,1,.36,1)_.05s_both] w-full">

            {/* Breadcrumb */}
            <nav className="flex items-center justify-center lg:justify-start gap-2 flex-wrap mb-5 font-['Poppins',sans-serif] text-[10px] sm:text-[10.5px] font-semibold tracking-[.18em] uppercase">
              <Link href="/" className="text-white/40 no-underline hover:text-[#2dd4bf] transition-colors duration-200">Home</Link>
              <Chevron />
              {banner.category && (
                <>
                  <span className="text-white/40">{banner.category}</span>
                  <Chevron />
                </>
              )}
              <span className="text-[#2dd4bf]">{banner.breadcrumb || banner.title}</span>
            </nav>

            {/* Category badge */}
            {banner.category && (
              <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf]">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 inline-block animate-ping bg-[#2dd4bf]" />
                {banner.category}
                <span className="w-px h-4 bg-[#2dd4bf]/25" />
                <span>Future IT Touch</span>
              </div>
            )}

            {/* Title */}
            <h1 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.55rem,3.6vw,3rem)] leading-[1.15] tracking-[-0.01em] text-white mb-4 break-words">
              {banner.title?.split("·").map((part, i, arr) => (
                <span key={i}>
                  {i > 0 && <>{" "}<span className="text-[#2dd4bf]/60 mx-1">·</span>{" "}</>}
                  {i === arr.length - 1
                    ? <span className={HL}>{part.trim()}</span>
                    : part.trim()}
                </span>
              )) || <span className={HL}>{banner.title}</span>}
            </h1>

            {/* Accent bar */}
            <div className="h-[3px] w-12 rounded-full mb-4 mx-auto lg:mx-0 bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] [transform-origin:left] [animation:tcpBar_.75s_cubic-bezier(.22,1,.36,1)_.22s_both]" />

            {/* Tagline */}
            {banner.tagline && (
              <p className="text-white/70 text-[.92rem] sm:text-[1rem] lg:[font-size:clamp(.95rem,1.6vw,1.15rem)] leading-[1.65] max-w-xl mb-7 mx-auto lg:mx-0">
                {banner.tagline}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline hover:shadow-[0_8px_28px_rgba(99,102,241,.45)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                Get Started
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              
            <a
              href="https://www.upwork.com/freelancers/vinodk97" target="_blank" rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-[Poppins,sans-serif] text-sm font-semibold text-purple-100 no-underline backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-400/50 hover:bg-white/10 sm:w-auto"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                <line x1="12" y1="12" x2="12.01" y2="12" />
              </svg>
              Hire Now
            </a>
            </div>

            {/* Quick stats strip */}
            {intro.stats && intro.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center lg:flex-wrap gap-4 lg:gap-0 justify-items-center lg:justify-start">
                {intro.stats.map((st, i) => {
                  const a = ac(i);
                  return (
                    <div key={i} className="flex items-center lg:mr-5 last:lg:mr-0">
                      {i > 0 && <div className="hidden lg:block w-px h-8 bg-white/10 mr-5" />}
                      <div className="text-center lg:text-left">
                        <div className="font-['Poppins',sans-serif] font-extrabold text-xl sm:text-2xl bg-clip-text text-transparent"
                          style={{ backgroundImage: grad(a, "90deg") }}>
                          {st.num}
                        </div>
                        <div className="text-white/50 text-[10px] sm:text-xs tracking-wide">{st.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── RIGHT — query form ── */}
          <div className="relative w-full max-w-[440px] flex-shrink-0 lg:w-[430px] mx-auto lg:mx-0">
            {/* Spinning arc rings — desktop only (layout is 2-col only on lg+) */}
            <svg className="hidden lg:block absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none [animation:tcpSpin_22s_linear_infinite]"
              viewBox="0 0 520 520" fill="none" aria-hidden="true">
              <circle cx="260" cy="260" r="246" stroke="rgba(45,212,191,.09)" strokeWidth="1" strokeDasharray="55 90" strokeLinecap="round" />
              <circle cx="260" cy="260" r="222" stroke="rgba(99,102,241,.07)" strokeWidth=".8" strokeDasharray="35 70" strokeLinecap="round" />
            </svg>
            <svg className="hidden lg:block absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none [animation:tcpSpinR_34s_linear_infinite]"
              viewBox="0 0 480 480" fill="none" aria-hidden="true">
              <circle cx="240" cy="240" r="218" stroke="rgba(168,85,247,.08)" strokeWidth=".8" strokeDasharray="25 60" strokeLinecap="round" />
            </svg>

            {/* Glass form card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[.12] bg-white/[.055] [backdrop-filter:blur(24px)]">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

              {formSent ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center px-8 py-14 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: grad(ac(0)), boxShadow: `0 0 0 8px ${ac(0).from}18` }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 14l6 6L22 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-['Poppins',sans-serif] font-extrabold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">
                    Thank you! Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => { setFormSent(false); setFormData(p => ({ name: "", email: "", phone: "", service: "", message: "", cr_code: p.cr_code })); }}
                    className="px-5 py-2 rounded-full border border-white/20 text-white/70 text-xs font-['Poppins',sans-serif] font-semibold hover:bg-white/[.08] transition-all duration-200">
                    Send Another
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <>
                  {/* Header */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping flex-shrink-0" />
                      <span className="text-[#2dd4bf] font-['Poppins',sans-serif] font-bold text-[9px] tracking-[.22em] uppercase">Free Consultation</span>
                    </div>
                    <h3 className="font-['Poppins',sans-serif] font-extrabold text-white text-[1.15rem] leading-tight">
                      Get a Quick Quote
                    </h3>
                    <p className="text-white/40 text-[11px] mt-1 font-['Inter',sans-serif]">
                      Response within 24 hrs · No commitment required
                    </p>
                  </div>

                  <div className="h-px bg-white/[.07] mx-6" />

                  <form onSubmit={handleSubmit} className="px-6 py-5 space-y-3">

                    {/* Full name */}
                    <div>
                      <label htmlFor="tcp_name" className="block text-white/45 font-['Poppins',sans-serif] font-semibold text-[9px] tracking-[.18em] uppercase mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="tcp_name" type="text" name="name" required
                        value={formData.name} onChange={handleField}
                        placeholder="John Smith"
                        className="w-full bg-white/[.06] border border-white/[.10] rounded-xl px-4 py-2.5 text-white text-[12.5px] font-['Inter',sans-serif] placeholder-white/20 focus:outline-none focus:border-[#2dd4bf]/45 focus:bg-white/[.09] transition-all duration-200" />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label htmlFor="tcp_email" className="block text-white/45 font-['Poppins',sans-serif] font-semibold text-[9px] tracking-[.18em] uppercase mb-1.5">Email</label>
                        <input
                          id="tcp_email" type="email" name="email" required
                          value={formData.email} onChange={handleField}
                          placeholder="you@email.com"
                          className="w-full bg-white/[.06] border border-white/[.10] rounded-xl px-3 py-2.5 text-white text-[11.5px] font-['Inter',sans-serif] placeholder-white/20 focus:outline-none focus:border-[#2dd4bf]/45 focus:bg-white/[.09] transition-all duration-200" />
                      </div>
                      <div>
                        <label htmlFor="tcp_phone" className="block text-white/45 font-['Poppins',sans-serif] font-semibold text-[9px] tracking-[.18em] uppercase mb-1.5">Phone</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pr-2 border-r border-white/10 pointer-events-none"
                            style={{ color: "rgba(255,255,255,.45)", fontSize: 11, fontWeight: 500 }}>
                            <span style={{ fontSize: 13 }}>
                              {COUNTRY_CODES.find(c => c.dialCode === formData.cr_code)?.flag ?? "🌐"}
                            </span>
                            <span>{formData.cr_code}</span>
                          </span>
                          <input
                            id="tcp_phone" type="tel" name="phone"
                            value={formData.phone} onChange={handleField}
                            placeholder="98765 43210"
                            style={{ paddingLeft: 62 }}
                            className="phone-autofill-fix w-full bg-white/[.06] border border-white/[.10] rounded-xl pr-3 py-2.5 text-white text-[11.5px] font-['Inter',sans-serif] placeholder-white/20 focus:outline-none focus:border-[#2dd4bf]/45 focus:bg-white/[.09] transition-all duration-200" />
                        </div>
                      </div>
                    </div>

                    {/* Service select */}
                    <div>
                      <label htmlFor="tcp_service" className="block text-white/45 font-['Poppins',sans-serif] font-semibold text-[9px] tracking-[.18em] uppercase mb-1.5">Service Needed</label>
                      <div className="relative">
                        <select
                          id="tcp_service" name="service"
                          value={formData.service} onChange={handleField}
                          className="w-full appearance-none bg-white/[.06] border border-white/[.10] rounded-xl px-4 py-2.5 text-white/70 text-[12px] font-['Inter',sans-serif] focus:outline-none focus:border-[#2dd4bf]/45 focus:bg-white/[.09] transition-all duration-200 pr-9">
                          <option value="" className="bg-[#080e28] text-white/70">Select a service…</option>
                          {SERVICES.map(s => (
                            <option key={s} value={s} className="bg-[#080e28] text-white">{s}</option>
                          ))}
                        </select>
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-3.5 h-3.5 text-white/35" fill="none" viewBox="0 0 14 14">
                          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="tcp_message" className="block text-white/45 font-['Poppins',sans-serif] font-semibold text-[9px] tracking-[.18em] uppercase mb-1.5">Message</label>
                      <textarea
                        id="tcp_message" name="message" rows={2}
                        value={formData.message} onChange={handleField}
                        placeholder="Briefly describe your project or requirements…"
                        className="w-full bg-white/[.06] border border-white/[.10] rounded-xl px-4 py-2.5 text-white text-[12px] font-['Inter',sans-serif] placeholder-white/20 focus:outline-none focus:border-[#2dd4bf]/45 focus:bg-white/[.09] transition-all duration-200 resize-none" />
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={loading}
                      className="w-full py-3 rounded-xl text-white font-['Poppins',sans-serif] font-bold text-sm tracking-[.06em] uppercase hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(45,212,191,.30)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                      style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}>
                      {loading ? (
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-white/25 text-[10px] text-center font-['Inter',sans-serif]">
                      🔒 Your information is 100% secure &amp; never shared
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
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
      </section>

      {/* ════════════════════════════════
          2. INTRO + STATS
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[linear-gradient(155deg,#f4f8ff_0%,#ffffff_50%,#f0f4ff_100%)] font-['Inter',sans-serif]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16">

          {/* Centered heading */}
          <div className="text-center mb-12">
            {intro.badge && (
              <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#2dd4bf]/26 bg-[#2dd4bf]/[.09] mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#0d9488]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping flex-shrink-0 inline-block" />
                {intro.badge}
              </div>
            )}
            <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,3vw,2.2rem)] leading-[1.15] text-[#0f172a] mb-4">
              {intro.heading}{" "}
              {intro.highlight && <span className={HL}>{intro.highlight}</span>}
            </h2>
            <div className="h-[3px] w-12 rounded-full bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] mx-auto" />
          </div>

          {/* Two-column body */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-14 lg:items-start">

            {/* LEFT: paragraphs + highlights + CTAs */}
            <div className="flex-1">
              {intro.paras?.map((p, i) => (
                <p key={i} className="text-[#475569] leading-[1.75] text-[.97rem] mb-4">{p}</p>
              ))}

              {highlights.length > 0 && (
                <ul className="mt-6 mb-8 space-y-3">
                  {highlights.map((h, i) => {
                    const a = ac(i);
                    return (
                      <li key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-[#6366f1]/25 hover:shadow-[0_6px_22px_rgba(99,102,241,.10)] hover:translate-x-1 transition-all duration-200">
                        <span className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs"
                          style={{ background: grad(a) }}>✓</span>
                        <span className="text-[#334155] text-[.9rem] font-medium">{h}</span>
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] no-underline hover:shadow-[0_8px_24px_rgba(99,102,241,.40)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                  Start Your Project
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6366f1]/30 text-[#4f46e5] font-['Poppins',sans-serif] text-sm font-semibold no-underline hover:bg-[#6366f1]/[.06] transition-all duration-200">
                  View Portfolio →
                </Link>
              </div>
            </div>

            {/* RIGHT: expertise card */}
            <div className="w-full lg:w-[340px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,.08)]">
                <div className="px-6 py-5 bg-[linear-gradient(150deg,#04071a,#080e28)]">
                  <div className={`font-['Poppins',sans-serif] font-bold text-[.8rem] tracking-[.18em] uppercase mb-1 ${HL}`}>
                    Our Expertise
                  </div>
                  <p className="text-white/55 text-xs">What sets our team apart</p>
                </div>
                <div className="bg-white divide-y divide-slate-100">
                  {expertItems.map((item, i) => {
                    const a = ac(i);
                    return (
                      <div key={i} className="flex items-start gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors duration-150">
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs"
                          style={{ background: grad(a) }}>
                          {item.icon || "✦"}
                        </span>
                        <div>
                          <div className="text-[#0f172a] text-[.85rem] font-semibold font-['Poppins',sans-serif] leading-tight">{item.title}</div>
                          <div className="text-[#64748b] text-[.78rem] mt-0.5 line-clamp-1">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          {intro.stats && intro.stats.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {intro.stats.map((st, i) => {
                const a = ac(i);
                return (
                  <div key={i}
                    className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-5 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(99,102,241,.14)] transition-all duration-300 group">
                    {/* Top strip reveals on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                      style={{ background: grad(a, "90deg") }} />
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm mb-3"
                      style={{ background: grad(a) }}>
                      {st.icon || "◆"}
                    </div>
                    {/* Number */}
                    <div className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,2.5vw,1.9rem)] bg-clip-text text-transparent"
                      style={{ backgroundImage: grad(a, "90deg") }}>
                      {st.num}
                    </div>
                    <div className="font-['Poppins',sans-serif] font-semibold text-[#0f172a] text-sm mb-1">{st.label}</div>
                    {st.desc && <p className="text-[#64748b] text-xs leading-relaxed">{st.desc}</p>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════
          3. SERVICES
      ════════════════════════════════ */}
      {services.length > 0 && (
        <section className="py-20 lg:py-28 bg-[linear-gradient(150deg,#04071a,#080e28_55%,#050b20)] font-['Inter',sans-serif]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#2dd4bf]/28 bg-[#2dd4bf]/10 mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping inline-block flex-shrink-0" />
                Our Services
              </div>
              <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,3vw,2.2rem)] leading-[1.15] text-white mb-4">
                What We <span className={HL}>Deliver</span>
              </h2>
              <div className="h-[3px] w-12 rounded-full bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((svc, i) => {
                const a = ac(i);
                return (
                  <div key={i}
                    className="relative overflow-hidden rounded-2xl bg-white/[.04] border border-white/[.08] p-6 hover:border-white/[.15] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,.3)] transition-all duration-300 group">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[.05] transition-opacity duration-300 pointer-events-none"
                      style={{ background: grad(a) }} />
                    <div className="relative flex items-start gap-4">
                      <div className="font-['Poppins',sans-serif] font-extrabold text-3xl leading-none flex-shrink-0 select-none"
                        style={{ color: `${a.from}30` }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                            style={{ background: grad(a) }}>
                            {svc.icon}
                          </span>
                          <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[.97rem]">{svc.title}</h3>
                        </div>
                        <p className="text-white/55 text-[.88rem] leading-relaxed mb-3">{svc.desc}</p>
                        {svc.points && (
                          <ul className="flex flex-wrap gap-1.5">
                            {svc.points.map((pt, pi) => (
                              <li key={pi}
                                className="text-[10px] font-['Poppins',sans-serif] font-semibold tracking-[.1em] uppercase px-2.5 py-1 rounded-full bg-white/[.06] border border-white/[.10] text-white/60">
                                {pt}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════
          4. PROCESS
      ════════════════════════════════ */}
      {process.length > 0 && (
        <section className="py-20 lg:py-28 bg-[linear-gradient(155deg,#f4f8ff,#ffffff_50%,#f0f4ff)] font-['Inter',sans-serif] overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-10 xl:px-16">

            {/* Heading */}
            <div className="text-center mb-14 lg:mb-20">
              <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#6366f1]/26 bg-[#6366f1]/[.09] mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#4f46e5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-ping inline-block flex-shrink-0" />
                Our Process
              </div>
              <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,3vw,2.2rem)] leading-[1.15] text-[#0f172a] mb-4">
                How We <span className={HL}>Work</span>
              </h2>
              <div className="h-[3px] w-12 rounded-full bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] mx-auto mb-4" />
              <p className="text-[#64748b] text-[.9rem] max-w-md mx-auto">
                A proven, repeatable workflow refined over a decade of delivering successful projects.
              </p>
            </div>

            {/* ── Timeline ── */}
            <div className="relative">

              {/* Vertical gradient center line — desktop only */}
              <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 rounded-full pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent 0%, #2dd4bf 12%, #6366f1 50%, #a855f7 88%, transparent 100%)" }} />

              {process.map((step, i) => {
                const a      = ac(i);
                const isLeft = i % 2 === 0;
                const isLast = i === process.length - 1;

                /* Shared card markup (rendered once, placed left or right via grid) */
                const StepCard = (
                  <div className="w-full max-w-[380px] bg-white rounded-2xl border border-slate-100 p-6 hover:-translate-y-1 hover:border-[#6366f1]/20 hover:shadow-[0_16px_48px_rgba(99,102,241,.13)] transition-all duration-300 overflow-hidden group relative">
                    {/* Giant watermark number */}
                    <div className="absolute -top-3 -right-2 font-['Poppins',sans-serif] font-extrabold text-[88px] leading-none select-none pointer-events-none opacity-[.055]"
                      style={{ color: a.from }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Hover top accent strip */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl"
                      style={{ background: grad(a, "90deg") }} />
                    {/* Step label */}
                    <div className="font-['Poppins',sans-serif] font-extrabold text-[9px] tracking-[.26em] uppercase mb-3"
                      style={{ color: a.from }}>
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Title */}
                    <h3 className="font-['Poppins',sans-serif] font-bold text-[#0f172a] text-[1rem] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[#64748b] text-[.83rem] leading-relaxed">{step.desc}</p>
                  </div>
                );

                return (
                  <div key={i}>

                    {/* ── DESKTOP: alternating left / right ── */}
                    <div className="hidden lg:grid grid-cols-[1fr_64px_1fr] items-center gap-0 mb-10">

                      {/* Left slot */}
                      <div className="flex justify-end pr-8">
                        {isLeft && StepCard}
                      </div>

                      {/* Center connector dot */}
                      <div className="flex justify-center">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-base z-10 relative flex-shrink-0"
                          style={{
                            background: grad(a),
                            boxShadow: `0 0 0 5px #f4f8ff, 0 0 0 9px ${a.from}28, 0 8px 24px ${a.from}40`,
                          }}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Right slot */}
                      <div className="flex justify-start pl-8">
                        {!isLeft && StepCard}
                      </div>
                    </div>

                    {/* ── MOBILE: vertical stacked list ── */}
                    <div className="lg:hidden flex items-start gap-4 mb-1">
                      {/* Left: dot + connector line */}
                      <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm z-10 flex-shrink-0"
                          style={{
                            background: grad(a),
                            boxShadow: `0 0 0 3px white, 0 0 0 5px ${a.from}22`,
                          }}>
                          {step.icon}
                        </div>
                        {!isLast && (
                          <div className="w-0.5 flex-1 min-h-[36px] mt-1.5 rounded-full"
                            style={{ background: `linear-gradient(to bottom, ${a.from}, ${ac(i + 1).from})` }} />
                        )}
                      </div>

                      {/* Right: card */}
                      <div className="flex-1 pb-7">
                        <div className="bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-[0_8px_28px_rgba(99,102,241,.10)] transition-all duration-300 overflow-hidden group relative">
                          <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl"
                            style={{ background: grad(a, "90deg") }} />
                          <div className="font-['Poppins',sans-serif] font-extrabold text-[9px] tracking-[.22em] uppercase mb-1.5"
                            style={{ color: a.from }}>
                            Step {String(i + 1).padStart(2, "0")}
                          </div>
                          <h3 className="font-['Poppins',sans-serif] font-bold text-[#0f172a] text-sm mb-1 leading-snug">{step.title}</h3>
                          <p className="text-[#64748b] text-xs leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════
          5. WHY CHOOSE US
      ════════════════════════════════ */}
      {features.length > 0 && (
        <section className="py-20 lg:py-28 bg-[linear-gradient(150deg,#04071a,#080e28_55%,#050b20)] font-['Inter',sans-serif]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#a855f7]/28 bg-[#a855f7]/10 mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#c084fc]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-ping inline-block flex-shrink-0" />
                Why Choose Us
              </div>
              <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,3vw,2.2rem)] leading-[1.15] text-white mb-4">
                The <span className={HL}>Future IT Touch</span> Advantage
              </h2>
              <div className="h-[3px] w-12 rounded-full bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feat, i) => {
                const a = ac(i);
                return (
                  <div key={i}
                    className="rounded-2xl bg-white/[.04] border border-white/[.08] p-6 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,.25)] transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-base mb-4"
                      style={{ background: grad(a) }}>
                      {feat.icon}
                    </div>
                    <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[1rem] mb-2">{feat.title}</h3>
                    <p className="text-white/55 text-[.88rem] leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════
          7. SLIDER
      ════════════════════════════════ */}
      {slider.length > 0 && <CommonSlider cards={slider} />}

      {/* ════════════════════════════════
          6. TECH STACK
      ════════════════════════════════ */}
      {stack.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-[linear-gradient(150deg,#04071a,#080e28_55%,#050b20)] overflow-hidden font-['Inter',sans-serif]">

          {/* Subtle grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(rgba(45,212,191,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,.05)_1px,transparent_1px)] [background-size:52px_52px]" />

          {/* Ambient orbs */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.07),transparent_65%)]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.07),transparent_65%)]" />

          {/* Heading */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16 text-center mb-14">
            <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#2dd4bf]/26 bg-[#2dd4bf]/[.09] mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping inline-block flex-shrink-0" />
              Tech Stack
            </div>
            <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,3vw,2.2rem)] leading-[1.15] text-white mb-3">
              Technologies We <span className={HL}>Master</span>
            </h2>
            <p className="text-white/45 max-w-lg mx-auto text-[.9rem] mb-7">
              A battle-tested toolkit spanning frontend, backend, cloud, and DevOps — every tool chosen for performance and reliability.
            </p>
            {/* Count chip */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[.06] border border-white/[.10]">
              <span className={`font-['Poppins',sans-serif] font-extrabold text-lg ${HL}`}>{stack.length}+</span>
              <span className="text-white/50 font-['Poppins',sans-serif] text-xs font-semibold tracking-wide">Technologies in our arsenal</span>
            </div>
          </div>

          {/* ── Marquee Row 1 — left ── */}
          <div className="group relative mb-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_14%,black_86%,transparent_100%)]">
            <div className="flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused]">
              {[...stack, ...stack].map((tech, i) => {
                const a = ac(i % PALETTE.length);
                const name = typeof tech === "string" ? tech : tech.name;
                return (
                  <div key={i}
                    className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[.045] border border-white/[.07] hover:bg-white/[.09] hover:border-white/20 transition-all duration-200 cursor-default group/chip"
                    style={{ minWidth: 168 }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[13px] font-bold font-['Poppins',sans-serif] flex-shrink-0 shadow-[0_0_14px_rgba(0,0,0,.4)]"
                      style={{ background: grad(a) }}>
                      {tech.icon || name[0]?.toUpperCase() || "?"}
                    </div>
                    <div>
                      <div className="text-white/80 font-['Poppins',sans-serif] font-semibold text-sm whitespace-nowrap group-hover/chip:text-white transition-colors duration-150">
                        {name}
                      </div>
                      <div className="h-0.5 w-0 group-hover/chip:w-full rounded-full transition-all duration-300"
                        style={{ background: grad(a, "90deg") }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Marquee Row 2 — right ── */}
          <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_14%,black_86%,transparent_100%)]">
            <div className="flex w-max gap-3 [animation:marquee_70s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
              {[...stack.slice(Math.ceil(stack.length / 2)), ...stack, ...stack.slice(0, Math.ceil(stack.length / 2))].map((tech, i) => {
                const a = ac((i + 3) % PALETTE.length);
                const name = typeof tech === "string" ? tech : tech.name;
                return (
                  <div key={i}
                    className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[.045] border border-white/[.07] hover:bg-white/[.09] hover:border-white/20 transition-all duration-200 cursor-default group/chip"
                    style={{ minWidth: 168 }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[13px] font-bold font-['Poppins',sans-serif] flex-shrink-0 shadow-[0_0_14px_rgba(0,0,0,.4)]"
                      style={{ background: grad(a) }}>
                      {tech.icon || name[0]?.toUpperCase() || "?"}
                    </div>
                    <div>
                      <div className="text-white/80 font-['Poppins',sans-serif] font-semibold text-sm whitespace-nowrap group-hover/chip:text-white transition-colors duration-150">
                        {name}
                      </div>
                      <div className="h-0.5 w-0 group-hover/chip:w-full rounded-full transition-all duration-300"
                        style={{ background: grad(a, "90deg") }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom divider glow */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16 mt-14 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/[.06]" />
            <div className="text-white/25 font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[.2em] uppercase">End-to-End Expertise</div>
            <div className="flex-1 h-px bg-white/[.06]" />
          </div>
        </section>
      )}

      {/* ════════════════════════════════
          8. FAQ
      ════════════════════════════════ */}
      {faq.items && faq.items.length > 0 && (
        <section className="py-20 lg:py-28 bg-[linear-gradient(155deg,#f4f8ff,#ffffff_50%,#f0f4ff)] font-['Inter',sans-serif]">
          <div className="max-w-[860px] mx-auto px-5 sm:px-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2.5 px-[18px] py-1.5 rounded-full border border-[#6366f1]/26 bg-[#6366f1]/[.09] mb-5 font-['Poppins',sans-serif] text-[10px] font-bold tracking-[.22em] uppercase text-[#4f46e5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-ping inline-block flex-shrink-0" />
                FAQ
              </div>
              <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.4rem,3vw,2.2rem)] leading-[1.15] text-[#0f172a] mb-2">
                Questions About <span className={HL}>{faq.title || "Our Services"}</span>
              </h2>
              <div className="h-[3px] w-12 rounded-full bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] mx-auto" />
            </div>

            <div className="space-y-3">
              {faq.items.map((item, i) => {
                const a = ac(i);
                const isOpen = openFaq === i;
                return (
                  <div key={i}
                    className="rounded-2xl bg-white border border-slate-100 overflow-hidden transition-all duration-200"
                    style={isOpen
                      ? { borderColor: `${a.from}44`, boxShadow: `0 4px 20px rgba(0,0,0,.06),inset 3px 0 0 ${a.from}` }
                      : {}}>
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-transparent border-0 cursor-pointer"
                      onClick={() => setOpenFaq(isOpen ? null : i)}>
                      <span className="font-['Poppins',sans-serif] font-semibold text-[.92rem] text-[#0f172a]">{item.title}</span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        style={{ background: grad(a) }}>
                        +
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-[400px]" : "max-h-0"}`}>
                      <p className="px-6 pb-5 text-[#475569] text-[.9rem] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════
          9. GET NEW INSIGHT
      ════════════════════════════════ */}
      <GetNewInsight />
    </>
  );
}
