"use client";
import Image from "next/image";
import devops from "../Assets/app-develops.webp";
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

import { useState } from "react";

const Mobile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <>
      <style>{`
        @keyframes mtFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(1.5deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        .mt-float { animation: mtFloat 7s ease-in-out infinite; }
        .mt-float-slow { animation: mtFloat 10s ease-in-out infinite reverse; }
      `}</style>

      {/* ── Dark-navy hero ── */}
      <section
        style={{
          background:
            "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "6rem",
          paddingBottom: "5rem",
        }}
      >
        {/* dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />

        {/* blobs */}
        <div
          className="mt-float"
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(45,212,191,.13) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="mt-float-slow"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,.12) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* animated SVG arcs */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            opacity: 0.07,
            pointerEvents: "none",
          }}
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="500"
            cy="100"
            r="300"
            stroke="#2dd4bf"
            strokeWidth="1.5"
          />
          <circle
            cx="500"
            cy="100"
            r="220"
            stroke="#6366f1"
            strokeWidth="1"
          />
          <circle
            cx="500"
            cy="100"
            r="140"
            stroke="#2dd4bf"
            strokeWidth="0.8"
          />
        </svg>

        <div
          className="px-5 md:px-12 xl:px-28"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* H1 */}
          <h1
            className="font-bold text-4xl max-sm:text-2xl max-lg:text-2xl"
            style={{ color: "#fff", maxWidth: "820px", lineHeight: 1.2 }}
          >
            WEBSITE, MOBILE APP &{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DIGITAL MARKETING
            </span>{" "}
            SERVICES
          </h1>

          {/* gradient accent bar */}
          <div
            style={{
              marginTop: "1.25rem",
              height: "4px",
              width: "90px",
              borderRadius: "9999px",
              background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
            }}
          />

          {/* description */}
          <div
            className="mt-5 text-lg text-justify max-lg:text-base"
            style={{ color: "rgba(255,255,255,.72)", maxWidth: "820px" }}
          >
            <p>
              We are a full-stack Branding, Website Development, App
              Development, Digital marketing and web designing company in
              Chandigarh with all the expertise you need to build a successful,
              stable and scalable product. We follow our tried and tested
              processes that ensures that the product is a marketfit, and hence
              your marketing and technology partner.{" "}
              <span
                className="font-bold"
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Future IT Touch Pvt. Ltd.
              </span>{" "}
              mobile app development &amp; website design company in India
              offers a comprehensive range of digital solutions for all your
              online business needs. Our bouquet of services includes web design
              and development, mobility solutions, digital marketing, and
              corporate branding solutions. With our team of 50+ designers,
              developers, content writers, and marketing experts, we have been
              serving a global clientele in 3+ countries since 2017.
            </p>
          </div>

          {/* buttons */}
          <div className="flex gap-3 mt-7 flex-wrap">
            <a
              href="/contact"
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
                transition: "opacity .2s",
                textDecoration: "none",
              }}
            >
              Quick Enquiry
            </a>
            <a
              href="tel:+917056937000"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid rgba(255,255,255,.35)",
                color: "#fff",
                padding: "0.6rem 2rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                background: "transparent",
                textDecoration: "none",
                transition: "border-color .2s",
              }}
            >
              Call us - 7056937000
            </a>
          </div>
        </div>

        {/* bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background:
              "linear-gradient(to bottom,transparent,rgba(6,11,26,.6))",
            pointerEvents: "none",
          }}
        />
      </section>

      <Counter />

      {/* ── Overview / about section ── */}
      <div
        style={{ background: "#f8faff" }}
        className="py-16 px-5 md:px-12 xl:px-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 flex justify-center">
            <Image
              src={devops}
              className="w-72 md:w-96 rounded-lg"
              width={400}
              height={400}
              alt="Mobile app development illustration"
            />
          </div>

          <div className="md:col-span-8">
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                color: "#fff",
                padding: "0.25rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Overview
            </span>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug"
              style={{ color: "#111827" }}
            >
              Mobile Application{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Testing
              </span>
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-500 text-justify mt-5">
              Future IT Touch is an eminent Mobile Application Testing
              organization that offers astounding versatile application testing
              administration. We developed our specialty in Mobile testing,
              particularly in mobile testing applications of iOS and Android
              gadgets. With a group of devoted certified testers, we play out a
              wide range of web, mobile, local and cross platform portable
              applications testing. So we are including a proven great mobile
              testing approach. We test applications for its functionality,
              usability, consistency and compatibility for longer use and
              stability.
            </p>
          </div>
        </div>
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-4">
          <div>
            <p
              className="mb-6 text-xl md:text-2xl font-bold"
              style={{
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Advantages of Mobile App Development
            </p>
            <ul
              className="space-y-4 text-[15px] md:text-[17px] text-justify"
              style={{ color: "rgba(255,255,255,.55)" }}
            >
              <li>
                Completely utilitarian QA administrations for every client
                ensures that product functionality performs as per requirements.
              </li>
              <li>Validation of data integrity across business flows.</li>
              <li>
                Strong infrastructure and disaster recovery plans provide
                continuous testing services (24x7).
              </li>
              <li>
                Our organisation has multiple redundant servers ensuring 99.9%
                uptime.
              </li>
            </ul>
          </div>

          <div>
            <p
              className="mb-6 text-xl md:text-2xl font-bold"
              style={{
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Advantages of Mobile App Development
            </p>
            <ul
              className="space-y-4 text-[15px] md:text-[17px] text-justify"
              style={{ color: "rgba(255,255,255,.55)" }}
            >
              <li>
                Dedicated testing labs with well-equipped servers simulate
                diverse client conditions and leverage cloud infrastructure.
              </li>
              <li>
                Use of web-enabled defect management tools ensures transparency
                in the testing cycle.
              </li>
              <li>
                Multiple teams across different GEOs track defects in real-time.
              </li>
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
                transition: "opacity .2s",
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

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div
              className="flex flex-col lg:flex-row rounded-xl shadow-lg p-6 gap-4 items-center"
              style={{
                background: "rgba(45,212,191,.06)",
                border: "1px solid rgba(45,212,191,.20)",
              }}
            >
              <Image
                src={service1}
                width={400}
                height={400}
                alt="iOS app development service illustration"
                className="w-full sm:w-40"
              />
              <div className="text-center sm:text-left">
                <h4
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#111827", fontFamily: "Poppins, sans-serif" }}
                >
                  IOS App Development
                </h4>
                <p className="text-lg text-gray-500">
                  We provide cutting-edge mobile app development services to
                  turn your business app dreams into reality with a proficient
                  custom iOS app development team.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row rounded-xl shadow-lg p-6 gap-4 items-center"
              style={{
                background: "rgba(99,102,241,.06)",
                border: "1px solid rgba(99,102,241,.20)",
              }}
            >
              <Image
                src={service2}
                width={400}
                height={400}
                alt="Android app development service illustration"
                className="w-full sm:w-40"
              />
              <div className="text-center sm:text-left">
                <h4
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#111827", fontFamily: "Poppins, sans-serif" }}
                >
                  Android App Development
                </h4>
                <p className="text-lg text-gray-500">
                  Powering 2 billion mobile devices globally, Android remains
                  one of the most sought-after platforms for mobile app
                  development.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row rounded-xl shadow-lg p-6 gap-4 items-center"
              style={{
                background: "rgba(14,165,233,.06)",
                border: "1px solid rgba(14,165,233,.20)",
              }}
            >
              <Image
                src={service3}
                width={400}
                height={400}
                alt="Cross platform app development service illustration"
                className="w-full sm:w-40"
              />
              <div className="text-center sm:text-left">
                <h4
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#111827", fontFamily: "Poppins, sans-serif" }}
                >
                  Cross Platform App Development
                </h4>
                <p className="text-lg text-gray-500">
                  Need an app for your business that runs seamlessly across
                  Android and iPhone yet fits budget constraints? We&apos;ve got you
                  covered.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row rounded-xl shadow-lg p-6 gap-4 items-center"
              style={{
                background: "rgba(168,85,247,.06)",
                border: "1px solid rgba(168,85,247,.20)",
              }}
            >
              <Image
                src={service4}
                width={400}
                height={400}
                alt="Mobile app testing service illustration"
                className="w-full sm:w-40"
              />
              <div className="text-center sm:text-left">
                <h4
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#111827", fontFamily: "Poppins, sans-serif" }}
                >
                  Mobile App Testing
                </h4>
                <p className="text-lg text-gray-500">
                  We provide professional web and mobile app testing solutions
                  to ensure quality and performance for all your applications.
                </p>
              </div>
            </div>
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
