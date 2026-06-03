"use client";
import React from "react";

import Image from "next/image";
import d1 from "../Assets/graphic-and-logo-design-service.webp";
import mrk from "../Assets/mrk.gif";
import cwd from "../Assets/contone.webp";

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

const Logo = () => {

const features = [
  {
    title: "Strategic Content Planning",
    description:
      "We develop comprehensive content strategies tailored to your business goals. By analyzing your audience, industry trends, and brand voice, we create a roadmap that ensures your content drives engagement, builds brand awareness, and supports lead generation across all platforms.",
    icon: <FaBuilding />,
  },
  {
    title: "Social Media Content Creation",
    description:
      "Our team crafts engaging content specifically designed for social media channels. From visually compelling graphics to concise, persuasive copy, we create posts that resonate with your audience, encourage interactions, and increase your brand's reach and visibility online.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Blog & Article Marketing",
    description:
      "We write informative, SEO-optimized blogs and articles that position your brand as an authority in your industry. By linking new content to existing posts and maintaining valuable keywords, we enhance search engine rankings and drive consistent, qualified traffic to your website.",
    icon: <FaChartLine />,
  },
  {
    title: "Content Amplification & Promotion",
    description:
      "Beyond creating content, we strategically share it to maximize reach. We identify the right channels, leverage trending topics, participate in relevant groups, and time publications to ensure your content reaches the right audience and has the highest potential for engagement and virality.",
    icon: <FaBookOpen />,
  },
  {
    title: "Audience Engagement & Community Building",
    description:
      "We help you build meaningful relationships with your audience by joining discussions, responding to comments, and fostering communities around your brand. Our goal is to enhance loyalty, encourage brand advocacy, and turn followers into long-term customers.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Content Analysis & Optimization",
    description:
      "We continually analyze the performance of your content using metrics like engagement, traffic, and conversions. Based on insights, we refine strategies, improve messaging, and optimize content to achieve better results and maximize ROI for your content marketing campaigns.",
    icon: <FaFileAlt />,
  },
  {
    title: "Rebranding & Content Refresh",
    description:
      "For businesses looking to revitalize their online presence, we refresh existing content to align with current trends, brand messaging, and audience expectations. This ensures your content remains relevant, engaging, and impactful while maintaining SEO value and brand consistency.",
    icon: <FaFolderOpen />,
  },
];


const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Creative Content Strategy",
    desc: "We develop innovative content strategies tailored to your brand, ensuring that every piece of content aligns with your business goals, engages your audience, and drives measurable results.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Content Creation & Design",
    desc: "Our team produces high-quality, visually appealing content — from blogs and articles to social media posts and graphics — designed to educate, inspire, and captivate your target audience.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Marketing Process",
    desc: "We work closely with you to understand your brand voice and objectives, incorporating feedback at every stage to ensure content resonates with your audience and effectively promotes your brand message.",
  },
];


const cards = [
  {
    count: "1000+",
    title: "Content Pieces Successfully Delivered",
    desc: "We've created over 1000 high-quality content pieces including blogs, articles, social media posts, and email campaigns that educate, engage, and convert audiences for businesses across industries.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Content Marketing Expertise",
    desc: "With over 15 years of experience, Future IT Touch Pvt. Ltd. crafts strategic content marketing campaigns that build brand authority, increase online visibility, and drive measurable results for businesses worldwide.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 international brands, we create content strategies and materials that strengthen brand messaging, boost engagement, and deliver tangible marketing outcomes across multiple platforms.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our dedication to strategy, creativity, and data-driven results has earned us a 98% satisfaction rate. We focus on delivering content marketing solutions that resonate with target audiences and achieve business goals.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Marketing Support",
    desc: "Our team provides continuous support, including content planning, revisions, and campaign optimization, ensuring that every content marketing initiative is aligned with your goals and delivers maximum ROI.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Content Strategy & Planning",
    desc: "We create data-driven content strategies that align with your brand goals, identify target audiences, and establish a roadmap for engaging, informative, and high-performing content campaigns.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Content Creation & Design",
    desc: "Our team produces high-quality blogs, articles, social media posts, graphics, and videos that are tailored to resonate with your audience, reinforce brand messaging, and drive meaningful engagement.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "SEO & Performance Optimization",
    desc: "We optimize all content for search engines, using keyword strategy, internal linking, and analytics insights to improve organic traffic, increase visibility, and ensure measurable marketing results.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Social Media Marketing",
    desc: "We craft content for social media channels that sparks engagement, encourages sharing, and strengthens your online presence, helping your brand connect with followers and grow a loyal audience.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Content Amplification & Promotion",
    desc: "Beyond creation, we strategically distribute and promote content to maximize reach, participate in relevant communities, and capitalize on trending topics for viral marketing potential.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Analytics & Continuous Improvement",
    desc: "We monitor content performance using analytics tools, adjusting strategies, optimizing messaging, and refining campaigns to ensure content consistently meets audience needs and business objectives.",
  },
];

