"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaMobileAlt, FaApple, FaAndroid, FaLaptopCode, FaShoppingCart,
  FaRocket, FaSearch, FaBullhorn, FaPaintBrush, FaPlay,
  FaArrowRight, FaCheckCircle, FaPhone,
  FaReact, FaWordpress, FaPhp, FaCode,
  FaAward, FaUsers, FaGlobe, FaThumbsUp,
  FaHeadset, FaLightbulb, FaShieldAlt, FaClock,
  FaBug, FaLock, FaCloud, FaFileAlt, FaExclamationTriangle, FaNetworkWired,
} from "react-icons/fa";
import { SiAngular, SiShopify } from "react-icons/si";
import Testimonial from "../components/Testimonial";
import Location from "../components/Location";
import MutipleServices from "../components/MutipleServices";
import useYearsExperience from "../lib/useYearsExperience";
import { COMPANY_START_YEAR } from "../lib/companyStats";
import { getServiceIcon } from "../lib/serviceIcons";

// ── Palette ─────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: "all",    label: "All Services" },
  { key: "app",    label: "App Development" },
  { key: "web",    label: "Web Development" },
  { key: "ecom",   label: "eCommerce" },
  { key: "tech",   label: "Trending Tech" },
  { key: "dm",     label: "Digital Marketing" },
  { key: "design",   label: "Design & Branding" },
  { key: "security", label: "Cyber Security" },
];

