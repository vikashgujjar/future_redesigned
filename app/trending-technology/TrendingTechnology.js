"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaMobileAlt, FaGlobe, FaCode, FaLink, FaBrain, FaGamepad,
  FaArrowRight, FaCheckCircle, FaRocket, FaShieldAlt, FaCogs,
  FaStar, FaLightbulb, FaChartLine, FaJava, FaApple,
} from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiAngular, SiVuedotjs, SiNextdotjs,
  SiPhp, SiWordpress,
  SiFlutter, SiAndroid, SiIonic,
  SiEthereum, SiPython, SiCplusplus,
  SiTensorflow, SiJulia,
  SiUnity,
} from "react-icons/si";
import trendtechImg from "../Assets/trendtech.webp";
import Location from "../components/Location";

// ── gradient animated text class (matches global keyframe tcpGrad) ──
const HL = "bg-[linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7)] bg-[length:200%_200%] bg-clip-text text-transparent [animation:tcpGrad_5s_ease-in-out_infinite]";

const Chevron = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M2 1.5l3 2.5-3 2.5" stroke="rgba(255,255,255,.30)"
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Technology category data ──
const CATEGORIES = [
  {
    icon: <FaMobileAlt />,
    color: { from: "#2dd4bf", to: "#06b6d4" },
    title: "App Development",
    subtitle: "Mobile Platforms",
    desc: "Build powerful iOS, Android & cross-platform apps with modern frameworks that deliver native-like performance across every device and screen size.",
    tags: ["iOS / Swift", "Android / Kotlin", "React Native", "Flutter", "Ionic"],
    links: [
      { label: "iOS App Dev", href: "/IOS" },
      { label: "Android Dev", href: "/android-application-development" },
      { label: "React Native", href: "/react-native-application-development" },
      { label: "Flutter", href: "/flutter-application-development" },
      { label: "Ionic / Hybrid", href: "/ionic-application-development" },
    ],
    icons: [<FaApple key="ios" />, <SiAndroid key="and" />, <SiReact key="rn" />, <SiFlutter key="fl" />, <SiIonic key="ion" />],
  },
  {
    icon: <FaGlobe />,
    color: { from: "#6366f1", to: "#4f46e5" },
    title: "Web Development",
    subtitle: "Full-Stack Solutions",
    desc: "Enterprise-grade web applications using battle-tested technologies — PHP, Java, ASP.NET, and WordPress — built for performance, security, and scalability.",
    tags: ["PHP / Laravel", "Java / Spring", "ASP.NET", "WordPress", "Shopify"],
    links: [
      { label: "PHP / Laravel", href: "/php-laravel-codeigniter-services" },
      { label: "Java Spring", href: "/java-application-development" },
      { label: "ASP.NET", href: "/asp-dot-net-service" },
      { label: "WordPress", href: "/wordpress-and-shopify-development" },
    ],
    icons: [<SiPhp key="php" />, <FaJava key="java" />, <SiWordpress key="wp" />],
  },
  {
    icon: <FaCode />,
    color: { from: "#a855f7", to: "#7c3aed" },
    title: "Frontend Frameworks",
    subtitle: "Modern JavaScript",
    desc: "Build blazing-fast, interactive UIs with today's leading frontend frameworks — React, Vue, Angular, and Next.js — delivering seamless user experiences.",
    tags: ["React.js", "Next.js", "Vue.js", "Angular", "Node.js"],
    links: [
      { label: "React / Vue / Node", href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Angular", href: "/angularjs-development-service" },
    ],
    icons: [<SiReact key="react" />, <SiNextdotjs key="next" />, <SiVuedotjs key="vue" />, <SiAngular key="ang" />, <SiNodedotjs key="node" />],
  },
  {
    icon: <FaLink />,
    color: { from: "#10b981", to: "#059669" },
    title: "Blockchain Development",
    subtitle: "Web3 & DeFi",
    desc: "Decentralized applications, smart contracts, and blockchain infrastructure using Solidity, Python, and C++ on Ethereum, Polygon, and Hyperledger networks.",
    tags: ["Solidity / Ethereum", "Python Web3", "C++ Nodes", "DeFi / NFTs", "Smart Contracts"],
    links: [
      { label: "Solidity / Ethereum", href: "/solidity-blockchain-development" },
      { label: "Python Blockchain", href: "/python-blockchain-development" },
      { label: "C++ Blockchain", href: "/c-plus-plus-blockchain-development" },
      { label: "Customer Polls", href: "/customer-polls-blockchain" },
    ],
    icons: [<SiEthereum key="eth" />, <SiPython key="py" />, <SiCplusplus key="cpp" />],
  },
  {
    icon: <FaBrain />,
    color: { from: "#f59e0b", to: "#d97706" },
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems",
    desc: "High-performance AI, ML, and data science solutions using Python, Haskell, Julia, and NumPy — powering predictive analytics, automation, and neural networks.",
    tags: ["Python / TensorFlow", "NumPy / Pandas", "Haskell ML", "Julia AI", "PyTorch"],
    links: [
      { label: "Python & Django", href: "/python-and-django-service" },
      { label: "NumPy / Data Science", href: "/python-numpy-development" },
      { label: "Haskell AI & ML", href: "/haskell-ai-and-ml-development" },
      { label: "Julia Computing", href: "/julia-developement-service" },
    ],
    icons: [<SiPython key="py" />, <SiTensorflow key="tf" />, <SiJulia key="jul" />],
  },
  {
    icon: <FaGamepad />,
    color: { from: "#ec4899", to: "#db2777" },
    title: "Game & AR/VR Development",
    subtitle: "Immersive Experiences",
    desc: "2D / 3D games, AR/VR experiences, and multiplayer platforms built with Unity — delivering immersive, cross-platform interactive experiences for all audiences.",
    tags: ["Unity 2022 LTS", "AR / VR", "Multiplayer", "C# Scripting", "Game UI"],
    links: [
      { label: "Unity Game Dev", href: "/unity-game-development" },
    ],
    icons: [<SiUnity key="unity" />],
  },
];

const WHY_ITEMS = [
  { icon: <FaRocket />, title: "Competitive Edge",       desc: "Early adoption of emerging technologies positions your business ahead of competitors before the market commoditizes them." },
  { icon: <FaShieldAlt />, title: "Future-Proof Systems",  desc: "Building on modern stacks means less technical debt, easier maintenance, and seamless scalability as your needs grow." },
  { icon: <FaCogs />, title: "Better Performance",      desc: "Modern frameworks and runtimes deliver significantly faster load times, lower resource usage, and higher throughput." },
  { icon: <FaLightbulb />, title: "Innovation Velocity",    desc: "Trending technologies come with rich ecosystems, active communities, and tooling that dramatically accelerate development." },
  { icon: <FaChartLine />, title: "Higher ROI",               desc: "Efficient, scalable tech choices reduce long-term operating costs and open new revenue streams through automation and intelligence." },
  { icon: <FaStar />, title: "Talent & Ecosystem",      desc: "Modern stacks attract better developers, have more third-party integrations, and enjoy longer, more robust support lifecycles." },
];

const STATS = [
  { num: "12+",  label: "Years of Expertise" },
  { num: "500+", label: "Projects Delivered" },
  { num: "200+", label: "Clients Worldwide" },
  { num: "30+",  label: "Technologies Mastered" },
];

export default function TrendingTechnology() {
  return (
    <div className="font-['Inter',sans-serif] overflow-x-clip">

      {/* ════════════ 1. HEADER SPACER ════════════ */}
      {/* <div className="h-24 max-sm:h-[57px] max-md:h-20 bg-white" /> */}

      {/* ════════════ 2. HERO BANNER ════════════ */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        {/* BG */}
        <div className="absolute inset-0 bg-[#030712]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,5,24,.98)_0%,rgba(8,14,40,.92)_50%,rgba(4,5,24,.65)_100%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Orbs */}
        <div className="absolute top-[-8%] left-[-4%] w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.18),transparent_62%)]" />
        <div className="absolute bottom-[-12%] right-[20%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.15),transparent_62%)]" />
        <div className="absolute top-[25%] right-[-6%] w-[420px] h-[420px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,.12),transparent_62%)]" />

        {/* Scan beam */}
        <div className="absolute pointer-events-none top-[40%] left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(45,212,191,.55),rgba(99,102,241,.40),transparent)] [animation:tcpBeam_3.8s_ease-in-out_infinite]" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="flex-1 min-w-0 text-center lg:text-left [animation:tcpSlide_.7s_cubic-bezier(.22,1,.36,1)_.05s_both]">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center lg:justify-start gap-2 flex-wrap mb-6 text-[10.5px] font-semibold tracking-[.18em] uppercase font-['Poppins',sans-serif]">
              <Link href="/" className="text-white/40 hover:text-[#2dd4bf] transition-colors">Home</Link>
              <Chevron />
              <span className="text-white/40">Technologies</span>
              <Chevron />
              <span className="text-[#2dd4bf]">Trending Technology</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mb-6 text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf] font-['Poppins',sans-serif]">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-ping bg-[#2dd4bf]" />
              Future IT Touch
              <span className="w-px h-4 bg-[#2dd4bf]/25" />
              Tech Innovation
            </div>

            <h1 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.75rem,4vw,3.4rem)] leading-[1.13] tracking-[-0.015em] text-white mb-4">
              Website &amp; Application<br />
              <span className={HL}>Trending Technologies</span>
            </h1>
            <div className="h-[3px] w-14 rounded-full mb-5 mx-auto lg:mx-0 bg-[linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)] [animation:tcpBar_.75s_cubic-bezier(.22,1,.36,1)_.22s_both]" />

            <p className="text-white/70 text-[.95rem] sm:text-[1.05rem] leading-[1.7] max-w-xl mb-4 mx-auto lg:mx-0">
              Standards in web development change faster than ever. We stay
              one step ahead — analyzing the frameworks, platforms, and
              paradigms gaining the most traction across every industry.
            </p>
            <p className="text-white/55 text-[.90rem] leading-[1.65] max-w-xl mb-8 mx-auto lg:mx-0">
              From mobile apps and blockchain to AI/ML and game development,
              we deliver cutting-edge solutions that future-proof your business
              and accelerate innovation.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline hover:shadow-[0_8px_28px_rgba(99,102,241,.5)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                Get Started <FaArrowRight className="text-[11px]" />
              </Link>
              <Link href="tel:+917056937000"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline border border-white/20 hover:border-[#2dd4bf]/50 hover:bg-white/5 transition-all duration-200">
                Call: 7056937000
              </Link>
            </div>

            {/* Quick highlights */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              {["30+ Technologies", "500+ Projects Delivered", "12+ Years Experience"].map(t => (
                <div key={t} className="inline-flex items-center gap-2 text-white/60 text-xs font-medium">
                  <FaCheckCircle className="text-[#2dd4bf] flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image card */}
          <div className="flex-shrink-0 w-full max-w-[420px] lg:max-w-[460px] [animation:tcpSlide_.7s_cubic-bezier(.22,1,.36,1)_.18s_both]">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,.6)] border border-white/10">
              <Image src={trendtechImg} alt="Trending Technology" width={460} height={380}
                className="object-cover w-full h-[320px] sm:h-[380px]" priority />
              {/* overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 bg-[rgba(4,5,24,.82)] backdrop-blur-md border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                  <FaRocket className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm font-['Poppins',sans-serif]">Future-Ready Tech Stack</div>
                  <div className="text-white/50 text-[11px]">Covering 30+ modern technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 3. STATS BAR ════════════ */}
      <section className="bg-[linear-gradient(135deg,#050b20,#0a0f2e)] border-y border-white/[.07]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 xl:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-['Poppins',sans-serif] font-extrabold text-3xl sm:text-4xl bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] bg-clip-text text-transparent">{s.num}</div>
              <div className="text-white/55 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ 4. INTRO SECTION ════════════ */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#f0f4ff_0%,#fafbff_50%,#f5f0ff_100%)] py-24 px-5 sm:px-10 xl:px-16">
        {/* Light decorative orbs */}
        <div className="absolute top-[-8%] left-[-4%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.10),transparent_65%)]" />
        <div className="absolute bottom-[-8%] right-[-4%] w-[480px] h-[480px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.09),transparent_65%)]" />
        <div className="absolute top-[35%] right-[30%] w-[300px] h-[300px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,.07),transparent_65%)]" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(99,102,241,.08)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative z-10 max-w-[1280px] mx-auto">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5 text-[10px] font-bold tracking-[.22em] uppercase text-indigo-500 font-['Poppins',sans-serif]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Why It Matters
            </div>
            <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.7rem,3.5vw,2.75rem)] leading-tight text-[#050748] mb-4">
              Why Stay Ahead with{" "}
              <span className={HL}>Trending Technologies?</span>
            </h2>
            <p className="text-[#6a6a8e] max-w-2xl mx-auto text-base sm:text-[1.05rem] leading-relaxed">
              The gap between businesses that adopt modern tech and those that don&apos;t widens every year. Here&apos;s why it matters — and why we make it easy.
            </p>
          </div>

          {/* ── BENTO GRID ──
               Row 1 (lg): 2 wide cards, each col-span-2 inside a 4-col grid
               Row 2 (lg): 4 equal cards, each col-span-1
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* ── Row 1: first 2 items, each 2-col wide ── */}
            {WHY_ITEMS.slice(0, 2).map((w, i) => {
              const colours = [
                { accent: "#6366f1", light: "#eef2ff", border: "#c7d2fe", text: "#4f46e5", iconBg: "linear-gradient(135deg,#6366f1,#818cf8)" },
                { accent: "#2dd4bf", light: "#f0fdfb", border: "#99f6e4", text: "#0d9488", iconBg: "linear-gradient(135deg,#2dd4bf,#06b6d4)" },
              ];
              const c = colours[i];
              const num = String(i + 1).padStart(2, "0");
              return (
                <div key={i}
                  className="group relative overflow-hidden rounded-2xl p-7 border bg-white lg:col-span-2 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  style={{ borderColor: c.border }}>
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: c.iconBg }} />
                  {/* Big BG number */}
                  <div className="absolute bottom-0 right-4 font-['Poppins',sans-serif] font-extrabold text-[8rem] leading-none select-none pointer-events-none opacity-[.045] group-hover:opacity-[.07] transition-opacity duration-300"
                    style={{ color: c.accent }}>{num}</div>

                  <div className="relative z-10 flex gap-5 items-start">
                    {/* Icon */}
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center text-2xl text-white shadow-md"
                      style={{ background: c.iconBg }}>
                      {w.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Number badge */}
                      <span className="inline-block text-[10px] font-black tracking-[.18em] px-2.5 py-0.5 rounded-full mb-2 font-['Poppins',sans-serif]"
                        style={{ color: c.text, background: c.light, border: `1px solid ${c.border}` }}>
                        {num}
                      </span>
                      <h3 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-xl mb-2 leading-snug">{w.title}</h3>
                      <p className="text-[#6a6a8e] text-sm leading-relaxed">{w.desc}</p>
                      {/* Animated underline */}
                      <div className="mt-4 h-[2px] w-10 rounded-full group-hover:w-24 transition-all duration-500"
                        style={{ background: c.iconBg }} />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ── Row 2: last 4 items, each 1-col ── */}
            {WHY_ITEMS.slice(2).map((w, i) => {
              const colours = [
                { accent: "#a855f7", light: "#faf5ff", border: "#e9d5ff", text: "#7c3aed", iconBg: "linear-gradient(135deg,#a855f7,#7c3aed)" },
                { accent: "#10b981", light: "#f0fdf4", border: "#a7f3d0", text: "#059669", iconBg: "linear-gradient(135deg,#10b981,#059669)" },
                { accent: "#f59e0b", light: "#fffbeb", border: "#fde68a", text: "#d97706", iconBg: "linear-gradient(135deg,#f59e0b,#d97706)" },
                { accent: "#ec4899", light: "#fdf2f8", border: "#fbcfe8", text: "#db2777", iconBg: "linear-gradient(135deg,#ec4899,#db2777)" },
              ];
              const c = colours[i % 4];
              const num = String(i + 3).padStart(2, "0");
              return (
                <div key={i}
                  className="group relative overflow-hidden rounded-2xl p-6 border bg-white lg:col-span-1 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  style={{ borderColor: c.border }}>
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: c.iconBg }} />
                  {/* Big BG number */}
                  <div className="absolute bottom-0 right-3 font-['Poppins',sans-serif] font-extrabold text-[5.5rem] leading-none select-none pointer-events-none opacity-[.04] group-hover:opacity-[.065] transition-opacity duration-300"
                    style={{ color: c.accent }}>{num}</div>

                  <div className="relative z-10">
                    {/* Icon + badge row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-white shadow-sm"
                        style={{ background: c.iconBg }}>
                        {w.icon}
                      </div>
                      <span className="text-[10px] font-black tracking-[.18em] px-2 py-0.5 rounded-full font-['Poppins',sans-serif]"
                        style={{ color: c.text, background: c.light, border: `1px solid ${c.border}` }}>
                        {num}
                      </span>
                    </div>
                    <h3 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-base mb-2 leading-snug">{w.title}</h3>
                    <p className="text-[#6a6a8e] text-[.82rem] leading-relaxed">{w.desc}</p>
                    {/* Animated underline */}
                    <div className="mt-4 h-[2px] w-8 rounded-full group-hover:w-16 transition-all duration-500"
                      style={{ background: c.iconBg }} />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ════════════ 6. DARK CTA BAND ════════════ */}
      <section className="relative overflow-hidden bg-[#050b20] py-20 px-5 sm:px-10">
        {/* Orbs */}
        <div className="absolute left-[-6%] top-[-30%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.14),transparent_62%)]" />
        <div className="absolute right-[-4%] bottom-[-30%] w-[480px] h-[480px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.13),transparent_62%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mb-6 text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf] font-['Poppins',sans-serif]">
            <span className="w-1.5 h-1.5 rounded-full animate-ping bg-[#2dd4bf]" />
            Ready to Build Something Amazing?
          </div>
          <h2 className="font-['Poppins',sans-serif] font-extrabold [font-size:clamp(1.65rem,3.5vw,2.8rem)] leading-tight text-white mb-4">
            Let&apos;s Build Your Next Product with<br />
            <span className={HL}>Today&apos;s Best Technologies</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Whether you&apos;re starting fresh or upgrading an existing system, our experts match you with the right stack — then build it, fast and right.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline hover:shadow-[0_10px_32px_rgba(99,102,241,.5)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
              Get a Free Consultation <FaArrowRight className="text-[11px]" />
            </Link>
            <Link href="tel:+917056937000"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline border border-white/20 hover:border-[#2dd4bf]/60 hover:bg-white/5 transition-all duration-200">
              Call: 7056937000
            </Link>
          </div>
        </div>
      </section>
      {/* ════════════ 5. TECHNOLOGY CATEGORIES ════════════ */}
      <section className="bg-[linear-gradient(180deg,#ffffff,#f3f4fd)] py-20 px-5 sm:px-10 xl:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold tracking-widest uppercase mb-4 font-['Poppins',sans-serif]">Explore Our Expertise</span>
            <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] [font-size:clamp(1.6rem,3.2vw,2.5rem)] leading-tight mb-4">
              Technology Categories We Master
            </h2>
            <p className="text-[#6a6a8e] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              From mobile apps and enterprise web platforms to blockchain, AI, and immersive game experiences — explore every technology domain we excel in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

                {/* Card header gradient bar */}
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg,${cat.color.from},${cat.color.to})` }} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-white text-xl shadow-sm"
                      style={{ background: `linear-gradient(135deg,${cat.color.from},${cat.color.to})` }}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-lg leading-tight">{cat.title}</h3>
                      <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: cat.color.from }}>{cat.subtitle}</span>
                    </div>
                  </div>

                  <p className="text-[#6a6a8e] text-sm leading-relaxed mb-4">{cat.desc}</p>

                  {/* Tech icon bubbles */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.icons.map((ic, j) => (
                      <div key={j} className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-base"
                        style={{ color: cat.color.from }}>
                        {ic}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.tags.map((t, j) => (
                      <span key={j} className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border"
                        style={{ color: cat.color.from, borderColor: cat.color.from + "40", background: cat.color.from + "10" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {cat.links.map((lk, j) => (
                      <Link key={j} href={lk.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg no-underline transition-all duration-200 hover:-translate-y-0.5"
                        style={{ color: "#fff", background: `linear-gradient(135deg,${cat.color.from},${cat.color.to})` }}>
                        {lk.label} <FaArrowRight className="text-[9px]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════ 7. LOCATION ════════════ */}
      <Location />
    </div>
  );
}