const faqData = [
  {
    title: "What services are included in Content Marketing?",
    description:
      "Our services include content strategy development, content creation for blogs, articles, and social media, SEO optimization, content promotion, analytics monitoring, and ongoing support to ensure consistent and high-performing campaigns.",
  },
  {
    title: "Can you create custom content for my business?",
    description:
      "Absolutely! We tailor every content piece to match your brand voice, target audience, and business goals. From written content to visual assets, everything is designed to engage, educate, and convert effectively.",
  },
  {
    title: "Do you optimize content for SEO and engagement?",
    description:
      "Yes, all content is crafted with SEO best practices and engagement strategies in mind. We ensure keyword relevance, proper linking, readability, and compelling storytelling to boost organic traffic and audience interaction.",
  },
  {
    title: "Can you manage social media content as part of the marketing strategy?",
    description:
      "Definitely! We create and schedule social media content, engage with your followers, and manage campaigns to increase brand awareness, grow community interaction, and drive traffic to your website.",
  },
  {
    title: "How do you measure content marketing success?",
    description:
      "We track metrics like website traffic, engagement rates, social shares, lead generation, and conversions. Regular reports and insights allow us to continuously refine content strategy and improve ROI.",
  },
  {
    title: "Do you provide ongoing content marketing support?",
    description:
      "Yes, we offer ongoing support including content updates, campaign optimization, analytics monitoring, and strategic adjustments to ensure your content marketing efforts remain effective and aligned with your business objectives.",
  },
];

  return (
    <>
      <CommonBannerService
        imgSrc={cwd}
        title="CONTENT MARKETING SERVICES"
        desc="Future IT Touch Pvt. Ltd. Content is the root of every digital marketing campaign. It forms the backbone of your online identity and, helps create awareness of your brand. A content marketing agency can be the partner to set up your brand online by marketing professionally curated content with the current business data and industry information. Being a leading digital marketing agency India , we create content that ranks and pulls your business up with it. Avail our content marketing services to increase your visibility and engage your customers.."
      />

      <TechMarquee />

      <OverviewSection
        image={cwd}
        imageAlt="Content Marketing Services"
        badgeText="Professional & Strategic Content Marketing Services"
        heading="Crafting Content That Engages,"
        headingHighlight="Educates & Converts"
        paragraphs={[
          "At Future IT Touch Pvt. Ltd. we create compelling content strategies that resonate with your audience, drive engagement, and support your business goals. Effective content marketing builds trust, authority, and lasting relationships with your customers.",
          "From blogs and social media posts to newsletters and video scripts, we craft content that speaks to your target audience. Our experienced content marketers combine storytelling, SEO, and data-driven insights to deliver content that not only informs but inspires action.",
          "With over 15 years of experience and a team of skilled professionals, we provide high-quality Content Marketing Services tailored to your brand's needs. We help businesses increase visibility, generate leads, and establish authority in their industry.",
        ]}
        ctaText="Start Your Content Strategy Today"
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
                Strategic Content Marketing Services
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Creating Engaging Content That Educates,{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Inspires & Converts
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
                  src={mrk}
                  alt="Content Marketing Services"
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
                Professional Content Marketing Company in India
              </span>
            </div>

            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Crafting Content That Engages, Educates &{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Converts Your Audience
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
        title="Creating Impactful Content That Engages, Educates & Converts"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Content Marketing Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Content Marketing Services"
      />

      <GetNewInsight />
    </>
  );
};

export default Logo;