const FALLBACK_SERVICES = [
  { cat:"app",    icon:<FaApple />,        title:"iOS App Development",          desc:"Transform your idea into a powerful iPhone/iPad app with smooth performance and beautiful UI crafted for Apple's ecosystem.",               tags:["Swift","Objective-C","Xcode"],     from:"#2dd4bf",to:"#6366f1", href:"/IOS" },
  { cat:"app",    icon:<FaAndroid />,      title:"Android App Development",       desc:"Reach 2 billion+ Android users with custom, feature-rich apps built for every screen size and OS version.",                               tags:["Kotlin","Java","Android Studio"],  from:"#6366f1",to:"#8b5cf6", href:"/android-application-development" },
  { cat:"app",    icon:<FaMobileAlt />,    title:"Cross Platform Apps",           desc:"One codebase, two platforms. Ship React Native & Flutter apps faster without sacrificing native-quality experience.",                     tags:["React Native","Flutter","Ionic"],  from:"#0ea5e9",to:"#2dd4bf", href:"/hybrid-application-development" },
  { cat:"web",    icon:<FaCode />,         title:"ASP.NET Development",           desc:"Enterprise-grade web apps with Microsoft's .NET framework — scalable, secure and high-performance for demanding workloads.",             tags:["C#",".NET Core","MVC"],            from:"#6366f1",to:"#2dd4bf", href:"/asp-dot-net-service" },
  { cat:"web",    icon:<FaPhp />,          title:"PHP / Laravel / CodeIgniter",   desc:"Robust web solutions using battle-tested PHP frameworks with clean architecture and rapid, reliable delivery.",                          tags:["Laravel","CodeIgniter","PHP8"],    from:"#8b5cf6",to:"#6366f1", href:"/php-laravel-codeigniter-services" },
  { cat:"web",    icon:<FaWordpress />,    title:"WordPress & Shopify",           desc:"Beautiful, manageable websites and stores on the world's most popular CMS and commerce platforms.",                                       tags:["WordPress","Shopify","WooCommerce"],from:"#2dd4bf",to:"#0ea5e9",href:"/wordpress-and-shopify-development" },
  { cat:"ecom",   icon:<FaShoppingCart />, title:"Magento Development",           desc:"Feature-rich, scalable Magento stores built for high-traffic commerce with deep customization and PWA support.",                         tags:["Magento 2","Adobe Commerce","PWA"],from:"#f59e0b",to:"#ef4444", href:"/ecommerce-website-development" },
  { cat:"ecom",   icon:<SiShopify />,      title:"Shopify Store Setup",           desc:"Go live fast with expertly configured Shopify stores, custom themes, app integrations, and checkout optimization.",                      tags:["Shopify","Liquid","Headless"],     from:"#10b981",to:"#2dd4bf", href:"/wordpress-and-shopify-development" },
  { cat:"ecom",   icon:<FaReact />,        title:"React-based eCommerce",         desc:"Blazing-fast headless storefronts built with React and Next.js, powered by modern commerce APIs and real-time inventory.",              tags:["Next.js","GraphQL","Stripe"],      from:"#0ea5e9",to:"#6366f1", href:"/reactjs-vuejs-nodejs-development-services" },
  { cat:"tech",   icon:<FaReact />,        title:"React / Vue / Node.js",         desc:"Modern JavaScript stack apps with real-time features, REST & GraphQL APIs, and microservices built for scale.",                         tags:["React","Vue","Node.js"],           from:"#0ea5e9",to:"#2dd4bf", href:"/reactjs-vuejs-nodejs-development-services" },
  { cat:"tech",   icon:<SiAngular />,      title:"Angular Development",           desc:"Scalable enterprise SPAs with TypeScript, dependency injection and RxJS-powered reactive design patterns.",                              tags:["Angular 17","TypeScript","RxJS"],  from:"#ef4444",to:"#f59e0b", href:"/angularjs-development-service" },
  { cat:"tech",   icon:<FaRocket />,       title:"Python & Django",               desc:"Clean, rapid Python backends for AI/ML, data pipelines, and enterprise web platforms with blazing-fast APIs.",                          tags:["Python","Django","FastAPI"],       from:"#6366f1",to:"#a855f7", href:"/python-and-django-service" },
  { cat:"dm",     icon:<FaSearch />,       title:"SEO Services",                  desc:"Rank higher and drive organic traffic. We combine on-page, technical, and link-building strategies for lasting results.",                tags:["On-Page","Technical","Link Building"],from:"#2dd4bf",to:"#6366f1",href:"/search-engine-optimization" },
  { cat:"dm",     icon:<FaBullhorn />,     title:"Pay Per Click (PPC)",           desc:"ROI-focused Google and Meta ad campaigns meticulously managed by certified PPC specialists for maximum return.",                         tags:["Google Ads","Meta Ads","Analytics"],from:"#f59e0b",to:"#ef4444",href:"/pay-per-click-service" },
  { cat:"dm",     icon:<FaGlobe />,        title:"Social Media Marketing",        desc:"Build brand authority and engaged communities across Instagram, Facebook, LinkedIn and X with consistent, creative content.",            tags:["SMM","Content","Influencer"],     from:"#8b5cf6",to:"#2dd4bf", href:"/social-media-marketing-service" },
  { cat:"design", icon:<FaPaintBrush />,   title:"Logo Design",                   desc:"Iconic brand identities crafted by senior designers that tell your story at a glance and stand the test of time.",                      tags:["Branding","Identity","Vectorial"], from:"#2dd4bf",to:"#6366f1", href:"/logo-design-services" },
  { cat:"design", icon:<FaCode />,         title:"Brochure & Print Design",       desc:"Eye-catching brochures, leaflets, and collateral that converts prospects into loyal clients across print and digital.",                  tags:["Print","Digital","Infographics"],  from:"#6366f1",to:"#a855f7", href:"/brochure-design-service" },
  { cat:"design",   icon:<FaPlay />,                  title:"2D / 3D Animation",              desc:"Cinematic brand videos, explainer animations, and motion graphics that captivate viewers and convert at every touchpoint.",                                      tags:["2D","3D","Motion Graphics"],          from:"#0ea5e9",to:"#8b5cf6", href:"/animated-services" },
  { cat:"security", icon:<FaBug />,                   title:"Vulnerability Assessment",        desc:"Comprehensive scanning and manual review of web apps, networks, APIs, and cloud environments — risk-ranked findings with step-by-step remediation guidance.",        tags:["VAPT","OWASP","CVSS"],               from:"#2dd4bf",to:"#06b6d4", href:"/vulnerability-assessment-service" },
  { cat:"security", icon:<FaShieldAlt />,             title:"Penetration Testing",             desc:"OSCP-certified ethical hacking across web, mobile, API, network, and cloud targets — full attack chain documentation and post-fix verification.",                    tags:["Black-box","Grey-box","OSCP"],        from:"#6366f1",to:"#8b5cf6", href:"/penetration-testing-service" },
  { cat:"security", icon:<FaNetworkWired />,          title:"Network Security",                desc:"Firewall hardening, IDS/IPS deployment, zero-trust architecture, network segmentation, and 24/7 traffic monitoring for Indian SMEs.",                               tags:["Firewall","IDS/IPS","Zero-Trust"],    from:"#0ea5e9",to:"#2dd4bf", href:"/network-security-service" },
  { cat:"security", icon:<FaCloud />,                 title:"Cloud Security",                  desc:"Continuous cloud security posture management across AWS, Azure, and GCP — IAM reviews, container security, and Indian data residency compliance.",                    tags:["CSPM","IAM","AWS/Azure/GCP"],         from:"#a855f7",to:"#6366f1", href:"/cloud-security-service" },
  { cat:"security", icon:<FaFileAlt />,               title:"Data Protection & Compliance",    desc:"DPDPA 2023, CERT-In controls, ISO 27001, and PCI-DSS compliance programmes delivered as a managed service — gap assessment to audit readiness.",                    tags:["DPDPA 2023","CERT-In","ISO 27001"],   from:"#10b981",to:"#2dd4bf", href:"/data-protection-compliance-service" },
  { cat:"security", icon:<FaExclamationTriangle />,   title:"Incident Response",               desc:"24/7 incident response, digital forensics, ransomware recovery, and post-incident hardening — with 15-minute activation and DPDPA breach notification support.",     tags:["IR","Forensics","Ransomware"],        from:"#ef4444",to:"#f59e0b", href:"/incident-response-service" },
];

