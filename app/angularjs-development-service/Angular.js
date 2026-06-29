import React from "react";
import {
  FaAngular, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaLock, FaRocket, FaCheckCircle, FaLayerGroup, FaBolt,
  FaSyncAlt, FaStar, FaHeadset, FaCode,
} from "react-icons/fa";
import angularImg from "../Assets/aglr.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";

const Angular = () => (
  <CommonTechPage
    banner={{
      bgImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=85",
      image: angularImg,
      category: "Frontend Technology",
      breadcrumb: "AngularJS · SPA · MEAN Stack",
      title: "AngularJS · MEAN Stack · SPA",
      tagline:
        "Build dynamic, high-performance single-page applications using Google's AngularJS framework — powering interactive, scalable, and enterprise-grade web experiences.",
    }}

    intro={{
      badge: "Future IT Touch · Angular Experts",
      heading: "Build Dynamic Web Apps with",
      highlight: "AngularJS & MEAN Stack",
      paras: [
        "At Future IT Touch, we specialize in building dynamic, feature-rich, and scalable front-end solutions using AngularJS. Our component-based architecture and two-way data binding deliver exceptional user experiences with maintainable, modular code.",
        "Whether it's a single-page application, enterprise dashboard, or a complex web portal, our AngularJS developers leverage reusable UI modules, RxJS reactive patterns, and efficient API integration to meet your business objectives.",
        "As a trusted AngularJS development company, we deliver applications that are fast, responsive, and compatible across all devices — with seamless backend connectivity to support your digital transformation journey.",
      ],
      highlights: [
        "Component-based AngularJS architecture for modular, scalable SPAs",
        "Two-way data binding and RxJS for reactive, real-time applications",
        "RESTful & GraphQL API integration with JWT / OAuth2 security",
        "CI/CD pipelines on AWS, Azure & Firebase with zero-downtime deploys",
      ],
      stats: [
        { num: "200+", label: "Projects Delivered",     desc: "AngularJS apps across eCommerce, healthcare, education, and finance.", icon: <FaAngular /> },
        { num: "8+",   label: "Years of Expertise",     desc: "Eight-plus years building high-performing front-end solutions.",        icon: <FaLayerGroup /> },
        { num: "350+", label: "Global Clients Served",  desc: "Trusted by 350+ clients across 30+ countries worldwide.",              icon: <FaStar /> },
        { num: "24/7", label: "Technical Support",      desc: "Round-the-clock monitoring, maintenance, and technical assistance.",    icon: <FaHeadset /> },
      ],
    }}

    services={[
      {
        icon: <FaAngular />,
        title: "Custom AngularJS Web Development",
        desc: "Dynamic, feature-rich single-page applications with modular front-end architecture and seamless RESTful API integration.",
        points: [
          "Dynamic SPA development",
          "Modular front-end architecture",
          "RESTful API integration",
          "Fast, responsive UI components",
        ],
      },
      {
        icon: <FaServer />,
        title: "Enterprise AngularJS Applications",
        desc: "Enterprise-grade AngularJS solutions with complex data flows, reusable directives, and real-time WebSocket data handling.",
        points: [
          "Enterprise-grade data flows",
          "Reusable components & directives",
          "WebSocket real-time handling",
          "High-performance scalability",
        ],
      },
      {
        icon: <FaCogs />,
        title: "Custom Module & Component Development",
        desc: "Reusable AngularJS components with custom directives, routing, state management, and AOT compilation for top performance.",
        points: [
          "Reusable component library",
          "Custom directives & services",
          "Routing & state management",
          "Lazy loading & AOT compilation",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "API Integration & Backend Connectivity",
        desc: "Seamless AngularJS front-end integration with RESTful and GraphQL APIs using RxJS reactive patterns and secure OAuth2 auth.",
        points: [
          "REST & GraphQL API integration",
          "RxJS reactive programming",
          "JWT & OAuth2 authentication",
          "Real-time data synchronization",
        ],
      },
      {
        icon: <FaLock />,
        title: "Security & Application Maintenance",
        desc: "Comprehensive XSS, CSRF, and injection attack protection with role-based access control, regular patching, and monitoring.",
        points: [
          "XSS, CSRF & injection defense",
          "Role-based access control",
          "Dependency patching & bug fixes",
          "Continuous performance monitoring",
        ],
      },
      {
        icon: <FaTools />,
        title: "Ongoing Support & Optimization",
        desc: "24/7 maintenance and optimization services including Angular version upgrades, caching strategies, and long-term technical consultancy.",
        points: [
          "24/7 maintenance & support",
          "AngularJS to Angular migration",
          "Caching & code-splitting",
          "Long-term technical consultancy",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirement Analysis",        desc: "Understanding your business goals and technical needs to deliver an AngularJS solution aligned with your objectives and scalability expectations." },
      { icon: <FaCode />,        title: "UI/UX Design & Architecture", desc: "Creating intuitive UI/UX designs and defining a robust AngularJS architecture for efficient component communication and data handling." },
      { icon: <FaLayerGroup />,  title: "Frontend Development",        desc: "Building interactive, high-performing frontends using AngularJS with modular architecture for easy maintenance and long-term scalability." },
      { icon: <FaDatabase />,    title: "API Integration & Binding",   desc: "Connecting AngularJS apps with RESTful APIs and implementing two-way data binding for real-time synchronization and smooth interactions." },
      { icon: <FaBolt />,        title: "Testing & Debugging",         desc: "Unit, end-to-end, and integration testing using Jasmine and Karma to ensure bug-free, reliable, and production-ready applications." },
      { icon: <FaRocket />,      title: "Performance Optimization",    desc: "Optimizing AngularJS apps through lazy loading, code splitting, and caching strategies to enhance speed and responsiveness at scale." },
      { icon: <FaShieldAlt />,   title: "Security Implementation",     desc: "Enforcing advanced security — data encryption, input sanitization, and authentication — to safeguard applications from modern threats." },
      { icon: <FaServer />,      title: "Deployment",                  desc: "Deploying AngularJS applications via CI/CD pipelines on AWS, Azure, or Firebase for scalable, zero-downtime production environments." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Support",       desc: "Continuous updates, version upgrades, and performance monitoring to keep your AngularJS applications running smoothly and securely." },
    ]}

    features={[
      { icon: <FaAngular />,    title: "Custom AngularJS Development",     desc: "High-performing AngularJS applications tailored to your business needs, ensuring scalability, speed, and a clean modular design from the ground up." },
      { icon: <FaCogs />,       title: "Component-Based Architecture",      desc: "Reusable, modular components that enhance app maintainability, simplify scaling, and improve overall performance across the entire application." },
      { icon: <FaServer />,     title: "API & Backend Integration",         desc: "Seamless communication between frontend and backend through well-structured APIs, RxJS reactive patterns, and secure data handling mechanisms." },
      { icon: <FaLock />,       title: "Advanced Security Layers",          desc: "Protecting AngularJS apps with advanced authentication, data validation, and defense against XSS and CSRF attacks at every application layer." },
      { icon: <FaRocket />,     title: "Performance Enhancement",           desc: "Optimized apps using lazy loading, change detection strategies, and efficient state management for lightning-fast UI rendering at any scale." },
      { icon: <FaTools />,      title: "Maintenance & Version Upgrades",    desc: "Ongoing support and framework upgrades ensuring your AngularJS applications stay current, fully optimized, and ready for future growth." },
    ]}

    stack={[
      { name: "AngularJS 1.x" },
      { name: "Angular 17+" },
      { name: "TypeScript" },
      { name: "RxJS" },
      { name: "NgRx" },
      { name: "Angular Material" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "GraphQL" },
      { name: "Jasmine / Karma" },
      { name: "Webpack" },
      { name: "Docker" },
      { name: "Firebase" },
      { name: "AWS / Azure" },
      { name: "JWT / OAuth2" },
    ]}

    slider={[
      { count: "200+", title: "AngularJS Projects Delivered",  desc: "200+ AngularJS apps across eCommerce, healthcare, education, and finance — each tailored for performance, responsive design, and seamless UX.",  image: "/Assets/seerviceSlider/slide1.webp" },
      { count: "8+",   title: "Years of Frontend Expertise",   desc: "Eight-plus years building engaging, maintainable AngularJS solutions that stay ahead of UI/UX trends and framework advancements.",               image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "350+", title: "Global Clients Served",         desc: "Trusted by 350+ clients across 30+ countries — delivering custom dashboards, enterprise apps, and SPAs with reliability and innovation.",          image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "98%",  title: "Client Satisfaction Rate",      desc: "98% satisfaction through quality-first delivery, transparent communication, and proactive issue resolution on every AngularJS project.",          image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Dedicated Technical Support",   desc: "Around-the-clock assistance for performance optimization, security updates, and feature enhancements — keeping your platform always reliable.",     image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "AngularJS Development Services",
      items: [
        { title: "What is AngularJS used for?",                   description: "AngularJS is a front-end JavaScript framework used to build dynamic single-page web applications (SPAs) with interactive and responsive user interfaces." },
        { title: "Is AngularJS still relevant for development?",  description: "Yes, many enterprise systems still use AngularJS, and we also offer complete migration services to the latest Angular versions for enhanced performance and security." },
        { title: "Can AngularJS integrate with backend APIs?",    description: "Absolutely. AngularJS integrates seamlessly with RESTful APIs, enabling efficient data exchange and synchronization with backend systems and third-party services." },
        { title: "Do you offer AngularJS migration to newer versions?", description: "Yes, we provide complete migration from AngularJS to modern Angular frameworks with improved performance, maintainability, and long-term security support." },
        { title: "How secure is an AngularJS application?",      description: "AngularJS applications are secured using input sanitization, authentication mechanisms, and CSRF protection to safeguard against all common vulnerabilities." },
        { title: "Can AngularJS work with mobile apps?",          description: "Yes, AngularJS can power hybrid mobile applications using frameworks like Ionic, ensuring smooth and consistent user experiences across all devices." },
        { title: "What tools do you use for testing AngularJS apps?", description: "We use Jasmine, Karma, and Protractor for comprehensive testing of AngularJS applications to ensure stability, reliability, and high performance." },
        { title: "Do you offer support for existing AngularJS projects?", description: "Yes, we provide complete maintenance, version upgrades, and technical support for all existing AngularJS-based applications." },
        { title: "Can you integrate third-party APIs in AngularJS?", description: "Yes, we integrate payment gateways, CRM tools, analytics APIs, and other third-party services into AngularJS applications with secure data handling." },
        { title: "Which industries benefit from AngularJS development?", description: "AngularJS is widely used in eCommerce, healthcare, education, fintech, and enterprise software — delivering scalable, high-performance front-end systems." },
      ],
    }}
  />
);

export default Angular;
