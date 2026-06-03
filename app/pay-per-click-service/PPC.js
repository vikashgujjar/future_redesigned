"use client";
import React from "react";

import Image from "next/image";
import cwd from "../Assets/ppc-new.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import GetNewInsight from "../components/GetNewInsight";

import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaCogs,
  FaServer,
} from "react-icons/fa";

import { FaProjectDiagram, FaRobot, FaBars } from "react-icons/fa";

import { FaSearch, FaLaptopCode } from "react-icons/fa";
import {
  FaBullhorn,
  FaEnvelopeOpenText,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const PPC = () => {
  const features = [
    {
      title: "Targeted Campaigns",
      description:
        "We design PPC campaigns that reach your ideal audience with precision, ensuring your ads are shown to users who are most likely to convert. By analyzing demographics, search behavior, and interests, we optimize each campaign for maximum ROI and ad relevance. Our approach guarantees that every click has the potential to turn into a valuable lead or sale, helping you achieve measurable business growth.",
      icon: <FaBullhorn />,
    },
    {
      title: "Keyword Optimization",
      description:
        "Our PPC experts research and select high-performing keywords that accurately represent your products or services. By targeting the right search terms, we drive qualified traffic to your website while minimizing wasted ad spend. We continuously monitor keyword performance, identify emerging trends, and adjust bids to ensure your campaigns stay competitive and deliver optimal results over time.",
      icon: <FaSearch />,
    },
    {
      title: "Compelling Ad Copies",
      description:
        "We craft attention-grabbing ad copies that resonate with your audience across Google Ads, Facebook, YouTube, and other platforms. Each ad is carefully written to highlight unique selling points, encourage clicks, and drive conversions. Our team tests multiple variations, refines messaging, and optimizes calls-to-action to maximize engagement and ensure the best possible ROI for every campaign.",
      icon: <FaEnvelopeOpenText />,
    },
    {
      title: "Landing Page Optimization",
      description:
        "An effective PPC campaign requires high-converting landing pages. We design and optimize landing pages with clear messaging, persuasive calls-to-action, and a seamless user experience. From mobile responsiveness to fast load times and visually engaging layouts, we ensure that visitors are guided toward conversion efficiently, increasing your overall campaign performance and ROI.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Paid Social Advertising",
      description:
        "We manage PPC campaigns on social platforms such as Facebook, Instagram, LinkedIn, and X (Twitter). Using precise audience targeting, carousel ads, video ads, and dynamic creatives, we increase brand visibility and engagement. Our team continuously tests ad formats, messaging, and placements to maximize reach and conversions while optimizing your ad spend for the highest possible ROI.",
      icon: <FaUsers />,
    },
    {
      title: "Performance Analytics & Reporting",
      description:
        "Our team continuously monitors campaign performance, adjusts bids, and optimizes ad placements to ensure maximum effectiveness. Detailed analytics reports track impressions, clicks, conversions, and ROI, helping us make data-driven decisions. We refine campaigns based on real-time performance metrics, ensuring that your PPC investment delivers measurable results and continuous growth for your business.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaBullhorn className="text-white w-8 h-8" />,
      title: "Targeted PPC Campaigns",
      desc: "We design precision-driven PPC campaigns to reach your ideal audience. By analyzing search behavior, demographics, and interests, we ensure maximum visibility and conversion potential for your ads.",
    },
    {
      icons: <FaSearch className="text-white w-8 h-8" />,
      title: "Keyword Research & Optimization",
      desc: "Our PPC experts research high-performing keywords, optimize bids, and continuously monitor performance. This ensures your ads appear to the right audience, driving qualified traffic and maximizing ROI.",
    },
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "Landing Page Optimization",
      desc: "We create high-converting landing pages tailored to your campaigns. With clear CTAs, fast load times, and mobile-friendly design, we maximize user engagement and boost conversion rates.",
    },
  ];

  const cards = [
    {
      count: "1500+",
      title: "PPC Campaigns Successfully Executed",
      desc: "We've executed over 1500 result-driven PPC campaigns across Google, Facebook, YouTube, and LinkedIn. Each campaign is crafted to maximize reach, engagement, and ROI, ensuring high-quality leads and conversions.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "10+",
      title: "Years of PPC Expertise",
      desc: "With over 10 years of experience in PPC management, our team delivers data-driven strategies that optimize ad spend, improve campaign performance, and help businesses achieve measurable growth.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Satisfied Global Clients",
      desc: "Trusted by more than 500 brands worldwide, we manage PPC campaigns that increase visibility, attract ready-to-buy customers, and generate tangible ROI for businesses of all sizes.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our focus on delivering high-performing campaigns has earned a 98% client satisfaction rate. We ensure transparent reporting, timely execution, and constant optimization for each client.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Ongoing Campaign Monitoring",
      desc: "Our PPC experts provide round-the-clock monitoring to optimize bids, tweak ads, and refine targeting strategies, ensuring your campaigns always perform at their peak.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaBullhorn className="text-white w-6 h-6" />,
      title: "Targeted Campaign Planning",
      desc: "We research keywords, demographics, and user behavior to design campaigns that reach the right audience with precision, improving ad relevance and ROI.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Keyword & Ad Optimization",
      desc: "Our experts continually optimize keywords, bids, and ad copies to ensure your campaigns drive high-quality traffic and maximum conversions.",
    },
    {
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      title: "Landing Page Optimization",
      desc: "We design and optimize PPC landing pages to increase engagement and conversion rates, ensuring your investment generates measurable results.",
    },
    {
      icon: <FaUsers className="text-white w-6 h-6" />,
      title: "Paid Social Advertising",
      desc: "We run highly targeted social media PPC campaigns on Facebook, Instagram, LinkedIn, and X (Twitter), using precise audience targeting and engaging ad creatives.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Performance Analytics & Reporting",
      desc: "Detailed reports and continuous monitoring allow us to measure campaign success, optimize strategies, and deliver data-driven decisions for maximum impact.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-white w-6 h-6" />,
      title: "Retargeting & Lead Nurturing",
      desc: "We implement retargeting strategies to re-engage visitors who didn't convert initially, improving overall campaign efficiency and lead generation.",
    },
  ];

  const faqData = [
    {
      title: "What is included in your PPC management service?",
      description:
        "Our PPC service includes campaign strategy, keyword research, ad copy creation, landing page optimization, bid management, retargeting, analytics tracking, and ongoing optimization across platforms like Google, Facebook, LinkedIn, and YouTube.",
    },
    {
      title: "Can you manage multiple PPC platforms simultaneously?",
      description:
        "Yes, we handle campaigns across multiple platforms, ensuring consistent targeting, messaging, and performance tracking for Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and YouTube.",
    },
    {
      title: "Do you provide custom ad creatives?",
      description:
        "Absolutely! We create engaging and high-converting ad creatives, including images, videos, carousel ads, and dynamic product ads tailored to your brand and campaign objectives.",
    },
    {
      title: "How do you measure PPC performance?",
      description:
        "We track conversions, click-through rates (CTR), cost-per-click (CPC), return on ad spend (ROAS), and other key metrics using advanced analytics tools to continuously optimize your campaigns.",
    },
    {
      title: "Can PPC help my business grow quickly?",
      description:
        "Yes, PPC is a fast and measurable way to drive qualified traffic to your website or app. With properly targeted campaigns, you can generate leads, sales, and brand awareness quickly.",
    },
    {
      title: "Do you provide ongoing campaign support?",
      description:
        "Yes, our team provides continuous monitoring, bid optimization, ad updates, performance reports, and campaign adjustments to ensure sustained results and ROI.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes ppcFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
      `}</style>

      <CommonBannerService
        imgSrc={cwd}
        title="PPC MANAGEMENT SERVICES"
        desc="Looking for the quickest way to bring ready-to-buy customers to your website and mobile app? PPC (Pay-per-Click) offers the perfect solution. As a leading PPC management company in India we specialize in various PPC management services such as Google Adwords, Facebook and YouTube advertisements. As an certified PPC service provider in India, we have been serving a global clientele from varied industries and demographic for the past ten years in the most efficient manner."
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
                  alt="PPC Management Services"
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
                  style={{ background: "#2dd4bf", animation: "ppcFloat 3s ease-in-out infinite" }}
                />
                <span
                  className="absolute bottom-16 left-12 w-2 h-2 rounded-full opacity-70"
                  style={{ background: "#a855f7", animation: "ppcFloat 4s ease-in-out infinite 1s" }}
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
                  Result-Oriented PPC Management
                </span>

                <h4 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
                  Driving Targeted Traffic &amp;{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Maximizing ROI with PPC Campaigns
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
                  we create highly effective Pay-Per-Click (PPC) campaigns to bring
                  ready-to-buy customers to your website or mobile app. Our certified
                  PPC experts specialize in Google Ads, Facebook Ads, YouTube Ads, and
                  more, delivering measurable results with cost-effective campaigns.
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Our PPC services are designed to maximize your visibility, drive
                  targeted traffic, and generate high-quality leads that convert into
                  sales.
                  <br /> <br />
                  <span className="font-semibold text-gray-900">For Businesses:</span>
                  {" "}Targeted ad campaigns, strategic keyword bidding, precise audience
                  segmentation, retargeting, and data-driven optimization to maximize
                  ROI.
                  <br /> <br />
                  <span className="font-semibold text-gray-900">
                    For Marketing Teams:
                  </span>
                  {" "}Detailed analytics, campaign performance tracking, budget
                  optimization, and reporting to guide strategy and enhance results.
                  <br /> <br />
                  With over 10 years of experience in PPC management, we've delivered
                  successful campaigns for clients across industries. Choose our{" "}
                  <span className="font-semibold text-indigo-600">
                    PPC management services
                  </span>{" "}
                  to boost your online presence, attract qualified leads, and increase
                  conversions.
                </p>

                <div className="pt-2">
                  <a
                    href="tel:+917056937000"
                    className="inline-block px-6 py-3 rounded-xl text-white font-medium shadow-lg transition"
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                    }}
                  >
                    Start Your PPC Campaign Today
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
              Trusted PPC Management Services
            </span>
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Delivering Result-Driven Paid Campaigns for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Maximum ROI
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
                  src={cwd}
                  alt="PPC Management"
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
              Leading PPC Management Company in India
            </span>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              Maximize Conversions &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ROI with Expert PPC Strategies
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
        title="Maximize Conversions with Expert PPC Management Solutions "
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Comprehensive PPC Management Services – Target, Engage & Convert Your Audience Effectively"
      />

      <FAQSection
        faqData={faqData}
        title=" About PPC Management Services"
      />

      <GetNewInsight />
    </>
  );
};

export default PPC;
