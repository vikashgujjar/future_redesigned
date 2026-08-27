"use client";
import React, { useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { RxCross2, FaEnvelope, FaPhoneAlt, FaSkype, FaChevronDown, FaArrowRight } from "./icons";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Header renders on every page, but the quote-request popup it opens is
// closed by default — code-splitting it out keeps its form/validation JS
// (and the sweetalert2/axios it pulls in) out of every page's initial load,
// fetched only once someone actually clicks "Request A Quote".
const Login = dynamic(() => import("./Login"));

/* ─── Mega menu data (fallback — used if the CMS is unreachable or a menu
   hasn't been configured yet; see getNavigationMenu() in app/lib/cms.js) ─── */
const FALLBACK_SERVICE_COLUMNS = [
  {
    heading: "Website Design",
    icon: "/Assets/web-development.webp",
    href: "/website-design",
    items: [
      { label: "eCommerce Website", href: "/ecommerce-website-development" },
      { label: "Web Application Development", href: "/web-app-development" },
      { label: "CMS Web Development", href: "/cms-development" },
      { label: "Small Business Website", href: "/business-developement" },
      { label: "Corporate Website", href: "/web-app-developemnt-corporate" },
    ],
  },
  {
    heading: "Mobile App Development",
    icon: "/Assets/mobile-PPC-Management.webp",
    href: "/application-developement",
    items: [
      { label: "Android App Development", href: "/android-application-development" },
      { label: "IOS App Development", href: "/ios-application-development" },
      { label: "Hybrid App Development", href: "/hybrid-application-development" },
      { label: "Mobile App Testing", href: "/mobile-application-testing" },
      { label: "Quality Assurance", href: "/quality-assurance" },
    ],
  },
  {
    heading: "Digital Marketing Service",
    icon: "/Assets/social-media-marketing.webp",
    href: "/digital-marketing-service",
    items: [
      { label: "Seo Services", href: "/search-engine-optimization" },
      { label: "PPC Management", href: "/pay-per-click-service" },
      { label: "Social Media Marketing", href: "/social-media-marketing-service" },
      { label: "Local Seo Services", href: "/local-search-engine-optimization" },
      { label: "Content Marketing Services", href: "/content-marketing-service" },
    ],
  },
  {
    heading: "Design & Branding",
    icon: "/Assets/cms_1.webp",
    href: "/graphic-design-services",
    items: [
      { label: "Logo Design", href: "/logo-design-services" },
      { label: "Corporate Identity Design", href: "/corporate-stationery-design" },
      { label: "Brochure Design", href: "/brochure-design-service" },
      { label: "Animated Videos", href: "/animated-services" },
      { label: "Creative Agency", href: "/creative-services" },
    ],
  },
  {
    heading: "Cyber Security",
    icon: "/Assets/Security.webp",
    href: "/cyber-security-service",
    items: [
      { label: "Vulnerability Assessment", href: "/vulnerability-assessment-service" },
      { label: "Penetration Testing", href: "/penetration-testing-service" },
      { label: "Network Security", href: "/network-security-service" },
      { label: "Cloud Security", href: "/cloud-security-service" },
      { label: "Data Protection & Compliance", href: "/data-protection-compliance-service" },
      { label: "Incident Response", href: "/incident-response-service" },
    ],
  },
];

const FALLBACK_TECH_COLUMNS = [
  {
    heading: "Web Technology",
    icon: "/Assets/web-development.webp",
    href: "#",
    items: [
      { label: "PHP-Laravel, Codeigniter", href: "/php-laravel-codeigniter-services" },
      { label: "React js, Vue js, Node js", href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Asp .net", href: "/asp-dot-net-service" },
      { label: "Python-Django, flask", href: "/python-and-django-service" },
      { label: "Angular", href: "/angularjs-development-service" },
      { label: "WP, Shopify, Joomla, Magento", href: "/wordpress-and-shopify-development" },
    ],
  },
  {
    heading: "Mobile Application",
    icon: "/Assets/mobile-PPC-Management.webp",
    href: "#",
    items: [
      { label: "Swift", href: "/swift-app-development" },
      { label: "React native", href: "/react-native-application-development" },
      { label: "Flutter", href: "/flutter-application-development" },
      { label: "Ionic", href: "/ionic-application-development" },
      { label: "Java", href: "/java-application-development" },
      { label: "UNITY - 2D, 3D", href: "/unity-game-development" },
    ],
  },
  {
    heading: "AI / ML",
    icon: "/Assets/ai-ml.webp",
    href: "#",
    items: [
      { label: "Python-NumPy, Pandas", href: "/python-numpy-development" },
      { label: "Ruby, Pybrain", href: "/ruby-and-pybrain-development" },
      { label: "Java", href: "/java-application-development" },
      { label: "Julia", href: "/julia-developement-service" },
      { label: "Lisp", href: "/lisp-online-store-development" },
      { label: "Haskell", href: "/haskell-ai-and-ml-development" },
    ],
  },
  {
    heading: "Blockchain",
    icon: "/Assets/blockchain.webp",
    href: "#",
    items: [
      { label: "C++", href: "/c-plus-plus-blockchain-development" },
      { label: "Java", href: "/java-application-development" },
      { label: "Customer Polls", href: "/customer-polls-blockchain" },
      { label: "Solidity", href: "/solidity-blockchain-development" },
      { label: "PHP", href: "/php-laravel-codeigniter-services" },
      { label: "Python", href: "/python-blockchain-development" },
    ],
  },
];

const FALLBACK_ABOUT_DROPDOWN = [
  { label: "Why Us", href: "/why-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Mission & Vision", href: "/mission" },
  { label: "Our Portfolio", href: "/our-portfolio" },
  { label: "Our Pricing Package", href: "/price" },
];

/* ─── Mega Menu Column ──────────────────────────── */
function MegaColumn({ col }) {
  return (
    <div>
      <Link href={col.href} className="flex items-center gap-2.5 pb-3 mb-3 border-b border-gray-100 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-50 to-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:from-teal-100 group-hover:to-indigo-100 transition-colors shadow-sm">
          <Image src={col.icon} alt={col.heading} width={32} height={32} unoptimized className="w-4 h-4 object-contain" />
        </div>
        <span
          className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition-colors"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {col.heading}
        </span>
      </Link>
      <ul className="space-y-0.5">
        {col.items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-gray-500 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-150 group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-indigo-400 flex-shrink-0 transition-colors" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Mega Menu Promo Panel ─────────────────────── */
function PromoPanel({ tag, title, desc, href, linkLabel, reverse = false }) {
  return (
    <div className="w-52 flex-shrink-0">
      <div
        className={`relative rounded-2xl overflow-hidden p-5 h-full min-h-[220px] flex flex-col justify-between ${
          reverse
            ? "bg-gradient-to-br from-indigo-600 to-teal-400"
            : "bg-gradient-to-br from-teal-400 to-indigo-700"
        }`}
      >
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
        <div className="absolute top-1/2 right-4 w-10 h-10 rounded-full bg-white/5" />

        {/* Content */}
        <div className="relative z-10">
          <span
            className="inline-block text-[10px] font-bold text-white uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {tag}
          </span>
          <h3
            className="text-white font-bold text-sm leading-snug mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="text-white/75 text-xs leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {desc}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="relative z-10 mt-4 self-start inline-flex items-center gap-1.5 bg-white text-indigo-700 font-semibold text-xs px-4 py-2 rounded-full hover:bg-white/90 hover:shadow-lg transition-all duration-200"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {linkLabel}
          <FaArrowRight className="w-2.5 h-2.5" />
        </Link>
      </div>
    </div>
  );
}

/* ─── Main Header ───────────────────────────────── */
export default function Header({ serviceColumns, techColumns, aboutDropdown } = {}) {
  serviceColumns = serviceColumns?.length ? serviceColumns : FALLBACK_SERVICE_COLUMNS;
  techColumns = techColumns?.length ? techColumns : FALLBACK_TECH_COLUMNS;
  aboutDropdown = aboutDropdown?.length ? aboutDropdown : FALLBACK_ABOUT_DROPDOWN;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(null);
  const [mobileTechOpen, setMobileTechOpen] = useState(null);

  const closeTimerRef = useRef(null);

  const openMenuNow = useCallback((key) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(key);
  }, []);

  const closeMenuDelayed = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 200);
  }, []);

  const pathname = usePathname();
  const isActive = (path) =>
    pathname === path
      ? "bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text"
      : "";

  const toggleMobile = (key) =>
    setMobileOpen(mobileOpen === key ? null : key);

  return (
    <>
      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes hdrArcSpin1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes hdrArcSpin2 {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes hdrDotFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.28; }
          50%       { transform: translateY(-5px); opacity: 0.55; }
        }
        @keyframes hdrWaveDrift {
          0%, 100% { transform: translateX(0px) scaleX(1); }
          50%       { transform: translateX(10px) scaleX(1.04); }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          DESKTOP HEADER — fixed below TopBar (top-9)
      ══════════════════════════════════════════ */}
      <div
        className="hidden lg:block fixed top-9 left-0 w-full z-40 bg-white shadow-md border-b border-gray-100"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* ── Animated SVG vector decorations ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

          {/* ▸ RIGHT-TOP — concentric arcs radiating from corner */}
          <div className="absolute -top-1 -right-1 w-[170px] h-[170px]">
            <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hdrRT1" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.55"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.04"/>
                </linearGradient>
                <linearGradient id="hdrRT2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.06"/>
                </linearGradient>
                <linearGradient id="hdrRT3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.04"/>
                </linearGradient>
              </defs>
              {/* Outer arc — slow spin */}
              <g style={{ transformOrigin: "170px 0px", animation: "hdrArcSpin1 30s linear infinite" }}>
                <circle cx="170" cy="0" r="100" stroke="url(#hdrRT1)" strokeWidth="1" fill="none"
                  strokeDasharray="110 160" strokeLinecap="round"/>
              </g>
              {/* Mid arc — reverse spin */}
              <g style={{ transformOrigin: "170px 0px", animation: "hdrArcSpin2 22s linear infinite" }}>
                <circle cx="170" cy="0" r="72" stroke="url(#hdrRT2)" strokeWidth="1.5" fill="none"
                  strokeDasharray="75 115" strokeLinecap="round"/>
              </g>
              {/* Inner arc — slow reverse */}
              <g style={{ transformOrigin: "170px 0px", animation: "hdrArcSpin1 38s linear infinite reverse" }}>
                <circle cx="170" cy="0" r="46" stroke="url(#hdrRT3)" strokeWidth="1" fill="none"
                  strokeDasharray="50 75" strokeLinecap="round"/>
              </g>
              {/* Floating dots */}
              <circle cx="58" cy="55" r="2.5" fill="#2dd4bf" opacity="0.28"
                style={{ animation: "hdrDotFloat 4.2s ease-in-out infinite" }}/>
              <circle cx="88" cy="82" r="1.5" fill="#6366f1" opacity="0.22"
                style={{ animation: "hdrDotFloat 5.8s ease-in-out infinite 0.8s" }}/>
              <circle cx="28" cy="28" r="1.5" fill="#2dd4bf" opacity="0.3"
                style={{ animation: "hdrDotFloat 3.6s ease-in-out infinite 1.6s" }}/>
            </svg>
          </div>

          {/* ▸ LEFT-BOTTOM — concentric arcs from corner */}
          <div className="absolute -bottom-1 -left-1 w-[140px] h-[140px]">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hdrLB1" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.04"/>
                </linearGradient>
                <linearGradient id="hdrLB2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              {/* Outer arc */}
              <g style={{ transformOrigin: "0px 140px", animation: "hdrArcSpin2 26s linear infinite" }}>
                <circle cx="0" cy="140" r="88" stroke="url(#hdrLB1)" strokeWidth="1" fill="none"
                  strokeDasharray="90 140" strokeLinecap="round"/>
              </g>
              {/* Mid arc */}
              <g style={{ transformOrigin: "0px 140px", animation: "hdrArcSpin1 19s linear infinite reverse" }}>
                <circle cx="0" cy="140" r="60" stroke="url(#hdrLB1)" strokeWidth="1.5" fill="none"
                  strokeDasharray="62 95" strokeLinecap="round"/>
              </g>
              {/* Inner arc */}
              <g style={{ transformOrigin: "0px 140px", animation: "hdrArcSpin2 32s linear infinite" }}>
                <circle cx="0" cy="140" r="35" stroke="url(#hdrLB2)" strokeWidth="1" fill="none"
                  strokeDasharray="38 58" strokeLinecap="round"/>
              </g>
              {/* Dot */}
              <circle cx="75" cy="68" r="1.8" fill="#6366f1" opacity="0.22"
                style={{ animation: "hdrDotFloat 5s ease-in-out infinite 2.2s" }}/>
            </svg>
          </div>

          {/* ▸ CENTER — subtle wave line connecting both sides */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[70px] opacity-[0.35]"
            style={{ animation: "hdrWaveDrift 8s ease-in-out infinite" }}>
            <svg width="100%" height="70" viewBox="0 0 1400 70" preserveAspectRatio="none" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hdrWave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0"/>
                  <stop offset="20%" stopColor="#2dd4bf" stopOpacity="0.25"/>
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.18"/>
                  <stop offset="80%" stopColor="#2dd4bf" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 35 Q175 18 350 35 Q525 52 700 35 Q875 18 1050 35 Q1225 52 1400 35"
                stroke="url(#hdrWave)" strokeWidth="1" fill="none" strokeLinecap="round"/>
              <path d="M0 35 Q175 24 350 35 Q525 46 700 35 Q875 24 1050 35 Q1225 46 1400 35"
                stroke="url(#hdrWave)" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>

        </div>

        {/* ── Nav content ── */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-20">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Header/secondary-logo.webp"
                alt="Future IT Touch logo"
                width={1377} height={350} unoptimized priority
                className="h-10 xl:h-12 w-auto"
              />
            </Link>

            {/* Nav Links */}
            <ul className="flex items-center gap-1 xl:gap-2">

              {/* Home */}
              <li>
                <Link
                  href="/"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:text-indigo-600 transition-all duration-200 ${isActive("/")}`}
                >
                  Home
                </Link>
              </li>

              {/* About */}
              <li
                className="relative"
                onMouseEnter={() => openMenuNow("about")}
                onMouseLeave={closeMenuDelayed}
              >
                <Link
                  href="/about"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:text-indigo-600 transition-all duration-200 ${isActive("/about")}`}
                >
                  About
                  <FaChevronDown
                    className={`w-3 h-3 text-indigo-500 transition-transform duration-200 ${openMenu === "about" ? "rotate-180" : ""}`}
                  />
                </Link>

                {openMenu === "about" && (
                  <div
                    className="absolute top-full left-0 mt-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => openMenuNow("about")}
                    onMouseLeave={closeMenuDelayed}
                  >
                    {/* Top accent */}
                    <div className="h-0.5 bg-gradient-to-r from-teal-400 to-indigo-700 -mt-0 mb-1" />
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/70 transition-all duration-150 group"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-indigo-400 flex-shrink-0 transition-colors" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Service */}
              <li
                className="relative"
                onMouseEnter={() => openMenuNow("service")}
                onMouseLeave={closeMenuDelayed}
              >
                <Link
                  href="/service"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:text-indigo-600 transition-all duration-200 ${isActive("/service")}`}
                >
                  Service
                  <FaChevronDown
                    className={`w-3 h-3 text-indigo-500 transition-transform duration-200 ${openMenu === "service" ? "rotate-180" : ""}`}
                  />
                </Link>

                {openMenu === "service" && (
                  <div
                    className="fixed left-0 right-0 top-[95px] bg-white shadow-2xl border-t-2 border-teal-400 z-50"
                    onMouseEnter={() => openMenuNow("service")}
                    onMouseLeave={closeMenuDelayed}
                  >
                    <div className="max-w-[1400px] mx-auto px-8 xl:px-20 py-7">
                      <div className="flex gap-8 items-start">
                        {/* 5 link columns */}
                        <div className="flex-1 grid grid-cols-5 gap-6">
                          {serviceColumns.map((col) => (
                            <MegaColumn key={col.heading} col={col} />
                          ))}
                        </div>
                        {/* Promo panel */}
                        {/* <PromoPanel
                          tag="Our Services"
                          title="End-to-End Digital Solutions for Every Business"
                          desc="From web to mobile apps, we build products that scale."
                          href="/service"
                          linkLabel="View All Services"
                        /> */}
                      </div>
                    </div>
                  </div>
                )} 
              </li>

              {/* Technologies */}
              <li
                className="relative"
                onMouseEnter={() => openMenuNow("tech")}
                onMouseLeave={closeMenuDelayed}
              >
                <Link
                  href="/trending-technology"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:text-indigo-600 transition-all duration-200 ${isActive("/trending-technology")}`}
                >
                  Technologies
                  <FaChevronDown
                    className={`w-3 h-3 text-indigo-500 transition-transform duration-200 ${openMenu === "tech" ? "rotate-180" : ""}`}
                  />
                </Link>

                {openMenu === "tech" && (
                  <div
                    className="fixed left-0 right-0 top-[95px] bg-white shadow-2xl border-t-2 border-teal-400 z-50"
                    onMouseEnter={() => openMenuNow("tech")}
                    onMouseLeave={closeMenuDelayed}
                  >
                    <div className="max-w-[1400px] mx-auto px-8 xl:px-20 py-7">
                      <div className="flex gap-8 items-start">
                        {/* 4 link columns */}
                        <div className="flex-1 grid grid-cols-4 gap-8">
                          {techColumns.map((col) => (
                            <MegaColumn key={col.heading} col={col} />
                          ))}
                        </div>
                        {/* Promo panel */}
                        <PromoPanel
                          tag="Technologies"
                          title="Cutting-Edge Tech Stack We Master"
                          desc="Web, Mobile, AI/ML & Blockchain solutions built to last."
                          href="/trending-technology"
                          linkLabel="Explore Tech"
                          reverse
                        />
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Blogs */}
              <li>
                <Link
                  href="/blog"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:text-indigo-600 transition-all duration-200 ${isActive("/blog")}`}
                >
                  Blogs
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link
                  href="/contact"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:text-indigo-600 transition-all duration-200 ${isActive("/contact")}`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <button
              onClick={() => setIsPopupOpen(true)}
              className="flex-shrink-0 relative overflow-hidden bg-gradient-to-r from-teal-400 to-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-px transition-all duration-200 focus:outline-none group"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="relative z-10">Request A Quote</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE HEADER
      ══════════════════════════════════════════ */}
      <div
        className="lg:hidden fixed top-9 left-0 w-full z-40 bg-white shadow-md border-b border-gray-100"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="flex items-center justify-between px-4 h-[60px]">
          <Link href="/">
            <Image
              src="/images/Header/secondary-logo.webp"
              alt="Future IT Touch logo"
              width={1377} height={350} unoptimized priority
              className="h-12 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <RxCross2 className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Slide-out Sidebar ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* overlay */}
          <div
            className="flex-1 bg-black/65 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* panel */}
          <div
            className="mob-sb w-[310px] h-full overflow-y-auto flex flex-col"
            style={{
              background: "linear-gradient(145deg,#070d1a 0%,#0c1330 100%)",
              boxShadow: "-8px 0 40px rgba(0,0,0,.60), -1px 0 0 rgba(255,255,255,.06)",
              fontFamily: "'Inter',sans-serif",
            }}
          >
            <style>{`
              @keyframes mobSbIn {
                from { transform: translateX(100%); }
                to   { transform: translateX(0); }
              }
              .mob-sb { animation: mobSbIn .28s cubic-bezier(.22,.87,.48,1) both; }

              @keyframes mobShimmer {
                from { background-position: 0% 0; }
                to   { background-position: 300% 0; }
              }
              .mob-shimmer {
                height: 3px;
                background: linear-gradient(90deg,#2dd4bf,#6366f1,#0ea5e9,#8b5cf6,#2dd4bf);
                background-size: 300% 100%;
                animation: mobShimmer 4s linear infinite;
              }

              .mob-link {
                display: flex; align-items: center; gap: 10px;
                padding: 10px 14px; border-radius: 12px;
                font-size: 14px; font-weight: 500;
                color: rgba(255,255,255,.58);
                transition: background .18s, color .18s;
                cursor: pointer;
              }
              .mob-link:hover { background: rgba(255,255,255,.07); color: #fff; }

              .mob-acc-head {
                display: flex; align-items: center; justify-content: space-between;
                padding: 10px 14px; border-radius: 12px;
                font-size: 14px; font-weight: 500;
                color: rgba(255,255,255,.58);
                transition: background .18s, color .18s;
                cursor: pointer;
              }
              .mob-acc-head:hover { background: rgba(255,255,255,.07); color: #fff; }
              .mob-acc-head.open { background: rgba(45,212,191,.08); color: #2dd4bf; }

              .mob-sub-link {
                display: block; padding: 7px 10px; border-radius: 8px;
                font-size: 12.5px; color: rgba(255,255,255,.40);
                transition: color .16s, background .16s;
              }
              .mob-sub-link:hover { color: #2dd4bf; background: rgba(45,212,191,.06); }

              .mob-sub2-head {
                display: flex; align-items: center; justify-content: space-between;
                padding: 7px 10px; border-radius: 8px; cursor: pointer;
                font-size: 12px; font-weight: 600;
                color: rgba(45,212,191,.80);
                transition: background .16s;
              }
              .mob-sub2-head:hover { background: rgba(45,212,191,.06); }

              .mob-sub3-link {
                display: block; padding: 5px 10px; border-radius: 6px;
                font-size: 12px; color: rgba(255,255,255,.35);
                transition: color .16s, background .16s;
              }
              .mob-sub3-link:hover { color: #2dd4bf; background: rgba(45,212,191,.05); }
            `}</style>

            {/* ── shimmer top bar ── */}
            <div className="mob-shimmer flex-shrink-0" />

            {/* ── header: logo + close ── */}
            <div
              className="flex items-center justify-between px-4 py-4 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}
            >
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src="/images/Header/secondary-logo.webp" alt="Future IT Touch logo"
                  width={1377} height={350} unoptimized
                  className="h-8 w-auto brightness-200" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.55)" }}
              >
                <RxCross2 className="w-4 h-4" />
              </button>
            </div>

            {/* ── nav items ── */}
            <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">

              {/* Home */}
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="mob-link">
                Home
              </Link>

              {/* ── About accordion ── */}
              <div>
                <div className={`mob-acc-head ${mobileOpen === "about" ? "open" : ""}`}
                  onClick={() => toggleMobile("about")}>
                  <span className="flex-1">About</span>
                  <FaChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${mobileOpen === "about" ? "rotate-180 text-teal-400" : "text-white/30"}`} />
                </div>
                {mobileOpen === "about" && (
                  <div className="mt-1 ml-3 pl-3 space-y-0.5"
                    style={{ borderLeft: "2px solid rgba(45,212,191,.22)" }}>
                    {aboutDropdown.map((item) => (
                      <Link key={item.label} href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mob-sub-link">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Services accordion ── */}
              <div>
                <div className={`mob-acc-head ${mobileOpen === "service" ? "open" : ""}`}
                  onClick={() => toggleMobile("service")}>
                  <span className="flex-1">Services</span>
                  <FaChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${mobileOpen === "service" ? "rotate-180 text-teal-400" : "text-white/30"}`} />
                </div>
                {mobileOpen === "service" && (
                  <div className="mt-1 ml-3 pl-3 space-y-1"
                    style={{ borderLeft: "2px solid rgba(45,212,191,.22)" }}>
                    {serviceColumns.map((col) => (
                      <div key={col.heading}>
                        <div className="mob-sub2-head"
                          onClick={() => setMobileServiceOpen(mobileServiceOpen === col.heading ? null : col.heading)}>
                          <span>{col.heading}</span>
                          <FaChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform ${mobileServiceOpen === col.heading ? "rotate-180" : ""}`} />
                        </div>
                        {mobileServiceOpen === col.heading && (
                          <div className="ml-2 pl-3 space-y-0.5"
                            style={{ borderLeft: "1px solid rgba(255,255,255,.08)" }}>
                            {col.items.map((item) => (
                              <Link key={item.label} href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mob-sub3-link">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Technology accordion ── */}
              <div>
                <div className={`mob-acc-head ${mobileOpen === "tech" ? "open" : ""}`}
                  onClick={() => toggleMobile("tech")}>
                  <span className="flex-1">Technology</span>
                  <FaChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${mobileOpen === "tech" ? "rotate-180 text-teal-400" : "text-white/30"}`} />
                </div>
                {mobileOpen === "tech" && (
                  <div className="mt-1 ml-3 pl-3 space-y-1"
                    style={{ borderLeft: "2px solid rgba(45,212,191,.22)" }}>
                    {techColumns.map((col) => (
                      <div key={col.heading}>
                        <div className="mob-sub2-head"
                          onClick={() => setMobileTechOpen(mobileTechOpen === col.heading ? null : col.heading)}>
                          <span>{col.heading}</span>
                          <FaChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform ${mobileTechOpen === col.heading ? "rotate-180" : ""}`} />
                        </div>
                        {mobileTechOpen === col.heading && (
                          <div className="ml-2 pl-3 space-y-0.5"
                            style={{ borderLeft: "1px solid rgba(255,255,255,.08)" }}>
                            {col.items.map((item) => (
                              <Link key={item.label} href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mob-sub3-link">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog */}
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="mob-link">
                Blog
              </Link>

              {/* Contact */}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mob-link">
                Contact
              </Link>

              {/* CTA */}
              <div className="pt-3 pb-1">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); setIsPopupOpen(true); }}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    boxShadow: "0 6px 20px rgba(45,212,191,.25)",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  Request A Quote
                </button>
              </div>
            </nav>

            {/* ── bottom contact strip ── */}
            <div
              className="flex-shrink-0 px-4 py-5 space-y-3"
              style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}
            >
              <a href="tel:+91-7056937000"
                className="flex items-center gap-3 text-[13px] transition-colors hover:text-teal-400"
                style={{ color: "rgba(255,255,255,.50)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(45,212,191,.12)", border: "1px solid rgba(45,212,191,.25)" }}>
                  <FaPhoneAlt className="w-3 h-3 text-teal-400" />
                </div>
                +91-7056937000
              </a>
              <a href="mailto:info@futuretouch.in"
                className="flex items-center gap-3 text-[13px] transition-colors hover:text-indigo-400"
                style={{ color: "rgba(255,255,255,.50)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,.12)", border: "1px solid rgba(99,102,241,.25)" }}>
                  <FaEnvelope className="w-3 h-3 text-indigo-400" />
                </div>
                info@futuretouch.in
              </a>
              <a href="skype:live:.cid.313b26920df66baf"
                className="flex items-center gap-3 text-[13px] transition-colors hover:text-sky-400"
                style={{ color: "rgba(255,255,255,.50)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(14,165,233,.12)", border: "1px solid rgba(14,165,233,.25)" }}>
                  <FaSkype className="w-3 h-3 text-sky-400" />
                </div>
                futuretouch
              </a>

              <p className="text-center text-[10px] pt-1"
                style={{ color: "rgba(255,255,255,.16)", fontFamily: "'Inter',sans-serif" }}>
                © 2024 Future IT Touch Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {isPopupOpen && (
        <Login handleClosePopup={() => setIsPopupOpen(false)} isPopupOpen={isPopupOpen} />
      )}
    </>
  );
}
