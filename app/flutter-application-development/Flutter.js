"use client";
import React from "react";
import {
  FaMobileAlt, FaPaintBrush, FaCloud, FaBug, FaRocket, FaTools,
  FaLaptopCode, FaCogs, FaLock, FaSync, FaCheckCircle,
  FaLayerGroup, FaStar, FaHeadset, FaCode,
} from "react-icons/fa";
import flutterImg from "../Assets/Flutter.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";

const FALLBACK_CONTENT = {
    banner: {
      bgImage: "/Assets/stock/photo-1607746882042-944635dfe10e.webp",
      image: flutterImg,
      category: "Cross-Platform Development",
      breadcrumb: "Flutter · Dart · Cross-Platform",
      title: "Flutter · Dart · Cross-Platform",
      tagline:
        "Build stunning, high-performance cross-platform applications for Android, iOS, web, and desktop from a single Dart codebase — faster delivery, lower cost, native-quality experience.",
    },

    intro: {
      badge: "Future IT Touch · Flutter Experts",
      heading: "Build Stunning Apps for Every Platform with",
      highlight: "Flutter & Dart",
      paras: [
        "Flutter by Google enables businesses to build beautiful, high-performance mobile, web, and desktop applications from a single Dart codebase — dramatically reducing development time and cost without compromising on native-quality user experiences.",
        "At Future IT Touch, our experienced Flutter developers combine deep framework expertise with strong UI/UX design skills to deliver cross-platform apps that look and feel native on every device your users carry.",
        `With ${YEARS_EXPERIENCE_DISPLAY} years of mobile development experience and 150+ Flutter apps delivered, we bring the expertise to take your app idea from concept to the app stores — with clean architecture, robust testing, and long-term maintenance support.`,
      ],
      highlights: [
        "Single Dart codebase for Android, iOS, web & desktop — reducing cost and time-to-market",
        "60fps smooth animations with Flutter's rich widget system for premium UX on every device",
        "Firebase, REST & GraphQL API integration with secure token-based authentication",
        "End-to-end App Store & Play Store deployment with CI/CD pipelines and ASO optimization",
      ],
      stats: [
        { num: "150+", label: "Flutter Apps Delivered",    desc: "High-quality Flutter apps across finance, healthcare, travel, and eCommerce.",  icon: <FaMobileAlt /> },
        { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Mobile Dev Expertise", desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering cross-platform Flutter and Dart development.`,         icon: <FaLayerGroup /> },
        { num: "200+", label: "Satisfied Global Clients",   desc: "Trusted by 200+ clients worldwide for scalable and visually stunning apps.",      icon: <FaStar /> },
      ],
    },

    services: [
      {
        icon: <FaMobileAlt />,
        title: "Custom Flutter App Development",
        desc: "High-performance, feature-rich mobile applications using Flutter and Dart — secure, responsive, and user-friendly with clean modular architectures for scalability and long-term maintainability.",
        points: [
          "Android & iOS from single codebase",
          "Clean modular Flutter architecture",
          "Native-quality performance",
          "Scalable enterprise solutions",
        ],
      },
      {
        icon: <FaPaintBrush />,
        title: "Cross-Platform UI/UX Design",
        desc: "Visually appealing, intuitive interfaces using Flutter's flexible widget system — with smooth animations, micro-interactions, and pixel-perfect Material and Cupertino layouts for every screen.",
        points: [
          "Material & Cupertino design systems",
          "Smooth animations & interactions",
          "Responsive layouts for all screen sizes",
          "Pixel-perfect branded UI components",
        ],
      },
      {
        icon: <FaCloud />,
        title: "API & Backend Integration",
        desc: "Flutter apps connected to powerful backends via RESTful and GraphQL APIs — real-time chat, push notifications, Firebase, Stripe payments, Google Maps, and social logins with encrypted communication.",
        points: [
          "REST & GraphQL API integration",
          "Firebase real-time features",
          "Stripe & payment gateways",
          "Secure OAuth2 & JWT authentication",
        ],
      },
      {
        icon: <FaBug />,
        title: "Flutter Testing & Quality Assurance",
        desc: "Comprehensive unit, widget, and integration testing with automated CI/CD pipelines and real-device testing across Android and iOS for crash-free, high-performance releases every time.",
        points: [
          "Unit, widget & integration testing",
          "CI/CD automated pipelines",
          "Multi-device real testing",
          "Performance benchmarking & QA",
        ],
      },
      {
        icon: <FaRocket />,
        title: "App Store & Play Store Deployment",
        desc: "End-to-end deployment on Google Play Store and Apple App Store — ASO optimization, store listing, compliance review, crash reporting setup, and analytics integration for post-launch insights.",
        points: [
          "Play Store & App Store submission",
          "ASO for organic discoverability",
          "Crash reporting & analytics setup",
          "Apple & Google compliance review",
        ],
      },
      {
        icon: <FaTools />,
        title: "Maintenance & Post-Launch Support",
        desc: "Continuous updates, feature enhancements, and bug fixes for all Flutter app versions — with 24/7 monitoring, OS compatibility updates, and proactive performance tuning long after launch.",
        points: [
          "24/7 monitoring & support",
          "OS & Flutter version compatibility",
          "Performance & battery optimization",
          "Feature rollouts & dependency upgrades",
        ],
      },
    ],

    process: [
      { icon: <FaCheckCircle />, title: "Requirements Analysis",          desc: "Understanding your business goals, target audience, and platform requirements to create a clear, realistic roadmap for your Flutter app development." },
      { icon: <FaPaintBrush />,  title: "UI/UX Design & Prototyping",     desc: "Designing intuitive wireframes and interactive prototypes with Flutter's design language — ensuring seamless usability and strong brand consistency across all platforms." },
      { icon: <FaCode />,        title: "Flutter App Development",        desc: "Writing clean, modular Dart code leveraging Flutter's rich widget system and state management tools (Riverpod, Bloc) for high-performance, maintainable applications." },
      { icon: <FaCloud />,       title: "API & Backend Integration",      desc: "Connecting the Flutter app with secure backend systems, RESTful or GraphQL APIs, Firebase, and third-party services for real-time functionality and data exchange." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",    desc: "Performing comprehensive unit, widget, and integration tests across Android and iOS devices — ensuring stability, performance, and a bug-free user experience at every level." },
      { icon: <FaRocket />,      title: "App Store & Play Store Launch",  desc: "Handling end-to-end deployment with store listing optimization, compliance checks, and metadata setup — ensuring smooth, rejection-free launches on both major app stores." },
      { icon: <FaSync />,        title: "Post-Launch Monitoring & Support", desc: "Continuous crash analytics, OS compatibility updates, performance improvements, and proactive feature development to keep your Flutter app evolving and performing flawlessly." },
    ],

    features: [
      { icon: <FaMobileAlt />,  title: "Cross-Platform Expertise",        desc: "Flutter apps that run seamlessly on Android, iOS, web, and desktop from a single codebase — reducing development cost while maintaining native-quality performance everywhere." },
      { icon: <FaLaptopCode />, title: "Widget-Based UI Design",           desc: "Dynamic, responsive UIs built with Flutter's rich widget library — ensuring exceptional, branded user experiences on every device, screen size, and operating system." },
      { icon: <FaCogs />,       title: "Custom App Features",              desc: "Live chat, push notifications, in-app purchases, offline sync, and more — every custom feature designed precisely to serve your business goals and delight your users." },
      { icon: <FaLock />,       title: "Data Security & Encryption",       desc: "Best-in-class encryption, secure API communication, and token-based authentication to protect your users' data, identity, and transactions at every application layer." },
      { icon: <FaRocket />,     title: "App Store Optimization",           desc: "Store listing enhancement, performance benchmarks, and metadata optimization to drive more organic downloads and better search visibility on Play Store and App Store." },
      { icon: <FaSync />,       title: "Ongoing Maintenance & Updates",    desc: "Continuous post-launch support including OS version updates, dependency upgrades, performance improvements, and new feature rollouts to keep your app future-ready." },
    ],

    stack: [
      { name: "Flutter 3.x" },
      { name: "Dart 3.x" },
      { name: "Android SDK" },
      { name: "iOS / Swift" },
      { name: "Firebase" },
      { name: "Node.js" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "Riverpod" },
      { name: "Bloc / Cubit" },
      { name: "Provider" },
      { name: "GetX" },
      { name: "GitHub Actions" },
      { name: "Fastlane" },
      { name: "Firebase Test Lab" },
      { name: "Docker" },
    ],

    slider: [
      { count: "150+", title: "Flutter Apps Delivered",          desc: "150+ Flutter apps delivered across finance, healthcare, travel, logistics, and eCommerce — pixel-perfect UI, native performance, and optimised backend integration.",             image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Mobile Dev Experience",  desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering cross-platform development with Flutter and Dart — from clean modular codebases to advanced Riverpod and Bloc state management for enterprises.`,    image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "200+", title: "Satisfied Global Clients",        desc: "200+ clients from startups to enterprises trust us for scalable, visually stunning Flutter apps that align with their business objectives and delight their users.",               image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "Deployment Success Rate",         desc: "99% deployment success on Google Play and Apple App Store — every app passes multi-device testing, performance optimisation, and compliance validation before submission.",        image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Technical Support Availability",  desc: "Round-the-clock Flutter support, crash analytics, bug fixes, OS compatibility updates, and feature enhancements — keeping your app performing at peak after every launch.",       image: "/Assets/seerviceSlider/slide5.webp" },
    ],

    faq: {
      title: "Flutter App Development",
      items: [
        { title: "Why choose Flutter for app development?",         description: "Flutter enables building fast, native-like apps for Android and iOS using a single codebase — reducing cost and development time while maintaining high performance and consistent UI across all platforms." },
        { title: "Can you develop enterprise-level Flutter apps?",  description: "Yes, we specialize in creating scalable enterprise-grade Flutter applications integrated with APIs, CRMs, ERP systems, and business analytics tools with role-based access and offline capabilities." },
        { title: "Can you migrate existing apps to Flutter?",       description: "Yes. We can migrate your existing Android or iOS apps to Flutter — improving performance, reducing maintenance overhead, and unifying your codebase across platforms with minimal disruption." },
        { title: "Can Flutter apps run on web and desktop?",        description: "Yes. Flutter supports web, Windows, macOS, and Linux in addition to Android and iOS — allowing your app to run seamlessly across devices and operating systems from a single codebase." },
        { title: "Do you offer post-launch maintenance?",           description: "Yes. We provide long-term support packages including bug fixes, OS compatibility updates, performance monitoring, security patches, and feature development to keep your app optimized." },
        { title: "What industries do you build Flutter apps for?",  description: "We develop Flutter apps for healthcare, fintech, travel, eCommerce, education, logistics, entertainment, and more — with domain-specific integrations and compliance built in." },
        { title: "What state management do you use in Flutter?",    description: "We use Riverpod, Bloc/Cubit, Provider, and GetX depending on project complexity — choosing the best fit for scalability, testability, and long-term code maintainability." },
        { title: "How long does Flutter app development take?",     description: "A standard Flutter app typically takes 6–16 weeks depending on complexity, features, and integrations. We provide a detailed timeline during the discovery and planning phase." },
        { title: "Do you provide App Store and Play Store support?", description: "Yes — we handle the complete submission process for both stores including store listing setup, ASO optimization, compliance review, and post-launch monitoring." },
        { title: "Is Flutter suitable for startups?",               description: "Absolutely. Flutter's single codebase approach significantly reduces development cost and time-to-market, making it an ideal choice for startups looking to launch on both platforms quickly." },
      ],
    },
};

const Flutter = ({ cms } = {}) => {
  const content = cms
    ? {
        banner: { ...FALLBACK_CONTENT.banner, ...cms.banner, bgImage: cms.banner.bgImage || FALLBACK_CONTENT.banner.bgImage, breadcrumb: undefined },
        intro: { ...FALLBACK_CONTENT.intro, ...cms.intro },
        // Merge with local fallback first, THEN apply the admin's
        // enable/disable choice as the final word — a disabled section
        // must stay hidden even though it has perfectly good local content
        // to fall back to for everything else.
        services: isSectionDisabled(cms.enabledSections, "services") ? [] : (cms.services || FALLBACK_CONTENT.services),
        process: isSectionDisabled(cms.enabledSections, "process") ? [] : (cms.process || FALLBACK_CONTENT.process),
        features: isSectionDisabled(cms.enabledSections, "why") ? [] : cms.features,
        stack: isSectionDisabled(cms.enabledSections, "stack") ? [] : (cms.stack || FALLBACK_CONTENT.stack),
        slider: cms.slider,
        faq: { title: FALLBACK_CONTENT.faq.title, items: cms.faq.items },
        // No page-specific local text for these — CommonTechPage.js's own
        // built-in defaults are the fallback when the CMS hasn't set them.
        servicesBadge: cms.servicesBadge, servicesHeading: cms.servicesHeading, servicesHighlight: cms.servicesHighlight,
        processBadge: cms.processBadge, processHeading: cms.processHeading, processHighlight: cms.processHighlight, processDescription: cms.processDescription,
        whyBadge: cms.whyBadge, whyHeading: cms.whyHeading, whyHighlight: cms.whyHighlight,
        stackBadge: cms.stackBadge, stackHeading: cms.stackHeading, stackHighlight: cms.stackHighlight, stackDescription: cms.stackDescription,
        faqBadge: cms.faqBadge,
      }
    : FALLBACK_CONTENT;

  return <CommonTechPage {...content} />;
};

export default Flutter;
