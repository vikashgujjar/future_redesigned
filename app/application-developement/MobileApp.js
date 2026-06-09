"use client";
import Image from "next/image";
import devops from "../Assets/app-develops.webp";
import bannerImg from "../Assets/hhh.gif";
import { FaAngleRight, FaChevronRight, FaApple, FaAndroid, FaMobileAlt, FaBug } from "react-icons/fa";
import ChooseFuture from "../components/ChooseFuture";
import Counter from "../components/Counter";
import GetNewInsight from "../components/GetNewInsight";
import CommonBannerService from "../components/CommonBannerService";
import OverviewSection from "../components/OverviewSection";

const MobileApp = () => {
  return (
    <>
      <CommonBannerService
        imgSrc={bannerImg}
        title="WEBSITE, MOBILE APP & DIGITAL MARKETING SERVICES"
        desc="We are a full-stack Branding, Website Development, App Development, Digital marketing and web designing company in Chandigarh with all the expertise you need to build a successful, stable and scalable product. We follow our tried and tested processes that ensures that the product is a marketfit, and hence your marketing and technology partner. Future IT Touch Pvt. Ltd. mobile app development & website design company in India offers a comprehensive range of digital solutions for all your online business needs. Our bouquet of services includes web design and development, mobility solutions, digital marketing, and corporate branding solutions. With our team of 50+ designers, developers, content writers, and marketing experts, we have been serving a global clientele in 3+ countries since 2017."
      />

      <Counter />

      <style>{`
        .ma-svc-card { transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .ma-svc-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(99,102,241,.16) !important; }
      `}</style>

      {/* ── Overview section ── */}
      <OverviewSection
        image={devops}
        imageAlt="Mobile App Development"
        badgeText="Custom Mobile App Solutions"
        heading="Crafting Powerful, Scalable &"
        headingHighlight="Custom App Solutions"
        paragraphs={[
          "At Future IT Touch Pvt. Ltd. we have a decade-long experience in custom mobile application development spanning multiple industries from retail to healthcare and energy. We dive into your business ecosystem, explore the market, and understand your requirements and capabilities.",
          "We build a truly custom strategy to unlock the full potential of mobile technology for your company — from concept to deployment, we ensure every app delivers value and scalability.",
          { boldPrefix: "For Businesses:", text: "Custom solutions for eCommerce, enterprise management, and service-based industries with robust integrations, analytics, and smooth performance." },
          { boldPrefix: "For Users:", text: "Intuitive UI/UX design, fast loading times, offline functionality, and secure data handling to ensure a delightful experience on every device." },
        ]}
        ctaText="Start Your App Project"
      />

      {/* ── Strategy section ── */}
      <div
        style={{
          background:
            "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
        }}
        className="px-5 md:px-12 xl:px-28 py-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <h4
              className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold mb-3"
              style={{ color: "#fff" }}
            >
              Get a Complete Strategy of Mobile App Development
            </h4>
            <p
              className="mb-6 text-xl font-semibold max-sm:text-lg"
              style={{
                background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hire Expert Cross Platform Mobile App Developers to Boost Your
              Business
            </p>

            <div
              className="text-[17px] text-justify max-sm:text-base"
              style={{ color: "rgba(255,255,255,.55)" }}
            >
              <p className="mb-5">
                Communication has become faster with React Native &amp; Swift as
                mobile apps are visually appealing, interactive, and easily
                integrated with other mobile features. Smartphones have
                transformed daily life, with more users accessing information
                via mobiles, tablets, and wearables. People rely on mobile apps
                for data management, online shopping, socializing, navigation,
                and more.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { num: "800+", label: "Apps Delivered" },
                  { num: "200+", label: "Team Strength" },
                  { num: "400+", label: "Happy Clients" },
                  { num: "95%", label: "Repeat Business" },
                  { num: "50+", label: "Experts" },
                  { num: "15+", label: "Years Experience" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl px-3 py-3 text-center"
                    style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.10)" }}>
                    <p className="font-extrabold text-lg leading-none mb-1"
                      style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                      {s.num}
                    </p>
                    <p className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,.55)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <p
              className="mb-6 text-2xl font-bold max-sm:text-xl"
              style={{ color: "#fff" }}
            >
              Advantages of Mobile App Development
            </p>

            <ul className="list-none space-y-2.5">
              {[
                "Substitution of Traditional Method of Market",
                "An effective way of Branding and engaging the audience",
                "Reduction in cost and raises standards",
                "Increase in Revenue",
                "Gives more value to customers",
                "24*7 support facility",
                "Feasible and Convenient",
                "Secured from vulnerable attacks",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", minWidth: "1.25rem" }}>
                    {index + 1}
                  </span>
                  <span className="text-base" style={{ color: "rgba(255,255,255,.72)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a href="/contact">
              <button
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  boxShadow: "0 4px 24px rgba(45,212,191,.38)",
                  color: "#fff",
                  padding: "1rem 1.5rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1.75rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity .2s",
                }}
              >
                Request A Quote <FaAngleRight style={{ marginLeft: "8px" }} />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ── Services section ── */}
      <section className="relative py-20 lg:py-28" style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>
        <div className="ma-dotgrid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 68%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.06),transparent 68%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.24)" }}>
              <span className="ma-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                Our App Development Services
              </span>
            </div>
            <h2 className="font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.5rem)" }}>
              Building Solutions for{" "}
              <span style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Every Platform
              </span>
            </h2>
            <div className="ma-bar mx-auto h-[3px] w-14 rounded-full mb-5"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
            <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
              We think big and have hands in all leading technology platforms to provide you a wide array of services.
            </p>
          </div>

          {/* 4 service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaApple />,
                title: "iOS App Development",
                desc: "We provide cutting-edge mobile app development services to turn your dreams of a business app into reality. We have a proficient team for custom iOS app development.",
                from: "#2dd4bf", to: "#6366f1",
                href: "/ios-application-development",
              },
              {
                icon: <FaAndroid />,
                title: "Android App Development",
                desc: "Powering 2 Billion mobile devices across the globe, Android inevitably stands out as one of the most sought-after platforms for mobile app development.",
                from: "#6366f1", to: "#8b5cf6",
                href: "/android-application-development",
              },
              {
                icon: <FaMobileAlt />,
                title: "Cross Platform App Development",
                desc: "Need an app for your business that can run seamlessly across Android and iPhone yet limited by budget constraints? We've got you covered.",
                from: "#0ea5e9", to: "#2dd4bf",
                href: "/hybrid-application-development",
              },
              {
                icon: <FaBug />,
                title: "Mobile App Testing",
                desc: "We at Future IT Touch Pvt. Ltd. provide comprehensive mobile app testing solutions ensuring your apps are bug-free, performant, and ready for launch.",
                from: "#a855f7", to: "#6366f1",
                href: "/mobile-application-testing",
              },
            ].map((service, idx) => (
              <div key={idx} className="group ma-svc-card relative rounded-2xl bg-white overflow-hidden"
                style={{ boxShadow: "0 8px 32px rgba(99,102,241,.08), 0 1px 4px rgba(0,0,0,.04)", border: "1px solid rgba(99,102,241,.08)" }}>

                {/* Gradient top strip */}
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg,${service.from},${service.to})` }} />

                <div className="p-7 flex flex-col h-full">
                  {/* Icon + ghost number row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,${service.from},${service.to})`, boxShadow: `0 8px 24px ${service.from}55` }}>
                      {service.icon}
                    </div>
                    <span className="text-5xl font-black leading-none select-none"
                      style={{ color: service.from, opacity: 0.08, fontFamily: "'Poppins',sans-serif" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Poppins',sans-serif" }}>
                    {service.title}
                  </h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed flex-1">{service.desc}</p>

                  <a href={service.href}
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold no-underline transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: service.from }}>
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%,${service.from}0c,transparent 60%)` }} />
              </div>
            ))}
          </div>

          {/* Hire a Dedicated Developer CTA */}
          <div className="mt-16 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-2xl px-8 py-10"
            style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", border: "1px solid rgba(255,255,255,.06)" }}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.18em] mb-2"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Poppins',sans-serif" }}>
                Ready to Build?
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#fff" }}>
                Hire a{" "}
                <span style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Dedicated Developer
                </span>
              </h3>
            </div>
            <a href="/contact"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 24px rgba(45,212,191,.38)", fontFamily: "'Poppins',sans-serif" }}>
              Hire Now
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <ChooseFuture />

      <GetNewInsight />
    </>
  );
};

export default MobileApp;
