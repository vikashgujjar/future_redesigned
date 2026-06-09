"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMobileAlt, FaApple, FaAndroid, FaLaptopCode, FaShoppingCart,
  FaRocket, FaSearch, FaBullhorn, FaPaintBrush, FaPlay,
  FaArrowRight, FaCheckCircle, FaPhone, FaEnvelope,
  FaReact, FaWordpress, FaPhp, FaJava, FaCode,
  FaAward, FaUsers, FaGlobe, FaThumbsUp,
} from "react-icons/fa";
import { SiAngular, SiShopify, SiMagento } from "react-icons/si";
import Login from "../components/Login";
import Testimonial from "../components/Testimonial";
import Location from "../components/Location";
import MutipleServices from "../components/MutipleServices";

// ─── service categories ───────────────────────────────────────────────────────
const CATEGORIES = [
  { key: "app",     label: "App Development" },
  { key: "web",     label: "Web Development" },
  { key: "ecom",    label: "eCommerce" },
  { key: "tech",    label: "Trending Tech" },
  { key: "dm",      label: "Digital Marketing" },
  { key: "design",  label: "Design & Branding" },
];

const SERVICES = [
  // App Development
  {
    cat: "app",
    icon: <FaApple />,
    title: "iOS App Development",
    desc: "Transform your idea into a powerful iPhone/iPad app with smooth performance and beautiful UI.",
    tags: ["Swift", "Objective-C", "Xcode"],
    from: "#2dd4bf", to: "#6366f1",
    href: "/ios-application-development",
  },
  {
    cat: "app",
    icon: <FaAndroid />,
    title: "Android App Development",
    desc: "Reach 2 billion+ Android users with custom, feature-rich apps built for every screen size.",
    tags: ["Kotlin", "Java", "Android Studio"],
    from: "#6366f1", to: "#8b5cf6",
    href: "/android-application-development",
  },
  {
    cat: "app",
    icon: <FaMobileAlt />,
    title: "Cross Platform Apps",
    desc: "One codebase, two platforms. Ship React Native & Flutter apps faster without sacrificing quality.",
    tags: ["React Native", "Flutter", "Ionic"],
    from: "#0ea5e9", to: "#2dd4bf",
    href: "/hybrid-application-development",
  },
  // Web Development
  {
    cat: "web",
    icon: <FaCode />,
    title: "ASP.NET Development",
    desc: "Enterprise-grade web apps with Microsoft's .NET framework — scalable, secure and high-performance.",
    tags: ["C#", ".NET Core", "MVC"],
    from: "#6366f1", to: "#2dd4bf",
    href: "/asp-dot-net-service",
  },
  {
    cat: "web",
    icon: <FaPhp />,
    title: "PHP / Laravel / CodeIgniter",
    desc: "Robust web solutions using battle-tested PHP frameworks with clean architecture and rapid delivery.",
    tags: ["Laravel", "CodeIgniter", "PHP8"],
    from: "#8b5cf6", to: "#6366f1",
    href: "/php-laravel-codeigniter-services",
  },
  {
    cat: "web",
    icon: <FaWordpress />,
    title: "WordPress & Shopify",
    desc: "Beautiful, manageable websites and stores on the world's most popular CMS platforms.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
    from: "#2dd4bf", to: "#0ea5e9",
    href: "/wordpress-and-shopify-development",
  },
  // eCommerce
  {
    cat: "ecom",
    icon: <FaShoppingCart />,
    title: "Magento Development",
    desc: "Feature-rich, scalable Magento stores built for high-traffic commerce with deep customization.",
    tags: ["Magento 2", "Adobe Commerce", "PWA"],
    from: "#f59e0b", to: "#ef4444",
    href: "/ecommerce-website-development",
  },
  {
    cat: "ecom",
    icon: <SiShopify />,
    title: "Shopify Store Setup",
    desc: "Go live fast with expertly configured Shopify stores, custom themes, and app integrations.",
    tags: ["Shopify", "Liquid", "Headless"],
    from: "#10b981", to: "#2dd4bf",
    href: "/wordpress-and-shopify-development",
  },
  {
    cat: "ecom",
    icon: <FaReact />,
    title: "React-based eCommerce",
    desc: "Blazing-fast headless storefronts built with React, Next.js and modern commerce APIs.",
    tags: ["Next.js", "GraphQL", "Stripe"],
    from: "#0ea5e9", to: "#6366f1",
    href: "/reactjs-vuejs-nodejs-development-services",
  },
  // Trending Tech
  {
    cat: "tech",
    icon: <FaReact />,
    title: "React / Vue / Node.js",
    desc: "Modern JavaScript stack apps with real-time features, REST & GraphQL APIs, and microservices.",
    tags: ["React", "Vue", "Node.js"],
    from: "#0ea5e9", to: "#2dd4bf",
    href: "/reactjs-vuejs-nodejs-development-services",
  },
  {
    cat: "tech",
    icon: <SiAngular />,
    title: "Angular Development",
    desc: "Scalable enterprise SPAs with TypeScript, dependency injection and RxJS-powered reactive design.",
    tags: ["Angular 17", "TypeScript", "RxJS"],
    from: "#ef4444", to: "#f59e0b",
    href: "/angularjs-development-service",
  },
  {
    cat: "tech",
    icon: <FaRocket />,
    title: "Python & Django",
    desc: "Clean, rapid Python backends for AI/ML, data pipelines, and enterprise web platforms.",
    tags: ["Python", "Django", "FastAPI"],
    from: "#6366f1", to: "#a855f7",
    href: "/python-and-django-service",
  },
  // Digital Marketing
  {
    cat: "dm",
    icon: <FaSearch />,
    title: "SEO Services",
    desc: "Rank higher, drive organic traffic. We combine on-page, technical, and link-building strategies.",
    tags: ["On-Page", "Technical", "Link Building"],
    from: "#2dd4bf", to: "#6366f1",
    href: "/search-engine-optimization",
  },
  {
    cat: "dm",
    icon: <FaBullhorn />,
    title: "Pay Per Click (PPC)",
    desc: "ROI-focused Google and Meta ad campaigns managed by certified PPC specialists.",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
    from: "#f59e0b", to: "#ef4444",
    href: "/pay-per-click-service",
  },
  {
    cat: "dm",
    icon: <FaGlobe />,
    title: "Social Media Marketing",
    desc: "Build brand authority and engaged communities across Instagram, Facebook, LinkedIn and more.",
    tags: ["SMM", "Content", "Influencer"],
    from: "#8b5cf6", to: "#2dd4bf",
    href: "/social-media-marketing-service",
  },
  // Design & Branding
  {
    cat: "design",
    icon: <FaPaintBrush />,
    title: "Logo Design",
    desc: "Iconic brand identities crafted by senior designers that tell your story at a glance.",
    tags: ["Branding", "Identity", "Vectorial"],
    from: "#2dd4bf", to: "#6366f1",
    href: "/logo-design-services",
  },
  {
    cat: "design",
    icon: <FaCode />,
    title: "Brochure & Print Design",
    desc: "Eye-catching brochures, leaflets, and collateral that converts prospects into clients.",
    tags: ["Print", "Digital", "Infographics"],
    from: "#6366f1", to: "#a855f7",
    href: "/brochure-design-service",
  },
  {
    cat: "design",
    icon: <FaPlay />,
    title: "2D / 3D Animation",
    desc: "Cinematic brand videos, explainer animations, and motion graphics that captivate and convert.",
    tags: ["2D", "3D", "Motion Graphics"],
    from: "#0ea5e9", to: "#8b5cf6",
    href: "/animated-services",
  },
];

