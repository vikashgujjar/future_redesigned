"use client";
import React from "react";

import Image from "next/image";
import gm from "../Assets/bb.gif";
import d1 from "../Assets/bro.gif";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import {  FaUsers } from "react-icons/fa";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  FaBuilding,
  FaBoxOpen,
  FaLayerGroup,
  FaFileAlt,
  FaFolderOpen,
} from "react-icons/fa";
import GetNewInsight from "../components/GetNewInsight";
import OverviewSection from "../components/OverviewSection";

import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";

const Brochure = () => {
 const features = [
  {
    title: "Company Brochure Design",
    description:
      "We design professional company brochures that create a lasting impression and elevate your brand's visibility in the market with clean, creative layouts.",
    icon: <FaBuilding />,
  },
  {
    title: "Product Catalog Design",
    description:
      "Our eye-catching product catalogs showcase your entire product range, emphasizing features and benefits in a well-structured, visually appealing format.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Sales Brochure Design",
    description:
      "Boost your conversions with sales brochures that highlight new products, offers, or promotional events in an engaging and persuasive way.",
    icon: <FaChartLine />,
  },
  {
    title: "Bi-Fold Brochure Design",
    description:
      "We create elegant bi-fold brochures with 4 panels — perfect for concise presentations that balance visuals and key information effectively.",
    icon: <FaBookOpen />,
  },
  {
    title: "Tri-Fold Brochure Design",
    description:
      "Our tri-fold brochures feature 6 panels, giving you ample space to showcase your content in a neat, organized, and professional structure.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Gate Fold Brochure Design",
    description:
      "Designed for high-end marketing campaigns, our gate fold brochures open up with sophistication — making your message stand out instantly.",
    icon: <FaFileAlt />,
  },
  {
    title: "Insert & Folder Brochure Design",
    description:
      "We craft practical insert and folder brochures with pockets for product sheets or offers — ideal for corporate presentations and events.",
    icon: <FaFolderOpen />,
  },
];

const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Creative Brochure Concepts",
    desc: "We design visually stunning and concept-driven brochures that effectively capture your brand essence and engage your target audience with clarity and impact.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Custom Layout & Design",
    desc: "Our experts craft unique brochure layouts, blending colors, typography, and imagery to create professional designs tailored to your business goals.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Design Process",
    desc: "We work hand-in-hand with clients throughout the design journey to ensure every brochure reflects your brand personality and marketing objectives perfectly.",
  },
];

  const cards = [
    {
      count: "250+",
      title: "Videos Successfully Delivered",
      desc: "We've produced over 250 high-quality explainer videos that simplify complex ideas and help businesses communicate their stories effectively. From startups to enterprises, our videos drive engagement and conversions.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Production Expertise",
      desc: "With more than 15 years of experience in creative storytelling and animation, Future IT Touch Pvt. Ltd. delivers impactful explainer videos that educate, inspire, and connect with audiences worldwide.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 international brands, we create explainer videos that enhance communication, strengthen marketing efforts, and increase brand visibility across digital platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to creativity, clarity, and storytelling excellence has earned us a 98% satisfaction rate. We focus on delivering videos that truly represent your brand and connect with your audience.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Video Support",
      desc: "Our creative team provides round-the-clock support — from script revisions to post-production edits — ensuring every video meets your goals and maintains top-tier quality at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Brochure Concept & Design",
    desc: "We create visually appealing brochure concepts that reflect your brand identity and convey your message clearly to engage your target audience effectively.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Layout & Visual Planning",
    desc: "Our team designs detailed layouts and mockups for each brochure, ensuring proper alignment of visuals, typography, and content for maximum readability and impact.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Custom Illustrations & Graphics",
    desc: "We craft high-quality graphics, icons, and illustrations to enhance your brochure's visual appeal and make your message more engaging and memorable.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Print-Ready Design",
    desc: "We prepare your brochures with professional print standards, color calibration, and formats to ensure they look perfect in both digital and physical formats.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Marketing & Promotional Brochures",
    desc: "We design brochures tailored for promotions, campaigns, and events, helping your business communicate offers and messages clearly and persuasively.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Performance & Quality Assurance",
    desc: "We review every brochure for design quality, accuracy, and branding consistency to ensure your final product meets your business goals and audience expectations.",
  },
];

 const faqData = [
  {
    title: "What services are included in Brochure Design?",
    description:
      "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging brochures.",
  },
  {
    title: "Can you customize brochures for my business?",
    description:
      "Absolutely! We tailor every brochure — from style, layout, and colors to imagery and messaging — ensuring it perfectly represents your brand and communicates your message effectively.",
  },
  {
    title: "How do you ensure design quality and consistency?",
    description:
      "We follow a structured design process with detailed layouts, visual guidelines, and quality checks to maintain high-quality, consistent, and on-brand brochures across all projects.",
  },
  {
    title: "Do you provide brochures for both print and digital use?",
    description:
      "Yes, we create brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure your content is accessible and visually appealing on all platforms.",
  },
  {
    title: "Can you redesign an existing brochure?",
    description:
      "Definitely! We can refresh your current brochures by updating visuals, layouts, typography, and messaging to make them more modern, engaging, and aligned with your audience.",
  },
  {
    title: "Do you provide ongoing brochure support?",
    description:
      "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your brochures remain relevant and effective.",
  },
];

  return (
    <>
      <CommonBannerService
        imgSrc={gm}
        title="BROCHURE DESIGN SERVICES"
        desc="Future IT Touch Pvt. Ltd., an certified company, has the experience of crafting the right brand message and promoting your business through custom brochure design services. Our specialization includes corporate & business brochure design, product catalogues, leaflets, flyers and much more. With a team of skilled and experienced designers we create unique designs that stand apart. Hire our graphic designers to present your business in a professional and graceful manner."
      />

      <TechMarquee />

      <OverviewSection
        image={gm}
        imageAlt="Brochure Design Services"
        badgeText="Professional & Creative Brochure Design Services"
        heading="Designing Brochures That Speak"
        headingHighlight="Your Brand's Story"
        paragraphs={[
          "At Future IT Touch Pvt. Ltd. we design professional brochures that communicate your brand message clearly and leave a lasting impression. Our designers combine creativity with strategic thinking to produce brochures that convert.",
          "From bi-fold and tri-fold to digital brochures, we handle everything — concept, design, typography, imagery, and print-ready files — ensuring your brand stands out at every touchpoint.",
          "With over 15 years of design expertise, we have crafted thousands of brochures across industries. Every design reflects your brand identity, engages your audience, and drives business results.",
        ]}
        ctaText="Design Your Brochure Today"
      />

      {/* Features section */}
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
                Creative Brochure Design Services
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Transforming Brand Messages into{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Visually Stunning Print Designs
              </span>
            </h4>
            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8">

            <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-28">
              <div className="relative rounded-2xl overflow-hidden w-full"
                style={{
                  border: "1px solid rgba(99,102,241,.12)",
                  boxShadow: "0 20px 60px rgba(99,102,241,.12), 0 4px 16px rgba(0,0,0,.06)",
                }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                <Image
                  src={d1}
                  alt="Brochure Design Services"
                  className="w-full object-cover hover:scale-105 md:h-[70vh] transition-transform duration-500"
                />
              </div>
            </div>

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
                    style={{
                      border: `1px solid ${g.from}22`,
                      boxShadow: "0 4px 24px rgba(99,102,241,.08), 0 1px 4px rgba(0,0,0,.05)",
                    }}>
                    <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                      style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />

                    <div className="flex -mt-14 justify-center items-center w-20 h-20 rounded-xl text-3xl"
                      style={{
                        background: `linear-gradient(135deg,${g.from},${g.to})`,
                        boxShadow: `0 6px 20px ${g.from}44`,
                      }}>
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

      {/* TurnYourBusiness */}
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
                Professional Brochure Design Company in India
              </span>
            </div>

            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Crafting Brochures That Attract, Inform &{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Inspire Customers
              </span>
            </h4>

            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />
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
                  style={{
                    border: "1px solid rgba(255,255,255,.08)",
                    boxShadow: "0 12px 48px rgba(0,0,0,.40)",
                  }}>

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
                      style={{
                        background: "rgba(255,255,255,.20)",
                        backdropFilter: "blur(12px)",
                        border: "1.5px solid rgba(255,255,255,.38)",
                        boxShadow: "0 8px 28px rgba(0,0,0,.22)",
                      }}>
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
        title="Designing Impactful Brochures That Inspire, Inform & Impress"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Brochure Design Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Brochure Design Services"
      />

      <GetNewInsight />
    </>
  );
};

export default Brochure;
