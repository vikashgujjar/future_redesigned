import React from "react";
import {
  FaMobileAlt, FaPaintBrush, FaCloud, FaBug, FaRocket, FaTools,
  FaLaptopCode, FaCogs, FaLock, FaCheckCircle,
  FaLayerGroup, FaStar, FaHeadset, FaCode, FaSyncAlt, FaBolt,
} from "react-icons/fa";
import { SiIonic } from "react-icons/si";
import ionicImg from "../Assets/ionic.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const Ionic = () => (
  <CommonTechPage
    banner={{
      bgImage: "/Assets/stock/photo-1526925539332-aa3b66e35444.webp",
      image: ionicImg,
      category: "Hybrid App Development",
      breadcrumb: "Ionic · Capacitor · Hybrid",
      title: "Ionic · Capacitor · Hybrid",
      tagline:
        "Build fast, secure, and feature-rich hybrid applications for Android, iOS, and web from a single codebase — delivering native-like performance at a fraction of the cost and time.",
    }}

    intro={{
      badge: "Future IT Touch · Ionic Experts",
      heading: "Build Cross-Platform Hybrid Apps with",
      highlight: "Ionic & Capacitor",
      paras: [
        "At Future IT Touch, we specialize in building cross-platform applications using Ionic — a powerful hybrid framework that delivers native-like experiences across Android, iOS, and the web from a single shared codebase, reducing both development time and cost.",
        "Our Ionic developers craft modern, responsive, and feature-rich apps with smooth animations, secure integrations, and clean architecture. From startups launching MVPs to global enterprises scaling complex platforms, we deliver hybrid solutions that combine quality with efficiency.",
        "Whether you need a custom hybrid app, enterprise-grade mobile solution, or complete Play Store and App Store deployment, we ensure flawless performance, advanced security, and a consistent user experience across every platform your users are on.",
      ],
      highlights: [
        "Single Ionic codebase for Android, iOS & web — faster delivery at lower cost",
        "Capacitor & Cordova plugins for native device features like GPS, camera & push notifications",
        "RESTful & GraphQL API integration with Firebase, AWS & third-party cloud services",
        "Full-cycle deployment on App Store & Play Store with ASO and 24/7 post-launch support",
      ],
      stats: [
        { num: "200+", label: "Ionic Apps Delivered",        desc: "Hybrid apps delivered across finance, healthcare, logistics, and retail.",    icon: <SiIonic /> },
        { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Hybrid Dev Expertise",  desc: `${YEARS_EXPERIENCE_DISPLAY} years building scalable Ionic and Capacitor hybrid solutions.`,      icon: <FaLayerGroup /> },
        { num: "250+", label: "Global Clients Served",       desc: "Trusted by 250+ clients worldwide for reliable Ionic app development.",        icon: <FaStar /> },
      ],
    }}

    services={[
      {
        icon: <SiIonic />,
        title: "Custom Ionic App Development",
        desc: "High-performance cross-platform mobile applications using Ionic with Angular, React, or Vue — secure, responsive, and built for Android, iOS, and web with scalable hybrid architecture.",
        points: [
          "Android, iOS & web from single codebase",
          "Ionic + Angular / React / Vue",
          "Native-like hybrid performance",
          "Scalable modular architecture",
        ],
      },
      {
        icon: <FaPaintBrush />,
        title: "Cross-Platform UI/UX Design",
        desc: "Clean, interactive, and adaptive interfaces using Ionic's rich UI components — with smooth animations, touch gestures, Material Design, and iOS Human Interface Guidelines.",
        points: [
          "Ionic pre-built UI components",
          "Material Design & iOS HIG",
          "Animations & touch gestures",
          "Responsive multi-device layouts",
        ],
      },
      {
        icon: <FaCloud />,
        title: "API & Backend Integration",
        desc: "Connecting Ionic apps with secure backends via RESTful or GraphQL APIs — real-time sockets, push notifications, Firebase, AWS, and third-party cloud service integrations.",
        points: [
          "REST & GraphQL API integration",
          "Firebase & AWS connectivity",
          "Real-time push notifications",
          "Secure auth & data encryption",
        ],
      },
      {
        icon: <FaBug />,
        title: "Ionic Testing & Quality Assurance",
        desc: "Comprehensive unit, integration, and end-to-end testing with automated CI/CD workflows — cross-platform testing across Android, iOS, and web browsers for optimized, reliable releases.",
        points: [
          "Unit, integration & E2E testing",
          "Automated CI/CD pipelines",
          "Cross-platform device testing",
          "Performance & UX benchmarking",
        ],
      },
      {
        icon: <FaRocket />,
        title: "App Deployment & Optimization",
        desc: "Full deployment management for Google Play, Apple App Store, and web — ASO, bundle optimization, analytics tracking, and compliance with all store and OS guidelines.",
        points: [
          "Play Store & App Store deployment",
          "ASO for visibility & downloads",
          "Bundle size & load time optimization",
          "Store compliance & OS compatibility",
        ],
      },
      {
        icon: <FaTools />,
        title: "Maintenance & Post-Launch Support",
        desc: "Continuous updates, feature upgrades, and bug fixes post-deployment — with real-time analytics, crash reporting, and 24/7 technical support for long-term app stability.",
        points: [
          "24/7 technical support",
          "Feature upgrades & bug fixes",
          "Analytics & crash monitoring",
          "Version compatibility updates",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirement Analysis & Planning",  desc: "Understanding your business needs and defining a custom Ionic app development strategy that aligns with your goals, audience, and target platforms." },
      { icon: <FaPaintBrush />,  title: "Wireframing & UI/UX Design",       desc: "Building interactive prototypes and layouts using Ionic's powerful UI toolkit — ensuring a smooth, intuitive user journey across all device sizes." },
      { icon: <FaCode />,        title: "Ionic App Development",            desc: "Using Ionic with Angular, React, or Vue to build fast, scalable hybrid apps with reusable components and near-native performance across platforms." },
      { icon: <FaCloud />,       title: "Backend & API Integration",        desc: "Integrating secure APIs and cloud backends to enable real-time synchronization, data management, and seamless third-party service connectivity." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",      desc: "Rigorous feature testing ensuring seamless performance, responsiveness, and cross-platform consistency on Android, iOS, and web environments." },
      { icon: <FaRocket />,      title: "App Store Deployment",             desc: "Handling the complete deployment process for both Play Store and App Store — compliance validation, metadata setup, and ASO for maximum reach." },
      { icon: <FaSyncAlt />,     title: "Post-Launch Optimization",         desc: "Ongoing monitoring, analytics review, and updates after launch to continuously enhance user engagement, performance, and feature completeness." },
    ]}

    features={[
      { icon: <FaMobileAlt />,  title: "Hybrid Cross-Platform Development",   desc: "High-performing Ionic apps that run efficiently across Android, iOS, and web from a single shared codebase — delivering native quality at lower cost." },
      { icon: <FaLaptopCode />, title: "Responsive UI Components",             desc: "Ionic's rich pre-built component library enables elegant, fast-loading interfaces that adapt flawlessly to any device, screen size, or orientation." },
      { icon: <FaCogs />,       title: "Custom Plugin & Feature Development",  desc: "Native device features like GPS, camera, biometrics, and push notifications integrated seamlessly through Capacitor and Cordova plugins." },
      { icon: <FaLock />,       title: "Advanced Security Solutions",          desc: "Secure APIs, token-based authentication, and data encryption at every layer to protect your Ionic app, transactions, and users' data." },
      { icon: <FaRocket />,     title: "Performance & Store Optimization",     desc: "Optimized app performance and store visibility through effective ASO strategies, reduced bundle sizes, and continuous performance benchmarking." },
      { icon: <FaTools />,      title: "Continuous Maintenance & Support",     desc: "Regular updates, bug fixes, OS compatibility patches, and feature improvements to ensure your Ionic app stays ahead of the competition." },
    ]}

    stack={[
      { name: "Ionic 7" },
      { name: "Capacitor 5" },
      { name: "Angular 17" },
      { name: "React 18" },
      { name: "Vue 3" },
      { name: "TypeScript" },
      { name: "Cordova" },
      { name: "Firebase" },
      { name: "Node.js" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "AWS" },
      { name: "Jasmine / Karma" },
      { name: "GitHub Actions" },
      { name: "Fastlane" },
      { name: "Docker" },
    ]}

    slider={[
      { count: "200+", title: "Ionic Apps Delivered",              desc: "200+ Ionic apps delivered across finance, healthcare, logistics, and retail — each known for hybrid flexibility, native-like performance, and scalable architecture.",   image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Hybrid Dev Expertise",     desc: `${YEARS_EXPERIENCE_DISPLAY} years in hybrid app development with deep expertise in Ionic, Angular, and Capacitor — delivering end-to-end solutions from MVPs to enterprise platforms.`,   image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "250+", title: "Satisfied Global Clients",          desc: "250+ businesses worldwide trust us for reliable, user-centric Ionic apps — from emerging brands to complex enterprise platforms delivering measurable digital value.",    image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "Deployment Success Rate",           desc: "99% deployment success rate maintained through structured QA, performance optimization, and full compliance with Android and iOS app store guidelines.",                  image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Dedicated Technical Support",       desc: "Round-the-clock support ensuring your Ionic app stays stable, secure, and up-to-date — from monitoring and bug fixing to compatibility patches and new feature rollouts.", image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Ionic App Development Services",
      items: [
        { title: "Why choose Ionic for app development?",         description: "Ionic enables building cross-platform apps using a single codebase, providing native-like performance and faster time to market across Android, iOS, and the web." },
        { title: "Can you develop enterprise-grade Ionic apps?",  description: "Yes, we develop scalable Ionic applications that integrate with enterprise systems, CRMs, and third-party APIs with role-based access and offline capabilities." },
        { title: "Do you design custom UI/UX for Ionic apps?",    description: "Absolutely. We design responsive, visually appealing, and intuitive interfaces using Ionic's rich component library and modern design principles." },
        { title: "Can you migrate existing apps to Ionic?",       description: "Yes, we can migrate your native or hybrid applications to Ionic for better performance, maintainability, and a unified cross-platform codebase." },
        { title: "Do you offer post-launch support?",             description: "We provide long-term maintenance, updates, and feature enhancements to keep your Ionic app optimized, secure, and compatible with the latest OS versions." },
        { title: "Can Ionic apps integrate with native features?", description: "Yes, Ionic allows seamless integration with device capabilities like GPS, camera, and push notifications via Capacitor and Cordova plugins." },
        { title: "Is Ionic secure for business applications?",    description: "Yes, we follow advanced encryption, secure storage, and authentication methods to protect user data, transactions, and app integrity across all platforms." },
        { title: "Do you handle app store deployment?",           description: "Yes, we manage complete deployment for both Android and iOS platforms, ensuring store compliance, ASO optimization, and a smooth go-live experience." },
        { title: "Can Ionic apps run on web and desktop?",        description: "Yes, Ionic supports PWAs and desktop builds, allowing your app to run across mobile, web browsers, and desktop operating systems from one codebase." },
        { title: "Which industries use Ionic apps?",              description: "We build Ionic apps for healthcare, travel, fintech, retail, logistics, and education industries — with domain-specific integrations built in." },
      ],
    }}
  />
);

export default Ionic;
