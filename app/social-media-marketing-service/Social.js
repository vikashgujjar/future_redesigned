"use client";
import React from "react";
import Image from "next/image";
import image2 from "../Assets/lss.webp";
import mrk from "../Assets/mrk.gif";
import cwd from "../Assets/soci.webp";
import soe from "../Assets/soe.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import GetNewInsight from "../components/GetNewInsight";

import {
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaCameraRetro,
  FaHashtag,
  FaEnvelopeOpenText,
  FaLaptop,
  FaLightbulb,
  FaHandshake,
  FaPalette,
  FaGlobe,
  FaCommentDots,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
  FaAd,
  FaPeopleArrows,
} from "react-icons/fa";

const Social = () => {
  const features = [
    {
      title: "Social Media Strategy & Planning",
      description:
        "We design a tailored social media marketing strategy to align with your brand goals. From defining audience personas to content calendar planning, we ensure every post drives engagement and builds brand loyalty.",
      icon: <FaBullhorn />,
    },
    {
      title: "Content Creation & Management",
      description:
        "Our creative team produces visually stunning graphics, engaging videos, and compelling posts that resonate with your audience. We handle all aspects of content management to maintain a consistent and impactful online presence.",
      icon: <FaCameraRetro />,
    },
    {
      title: "Content Creation & Marketing",
      description:
        "Using premium stock images, custom-made graphics, or unique assets provided by you, we create visual content including static images, videos, infographics, and carousels. Our in-house designers, copywriters, and marketing experts work together to craft engaging posts that drive attention and boost brand impression.",
      icon: <FaChartLine />,
    },
    {
      title: "Facebook Page Management",
      description:
        "From page creation and post designing to Facebook Ad management, campaign monitoring, and audience engagement — we handle everything to grow your follower base and improve visibility.",
      icon: <FaFacebookF />,
    },
    {
      title: "Twitter Account Management",
      description:
        "Our strategic Twitter marketing leverages powerful words and trending hashtags to strengthen your brand authority. We blend creativity and tactics to enhance your presence on this micro-blogging platform.",
      icon: <FaTwitter />,
    },
    {
      title: "LinkedIn Profile Management",
      description:
        "Reflect your business professionalism on LinkedIn. We help B2B and B2C brands establish a strong presence, connect with professionals, and build a credible network that drives opportunities.",
      icon: <FaLinkedin />,
    },
    {
      title: "Instagram Marketing",
      description:
        "Boost engagement with our Instagram marketing expertise. We craft eye-catching visuals, short videos, and shoppable content to drive conversions and elevate your brand image.",
      icon: <FaInstagram />,
    },
    {
      title: "Pinterest Marketing",
      description:
        "We blend creativity and strategy to optimize your Pins, Feeds, and Boards. Our Pinterest marketing ensures your visuals capture attention, keeping users engaged and generating quality leads.",
      icon: <FaPinterest />,
    },
    {
      title: "Social Media Advertising Campaigns",
      description:
        "We run high-performing ad campaigns across Facebook, Instagram, LinkedIn, and more — focusing on conversions, brand awareness, and audience growth with precision targeting and ROI-driven strategies.",
      icon: <FaAd />,
    },
    {
      title: "Influencer & Community Marketing",
      description:
        "We collaborate with trusted influencers and manage brand communities to enhance your reach and authenticity. Our team ensures genuine engagement that strengthens your brand reputation and trust.",
      icon: <FaUsers />,
    },
    {
      title: "Community Management",
      description:
        "Our social media activities help build a loyal community around your niche. Through meaningful, informative interactions, we ensure your brand stays connected and relevant in the competitive digital world.",
      icon: <FaPeopleArrows />,
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "Using advanced analytics, we monitor engagement, reach, and conversions to refine campaigns continuously — ensuring data-backed decisions and measurable success.",
      icon: <FaSearch />,
    },
    {
      title: "Brand Reputation & Engagement Management",
      description:
        "We actively manage brand mentions, respond to comments, and engage with your audience to build strong relationships. Our approach turns followers into loyal advocates for your brand.",
      icon: <FaCommentDots />,
    },
    {
      title: "Multi-Platform Optimization",
      description:
        "We optimize campaigns for each social platform — ensuring your content performs effectively whether on Facebook, Instagram, LinkedIn, or X (Twitter).",
      icon: <FaGlobe />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Strategic Social Campaigns",
      desc: "Our data-driven campaigns are designed to maximize engagement, reach, and conversions — ensuring every post aligns with your brand's vision and audience interests.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Creative Content & Visuals",
      desc: "We craft visually appealing designs, stories, and videos that not only grab attention but also communicate your brand message effectively across all social platforms.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Marketing Approach",
      desc: "We work closely with your team to understand your goals and target audience, ensuring each campaign strengthens your online presence and brand identity.",
    },
  ];

  const cards = [
    {
      count: "1500+",
      title: "Campaigns Successfully Executed",
      desc: "We've successfully delivered over 1500 high-impact social media campaigns that boosted brand visibility, audience engagement, and lead conversions across diverse industries worldwide.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Digital Expertise",
      desc: "With more than 15 years of experience in digital marketing, Future IT Touch Pvt. Ltd. crafts innovative, data-driven social strategies that accelerate growth and ensure long-term brand success.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Satisfied Global Clients",
      desc: "Trusted by over 500 leading brands worldwide, our social media professionals deliver impactful content and campaigns that build trust, foster connections, and inspire customer loyalty.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "We're proud to maintain a 98% satisfaction rate by consistently delivering creative excellence, measurable performance, and proactive support that exceed client expectations.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Social Support & Monitoring",
      desc: "Our dedicated social team provides 24/7 support and real-time monitoring to ensure your brand remains active, responsive, and protected across every social platform.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaBullhorn className="text-white w-6 h-6" />,
      title: "Strategic Campaign Planning",
      desc: "We plan campaigns that combine creativity, analytics, and audience insights to deliver meaningful engagement and brand visibility.",
    },
    {
      icon: <FaLaptop className="text-white w-6 h-6" />,
      title: "Content Creation & Scheduling",
      desc: "We produce and schedule high-quality content optimized for every platform — from carousel posts to reels and ad creatives.",
    },
    {
      icon: <FaUsers className="text-white w-6 h-6" />,
      title: "Community Building & Management",
      desc: "We grow your online communities, respond to followers, and encourage meaningful interactions to build strong brand loyalty.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Performance Analytics & Reporting",
      desc: "Our detailed reports track campaign results, helping you understand audience behavior and identify opportunities for growth.",
    },
    {
      icon: <FaHashtag className="text-white w-6 h-6" />,
      title: "Paid Social Advertising",
      desc: "We manage targeted ad campaigns to increase brand awareness, drive leads, and boost ROI across Facebook, Instagram, and LinkedIn.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-white w-6 h-6" />,
      title: "Brand Reputation Management",
      desc: "We monitor brand mentions, respond to feedback, and ensure your business maintains a positive and engaging presence online.",
    },
  ];

  const faqData = [
    {
      title: "What does your Social Media Marketing service include?",
      description:
        "Our services include strategy planning, content creation, advertising, analytics tracking, and community management across platforms like Facebook, Instagram, LinkedIn, and Twitter (X).",
    },
    {
      title: "Can you manage multiple social media platforms for my brand?",
      description:
        "Yes, we handle multi-platform management — ensuring consistent branding and messaging across all social channels with unique, platform-specific strategies.",
    },
    {
      title: "Do you create custom content for social media?",
      description:
        "Absolutely! We design and write creative content tailored to your brand tone, audience preferences, and campaign goals.",
    },
    {
      title: "How do you measure social media performance?",
      description:
        "We track engagement, reach, clicks, conversions, and ROI through advanced analytics tools to measure campaign effectiveness and optimize future strategies.",
    },
    {
      title: "Can social media marketing help grow my business?",
      description:
        "Yes! Social media builds brand visibility, trust, and customer relationships — driving leads, conversions, and long-term growth.",
    },
    {
      title: "Do you provide ongoing social media support?",
      description:
        "Yes, we offer continuous monitoring, updates, performance reports, and optimization to ensure consistent brand engagement and growth.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes smmFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
      `}</style>

      <CommonBannerService
        imgSrc={cwd}
        title="SOCIAL MEDIA MARKETING SERVICES"
        desc="Future IT Touch Pvt. Ltd., an certified agency, provides dynamic and results-driven social media marketing services. We take into account the current brand value of a business and, work toward enhancing it. We use futuristic strategies and creative designs for maximum impact. Our team of proficient social media optimization and marketing specialists is adept at managing media platforms like Facebook, Twitter, Google+, LinkedIn and Pinterest. Together, we boost your social media presence, generating more leads in the process.

"
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
                  alt="Social Media Marketing Services"
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
                  style={{ background: "#2dd4bf", animation: "smmFloat 3s ease-in-out infinite" }}
                />
                <span
                  className="absolute bottom-16 left-12 w-2 h-2 rounded-full opacity-70"
                  style={{ background: "#a855f7", animation: "smmFloat 4s ease-in-out infinite 1s" }}
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
                  Creative &amp; Data-Driven Social Media Marketing
                </span>

                <h4 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
                  Amplify Your Brand Presence with{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Strategic Social Media Marketing
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
                  we help businesses connect, engage, and grow through innovative social media strategies that turn followers into customers and customers into loyal brand advocates.
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  From creative content and influencer collaborations to paid advertising and performance tracking, our comprehensive solutions ensure your brand stands out in the digital crowd.
                  <br /> <br />
                  With over 15 years of experience, we deliver high-performing{" "}
                  <span className="font-semibold text-indigo-600">
                    Social Media Marketing Services
                  </span>{" "}
                  tailored to your goals and audience.
                </p>

                <div className="pt-2">
                  <a
                    href="tel:+917056937000"
                    className="inline-block px-6 py-3 rounded-xl text-white font-medium shadow-lg transition"
                    style={{
                      background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                    }}
                  >
                    Grow Your Brand with Social Media Today
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
              Comprehensive Social Media Marketing Services
            </span>
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Building Engagement &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Driving Conversions Across Platforms
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
                  src={soe}
                  alt="Social Media Marketing"
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
              Top Social Media Marketing Company in India
            </span>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              Engaging, Growing &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Converting Audiences Organically
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
        title="Empowering Brands Through Engaging Social Media Strategies"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Our Social Media Marketing Process"
      />

      <FAQSection faqData={faqData} title="About Our Social Media Marketing Services" />

      <GetNewInsight />
    </>
  );
};

export default Social;
