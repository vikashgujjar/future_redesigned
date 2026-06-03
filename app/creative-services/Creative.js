"use client";
import React from "react";

import Image from "next/image";
import cwd from "../Assets/cwd.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers} from "react-icons/fa";
import {  FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
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

const Ecommerce = () => {
const features = [
  {
    title: "Strategic Brand Positioning",
    description:
      "We help businesses define their unique brand voice, values, and positioning in the market. Our strategy ensures your brand stands out with purpose, clarity, and emotional connection to your audience.",
    icon: <FaLightbulb />,
  },
  {
    title: "Creative Visual Identity",
    description:
      "From logos to color palettes and typography, we create a cohesive and memorable visual identity that reflects your brand's personality and builds instant recognition across platforms.",
    icon: <FaPalette />,
  },
  {
    title: "Consistent Brand Messaging",
    description:
      "We craft compelling taglines, tone, and storytelling that communicate your brand's message consistently across all touchpoints — from websites and packaging to social media and campaigns.",
    icon: <FaCommentDots />,
  },
  {
    title: "Audience Research & Insights",
    description:
      "Understanding your target audience is key to impactful branding. We conduct in-depth research to identify customer expectations, perceptions, and preferences for better brand alignment.",
    icon: <FaUsers />,
  },
  {
    title: "Digital Presence & Engagement",
    description:
      "We strengthen your online identity through consistent visual and content strategies on digital platforms — ensuring your brand connects effectively with audiences across all channels.",
    icon: <FaGlobe />,
  },
  {
    title: "Brand Guidelines Development",
    description:
      "We design comprehensive brand guidelines that outline logo usage, color systems, fonts, and visual tone — ensuring your brand maintains uniformity and professionalism everywhere it appears.",
    icon: <FaBookOpen />,
  },
  {
    title: "Performance & Growth Analytics",
    description:
      "We track the effectiveness of your branding efforts through analytics, helping you measure brand engagement, awareness, and growth for continuous improvement and impact.",
    icon: <FaChartPie />,
  },
];


 const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Strategic Brand Development",
    desc: "We help businesses define a clear brand vision and positioning strategy that connects emotionally with their audience and strengthens market presence.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Creative Visual Identity",
    desc: "Our creative designers craft unique logos, color palettes, and typography that reflect your brand's personality and ensure consistent recognition everywhere.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Approach",
    desc: "We work closely with clients to understand their goals and translate ideas into powerful brand visuals and messaging that inspire trust and loyalty.",
  },
];
  const cards = [
  {
    count: "250+",
    title: "Brands Transformed",
    desc: "We've helped over 250 businesses build strong brand identities that capture attention and connect emotionally with their audiences. From startups to enterprises, our creative solutions turn visions into recognizable brands.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Creative Expertise",
    desc: "With more than 15 years of experience in branding and creative strategy, Future IT Touch Pvt. Ltd. brings deep insight and innovation to every project, helping brands establish authority and trust in competitive markets.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Empowered",
    desc: "Trusted by over 500 clients worldwide, we deliver impactful brand identity solutions tailored to each business's personality, ensuring consistent visibility and recognition across industries and audiences.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our client-first approach and dedication to creativity have earned us a 98% satisfaction rate. We collaborate closely with businesses to design meaningful brand stories that inspire and engage their audiences.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Creative Support",
    desc: "Our team provides continuous brand support, ensuring consistency across all touchpoints — from visual assets to digital presence. We're here to help your brand evolve, stay relevant, and grow stronger every day.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Visual Identity Design",
    desc: "We craft unique logos, color schemes, and typography systems that capture your brand's personality and create a consistent, memorable visual identity across all platforms.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Brand Strategy & Guidelines",
    desc: "Our team develops comprehensive brand strategies and guidelines to ensure every communication reflects your brand's vision, values, and voice consistently across channels.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "UI/UX Design",
    desc: "We design engaging and user-friendly interfaces that enhance the customer experience, reinforce your brand identity, and create lasting impressions on digital platforms.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Front-End Development",
    desc: "Our front-end developers translate brand designs into interactive and responsive web experiences, ensuring consistency, performance, and visually appealing layouts.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Back-End Development",
    desc: "We implement scalable and secure back-end systems to support your brand's online presence, including content management, integrations, and database management.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Digital Marketing & SEO",
    desc: "We optimize your online presence with SEO strategies, content marketing, and digital campaigns to enhance visibility, engage audiences, and strengthen your brand identity.",
  },
]

