"use client";
import Image from "next/image";
import devops from "../Assets/app-develops.webp";
import bannerImg from "../Assets/and.gif";
import service1 from "../Assets/mob-1.webp";
import service2 from "../Assets/mob-2.webp";
import service3 from "../Assets/mob-3.webp";
import service4 from "../Assets/mob-4.webp";
import mission from "../Assets/process-1.webp";
import vision1 from "../Assets/process-2.webp";
import vision2 from "../Assets/Usability.webp";
import vision3 from "../Assets/Cloud.webp";
import vision4 from "../Assets/Cross.webp";
import vision5 from "../Assets/Security.webp";
import vision6 from "../Assets/Performance.webp";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import Counter from "../components/Counter";
import ChooseFuture from "../components/ChooseFuture";
import GetNewInsight from "../components/GetNewInsight";
import CommonBannerService from "../components/CommonBannerService";
import OverviewSection from "../components/OverviewSection";

import { useState } from "react";

const Mobile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <>
      <CommonBannerService
        imgSrc={bannerImg}
        title="MOBILE APPLICATION TESTING SERVICES"
        desc="Future IT Touch is an eminent Mobile Application Testing organisation that offers outstanding versatile application testing services. We developed our specialty in Mobile testing, particularly in mobile testing applications of iOS and Android devices. With a group of devoted certified testers, we perform a wide range of web, mobile, local and cross platform portable application testing. We test applications for its functionality, usability, consistency and compatibility for longer use and stability."
      />

      <Counter />

      <OverviewSection
        image={devops}
        imageAlt="Mobile Application Testing"
        badgeText="Mobile Application Testing Services"
        heading="Mobile Application"
        headingHighlight="Testing"
        paragraphs={[
          "Future IT Touch is an eminent Mobile Application Testing organisation that offers outstanding versatile application testing services. We developed our specialty in Mobile testing, particularly in mobile testing applications of iOS and Android devices.",
          "With a group of devoted certified testers, we perform a wide range of web, mobile, local and cross platform portable application testing. We test applications for its functionality, usability, consistency and compatibility for longer use and stability.",
        ]}
        ctaText="Start Your Testing Project"
      />

      {/* ── Why FTS for Testing? section ── */}
      <div
        style={{
          background:
            "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
        }}
        className="px-5 md:px-12 xl:px-28 py-14"
      >
        <h4
          className="text-3xl md:text-4xl text-center font-bold mb-10"
          style={{ color: "#fff" }}
        >
          Why FTS for Testing?
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-4">

          {/* Left column — glass card list */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
            <p className="mb-5 text-lg font-bold" style={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}>
              Advantages of Mobile App Development
            </p>
            <ul className="space-y-3">
              {[
                "Completely utilitarian QA administrations for every client ensures that product functionality performs as per requirements.",
                "Validation of data integrity across business flows.",
                "Strong infrastructure and disaster recovery plans provide continuous testing services (24x7).",
                "Our organisation has multiple redundant servers ensuring 99.9% uptime.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", minWidth: "1.25rem" }}>
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] leading-[1.75]" style={{ color: "rgba(255,255,255,.65)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — glass card list */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
            <p className="mb-5 text-lg font-bold" style={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}>
              Advantages of Mobile App Development
            </p>
            <ul className="space-y-3">
              {[
                "Dedicated testing labs with well-equipped servers simulate diverse client conditions and leverage cloud infrastructure.",
                "Use of web-enabled defect management tools ensures transparency in the testing cycle.",
                "Multiple teams across different GEOs track defects in real-time.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                    style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)", minWidth: "1.25rem" }}>
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] leading-[1.75]" style={{ color: "rgba(255,255,255,.65)" }}>{item}</span>
                </li>
              ))}
            </ul>
            <button
              style={{
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                boxShadow: "0 4px 24px rgba(45,212,191,.38)",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                marginTop: "1.75rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Request A Quote <FaAngleRight style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Services section ── */}
      <section className="service-section py-20" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span
            className="text-5xl font-bold uppercase"
            style={{
              background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Services
          </span>
          <h2 className="mt-4 mb-12 text-lg text-gray-500 max-w-3xl mx-auto">
            We think big and have hands in all leading technology platforms to
            provide you wide array of services.
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {[
              { img: service1, title: "IOS App Development", desc: "We provide cutting-edge mobile app development services to turn your business app dreams into reality with a proficient custom iOS app development team.", from: "#2dd4bf", to: "#6366f1", alt: "iOS app development service illustration" },
              { img: service2, title: "Android App Development", desc: "Powering 2 billion mobile devices globally, Android remains one of the most sought-after platforms for mobile app development.", from: "#6366f1", to: "#8b5cf6", alt: "Android app development service illustration" },
              { img: service3, title: "Cross Platform App Development", desc: "Need an app for your business that runs seamlessly across Android and iPhone yet fits budget constraints? We've got you covered.", from: "#0ea5e9", to: "#2dd4bf", alt: "Cross platform app development service illustration" },
              { img: service4, title: "Mobile App Testing", desc: "We provide professional web and mobile app testing solutions to ensure quality and performance for all your applications.", from: "#a855f7", to: "#6366f1", alt: "Mobile app testing service illustration" },
            ].map((service, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 4px 24px rgba(99,102,241,.10), 0 1px 4px rgba(0,0,0,.05)", border: `1px solid ${service.from}22` }}>
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg,${service.from},${service.to})` }} />
                <div className="flex flex-col lg:flex-row p-6 gap-5 items-center">
                  <div className="flex-shrink-0 w-28 h-28 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg,${service.from}14,${service.to}0a)`, border: `1px solid ${service.from}28` }}>
                    <Image src={service.img} alt={service.alt} width={88} height={88} className="object-contain" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-2"
                      style={{ background: `${service.from}18`, color: service.from, fontFamily: "'Poppins',sans-serif" }}>
                      0{idx + 1}
                    </span>
                    <h4 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>{service.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%,${service.from}08,transparent 60%)` }} />
              </div>
            ))}
          </div>

          {/* Hire a Dedicated Developer bar */}
          <div
            className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-5 py-10 px-8 rounded-2xl"
            style={{
              background:
                "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
            }}
          >
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl"
              style={{ color: "#fff" }}
            >
              Hire a <span className="font-bold">Dedicated Developer</span>
            </h3>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                boxShadow: "0 4px 24px rgba(45,212,191,.38)",
                color: "#fff",
                padding: "0.6rem 2rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "opacity .2s",
              }}
            >
              Hire Now <FaAngleRight style={{ marginLeft: "8px" }} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Process section (unchanged styling) ── */}
      <div className="py-20 px-5 md:px-10 lg:px-40 z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-lg text-[#e60072] uppercase">Process</span>
          <h2 className="text-4xl font-bold mt-4 text-[#050748]">
            Our Services
          </h2>
          <p className="text-lg mt-2 text-[#6a6a8e]">
            We think big and have hands in all leading technology platforms to
            provide you wide array of services.
          </p>
        </div>

        {[
          {
            id: 1,
            title: "Installation Testing",
            desc: "We at FST are checking that software application is successfully installed and working as per expectation. This is most important testing phase and we understand this fact. With the use of required tools, devices and equipment we are bringing best of FineSoft.",
            img: mission,
            alt: "Mobile app testing process illustration",
          },
          {
            id: 2,
            title: "Functional Testing",
            desc: "Functional testing is a key component for improving the nature of the created programming. The dangers of discharging another item without thorough quality affirmation. It has more noteworthy ramifications now than any time in recent memory in light of the regularly changing desires and requests of the end clients. Discovering free QA and testing merchants, is essential to the accomplishment of a quality item. At FST, we esteem this, and being an autonomous programming testing organization empowers us to report the straightforward view. Our goal is to quantify the execution nature of the functional parts.",
            img: vision1,
            alt: "Functional testing process illustration",
          },
          {
            id: 3,
            title: "Usability Testing",
            desc: "Our usability testing administrations spread both web and mobile versions of applications and incorporates tests. For example, screen resolution checks, compatibility crosswise over gadgets, OS and frameworks working, A/B testing, among-st others to guarantee conformance to framework prerequisites as well as more significantly to client desires. So FST has assembled a mobile usability testing technique depending on our involvement with a wide scope of our customers and our great experience.",
            img: vision2,
            alt: "Usability testing process illustration",
          },
          {
            id: 4,
            title: "Cloud Testing",
            desc: "We broadly work with a few cloud contributions including a portion of the main ones, for example, Amazon EC2, Microsoft Azure. We have utilized the cloud for a few of our customer assignments for zones, for example, useful, execution, similarity, globalization testing. At FST, cloud testing is a significant territory of enthusiasm for progressing innovative work (R&D) and we ensure maximum ROI for Client's business.",
            img: vision3,
            alt: "Cloud testing process illustration",
          },
          {
            id: 5,
            title: "Cross Platform (Hybrid) Testing",
            desc: "To guarantee the ideal similarity of a portable application with different stages, for example, Windows, Android, iOS, Linux, MacOS, and so forth. Our versatile application analyzers perform Cross-Platform testing that incorporates both mechanized and manual QA approaches.",
            img: vision4,
            alt: "Cross platform testing process illustration",
          },
          {
            id: 6,
            title: "Security Testing",
            desc: "In this era of web and internet, data security is one of the prime worries for every advanced application. Security testing is directed to locate every single potential escape clause and shortcomings in the application at the soonest and enables the advancement. We at FST have a devoted and capable security testing group experienced in both open source and business apparatuses. As a result we take on Security and Penetration testing from beginning periods of the SDLC to avoid the loopholes in application.",
            img: vision5,
            alt: "Security testing process illustration",
          },
          {
            id: 7,
            title: "Performance Testing",
            desc: "One of the hardest challenges the companies are facing today includes accomplishing and keeping up their business' central goal; basic applications at pinnacle performance and adaptability levels. Without a successful philosophy for anticipating framework conduct and performance under genuine pressure conditions. They are presented to the sorts of disastrous log jams and disappointments, therefore it cripple efficiency, head out clients and destroy the organization's main concern. The need of great importance has in this manner, become a successful programming performance testing exertion to defeat such difficulties.",
            img: vision6,
            alt: "Performance testing process illustration",
          },
        ].map((step, index) => (
          <div
            key={step.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-center"
          >
            <div
              className={`md:col-span-4 ${index % 2 !== 0 ? "md:order-2" : ""}`}
            >
              <Image
                src={step.img}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg mx-auto shadow-2xl"
                alt={step.alt}
              />
            </div>
            <div
              className={`md:col-span-8 mt-5 md:mt-0 ${
                index % 2 !== 0 ? "md:order-1 text-right md:text-left" : ""
              }`}
            >
              <span className="inline-block py-3 px-6 text-3xl sm:text-4xl bg-[#f5f5ff] shadow-sm text-[#6a6a8e] rounded-full">
                {step.id}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#050748] mt-6">
                {step.title}
              </h3>
              <p className="text-lg text-[#6a6a8e] mt-3">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <ChooseFuture />

      <GetNewInsight />
    </>
  );
};

export default Mobile;
