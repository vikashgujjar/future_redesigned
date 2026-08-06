import React from "react";
import {
  FaApple, FaPaintBrush, FaCloud, FaBug, FaRocket, FaTools,
  FaMobileAlt, FaLaptopCode, FaCogs, FaLock, FaCheckCircle,
  FaLayerGroup, FaBolt, FaSyncAlt, FaStar, FaHeadset, FaCode,
} from "react-icons/fa";
import swiftImg from "../Assets/swift.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const Swift = () => (
  <CommonTechPage
    banner={{
      bgImage: "/Assets/stock/photo-1512941937669-90a1b58e7e9c.webp",
      image: swiftImg,
      category: "iOS Development",
      breadcrumb: "Swift · SwiftUI · iOS",
      title: "Swift · SwiftUI · iOS",
      tagline:
        "Build high-performance, secure, and scalable iOS applications using Apple's modern Swift framework — delivering pixel-perfect experiences across iPhone, iPad, and Apple Watch.",
    }}

    intro={{
      badge: "Future IT Touch · iOS Experts",
      heading: "Build Powerful iOS Apps with",
      highlight: "Swift & SwiftUI",
      paras: [
        "At Future IT Touch, we specialize in crafting high-performance, secure, and visually stunning iOS applications using Swift — Apple's modern, fast, and safe programming language trusted by millions of developers worldwide.",
        "Whether you need a custom iPhone app, enterprise-grade iOS solution, or seamless SwiftUI interface, our Swift developers leverage clean architecture, modular components, and Apple's latest frameworks to deliver apps that stand out on the App Store.",
        "From startups to large enterprises, we craft Swift-based solutions that are fast, secure, and scalable — with intuitive UX design, real-time integrations, and long-term maintenance that keeps your app at the forefront of Apple innovation.",
      ],
      highlights: [
        "Native Swift & SwiftUI development for iPhone, iPad, and Apple Watch",
        "Apple Human Interface Guidelines for pixel-perfect, intuitive designs",
        "RESTful & GraphQL API integration with Firebase, Stripe & more",
        "App Store submission, ASO optimization & 24/7 post-launch support",
      ],
      stats: [
        { num: "150+", label: "Swift Apps Delivered",    desc: "High-performance iOS apps shipped across fintech, healthcare, and eCommerce.", icon: <FaApple /> },
        { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years iOS Expertise",     desc: `${YEARS_EXPERIENCE_DISPLAY} years building scalable, secure, and elegant iOS solutions.`,       icon: <FaLayerGroup /> },
        { num: "200+", label: "Global Clients Served",   desc: "Trusted by 200+ clients worldwide for robust and impactful Swift apps.",       icon: <FaStar /> },
      ],
    }}

    services={[
      {
        icon: <FaApple />,
        title: "Custom Swift App Development",
        desc: "High-performance, feature-rich iOS applications using Swift and Apple's latest frameworks — tailored for startups, enterprises, and everything in between.",
        points: [
          "Custom iOS app architecture",
          "Swift & SwiftUI development",
          "Scalable modular codebase",
          "Native Apple integrations",
        ],
      },
      {
        icon: <FaPaintBrush />,
        title: "iOS App UI/UX Design",
        desc: "Visually stunning and intuitive interfaces following Apple's Human Interface Guidelines — with smooth animations, adaptive layouts, and superior UX.",
        points: [
          "Apple HIG-compliant design",
          "SwiftUI & UIKit interfaces",
          "Micro-interactions & animations",
          "Pixel-perfect responsive layouts",
        ],
      },
      {
        icon: <FaCloud />,
        title: "API & Backend Integration",
        desc: "Seamless connectivity with powerful backends, RESTful and GraphQL APIs, Firebase, Stripe, and third-party services for real-time app functionality.",
        points: [
          "REST & GraphQL API integration",
          "Firebase & real-time features",
          "Stripe & payment gateways",
          "Secure OAuth2 & JWT auth",
        ],
      },
      {
        icon: <FaBug />,
        title: "Swift App Testing & QA",
        desc: "Comprehensive unit, integration, and UI testing using XCTest and automated CI/CD pipelines for crash-free, high-quality App Store releases.",
        points: [
          "Unit & UI testing (XCTest)",
          "CI/CD automated pipelines",
          "Real-device performance testing",
          "Crash-free quality assurance",
        ],
      },
      {
        icon: <FaRocket />,
        title: "App Store Deployment & ASO",
        desc: "Complete App Store submission, compliance with Apple's review guidelines, ASO optimization, and analytics setup for maximum visibility and downloads.",
        points: [
          "End-to-end App Store submission",
          "ASO for better discoverability",
          "Analytics & crash reporting",
          "Apple policy compliance",
        ],
      },
      {
        icon: <FaTools />,
        title: "Maintenance & Post-Launch Support",
        desc: "Continuous updates, security patches, OS compatibility fixes, and 24/7 technical support to keep your Swift app performing at its absolute best.",
        points: [
          "24/7 technical support",
          "iOS version compatibility updates",
          "Performance & battery optimization",
          "Feature enhancements & upgrades",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Project Discovery & Planning",   desc: "Analyzing your business goals, user requirements, and target audience to create a clear roadmap for Swift app development aligned with your vision." },
      { icon: <FaPaintBrush />,  title: "Wireframing & UI/UX Design",     desc: "Crafting intuitive interfaces and interactive prototypes aligned with Apple's design philosophy for seamless usability and brand consistency." },
      { icon: <FaCode />,        title: "Swift App Development",          desc: "Writing clean, modular, and maintainable Swift code leveraging SwiftUI and Combine for high performance, responsiveness, and scalability." },
      { icon: <FaCloud />,       title: "API & Database Integration",     desc: "Connecting the app with secure backends, RESTful APIs, and databases to enable real-time data exchange and cross-platform functionality." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",    desc: "Comprehensive testing across all iOS versions and devices ensuring stability, performance, and a smooth crash-free user experience." },
      { icon: <FaRocket />,      title: "App Store Deployment",           desc: "Handling the complete deployment process — ensuring compliance with Apple's guidelines and optimized metadata for App Store visibility." },
      { icon: <FaSyncAlt />,     title: "Post-Launch Monitoring & Support", desc: "Continuous performance monitoring, user feedback analysis, and timely updates to ensure your app evolves and stays ahead of the competition." },
    ]}

    features={[
      { icon: <FaMobileAlt />,   title: "Native Swift Development",        desc: "Robust and scalable iOS applications built with Swift for maximum performance, security, and seamless Apple ecosystem integration on all devices." },
      { icon: <FaLaptopCode />,  title: "SwiftUI-Based UI Design",         desc: "Elegant, interactive interfaces with SwiftUI — ensuring smooth transitions, responsive layouts, and a superior user experience across Apple devices." },
      { icon: <FaCogs />,        title: "Custom App Functionality",        desc: "Unique features like real-time chat, push notifications, and in-app purchases built and tailored precisely to your business goals and user needs." },
      { icon: <FaLock />,        title: "Enterprise-Grade Security",       desc: "Face ID, Touch ID, and data encryption integration ensuring your app data, transactions, and user information remain completely secure at all times." },
      { icon: <FaRocket />,      title: "App Store Optimization",          desc: "Performance tuning and ASO strategies to increase your app's visibility, organic downloads, and user engagement on the App Store." },
      { icon: <FaTools />,       title: "Ongoing Maintenance & Support",   desc: "Continuous updates, OS compatibility fixes, and dedicated technical support to keep your Swift app running at peak performance long-term." },
    ]}

    stack={[
      { name: "Swift 5.x" },
      { name: "SwiftUI" },
      { name: "UIKit" },
      { name: "Xcode 15" },
      { name: "Objective-C" },
      { name: "Core Data" },
      { name: "Combine" },
      { name: "ARKit" },
      { name: "CloudKit" },
      { name: "Firebase" },
      { name: "Stripe SDK" },
      { name: "XCTest" },
      { name: "TestFlight" },
      { name: "CocoaPods / SPM" },
      { name: "REST / GraphQL" },
      { name: "Fastlane CI/CD" },
    ]}

    slider={[
      { count: "150+", title: "Swift Apps Delivered",         desc: "150+ high-performance Swift iOS apps built across fintech, healthcare, travel, and eCommerce — each crafted for seamless performance and engaging UX.",           image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of iOS Expertise",       desc: `${YEARS_EXPERIENCE_DISPLAY} years of hands-on iOS development with deep proficiency in Swift, SwiftUI, and Xcode — delivering efficient, secure, and beautiful applications.`,      image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "200+", title: "Satisfied Global Clients",     desc: "200+ clients from startups to enterprises trust us for innovative, reliable, and high-performing Swift apps that drive measurable digital outcomes.",               image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "App Launch Success Rate",      desc: "99% App Store approval rate maintained by following Apple's Human Interface Guidelines and rigorous testing — ensuring smooth launches without rejection.",        image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Technical Support Availability", desc: "Round-the-clock Swift development support, continuous monitoring, and proactive maintenance — keeping your iOS app flawless across every new Apple OS version.", image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Swift App Development Services",
      items: [
        { title: "Why choose Swift for iOS app development?",          description: "Swift is Apple's powerful, modern programming language known for speed, safety, and maintainability — ideal for building scalable and high-performance iOS applications." },
        { title: "Can you develop custom enterprise Swift apps?",      description: "Yes, we specialize in building enterprise-grade iOS apps that integrate with CRMs, APIs, and analytics tools for seamless business operations." },
        { title: "Do you use SwiftUI for app design?",                 description: "Absolutely. We use SwiftUI to craft beautiful, adaptive, and smooth user interfaces that perform exceptionally well on all Apple devices." },
        { title: "Can you migrate my Objective-C app to Swift?",       description: "Yes, our team can refactor and migrate your existing Objective-C codebase to Swift, ensuring improved performance and maintainability." },
        { title: "Do you offer post-launch app maintenance?",          description: "We provide continuous updates, bug fixes, and optimization to ensure your Swift app remains secure and performs smoothly across iOS versions." },
        { title: "Can you integrate third-party APIs into Swift apps?", description: "Yes, we integrate APIs for analytics, payments, cloud storage, and more, enabling richer functionality and connected experiences." },
        { title: "Is my app data secure?",                             description: "We implement Apple's best security practices, encryption, and authentication methods like Touch ID and Face ID for complete data safety." },
        { title: "Do you provide App Store publishing assistance?",    description: "Yes, we manage the full publishing process including metadata setup, ASO optimization, and compliance with Apple's app submission rules." },
        { title: "Do you support iPad and Apple Watch apps?",          description: "Yes, we develop cross-device Swift apps optimized for iPhones, iPads, and Apple Watch to maximize your app's reach and usability." },
        { title: "What industries do you serve?",                      description: "We build Swift apps for healthcare, finance, education, eCommerce, travel, and entertainment — customized for each industry's unique needs." },
      ],
    }}
  />
);

export default Swift;
