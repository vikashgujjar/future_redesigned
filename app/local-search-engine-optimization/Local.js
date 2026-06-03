"use client";
import React from "react";

import Image from "next/image";
import image2 from "../Assets/lss.webp";
import mrk from "../Assets/mrk.gif";
import cwd from "../Assets/loc.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import GetNewInsight from "../components/GetNewInsight";
import OverviewSection from "../components/OverviewSection";

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

const Local = () => {

  const features = [
    {
      title: "Local SEO Audit & Strategy",
      description:
        "We analyze your business's local search presence and develop a tailored SEO strategy. By optimizing for location-based keywords, competitor insights, and audience behavior, we ensure your business ranks higher in local search results and attracts nearby customers.",
      icon: <FaBuilding />,
    },
    {
      title: "Google Business Profile Optimization",
      description:
        "Our team optimizes your Google Business Profile to improve visibility on Google Maps and local search results. From updating business info to adding images and posts, we ensure your profile drives clicks, calls, and visits.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Local Keyword & Content Optimization",
      description:
        "We target location-specific keywords and optimize website content to appear in local searches. By combining relevant local content, meta tags, and on-page SEO best practices, we increase your visibility and attract local customers actively searching for your services.",
      icon: <FaChartLine />,
    },
    {
      title: "Local Link Building & Citations",
      description:
        "We build high-quality local backlinks and citations across relevant directories to enhance your domain authority and local search rankings. This strengthens your online credibility and helps customers find your business easily.",
      icon: <FaBookOpen />,
    },
    {
      title: "Review & Reputation Management",
      description:
        "We help you manage online reviews and reputation to build trust and credibility. Our strategies encourage positive reviews, respond to customer feedback, and maintain a strong local presence that influences buying decisions.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "We monitor your local SEO campaigns using metrics like search rankings, website traffic, and leads. Insights are used to refine strategies, optimize efforts, and ensure your business achieves maximum results in local search.",
      icon: <FaFileAlt />,
    },
    {
      title: "Local SEO Refresh & Optimization",
      description:
        "For businesses looking to improve local search visibility, we refresh and optimize existing SEO efforts. From website updates to citation corrections, we ensure your local presence remains strong, competitive, and effective.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Local SEO Strategy",
      desc: "We design customized local SEO strategies to help your business appear in nearby search results, increasing foot traffic, calls, and leads from customers in your area.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Website & Content Optimization",
      desc: "Our team optimizes your website content, meta tags, and location pages to ensure your business ranks higher for local searches and reaches customers searching for your products or services nearby.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Local SEO Process",
      desc: "We work closely with your team to understand your business locations, services, and target audience, ensuring our local SEO efforts align with your goals and deliver measurable results.",
    },
  ];

  const cards = [
    {
      count: "1000+",
      title: "Local Listings Optimized",
      desc: "We have optimized over 1000 local listings across directories and search platforms, helping businesses increase local visibility and attract more nearby customers effectively.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of SEO Expertise",
      desc: "With over 15 years of SEO experience, Future IT Touch Pvt. Ltd. delivers expert local search optimization strategies that improve rankings, traffic, and conversions for businesses worldwide.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 brands, we create local SEO campaigns that enhance online presence, improve visibility on maps, and drive measurable traffic from local searches.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our dedication to effective local SEO strategies has earned us a 98% satisfaction rate. We ensure each campaign drives results that meet business goals and increase local engagement.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "Our team provides continuous support for local SEO campaigns, including updates, reporting, and optimizations to ensure your business remains visible and competitive in your local area.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Local SEO Audits & Strategy",
      desc: "We perform detailed local SEO audits and develop tailored strategies to improve your visibility in location-based searches and attract nearby customers.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Google Business Profile Optimization",
      desc: "We optimize your Google Business Profile for maps and search, ensuring your business appears accurately and prominently in local searches.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Local Content & Keyword Optimization",
      desc: "We enhance website content and target local keywords to improve search rankings, making it easier for nearby customers to find your products or services.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Local Link Building & Citations",
      desc: "We build quality local backlinks and citations across relevant directories to improve your domain authority and search visibility in local searches.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Review & Reputation Management",
      desc: "We monitor and manage online reviews to build trust and credibility, encouraging positive feedback and fostering strong local customer relationships.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Analytics & Continuous Optimization",
      desc: "We track local SEO performance using analytics, refining strategies to ensure sustained visibility, higher rankings, and increased local engagement.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Local SEO?",
      description:
        "Our services include local SEO audits, Google Business Profile optimization, location-based content, citation building, review management, and continuous analytics monitoring to improve local search performance.",
    },
    {
      title: "Can you optimize my business for local searches?",
      description:
        "Absolutely! We customize strategies to improve your local search rankings, ensuring customers nearby can easily find your business and engage with your services.",
    },
    {
      title: "Do you manage Google Maps and local listings?",
      description:
        "Yes, we optimize and manage your listings on Google Maps and other local directories to improve visibility, accuracy, and trust with potential customers in your area.",
    },
    {
      title: "Can you help my existing website rank locally?",
      description:
        "Definitely! We optimize your website, content, and local pages to rank higher in search results for relevant local keywords, driving targeted traffic and conversions.",
    },
    {
      title: "How do you track the success of local SEO campaigns?",
      description:
        "We track metrics such as local search rankings, traffic from local searches, leads generated, and customer engagement to measure campaign success and refine strategies accordingly.",
    },
    {
      title: "Do you provide ongoing local SEO support?",
      description:
        "Yes, we offer continuous support including campaign updates, optimization, reporting, and strategic adjustments to maintain and improve your local search visibility over time.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes lseoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
      `}</style>

      <CommonBannerService
        imgSrc={cwd}
        title="LOCAL SEO SERVICES"
        desc="Future IT Touch Pvt. Ltd. With about 46% of all the Google searches featuring a local intent, Google is placing more importance on delivering local results that offer an immediate solution to the customers. Also, studies reveal that 78% of location-oriented searches invariably lead to offline conversion. All these statistics are compelling businesses to prepare for proximity-based search. If your business is not optimized for geo-targeted search, it's high time to avail local SEO services."
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
                  src={cwd}
                  alt="Local SEO Services"
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
                  style={{ background: "#2dd4bf", animation: "lseoFloat 3s ease-in-out infinite" }}
                />
                <span
                  className="absolute bottom-16 left-12 w-2 h-2 rounded-full opacity-70"
                  style={{ background: "#a855f7", animation: "lseoFloat 4s ease-in-out infinite 1s" }}
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
                  Professional &amp; Result-Oriented Local SEO Services
                </span>

                <h4 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
                  Optimizing Your Local Presence to{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Attract Nearby Customers
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
                  we create comprehensive local SEO strategies that help your business rank higher in local searches, attract relevant customers, and drive conversions. Effective local SEO builds visibility, trust, and a strong online reputation.
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  From Google Business Profile optimization to local content creation, citations, and review management, we ensure your business stands out in your area. Our experienced SEO specialists combine technical expertise, analytics, and strategy to deliver measurable local search results.
                  <br /> <br />
                  With over 15 years of experience, we provide high-quality{" "}
                  <span className="font-semibold text-indigo-600">
                    Local SEO Services
                  </span>{" "}
                  tailored to your business locations and audience. We help you attract more local customers, increase engagement, and drive leads efficiently.
                </p>

                <div className="pt-2">
                  <a
                    href="tel:+917056937000"
                    className="inline-block px-6 py-3 rounded-xl text-white font-medium shadow-lg transition"
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                    }}
                  >
                    Improve Your Local Search Visibility Today
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
              Result-Oriented Local SEO Services
            </span>
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Boosting Your Online Presence to{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Drive Local Customers
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
                  src={image2}
                  alt="Local SEO"
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
              Professional Local SEO Company in India
            </span>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              Boosting Local Visibility to{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Attract Nearby Customers
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
        title="Improving Local Search Rankings & Customer Visibility"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Local SEO Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Local SEO Services"
      />

      <GetNewInsight />
    </>
  );
};

export default Local;