const getStats = (yearsExperience) => [
  { num: yearsExperience, label:"Years Experience",    icon:<FaAward /> },
  { num:"250+",  label:"Talented Experts",    icon:<FaUsers /> },
  { num:"1200+", label:"Apps Developed",      icon:<FaMobileAlt /> },
  { num:"120+",  label:"Countries Served",    icon:<FaGlobe /> },
  { num:"100%",  label:"On-Time Delivery",    icon:<FaClock /> },
  { num:"100%",  label:"Client Satisfaction", icon:<FaThumbsUp /> },
];

const WHY = [
  { icon:<FaLightbulb />,  title:"Innovative Solutions",  desc:"We stay ahead of trends so your product launches with the best-fit technology stack for today and tomorrow." },
  { icon:<FaShieldAlt />,  title:"Secure & Scalable",     desc:"Every solution is architected with security-first thinking and built to scale gracefully as your business grows." },
  { icon:<FaHeadset />,    title:"24/7 Support",           desc:"Our team is available around the clock to keep your digital products stable, performant, and continuously improving." },
  { icon:<FaCheckCircle />,title:"Agile Delivery",         desc:"Rapid iteration, transparent sprints, and continuous delivery ensure you always see progress and stay in control." },
];

const PROCESS = [
  { step:"01", title:"Discovery & Strategy",  desc:"We analyse your business, research the market and define a clear digital roadmap tailored to your goals.", from:"#2dd4bf", to:"#6366f1" },
  { step:"02", title:"Design & Prototype",    desc:"Our designers craft beautiful, intuitive interfaces validated with interactive prototypes before a single line of code is written.", from:"#6366f1", to:"#8b5cf6" },
  { step:"03", title:"Development & QA",      desc:"Engineers build with clean, tested code. Every feature is verified across devices and environments before release.", from:"#0ea5e9", to:"#2dd4bf" },
  { step:"04", title:"Launch & Growth",       desc:"We deploy, monitor performance, and iterate — ensuring your product scales, stays competitive, and keeps improving.", from:"#a855f7", to:"#6366f1" },
];

const HL = "bg-[linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7)] bg-[length:200%_200%] bg-clip-text text-transparent [animation:tcpGrad_5s_ease-in-out_infinite]";

