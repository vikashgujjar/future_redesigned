import React from "react";
import {
  FaLock, FaRocket, FaCode, FaServer,
  FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaCheckCircle, FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud,
} from "react-icons/fa";
import { SiJulia } from "react-icons/si";
import juliaImg from "../Assets/Julia.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const FALLBACK_CONTENT = {
  banner: {
    bgImage: "/Assets/stock/photo-1635070041078-e363dbe005cb.webp",
    image: juliaImg,
    category: "Scientific Computing & AI",
    breadcrumb: "Julia · AI · High Performance",
    title: "Julia · AI · High Performance",
    tagline:
      "Build high-performance, data-intensive applications using Julia — the modern programming language designed for speed, numerical computing, and scientific AI workflows trusted by researchers and engineers worldwide.",
  },

  intro: {
    badge: "Future IT Touch · Julia Experts",
    heading: "Build Blazing-Fast Scientific Systems with",
    highlight: "Julia Development",
    paras: [
      "At Future IT Touch, we specialize in creating high-performance software solutions that leverage Julia's speed, numerical computing capabilities, and elegant syntax — delivering optimized data-driven and scientific applications for the modern enterprise.",
      "From scientific simulations and numerical modeling to AI workflows and optimization tasks, our developers craft Julia-based solutions designed for performance, accuracy, and scalability — with clean code and efficient algorithms throughout.",
      "Whether you need real-time computations, large-scale data processing, or custom scientific applications, our team ensures seamless system integration and actionable insights that empower your business with Julia's unmatched computational speed.",
    ],
    highlights: [
      "Julia's JIT compilation for C-level speed with Python-level developer productivity",
      "AI and ML integration with Flux.jl, MLJ.jl, and TensorFlow Julia bindings",
      "Scientific data pipelines using DataFrames.jl, Plots.jl, and numerical libraries",
      "Scalable RESTful APIs with Genie.jl framework and full cloud deployment support",
    ],
    stats: [
      { num: "150+", label: "Julia Solutions Delivered",   desc: "High-performance Julia applications built for science, AI, and data-intensive workflows.",  icon: <SiJulia /> },
      { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Julia Expertise",       desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering Julia for scientific computing, AI, and large-scale data.`,         icon: <FaLayerGroup /> },
      { num: "200+", label: "Clients Empowered",           desc: "200+ organizations powered by Julia-based scientific and AI computation systems.",             icon: <FaStar /> },
    ],
  },

  services: [
    {
      icon: <FaCode />,
      title: "Custom Julia Development",
      desc: "Efficient and high-performance applications using Julia — with modular, scalable backend architectures and enterprise-grade solutions for scientific and data-intensive applications.",
      points: [
        "High-performance Julia applications",
        "Modular, scalable architectures",
        "Scientific & data-intensive systems",
        "Clean, maintainable Julia code",
      ],
    },
    {
      icon: <FaServer />,
      title: "Julia-Powered Scientific & AI Solutions",
      desc: "Advanced numerical and AI computation systems using Julia — predictive models, optimized scientific workflows, and large-scale simulation and data processing projects.",
      points: [
        "Numerical computing & simulations",
        "Predictive model development",
        "AI & scientific workflow optimization",
        "Julia + AI/ML framework integration",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Machine Learning & AI Integration",
      desc: "Fast numerical computations in AI workflows using Julia — integration with machine learning frameworks, efficient preprocessing pipelines, and optimized algorithm performance.",
      points: [
        "Flux.jl & MLJ.jl integration",
        "Data preprocessing pipelines",
        "Model performance optimization",
        "Cross-framework ML connectivity",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "API & Scientific Computing Development",
      desc: "Julia-based RESTful APIs for numerical computations and AI services — data pipelines integrated into backend systems with dashboards for scientific insights via Genie.jl.",
      points: [
        "Genie.jl REST API development",
        "Scientific data pipeline APIs",
        "Analytics & visualization dashboards",
        "Scalable computation endpoints",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Maintenance",
      desc: "Robust security and data validation standards for Julia applications — protection against vulnerabilities, efficient memory management for heavy computations, and library updates.",
      points: [
        "Security & data validation",
        "Memory & resource management",
        "Vulnerability protection",
        "Library & dependency updates",
      ],
    },
    {
      icon: <FaTools />,
      title: "Continuous Support & Optimization",
      desc: "Long-term maintenance for Julia projects — dependency upgrades, computational algorithm optimization, system performance monitoring, and scalability consultation.",
      points: [
        "Long-term Julia maintenance",
        "Algorithm & dependency upgrades",
        "Performance & resource monitoring",
        "Scalability & efficiency consulting",
      ],
    },
  ],

  process: [
    { icon: <FaCheckCircle />, title: "Requirement Analysis",              desc: "Understanding your business and technical needs — identifying data and computation challenges and designing a roadmap for Julia solutions tailored for high performance." },
    { icon: <FaServer />,      title: "System Architecture Planning",      desc: "Designing optimized architectures for numerical computations and AI workflows — ensuring scalability and seamless integration with Julia applications." },
    { icon: <FaCogs />,        title: "Algorithm Design & Optimization",   desc: "Crafting efficient numerical and AI algorithms in Julia — minimizing computation time while maximizing predictive accuracy and overall performance." },
    { icon: <FaCloud />,       title: "Backend & API Development",         desc: "Building robust Julia backends and APIs for high-speed data processing, scientific computations, and AI model integration and delivery." },
    { icon: <FaDatabase />,    title: "Data Modeling & Analysis",          desc: "Leveraging Julia's numerical libraries to model, analyze, and visualize large datasets for actionable insights and scientific accuracy." },
    { icon: <FaRocket />,      title: "Integration & Deployment",          desc: "Integrating Julia-powered modules into existing applications or cloud environments — ensuring seamless workflow and reliable deployment pipelines." },
    { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Enhancing code efficiency, reducing computational overhead, and implementing security measures for robust high-performance systems." },
    { icon: <FaBug />,         title: "Testing & Quality Assurance",       desc: "Unit and integration testing ensuring correctness, speed, and reliability — delivering clean, bug-free Julia applications across all environments." },
    { icon: <FaCode />,        title: "Deployment & Monitoring",           desc: "Handling production deployment, server configuration, and real-time monitoring — ensuring Julia-based solutions perform flawlessly at scale." },
    { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",   desc: "Continuous maintenance, library upgrades, and performance audits post-deployment — ensuring Julia systems stay future-ready and efficient." },
  ],

  features: [
    { icon: <FaCode />,      title: "Custom Julia Development",         desc: "Julia-based software handling AI, scientific computation, and data-intensive workflows — with flexibility, reliability, and performance from the ground up." },
    { icon: <FaCogs />,      title: "Julia-Powered Scientific Computing",desc: "High-performance numerical computing, AI modeling, and data-driven analytics powered by Julia's JIT compilation for C-level execution speed." },
    { icon: <FaServer />,    title: "AI & Machine Learning Integration", desc: "Julia integrated with AI/ML frameworks to create optimized learning pipelines, predictive models, and scientific computing workflows." },
    { icon: <FaLock />,      title: "Data Security & Reliability",      desc: "Computational pipelines secured with encryption and compliance with modern standards — ensuring optimal trust, safety, and data integrity." },
    { icon: <FaRocket />,    title: "High-Performance Optimization",    desc: "Julia operations fine-tuned for maximum efficiency and low-latency computations — delivering exceptional throughput in data-heavy environments." },
    { icon: <FaTools />,     title: "Ongoing Support & Optimization",   desc: "Long-term maintenance, optimization consulting, and continuous improvement for Julia-based systems across their complete lifecycle." },
  ],

  stack: [
    { name: "Julia 1.10+" },
    { name: "Flux.jl" },
    { name: "MLJ.jl" },
    { name: "DataFrames.jl" },
    { name: "Plots.jl / Makie" },
    { name: "Genie.jl" },
    { name: "DifferentialEquations.jl" },
    { name: "CUDA.jl" },
    { name: "Turing.jl" },
    { name: "Python (via PyCall)" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Docker" },
    { name: "AWS / GCP" },
    { name: "GitHub Actions" },
    { name: "REST APIs" },
  ],

  slider: [
    { count: "150+", title: "Julia Solutions Delivered",          desc: "150+ Julia-powered applications built for scientific computing, AI, and real-time data processing — each engineered for performance, reliability, and accuracy.", image: "/Assets/seerviceSlider/slide1.webp" },
    { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Julia Expertise",           desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering Julia for scientific computing, AI workflows, and large-scale data processing — delivering superior algorithms and system reliability.`,  image: "/Assets/seerviceSlider/slide2.webp" },
    { count: "200+", title: "Clients Empowered Globally",         desc: "200+ organizations powered by Julia-based solutions for scientific computation, AI, and predictive analytics — spanning research, finance, and engineering.",     image: "/Assets/seerviceSlider/slide3.webp" },
    { count: "99%",  title: "Computation Optimization Success",   desc: "Up to 99% improvement in computational efficiency — reducing processing time while enhancing accuracy through fine-tuned algorithms and parallel processing.",    image: "/Assets/seerviceSlider/slide4.webp" },
    { count: "24/7", title: "Technical Support & Monitoring",     desc: "Continuous monitoring, updates, and optimization keeping Julia systems stable, secure, and performing at peak capacity for all critical applications.",           image: "/Assets/seerviceSlider/slide5.webp" },
  ],

  faq: {
    title: "Julia Development Services",
    items: [
      { title: "What is Julia?",                                   description: "Julia is a high-performance programming language designed for numerical computing, scientific applications, and data-intensive tasks — combining C-level speed with Python-like syntax." },
      { title: "Why use Julia for AI and scientific solutions?",   description: "Julia combines speed and simplicity — allowing rapid development of high-performance AI, machine learning, and scientific computing applications with minimal boilerplate." },
      { title: "Can Julia handle large datasets?",                 description: "Yes, Julia is optimized for handling large-scale data and scientific computations efficiently — with native support for parallel and distributed computing." },
      { title: "Is Julia suitable for machine learning and AI?",   description: "Absolutely. Julia integrates with AI/ML frameworks like Flux.jl and MLJ.jl, enabling high-performance numerical computations for predictive models." },
      { title: "Do you integrate Julia into existing systems?",    description: "Yes, we integrate Julia-based computation modules into existing applications or cloud environments for enhanced performance and scalability." },
      { title: "How secure are Julia applications?",               description: "We implement encryption, secure APIs, and environment isolation to ensure your Julia systems are safe, reliable, and production-ready." },
      { title: "Can you optimize existing Julia code?",            description: "Definitely. We refactor and optimize your Julia code for faster computations, improved performance, and better resource efficiency." },
      { title: "Do you offer ongoing maintenance for Julia projects?", description: "Yes, we provide long-term support including performance tuning, library updates, and system optimization for all Julia-based solutions." },
      { title: "Which industries benefit from Julia solutions?",   description: "Finance, healthcare, research, and engineering leverage Julia for high-performance computing, AI, and scientific simulation solutions." },
      { title: "Can Julia be integrated with visualization tools?", description: "Yes, Julia works seamlessly with Plots.jl, Makie, and other visualization libraries to display computations, analytics, and AI predictions." },
    ],
  },
};

const Julia = ({ cms } = {}) => {
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

export default Julia;
