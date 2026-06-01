"use client";
import React from "react";
import Image from "next/image";
import io from "../Assets/io.webp";
import ec from "../Assets/ios-application-development.webp";
import app from "../Assets/hhh.gif";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import GetNewInsight from "../components/GetNewInsight";

import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaApple, FaSwift, FaCloud, FaLock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaMobileAlt, FaPalette, FaTools } from "react-icons/fa";
import { FaLightbulb, FaDraftingCompass, FaCode, FaBug, FaCloudUploadAlt } from "react-icons/fa";
import { SiReact, SiFlutter, SiGooglecloud, SiSecurityscorecard } from "react-icons/si";
import { MdOutlineApi, MdOutlineBuildCircle, MdOutlineSecurity } from "react-icons/md";
import { RiTestTubeLine } from "react-icons/ri";

const Hybrid = () => {
  const features = [
    {
      title: "Idea & Strategy",
      description:
        "Every successful app begins with a great idea and a solid strategy. We start by understanding your vision, business goals, and target audience. Our team then defines the app's core features, competitive advantage, and monetization model to create a clear, results-driven roadmap that aligns with your long-term business objectives.",
      icon: <FaLightbulb />,
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX experts design visually stunning and user-friendly interfaces that reflect Apple's Human Interface Guidelines. We focus on delivering seamless navigation, pixel-perfect layouts, and intuitive user journeys that enhance engagement, retention, and overall satisfaction — ensuring a delightful experience for every user.",
      icon: <FaDraftingCompass />,
    },
    {
      title: "App Development",
      description:
        "Using the latest technologies like Swift, SwiftUI, and Xcode, our developers bring your app to life with precision and performance. We follow agile methodologies to ensure flexibility and transparency at every stage. From front-end interfaces to back-end logic and APIs, we build secure, scalable, and high-performing iOS applications tailored to your business needs.",
      icon: <FaCode />,
    },
    {
      title: "Testing & QA",
      description:
        "Quality assurance is a vital part of our process. Our QA engineers perform rigorous testing, including functionality, performance, usability, and device compatibility checks. We use both manual and automated testing tools to ensure your app is free from bugs, stable under real-world conditions, and delivers a flawless experience on every iPhone and iPad model.",
      icon: <FaBug />,
    },
    {
      title: "App Deployment",
      description:
        "Once your app is tested and approved, we manage the entire App Store submission process. From preparing metadata, screenshots, and descriptions to meeting Apple's compliance requirements, we ensure a smooth and successful launch. Our goal is to get your app live quickly and efficiently without any delays or rejections.",
      icon: <FaCloudUploadAlt />,
    },
    {
      title: "App Marketing",
      description:
        "Building a great app is just the beginning — getting users to discover it is the next challenge. Our marketing team uses proven strategies like App Store Optimization (ASO), social media campaigns, and influencer outreach to increase your app's visibility, downloads, and engagement. We also analyze user data to improve retention and boost ROI.",
      icon: <FaChartLine />,
    },
    {
      title: "Support & Maintenance",
      description:
        "We continue to stand by your side even after your app goes live. Our maintenance services include regular updates, performance monitoring, bug fixes, and feature enhancements to keep your app optimized and secure. We ensure it remains compatible with the latest iOS versions and Apple devices, providing a consistent experience for your users.",
      icon: <FaTools />,
    },
  ];

  const businessData = [
    {
      icons: <FaMobileAlt className="text-white w-8 h-8" />,
      title: "Specialized in iOS Development",
      desc: "We focus on building robust, high-performing iOS applications tailored for iPhone, iPad, and Apple Watch. Our apps deliver seamless functionality and exceptional user experiences.",
    },
    {
      icons: <FaPaintBrush className="text-white w-8 h-8" />,
      title: "Innovative & Intuitive Design",
      desc: "Our design experts create visually stunning and intuitive app interfaces that align perfectly with Apple's Human Interface Guidelines, ensuring elegant and user-friendly experiences.",
    },
    {
      icons: <FaClock className="text-white w-8 h-8" />,
      title: "Timely Project Delivery",
      desc: "As a trusted iOS app development company, we prioritize meeting deadlines while maintaining top-tier quality, performance, and reliability in every project we deliver.",
    },
  ];

  const cards = [
    {
      count: "300+",
      title: "Hybrid Apps Delivered",
      desc: "We've successfully built and launched over 300 hybrid mobile applications for Android and iOS using React Native, Flutter, and Ionic. Each app offers native-like performance and seamless functionality across all devices.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Industry Experience",
      desc: "With over 15 years of expertise in mobile app development, Future IT Touch Pvt. Ltd. specializes in creating cost-effective and scalable hybrid applications for businesses worldwide.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Satisfied Global Clients",
      desc: "Our hybrid app solutions have empowered over 500 clients globally, from startups to enterprises. We ensure every app aligns with business objectives and provides a consistent cross-platform experience.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to innovation, transparency, and quality has earned us a 98% client satisfaction rate. We ensure your hybrid app delivers outstanding value and reliability across platforms.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Technical Support & Maintenance",
      desc: "We offer round-the-clock support and maintenance to ensure your hybrid applications remain up-to-date, secure, and high-performing — long after deployment.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <SiReact className="text-white w-6 h-6" />,
      title: "React Native Development",
      desc: "We craft cross-platform apps using React Native that offer native-like performance and faster delivery.",
    },
    {
      icon: <SiFlutter className="text-white w-6 h-6" />,
      title: "Flutter App Development",
      desc: "Our Flutter experts build beautiful, high-performing apps that run smoothly on both Android and iOS.",
    },
    {
      icon: <SiGooglecloud className="text-white w-6 h-6" />,
      title: "Cloud Integration",
      desc: "We integrate apps with secure cloud platforms like Firebase, AWS, and Azure for real-time performance.",
    },
    {
      icon: <MdOutlineSecurity className="text-white w-6 h-6" />,
      title: "Security & Compliance",
      desc: "We ensure enterprise-grade app security with encryption, secure APIs, and global compliance standards.",
    },
    {
      icon: <MdOutlineApi className="text-white w-6 h-6" />,
      title: "API & Backend Integration",
      desc: "Our team builds and connects APIs for real-time data flow and scalable backend architecture.",
    },
    {
      icon: <RiTestTubeLine className="text-white w-6 h-6" />,
      title: "Testing & Maintenance",
      desc: "We perform rigorous multi-device testing and provide ongoing updates to keep your app flawless.",
    },
  ];

  const faqData = [
    {
      title: "What is hybrid app development?",
      description:
        "Hybrid app development allows you to build mobile apps using a single codebase that works on both Android and iOS platforms. It combines the benefits of web and native technologies, reducing cost and time-to-market.",
    },
    {
      title: "Which technologies do you use for hybrid app development?",
      description:
        "We use leading frameworks like React Native, Flutter, and Ionic, along with cloud services and secure APIs to build high-performing hybrid applications that feel and function like native apps.",
    },
    {
      title: "Are hybrid apps as good as native apps?",
      description:
        "Yes! With modern frameworks like React Native and Flutter, hybrid apps deliver near-native performance, smooth animations, and an exceptional user experience across devices.",
    },
    {
      title: "Can you convert my existing app into a hybrid app?",
      description:
        "Absolutely! Our experts can migrate or rebuild your existing mobile app into a hybrid solution, improving cross-platform compatibility and reducing maintenance costs.",
    },
    {
      title: "Will my hybrid app work across Android and iOS?",
      description:
        "Yes, hybrid apps are designed to work seamlessly on both platforms, ensuring consistent UI/UX, performance, and feature availability across all devices.",
    },
    {
      title: "Do you provide post-launch support for hybrid apps?",
      description:
        "Yes, we offer continuous maintenance, updates, and technical support to keep your hybrid app optimized, secure, and compatible with the latest OS versions.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes hybFloat { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(4deg)} }
        @keyframes hybBlob  { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-16px,18px)} }
        @keyframes hybBarIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes hybPing  { 75%,100% { transform: scale(2.1); opacity: 0 } }
        @keyframes hybCW    { to { transform: rotate(360deg) } }
        @keyframes hybCCW   { to { transform: rotate(-360deg) } }

        .hyb-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .hyb-bar { animation: hybBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left }
        .hyb-ping { position: relative }
        .hyb-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:hybPing 2s ease-out infinite;
        }
        .hyb-feat-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s;
        }
        .hyb-feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(99,102,241,.14) !important; }
      `}</style>

      {/* ── 1. Banner ── */}
      <CommonBannerService
        imgSrc={app}
        title="HYBRID APP DEVELOPMENT SERVICES"
        desc="Need an app for your business that can run seamlessly across Android and iPhone yet limited by budget constraints? A Hybrid App is the answer. It is a mixture of Native and Web Apps, giving you a cross-platform experience along with scalable features in a highly customized Mobile Application. Few most popular technologies for developing hybrid apps include Ionic, a PhoneGap / Cordova based HTML5 framework and Flutter, Google's UI toolkit for building beautiful, natively compiled apps. Future IT Touch Pvt. Ltd. is an certified mobile app development agency with substantial experience in cross-platform app development. Our team of expert developers specialize in providing Hybrid App Development Services as per your business requirements."
      />

      {/* ── 2. Tech Marquee ── */}
      <TechMarquee />

      {/* ── 3. About Section ── */}
      <section className="relative py-20 lg:py-28"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        <div className="hyb-dotgrid absolute inset-0 pointer-events-none" />
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
                <Image src={ec} alt="ios-application-development" fill
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
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .50, animation: "hybFloat 5s ease-in-out infinite" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>
                <svg className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none" width="14" height="14"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .35, animation: "hybFloat 7s ease-in-out infinite 1.5s" }}>
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
                    Trusted Hybrid Application Development
                  </span>
                </div>

                {/* Gradient heading */}
                <h2 className="font-bold leading-tight text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.65rem,3vw,2.5rem)" }}>
                  Building Powerful{" "}
                  <span style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Cross-Platform Mobile Apps
                  </span>
                </h2>

                {/* Accent bar */}
                <div className="hyb-bar h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

                {/* Paragraphs */}
                <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                  <p>
                    At{" "}
                    <span className="font-semibold" style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>Future IT Touch Pvt. Ltd.</span>{" "}
                    we specialize in creating hybrid mobile applications that deliver native-like performance,
                    consistent UI, and seamless user experiences across Android, iOS, and the web — all from a single codebase.
                  </p>
                  <p>
                    Our hybrid app development services help businesses save time and cost while reaching a wider audience.
                    Using the latest frameworks like React Native, Flutter, and Ionic, we build fast, reliable, and scalable apps
                    that work smoothly on multiple platforms.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Our Expertise Includes:</span>{" "}
                    Cross-platform UI/UX design, API integration, native performance optimization,
                    secure data handling, real-time syncing, and app store deployment.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Why Choose Us:</span>{" "}
                    Faster time-to-market, cost-effective solutions, reusable code architecture,
                    consistent user experience, and full post-launch support.
                  </p>
                  <p>
                    With over 15 years of experience, we've helped startups and enterprises bring their ideas to life
                    using robust hybrid technologies. Partner with{" "}
                    <span className="font-semibold" style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>our hybrid app development experts</span>{" "}
                    to build high-quality, cross-platform applications that perform flawlessly across all devices.
                  </p>
                </div>

                {/* CTA button */}
                <a href="tel:+917056937000"
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 22px rgba(45,212,191,.28)", fontFamily: "'Poppins',sans-serif" }}>
                  Start Your Hybrid App Project
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

        <div className="hyb-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 68%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.06),transparent 68%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
              <span className="hyb-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Our iPhone App Development Process
              </span>
            </div>
            <h2 className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.5rem)" }}>
              Trusted iOS app developers in India,{" "}
              <span style={{
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                delivering seamless and innovative apps
              </span>
            </h2>
            <div className="hyb-bar mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          {/* 5-col grid: sticky image (2 col) + feature cards (3 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-8">

            {/* Sticky image — 2 col */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-28">
              <div className="relative w-full rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(99,102,241,.14)", boxShadow: "0 24px 60px rgba(99,102,241,.13)" }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                <Image src={app} alt="Hybrid App Development Process"
                  className="w-full rounded-xl shadow-lg h-full object-cover md:h-[70vh] transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Feature cards — 3 col */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
              {features.map((feature, index) => (
                <div key={index} className="hyb-feat-card relative flex flex-col items-start gap-4 p-6 rounded-xl bg-white"
                  style={{ boxShadow: "0 8px 32px rgba(99,102,241,.09)", border: "1px solid rgba(99,102,241,.08)" }}>

                  {/* Gradient top line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                    style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

                  {/* Gradient floating icon */}
                  <div className="flex -mt-14 text-white text-3xl justify-center items-center p-4 rounded-xl w-20 h-20"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 8px 24px rgba(45,212,191,.30)" }}>
                    {feature.icon}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900"
                    style={{ fontFamily: "'Poppins',sans-serif" }}>
                    {feature.title}
                  </h4>
                  <p className="text-[14px] text-gray-500 leading-[1.85] text-justify">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. TurnYourBusiness (dark navy) ── */}
      <section className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none z-[1]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.14),transparent 65%)", animation: "hybBlob 16s ease-in-out infinite" }} />
        <div className="absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.14),transparent 65%)", animation: "hybBlob 20s ease-in-out infinite reverse" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="hyb-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Leading Hybrid App Development Company in India
              </span>
            </div>
            <h2 className="font-extrabold text-white mb-3"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Build Powerful Apps That Work on{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Every Platform
              </span>
            </h2>
            <div className="hyb-bar mx-auto h-[3px] w-14 rounded-full"
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
                      style={{ opacity: .45, animation: "hybFloat 5s ease-in-out infinite" }}>
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
        title="Delivering Powerful Hybrid App Experiences with"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Hybrid App Development Technologies We Use"
      />

      <FAQSection
        faqData={faqData}
        title="About Hybrid Application Development"
      />

      {/* ── 7. GetNewInsight + BuinessIdea ── */}
      <GetNewInsight />
      <BuinessIdea />
    </>
  );
};

export default Hybrid;
