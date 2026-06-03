"use client";
import React from "react";

import Image from "next/image";
import gm from "../Assets/cro.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import d1 from "../Assets/logo-gif.webp";
import GetNewInsight from "../components/GetNewInsight";
import OverviewSection from "../components/OverviewSection";

import {
  FaPalette,

} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";
import {
  FaIdCard,
  FaEnvelopeOpenText,
  FaFolderOpen,
  FaPenFancy,
  FaFileInvoice,
  FaBullhorn,
  FaTools
} from "react-icons/fa";

const Brochure = () => {
const features = [
  {
    title: "Business Card Design",
    description:
      "We craft professional business cards that reflect your brand identity, leaving a strong and memorable impression on clients and partners.",
    icon: <FaIdCard />,
  },
  {
    title: "Letterhead & Envelope Design",
    description:
      "Our custom letterheads and envelopes ensure consistent branding across all corporate communication, enhancing professionalism and trust.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    title: "Presentation Folder Design",
    description:
      "We design branded folders that organize and showcase important documents, making a polished and cohesive impression during client meetings.",
    icon: <FaFolderOpen />,
  },
  {
    title: "Corporate Stationery Sets",
    description:
      "Complete stationery sets including notepads, pens, and office supplies, designed to maintain visual consistency and reinforce your corporate image.",
    icon: <FaPenFancy />,
  },
  {
    title: "Invoice & Report Templates",
    description:
      "Professionally designed templates for invoices, reports, and proposals that reflect your brand identity and ensure uniformity across documents.",
    icon: <FaFileInvoice />,
  },
  {
    title: "Branded Marketing Collateral",
    description:
      "We create branded letterheads, envelopes, and other materials for marketing campaigns, ensuring your corporate identity is cohesive and recognizable.",
    icon: <FaBullhorn />,
  },
  {
    title: "Custom Stationery Solutions",
    description:
      "Tailored stationery solutions to meet your business needs — combining creativity, functionality, and brand consistency for maximum impact.",
    icon: <FaTools />,
  },
];


const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Innovative Stationery Concepts",
    desc: "We create thoughtful and professional stationery designs that communicate your brand identity effectively across business cards, letterheads, and envelopes.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Custom Layout & Branding",
    desc: "Our team develops visually cohesive layouts combining typography, colors, and graphics to ensure your stationery aligns perfectly with your corporate identity.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Client-Centric Collaboration",
    desc: "We engage closely with clients throughout the design process to ensure each stationery item reflects your brand personality, professionalism, and business goals.",
  },
];


const cards = [
  {
    count: "250+",
    title: "Brochures Successfully Delivered",
    desc: "We've designed over 250 professional brochures that clearly communicate brand messages and create strong impressions. From startups to enterprises, our brochures drive engagement and brand recognition.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Design Expertise",
    desc: "With more than 15 years of experience in corporate stationery and brochure design, Future IT Touch Pvt. Ltd. delivers visually compelling and strategically effective designs.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 brands worldwide, we produce brochures and corporate stationery that enhance brand communication and visibility across digital and print media.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our focus on design quality, attention to detail, and client collaboration has earned us a 98% satisfaction rate. We create brochures that reflect your brand identity effectively.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Design Support",
    desc: "Our team provides ongoing support for revisions, print preparation, and digital adaptation, ensuring your corporate stationery and brochures meet the highest standards.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Creative Concepts & Branding",
    desc: "We develop unique stationery and brochure concepts that capture your brand's personality and communicate your message clearly to your target audience.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Layout & Visual Planning",
    desc: "Our team crafts detailed layouts and mockups for corporate stationery and brochures, ensuring perfect alignment of visuals, text, and branding elements.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Custom Graphics & Illustrations",
    desc: "We create tailored graphics, icons, and illustrations to enhance the visual appeal of your brochures and stationery, making them professional and engaging.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Print-Ready & Digital Design",
    desc: "We prepare your brochures and stationery for high-quality printing or digital distribution, maintaining color accuracy, resolution, and format compatibility.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Marketing & Promotional Materials",
    desc: "We design brochures, letterheads, and stationery that effectively promote your products, services, and corporate message across various platforms.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Quality & Brand Consistency",
    desc: "Every design undergoes strict quality checks to ensure consistency with your brand guidelines and high professional standards for all print and digital materials.",
  },
];

const faqData = [
  {
    title: "What services are included in Corporate Stationery & Brochure Design?",
    description:
      "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging stationery and brochures.",
  },
  {
    title: "Can you customize stationery for my business?",
    description:
      "Absolutely! We tailor every piece of stationery — from letterheads and envelopes to brochures and flyers — ensuring it perfectly represents your brand identity and messaging.",
  },
  {
    title: "How do you ensure design quality and consistency?",
    description:
      "We follow a structured design process with detailed layouts, brand guidelines, and quality checks to maintain high-quality, consistent, and on-brand stationery across all projects.",
  },
  {
    title: "Do you provide designs for both print and digital formats?",
    description:
      "Yes, we create corporate stationery and brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure accessibility and visual appeal across all channels.",
  },
  {
    title: "Can you redesign an existing stationery set or brochure?",
    description:
      "Definitely! We can refresh your current corporate stationery or brochures by updating layouts, visuals, typography, and messaging to make them modern, engaging, and brand-aligned.",
  },
  {
    title: "Do you provide ongoing support after delivery?",
    description:
      "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your stationery and brochures remain effective and up-to-date.",
  },
];

  return (
    <>
      <CommonBannerService
        imgSrc={gm}
        title="The first impression is the best one"
        desc="Your business card builds your first impression. A professionally designed letterhead containing your business proposal increases your chances of acquiring the project. We start the process of crafting a corporate stationary design by knowing the ins and outs of your business so as to offer you with the best solution. Being a leading graphic design company in India, our aim is to uphold the corporate culture of your business and enhance its public image through our corporate identity design services."
      />

      <TechMarquee />

      <OverviewSection
        image={gm}
        imageAlt="Corporate Stationery Design Services"
        badgeText="Professional & Cohesive Corporate Stationery Design Services"
        heading="Designing Corporate Stationery That"
        headingHighlight="Strengthens Your Brand Identity"
        paragraphs={[
          "At Future IT Touch Pvt. Ltd. we create professional corporate stationery designs that convey consistency, professionalism, and brand personality across all office and business communication materials.",
          "Corporate stationery is more than just letterheads and business cards — it reflects your company's professionalism and attention to detail. Our team crafts designs that align with your brand identity and communicate credibility.",
          { boldPrefix: "For Businesses:", text: "We design letterheads, business cards, envelopes, and office templates that enhance brand recognition, maintain consistency, and reinforce a professional image." },
          { boldPrefix: "For Audiences:", text: "Our designs leave a lasting impression on clients, partners, and stakeholders by combining clarity, creativity, and functional design that reflects your brand values." },
        ]}
        ctaText="Design Your Corporate Stationery Today"
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
                Professional Corporate Stationery Design
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Crafting Consistent & Impactful Brand Identity{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Across All Office Collateral
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
                  alt="Corporate Stationery Design"
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
                Professional Corporate Stationery Design Company in India
              </span>
            </div>

            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Crafting Stationery That{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Strengthens Your Brand Identity
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
        title="Creating Professional Corporate Stationery That Strengthens Your Brand"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Corporate Stationery Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Corporate Stationery Design Services"
      />

      <GetNewInsight />
    </>
  );
};

export default Brochure;
