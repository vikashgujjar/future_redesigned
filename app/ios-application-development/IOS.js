"use client";
import React from "react";

import Image from "next/image";
import io from "../Assets/io.webp";
import ec from "../Assets/iii.gif";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import GetNewInsight from "../components/GetNewInsight";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import {
  FaCogs,
} from "react-icons/fa";

import {
  FaApple,
  FaSwift,
  FaCloud,
  FaLock,
} from "react-icons/fa";

import {
  FaChartLine,
} from "react-icons/fa";

import {
  FaMobileAlt,
  FaPalette,
  FaTools,
} from "react-icons/fa";

import {
  FaBriefcase,
  FaBullhorn,
} from "react-icons/fa";

const IOS = () => {
  const features = [
    {
      title: "Expertise in iOS Development",
      description:
        "iPhone app development is our core strength. We create high-performing, scalable, and feature-rich iOS applications that deliver seamless user experiences across iPhones and iPads, following Apple's best development standards.",
      icon: <FaApple />,
    },
    {
      title: "Innovative App Designs",
      description:
        "Our UI/UX designers craft visually appealing and intuitive app interfaces that follow Apple's Human Interface Guidelines. We ensure every design enhances engagement and leaves a lasting impression on users.",
      icon: <FaPalette />,
    },
    {
      title: "On-Time Project Delivery",
      description:
        "We follow agile methodologies to ensure every iPhone app project is delivered on schedule. Our efficient planning and execution guarantee timely launches without compromising on quality or performance.",
      icon: <FaClock />,
    },
    {
      title: "Dedicated iOS Development Team",
      description:
        "Our experienced iOS developers, designers, and QA engineers collaborate to deliver custom mobile apps tailored to your business goals. From concept to launch, we manage every stage with precision and care.",
      icon: <FaUsers />,
    },
    {
      title: "Proven Industry Experience",
      description:
        "With 15+ years in app development, we've built iPhone apps for startups, enterprises, and global brands across industries like eCommerce, healthcare, travel, and fintech—ensuring innovative and scalable solutions.",
      icon: <FaBriefcase />,
    },
    {
      title: "App Marketing & Optimization",
      description:
        "Beyond development, we help you grow your app with App Store Optimization (ASO), mobile marketing, and user engagement strategies that maximize downloads and ROI.",
      icon: <FaBullhorn />,
    },
    {
      title: "Continuous Support & Maintenance",
      description:
        "Our responsibility doesn't end with app launch. We provide ongoing maintenance, updates, and support to ensure your iOS app stays secure, compatible, and high-performing across all Apple devices.",
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
      count: "250+",
      title: "iOS Apps Delivered",
      desc: "We've developed and launched over 250 iOS applications across diverse industries. Each app is crafted to deliver superior performance, engaging design, and seamless user experience for iPhone and iPad users.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Experience",
      desc: "With over 15 years of mobile app development expertise, Future IT Touch Pvt. Ltd. has mastered the art of building scalable, secure, and high-quality iOS applications using Swift, SwiftUI, and modern frameworks.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "We've successfully delivered iOS apps for more than 500 global clients. From startups to enterprises, our team ensures each app meets unique business goals and Apple's design and security standards.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-first approach and commitment to quality have earned us a 98% satisfaction rate. We focus on transparency, communication, and creating apps that exceed expectations.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Technical Support",
      desc: "Our dedicated support team ensures your iOS application runs flawlessly post-launch. From updates to troubleshooting, we're available 24/7 to maintain performance and reliability.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaSwift className="text-white w-6 h-6" />,
      title: "Swift & SwiftUI Development",
      desc: "We specialize in building modern iOS apps using Swift and SwiftUI, ensuring high performance, clean architecture, and a smooth user experience optimized for Apple devices.",
    },
    {
      icon: <FaApple className="text-white w-6 h-6" />,
      title: "Native iOS App Development",
      desc: "We build robust native applications for iPhone, iPad, and Apple Watch using Xcode and Apple's latest frameworks, ensuring seamless performance and App Store compliance.",
    },
    {
      icon: <FaCloud className="text-white w-6 h-6" />,
      title: "Cloud Integration",
      desc: "Our team integrates apps with iCloud, Firebase, and AWS to enable secure data storage, real-time synchronization, and smooth performance across devices.",
    },
    {
      icon: <FaLock className="text-white w-6 h-6" />,
      title: "Security & Compliance",
      desc: "We implement strong data encryption, secure authentication, and GDPR compliance, ensuring your iOS applications meet the highest security and privacy standards.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "API & Backend Development",
      desc: "We create powerful RESTful and GraphQL APIs and integrate them seamlessly with your iOS apps, enabling real-time communication and efficient data flow.",
    },
    {
      icon: <FaTools className="text-white w-6 h-6" />,
      title: "App Testing & Maintenance",
      desc: "We conduct rigorous app testing using TestFlight and automated tools. Our ongoing maintenance ensures consistent app performance, updates, and feature enhancements.",
    },
  ];

  const faqData = [
    {
      title: "What technologies do you use for iOS app development?",
      description:
        "We primarily use Swift, SwiftUI, and Objective-C, along with Xcode, UIKit, CoreData, and various Apple SDKs to build modern, high-performing iOS applications.",
    },
    {
      title: "Can you help with publishing my app on the App Store?",
      description:
        "Yes, we handle the entire App Store submission process, including compliance checks, app signing, and deployment support to ensure a smooth launch.",
    },
    {
      title: "Do you provide custom iOS app development?",
      description:
        "Absolutely! We develop custom iPhone and iPad applications tailored to your unique business needs, ensuring optimal performance and a great user experience.",
    },
    {
      title: "How do you ensure app security?",
      description:
        "We follow Apple's best security practices, implementing data encryption, secure authentication, and regular security audits to safeguard user data and app integrity.",
    },
    {
      title: "Will my iOS app work on all Apple devices?",
      description:
        "Yes, we build responsive iOS apps compatible across iPhone, iPad, and Apple Watch devices, ensuring consistent functionality and design on all screen sizes.",
    },
    {
      title: "Do you provide post-launch support?",
      description:
        "Yes, we offer continuous maintenance, updates, and support to keep your iOS app up-to-date with the latest iOS versions and new feature integrations.",
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
        @keyframes iosFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes iosBlob  { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-16px,18px)} }
        @keyframes iosBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes iosPing  { 75%,100%{transform:scale(2.1);opacity:0} }

        .ios-dotgrid {
          background-image: radial-gradient(circle, rgba(99,102,241,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .ios-bar { animation: iosBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left; }
        .ios-ping { position: relative; }
        .ios-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:iosPing 2s ease-out infinite;
        }
        .ios-feat-card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .ios-feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(99,102,241,.14) !important; }
        .ios-biz-card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .ios-biz-card:hover { transform: translateY(-4px); }
      `}</style>

      {/* ── Banner ── */}
      <CommonBannerService
        imgSrc={io}
        title="IOS APP DEVELOPMENT SERVICES"
        desc="Future IT Touch Pvt. Ltd. provides cutting-edge mobile app development services to turn your dreams of a business app into reality. We have a proficient team for custom iOS app development, well versed in the latest frameworks, Objective C and Swift. We give our best efforts into creating highly interactive, innovative and scalable apps that meet your business objectives. By far, we have developed about 150+ mobile apps for a worldwide client base - from start-ups to SMBs and large enterprises. Engage our iOS app development services to craft dynamic, feature-rich, and industry-standard mobile applications that seamlessly run on the latest versions of iOS."
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
        <div className="ios-dotgrid absolute inset-0 pointer-events-none" />
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
                  src={io}
                  alt="iOS App Development"
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
                  style={{ opacity: 0.5, animation: "iosFloat 5s ease-in-out infinite" }}
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
                  style={{ opacity: 0.35, animation: "iosFloat 7s ease-in-out infinite 1.5s" }}
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
                    Trusted iOS Application Development
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
                  Crafting High-Performance{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    iOS Applications
                  </span>
                </h2>

                {/* Accent bar */}
                <div
                  className="ios-bar h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }}
                />

                {/* Body paragraphs */}
                <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                  <p>
                    At{" "}
                    <span className="font-semibold text-gray-700">
                      Future IT Touch Pvt. Ltd.
                    </span>{" "}
                    we specialize in developing iOS applications that combine elegant design, seamless
                    performance, and intuitive functionality — helping businesses connect better with
                    their users across iPhone, iPad, and Apple Watch.
                  </p>
                  <p>
                    Our iOS app development process focuses on building secure, scalable, and
                    feature-rich mobile experiences that meet Apple's highest standards. Whether you
                    need a customer-facing app, enterprise solution, or startup MVP, we deliver
                    results that stand out on the App Store.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Our Expertise Includes:</span>{" "}
                    UI/UX design tailored for iOS, Swift and SwiftUI development, API integration,
                    performance optimization, push notifications, and advanced app analytics.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Why Choose Us:</span> End-to-end
                    app development, strict security protocols, seamless backend integration, App
                    Store deployment support, and post-launch maintenance.
                  </p>
                  <p>
                    With over 15 years of experience, we've helped global brands and startups
                    transform ideas into successful iOS apps. Partner with{" "}
                    <span className="font-semibold text-gray-700">our iOS development experts</span>{" "}
                    to turn your vision into a premium mobile experience.
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
                  Start Your iOS App Project
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
        <div className="ios-dotgrid absolute inset-0 pointer-events-none" />
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
                className="ios-ping w-2 h-2 rounded-full flex-shrink-0"
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
                Our iPhone App Development Process
              </span>
            </div>
            <h2
              className="font-bold text-gray-900 mb-4"
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "clamp(1.6rem,3.2vw,2.5rem)",
              }}
            >
              We&apos;re a trusted iOS app development company in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                India
              </span>
            </h2>
            <div
              className="ios-bar mx-auto h-[3px] w-14 rounded-full"
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
                  alt="ios-application-development"
                  className="w-full rounded-xl object-cover hover:scale-105 md:h-[70vh] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="ios-feat-card flex flex-col items-start gap-4 p-6 border border-gray-100 rounded-xl bg-white shadow-md"
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
                className="ios-ping w-2 h-2 rounded-full flex-shrink-0"
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
                Leading iOS App Development Company in India
              </span>
            </div>
            <h2
              className="font-extrabold text-white mb-3"
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "clamp(1.5rem,3vw,2.4rem)",
              }}
            >
              Partner with Us for{" "}
              <span
                style={{
                  background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Growth &amp; Innovation
              </span>
            </h2>
            <div
              className="ios-bar mx-auto h-[3px] w-14 rounded-full"
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
                  className="ios-biz-card group relative rounded-[20px] overflow-hidden flex flex-col"
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
                      style={{ opacity: 0.45, animation: "iosFloat 5s ease-in-out infinite" }}
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
        title="Delivering Innovative iOS App Experiences with"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="iOS App Development Technologies We Use"
      />

      <FAQSection
        faqData={faqData}
        title="About iOS Application Development"
      />

      <GetNewInsight />
    </>
  );
};

export default IOS;
