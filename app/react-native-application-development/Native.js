import React from "react";
import {
  FaReact, FaMobileAlt, FaPaintBrush, FaCloud, FaBug, FaRocket,
  FaTools, FaLaptopCode, FaCogs, FaLock, FaCheckCircle,
  FaLayerGroup, FaStar, FaHeadset, FaCode, FaSyncAlt,
} from "react-icons/fa";
import rnImg from "../Assets/reactnative.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const FALLBACK_CONTENT = {
  banner: {
    bgImage: "/Assets/stock/photo-1551650975-87deedd944c3.webp",
    image: rnImg,
    category: "Mobile Development",
    breadcrumb: "React Native · iOS · Android",
    title: "React Native · iOS · Android",
    tagline:
      "Build fast, scalable, and native-quality mobile applications for iOS and Android from a single JavaScript codebase — powered by Meta's React Native framework for maximum performance and reach.",
  },

  intro: {
    badge: "Future IT Touch · React Native Experts",
    heading: "Build Cross-Platform Mobile Apps with",
    highlight: "React Native",
    paras: [
      "At Future IT Touch, we specialize in building stunning cross-platform mobile applications using React Native — a powerful framework by Meta for developing native-quality apps with a single, efficient codebase that runs flawlessly on both iOS and Android.",
      "Our React Native developers deliver lightning-fast performance, smooth animations, and a native-like user experience. Whether you're a startup launching an MVP or an enterprise scaling a complex platform, we craft mobile solutions that blend speed, functionality, and elegant design.",
      "From real-time API integrations to advanced state management and secure authentication, we ensure every React Native app we build is production-ready, maintainable, and optimized for long-term growth across devices and operating systems.",
    ],
    highlights: [
      "Single React Native codebase for iOS & Android — faster delivery, lower cost",
      "Reusable component architecture for consistent, high-performance cross-platform UX",
      "RESTful & GraphQL API integration with Firebase, Stripe, and social logins",
      "App Store & Play Store deployment with ASO, CI/CD pipelines, and 24/7 support",
    ],
    stats: [
      { num: "200+", label: "Apps Delivered",          desc: "React Native apps shipped across healthcare, eCommerce, travel, and finance.",  icon: <FaReact /> },
      { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years RN Expertise",      desc: `${YEARS_EXPERIENCE_DISPLAY} years delivering efficient, scalable React Native mobile apps.`,      icon: <FaLayerGroup /> },
      { num: "250+", label: "Global Clients Served",   desc: "Trusted by 250+ clients worldwide for cross-platform mobile excellence.",        icon: <FaStar /> },
    ],
  },

  services: [
    {
      icon: <FaReact />,
      title: "Custom React Native App Development",
      desc: "High-performance, cross-platform mobile apps using React Native with reusable component architecture, modular structure, and native integrations for iOS and Android.",
      points: [
        "iOS & Android from single codebase",
        "Reusable component architecture",
        "Native module integrations",
        "Scalable modular app structure",
      ],
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design for React Native",
      desc: "Intuitive, visually appealing interfaces with smooth transitions, gesture-based navigation, and consistent pixel-perfect layouts across all screen sizes and orientations.",
      points: [
        "Responsive cross-platform layouts",
        "Smooth animations & gestures",
        "Accessible, branded UI components",
        "Pixel-perfect design implementation",
      ],
    },
    {
      icon: <FaCloud />,
      title: "API & Backend Integration",
      desc: "Connecting React Native apps with powerful backends via RESTful or GraphQL APIs — real-time data, push notifications, Firebase, Stripe, Google Maps, and social logins.",
      points: [
        "REST & GraphQL API integration",
        "Firebase real-time connectivity",
        "Stripe & payment gateway setup",
        "Secure token-based authentication",
      ],
    },
    {
      icon: <FaBug />,
      title: "Testing & Quality Assurance",
      desc: "Comprehensive unit, integration, and UI testing using Jest and Detox with CI/CD pipelines and real-device testing across Android and iOS for crash-free releases.",
      points: [
        "Jest & Detox testing frameworks",
        "CI/CD automated test pipelines",
        "Multi-device real-device testing",
        "Performance & stability QA",
      ],
    },
    {
      icon: <FaRocket />,
      title: "App Store & Play Store Deployment",
      desc: "End-to-end deployment on App Store and Google Play — ASO optimization, compliance review, crash reporting, and analytics tracking for maximum post-launch visibility.",
      points: [
        "App Store & Play Store submission",
        "ASO for organic downloads",
        "Crash reporting & analytics setup",
        "Apple & Google compliance review",
      ],
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Ongoing Support",
      desc: "Continuous updates, version upgrades, and performance improvements — with real-time analytics monitoring, OS compatibility fixes, and 24/7 technical support post-launch.",
      points: [
        "24/7 technical assistance",
        "OS & RN version compatibility",
        "Speed & resource optimization",
        "Bug fixes & feature enhancements",
      ],
    },
  ],

  process: [
    { icon: <FaCheckCircle />, title: "Project Discovery & Planning",       desc: "Analyzing your business goals, target audience, and key features to plan a scalable and effective React Native app strategy aligned with your vision." },
    { icon: <FaPaintBrush />,  title: "Wireframing & UI/UX Design",         desc: "Creating user-friendly wireframes and interactive prototypes for engaging, visually consistent experiences across both Android and iOS platforms." },
    { icon: <FaCode />,        title: "React Native App Development",       desc: "Building high-quality React Native applications using reusable components and optimized JavaScript code for speed, maintainability, and cross-platform consistency." },
    { icon: <FaCloud />,       title: "API & Database Integration",         desc: "Integrating the app with robust APIs and databases for real-time data exchange, secure authentication, and seamless backend connectivity." },
    { icon: <FaBug />,         title: "Testing & Quality Assurance",        desc: "End-to-end testing ensuring the app runs seamlessly on all platforms — zero crashes, high performance, and excellent usability on every device." },
    { icon: <FaRocket />,      title: "App Store & Play Store Deployment",  desc: "Handling publishing on both stores with compliance validation, optimized metadata, and ASO setup for maximum reach and visibility." },
    { icon: <FaSyncAlt />,     title: "Post-Launch Monitoring & Support",   desc: "Monitoring app stability, user analytics, and engagement after release — delivering timely updates, fixes, and new feature improvements continuously." },
  ],

  features: [
    { icon: <FaMobileAlt />,  title: "Cross-Platform Development",          desc: "Robust and scalable React Native applications that work flawlessly across iOS and Android with native-like performance from a single shared codebase." },
    { icon: <FaLaptopCode />, title: "Reusable Component Architecture",      desc: "Efficient, maintainable UIs using reusable React components for faster development cycles, consistent styling, and a superior cross-platform user experience." },
    { icon: <FaCogs />,       title: "Custom App Features",                  desc: "Geolocation, push notifications, in-app chat, offline sync, and third-party API integrations — every feature tailored precisely to your business requirements." },
    { icon: <FaLock />,       title: "Enhanced Security",                    desc: "Encryption, secure storage, and robust authentication mechanisms to safeguard user data, transactions, and API communications across all platforms." },
    { icon: <FaRocket />,     title: "App Store Optimization",               desc: "Optimized app listings, performance benchmarks, and analytics tracking to increase your app's ranking, engagement, and organic downloads on both stores." },
    { icon: <FaTools />,      title: "Continuous Maintenance & Support",     desc: "Long-term support with updates, OS compatibility fixes, performance improvements, and enhancements to keep your app running flawlessly after launch." },
  ],

  stack: [
    { name: "React Native" },
    { name: "JavaScript (ES6+)" },
    { name: "TypeScript" },
    { name: "Redux / Redux Toolkit" },
    { name: "React Navigation" },
    { name: "Expo" },
    { name: "Firebase" },
    { name: "Node.js" },
    { name: "GraphQL" },
    { name: "REST APIs" },
    { name: "Jest / Detox" },
    { name: "Stripe SDK" },
    { name: "Google Maps SDK" },
    { name: "Fastlane" },
    { name: "GitHub Actions" },
    { name: "Docker" },
  ],

  slider: [
    { count: "200+", title: "React Native Apps Delivered",     desc: "200+ React Native apps built for healthcare, eCommerce, travel, and finance — each crafted for speed, seamless navigation, and consistent cross-platform UX.",          image: "/Assets/seerviceSlider/slide1.webp" },
    { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of React Native Expertise", desc: `${YEARS_EXPERIENCE_DISPLAY} years specializing in React Native — delivering efficient, reliable mobile apps with Redux, Expo, and modern cross-platform development practices.`,          image: "/Assets/seerviceSlider/slide2.webp" },
    { count: "250+", title: "Global Clients Served",           desc: "250+ clients worldwide — from fast-growing startups to established enterprises — trust us for React Native solutions that meet their digital growth objectives.",          image: "/Assets/seerviceSlider/slide3.webp" },
    { count: "98%",  title: "Deployment Success Rate",         desc: "98% successful publishing rate maintained by following app store guidelines and rigorous pre-launch testing for stability and compliance across both platforms.",          image: "/Assets/seerviceSlider/slide4.webp" },
    { count: "24/7", title: "Dedicated Technical Support",     desc: "React Native experts available 24/7 for support, ensuring your mobile app stays updated, secure, and compatible with all latest OS versions and devices.",             image: "/Assets/seerviceSlider/slide5.webp" },
  ],

  faq: {
    title: "React Native App Development",
    items: [
      { title: "Why choose React Native for app development?",          description: "React Native allows building cross-platform mobile apps using a single codebase, ensuring faster delivery and native-like performance on both iOS and Android." },
      { title: "Can you build enterprise-grade React Native apps?",     description: "Yes, we specialize in building secure, scalable React Native apps with backend integrations for CRMs, APIs, and enterprise systems." },
      { title: "Do you create custom UI designs for React Native?",     description: "Absolutely. We design smooth, interactive, and modern UI layouts tailored to your brand for an excellent user experience on all platforms." },
      { title: "Can you migrate a native app to React Native?",         description: "Yes, our developers can migrate your existing Android or iOS apps to React Native for improved maintainability and faster cross-platform updates." },
      { title: "Do you provide post-launch support?",                   description: "We offer continuous updates, maintenance, and optimization to ensure your React Native app performs efficiently post-deployment." },
      { title: "Can you integrate APIs in React Native apps?",          description: "Yes, we integrate third-party APIs, analytics, payment gateways, and cloud services for enhanced functionality and real-time data sync." },
      { title: "How secure are React Native apps?",                     description: "We follow best security practices like data encryption, tokenization, and secure storage to keep your React Native app data fully protected." },
      { title: "Do you handle app store publishing?",                   description: "Yes, we take care of the complete submission process for both Google Play and Apple App Store, ensuring compliance and maximum visibility." },
      { title: "Can you develop tablet or wearable apps?",              description: "Yes, we build React Native apps optimized for tablets, wearables, and other smart devices to maximize your app's reach and engagement." },
      { title: "Which industries do you serve?",                        description: "We serve healthcare, fintech, travel, eCommerce, education, and entertainment industries with tailored React Native mobile solutions." },
    ],
  },
};

const Native = ({ cms } = {}) => {
  const content = cms
    ? {
        banner: { ...FALLBACK_CONTENT.banner, ...cms.banner, bgImage: cms.banner.bgImage || FALLBACK_CONTENT.banner.bgImage },
        intro: { ...FALLBACK_CONTENT.intro, ...cms.intro },
        services: cms.services || FALLBACK_CONTENT.services,
        process: cms.process || FALLBACK_CONTENT.process,
        features: cms.features,
        stack: cms.stack || FALLBACK_CONTENT.stack,
        slider: cms.slider,
        faq: { title: FALLBACK_CONTENT.faq.title, items: cms.faq.items },
      }
    : FALLBACK_CONTENT;

  return <CommonTechPage {...content} />;
};

export default Native;
