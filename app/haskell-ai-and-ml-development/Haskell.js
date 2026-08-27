import React from "react";
import {
  FaLock, FaRocket, FaCode, FaServer,
  FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaCheckCircle, FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud,
} from "react-icons/fa";
import { SiHaskell } from "react-icons/si";
import haskellImg from "../Assets/Haskell.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const FALLBACK_CONTENT = {
  banner: {
    bgImage: "/Assets/stock/photo-1620712943543-bcc4688e7485.webp",
    image: haskellImg,
    category: "AI & Machine Learning",
    breadcrumb: "Haskell · AI · ML",
    title: "Haskell · AI · ML",
    tagline:
      "Build high-performance, reliable, and mathematically robust AI and machine learning applications using Haskell — the functional programming language renowned for type safety, parallel computing, and code correctness.",
  },

  intro: {
    badge: "Future IT Touch · Haskell AI Experts",
    heading: "Build Robust AI & ML Systems with",
    highlight: "Haskell Development",
    paras: [
      "At Future IT Touch, we specialize in creating high-performance AI and machine learning solutions that leverage Haskell's functional programming strengths, type safety, and parallel computation capabilities — delivering reliable, scalable applications for advanced data-driven projects.",
      "From machine learning pipelines and predictive modeling to neural networks and large-scale data analytics, our developers craft Haskell-based AI solutions optimized for performance, accuracy, and long-term maintainability.",
      "Whether you need real-time AI computations, large-scale data processing, or custom ML applications, our team ensures clean functional code, efficient algorithms, and seamless integration that empowers your business with intelligent automation and actionable insights.",
    ],
    highlights: [
      "Haskell's type system ensuring correctness and eliminating entire classes of runtime bugs in AI pipelines",
      "Parallel and concurrent ML computation using Haskell's STM and async libraries",
      "Integration with TensorFlow Haskell bindings, HLearn, and scientific computing libraries",
      "Functional data pipelines for large-scale model training, inference, and analytics delivery",
    ],
    stats: [
      { num: "150+", label: "Haskell AI Solutions",     desc: "High-performance Haskell AI & ML systems built for predictive analytics and automation.",  icon: <SiHaskell /> },
      { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Haskell Expertise",  desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering Haskell for functional AI, ML, and data-intensive systems.`,       icon: <FaLayerGroup /> },
      { num: "200+", label: "Clients Empowered",        desc: "200+ organizations powered by Haskell AI and ML solutions across diverse industries.",         icon: <FaStar /> },
    ],
  },

  services: [
    {
      icon: <SiHaskell />,
      title: "Custom Haskell Development",
      desc: "Efficient, high-performance AI and ML applications using Haskell — with modular, scalable backend architectures for data processing, model training, and intelligent prediction pipelines.",
      points: [
        "High-performance Haskell AI apps",
        "Modular ML backend architectures",
        "Prediction & training pipelines",
        "Clean, type-safe Haskell code",
      ],
    },
    {
      icon: <FaServer />,
      title: "AI & ML Solutions Powered by Haskell",
      desc: "Advanced AI and ML features including predictive models, neural networks, and data pipelines — Haskell-powered workflows for real-time analytics and intelligent automation.",
      points: [
        "Predictive models & neural nets",
        "Real-time analytics workflows",
        "Large-scale ML computation",
        "Haskell + ML framework integration",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Machine Learning Integration",
      desc: "Haskell AI applications connected with frontend and backend platforms — APIs for data exchange, efficient pipelines for large datasets, and optimized Haskell algorithms for ML workloads.",
      points: [
        "ML data exchange APIs",
        "Large dataset pipelines",
        "Model training optimization",
        "Backend platform integration",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "API & Data Processing Development",
      desc: "RESTful APIs serving AI and ML models and analytics — Haskell pipelines integrated into existing systems with dashboards and visualization tools for ML model results and insights.",
      points: [
        "AI model serving REST APIs",
        "ML pipeline data integration",
        "Visualization & dashboard tools",
        "Scalable Haskell API services",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Maintenance",
      desc: "Secure coding practices, encryption, and safe data handling for AI systems — protecting sensitive ML data and ensuring resource efficiency in computation-heavy Haskell projects.",
      points: [
        "Secure coding & encryption",
        "Sensitive AI data protection",
        "Resource & memory efficiency",
        "Performance tuning & updates",
      ],
    },
    {
      icon: <FaTools />,
      title: "Continuous Support & Optimization",
      desc: "Long-term support for Haskell AI and ML projects — algorithm and dependency optimization, system monitoring for uptime and efficiency, and expert scalability consultation.",
      points: [
        "Long-term AI system support",
        "Algorithm & model optimization",
        "System uptime monitoring",
        "Scalability & pipeline consulting",
      ],
    },
  ],

  process: [
    { icon: <FaCheckCircle />, title: "Requirement Analysis",              desc: "Understanding your AI and ML goals, datasets, and computational needs — identifying challenges and designing a roadmap for Haskell-powered AI solutions." },
    { icon: <FaServer />,      title: "System Architecture Planning",      desc: "Designing robust architectures for ML workflows — ensuring scalability, parallel computations, and seamless integration with Haskell applications." },
    { icon: <FaCogs />,        title: "Algorithm Design & Optimization",   desc: "Crafting efficient Haskell algorithms for AI and ML models — optimizing training time, computational accuracy, and predictive performance." },
    { icon: <FaCloud />,       title: "Backend & API Development",         desc: "Developing Haskell backends and APIs for data processing, model training, inference, and seamless integration with other systems." },
    { icon: <FaDatabase />,    title: "Data Management & Analysis",        desc: "Managing, cleaning, and analyzing large datasets to feed AI and ML pipelines — enabling actionable insights and accurate model predictions." },
    { icon: <FaRocket />,      title: "Integration & Deployment",          desc: "Integrating Haskell-based modules with existing platforms or cloud services — deploying AI and ML models efficiently and reliably." },
    { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Optimizing code efficiency, implementing caching, and ensuring secure, high-performance AI and ML pipelines in Haskell." },
    { icon: <FaBug />,         title: "Testing & Quality Assurance",       desc: "Rigorous testing of every Haskell AI component for accuracy, reliability, and performance — delivering robust AI and ML systems." },
    { icon: <FaCode />,        title: "Deployment & Monitoring",           desc: "Handling deployment, server configuration, and real-time monitoring to ensure Haskell-based AI and ML applications run smoothly at scale." },
    { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",   desc: "Ongoing support, updates, and performance audits post-deployment — ensuring Haskell AI and ML solutions remain future-ready and reliable." },
  ],

  features: [
    { icon: <FaCode />,      title: "Custom Haskell Development",       desc: "Haskell-powered AI and ML applications that are fast, scalable, and maintainable — ensuring performance, reliability, and correctness for complex AI workflows." },
    { icon: <FaCogs />,      title: "High-Performance AI & ML Pipelines",desc: "Robust ML workflows, model training, and data pipelines built with Haskell — delivering optimized backend logic and minimal latency for demanding AI systems." },
    { icon: <FaServer />,    title: "AI & ML Framework Integration",    desc: "Haskell modules integrated with AI/ML frameworks, analytics tools, and frontend platforms for seamless, intelligent data-driven solutions." },
    { icon: <FaLock />,      title: "Data Security & Compliance",       desc: "Sensitive AI data, models, and computation pipelines secured with encryption and compliance measures for enterprise-grade safety and trust." },
    { icon: <FaRocket />,    title: "Performance Optimization",         desc: "Haskell operations fine-tuned for low-latency computation, fast model training, and efficient resource utilization across complex ML workloads." },
    { icon: <FaTools />,     title: "Ongoing Support & Optimization",   desc: "Continuous monitoring, maintenance, and optimization ensuring high availability and scalable AI and ML solutions long after initial deployment." },
  ],

  stack: [
    { name: "Haskell GHC 9.x" },
    { name: "Stack / Cabal" },
    { name: "Servant (APIs)" },
    { name: "HLearn" },
    { name: "TensorFlow (Haskell)" },
    { name: "Accelerate.jl" },
    { name: "Conduit / Pipes" },
    { name: "STM / Async" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Docker" },
    { name: "AWS / GCP" },
    { name: "REST APIs" },
    { name: "QuickCheck" },
    { name: "GitHub Actions" },
    { name: "Nix" },
  ],

  slider: [
    { count: "150+", title: "Haskell AI Solutions Delivered",    desc: "150+ Haskell-powered AI and ML solutions built — delivering high-performance, scalable, and intelligent systems for predictive analytics and automation.",       image: "/Assets/seerviceSlider/slide1.webp" },
    { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Haskell Expertise",        desc: `${YEARS_EXPERIENCE_DISPLAY} years crafting robust Haskell AI and ML solutions — optimizing performance, model training efficiency, and scalability for complex AI systems.`,    image: "/Assets/seerviceSlider/slide2.webp" },
    { count: "200+", title: "Clients Empowered Globally",        desc: "200+ organizations trust us for Haskell AI solutions enhancing predictive capabilities, automation, and data-driven insights across healthcare, finance, and research.", image: "/Assets/seerviceSlider/slide3.webp" },
    { count: "99%",  title: "Optimization Success Rate",         desc: "Up to 99% efficiency in Haskell AI computations — fast model execution, accurate predictions, and minimal resource overhead through advanced optimizations.",   image: "/Assets/seerviceSlider/slide4.webp" },
    { count: "24/7", title: "Technical Support & Monitoring",    desc: "24/7 monitoring, updates, and optimization keeping Haskell AI and ML systems stable, secure, and performing at peak efficiency for all critical workloads.",     image: "/Assets/seerviceSlider/slide5.webp" },
  ],

  faq: {
    title: "Haskell AI & ML Development Services",
    items: [
      { title: "What is Haskell?",                                    description: "Haskell is a high-performance functional programming language ideal for building robust, scalable, and mathematically correct AI and ML applications." },
      { title: "Why use Haskell for AI and ML?",                      description: "Haskell combines performance, type safety, and expressiveness — enabling efficient development of AI applications with maintainable, high-quality functional code." },
      { title: "Can Haskell handle large datasets?",                  description: "Yes, Haskell is optimized for large-scale data, complex ML computations, and parallel processing — making it ideal for demanding AI workflows." },
      { title: "Is Haskell suitable for machine learning and AI?",    description: "Absolutely. Haskell integrates with AI/ML frameworks and enables high-performance computations for predictive models and intelligent automation systems." },
      { title: "Do you integrate Haskell into existing systems?",     description: "Yes, we integrate Haskell modules into existing applications or cloud environments for enhanced AI/ML performance and scalability." },
      { title: "How secure are Haskell AI applications?",            description: "We implement encryption, secure APIs, and environment isolation to ensure your Haskell-based AI systems are safe and production-ready." },
      { title: "Can you optimize existing Haskell code?",            description: "Definitely. We refactor and optimize Haskell code for faster computations, improved ML performance, and enhanced scalability." },
      { title: "Do you offer ongoing maintenance for Haskell projects?", description: "Yes, we provide long-term support including performance tuning, library updates, and system optimization for all AI and ML solutions." },
      { title: "Which industries benefit from Haskell AI solutions?", description: "Healthcare, finance, logistics, and research leverage Haskell for high-performance computing and AI and ML solution development." },
      { title: "Can Haskell integrate with analytics and visualization tools?", description: "Yes, Haskell AI and ML solutions connect with visualization libraries and analytics platforms to display computations, insights, and model predictions." },
    ],
  },
};

const Haskell = ({ cms } = {}) => {
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

export default Haskell;
