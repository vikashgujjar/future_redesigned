"use client";
import React from "react";
import Image from "next/image";
import cwd from "../Assets/cwd.webp";
import gm from "../Assets/qa.webp";
import d1 from "../Assets/cr.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import GetNewInsight from "../components/GetNewInsight";

import {
  FaShieldAlt,
  FaClipboardCheck,
  FaTools,
  FaHandshake,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaCogs,
  FaServer,
} from "react-icons/fa";

import {
  FaFlask,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaCode,
  FaMobileAlt,
  FaComments,
  FaCheckCircle,
  FaTachometerAlt,
  FaPuzzlePiece,
  FaTabletAlt,
} from "react-icons/fa";

import { FaBug, FaUserShield } from "react-icons/fa";

const Quality = () => {
  const features = [
    {
      title: "Reliable Brand Experience",
      description:
        "We create a trustworthy digital brand experience by ensuring every website and application functions flawlessly. From link validation to spelling accuracy, our QA experts eliminate issues that can harm your brand's credibility.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Comprehensive Quality Assurance",
      description:
        "Quality assurance isn't just testing—it's ensuring usability, reliability, and performance. We make sure every feature works seamlessly so users can confidently engage with your digital platform.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Efficient QA Tools & Automation",
      description:
        "We bring the best QA tools and automation frameworks to make testing more efficient. From automated regression tests to manual validation, we optimize workflows for consistent results.",
      icon: <FaTools />,
    },
    {
      title: "Agency-Focused Testing Approach",
      description:
        "Our team has a proven track record of working with digital agencies, adapting to their workflows, communication styles, and deadlines while maintaining top-notch QA standards.",
      icon: <FaHandshake />,
    },
    {
      title: "Actionable QA Insights",
      description:
        "We translate testing results into actionable insights that development teams can easily implement, bridging the gap between QA findings and technical execution.",
      icon: <FaChartLine />,
    },
    {
      title: "Transparent Cost Estimation",
      description:
        "We provide clear cost estimates for QA and testing phases in upcoming projects, allowing clients to plan accurately while maintaining quality benchmarks.",
      icon: <FaMoneyBillWave />,
    },
  ];

  const businessData = [
    {
      icons: <FaBug className="text-white w-8 h-8" />,
      title: "Comprehensive Testing Process",
      desc: "We conduct end-to-end manual and automated testing to ensure your web applications perform seamlessly, meet all functional requirements, and remain error-free across devices.",
    },
    {
      icons: <FaCogs className="text-white w-8 h-8" />,
      title: "Automation & Performance Testing",
      desc: "Our QA team leverages the latest tools and frameworks to automate testing cycles, improve speed, and validate system performance under various real-world conditions.",
    },
    {
      icons: <FaUserShield className="text-white w-8 h-8" />,
      title: "Security & Usability Assurance",
      desc: "We ensure your digital product is not only secure but also user-friendly. Our QA experts check for data protection, smooth navigation, and overall usability to guarantee a flawless user experience.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Corporate Web Apps Delivered",
      desc: "We've tested and optimized over 250+ corporate web applications to ensure flawless performance, security, and usability. Every project undergoes rigorous QA checks to guarantee error-free functionality and reliability.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Industry Expertise",
      desc: "With more than 15 years in software testing and quality assurance, Future IT Touch Pvt. Ltd. ensures that every digital product we deliver meets the highest industry standards for performance and security.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Businesses Served",
      desc: "Trusted by over 500 global clients, we provide QA and testing solutions that enhance software quality, prevent issues before launch, and ensure seamless functionality across platforms and devices.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to precision and excellence in testing has earned us a 98% client satisfaction rate. We ensure smooth launches, superior performance, and bug-free experiences for every project.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Reliable Technical Support",
      desc: "Our QA support team provides 24/7 monitoring, issue resolution, and ongoing validation to ensure your systems run flawlessly even after deployment, keeping performance at its peak.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaFlask className="text-white w-6 h-6" />,
      title: "Prototype Testing",
      desc: "We validate early-stage prototypes to identify design and functionality flaws before full-scale development, saving time and cost.",
    },
    {
      icon: <FaGlobe className="text-white w-6 h-6" />,
      title: "Cross-Browser Testing",
      desc: "Ensure your web application performs flawlessly across all major browsers and devices, providing consistent user experiences.",
    },
    {
      icon: <FaCloud className="text-white w-6 h-6" />,
      title: "Cloud-Based Testing",
      desc: "We leverage scalable cloud environments for fast, secure, and collaborative QA execution across multiple test scenarios.",
    },
    {
      icon: <FaRobot className="text-white w-6 h-6" />,
      title: "Test Automation",
      desc: "Accelerate your QA process with automated scripts that ensure repeatable and accurate testing for faster releases.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Web Application Testing",
      desc: "Comprehensive end-to-end testing to identify functional, UI, and performance issues in web-based applications.",
    },
    {
      icon: <FaMobileAlt className="text-white w-6 h-6" />,
      title: "Desktop/Mobile App Testing",
      desc: "Thorough testing of mobile and desktop applications to ensure responsive designs, smooth performance, and minimal crashes.",
    },
    {
      icon: <FaComments className="text-white w-6 h-6" />,
      title: "QA Consulting",
      desc: "Our experts provide strategic QA consultation to improve testing processes, enhance software quality, and reduce risk.",
    },
    {
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
      title: "Functionality & Usability Testing",
      desc: "We assess user workflows, features, and interfaces to ensure your software is functional, intuitive, and user-friendly.",
    },
    {
      icon: <FaTachometerAlt className="text-white w-6 h-6" />,
      title: "Performance Testing",
      desc: "We simulate real-world conditions to ensure your application can handle peak loads and deliver optimal performance.",
    },
    {
      icon: <FaPuzzlePiece className="text-white w-6 h-6" />,
      title: "Integrated Systems Testing",
      desc: "End-to-end system integration testing to verify that all components work seamlessly together in complex architectures.",
    },
    {
      icon: <FaTabletAlt className="text-white w-6 h-6" />,
      title: "Device Compatibility Testing",
      desc: "We test across multiple devices, resolutions, and operating systems to guarantee flawless performance everywhere.",
    },
    {
      icon: <FaShieldAlt className="text-white w-6 h-6" />,
      title: "Security Testing",
      desc: "We identify vulnerabilities and ensure your application is protected against data breaches, malware, and cyber threats.",
    },
  ];

  const faqData = [
    {
      title: "What eCommerce platforms do you develop on?",
      description:
        "We work with major eCommerce platforms including Shopify, Magento, WooCommerce, OpenCart, and PrestaShop. We also build fully custom eCommerce websites for businesses that need tailored features and scalability.",
    },
    {
      title: "Can you create a fully customized online store?",
      description:
        "Yes, our team specializes in building unique and customized eCommerce websites. From design to advanced back-end functionality, we ensure your store reflects your brand identity and delivers an engaging user experience.",
    },
    {
      title: "How do you ensure website security?",
      description:
        "Security is our top priority. We implement SSL encryption, data protection, and follow industry standards like PA-DSS compliance to keep your online store safe from vulnerabilities and cyber threats.",
    },
    {
      title: "Can your websites handle large product inventories?",
      description:
        "Absolutely. Our eCommerce solutions are optimized to manage thousands of products, high traffic, and complex inventory structures while maintaining fast load times and smooth performance.",
    },
    {
      title: "Are your eCommerce websites mobile-friendly?",
      description:
        "Yes, every eCommerce website we create is fully responsive and mobile-first, ensuring an intuitive and seamless shopping experience across smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      description:
        "Yes, we offer 24/7 support and regular maintenance to ensure your website remains secure, updated, and running smoothly. Our team helps with performance optimization, updates, and troubleshooting when needed.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes qaFloat { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(4deg)} }
        @keyframes qaBlob  { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-16px,18px)} }
        @keyframes qaBarIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes qaPing  { 75%,100% { transform: scale(2.1); opacity: 0 } }
        @keyframes qaCW    { to { transform: rotate(360deg) } }
        @keyframes qaCCW   { to { transform: rotate(-360deg) } }

        .qa-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .qa-bar { animation: qaBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left }
        .qa-ping { position: relative }
        .qa-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:qaPing 2s ease-out infinite;
        }
        .qa-feat-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s;
        }
        .qa-feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(99,102,241,.14) !important; }
      `}</style>

      {/* ── 1. Banner ── */}
      <CommonBannerService
        imgSrc={gm}
        title="Quality Assurance"
        desc="Our services are of assured quality so drop us an email. Clients expect their interactive agency to guard the reputation of their products and company. Quality assurance testing protects a client's brand reputation by verifying that their customers' experiences with their product, website, app, and campaign are consistently positive."
      />

      {/* ── 2. Tech Marquee ── */}
      <TechMarquee />

      {/* ── 3. About Section ── */}
      <section className="relative py-20 lg:py-28"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        <div className="qa-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
          <div className="relative rounded-[28px] overflow-hidden"
            style={{ boxShadow: "0 50px 100px rgba(99,102,241,.14), 0 20px 40px rgba(0,0,0,.08), 0 0 0 1px rgba(99,102,241,.08)" }}>

            {/* Top gradient strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-20"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: image with overlay */}
              <div className="relative overflow-hidden" style={{ minHeight: "clamp(320px,45vw,580px)" }}>
                <Image src={gm} alt="Quality Assurance Services" fill
                  sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-center" />

                <div className="absolute inset-0 z-[1]"
                  style={{ background: "linear-gradient(145deg,rgba(13,148,136,.60) 0%,rgba(99,102,241,.68) 55%,rgba(139,92,246,.75) 100%)" }} />

                <div className="absolute inset-0 z-[2] opacity-[.18]"
                  style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

                {/* Corner brackets */}
                <div className="absolute top-7 left-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderTop: "2.5px solid rgba(255,255,255,.40)", borderLeft: "2.5px solid rgba(255,255,255,.40)", borderRadius: "8px 0 0 0" }} />
                <div className="absolute bottom-7 right-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderBottom: "2.5px solid rgba(255,255,255,.40)", borderRight: "2.5px solid rgba(255,255,255,.40)", borderRadius: "0 0 8px 0" }} />

                {/* Decorative circles */}
                <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1.5px solid rgba(255,255,255,.14)" }} />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1px solid rgba(255,255,255,.10)" }} />

                {/* Sparkles */}
                <svg className="absolute top-[28%] right-[18%] z-[3] pointer-events-none" width="22" height="22"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .50, animation: "qaFloat 5s ease-in-out infinite" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>
                <svg className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none" width="14" height="14"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .35, animation: "qaFloat 7s ease-in-out infinite 1.5s" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>

                {/* Since 2005 badge */}
                <div className="absolute bottom-8 left-8 z-[4] flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.22)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-white text-[15px] leading-none"
                      style={{ fontFamily: "'Poppins',sans-serif" }}>Since 2005</p>
                    <p className="text-white/65 text-[10px] tracking-[.08em] uppercase font-semibold mt-0.5">Trusted by 500+ Clients</p>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="bg-white px-8 py-12 sm:px-10 sm:py-14 xl:px-14 xl:py-16 flex flex-col justify-center">

                {/* Badge pill */}
                <div className="inline-flex items-center gap-2.5 self-start rounded-full px-4 py-1.5 mb-5"
                  style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      fontFamily: "'Poppins',sans-serif",
                    }}>
                    Reliable Software Quality Assurance Services
                  </span>
                </div>

                {/* Gradient heading */}
                <h2 className="font-bold leading-tight text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.65rem,3vw,2.5rem)" }}>
                  Ensuring Excellence Through{" "}
                  <span style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Comprehensive QA and Testing
                  </span>
                </h2>

                {/* Accent bar */}
                <div className="qa-bar h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

                {/* Paragraphs */}
                <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                  <p>
                    At{" "}
                    <span className="font-semibold" style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>Future IT Touch Pvt. Ltd.</span>{" "}
                    we deliver end-to-end Quality Assurance and software testing services to
                    ensure your applications run flawlessly, perform seamlessly, and meet the
                    highest standards of reliability and security.
                  </p>
                  <p>
                    Our QA experts use advanced testing frameworks and automation tools to
                    identify issues before they impact users. We focus on ensuring every
                    product release is stable, scalable, and aligned with your business
                    objectives through continuous testing and monitoring.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">For Developers:</span>{" "}
                    Early bug detection, CI/CD testing integration, API validation, and
                    automated regression testing for faster and more efficient development cycles.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">For Businesses:</span>{" "}
                    Comprehensive functional, performance, security, and usability testing
                    that ensures consistent user experiences and protects your brand's reputation.
                  </p>
                  <p>
                    With over 15 years of experience in delivering top-notch digital solutions, our{" "}
                    <span className="font-semibold" style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>Quality Assurance services</span>{" "}
                    help organizations reduce risks, optimize performance, and achieve
                    reliable, high-quality software products that users trust.
                  </p>
                </div>

                {/* CTA button */}
                <a href="tel:+917056937000"
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 22px rgba(45,212,191,.28)", fontFamily: "'Poppins',sans-serif" }}>
                  Start Your QA and Testing Project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Features Section ── */}
      <section className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        <div className="qa-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 68%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.06),transparent 68%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
              <span className="qa-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Trusted Quality Assurance Services
              </span>
            </div>
            <h2 className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.5rem)" }}>
              Creating Flawless Digital Experiences Through{" "}
              <span style={{
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Rigorous Testing
              </span>
            </h2>
            <div className="qa-bar mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          {/* 3-column bento grid of feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
            {features.map((feature, index) => {
              const gradients = [
                { from: "#2dd4bf", to: "#6366f1" },
                { from: "#6366f1", to: "#8b5cf6" },
                { from: "#0ea5e9", to: "#2dd4bf" },
                { from: "#a855f7", to: "#6366f1" },
                { from: "#2dd4bf", to: "#0ea5e9" },
                { from: "#8b5cf6", to: "#a855f7" },
              ];
              const g = gradients[index % gradients.length];
              return (
                <div key={index} className="qa-feat-card group relative rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 24px rgba(99,102,241,.09), 0 1px 4px rgba(0,0,0,.05)",
                    border: `1px solid ${g.from}22`,
                  }}>

                  {/* Gradient banner top */}
                  <div className="relative flex items-center justify-between px-6 py-5"
                    style={{ background: `linear-gradient(135deg,${g.from}14,${g.to}0a)` }}>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,${g.from},${g.to})`, boxShadow: `0 6px 18px ${g.from}50` }}>
                      {feature.icon}
                    </div>
                    {/* Ghost number */}
                    <span className="select-none font-extrabold leading-none"
                      style={{ fontSize: "4rem", color: `${g.from}18`, fontFamily: "'Poppins',sans-serif", lineHeight: 1 }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Top gradient line */}
                  <div className="h-[2px] w-full"
                    style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    <h4 className="text-[1rem] font-bold text-gray-900 leading-snug"
                      style={{ fontFamily: "'Poppins',sans-serif" }}>
                      {feature.title}
                    </h4>
                    <p className="text-[13.5px] text-gray-500 leading-[1.82]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%,${g.from}10,transparent 60%)` }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. TurnYourBusiness (dark navy) ── */}
      <section className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none z-[1]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.14),transparent 65%)", animation: "qaBlob 16s ease-in-out infinite" }} />
        <div className="absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.14),transparent 65%)", animation: "qaBlob 20s ease-in-out infinite reverse" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="qa-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Leading Quality Assurance &amp; Testing Company in India
              </span>
            </div>
            <h2 className="font-extrabold text-white mb-3"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Partner with Us for{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Flawless Digital Performance
              </span>
            </h2>
            <div className="qa-bar mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          {/* 3 gradient banner cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {businessData.map((item, i) => {
              const gradients = [
                { from: "#2dd4bf", to: "#6366f1" },
                { from: "#6366f1", to: "#8b5cf6" },
                { from: "#0ea5e9", to: "#2dd4bf" },
              ];
              const g = gradients[i % gradients.length];
              return (
                <div key={i} className="group relative rounded-[20px] overflow-hidden flex flex-col"
                  style={{
                    border: "1px solid rgba(255,255,255,.08)",
                    boxShadow: "0 12px 48px rgba(0,0,0,.40), 0 0 0 1px rgba(255,255,255,.05)",
                  }}>

                  {/* Gradient banner */}
                  <div className="relative flex items-center justify-center py-11 overflow-hidden"
                    style={{ background: `linear-gradient(135deg,${g.from},${g.to})` }}>
                    <div className="absolute inset-0 opacity-[.18]"
                      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.18)" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.12)" }} />
                    <svg className="absolute top-4 left-5 pointer-events-none" width="16" height="16"
                      viewBox="0 0 36 36" fill="none"
                      style={{ opacity: .45, animation: "qaFloat 5s ease-in-out infinite" }}>
                      <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                    </svg>
                    <div className="absolute top-1 right-3 select-none pointer-events-none font-extrabold leading-none"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "5.5rem", color: "rgba(255,255,255,.12)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Glass icon */}
                    <div className="relative z-10 w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-3xl text-white"
                      style={{
                        background: "rgba(255,255,255,.20)", backdropFilter: "blur(12px)",
                        border: "1.5px solid rgba(255,255,255,.38)",
                        boxShadow: "0 8px 28px rgba(0,0,0,.22), 0 0 20px rgba(255,255,255,.12)",
                      }}>
                      {item.icons}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col p-7"
                    style={{ background: "rgba(255,255,255,.04)", backdropFilter: "blur(16px)" }}>
                    <div className="w-10 h-[3px] rounded-full mb-4"
                      style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />
                    <h4 className="font-bold text-white mb-3 leading-snug"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1.12rem" }}>
                      {item.title}
                    </h4>
                    <p className="text-[13.5px] leading-[1.84] flex-1"
                      style={{ color: "rgba(255,255,255,.50)" }}>
                      {item.desc}
                    </p>
                    <div className="mt-6 h-[1px] rounded-full"
                      style={{ background: `linear-gradient(90deg,transparent,${g.from}55,${g.to}44,transparent)` }} />
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%,${g.from}14,transparent 55%)` }} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 6. Slider, Why, FAQ ── */}
      <CustomSlider
        cards={cards}
        title="Delivering Excellence Through Comprehensive QA with"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Our Quality Assurance & Testing Services"
      />

      <FAQSection
        faqData={faqData}
        title="About QA & Software Testing"
      />

      {/* ── 7. GetNewInsight + BuinessIdea ── */}
      <GetNewInsight />
    </>
  );
};

export default Quality;