const STATS = [
  { num: "20+",  label: "Years Experience", icon: <FaAward /> },
  { num: "250+", label: "Talented Squad",    icon: <FaUsers /> },
  { num: "1200+",label: "Apps Developed",   icon: <FaMobileAlt /> },
  { num: "120+", label: "Countries Served", icon: <FaGlobe /> },
  { num: "100%", label: "Projects Delivered",icon: <FaCheckCircle /> },
  { num: "100%", label: "Client Satisfaction",icon: <FaThumbsUp /> },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Services = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filtered = SERVICES.filter((s) => s.cat === activeTab);

  return (
    <>
      <style>{`
        @keyframes svcBlob  { 0%,100%{transform:translate(0,0)} 33%{transform:translate(28px,-18px)} 66%{transform:translate(-14px,16px)} }
        @keyframes svcCW    { to { transform: rotate(360deg)  } }
        @keyframes svcCCW   { to { transform: rotate(-360deg) } }
        @keyframes svcBar   { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes svcFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes svcPing  { 75%,100%{ transform:scale(2.2); opacity:0 } }
        @keyframes svcFadeUp{ from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .svc-dotgrid {
          background-image: radial-gradient(rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .svc-bar     { animation: svcBar .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left; }
        .svc-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation: svcPing 2s ease-out infinite;
        }
        .svc-ping { position:relative; }
        .svc-card { transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .28s; }
        .svc-card:hover { transform: translateY(-7px); box-shadow: 0 28px 60px rgba(0,0,0,.44) !important; }
        .svc-card-glow { opacity:0; transition: opacity .3s ease; }
        .svc-card:hover .svc-card-glow { opacity:1; }
        .svc-stat { transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s; }
        .svc-stat:hover { transform: translateY(-5px); box-shadow: 0 18px 40px rgba(45,212,191,.18) !important; }
        .svc-tab { transition: all .22s cubic-bezier(.22,1,.36,1); }
        .svc-tab.active { box-shadow: 0 4px 20px rgba(45,212,191,.35); }
        .svc-fadeup { animation: svcFadeUp .45s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
          fontFamily: "'Inter',sans-serif",
          minHeight: "clamp(480px,72vh,680px)",
        }}
      >
        {/* layers */}
        <div className="svc-dotgrid absolute inset-0 pointer-events-none z-[1]" />
        <div className="absolute inset-0 pointer-events-none z-[1] opacity-[.035]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* blobs */}
        <div className="absolute -top-48 -left-48 w-[540px] h-[540px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.16) 0%,transparent 65%)", animation: "svcBlob 16s ease-in-out infinite" }} />
        <div className="absolute -bottom-40 right-0 w-[480px] h-[480px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.18) 0%,transparent 65%)", animation: "svcBlob 20s ease-in-out infinite reverse" }} />

        {/* SVG arcs */}
        <svg className="absolute top-0 left-0 pointer-events-none z-[2]" width="360" height="360" viewBox="0 0 360 360" fill="none" aria-hidden="true">
          <g style={{ transformOrigin: "0 0", animation: "svcCW 44s linear infinite" }}>
            <circle cx="0" cy="0" r="275" stroke="rgba(45,212,191,.07)" strokeWidth="1.2" strokeDasharray="70 120" strokeLinecap="round" fill="none" />
          </g>
          <g style={{ transformOrigin: "0 0", animation: "svcCCW 30s linear infinite" }}>
            <circle cx="0" cy="0" r="180" stroke="rgba(99,102,241,.08)" strokeWidth="1" strokeDasharray="48 80" strokeLinecap="round" fill="none" />
          </g>
        </svg>
        <div className="absolute top-1/2 left-0 right-0 h-px pointer-events-none z-[2]"
          style={{ background: "linear-gradient(90deg,transparent,rgba(45,212,191,.12),rgba(99,102,241,.10),transparent)" }} />

        {/* content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28 py-20">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* Left */}
            <div>
              {/* badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
                <span className="svc-ping w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                  Full-Stack Digital Agency
                </span>
              </div>

              <h1 className="font-extrabold leading-[1.08] mb-5"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "clamp(1.6rem,4.2vw,3.2rem)",
                  background: "linear-gradient(120deg,#ffffff 35%,#2dd4bf 68%,#6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                Website, Mobile App &<br />Digital Marketing Services
              </h1>

              <div className="svc-bar h-[3px] w-16 rounded-full mb-6"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

              <p className="text-[14.5px] leading-[1.90] mb-8 max-w-[560px]"
                style={{ color: "rgba(255,255,255,.56)", textAlign: "justify" }}>
                We are a full-stack Branding, Website Development, App Development & Digital Marketing company in Chandigarh. With 50+ experts and clients across 120+ countries since 2017, we deliver solutions that are market-fit, scalable, and built to grow your business.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 24px rgba(45,212,191,.38)", fontFamily: "'Poppins',sans-serif" }}>
                  Quick Enquiry <FaArrowRight size={12} />
                </Link>
                <Link href="tel:+917056937000"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 no-underline"
                  style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", color: "rgba(255,255,255,.78)", fontFamily: "'Poppins',sans-serif" }}>
                  <FaPhone size={12} /> Call us — 7056937000
                </Link>
              </div>
            </div>

            {/* Right — floating service pills */}
            <div className="hidden lg:flex flex-col gap-4 items-end">
              {[
                { label: "App Development",     color: "#2dd4bf", icon: <FaMobileAlt /> },
                { label: "Web Development",      color: "#6366f1", icon: <FaLaptopCode /> },
                { label: "Digital Marketing",    color: "#0ea5e9", icon: <FaBullhorn /> },
                { label: "Design & Branding",    color: "#a855f7", icon: <FaPaintBrush /> },
                { label: "eCommerce Solutions",  color: "#f59e0b", icon: <FaShoppingCart /> },
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-3 rounded-2xl px-5 py-3"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: `1px solid ${pill.color}33`,
                    boxShadow: `0 4px 24px ${pill.color}1a`,
                    animation: `svcFloat ${5 + i * 0.7}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}>
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-base flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${pill.color},${pill.color}99)`, boxShadow: `0 4px 14px ${pill.color}44` }}>
                    {pill.icon}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,.84)", fontFamily: "'Poppins',sans-serif" }}>
                    {pill.label}
                  </span>
                  <div className="ml-3 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: pill.color }} />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-[3]"
          style={{ background: "linear-gradient(to bottom,transparent,rgba(6,11,26,.45))" }} />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="svc-stat rounded-2xl p-5 text-center"
                style={{ background: "#fff", border: "1px solid rgba(99,102,241,.09)", boxShadow: "0 4px 18px rgba(99,102,241,.06)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}>
                  {s.icon}
                </div>
                <p className="font-extrabold text-2xl leading-none mb-1"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                  {s.num}
                </p>
                <p className="text-[11px] font-semibold text-gray-500 leading-tight mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ─────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28" style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.055),transparent 68%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.055),transparent 68%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          {/* section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
              <span className="svc-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                What We Offer
              </span>
            </div>
            <h2 className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.5rem)" }}>
              Our{" "}
              <span style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Core Services
              </span>
            </h2>
            <div className="svc-bar mx-auto h-[3px] w-14 rounded-full mb-5"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
            <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
              We think big and have hands in all leading technology platforms to provide you a wide array of services.
            </p>
          </div>

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`svc-tab text-[13px] font-semibold px-5 py-2.5 rounded-full border transition-all ${activeTab === cat.key ? "active" : ""}`}
                style={
                  activeTab === cat.key
                    ? {
                        background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                        color: "#fff",
                        border: "1px solid transparent",
                        fontFamily: "'Poppins',sans-serif",
                      }
                    : {
                        background: "#fff",
                        color: "#374151",
                        border: "1px solid rgba(99,102,241,.14)",
                        fontFamily: "'Poppins',sans-serif",
                      }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((svc, idx) => (
              <div
                key={`${activeTab}-${idx}`}
                className="svc-card svc-fadeup relative group rounded-2xl bg-white overflow-hidden"
                style={{
                  boxShadow: "0 8px 32px rgba(99,102,241,.08),0 1px 4px rgba(0,0,0,.04)",
                  border: "1px solid rgba(99,102,241,.08)",
                  animationDelay: `${idx * 0.08}s`,
                }}
              >
                {/* gradient top strip */}
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg,${svc.from},${svc.to})` }} />

                <div className="p-7 flex flex-col h-full">
                  {/* icon + ghost number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,${svc.from},${svc.to})`, boxShadow: `0 8px 24px ${svc.from}55` }}>
                      {svc.icon}
                    </div>
                    <span className="text-5xl font-black leading-none select-none"
                      style={{ color: svc.from, opacity: 0.08, fontFamily: "'Poppins',sans-serif" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Poppins',sans-serif" }}>
                    {svc.title}
                  </h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed flex-1">{svc.desc}</p>

                  {/* tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {svc.tags.map((tag, ti) => (
                      <span key={ti} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${svc.from}12`, color: svc.from, border: `1px solid ${svc.from}28` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={svc.href}
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold no-underline transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: svc.from }}>
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* hover glow */}
                <div className="svc-card-glow absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%,${svc.from}0d,transparent 60%)` }} />
                <div className="svc-card-glow absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${svc.from}30` }} />
              </div>
            ))}
          </div>

          {/* view all CTA row */}
          <div className="mt-14 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-2xl px-8 py-10"
            style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", border: "1px solid rgba(255,255,255,.06)" }}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.18em] mb-2"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                Ready to Get Started?
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "'Poppins',sans-serif" }}>
                Hire a{" "}
                <span style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Dedicated Expert
                </span>
              </h3>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 24px rgba(45,212,191,.38)", fontFamily: "'Poppins',sans-serif" }}>
                Request A Quote <FaArrowRight size={12} />
              </Link>
              <Link href="tel:+917056937000"
                className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 no-underline flex-shrink-0"
                style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)", color: "rgba(255,255,255,.78)", fontFamily: "'Poppins',sans-serif" }}>
                <FaPhone size={12} /> Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", fontFamily: "'Inter',sans-serif" }}
      >
        <div className="svc-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.12) 0%,transparent 65%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.12) 0%,transparent 65%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
              <span className="svc-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                How We Work
              </span>
            </div>
            <h2 className="font-extrabold text-white mb-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.5rem)", lineHeight: 1.12 }}>
              Our{" "}
              <span style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Proven Process
              </span>
            </h2>
            <div className="svc-bar mx-auto h-[3px] w-14 rounded-full mb-5"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-[3.2rem] left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg,rgba(45,212,191,.25),rgba(99,102,241,.25),rgba(168,85,247,.25),rgba(45,212,191,.12))" }} />

            {[
              { step: "01", title: "Discovery & Strategy",  desc: "We analyse your business, research the market and define a clear digital roadmap.", from: "#2dd4bf", to: "#6366f1" },
              { step: "02", title: "Design & Prototype",    desc: "Our designers craft beautiful, intuitive interfaces validated with interactive prototypes.", from: "#6366f1", to: "#8b5cf6" },
              { step: "03", title: "Development & QA",      desc: "Engineers build with clean code. Every feature is tested across devices before release.", from: "#0ea5e9", to: "#2dd4bf" },
              { step: "04", title: "Launch & Growth",       desc: "We deploy, monitor and iterate — ensuring your product scales and stays competitive.", from: "#a855f7", to: "#6366f1" },
            ].map((p, i) => (
              <div key={i} className="svc-card relative rounded-2xl overflow-hidden"
                style={{ background: "rgba(7,9,22,.84)", border: "1px solid rgba(255,255,255,.07)", boxShadow: "0 4px 28px rgba(0,0,0,.32)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg,${p.from},${p.to})`, opacity: .65 }} />
                <div className="p-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 font-black text-lg"
                    style={{ background: `linear-gradient(135deg,${p.from},${p.to})`, color: "#fff", fontFamily: "'Poppins',sans-serif", boxShadow: `0 8px 24px ${p.from}44` }}>
                    {p.step}
                  </div>
                  <h5 className="font-bold text-white mb-3" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1rem" }}>
                    {p.title}
                  </h5>
                  <div className="h-px mb-3 rounded-full" style={{ background: `linear-gradient(90deg,${p.from}44,transparent)` }} />
                  <p className="text-[13px] leading-[1.8]" style={{ color: "rgba(255,255,255,.48)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE / TESTIMONIALS / LOCATION / MULTIPLE SERVICES ─────────── */}
      <MutipleServices />
      <Testimonial />
      <Location />

      {isPopupOpen && (
        <Login handleClosePopup={() => setIsPopupOpen(false)} isPopupOpen={isPopupOpen} />
      )}
    </>
  );
};

export default Services;
