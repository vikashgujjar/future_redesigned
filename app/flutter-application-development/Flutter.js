"use client";
import app from "../Assets/Flutter.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaMobileAlt, FaPaintBrush, FaCloud, FaBug, FaRocket, FaTools,
  FaLaptopCode, FaCogs, FaLock, FaSync,
} from "react-icons/fa";

const features = [
  {
    title: "Custom Flutter App Development",
    description:
      "We build high-performance, feature-rich mobile applications using Flutter and Dart. Our apps are secure, responsive, and user-friendly — designed for both Android and iOS with clean, modular architectures built for scalability, speed, and long-term maintainability.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Cross-Platform UI/UX Design",
    description:
      "We craft visually appealing, intuitive interfaces using Flutter's flexible widget system. From smooth animations and micro-interactions to pixel-perfect Material and Cupertino layouts, every screen is designed for exceptional user engagement across all screen sizes.",
    icon: <FaPaintBrush />,
  },
  {
    title: "API & Backend Integration",
    description:
      "We connect Flutter apps to powerful backends using RESTful and GraphQL APIs. Real-time chat, push notifications, Firebase integration, Stripe payments, Google Maps, and social logins — all implemented with secure, encrypted communication between app and server.",
    icon: <FaCloud />,
  },
  {
    title: "Flutter Testing & Quality Assurance",
    description:
      "We perform comprehensive unit, widget, and integration testing for consistent app reliability. Our automated CI/CD pipelines and real-device testing across Android and iOS ensure high code quality, performance benchmarks, and crash-free experiences before every release.",
    icon: <FaBug />,
  },
  {
    title: "App Deployment & Store Optimization",
    description:
      "We manage end-to-end deployment on Google Play Store and Apple App Store — including ASO best practices, store listing optimization, compliance review, crash reporting setup, and analytics integration for ongoing post-launch performance insights.",
    icon: <FaRocket />,
  },
  {
    title: "Maintenance & Post-Launch Support",
    description:
      "We provide continuous updates, feature enhancements, and bug fixes for all Flutter app versions. With 24/7 monitoring, real-time analytics tracking, and proactive OS compatibility updates, your app stays fast, secure, and future-ready long after launch.",
    icon: <FaTools />,
  },
];

const bizCards = [
  {
    icons: <FaMobileAlt className="text-white w-8 h-8" />,
    title: "Cross-Platform Expertise",
    desc: "We build Flutter apps that run seamlessly on Android, iOS, web, and desktop from a single codebase — reducing development cost while maintaining native-quality performance on every platform.",
  },
  {
    icons: <FaCogs className="text-white w-8 h-8" />,
    title: "Custom Feature Development",
    desc: "From live chat and push notifications to in-app purchases and offline sync, we develop every custom feature tailored precisely to your business goals and user expectations.",
  },
  {
    icons: <FaLock className="text-white w-8 h-8" />,
    title: "Security-First Development",
    desc: "We implement best-in-class encryption, secure authentication, and data protection standards to safeguard your Flutter app's user data, transactions, and API communications.",
  },
];