export default function Services({ items: cmsItems, serviceIndex, officeLocations, industries } = {}) {
  const [active, setActive] = useState("all");
  const yearsExperience = useYearsExperience();
  const SERVICES = cmsItems?.length
    ? cmsItems.map((it) => ({
        cat: it.category,
        icon: getServiceIcon(it.icon),
        title: it.title,
        desc: it.description,
        tags: it.tags,
        from: it.accent?.from,
        to: it.accent?.to,
        href: it.href,
      }))
    : FALLBACK_SERVICES;
  const filtered = active === "all" ? SERVICES : SERVICES.filter(s => s.cat === active);

  const whyBadge = serviceIndex?.why?.badge || "Why Choose Us";
  const whyHeading = serviceIndex?.why?.heading || "A Partner That Delivers, Not Just Promises";
  const whyItems = serviceIndex?.why?.items?.length
    ? serviceIndex.why.items.map((w) => ({ icon: getServiceIcon(w.icon), title: w.title, desc: w.desc }))
    : WHY;

  const processBadge = serviceIndex?.process?.badge || "How We Work";
  const processHeading = serviceIndex?.process?.heading || "Our Proven Process";
  const processItems = serviceIndex?.process?.items?.length
    ? serviceIndex.process.items.map((p) => ({ step: p.step, title: p.title, desc: p.desc, from: p.from, to: p.to }))
    : PROCESS;

  const stats = serviceIndex?.stats?.length
    ? serviceIndex.stats.map((s) => ({
        num: s.use_live_years ? yearsExperience : s.num,
        label: s.label,
        icon: getServiceIcon(s.icon),
      }))
    : getStats(yearsExperience);

  return (
    <div className="font-['Inter',sans-serif] overflow-x-clip">

      {/* ══ HEADER SPACER ══ */}
      {/* <div className="h-24 max-sm:h-[57px] max-md:h-20 bg-white" /> */}

      {/* ══════════════════════════════════════
          1. HERO BANNER
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[82vh] flex items-center bg-[#030712]">
        {/* BG layers */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,5,24,.98)_0%,rgba(8,14,40,.92)_55%,rgba(4,5,24,.70)_100%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Orbs */}
        <div className="absolute -top-48 -left-48 w-[580px] h-[580px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.17),transparent_62%)] [animation:tcpFloat_16s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 right-0 w-[520px] h-[520px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.17),transparent_62%)] [animation:tcpFloat_20s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[30%] right-[20%] w-[340px] h-[340px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,.10),transparent_62%)]" />

        {/* Scan beam */}
        <div className="absolute pointer-events-none top-[42%] left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(45,212,191,.50),rgba(99,102,241,.35),transparent)] [animation:tcpBeam_3.8s_ease-in-out_infinite]" />

        {/* Rotating rings — desktop only */}
        <svg className="hidden lg:block absolute top-[-60px] left-[-60px] pointer-events-none opacity-60" width="340" height="340" viewBox="0 0 340 340" fill="none" aria-hidden>
          <circle cx="0" cy="0" r="260" stroke="rgba(45,212,191,.07)" strokeWidth="1.2" strokeDasharray="65 110" strokeLinecap="round" style={{transformOrigin:"0 0",animation:"tcpSpin 44s linear infinite"}} />
          <circle cx="0" cy="0" r="170" stroke="rgba(99,102,241,.08)" strokeWidth="1" strokeDasharray="45 75" strokeLinecap="round" style={{transformOrigin:"0 0",animation:"tcpSpinR 30s linear infinite"}} />
        </svg>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-28 grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-16 items-center">

          {/* LEFT */}
          <div className="[animation:tcpSlide_.7s_cubic-bezier(.22,1,.36,1)_.05s_both]">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 flex-wrap mb-6 text-[10.5px] font-semibold tracking-[.18em] uppercase font-['Poppins',sans-serif]">
              <Link href="/" className="text-white/40 hover:text-[#2dd4bf] transition-colors">Home</Link>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 1.5l3 2.5-3 2.5" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-[#2dd4bf]">Our Services</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mb-6 text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf] font-['Poppins',sans-serif]">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-ping bg-[#2dd4bf]" />
              Full-Stack Digital Agency
              <span className="w-px h-4 bg-[#2dd4bf]/25" />
              Future IT Touch
            </div>

            <h1 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.8rem,4.2vw,3.3rem)] leading-[1.1] tracking-[-0.015em] text-white mb-4">
              Website, Mobile App &amp;<br />
              <span className={HL}>Digital Services</span>
            </h1>
            <div className="h-[3px] w-14 rounded-full mb-6 bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] [animation:tcpBar_.75s_cubic-bezier(.22,1,.36,1)_.22s_both]" />

            <p className="text-white/60 text-[.95rem] sm:text-[1.05rem] leading-[1.75] max-w-[560px] mb-4">
              Full-stack Branding, Web, App &amp; Digital Marketing services from Chandigarh. 50+ experts, clients across 120+ countries, solutions built for growth.
            </p>

            {/* Checklist */}
            <ul className="mb-8 space-y-2">
              {["App, Web & eCommerce Development","SEO, PPC & Social Media Marketing","Brand Identity & UI/UX Design"].map(t => (
                <li key={t} className="flex items-center gap-2.5 text-white/65 text-[.875rem]">
                  <FaCheckCircle className="text-[#2dd4bf] flex-shrink-0 text-xs" />{t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline hover:shadow-[0_8px_28px_rgba(45,212,191,.45)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                Quick Enquiry <FaArrowRight className="text-[11px]" />
              </Link>
              <Link href="tel:+917056937000"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline border border-white/20 hover:border-[#2dd4bf]/50 hover:bg-white/5 transition-all duration-200">
                <FaPhone className="text-[11px]" /> Call — 7056937000
              </Link>
            </div>
          </div>

          {/* RIGHT — floating service pills */}
          <div className="hidden lg:flex flex-col gap-3.5 items-end [animation:tcpSlide_.7s_cubic-bezier(.22,1,.36,1)_.18s_both]">
            {[
              { label:"App Development",    color:"#2dd4bf", icon:<FaMobileAlt />,  delay:0 },
              { label:"Web Development",     color:"#6366f1", icon:<FaLaptopCode />, delay:.3 },
              { label:"Digital Marketing",   color:"#0ea5e9", icon:<FaBullhorn />,   delay:.6 },
              { label:"Design & Branding",   color:"#a855f7", icon:<FaPaintBrush />, delay:.9 },
              { label:"eCommerce Solutions", color:"#f59e0b", icon:<FaShoppingCart />,delay:1.2 },
              { label:"Cyber Security",      color:"#a855f7", icon:<FaShieldAlt />,   delay:1.5 },
            ].map((p,i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl px-5 py-3.5 hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background:"rgba(255,255,255,.04)",
                  border:`1px solid ${p.color}33`,
                  boxShadow:`0 4px 24px ${p.color}1a`,
                  animation:`tcpFloat ${5+i*.7}s ease-in-out infinite`,
                  animationDelay:`${p.delay}s`,
                }}>
                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${p.color},${p.color}99)`, boxShadow:`0 4px 14px ${p.color}44` }}>
                  {p.icon}
                </span>
                <span className="text-sm font-semibold text-white/85 font-['Poppins',sans-serif]">{p.label}</span>
                <div className="ml-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background:p.color }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-[linear-gradient(to_bottom,transparent,rgba(6,11,26,.5))]" />
      </section>

      {/* ══════════════════════════════════════
          2. STATS STRIP
      ══════════════════════════════════════ */}
      <section className="bg-[linear-gradient(135deg,#050b20,#0a0f2e)] border-b border-white/[.06]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s,i) => (
              <div key={i} className="group flex flex-col items-center text-center rounded-2xl p-5 border border-white/[.06] bg-white/[.03] hover:bg-white/[.06] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base mb-3 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                  {s.icon}
                </div>
                <p className="font-['Poppins',sans-serif] font-extrabold text-2xl leading-none mb-1 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] bg-clip-text text-transparent">
                  {s.num}
                </p>
                <p className="text-[11px] font-semibold text-white/45 leading-tight mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SERVICES SECTION
      ══════════════════════════════════════ */}
      <section className="relative bg-[linear-gradient(180deg,#f8f9ff,#ffffff)] py-24 px-5 sm:px-10 xl:px-16">
        {/* light orbs */}
        <div className="absolute top-[-6%] right-[-4%] w-[420px] h-[420px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.055),transparent_68%)]" />
        <div className="absolute bottom-[-6%] left-[-4%] w-[380px] h-[380px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.055),transparent_68%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 mb-5 text-[10px] font-bold tracking-[.22em] uppercase text-teal-600 font-['Poppins',sans-serif]">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              What We Offer
            </div>
            <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] [font-size:clamp(1.65rem,3.2vw,2.55rem)] leading-tight mb-3">
              Our <span className={HL}>Core Services</span>
            </h2>
            <div className="h-[3px] w-14 rounded-full mx-auto mb-5 bg-[linear-gradient(90deg,#2dd4bf,#6366f1)]" />
            <p className="text-[#6a6a8e] max-w-2xl mx-auto text-base sm:text-[1.02rem] leading-relaxed">
              We think big and have hands in all leading technology platforms to provide you a wide array of services that drive measurable growth.
            </p>
          </div>

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button key={cat.key} onClick={() => setActive(cat.key)}
                className="text-[12.5px] font-semibold px-5 py-2.5 rounded-full border font-['Poppins',sans-serif] transition-all duration-200 hover:-translate-y-0.5"
                style={active === cat.key
                  ? { background:"linear-gradient(135deg,#2dd4bf,#6366f1)", color:"#fff", border:"1px solid transparent", boxShadow:"0 4px 20px rgba(45,212,191,.35)" }
                  : { background:"#fff", color:"#374151", border:"1px solid rgba(99,102,241,.15)", boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((svc, idx) => (
              <div key={`${active}-${idx}`}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay:`${idx*.07}s` }}>

                {/* Gradient top bar */}
                <div className="h-[3px] w-full" style={{ background:`linear-gradient(90deg,${svc.from},${svc.to})` }} />

                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background:`radial-gradient(circle at top right,${svc.from}12,transparent 70%)` }} />

                <div className="p-7 flex flex-col h-full">
                  {/* Icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-md"
                      style={{ background:`linear-gradient(135deg,${svc.from},${svc.to})`, boxShadow:`0 8px 24px ${svc.from}40` }}>
                      {svc.icon}
                    </div>
                    <span className="font-['Poppins',sans-serif] font-black text-[4.5rem] leading-none select-none pointer-events-none opacity-[.055] group-hover:opacity-[.09] transition-opacity duration-300"
                      style={{ color:svc.from, lineHeight:1 }}>
                      {String(idx+1).padStart(2,"0")}
                    </span>
                  </div>

                  <h4 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-[1.08rem] mb-3 leading-snug">{svc.title}</h4>
                  <p className="text-[#6a6a8e] text-[.875rem] leading-relaxed flex-1">{svc.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {svc.tags.map((tag,ti) => (
                      <span key={ti} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ color:svc.from, background:`${svc.from}12`, border:`1px solid ${svc.from}28` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="mt-5 mb-4 h-px" style={{ background:`linear-gradient(90deg,${svc.from}30,transparent)` }} />

                  {/* Learn more */}
                  <Link href={svc.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline group-hover:gap-3 transition-all duration-200"
                    style={{ color:svc.from }}>
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row inside section */}
          <div className="mt-16 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-2xl px-8 py-10 bg-[linear-gradient(135deg,#050b20,#0a0f2e)] border border-white/[.06] overflow-hidden relative">
            <div className="absolute top-[-50%] left-[-5%] w-[300px] h-[300px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.10),transparent_65%)]" />
            <div className="absolute bottom-[-50%] right-[-5%] w-[280px] h-[280px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.10),transparent_65%)]" />
            <div className="relative z-10">
              <p className="text-[10.5px] font-bold uppercase tracking-[.2em] mb-2 font-['Poppins',sans-serif] text-[#2dd4bf]">
                Ready to get started?
              </p>
              <h3 className="font-['Poppins',sans-serif] font-extrabold text-white [font-size:clamp(1.4rem,2.8vw,2.2rem)] leading-tight">
                Hire a <span className={HL}>Dedicated Expert</span>
              </h3>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline hover:shadow-[0_8px_28px_rgba(45,212,191,.45)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                Request A Quote <FaArrowRight className="text-[11px]" />
              </Link>
              <Link href="tel:+917056937000"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline border border-white/20 text-white hover:border-[#2dd4bf]/50 hover:bg-white/5 transition-all duration-200">
                <FaPhone className="text-[11px]" /> Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section className="bg-white py-24 px-5 sm:px-10 xl:px-16">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-6 text-[10px] font-bold tracking-[.22em] uppercase text-indigo-500 font-['Poppins',sans-serif]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              {whyBadge}
            </div>
            <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] [font-size:clamp(1.6rem,3vw,2.45rem)] leading-tight mb-4">
              {whyHeading === "A Partner That Delivers, Not Just Promises" ? (
                <>A Partner That Delivers,<br /><span className={HL}>Not Just Promises</span></>
              ) : whyHeading}
            </h2>
            <div className="h-[3px] w-14 rounded-full mb-6 bg-[linear-gradient(90deg,#2dd4bf,#6366f1)]" />
            <p className="text-[#6a6a8e] text-base leading-relaxed mb-8 max-w-lg">
              Since {COMPANY_START_YEAR} we've built a reputation on transparency, craftsmanship, and results. Here's what sets us apart from the crowd.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline hover:shadow-[0_8px_28px_rgba(45,212,191,.4)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
              Start a Project <FaArrowRight className="text-[11px]" />
            </Link>
          </div>

          {/* Right — why cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyItems.map((w,i) => {
              const colours = [
                { from:"#2dd4bf", to:"#6366f1", light:"#f0fdfb", border:"#99f6e4", text:"#0d9488" },
                { from:"#6366f1", to:"#a855f7", light:"#eef2ff", border:"#c7d2fe", text:"#4f46e5" },
                { from:"#f59e0b", to:"#ef4444", light:"#fffbeb", border:"#fde68a", text:"#d97706" },
                { from:"#10b981", to:"#2dd4bf", light:"#f0fdf4", border:"#a7f3d0", text:"#059669" },
              ];
              const c = colours[i];
              return (
                <div key={i} className="group relative rounded-2xl p-6 border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ borderColor:c.border }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background:`linear-gradient(90deg,${c.from},${c.to})` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg mb-4"
                    style={{ background:`linear-gradient(135deg,${c.from},${c.to})` }}>
                    {w.icon}
                  </div>
                  <h4 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-base mb-2">{w.title}</h4>
                  <p className="text-[#6a6a8e] text-[.82rem] leading-relaxed">{w.desc}</p>
                  <div className="mt-4 h-[2px] w-8 rounded-full group-hover:w-16 transition-all duration-500"
                    style={{ background:`linear-gradient(90deg,${c.from},${c.to})` }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. PROCESS SECTION
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[linear-gradient(140deg,#060b1a,#09112a,#0d1540)] py-24 px-5 sm:px-10 xl:px-16">
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.028)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.12),transparent_65%)]" />
        <div className="absolute -bottom-40 -right-40 w-[440px] h-[440px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.12),transparent_65%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mb-5 text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf] font-['Poppins',sans-serif]">
              <span className="w-1.5 h-1.5 rounded-full animate-ping bg-[#2dd4bf]" />
              {processBadge}
            </div>
            <h2 className="font-['Poppins',sans-serif] font-extrabold text-white [font-size:clamp(1.65rem,3.2vw,2.55rem)] leading-tight mb-4">
              {processHeading === "Our Proven Process" ? (
                <>Our <span className={HL}>Proven Process</span></>
              ) : processHeading}
            </h2>
            <div className="h-[3px] w-14 rounded-full mx-auto bg-[linear-gradient(90deg,#2dd4bf,#6366f1)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-[3.4rem] left-[12.5%] right-[12.5%] h-px bg-[linear-gradient(90deg,rgba(45,212,191,.25),rgba(99,102,241,.25),rgba(168,85,247,.25),transparent)]" />

            {processItems.map((p,i) => (
              <div key={i}
                className="group relative rounded-2xl overflow-hidden border border-white/[.07] bg-white/[.035] hover:bg-white/[.06] hover:-translate-y-2 transition-all duration-300"
                style={{ boxShadow:"0 4px 28px rgba(0,0,0,.32)" }}>
                {/* top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background:`linear-gradient(90deg,${p.from},${p.to})`, opacity:.7 }} />
                <div className="p-6">
                  {/* Step badge */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 font-['Poppins',sans-serif] font-black text-lg text-white"
                    style={{ background:`linear-gradient(135deg,${p.from},${p.to})`, boxShadow:`0 8px 24px ${p.from}44` }}>
                    {p.step}
                  </div>
                  <h5 className="font-['Poppins',sans-serif] font-bold text-white text-base mb-3">{p.title}</h5>
                  <div className="h-px mb-3 rounded-full" style={{ background:`linear-gradient(90deg,${p.from}44,transparent)` }} />
                  <p className="text-[13px] leading-[1.8] text-white/48">{p.desc}</p>
                  {/* bottom accent line */}
                  <div className="mt-5 h-[2px] w-8 rounded-full group-hover:w-16 transition-all duration-500"
                    style={{ background:`linear-gradient(90deg,${p.from},${p.to})` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM SECTIONS ══ */}
      <MutipleServices industries={industries} />
      <Location locations={officeLocations} />
      <Testimonial />
    </div>
  );
}
