"use client";
import React from "react";
import Image from "next/image";
import gg from "../Assets/gg.webp";
import image2 from "../Assets/gif.gif";
import { FaTools, FaDatabase } from "react-icons/fa";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaBuilding,
  FaNetworkWired,
  FaCode,
  FaCogs,
  FaServer,
  FaShippingFast,
  FaCloud,
  FaSms,
  FaVideo,
  FaMapMarkedAlt,
  FaChartLine,
} from "react-icons/fa";
import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";

import GetNewInsight from "../components/GetNewInsight";
const Ecommerce = () => {
  const features = [
    {
      title: "Seamless Third-Party API Integration",
      description:
        "Our web applications are designed to seamlessly integrate with premium third-party APIs to enhance functionality and streamline your business processes. From payment gateways to messaging services, we ensure smooth and secure connections that empower your application.",
      icon: <FaCloud />,
    },
    {
      title: "Real-Time Communication & Notifications",
      description:
        "Integrating APIs like Twilio for SMS and video or Zoom for webinars, we enable your web applications to communicate in real-time. These features improve engagement, provide instant updates, and create interactive experiences for users across devices.",
      icon: <FaSms />,
    },
    {
      title: "Video & Streaming Integration",
      description:
        "With Vimeo and Zoom API integration, your applications can host live streams, webinars, and video content efficiently. This ensures high-quality streaming, interactive sessions, and an engaging user experience without the need for complex in-house setups.",
      icon: <FaVideo />,
    },
    {
      title: "Mapping & Geolocation Services",
      description:
        "Google Maps and other location-based APIs are integrated to offer precise geolocation features. Whether it's displaying store locations, tracking deliveries, or enabling location-based services, your users get a rich and interactive mapping experience.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Logistics & SMS Automation",
      description:
        "From xotel SMS & Call APIs to alamove for delivery logistics, we implement systems that automate communication and operations. This ensures timely notifications, efficient order tracking, and a smooth workflow for both businesses and end-users.",
      icon: <FaShippingFast />,
    },
    {
      title: "Custom Workflows & Configurations",
      description:
        "Our developers build custom logic and workflows using APIs like nableX to suit your unique business needs. This allows your web application to handle complex processes efficiently while remaining user-friendly and scalable.",
      icon: <FaCogs />,
    },
    {
      title: "Analytics & Insights Integration",
      description:
        "By connecting analytical APIs, we enable you to track user behavior, system performance, and operational metrics. This data-driven approach helps businesses make informed decisions, optimize features, and maximize ROI through actionable insights.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaTools className="text-white w-8 h-8" />,
      title: "Application Enhancement",
      desc: "We provide continuous improvement for your web applications by adding new features, enhancing functionality, and keeping your software up-to-date with evolving business needs.",
    },
    {
      icons: <FaServer className="text-white w-8 h-8" />,
      title: "Hosting Migration & Support",
      desc: "Our team ensures seamless hosting migration and ongoing support, keeping your web application secure, fast, and accessible for your users at all times.",
    },
    {
      icons: <FaDatabase className="text-white w-8 h-8" />,
      title: "Database Optimization",
      desc: "We optimize your databases for performance and scalability, ensuring smooth operations, faster data retrieval, and a reliable backend for your web applications.",
    },
  ];

  const cards = [
    {
      count: "100+",
      title: "Applications Maintained",
      desc: "We have successfully maintained over 100 web applications, ensuring optimal performance, smooth functionality, and timely updates. Each application is carefully monitored to provide seamless experiences for your users.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "10+",
      title: "Years of Expertise",
      desc: "With over 10 years of experience in web application maintenance and support, our team brings deep technical knowledge to every project. We ensure best practices, modern technologies, and effective maintenance strategies are applied.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Clients Supported Globally",
      desc: "Trusted by over 500 clients worldwide, we provide reliable maintenance and support for diverse web applications. Our experience spans multiple industries, ensuring your app stays robust and fully functional across all platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Satisfaction Rate",
      desc: "Our client-centric approach has earned a 98% satisfaction rate. We focus on delivering proactive maintenance, timely updates, and responsive support, ensuring every application operates smoothly and meets client expectations.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "We provide round-the-clock support for all web applications. Our dedicated team resolves technical issues quickly, optimizes performance, and ensures your applications remain reliable and accessible at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      title: "Web Portal Development",
      desc: "We build user-focused web portals that combine advanced functionality with intuitive design. Tailored to reflect your brand, these portals encourage user interaction while delivering seamless performance and robust features.",
    },
    {
      icon: <FaShoppingCart className="text-white w-6 h-6" />,
      title: "Ecommerce Website Development",
      desc: "Our team creates B2B, B2C, and multi-vendor eCommerce platforms that are visually appealing, secure, and optimized for conversions. From planning to deployment, we provide comprehensive web store development services.",
    },
    {
      icon: <FaBuilding className="text-white w-6 h-6" />,
      title: "Enterprise Application Development",
      desc: "We deliver scalable and secure enterprise-grade web applications designed to support business growth. Our solutions adapt to market changes while ensuring faster time-to-market and a competitive advantage.",
    },
    {
      icon: <FaNetworkWired className="text-white w-6 h-6" />,
      title: "Progressive Web App (PWA) Development",
      desc: "We develop lightweight, secure, and engaging Progressive Web Applications that work offline, send push notifications, and perform seamlessly across multiple devices and browsers, following Google's guidelines.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Single Page Application (SPA) Development",
      desc: "We create interactive and fast-loading single-page applications with flexible architecture. Our SPAs are optimized for performance, cross-browser responsiveness, and an immersive user experience.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "Custom Web Application Development",
      desc: "We design feature-rich, tailor-made web applications using modern frameworks and technologies to meet unique business requirements, ensuring optimal performance, scalability, and security.",
    },
  ];

  const faqData = [
    {
      title: "What types of web applications do you develop?",
      description:
        "We specialize in web portals, B2B/B2C web applications, enterprise applications, progressive web apps, and single-page applications tailored to your business needs.",
    },
    {
      title: "Can you customize applications to my business requirements?",
      description:
        "Absolutely! Our developers provide full customization for functionality, UI/UX, and integrations, ensuring the application aligns perfectly with your workflows and objectives.",
    },
    {
      title: "Do you provide secure and scalable solutions?",
      description:
        "Yes, security and scalability are top priorities. We follow industry best practices, integrate secure coding standards, and build applications capable of handling growing traffic and data needs.",
    },
    {
      title: "Can you integrate third-party APIs?",
      description:
        "Definitely. We integrate APIs like payment gateways, SMS/video services, cloud storage, maps, and other third-party solutions to enhance the functionality of your web application.",
    },
    {
      title: "Are the applications mobile-friendly and responsive?",
      description:
        "Yes, all our web applications are designed to be fully responsive and cross-browser compatible, ensuring seamless performance across desktops, tablets, and smartphones.",
    },
    {
      title: "Do you provide maintenance and ongoing support?",
      description:
        "We offer continuous maintenance, updates, and technical support to ensure your web applications remain secure, fast, and optimized even after deployment.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes waFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>

      <CommonBannerService
        imgSrc={gg}
        title="WEB APPLICATION DEVELOPMENT"
        desc="Future IT Touch Pvt. Ltd. is an award-winning website development company offering custom web application development services to startups, SMBs, and large enterprises. With an aim to driving business transformation, we are building quality web applications for diverse business domains since 2005. Leveraging cutting-edge technology frameworks, APIs, and databases, we can craft futuristic, conversion-driven, and highly optimized solutions that ensure excellent user experience."
      />

      <TechMarquee />

      {/* ── Premium Web Application Development ── */}
      <section className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
          <div className="relative rounded-[28px] overflow-hidden"
            style={{ boxShadow: "0 50px 100px rgba(99,102,241,.14), 0 20px 40px rgba(0,0,0,.08), 0 0 0 1px rgba(99,102,241,.08)" }}>

            <div className="absolute top-0 left-0 right-0 h-[3px] z-20"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: image */}
              <div className="relative overflow-hidden" style={{ minHeight: "clamp(320px,45vw,580px)" }}>
                <Image src={image2} alt="Web application development" fill
                  sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-center" />

                <div className="absolute inset-0 z-[1]"
                  style={{ background: "linear-gradient(145deg,rgba(13,148,136,.60) 0%,rgba(99,102,241,.68) 55%,rgba(139,92,246,.75) 100%)" }} />
                <div className="absolute inset-0 z-[2] opacity-[.18]"
                  style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

                <div className="absolute top-7 left-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderTop: "2.5px solid rgba(255,255,255,.40)", borderLeft: "2.5px solid rgba(255,255,255,.40)", borderRadius: "8px 0 0 0" }} />
                <div className="absolute bottom-7 right-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderBottom: "2.5px solid rgba(255,255,255,.40)", borderRight: "2.5px solid rgba(255,255,255,.40)", borderRadius: "0 0 8px 0" }} />

                <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1.5px solid rgba(255,255,255,.14)" }} />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1px solid rgba(255,255,255,.10)" }} />

                <svg className="absolute top-[28%] right-[18%] z-[3] pointer-events-none" width="22" height="22"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .50, animation: "waFloat 5s ease-in-out infinite" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>
                <svg className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none" width="14" height="14"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .35, animation: "waFloat 7s ease-in-out infinite 1.5s" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>

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

              {/* Right: content */}
              <div className="bg-white px-8 py-12 sm:px-10 sm:py-14 xl:px-14 xl:py-16 flex flex-col justify-center">

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
                    Premium Web Application Development
                  </span>
                </div>

                <h4 className="font-bold leading-tight text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.65rem,3vw,2.5rem)" }}>
                  Building Powerful and{" "}
                  <span style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Scalable Web Applications
                  </span>
                </h4>

                <div className="h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

                <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                  <p>
                    At{" "}
                    <span className="font-semibold" style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                      Future IT Touch Pvt. Ltd.
                    </span>{" "}
                    we specialize in developing robust web applications that streamline business processes, improve operational efficiency, and provide seamless user experiences across devices. Our team leverages modern frameworks and technologies to craft scalable, secure, and high-performing solutions tailored to your business needs.
                  </p>
                  <p>
                    To ensure your web application delivers maximum value, we integrate a variety of third-party APIs to enhance functionality and enable smooth workflows. From cloud storage with Amazon S3 and CloudFront, real-time communication via Twilio and Zoom, to interactive maps using Google Maps API, our integrations cover a wide range of essential services. We also support video streaming through Vimeo, logistics integration with alamove, and advanced messaging with xotel and nableX APIs.
                  </p>
                  <p>
                    With over 15 years of experience, we ensure that every project is delivered with performance, scalability, and security in mind.
                  </p>
                </div>

                <a href="tel:+917056937000"
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 22px rgba(45,212,191,.28)", fontFamily: "'Poppins',sans-serif" }}>
                  Start Your Web App Journey
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── high performance ── */}
      <section className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
          <div className="absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />
        </div>

        <div className="relative z-10 px-5 md:px-12 xl:px-28">

          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Trusted Web App Development Company
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Creating Web Applications That Are{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Powerful &amp; Scalable
              </span>
            </h4>
            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8">

            {/* Sticky image */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-28">
              <div className="relative rounded-2xl overflow-hidden w-full"
                style={{ border: "1px solid rgba(99,102,241,.12)", boxShadow: "0 20px 60px rgba(99,102,241,.12), 0 4px 16px rgba(0,0,0,.06)" }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                <Image
                  src={image2}
                  alt="Web App Development"
                  className="w-full object-cover hover:scale-105 md:min-h-[60vh] xl:h-[70vh] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-10 lg:gap-12">
              {features.map((feature, index) => {
                const gradients = [
                  { from: "#2dd4bf", to: "#6366f1" },
                  { from: "#6366f1", to: "#8b5cf6" },
                  { from: "#0ea5e9", to: "#2dd4bf" },
                  { from: "#a855f7", to: "#6366f1" },
                  { from: "#2dd4bf", to: "#0ea5e9" },
                  { from: "#8b5cf6", to: "#a855f7" },
                  { from: "#6366f1", to: "#2dd4bf" },
                ];
                const g = gradients[index % gradients.length];
                return (
                  <div key={index}
                    className="group relative flex flex-col items-start gap-4 p-6 rounded-xl bg-white transition-all duration-300 hover:-translate-y-1"
                    style={{ border: `1px solid ${g.from}22`, boxShadow: "0 4px 24px rgba(99,102,241,.08), 0 1px 4px rgba(0,0,0,.05)" }}>

                    <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                      style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />

                    <div className="flex -mt-14 justify-center items-center w-20 h-20 rounded-xl text-3xl"
                      style={{ background: `linear-gradient(135deg,${g.from},${g.to})`, boxShadow: `0 6px 20px ${g.from}44` }}>
                      <span className="text-white">{feature.icon}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900"
                      style={{ fontFamily: "'Poppins',sans-serif" }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm lg:text-base text-gray-600 text-justify">
                      {feature.description}
                    </p>

                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 10% 0%,${g.from}08,transparent 60%)` }} />
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── TurnYourBusiness ── */}
      <section className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.022) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(99,102,241,.16),transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,.12),transparent 65%)" }} />
        </div>

        <div className="relative z-10 px-5 md:px-12 xl:px-28">

          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Reliable Web Application Maintenance &amp; Support
              </span>
            </div>
            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Ensuring Your Web Applications Run{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Smoothly &amp; Efficiently
              </span>
            </h4>
            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {businessData.map((elm, i) => {
              const gradients = [
                { from: "#2dd4bf", to: "#6366f1" },
                { from: "#6366f1", to: "#8b5cf6" },
                { from: "#0ea5e9", to: "#2dd4bf" },
              ];
              const g = gradients[i % gradients.length];
              return (
                <div key={elm.title}
                  className="group relative rounded-[20px] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,.08)", boxShadow: "0 12px 48px rgba(0,0,0,.40)" }}>

                  <div className="relative flex items-center justify-center py-10 overflow-hidden"
                    style={{ background: `linear-gradient(135deg,${g.from},${g.to})` }}>
                    <div className="absolute inset-0 opacity-[.18]"
                      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.18)" }} />
                    <div className="absolute top-1 right-3 select-none pointer-events-none font-extrabold leading-none"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "5rem", color: "rgba(255,255,255,.12)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="relative z-10 w-[64px] h-[64px] rounded-2xl flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,.20)", backdropFilter: "blur(12px)", border: "1.5px solid rgba(255,255,255,.38)", boxShadow: "0 8px 28px rgba(0,0,0,.22)" }}>
                      {elm.icons}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col p-7"
                    style={{ background: "rgba(255,255,255,.04)", backdropFilter: "blur(16px)" }}>
                    <div className="w-10 h-[3px] rounded-full mb-4"
                      style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />
                    <h5 className="font-bold text-white mb-3 leading-snug"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1.1rem" }}>
                      {elm.title}
                    </h5>
                    <p className="text-[13.5px] leading-[1.84] flex-1"
                      style={{ color: "rgba(255,255,255,.50)" }}>
                      {elm.desc}
                    </p>
                    <div className="mt-6 h-[1px] rounded-full"
                      style={{ background: `linear-gradient(90deg,transparent,${g.from}55,${g.to}44,transparent)` }} />
                  </div>

                  <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%,${g.from}14,transparent 55%)` }} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CustomSlider
        cards={cards}
        title="Ensuring Smooth & Reliable Web Application Performance"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Our Suite of Web Application Development Services"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Development"
      />

      <GetNewInsight />
    </>
  );
};

export default Ecommerce;