const sliderCards = [
  {
    count: "150+",
    title: "Flutter Apps Delivered",
    desc: "Over 150 high-quality Flutter applications delivered across finance, healthcare, travel, logistics, and eCommerce — each with pixel-perfect UI, native performance, and optimized backend integration.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of Mobile Dev Experience",
    desc: "8+ years mastering cross-platform mobile development using Flutter and Dart — from clean modular codebases to advanced state management with Riverpod and Bloc for enterprise apps.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Satisfied Global Clients",
    desc: "200+ satisfied clients worldwide — from fast-growing startups to large enterprises — recognize us for delivering scalable, visually stunning Flutter apps that align with their business objectives.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Deployment Success Rate",
    desc: "99% deployment success rate on Google Play Store and Apple App Store — every app passes rigorous multi-device testing, performance optimization, and compliance validation before submission.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support Availability",
    desc: "Our Flutter experts provide 24/7 support, crash analytics, bug fixes, OS compatibility updates, and feature enhancements to keep your app performing at peak after launch.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const platforms = [
  {
    icon: <FaMobileAlt className="text-white w-6 h-6" />,
    title: "Cross-Platform Development",
    desc: "High-quality Flutter apps that run seamlessly across Android, iOS, web, and desktop with a single, shared codebase — faster delivery at lower cost.",
  },
  {
    icon: <FaLaptopCode className="text-white w-6 h-6" />,
    title: "Widget-Based UI Design",
    desc: "Dynamic, responsive, and interactive UIs built with Flutter's rich widget library — ensuring exceptional, branded user experiences on every device and screen size.",
  },
  {
    icon: <FaCogs className="text-white w-6 h-6" />,
    title: "Custom App Features",
    desc: "Live chat, push notifications, in-app purchases, offline sync, and more — every custom feature designed precisely to serve your business goals and delight your users.",
  },
  {
    icon: <FaLock className="text-white w-6 h-6" />,
    title: "Data Security & Encryption",
    desc: "Best-in-class encryption methods, secure API communication, and token-based authentication to protect your users' data, identity, and transactions at every layer.",
  },
  {
    icon: <FaRocket className="text-white w-6 h-6" />,
    title: "App Store Optimization",
    desc: "We enhance your app's store listing, performance benchmarks, and metadata to drive more organic downloads and better search visibility on Play Store and App Store.",
  },
  {
    icon: <FaSync className="text-white w-6 h-6" />,
    title: "Ongoing Maintenance & Updates",
    desc: "Continuous post-launch support including OS version updates, dependency upgrades, performance improvements, and new feature rollouts to keep your app future-ready.",
  },
];

const faqData = [
  {
    title: "Why choose Flutter for app development?",
    description:
      "Flutter enables building fast, native-like apps for Android and iOS using a single codebase — reducing cost and development time while maintaining high performance and consistent UI across all platforms.",
  },
  {
    title: "Can you develop enterprise-level Flutter apps?",
    description:
      "Yes, we specialize in creating scalable enterprise-grade Flutter applications integrated with APIs, CRMs, ERP systems, and business analytics tools with role-based access and offline capabilities.",
  },
  {
    title: "Can you migrate existing apps to Flutter?",
    description:
      "Yes. We can migrate your existing Android or iOS apps to Flutter — improving performance, reducing maintenance overhead, and unifying your codebase across platforms with minimal disruption.",
  },
  {
    title: "Can Flutter apps run on web and desktop?",
    description:
      "Yes. Flutter supports web, Windows, macOS, and Linux platforms in addition to Android and iOS — allowing your app to run seamlessly across devices and operating systems from a single codebase.",
  },
  {
    title: "Do you offer post-launch maintenance?",
    description:
      "Yes. We provide long-term support packages including bug fixes, OS compatibility updates, performance monitoring, security patches, and feature development to keep your app current and optimized.",
  },
  {
    title: "What industries do you build Flutter apps for?",
    description:
      "We develop Flutter apps for healthcare, fintech, travel, eCommerce, education, logistics, entertainment, and more — with domain-specific integrations and compliance considerations built in.",
  },
];

const techCategories = [
  {
    title: "Flutter & Dart",
    techs: [
      { name: "Flutter",        icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Dart",           icon: "https://cdn.simpleicons.org/dart" },
      { name: "Android",        icon: "https://cdn.simpleicons.org/android" },
      { name: "iOS / Swift",    icon: "https://cdn.simpleicons.org/swift" },
    ],
  },
  {
    title: "Backend & APIs",
    techs: [
      { name: "Firebase",       icon: "https://cdn.simpleicons.org/firebase" },
      { name: "Node.js",        icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "GraphQL",        icon: "https://cdn.simpleicons.org/graphql" },
      { name: "REST APIs",      icon: "https://cdn.simpleicons.org/fastapi" },
    ],
  },
  {
    title: "State Management",
    techs: [
      { name: "Riverpod",       icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Bloc/Cubit",     icon: "https://cdn.simpleicons.org/dart" },
      { name: "Provider",       icon: "https://cdn.simpleicons.org/flutter" },
      { name: "GetX",           icon: "https://cdn.simpleicons.org/dart" },
    ],
  },
  {
    title: "CI/CD & Testing",
    techs: [
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
      { name: "Fastlane",       icon: "https://cdn.simpleicons.org/fastlane" },
      { name: "Firebase Test Lab",icon: "https://cdn.simpleicons.org/firebase" },
      { name: "Docker",         icon: "https://cdn.simpleicons.org/docker" },
    ],
  },
];

const Flutter = () => {
  return (
    <CommonServicePage
      bannerImg={app}
      bannerTitle="Flutter App Development Services"
      bannerDesc="Flutter is Google's open-source UI toolkit that helps developers build dynamic, feature-rich applications for Android, iOS, web, and desktop from a single codebase. At Future IT Touch Pvt. Ltd., we craft industry-standard cross-platform applications to streamline your business. Our next-gen Flutter app development services ensure future-ready applications with native performance, stunning UI, and robust backend integrations."
      overviewImage="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80"
      overviewImageAlt="Flutter App Development"
      overviewBadge="Flutter App Development Services"
      overviewHeading="Build Stunning Apps for"
      overviewHighlight="Every Platform with Flutter"
      overviewParagraphs={[
        "Flutter by Google enables businesses to build beautiful, high-performance mobile, web, and desktop applications from a single Dart codebase — dramatically reducing development time and cost without compromising on native-quality user experiences.",
        "At Future IT Touch, our experienced Flutter developers combine deep framework expertise with strong UI/UX design skills to deliver cross-platform apps that look and feel native on every device your users carry.",
        { boldPrefix: "For Your Business:", text: "Cost-effective cross-platform apps with shared codebase, faster time-to-market, and enterprise-grade scalability for Android, iOS, and web." },
        { boldPrefix: "For Your Users:", text: "60fps smooth animations, pixel-perfect UI, offline capabilities, and fast load times — a premium experience regardless of device or platform." },
        "With 8+ years of mobile development experience and 150+ Flutter apps delivered, we bring the expertise to take your app idea from concept to the app stores successfully.",
      ]}
      overviewCtaText="Start Your Flutter Project"
      featuresBadge="Flutter Development Services"
      featuresTitle="Full-Cycle Flutter App"
      featuresTitleHighlight="Development We Offer"
      featuresStickyImg="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
      features={features}
      bizBadge="Why Choose Future IT Touch"
      bizHeading="Your Trusted Partner for"
      bizHighlight="Flutter App Success"
      bizCards={bizCards}
      sliderTitle="Delivering High-Performance Flutter Apps Across Industries"
      sliderCards={sliderCards}
      platformsTitle="Flutter Capabilities We Deliver"
      platforms={platforms}
      techBadge="Our Flutter Tech Stack"
      techHeading="Technologies"
      techHeadingHighlight="We Build With"
      techDescription="We use Flutter's full ecosystem — Dart, state management, Firebase, and CI/CD tools — to build apps that are fast, secure, and ready for the app stores."
      techCategories={techCategories}
      faqTitle="Frequently Asked Questions — Flutter App Development"
      faqData={faqData}
    />
  );
};

export default Flutter;
