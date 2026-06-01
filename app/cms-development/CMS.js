"use client";
import React from "react";
import Image from "next/image";
import gm from "../Assets/gm.webp";
import image2 from "../Assets/gif.gif";
import {
  FaLaptopCode,
  FaSync,
  FaExchangeAlt,
  FaWordpress,
  FaShoppingBag,
  FaMagento,
  FaShopify,
  FaDrupal,
  FaCode,
  FaMoneyBillWave,
  FaEdit,
  FaFileAlt,
  FaGlobe,
  FaShareAlt,
  FaSearch,
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
      title: "Affordable Website Management",
      description:
        "CMS development reduces ongoing maintenance costs by giving business owners the flexibility to manage and update their websites without constant developer support. This ensures cost-effectiveness and control.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Easy-to-Use Editing Tools",
      description:
        "With an intuitive WYSIWYG editor, you can edit, format, and publish content effortlessly. No coding knowledge is required, making it simple for anyone to keep the site fresh and updated.",
      icon: <FaEdit />,
    },
    {
      title: "Better Content Organization",
      description:
        "CMS platforms provide structured content management, allowing you to upload, organize, and update text, media, and documents seamlessly. This ensures a clean, consistent, and user-friendly site.",
      icon: <FaFileAlt />,
    },
    {
      title: "Multilingual Capabilities",
      description:
        "Expand your reach by building and maintaining a multilingual website with ease. A CMS makes it simple to manage translations and cater to diverse global audiences.",
      icon: <FaGlobe />,
    },
    {
      title: "Social Media Integration",
      description:
        "Connect your website to leading social media platforms, embed feeds, and share updates instantly. This boosts brand visibility and strengthens user engagement across multiple channels.",
      icon: <FaShareAlt />,
    },
    {
      title: "SEO-Friendly Structure",
      description:
        "Our CMS development ensures an SEO-optimized website with clean coding practices, metadata control, and keyword-ready architecture to improve your search engine rankings.",
      icon: <FaSearch />,
    },
  ];

  const businessData = [
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "CMS Web Design & Development",
      desc: "We build mobile-responsive CMS websites that are feature-rich, user-friendly, and fully aligned with the latest design trends and technologies.",
    },
    {
      icons: <FaSync className="text-white w-8 h-8" />,
      title: "CMS Upgrade & Integration",
      desc: "Our team helps upgrade your existing CMS version and integrates plugins or components to extend functionality and keep your website modern.",
    },
    {
      icons: <FaExchangeAlt className="text-white w-8 h-8" />,
      title: "Existing CMS Migration",
      desc: "We ensure smooth migration of your website from one CMS platform to another without losing data, SEO ranking, or performance quality.",
    },
  ];

  const cards = [
    {
      count: "100+",
      title: "CMS Websites Delivered",
      desc: "We have successfully delivered over 100 CMS-based websites, ensuring responsive design, smooth functionality, and secure, scalable online platforms for clients worldwide.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "10+",
      title: "Years of Expertise",
      desc: "With over 10 years of experience in CMS and eCommerce development, our team applies modern technologies and best practices to build robust, user-friendly websites tailored to your business needs.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Clients Supported Globally",
      desc: "Trusted by over 500 businesses globally, we provide expert CMS development and maintenance. Our solutions span multiple industries, ensuring secure, fast, and efficient websites for all.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-centric approach in CMS and eCommerce development has earned a 98% satisfaction rate. We deliver intuitive, feature-rich websites with timely support and maintenance.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "We provide round-the-clock support for all CMS websites. Our team ensures smooth operation, timely updates, and quick resolution of any technical issues to keep your site reliable.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress Development",
      desc: "We build lightweight and easy-to-manage WordPress websites. Using WooCommerce, we create scalable eCommerce stores with secure payments, shipping options, and modern features.",
    },
    {
      icon: <FaShoppingBag className="text-white w-6 h-6" />,
      title: "PrestaShop Development",
      desc: "PrestaShop is free, lightweight, and supports multiple languages. Our experts craft unique eCommerce websites that allow you to sell globally with ease and flexibility.",
    },
    {
      icon: <FaMagento className="text-white w-6 h-6" />,
      title: "Magento Development",
      desc: "We deliver powerful Magento-based eCommerce platforms with custom features, high scalability, and advanced integrations to ensure seamless online shopping experiences.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Custom Development",
      desc: "Our team creates tailor-made eCommerce solutions using Laravel, CodeIgniter, NodeJS, and other frameworks, ensuring robust, feature-rich, and scalable applications.",
    },
    {
      icon: <FaShopify className="text-white w-6 h-6" />,
      title: "Shopify Development",
      desc: "Shopify enables quick store setup with 100+ themes and plugins. We build storefronts with SEO, fraud prevention, drop-shipping support, and social media integration.",
    },
    {
      icon: <FaDrupal className="text-white w-6 h-6" />,
      title: "Drupal Development",
      desc: "Drupal is highly flexible and secure. We develop enterprise-grade CMS platforms with multi-language support, advanced customization, and strong community-driven modules.",
    },
  ];

  const faqData = [
    {
      title: "What types of CMS websites do you develop?",
      description:
        "We specialize in WordPress, PrestaShop, Magento, Shopify, Drupal, and custom CMS websites, tailored to meet your business goals and provide a seamless user experience.",
    },
    {
      title: "Can you customize CMS websites to my business needs?",
      description:
        "Absolutely! We offer full customization of themes, plugins, and features, ensuring your CMS website aligns perfectly with your brand and operational workflows.",
    },
    {
      title: "Are CMS websites secure and scalable?",
      description:
        "Yes, security and scalability are top priorities. We implement secure coding practices, configure SSL, and build CMS websites capable of handling high traffic and growing content needs.",
    },
    {
      title: "Can you integrate third-party tools and plugins?",
      description:
        "Definitely. We integrate payment gateways, marketing tools, analytics, social media plugins, and other third-party solutions to enhance your CMS website's functionality.",
    },
    {
      title: "Are the CMS websites mobile-friendly and responsive?",
      description:
        "Yes, all our CMS websites are fully responsive, mobile-optimized, and cross-browser compatible, ensuring a smooth user experience on desktops, tablets, and smartphones.",
    },
    {
      title: "Do you provide maintenance and support for CMS websites?",
      description:
        "We provide ongoing maintenance, updates, and technical support to keep your CMS website secure, fast, and fully functional even after launch.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes cmsFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>

      <CommonBannerService
        imgSrc={gm}
        title="CMS WEB DEVELOPMENT SERVICES"
        desc="A CMS (Content Management System) allows you to control and manage the content of your website with little or no knowledge of coding. It provides an easy interface to add / delete new pages and edit the content within. CMS offers a site-search tool for the visitors to find any specific content they are looking for. At Future IT Touch Pvt. Ltd., a leading CMS web development company in India, we deal with all types of open source content management systems and provide customized solutions to meet your needs."
      />

      <TechMarquee />

      {/* ── Custom CMS Development ── */}
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
                <Image src={gm} alt="CMS web development" fill
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
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .50, animation: "cmsFloat 5s ease-in-out infinite" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>
                <svg className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none" width="14" height="14"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .35, animation: "cmsFloat 7s ease-in-out infinite 1.5s" }}>
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
                    Custom CMS Development
                  </span>
                </div>

                <h4 className="font-bold leading-tight text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.65rem,3vw,2.5rem)" }}>
                  Building Flexible and{" "}
                  <span style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Easy-to-Manage CMS Websites
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
                    we deliver custom CMS solutions that make website management simple, efficient, and scalable. Our CMS development services ensure your content is well-structured, easy to update, and optimized for performance, giving you complete control over your digital presence.
                  </p>
                  <p>
                    Our CMS expertise covers everything from design and development to seamless migration and ongoing support. We build responsive CMS websites with modern features and smooth user experiences, ensuring you always stay ahead in the digital landscape.
                  </p>
                  <p>
                    Whether it&apos;s upgrading to the latest CMS version, integrating plugins and components, or migrating your website to a new platform, our team ensures a hassle-free process. With reliable support and maintenance services, we are always available to resolve issues, implement improvements, and keep your CMS website secure and efficient.
                  </p>
                </div>

                <a href="tel:+917056937000"
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 22px rgba(45,212,191,.28)", fontFamily: "'Poppins',sans-serif" }}>
                  Start Your CMS Journey
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
                Trusted CMS Development Company
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Building Flexible &amp;{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Easy-to-Manage CMS Websites
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
                  alt="CMS Development"
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
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
                Custom CMS Website Development Services
              </span>
            </div>
            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              We would be happy to discuss{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                the project with you in person
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
        title="Building Powerful & Scalable CMS Solutions for Your Business"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Our Comprehensive CMS Development Services"
      />

      <FAQSection
        faqData={faqData}
        title="About CMS & eCommerce Website Development"
      />

      <GetNewInsight />
    </>
  );
};

export default Ecommerce;
