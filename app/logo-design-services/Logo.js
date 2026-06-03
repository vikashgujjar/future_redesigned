"use client";
import React from "react";

import Image from "next/image";
import d1 from "../Assets/graphic-and-logo-design-service.webp";
import gm from "../Assets/logo-1.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import GetNewInsight from "../components/GetNewInsight";

import { FaUsers } from "react-icons/fa";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  FaBuilding,
  FaBoxOpen,
  FaLayerGroup,
  FaFileAlt,
  FaFolderOpen,
} from "react-icons/fa";

import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";

const Logo = () => {

  const features = [
    {
      title: "Custom Business Logo Design",
      description:
        "We create fully customized logos that perfectly capture your business identity. Each design incorporates thoughtful color schemes, typography, and symbolic elements that align with your brand values and target audience. Our goal is to craft a logo that not only stands out visually but also communicates your brand story and helps establish a strong market presence. With attention to detail and strategic design, we ensure your logo creates a lasting impression.",
      icon: <FaBuilding />,
    },
    {
      title: "Icon & Symbol Design",
      description:
        "Our designers specialize in crafting memorable icons and symbols that serve as visual shorthand for your brand. By combining creativity with brand insights, we design symbols that are simple yet highly impactful, making your brand instantly recognizable. These elements can be used across digital and print media to strengthen brand recall, enhance customer engagement, and convey complex ideas in a visually appealing way.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Typography & Calligraphy Logos",
      description:
        "Typography and calligraphy logos are designed to give your brand a unique personality. We carefully select fonts, lettering styles, and artistic flourishes that reflect your brand's tone, whether elegant, modern, playful, or professional. Every curve, spacing, and stroke is considered to ensure the logo communicates the intended message effectively while leaving a lasting visual impression on your audience.",
      icon: <FaChartLine />,
    },
    {
      title: "Brand Mascot Logos",
      description:
        "Brand mascot logos are an excellent way to build emotional connections with your audience. We create distinctive mascots that embody your brand's values, personality, and story. These characters can be used in marketing campaigns, merchandise, and social media, helping your brand stand out in a crowded market. A well-designed mascot becomes a memorable symbol that people associate with trust, friendliness, and engagement.",
      icon: <FaBookOpen />,
    },
    {
      title: "Lettermark & Monogram Logos",
      description:
        "Lettermark and monogram logos are minimalistic yet powerful ways to represent your brand. We craft these logos using initials or short letter combinations, focusing on clean, sophisticated designs that convey professionalism and elegance. Ideal for luxury brands, corporate identities, and personal brands, these logos are versatile, scalable, and highly recognizable across all mediums, from digital platforms to print collateral.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Emblem & Badge Logos",
      description:
        "Emblem and badge logos are classic designs that convey authority, credibility, and heritage. We design logos that combine text and symbols into a cohesive unit, perfect for institutions, schools, government bodies, and formal organizations. Our approach ensures that your emblem logo communicates reliability, trustworthiness, and timeless professionalism while maintaining a visually appealing and balanced design.",
      icon: <FaFileAlt />,
    },
    {
      title: "Rebranding & Logo Refresh",
      description:
        "Rebranding and logo refresh services help established brands revitalize their visual identity for modern audiences. We analyze your existing brand image and craft updated logos that retain brand recognition while enhancing relevance, appeal, and versatility. Our team focuses on evolving the design to reflect growth, new values, or market positioning, ensuring your refreshed logo resonates with current and future customers while staying true to your brand's essence.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Logo Concepts",
      desc: "We craft innovative logo concepts that reflect your brand's personality and values, making sure your logo stands out and leaves a lasting impression on your audience.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Custom Typography & Design",
      desc: "Our designers blend custom typography, colors, and graphical elements to create logos that are visually striking, professional, and perfectly aligned with your brand identity.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Logo Design ",
      desc: "We work closely with you throughout the design journey, incorporating feedback and insights to ensure your logo captures your vision and effectively communicates your brand story.",
    },
  ];

  const cards = [
    {
      count: "1000+",
      title: "Logos Successfully Designed",
      desc: "We've created over 1000 unique and professional logos for businesses across industries. Each design is tailored to capture brand identity, engage audiences, and leave a lasting impression.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Design Expertise",
      desc: "With more than 15 years of experience in logo and brand design, Future IT Touch Pvt. Ltd. delivers creative and impactful logos that elevate brand perception and recognition globally.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 international brands, we craft logos that strengthen brand identity, improve visibility, and resonate with target audiences across multiple platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "99%",
      title: "Client Satisfaction Rate",
      desc: "Our dedication to creativity, precision, and client collaboration has earned us a 99% satisfaction rate. We ensure each logo meets your vision and brand strategy perfectly.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Ongoing Design Support",
      desc: "Our team provides continuous support — from revisions to final delivery — making sure your logo is polished, consistent, and ready for all branding needs.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Creative Logo Concepts",
      desc: "We develop unique logo concepts that capture your brand essence, combining symbolism, typography, and colors to create visually compelling designs that stand out in the market.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Custom Typography & Iconography",
      desc: "Our designers craft tailored typography and icons for each logo, ensuring that every element aligns with your brand identity and communicates your message effectively.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Versatile & Scalable Designs",
      desc: "We create logos that work seamlessly across digital and print mediums — from websites and social media to business cards and signage — maintaining clarity and impact at any size.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Brand Identity Integration",
      desc: "Our logo designs are integrated into your overall brand strategy, ensuring consistency with colors, fonts, and visual messaging to strengthen brand recognition.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Rebranding & Logo Refresh",
      desc: "We offer expert logo redesigns and rebranding services to modernize your visual identity while maintaining brand recall and appeal for existing and new audiences.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Quality & Satisfaction Guarantee",
      desc: "Every logo goes through thorough quality checks and client feedback rounds to ensure the final design meets your expectations and effectively represents your brand.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Logo Design?",
      description:
        "Our services cover logo concept creation, typography and iconography design, brand identity integration, versatile and scalable designs, and rebranding support to deliver professional, memorable logos.",
    },
    {
      title: "Can you create custom logos for my business?",
      description:
        "Absolutely! Every logo is uniquely crafted to match your business goals, brand personality, and target audience. We ensure the design is original, visually appealing, and aligned with your brand message.",
    },
    {
      title: "Do you provide logos suitable for both digital and print?",
      description:
        "Yes, we design logos that are optimized for all platforms, including websites, social media, business cards, packaging, and large-scale prints, ensuring consistent quality and visual impact.",
    },
    {
      title: "Can you refresh or redesign my existing logo?",
      description:
        "Definitely! We provide rebranding and logo refresh services to modernize your logo while maintaining brand recognition and enhancing its appeal to current and new audiences.",
    },
    {
      title: "How do you ensure logo design quality?",
      description:
        "Our process includes detailed brand analysis, multiple design concepts, iterative client feedback, and quality assurance checks to deliver logos that are professional, impactful, and on-brand.",
    },
    {
      title: "Do you offer ongoing support after logo delivery?",
      description:
        "Yes, we provide ongoing support including logo file updates, revisions, brand guidelines assistance, and guidance on how to maintain consistency across all digital and print materials.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
      `}</style>

      <CommonBannerService
        imgSrc={gm}
        title="LOGO DESIGN SERVICES"
        desc="A well-designed logo is more than just a creative mark. It facilitates brand recognition. As an certified logo design company in India, our experienced logo designers know how to deliver a memorable logo that noticeably stands out, ultimately building a unique identity. Engage our logo design services to get a perfect emblem that best represents your brand."
      />

      <TechMarquee />

      {/* About Section */}
      <section style={{ background: "#f8faff" }} className="px-5 md:px-12 xl:px-28 py-14 md:py-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle,#2dd4bf,transparent 70%)" }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle,#6366f1,transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="rounded-[28px] overflow-hidden shadow-2xl bg-white">
            <div
              className="h-1.5 w-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image left */}
              <div className="relative min-h-[340px] lg:min-h-[520px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d1540] to-[#09112a]">
                <Image
                  src={gm}
                  alt="Logo Design Services"
                  fill
                  className="object-cover opacity-60"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(45,212,191,.35) 0%,rgba(99,102,241,.35) 100%)",
                  }}
                />
                <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#2dd4bf] rounded-tl-lg" />
                <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#a855f7] rounded-tr-lg" />
                <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#a855f7] rounded-bl-lg" />
                <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#2dd4bf] rounded-br-lg" />
                <span
                  className="absolute top-10 right-10 w-3 h-3 rounded-full opacity-80"
                  style={{ background: "#2dd4bf", animation: "logoFloat 3s ease-in-out infinite" }}
                />
                <span
                  className="absolute bottom-16 left-12 w-2 h-2 rounded-full opacity-70"
                  style={{ background: "#a855f7", animation: "logoFloat 4s ease-in-out infinite 1s" }}
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  <span
                    className="px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg"
                    style={{ background: "rgba(99,102,241,.85)" }}
                  >
                    Since 2005
                  </span>
                  <span
                    className="px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg"
                    style={{ background: "rgba(45,212,191,.85)" }}
                  >
                    Trusted by 500+ Clients
                  </span>
                </div>
              </div>

              {/* Content right */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                <span
                  className="inline-block self-start px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background: "linear-gradient(90deg,rgba(45,212,191,.15),rgba(99,102,241,.15))",
                    color: "#6366f1",
                    border: "1px solid rgba(99,102,241,.25)",
                  }}
                >
                  Professional &amp; Creative Logo Design Services
                </span>

                <h4 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
                  Designing Logos That Inspire{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    a Unique Brand Vision
                  </span>
                </h4>

                <div
                  className="w-16 h-1 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }}
                />

                <p className="text-base text-gray-600 mb-4">
                  At{" "}
                  <span className="font-semibold text-indigo-600">
                    Future IT Touch Pvt. Ltd.
                  </span>{" "}
                  we go beyond templates to craft logos that truly reflect your brand's identity. A well-designed logo evokes emotions, builds recall, and helps grow your customer base.
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Think about some of the iconic brands you remember – the moment you see their logo, the entire brand story comes to mind. Our experienced designers combine symbols, calligraphy, design art, and other aesthetic elements to create logos that leave a lasting impression.
                  <br /> <br />
                  With over 15 years of experience and a team of creative professionals, we deliver high-quality and unique{" "}
                  <span className="font-semibold text-indigo-600">
                    Business Logo Design Services
                  </span>{" "}
                  tailored for all your needs. As a trusted logo design company, we have served thousands of clients worldwide, helping brands establish credibility and visual identity.
                </p>

                <div className="pt-2">
                  <a
                    href="tel:+917056937000"
                    className="inline-block px-6 py-3 rounded-xl text-white font-medium shadow-lg transition"
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                    }}
                  >
                    Design Your Logo Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ background: "#f8faff" }} className="px-5 md:px-12 xl:px-28 py-14 md:py-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle,#a855f7,transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "linear-gradient(90deg,rgba(45,212,191,.15),rgba(99,102,241,.15))",
                color: "#6366f1",
                border: "1px solid rgba(99,102,241,.25)",
              }}
            >
              Creative Logo Design Services
            </span>
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Transforming Brand Identities into{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Memorable Logos
              </span>
            </h4>
            <div
              className="w-16 h-1 rounded-full mx-auto"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
            {/* Sticky image */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-start">
              <div className="sticky top-28 w-full rounded-[20px] overflow-hidden shadow-2xl border border-gray-100">
                <div
                  className="h-1.5 w-full"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }}
                />
                <Image
                  src={d1}
                  alt="Logo Design"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 p-6 border border-gray-100 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                    style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }}
                  />
                  <div
                    className="flex -mt-14 text-3xl justify-center items-center p-4 rounded-xl w-20 h-20 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      color: "#fff",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
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

      {/* TurnYourBusiness Section */}
      <section
        className="mx-5 my-8 lg:my-16 px-5 md:px-12 xl:px-28 py-14 md:py-20 rounded-3xl relative"
        style={{
          background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle,#2dd4bf,transparent 70%)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle,#6366f1,transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle,#a855f7,transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "rgba(45,212,191,.15)",
                color: "#2dd4bf",
                border: "1px solid rgba(45,212,191,.3)",
              }}
            >
              Professional Logo Design Company in India
            </span>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              Crafting Logos That Inspire, Engage &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Build Brand Identity
              </span>
            </h4>
            <div
              className="w-16 h-1 rounded-full mx-auto mt-4"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }}
            />
          </div>

          <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {businessData.map((elm, idx) => (
              <div
                key={elm.title}
                className="relative rounded-2xl p-6 flex flex-col items-start text-start overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,rgba(255,255,255,.07),rgba(255,255,255,.03))",
                  border: "1px solid rgba(255,255,255,.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }}
                />
                <span
                  className="absolute top-3 right-4 text-6xl font-black select-none pointer-events-none"
                  style={{ color: "rgba(255,255,255,.04)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,rgba(45,212,191,.25),rgba(99,102,241,.25))",
                    border: "1px solid rgba(45,212,191,.3)",
                  }}
                >
                  {elm.icons}
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{elm.title}</h5>
                <p className="text-sm text-gray-300 leading-relaxed">{elm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomSlider
        cards={cards}
        title="Designing Memorable Logos That Build Brand Identity & Recognition"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Logo Design Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Logo Design Services"
      />

      <GetNewInsight />
    </>
  );
};

export default Logo;
