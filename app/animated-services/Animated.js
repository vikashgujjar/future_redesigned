"use client";
import React from "react";

import Image from "next/image";
import d1 from "../Assets/logo-gif.gif";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import GetNewInsight from "../components/GetNewInsight";
import OverviewSection from "../components/OverviewSection";

import gm from "../Assets/ams.webp";

import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";

const Animated = () => {
  const features = [
    {
      title: "Concept & Script Development",
      description:
        "We craft compelling concepts and scripts that simplify complex ideas into clear, engaging narratives — ensuring your brand message is delivered effectively and memorably.",
      icon: <FaLightbulb />,
    },
    {
      title: "Creative Storyboarding",
      description:
        "Our experts design detailed storyboards that visualize the flow of your video before production — aligning visuals, voiceovers, and brand tone for perfect storytelling.",
      icon: <FaPalette />,
    },
    {
      title: "Custom Animation & Motion Graphics",
      description:
        "We create stunning 2D and 3D animations that bring your story to life with smooth transitions, vibrant visuals, and engaging motion effects that captivate viewers.",
      icon: <FaCommentDots />,
    },
    {
      title: "Voiceover & Sound Design",
      description:
        "Professional voiceovers and custom sound design enhance the emotional appeal of your videos — making them more impactful, authentic, and audience-friendly.",
      icon: <FaUsers />,
    },
    {
      title: "Product & Service Explainers",
      description:
        "We produce high-quality explainer videos that effectively showcase your products or services, increasing customer understanding and driving conversions.",
      icon: <FaGlobe />,
    },
    {
      title: "Brand Story Videos",
      description:
        "We help brands tell their unique stories through creative visuals and inspiring narratives that build trust, emotion, and lasting audience connections.",
      icon: <FaBookOpen />,
    },
    {
      title: "Performance Tracking & Optimization",
      description:
        "We analyze video engagement metrics to optimize content for better viewer retention, brand recall, and marketing ROI — ensuring your videos achieve real results.",
      icon: <FaChartPie />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Script Development",
      desc: "We craft engaging scripts and storylines that simplify complex messages, helping brands communicate their ideas clearly and effectively through video.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Professional Animation Design",
      desc: "Our skilled animators create captivating 2D and 3D visuals that bring your brand stories to life with clarity, creativity, and lasting audience appeal.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Client-Focused Collaboration",
      desc: "We partner closely with clients at every step to ensure each video reflects their goals, brand voice, and vision while maintaining a smooth production flow.",
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
      title: "Story & Script Development",
      desc: "We craft engaging scripts that simplify complex ideas, ensuring your explainer videos clearly communicate your message and resonate with your audience.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Storyboarding & Visual Planning",
      desc: "Our team develops detailed storyboards to map out the flow of your video, aligning visuals, voiceovers, and brand tone for maximum clarity and impact.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Custom Animation & Motion Graphics",
      desc: "We design high-quality 2D and 3D animations with smooth motion graphics, bringing your story to life and keeping viewers engaged from start to finish.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Voiceover & Sound Design",
      desc: "Professional voiceovers and custom soundtracks enhance the emotional impact of your videos, making your message memorable and engaging.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Explainer Video Production",
      desc: "From concept to final delivery, we handle every step of production to ensure your explainer video is polished, professional, and effective.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Performance & Optimization",
      desc: "We analyze video engagement metrics and optimize content to boost viewer retention, brand recall, and overall impact for maximum ROI.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Explainer Video production?",
      description:
        "Our services include concept development, scriptwriting, storyboarding, animation design, voiceovers, motion graphics, and final video production to deliver engaging and clear explainer videos.",
    },
    {
      title: "Can you customize explainer videos for my business?",
      description:
        "Absolutely! We tailor every aspect of your explainer video — from style and animation to voiceover and storytelling — ensuring it perfectly represents your brand and message.",
    },
    {
      title: "How do you ensure video quality and consistency?",
      description:
        "We follow a structured production process with detailed storyboards, animation guidelines, and professional post-production checks to maintain high-quality, consistent output across all videos.",
    },
    {
      title: "Do you provide videos for digital platforms?",
      description:
        "Yes, we create explainer videos optimized for websites, social media, marketing campaigns, presentations, and other digital channels to maximize engagement and reach.",
    },
    {
      title: "Can you revamp an existing explainer video?",
      description:
        "Definitely! We can enhance your current videos by improving visuals, animations, voiceovers, and storytelling to make them more modern, engaging, and aligned with your audience.",
    },
    {
      title: "Do you provide ongoing video support?",
      description:
        "Yes, we offer continuous support including video updates, revisions, optimization for new platforms, and guidance to ensure your explainer videos stay relevant and effective.",
    },
  ];

  return (
    <>
      <CommonBannerService
        imgSrc={gm}
        title="Explainer Video Services"
        desc="Videos are a great means to explain your business, products or services to potential customers. Invest in a professional explainer video to get discovered faster, generate greater brand awareness, and grow your customer base. Future IT Touch Pvt. Ltd. is an certified company providing a wide array of digital solutions to clients across the world. Our corporate video production services help you turn your visitors into loyal followers of your brand. Avail our explainer video services and create amazing videos for your target audience."
      />

      <TechMarquee />

      <OverviewSection
        image={gm}
        imageAlt="Explainer Video Services"
        badgeText="Creative & Impactful Explainer Video Services"
        heading="Explain, Engage, and Inspire Through"
        headingHighlight="Motion"
        paragraphs={[
          "At Future IT Touch Pvt. Ltd. we transform complex ideas into compelling visual stories through animated explainer videos. Our team of creative storytellers and motion designers craft videos that captivate audiences and drive action.",
          "From 2D and 3D animations to whiteboard explainers and motion graphics, we create videos that simplify your message, build brand credibility, and boost conversions across all platforms.",
          "With over 15 years of experience, we have delivered hundreds of animated videos for startups and enterprises alike — each one tailored to your brand voice, audience, and business goals.",
        ]}
        ctaText="Create Your Explainer Video"
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
                Engaging Explainer Video Services
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Turning Complex Ideas into Clear,{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Captivating Visual Stories
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
                  alt="Explainer Video Services"
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
                Leading Explainer Video Production Company in India
              </span>
            </div>

            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Creating Videos That Explain, Engage &{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Inspire Action
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
        title="Explainer Video Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Explainer Video Services"
      />

      <GetNewInsight />
    </>
  );
};

export default Animated;
