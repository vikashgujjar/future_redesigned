import React from "react";

import Image from "next/image";
import gm from "../Assets/gm.webp";
import d1 from "../Assets/d1.webp";
import d2 from "../Assets/portfolio-img-6.webp";
import { FaChevronRight } from "react-icons/fa";
import { businessData } from "../common/Service_comp";
import GetNewInsight from "../components/GetNewInsight";
import { FaCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

import phone from "../Assets/ec.webp";
import app from "../Assets/vjs.webp";
import Link from "next/link";
import CustomSlider from "../components/CustomSlider";
import BusinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
const CommonServiceUI = () => {
  const technolgyData = [
    {
      title: "ReactJS Frontend Development",
      img: "/images/HighPerformance/reporting.svg",
      list: [
        "Building responsive and interactive user interfaces with ReactJS.",
        "Implementing reusable components for faster development.",
        "Ensuring pixel-perfect designs with modern CSS frameworks.",
        "Optimizing front-end performance for seamless user experience.",
      ],
    },
    {
      title: "ReactJS Performance Optimization",
      img: "/images/HighPerformance/reporting.svg",
      list: [
        "Analyzing and improving ReactJS app rendering speed.",
        "Code-splitting and lazy loading for faster load times.",
        "Minimizing bundle size using modern build tools.",
        "Monitoring performance with React Profiler and analytics tools.",
      ],
    },
    {
      title: "ReactJS State Management",
      img: "/images/HighPerformance/reporting.svg",
      list: [
        "Integrating Redux, MobX, or Context API for efficient state management.",
        "Designing scalable state architecture for complex applications.",
        "Managing global and local state effectively.",
        "Ensuring smooth data flow across multiple components.",
      ],
    },
    {
      title: "ReactJS Integration Services",
      img: "/images/HighPerformance/reporting.svg",
      list: [
        "Connecting ReactJS frontend with RESTful and GraphQL APIs.",
        "Integrating third-party libraries and services seamlessly.",
        "Ensuring secure communication with backend services.",
        "Automating repetitive tasks with custom React hooks.",
      ],
    },
    {
      title: "ReactJS Testing & Quality Assurance",
      img: "/images/HighPerformance/reporting.svg",
      list: [
        "Implementing unit testing using Jest and React Testing Library.",
        "Performing end-to-end tests with Cypress.",
        "Debugging and fixing issues to maintain app stability.",
        "Ensuring code quality with linting and code reviews.",
      ],
    },
    {
      title: "ReactJS Maintenance & Support",
      img: "/images/HighPerformance/reporting.svg",
      list: [
        "Providing ongoing updates and bug fixes for ReactJS apps.",
        "Enhancing application features based on user feedback.",
        "Optimizing apps for latest browser and device compatibility.",
        "Supporting long-term scalability and performance improvements.",
      ],
    },
  ];

  const steps = [
    {
      title: "Understanding Your Vision",
      description:
        "First things first, we sit down (virtually or in-person) to understand your vision. What's your dream for this web app? Who’s it for? What problems does it solve? This helps us align our development process with your goals.",
      icon: "/images/HighPerformance/keyword-research.svg",
    },
    {
      title: "Planning and Strategy",
      description:
        "Our team focuses on creating intuitive, visually appealing, and user-friendly interfaces. By leveraging research-driven design principles and user behavior insights, we deliver experiences that engage visitors, reduce friction, and increase conversion rates.",
      icon: "/images/HighPerformance/lead-focused.svg",
    },
    {
      title: "Designing the User Experience",
      description:
        "Now, the fun part – design! We focus on creating an intuitive, engaging, and user-friendly interface. Think of this as building the front door of your app – it needs to be welcoming and easy to navigate.",
      icon: "/images/HighPerformance/on-page.svg",
    },
    {
      title: "Component-Based Development",
      description:
        "ReactJS is all about components. We build your web app using small, reusable components. This not only makes development faster but also ensures that your app is easy to maintain and update. Imagine building a Lego set – each piece is essential and fits perfectly with the others..",
      icon: "/images/HighPerformance/quality SEO.svg",
    },
    {
      title: "State Management with Redux",
      description:
        "To keep everything running smoothly, we use Redux for state management. This helps us manage the web app’s data flow efficiently, ensuring that all components interact seamlessly without any hiccups.",
      icon: "/images/HighPerformance/reporting.svg",
    },
    {
      title: "API Integration",
      description:
        "Your app needs data, and that's where APIs come in. We integrate robust APIs to ensure your web app can communicate with servers, databases, and other services effortlessly. It's like giving your app the ability to talk to the world!",
      icon: "/images/HighPerformance/technical-SEO.svg",
    },
    {
      title: "Performance Optimization",
      description:
        "A high-performing app is our ultimate goal. We optimize everything from load times to responsiveness. Techniques like lazy loading, code splitting, and efficient rendering ensure your app runs like a well-oiled machine.",
      icon: "/images/HighPerformance/technical-SEO.svg",
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "No stone is left unturned here. We rigorously test your web app to catch any bugs or issues before launch. Automated and manual testing ensures that your app is reliable and ready for prime time.",
      icon: "/images/HighPerformance/technical-SEO.svg",
    },
    {
      title: "Deployment and Launch",
      description:
        "The big day! We deploy your web app using industry-leading platforms, ensuring a smooth launch. But we don't just launch and leave – we're here to monitor performance and make sure everything runs perfectly.",
      icon: "/images/HighPerformance/technical-SEO.svg",
    },
    {
      title: "Continuous Improvement and Support",
      description:
        "The digital world is always evolving, and so should your web app. We provide ongoing support and updates to keep your app fresh, secure, and ahead of the curve.",
      icon: "/images/HighPerformance/technical-SEO.svg",
    },
  ];

  const upScale = [
    {
      icon: <FaReact />,
      title: "Reusable Components for Scalability",
      desc: "ReactJS enables Softtrix developers to create modular and reusable components, encapsulating both UI and behavior. This component-based approach fosters scalability as components can be reused across different parts of the application, promoting consistency in design and functionality while reducing development time and effort.",
    },
    {
      icon: <FaReact />,
      title: "Reusable Components for Scalability",
      desc: "ReactJS enables Softtrix developers to create modular and reusable components, encapsulating both UI and behavior. This component-based approach fosters scalability as components can be reused across different parts of the application, promoting consistency in design and functionality while reducing development time and effort.",
    },
    {
      icon: <FaReact />,
      title: "Reusable Components for Scalability",
      desc: "ReactJS enables Softtrix developers to create modular and reusable components, encapsulating both UI and behavior. This component-based approach fosters scalability as components can be reused across different parts of the application, promoting consistency in design and functionality while reducing development time and effort.",
    },
    {
      icon: <FaReact />,
      title: "Reusable Components for Scalability",
      desc: "ReactJS enables Softtrix developers to create modular and reusable components, encapsulating both UI and behavior. This component-based approach fosters scalability as components can be reused across different parts of the application, promoting consistency in design and functionality while reducing development time and effort.",
    },
    {
      icon: <FaReact />,
      title: "Reusable Components for Scalability",
      desc: "ReactJS enables Softtrix developers to create modular and reusable components, encapsulating both UI and behavior. This component-based approach fosters scalability as components can be reused across different parts of the application, promoting consistency in design and functionality while reducing development time and effort.",
    },
    {
      icon: <FaReact />,
      title: "Reusable Components for Scalability",
      desc: "ReactJS enables Softtrix developers to create modular and reusable components, encapsulating both UI and behavior. This component-based approach fosters scalability as components can be reused across different parts of the application, promoting consistency in design and functionality while reducing development time and effort.",
    },
  ];

  
const cards = [
  {
    count: "100+",
    title: "Applications Maintained",
    desc: "We have successfully maintained over 100 web applications, ensuring optimal performance, smooth functionality, and timely updates. Each application is carefully monitored to provide seamless experiences for your users.",
      image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Expertise",
    desc: "With over 10 years of experience in web application maintenance and support, our team brings deep technical knowledge to every project. We ensure best practices, modern technologies, and effective maintenance strategies are applied.",
      image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Clients Supported Globally",
    desc: "Trusted by over 500 clients worldwide, we provide reliable maintenance and support for diverse web applications. Our experience spans multiple industries, ensuring your app stays robust and fully functional across all platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Satisfaction Rate",
    desc: "Our client-centric approach has earned a 98% satisfaction rate. We focus on delivering proactive maintenance, timely updates, and responsive support, ensuring every application operates smoothly and meets client expectations.",
      image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Support",
    desc: "We provide round-the-clock support for all web applications. Our dedicated team resolves technical issues quickly, optimizes performance, and ensures your applications remain reliable and accessible at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
  },
];

  return (
    <>
      <CommonBanner
        img={app}
        title="Node JS, React JS, Next Js Development"
        desc=" Node JS is considered as the perfect solution for developing
                data-intesive, real-time web and mobile apps. Based on
                JavaScript, Node JS can be used at the backend, making
                development simpler and easier. As a leading Node JS development
                company in India, we utilise this framework to develop high
                traffic-driven real-time applications, network applications and
                mobile applications of all sizes and scale. Avail our
                results-driven Node JS development services at a competitive
                rate."
      />

      {/* Dynamic & Scalable Web Apps  */}

      <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative ">
          <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Get Dynamic & Scalable Web Apps with{" "}
            <span className="text-indigo-600">
              ReactJS Development Services
            </span>{" "}
            🚀
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Looking for a ReactJS development partner who excels in crafting
            uniquely dynamic, reliable, and scalable web applications? At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch
            </span>
            , this is our specialty. Whether you need a single-page application
            or a robust enterprise solution, our team leverages virtual DOM,
            reusable components, JSX, and server-side rendering to deliver
            outstanding results.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            As a leading ReactJS development company, we’re known for building
            highly scalable and lightweight frontends for mobile, web, and
            server-rendered applications. Our dedicated ReactJS developers
            infuse simplicity, scalability, and speed into modern
            business-driven apps — driving growth, improving online presence,
            and enabling digital transformation.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Partner with{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch
            </span>{" "}
            to elevate your digital presence and experience how we blend
            innovation with expertise to deliver web solutions that exceed
            expectations.
          </p>

          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 text-white font-medium bg-indigo-600 rounded-xl shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Let’s Discuss Your Idea
            </a>
          </div>
        </div>
      </div>

      {/* High-Performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 xl:py-12">
        <div className="text-center space-y-5">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Future IT Touch's High-Performance ReactJS Development Services
          </h4>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Delivering scalable, dynamic, and innovative web applications that
            combine clean code with seamless user experiences — tailored to
            drive your business forward.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {technolgyData.map((elm, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl  border border-gray-300"
            >
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {elm.title}
                </h4>
                <Image
                  src={elm.img}
                  width={50}
                  height={50}
                  alt={elm.title}
                  className="rounded  "
                />
              </div>

              <div className="mt-5 space-y-3 grid grid-cols-2 gap-y-3">
                {elm.list.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="text-blue-500 mt-1.5 min-w-[20px]" />
                    <p className="text-gray-700  font-semibold underline text-sm md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <a
            href="+917056937000"
            className="mt-10   px-6 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
          >
            i want speak with expert
          </a>
        </div>
      </div>

      {/* Approach We Follow */}

      <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        <div className="relative w-full lg:w-[55%] lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl overflow-hidden shadow-2xl  ">
            <img
              src="/images/appdevelopment/appbg.webp"
              alt="High Performance"
              className="w-full h-full absolute inset-0  rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
            />

            <div className=" relative z-10 h-full bg-gradient-to-t rounded-2xl from-black/70 via-black/40 to-transparent flex flex-col justify-start p-8">
              <div className="text-left capitalize leading-tight text-white space-y-4 font-bold">
                <h6 className="text-6xl lg:text-7xl">
                  <FaReact />
                </h6>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  ReactJS <br />
                  Development <br />
                  <span className="">Approach We Follow</span>
                </h2>
                <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
                  To achieve high{" "}
                  <span className="text-[#00ffe4]">
                    - performance web app for rapid growth 🚀
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[65%] grid grid-cols-1 gap-6">
          {steps.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 p-6 rounded-2xl border border-gray-200 shadow-md group hover:bg-[#0E395E] hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-gray-100 leading-relaxed text-justify transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <CustomSlider/> */}
      <CommonSlider cards={cards}/>

      {/* upscale your buiness  */}

      <div className="px-5 md:px-12 xl:px-28 bg-[#0a2548] py-10 md:py-14 lg:py-16 m-6 md:m-10 rounded-2xl">
  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold w-full lg:w-[85%] mx-auto leading-snug">
    Upscale Your Business With Custom ReactJS Development Services For Prolonged Growth
  </h4>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {upScale.map((elm, index) => (
      <div
        key={index}
        className="flex flex-col gap-y-4 text-white"
      >
        <span className="text-4xl text-indigo-400">{elm.icon}</span>
        <h5 className="text-xl md:text-2xl font-bold">{elm.title}</h5>
        <p className="text-sm md:text-base text-gray-100 leading-relaxed">
          {elm.desc}
        </p>
      </div>
    ))}
  </div>
</div>

      {/* faq  */}

      <CommonFaqs />

      <GetNewInsight />
      {/* <BusinessIdea /> */}
    </>
  );
};

export default CommonServiceUI;
