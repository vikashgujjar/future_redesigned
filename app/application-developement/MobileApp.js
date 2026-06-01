import Image from "next/image";
import devops from "../Assets/app-develops.webp";
import service1 from "../Assets/mob-1.webp";
import service2 from "../Assets/mob-2.webp";
import service3 from "../Assets/mob-3.webp";
import service4 from "../Assets/mob-4.webp";
import { FaAngleRight, FaChevronRight, FaDotCircle } from "react-icons/fa";
import ChooseFuture from "../components/ChooseFuture";
import Counter from "../components/Counter";
import GetNewInsight from "../components/GetNewInsight";

const MobileApp = () => {
  return (
    <>
      <style>{`
        @keyframes maFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(1.5deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        .ma-float { animation: maFloat 7s ease-in-out infinite; }
        .ma-float-slow { animation: maFloat 10s ease-in-out infinite reverse; }
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
          className="ma-float"
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
          className="ma-float-slow"
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

        <div className="px-5 md:px-12 xl:px-28" style={{ position: "relative", zIndex: 1 }}>
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
                  background:
                    "linear-gradient(90deg,#2dd4bf,#6366f1)",
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

      {/* ── Overview section ── */}
      <div
        style={{ background: "#f8faff" }}
        className="py-20 px-5 md:px-12 xl:px-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="p-4 md:col-span-4 flex justify-center lg:justify-start">
            <Image
              src={devops}
              width={400}
              height={400}
              alt="Mobile app development illustration"
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* Content */}
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
              className="text-3xl lg:text-4xl font-bold mt-1 max-sm:text-2xl"
              style={{ color: "#111827" }}
            >
              Custom{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mobile App
              </span>{" "}
              Solutions
            </h3>

            <p className="text-lg lg:text-xl text-gray-500 text-justify mt-5 max-w-4xl">
              Our team has a decade-long experience in custom mobile application
              development spanning multiple industries from retail to healthcare
              and energy. We dive into your business ecosystem, explore the
              market, and understand your requirements and capabilities. We
              build a truly custom strategy to unlock the full potential of
              mobile technology for your company.
            </p>

            <p className="text-lg lg:text-xl text-gray-500 text-justify mt-5 max-w-4xl">
              We provide custom mobile app development services, including
              expert business analysis, design and development of your mobile
              application from idea to launch, integrating the new product into
              your infrastructure, and providing further optimization and
              scale-up on demand.
            </p>
          </div>
        </div>
      </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <ul
                  className="font-semibold list-disc pl-5 space-y-2"
                  style={{ color: "#fff" }}
                >
                  <li>800+ Mobile Apps Delivered</li>
                  <li>200+ Team Strength</li>
                  <li>User-Friendly Interface</li>
                </ul>
                <ul
                  className="font-semibold list-disc pl-5 space-y-2"
                  style={{ color: "#fff" }}
                >
                  <li>400 Happy Clients</li>
                  <li>95% Repeat Business</li>
                  <li>Quality Service UX</li>
                </ul>
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

            <ul className="text-lg sm:text-xl list-none space-y-3">
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
                <li
                  key={index}
                  className="flex gap-3 items-start"
                  style={{ color: "rgba(255,255,255,.72)" }}
                >
                  <FaDotCircle
                    style={{ color: "#2dd4bf", marginTop: "4px", flexShrink: 0 }}
                  />
                  <span>{item}</span>
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
      <section className="service-section py-20" style={{ background: "#f8faff" }}>
        <div className="flex justify-center px-5">
          <div className="w-full lg:w-8/12 text-center">
            <span
              className="text-3xl md:text-4xl xl:text-5xl font-bold uppercase"
              style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Services
            </span>
            <h2 className="text-base sm:text-lg md:text-xl mt-4 mb-8 text-gray-500">
              We think big and have hands in all leading technology platforms to
              provide you wide array of services.
            </h2>
          </div>
        </div>

        <div className="grid gap-8 px-5 sm:px-10 lg:px-32 grid-cols-1 md:grid-cols-2 my-10">
          {[
            {
              img: service1,
              title: "IOS App Development",
              desc: "We provides cutting-edge mobile app development services to turn your dreams of a business app into reality. We have a proficient team for custom iOS app development.",
              cardStyle: {
                background: "rgba(45,212,191,.06)",
                border: "1px solid rgba(45,212,191,.20)",
              },
            },
            {
              img: service2,
              title: "Android App Development",
              desc: "Powering 2 Billion mobile devices across the globe, Android inevitably stands out as one of the most sought-after platforms for mobile app development.",
              cardStyle: {
                background: "rgba(99,102,241,.06)",
                border: "1px solid rgba(99,102,241,.20)",
              },
            },
            {
              img: service3,
              title: "Cross Platform App Development",
              desc: "Need an app for your business that can run seamlessly across Android and iPhone yet limited by budget constraints?",
              cardStyle: {
                background: "rgba(14,165,233,.06)",
                border: "1px solid rgba(14,165,233,.20)",
              },
            },
            {
              img: service4,
              title: "Mobile App Testing",
              desc: "We at Future IT Touch Pvt. Ltd. Technologies provide web development solutions to clients. We happen to be a privately managed software company.",
              cardStyle: {
                background: "rgba(168,85,247,.06)",
                border: "1px solid rgba(168,85,247,.20)",
              },
            },
          ].map((service, idx) => (
            <div key={idx} className="w-full mb-8 md:mb-0">
              <div
                className="flex max-sm:block rounded-xl shadow-lg py-7 px-5 gap-3"
                style={service.cardStyle}
              >
                <div className="w-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={200}
                    height={200}
                    className="max-sm:mx-auto max-sm:mb-4"
                  />
                </div>
                <div>
                  <h4
                    className="text-2xl font-bold mb-3"
                    style={{
                      color: "#111827",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {service.title}
                  </h4>
                  <span className="text-lg max-sm:text-justify text-gray-500">
                    {service.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hire a Dedicated Developer bar */}
        <div
          className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-16 px-5 py-10 mx-5 md:mx-12 xl:mx-28 rounded-2xl"
          style={{
            background:
              "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)",
          }}
        >
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left"
            style={{ color: "#fff" }}
          >
            Hire a{" "}
            <span className="font-bold">Dedicated Developer</span>
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
      </section>

      <ChooseFuture />

      <GetNewInsight />
    </>
  );
};

export default MobileApp;