const faqData = [
  {
    title: "What services are included in Brand Identity Solutions?",
    description:
      "Our services include logo design, color palettes, typography systems, brand messaging, visual guidelines, and digital presence strategies to create a cohesive and memorable brand identity.",
  },
  {
    title: "Can you customize branding for my business?",
    description:
      "Absolutely! We tailor every aspect of your brand identity — from visual elements to messaging — ensuring it reflects your unique vision, values, and business goals.",
  },
  {
    title: "How do you ensure brand consistency?",
    description:
      "We develop detailed brand guidelines and strategy documents that outline logo usage, color schemes, typography, tone of voice, and design principles to maintain consistency across all platforms.",
  },
  {
    title: "Do you provide digital branding solutions?",
    description:
      "Yes, we integrate your brand identity into websites, social media, marketing campaigns, and other digital touchpoints to ensure consistent and engaging online presence.",
  },
  {
    title: "Can you revamp an existing brand?",
    description:
      "Definitely! We can refresh your current brand by enhancing its visual identity, messaging, and digital presence to make it more modern, engaging, and aligned with your audience.",
  },
  {
    title: "Do you provide ongoing brand support?",
    description:
      "Yes, we offer continuous support to ensure your brand remains consistent and relevant. This includes updating brand assets, maintaining design standards, and guiding digital marketing efforts.",
  },
];

  return (
    <>
      <CommonBannerService
        imgSrc={cwd}
        title="Creative Agency Branding"
        desc="Future IT Touch Pvt. Ltd. is the governing creative branding agency in India taking care of the details of customer's needs. Since, a brand is what people will perceive, the team at Future IT Touch Pvt. Ltd. sharpens the branding strategies in a way to attract your audience. The Internet is flooded with loads of diverse definitions of what a brand is. Let's just knock out the confusion and keep it simple and straight. A brand is the identity or personality of your business. And, when personality goes unpleasant, everything goes out of order. Future IT Touch Pvt. Ltd. is armed with quality dipped product branding services in India which leaves you with results giving your business an everlasting success. We guard the personality of your business to make you stand out in the crowd."
      />

      <TechMarquee />

      <OverviewSection
        image={devops}
        imageAlt="Brand Identity & Strategy Services"
        badgeText="Trusted Brand Identity & Strategy Development"
        heading="Crafting Brands That Speak,"
        headingHighlight="Connect, and Grow"
        paragraphs={[
          "At Future IT Touch Pvt. Ltd. we help businesses establish strong, consistent brand identities through strategy, creativity, and design excellence.",
          "A strong brand identity is more than just a logo — it's the essence of how your business is perceived. Our branding services focus on creating meaningful brand experiences that connect emotionally and visually.",
          { boldPrefix: "For Businesses:", text: "We define your brand voice, messaging, and visual style to ensure consistency across every platform. From color palettes and typography to marketing assets, everything reflects your unique story." },
          { boldPrefix: "For Audiences:", text: "We design engaging visuals, creative storytelling, and user-centered brand experiences that build trust and loyalty." },
          "With over 15 years of creative expertise, we craft distinctive brand identities that leave lasting impressions. Choose our Brand Identity & Strategy Solutions to make your business stand out.",
        ]}
        ctaText="Build Your Brand Identity"
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
                Creative Agency Branding Solutions
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Building Powerful Brand Identities That{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Inspire & Connect
              </span>
            </h4>
            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8">

            {/* Sticky image */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-28">
              <div className="relative rounded-2xl overflow-hidden w-full"
                style={{
                  border: "1px solid rgba(99,102,241,.12)",
                  boxShadow: "0 20px 60px rgba(99,102,241,.12), 0 4px 16px rgba(0,0,0,.06)",
                }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                <Image
                  src={devops}
                  alt="Creative Agency Branding"
                  className="w-full object-cover hover:scale-105 md:h-[70vh] transition-transform duration-500"
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
                Leading Brand Identity & Creative Agency in India
              </span>
            </div>

            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Crafting Unique Identities that{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Inspire & Connect
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
        title="Crafting Memorable Brand Identities with Creativity & Strategy"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Brand Identity & Creative Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Brand Identity & Creative Solutions"
      />

      <GetNewInsight />
    </>
  );
};

export default Ecommerce;
