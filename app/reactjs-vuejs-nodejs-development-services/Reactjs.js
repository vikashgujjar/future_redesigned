import React from "react";
import { FaReact, FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools, FaLock, FaRocket, FaCheckCircle, FaLayerGroup, FaBolt, FaLeaf, FaSyncAlt, FaStar, FaHeadset } from "react-icons/fa";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";

const FALLBACK_CONTENT = {
  banner: {
    bgImage: "/Assets/stock/photo-1555066931-4365d14bab8c.webp",
    category: "Web Technology",
    breadcrumb: "React · Vue · Node.js",
    title: "React JS · Vue JS · Node JS",
    tagline: "Build blazing-fast, real-time, and scalable full-stack JavaScript applications using the industry's most powerful modern frameworks.",
  },

  intro: {
    badge: "Future IT Touch · JavaScript Experts",
    heading: "Full-Stack JavaScript Power with",
    highlight: "React.js, Vue.js & Node.js",
    paras: [
      "At Future IT Touch, we specialize in building modern, high-performance web applications using React.js, Vue.js, and Node.js — the JavaScript ecosystem trusted by Netflix, Airbnb, and thousands of growing businesses globally.",
      "Whether you need a feature-rich SPA, real-time dashboard, or a scalable REST/GraphQL backend, our expert team delivers full-stack solutions with reusable component architecture, optimized API design, and production-ready code standards.",
      "From MVPs to enterprise platforms, we craft JavaScript solutions that load fast, scale effortlessly, and deliver the intuitive experiences your users expect.",
    ],
    highlights: [
      "Component-driven React & Vue architecture for fast iteration",
      "Scalable Node.js backend with Express / Nest.js APIs",
      "TypeScript-first codebase for safe, maintainable code",
      "CI/CD pipelines with zero-downtime deployment",
    ],
    stats: [
      { num:"400+", label:"JS Projects Built",    desc:"React, Vue & Node.js solutions delivered globally.", icon:<FaReact /> },
      { num:YEARS_EXPERIENCE_DISPLAY,  label:"Years Experience",     desc:`${YEARS_EXPERIENCE_DISPLAY} years building modern JavaScript applications.`,   icon:<FaLayerGroup /> },
      { num:"98%",  label:"Client Satisfaction",  desc:"Quality-driven approach with transparent delivery.",  icon:<FaStar /> },
    ],
  },

  services: [
    {
      icon: <FaReact />,
      title: "Custom React.js Development",
      desc: "Interactive, component-driven React applications with optimal state management, lazy loading, and blazing-fast rendering.",
      points: ["Component architecture", "Redux / Zustand / Context", "RESTful & GraphQL APIs", "Next.js SSR / SSG"],
    },
    {
      icon: <FaCode />,
      title: "Vue.js Application Development",
      desc: "Progressive, reactive Vue.js applications with Composition API, Pinia state management, and seamless backend integration.",
      points: ["Single-page applications", "Vuex & Pinia", "Nuxt.js SSR support", "Modular component design"],
    },
    {
      icon: <FaCogs />,
      title: "Node.js Backend Development",
      desc: "High-performance event-driven Node.js servers with Express.js / Nest.js for scalable API and real-time services.",
      points: ["Express & Nest.js APIs", "WebSocket / Socket.io", "Microservice architecture", "Job queues & workers"],
    },
    {
      icon: <FaDatabase />,
      title: "REST & GraphQL API Design",
      desc: "Clean, versioned, and secure APIs with proper authentication, rate limiting, and comprehensive documentation.",
      points: ["RESTful API design", "GraphQL schemas", "JWT & OAuth2 auth", "Swagger / Postman docs"],
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Performance",
      desc: "HTTPS, CORS, input sanitization, XSS/CSRF protection, and performance profiling for production-grade applications.",
      points: ["JWT authentication", "XSS & CSRF defense", "Query optimization", "Load testing"],
    },
    {
      icon: <FaTools />,
      title: "Migration & Modernization",
      desc: "Migrate jQuery, AngularJS, or legacy apps to modern React or Vue with improved UX, performance, and maintainability.",
      points: ["Legacy to React/Vue", "State management refactor", "API modernization", "Bundle optimization"],
    },
  ],

  process: [
    { icon: <FaCheckCircle />, title: "Discovery & Analysis",  desc: "Defining goals, users, and technical scope for the React/Vue/Node.js solution." },
    { icon: <FaLayerGroup />,  title: "Architecture Design",   desc: "Structuring frontend components, backend routes, and database schemas." },
    { icon: <FaReact />,       title: "Frontend Development",  desc: "Building responsive, accessible React or Vue interfaces with clean component hierarchy." },
    { icon: <FaServer />,      title: "Backend Development",   desc: "Creating Node.js APIs with Express/Nest, authentication, and business logic." },
    { icon: <FaDatabase />,    title: "Database Integration",  desc: "Setting up MongoDB, PostgreSQL, or MySQL with optimized query design." },
    { icon: <FaShieldAlt />,   title: "Security Hardening",    desc: "Applying encryption, validation, rate limiting, and security audits." },
    { icon: <FaBolt />,        title: "Testing & QA",          desc: "Unit, integration, and E2E tests with Jest, Vitest, and Playwright." },
    { icon: <FaSyncAlt />,     title: "CI/CD & Deployment",    desc: "Automated pipelines and zero-downtime deployment to cloud or VPS." },
  ],

  features: [
    { icon: <FaReact />,     title: "Component-Based Architecture",  desc: "Reusable, isolated components built with React or Vue ensure consistent UI, easy updates, and a maintainable codebase at any scale." },
    { icon: <FaRocket />,    title: "Exceptional Performance",       desc: "Code splitting, lazy loading, virtual DOM diffing, and server-side rendering deliver sub-second load times across all devices." },
    { icon: <FaServer />,    title: "Scalable Node.js Backend",      desc: "Event-driven, non-blocking Node.js architecture handles thousands of concurrent connections — perfect for real-time and API-heavy apps." },
    { icon: <FaLock />,      title: "Security-First Development",    desc: "JWT authentication, HTTPS enforcement, input sanitization, and regular audits keep your application secure from modern web threats." },
    { icon: <FaLayerGroup />,title: "Full-Stack JavaScript",         desc: "Unified JavaScript across frontend and backend reduces context switching, accelerates development, and simplifies team collaboration." },
    { icon: <FaLeaf />,      title: "Clean & Maintainable Code",    desc: "ESLint enforced code standards, TypeScript adoption, and comprehensive documentation ensure long-term ease of maintenance." },
  ],

  stack: [
    { name: "React 18" },
    { name: "Vue 3" },
    { name: "Node.js 20" },
    { name: "Next.js 15" },
    { name: "Nuxt.js 3" },
    { name: "Express.js" },
    { name: "Nest.js" },
    { name: "TypeScript" },
    { name: "Redux / Zustand" },
    { name: "Pinia" },
    { name: "GraphQL" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Socket.io" },
    { name: "Jest / Vitest" },
  ],

  slider: [
    { count: "400+", title: "JS Projects Delivered",          desc: "400+ React, Vue, and Node.js apps delivered — from real-time dashboards to enterprise platforms.", image: "/Assets/seerviceSlider/slide1.webp" },
    { count: YEARS_EXPERIENCE_DISPLAY,  title: "Years of JS Expertise",          desc: `${YEARS_EXPERIENCE_DISPLAY} years of JavaScript excellence with expertise in modern frameworks, testing, and CI/CD.`,       image: "/Assets/seerviceSlider/slide2.webp" },
    { count: "98%",  title: "Client Satisfaction",            desc: "98% satisfaction rate through clean code, real-time communication, and on-time delivery.",          image: "/Assets/seerviceSlider/slide3.webp" },
    { count: "24/7", title: "Monitoring & Support",           desc: "Continuous uptime monitoring, error tracking, and support for all React/Vue/Node applications.",     image: "/Assets/seerviceSlider/slide4.webp" },
    { count: "250+", title: "REST & GraphQL APIs Built",      desc: "250+ production APIs powering mobile apps, third-party integrations, and microservices globally.",  image: "/Assets/seerviceSlider/slide5.webp" },
  ],

  faq: {
    title: "React.js · Vue.js · Node.js",
    items: [
      { title: "What is React.js and why is it popular?", description: "React.js is Meta's JavaScript library for building fast, interactive UIs with reusable components. Its virtual DOM and unidirectional data flow make it ideal for complex, dynamic applications." },
      { title: "When should I choose Vue.js over React?", description: "Vue.js is excellent when you need a gentler learning curve, lighter bundle size, or built-in state management with Pinia. It's ideal for medium-complexity SPAs and teams new to modern frameworks." },
      { title: "What can Node.js do for my backend?", description: "Node.js enables high-speed, non-blocking server-side JavaScript — perfect for REST APIs, real-time applications (chat, notifications), microservices, and streaming data platforms." },
      { title: "Can React and Node.js work together?", description: "Yes — this is the most common full-stack pattern. React handles the frontend SPA while Node.js provides the backend API, sharing TypeScript types and reducing context switching for developers." },
      { title: "Do you build Next.js applications?", description: "Absolutely. We build Next.js applications with SSR, SSG, ISR, and server components for SEO-optimized, high-performance web apps deployed on Vercel or custom infrastructure." },
      { title: "How do you handle state management?", description: "We choose the right tool per complexity: React Context for simple state, Zustand or Redux Toolkit for complex apps, and React Query or SWR for server state synchronization." },
      { title: "Can you migrate my AngularJS or jQuery app?", description: "Yes. We have a proven migration process that incrementally moves legacy applications to React or Vue — maintaining functionality while modernizing architecture and performance." },
      { title: "What testing approach do you follow?", description: "We implement unit tests with Jest/Vitest, component tests with React Testing Library, and E2E tests with Playwright — targeting 80%+ coverage for business-critical logic." },
    ],
  },
};

const Reactjs = ({ cms } = {}) => {
  const content = cms
    ? {
        banner: { ...FALLBACK_CONTENT.banner, ...cms.banner, bgImage: cms.banner.bgImage || FALLBACK_CONTENT.banner.bgImage, breadcrumb: undefined },
        intro: { ...FALLBACK_CONTENT.intro, ...cms.intro },
        services: isSectionDisabled(cms.enabledSections, "services") ? [] : (cms.services || FALLBACK_CONTENT.services),
        process: isSectionDisabled(cms.enabledSections, "process") ? [] : (cms.process || FALLBACK_CONTENT.process),
        features: isSectionDisabled(cms.enabledSections, "why") ? [] : cms.features,
        stack: isSectionDisabled(cms.enabledSections, "stack") ? [] : (cms.stack || FALLBACK_CONTENT.stack),
        slider: cms.slider,
        faq: { title: FALLBACK_CONTENT.faq.title, items: cms.faq.items },
        servicesBadge: cms.servicesBadge, servicesHeading: cms.servicesHeading, servicesHighlight: cms.servicesHighlight,
        processBadge: cms.processBadge, processHeading: cms.processHeading, processHighlight: cms.processHighlight, processDescription: cms.processDescription,
        whyBadge: cms.whyBadge, whyHeading: cms.whyHeading, whyHighlight: cms.whyHighlight,
        stackBadge: cms.stackBadge, stackHeading: cms.stackHeading, stackHighlight: cms.stackHighlight, stackDescription: cms.stackDescription,
        faqBadge: cms.faqBadge,
      }
    : FALLBACK_CONTENT;

  return <CommonTechPage {...content} />;
};

export default Reactjs;
