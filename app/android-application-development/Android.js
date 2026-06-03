"use client";
import React from "react";

import Image from "next/image";
import cwd from "../Assets/cwd.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import app from "../Assets/app.webp";
import ec from "../Assets/and.gif";
import GetNewInsight from "../components/GetNewInsight";
import { FaLightbulb, FaMobileAlt, FaSyncAlt } from "react-icons/fa";

import {
  FaPalette,
  FaCogs,
  FaGooglePlay,
  FaCheckCircle,
  FaLifeRing,
} from "react-icons/fa";

import {
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaBell,
  FaShareAlt,
  FaCreditCard,
  FaBluetooth,
} from "react-icons/fa";

const Android = () => {
  const features = [
    {
      title: "Android Architecture Pattern",
      description:
        "We follow the MVVM (Model-View-ViewModel) architecture to ensure clean, maintainable, and scalable code. The Model manages data, the View handles user interactions, and the ViewModel connects them seamlessly — creating a balanced ecosystem for better performance and readability.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "GPS Integration",
      description:
        "We can integrate GPS functionality into your Android app based on your project requirements. This feature improves navigation and user experience, giving your application a competitive edge through location-based services and mapping accuracy.",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Push Notifications",
      description:
        "Push notifications are powerful tools to engage users and boost retention. From promoting new offers and sending reminders to alerting users about updates, we integrate smart notification systems that help you drive meaningful user actions.",
      icon: <FaBell />,
    },
    {
      title: "Social Media Integration",
      description:
        "Our Android apps allow seamless integration with popular social platforms. This lets users share content, connect their accounts, and stay updated with your brand — enhancing engagement and visibility through effortless social sharing.",
      icon: <FaShareAlt />,
    },
    {
      title: "Payment Gateways",
      description:
        "We integrate secure and reliable payment gateways to simplify in-app purchases and transactions. Users can make payments effortlessly using credit cards, UPI, wallets, or other methods — ensuring convenience and boosting your business's cashless operations.",
      icon: <FaCreditCard />,
    },
    {
      title: "Communicating over BLE & NFC",
      description:
        "Our Android applications support communication using BLE (Bluetooth Low Energy) and NFC (Near-Field Communication). These technologies enable device-to-device interaction, real-time data exchange, and innovative features like indoor navigation and contactless operations.",
      icon: <FaBluetooth />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creativity at its Best",
      desc: "Our Android developers excel at creating stunning and engaging apps. In today's competitive market, only a creative, intuitive, and user-friendly app can truly stand out and capture user attention.",
    },
    {
      icons: <FaMobileAlt className="text-white w-8 h-8" />,
      title: "Customized User Interface",
      desc: "We don't rely on generic templates — every Android app we build is tailored to your business niche and audience. Our customized UI ensures your app perfectly reflects your brand identity.",
    },
    {
      icons: <FaSyncAlt className="text-white w-8 h-8" />,
      title: "Updated with the Latest Technologies",
      desc: "Our team stays ahead of industry trends, leveraging the latest Android frameworks and tools to deliver high-performing, future-ready applications that align with evolving user expectations.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Android Apps Delivered",
      desc: "We've successfully developed over 250 custom Android applications that empower businesses to reach and engage users effectively. Each app is optimized for performance, security, and a seamless mobile experience.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Mobile Development Expertise",
      desc: "With more than 15 years in Android app development, Future IT Touch Pvt. Ltd. delivers cutting-edge mobile solutions. Our deep industry experience ensures every app combines innovation, scalability, and exceptional user experience.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 businesses worldwide, we build Android applications tailored to diverse industries — from startups to large enterprises. Our apps help brands expand their reach and achieve measurable success.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-first approach has earned us a 98% satisfaction rate. We focus on intuitive design, smooth performance, and delivering Android apps that exceed expectations while driving long-term business growth.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated App Support",
      desc: "We offer 24/7 technical support to ensure your Android applications run without interruption. From maintenance to version updates, our dedicated team keeps your app secure, stable, and future-ready.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaMobileAlt className="text-white w-6 h-6" />,
      title: "Custom App Development",
      desc: "Looking to craft spectacular and user-friendly Android apps? We offer diverse tailor-made solutions that run seamlessly across all Android devices. Our expert team has successfully created numerous customized apps for cross-industry verticals within quick turnaround times, addressing the specific needs of small and large enterprises.",
    },
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Stunning UI/UX",
      desc: "With extensive experience in UI/UX design, we blend futuristic designs and top-notch functionality to deliver reliable applications that provide an exceptional user experience. Hire our dedicated Android app developers to bring your innovative idea to life and elevate your business.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "Feature Extension",
      desc: "We support your business growth by building scalable mobility solutions. Launch MVPs to gain a competitive edge, then expand features as needed. We also integrate third-party APIs to extend your app's functionality seamlessly.",
    },
    {
      icon: <FaGooglePlay className="text-white w-6 h-6" />,
      title: "Deployment",
      desc: "Our team expertly handles Google Play Store deployment, managing app submission, description, asset listing, and optimization. We ensure your Android application is fully ready to gain visibility and perform efficiently in the app store.",
    },
    {
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
      title: "App Testing",
      desc: "We perform rigorous testing to identify bugs and deliver a market-ready, glitch-free application. From functionality and usability to accessibility and performance, we ensure your app works flawlessly across multiple Android devices.",
    },
    {
      icon: <FaLifeRing className="text-white w-6 h-6" />,
      title: "Support & Maintenance",
      desc: "Regular maintenance keeps your Android app agile and user-friendly. We provide extensive support including security review, upgrades, UI improvements, bug fixes, and performance optimization, letting you focus on your core business while we handle your app.",
    },
  ];

  const faqData = [
    {
      title: "Which eCommerce platforms do you specialize in?",
      description:
        "We specialize in OpenCart, Magento, WordPress/WooCommerce, PrestaShop, Shopify, and custom eCommerce solutions tailored to your business requirements.",
    },
    {
      title: "Can you customize my eCommerce store?",
      description:
        "Absolutely! Our developers provide deep customization for your online store, from front-end design to back-end functionalities, ensuring it matches your brand and business needs.",
    },
    {
      title: "Do you ensure website security?",
      description:
        "Yes, security is a top priority. We follow best practices and use PA-DSS compliant platforms to ensure your eCommerce website is safe, secure, and reliable.",
    },
    {
      title: "Can you handle large product catalogs?",
      description:
        "Definitely. Platforms like Magento and custom solutions can store thousands of products and manage heavy traffic seamlessly, without compromising performance.",
    },
    {
      title: "Do you offer mobile-friendly websites?",
      description:
        "Yes, all our eCommerce websites are responsive and mobile-first, ensuring smooth shopping experiences on smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      description:
        "We provide dedicated support, updates, and maintenance to ensure your online store remains functional, secure, and optimized for growth even after launch.",
    },
  ];

  const bizGradients = [
    { from: "#2dd4bf", to: "#6366f1" },
    { from: "#6366f1", to: "#a855f7" },
    { from: "#0ea5e9", to: "#2dd4bf" },
  ];

  return (
    <>
      <style>{`
        @keyframes andFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes andBlob  { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-16px,18px)} }
        @keyframes andBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes andPing  { 75%,100%{transform:scale(2.1);opacity:0} }

        .and-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .and-bar { animation: andBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left; }
        .and-ping { position: relative; }
        .and-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:andPing 2s ease-out infinite;
        }
        .and-feat-card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .and-feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(99,102,241,.14) !important; }
        .and-biz-card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .and-biz-card:hover { transform: translateY(-4px); }
      `}</style>

      {/* ── Banner ── */}
      <CommonBannerService
        imgSrc={app}
        title="ANDROID APP DEVELOPMENT SERVICES"
        desc="Powering 2 Billion mobile devices across the globe, Android inevitably stands out as one of the most sought-after platforms for mobile app development. Future IT Touch Pvt. Ltd. is an certified leading Android app development company in India empowering the businesses of a global clientele with innovative, scalable, and interactive mobility solutions for years. Reach us for industry-standard android app development services at a competitive rate."
      />

      {/* ── Tech Marquee ── */}
      <TechMarquee />

      {/* ══════════════════════════════════════
          ABOUT SECTION  (#f8faff)
      ══════════════════════════════════════ */}
      <section
        className="relative py-20 lg:py-28"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}
      >
        <div className="and-dotgrid absolute inset-0 pointer-events-none" />
        <div
          className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }}
        />
        <div
          className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
          <div
            className="relative rounded-[28px] overflow-hidden"
            style={{
              boxShadow:
                "0 50px 100px rgba(99,102,241,.14), 0 20px 40px rgba(0,0,0,.08), 0 0 0 1px rgba(99,102,241,.08)",
            }}
          >
            {/* Top gradient strip */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] z-20"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: image */}
              <div
                className="relative overflow-hidden"
                style={{ minHeight: "clamp(320px,45vw,580px)" }}
              >
                <Image
                  src={app}
                  alt="Android App Development"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(145deg,rgba(13,148,136,.60) 0%,rgba(99,102,241,.68) 55%,rgba(139,92,246,.75) 100%)",
                  }}
                />
                {/* Dot grid overlay */}
                <div
                  className="absolute inset-0 z-[2] opacity-[.18]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Corner brackets */}
                <div
                  className="absolute top-7 left-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{
                    borderTop: "2.5px solid rgba(255,255,255,.40)",
                    borderLeft: "2.5px solid rgba(255,255,255,.40)",
                    borderRadius: "8px 0 0 0",
                  }}
                />
                <div
                  className="absolute bottom-7 right-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{
                    borderBottom: "2.5px solid rgba(255,255,255,.40)",
                    borderRight: "2.5px solid rgba(255,255,255,.40)",
                    borderRadius: "0 0 8px 0",
                  }}
                />
                {/* Decorative circles */}
                <div
                  className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1.5px solid rgba(255,255,255,.14)" }}
                />
                <div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1px solid rgba(255,255,255,.10)" }}
                />
                {/* Sparkles */}
                <svg
                  className="absolute top-[28%] right-[18%] z-[3] pointer-events-none"
                  width="22"
                  height="22"
                  viewBox="0 0 36 36"
                  fill="none"
                  style={{ opacity: 0.5, animation: "andFloat 5s ease-in-out infinite" }}
                >
                  <path
                    d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none"
                  width="14"
                  height="14"
                  viewBox="0 0 36 36"
                  fill="none"
                  style={{ opacity: 0.35, animation: "andFloat 7s ease-in-out infinite 1.5s" }}
                >
                  <path
                    d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z"
                    fill="white"
                  />
                </svg>
                {/* Floating badge */}
                <div
                  className="absolute bottom-8 left-8 z-[4] flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,.12)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,.22)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    >
                      <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-extrabold text-white text-[15px] leading-none"
                      style={{ fontFamily: "'Poppins',sans-serif" }}
                    >
                      Since 2005
                    </p>
                    <p className="text-white/65 text-[10px] tracking-[.08em] uppercase font-semibold mt-0.5">
                      Trusted by 500+ Clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div className="bg-white px-8 py-12 sm:px-10 sm:py-14 xl:px-14 xl:py-16 flex flex-col justify-center">
                {/* Badge pill */}
                <div
                  className="inline-flex items-center gap-2.5 self-start rounded-full px-4 py-1.5 mb-5"
                  style={{
                    background: "rgba(45,212,191,.09)",
                    border: "1px solid rgba(45,212,191,.26)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }}
                  />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[.22em]"
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "'Poppins',sans-serif",
                    }}
                  >
                    Reliable Android Application Development
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="font-bold leading-tight text-gray-900 mb-4"
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "clamp(1.65rem,3vw,2.5rem)",
                  }}
                >
                  Crafting Powerful, Scalable, and{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    User-Friendly Android Apps
                  </span>
                </h2>

                {/* Accent bar */}
                <div
                  className="and-bar h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }}
                />

                {/* Body paragraphs */}
                <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                  <p>
                    At{" "}
                    <span className="font-semibold text-gray-700">
                      Future IT Touch Pvt. Ltd.
                    </span>{" "}
                    we specialize in building high-performance Android applications tailored to your
                    business needs — designed for speed, security, and a seamless user experience
                    across all devices.
                  </p>
                  <p>
                    Our team combines creativity with cutting-edge technology to develop Android apps
                    that empower brands, improve customer engagement, and boost business efficiency.
                    From concept to deployment, we ensure every app delivers value and scalability.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">For Businesses:</span> Custom
                    Android solutions for eCommerce, enterprise management, and service-based
                    industries with robust integrations, analytics, and smooth performance.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">For Users:</span> Intuitive UI/UX
                    design, fast loading times, offline functionality, and secure data handling to
                    ensure a delightful experience on every Android device.
                  </p>
                  <p>
                    With over 15 years of expertise in mobile development, we've delivered innovative
                    Android apps for startups and global enterprises alike. Choose our{" "}
                    <span className="font-semibold text-gray-700">
                      custom Android app development services
                    </span>{" "}
                    to turn your ideas into engaging digital experiences that drive results.
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="tel:+917056937000"
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    boxShadow: "0 4px 22px rgba(45,212,191,.28)",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  Start Your Android App Project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES SECTION  (#f8faff, 5-col sticky)
      ══════════════════════════════════════ */}
      <section
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}
      >
        <div className="and-dotgrid absolute inset-0 pointer-events-none" />
        <div
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 68%)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.06),transparent 68%)" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">
          {/* Section header */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{
                background: "rgba(45,212,191,.09)",
                border: "1px solid rgba(45,212,191,.24)",
              }}
            >
              <span
                className="and-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}
              >
                Trusted Android Application Development Service
              </span>
            </div>
            <h2
              className="font-bold text-gray-900 mb-4"
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "clamp(1.6rem,3.2vw,2.5rem)",
              }}
            >
              Building Innovative, Scalable &amp; High-Performance{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Android Apps
              </span>
            </h2>
            <div
              className="and-bar mx-auto h-[3px] w-14 rounded-full"
              style={{
                background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                transformOrigin: "center",
              }}
            />
          </div>

          {/* 5-col grid: 2 sticky image + 3 feature cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
            {/* Sticky image — clipped inner wrapper avoids overflow-hidden on the sticky parent */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-28">
              <div className="w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={ec}
                  alt="Android App Development"
                  width={100}
                  height={100}
                  className="w-full rounded-xl object-cover transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="and-feat-card flex flex-col items-start gap-4 p-6 border border-gray-100 rounded-xl bg-white shadow-md"
                  style={{
                    boxShadow: "0 8px 32px rgba(99,102,241,.08)",
                  }}
                >
                  {/* Gradient top line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                    style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }}
                  />
                  {/* Gradient floating icon */}
                  <div
                    className="flex -mt-14 text-white text-3xl justify-center items-center p-4 rounded-xl w-20 h-20"
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      boxShadow: "0 8px 24px rgba(45,212,191,.30)",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: "'Poppins',sans-serif" }}
                  >
                    {feature.title}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-600 text-justify">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TURN YOUR BUSINESS  (dark navy)
      ══════════════════════════════════════ */}
      <section
        className="relative py-16 sm:py-20 lg:py-24"
        style={{
          background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
          fontFamily: "'Inter',sans-serif",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.14),transparent 65%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full pointer-events-none z-[2]"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.14),transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">
          {/* Section header */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{
                background: "rgba(45,212,191,.10)",
                border: "1px solid rgba(45,212,191,.28)",
              }}
            >
              <span
                className="and-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}
              >
                Benefits of Our Android App Development Services
              </span>
            </div>
            <h2
              className="font-extrabold text-white mb-3"
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "clamp(1.5rem,3vw,2.4rem)",
              }}
            >
              Leverage the Power of Android to{" "}
              <span
                style={{
                  background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Reach a Global Audience
              </span>
            </h2>
            <div
              className="and-bar mx-auto h-[3px] w-14 rounded-full"
              style={{
                background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                transformOrigin: "center",
              }}
            />
          </div>

          {/* 3-col gradient banner cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {businessData.map((elm, i) => {
              const g = bizGradients[i % bizGradients.length];
              return (
                <div
                  key={elm.title}
                  className="and-biz-card group relative rounded-[20px] overflow-hidden flex flex-col"
                  style={{
                    border: "1px solid rgba(255,255,255,.08)",
                    boxShadow:
                      "0 12px 48px rgba(0,0,0,.40), 0 0 0 1px rgba(255,255,255,.05)",
                  }}
                >
                  {/* Gradient top panel */}
                  <div
                    className="relative flex items-center justify-center py-10 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg,${g.from},${g.to})`,
                    }}
                  >
                    {/* Dot texture */}
                    <div
                      className="absolute inset-0 opacity-[.18]"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    {/* Circle ring */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.18)" }}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.12)" }}
                    />
                    {/* Ghost number */}
                    <div
                      className="absolute top-1 right-3 select-none pointer-events-none font-extrabold leading-none"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "5.5rem",
                        color: "rgba(255,255,255,.12)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Sparkle */}
                    <svg
                      className="absolute top-4 left-5 pointer-events-none"
                      width="16"
                      height="16"
                      viewBox="0 0 36 36"
                      fill="none"
                      style={{ opacity: 0.45, animation: "andFloat 5s ease-in-out infinite" }}
                    >
                      <path
                        d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z"
                        fill="white"
                      />
                    </svg>
                    {/* Glass icon */}
                    <div
                      className="relative z-10 w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-3xl"
                      style={{
                        background: "rgba(255,255,255,.20)",
                        backdropFilter: "blur(12px)",
                        border: "1.5px solid rgba(255,255,255,.38)",
                        boxShadow:
                          "0 8px 28px rgba(0,0,0,.22), 0 0 20px rgba(255,255,255,.12)",
                        color: "#fff",
                      }}
                    >
                      {elm.icons}
                    </div>
                  </div>

                  {/* Dark glass content */}
                  <div
                    className="flex-1 flex flex-col p-7"
                    style={{
                      background: "rgba(255,255,255,.04)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    <div
                      className="w-10 h-[3px] rounded-full mb-4"
                      style={{
                        background: `linear-gradient(90deg,${g.from},${g.to})`,
                      }}
                    />
                    <h4
                      className="font-bold text-white mb-3 leading-snug"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "1.12rem",
                      }}
                    >
                      {elm.title}
                    </h4>
                    <p
                      className="text-[13.5px] leading-[1.84] flex-1"
                      style={{ color: "rgba(255,255,255,.50)" }}
                    >
                      {elm.desc}
                    </p>
                    <div
                      className="mt-6 h-[1px] rounded-full"
                      style={{
                        background: `linear-gradient(90deg,transparent,${g.from}55,${g.to}44,transparent)`,
                      }}
                    />
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%,${g.from}14,transparent 55%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Unchanged components ── */}
      <CustomSlider
        cards={cards}
        title="Delivering Innovative Android Application Solutions"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Cutting-Edge Android Application Development – End-to-End Robust Mobile Solutions for Your Business"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Developmen"
      />

      <GetNewInsight />
    </>
  );
};

export default Android;
