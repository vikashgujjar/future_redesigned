import React from "react";
import {
  FaGem, FaLock, FaRocket, FaCode, FaServer,
  FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaCheckCircle, FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud,
} from "react-icons/fa";
import rubyImg from "../Assets/ruby.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";

const FALLBACK_CONTENT = {
  banner: {
    bgImage: "/Assets/stock/photo-1677442135703-1787eea5ce01.webp",
    image: rubyImg,
    category: "AI & Machine Learning",
    breadcrumb: "Ruby · PyBrain · Neural Networks",
    title: "Ruby · PyBrain · Neural Networks",
    tagline:
      "Build intelligent, scalable AI-powered applications combining Ruby's elegant simplicity with PyBrain's advanced neural network capabilities — for automation, predictive analytics, and machine learning systems.",
  },

  intro: {
    badge: "Future IT Touch · Ruby & AI Experts",
    heading: "Build Intelligent AI Systems with",
    highlight: "Ruby & PyBrain",
    paras: [
      "At Future IT Touch, we specialize in developing robust, scalable software solutions that merge Ruby's elegant simplicity with PyBrain's advanced neural network capabilities — delivering intelligent, high-performance AI and machine learning applications.",
      "From AI-based automation tools and intelligent data models to predictive analytics and deep learning systems, our developers craft efficient Ruby–PyBrain solutions designed for adaptability, precision, and speed at scale.",
      "Whether you need deep learning integration, real-time decision systems, or custom backend architectures, our team ensures optimized algorithms, clean code, and seamless system performance that drives smarter business outcomes.",
    ],
    highlights: [
      "PyBrain neural networks integrated with Ruby backends for intelligent AI workflows",
      "Predictive models and learning algorithms optimized for accuracy and speed",
      "RESTful APIs built with Rails and Sinatra for AI data processing and delivery",
      "Full-cycle development from requirement analysis through deployment and 24/7 support",
    ],
    stats: [
      { num: "150+", label: "AI Solutions Delivered",   desc: "Ruby & PyBrain-powered intelligent systems built for global businesses.",      icon: <FaGem /> },
      { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Ruby & AI Expertise",desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering Ruby and PyBrain for intelligent AI applications.`,  icon: <FaLayerGroup /> },
      { num: "200+", label: "Clients Empowered",        desc: "200+ organizations powered by Ruby–PyBrain AI and automation systems.",         icon: <FaStar /> },
    ],
  },

  services: [
    {
      icon: <FaCode />,
      title: "Custom Ruby Development",
      desc: "Efficient and scalable web and AI-driven applications using Ruby — with secure, modular backend architectures and enterprise-grade solutions for automation and intelligent systems.",
      points: [
        "Scalable Ruby web applications",
        "Secure modular backend systems",
        "Enterprise AI & automation tools",
        "Clean, maintainable Ruby code",
      ],
    },
    {
      icon: <FaServer />,
      title: "PyBrain-Powered AI Solutions",
      desc: "Advanced AI and neural network systems using PyBrain — predictive models, learning algorithms, performance-optimized neural networks, and integration with Ruby frameworks.",
      points: [
        "Neural network model development",
        "Predictive analytics systems",
        "PyBrain + Ruby framework integration",
        "Algorithm performance optimization",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Machine Learning Integration",
      desc: "Fast neural network computations and efficient preprocessing pipelines — PyBrain integrated with Ruby applications and ML frameworks for improved model accuracy and performance.",
      points: [
        "PyBrain AI workflow integration",
        "ML model preprocessing pipelines",
        "Optimized PyBrain vectorization",
        "Cross-framework ML connectivity",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "API & Intelligent System Development",
      desc: "Ruby-based RESTful APIs for AI data processing and prediction services — PyBrain neural networks integrated into backend systems with analytics dashboards via Rails and Sinatra.",
      points: [
        "Rails & Sinatra REST APIs",
        "AI prediction service endpoints",
        "Analytics dashboards & insights",
        "PyBrain backend integration",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Maintenance",
      desc: "Robust security and data validation standards for AI systems — protection against vulnerabilities, efficient memory and resource management, and regular performance tuning.",
      points: [
        "AI system security hardening",
        "Data validation & auth safety",
        "Memory & resource optimization",
        "Dependency updates & tuning",
      ],
    },
    {
      icon: <FaTools />,
      title: "Continuous Support & Optimization",
      desc: "Long-term maintenance for Ruby & PyBrain projects — dependency upgrades, AI algorithm optimization, system performance monitoring, and scalability consultation.",
      points: [
        "Long-term AI system maintenance",
        "Algorithm & dependency upgrades",
        "Performance & resource monitoring",
        "Scalability & efficiency consulting",
      ],
    },
  ],

  process: [
    { icon: <FaCheckCircle />, title: "Requirement Analysis",              desc: "Understanding your business and AI needs — identifying data challenges and designing a roadmap for Ruby–PyBrain solutions tailored for performance and intelligence." },
    { icon: <FaServer />,      title: "System Architecture Planning",      desc: "Designing optimized architectures for AI computations and neural network workflows — ensuring scalability and seamless integration with Ruby applications." },
    { icon: <FaCogs />,        title: "Algorithm Design & Optimization",   desc: "Crafting efficient AI algorithms using PyBrain — minimizing computation time while maximizing learning performance and predictive accuracy." },
    { icon: <FaCloud />,       title: "Backend & API Development",         desc: "Building robust Ruby backends and APIs integrated with PyBrain neural networks for fast AI data processing, transformation, and delivery." },
    { icon: <FaDatabase />,    title: "Data Modeling & Analysis",          desc: "Leveraging PyBrain to model, train, and analyze datasets — developing intelligent predictions and actionable AI-driven insights." },
    { icon: <FaRocket />,      title: "Integration & Deployment",          desc: "Integrating PyBrain-powered modules into existing Ruby applications or cloud environments — ensuring seamless workflow and reliable deployment pipelines." },
    { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Enhancing code efficiency, reducing AI computation overhead, and implementing security measures for robust and reliable intelligent systems." },
    { icon: <FaBug />,         title: "Testing & Quality Assurance",       desc: "Unit and integration testing of every AI component — ensuring correctness, speed, and reliability for clean, bug-free Ruby & PyBrain applications." },
    { icon: <FaCode />,        title: "Deployment & Monitoring",           desc: "Handling production deployment, server configuration, and real-time monitoring — ensuring PyBrain-based AI solutions perform flawlessly at scale." },
    { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",   desc: "Continuous maintenance, algorithm upgrades, and performance audits post-deployment — keeping Ruby–PyBrain systems future-ready and optimized." },
  ],

  features: [
    { icon: <FaCode />,      title: "Custom Ruby Development",         desc: "Ruby-based AI software handling automation, intelligent workflows, and backend logic — with flexibility, reliability, and performance at every layer." },
    { icon: <FaCogs />,      title: "PyBrain-Powered AI Computing",    desc: "Neural network modeling, learning algorithms, and intelligent data computation powered by PyBrain for advanced AI predictions and analytics." },
    { icon: <FaServer />,    title: "AI & Machine Learning Integration",desc: "PyBrain integrated with AI/ML frameworks to create optimized learning pipelines, predictive models, and intelligent automation workflows." },
    { icon: <FaLock />,      title: "Data Security & Reliability",     desc: "AI processing pipelines secured with encryption and modern data security standards — ensuring optimal trust, safety, and compliance." },
    { icon: <FaRocket />,    title: "High-Performance Optimization",   desc: "Ruby and PyBrain operations fine-tuned for maximum efficiency and low-latency AI computation in demanding, data-intensive environments." },
    { icon: <FaTools />,     title: "Ongoing Support & Optimization",  desc: "Long-term maintenance, optimization consulting, and continuous improvement for Ruby–PyBrain AI systems across their full lifecycle." },
  ],

  stack: [
    { name: "Ruby 3.x" },
    { name: "Ruby on Rails 7" },
    { name: "Sinatra" },
    { name: "PyBrain" },
    { name: "Python 3.x" },
    { name: "TensorFlow" },
    { name: "Scikit-learn" },
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "REST APIs" },
    { name: "Docker" },
    { name: "AWS / GCP" },
    { name: "RSpec / Minitest" },
    { name: "GitHub Actions" },
  ],

  slider: [
    { count: "150+", title: "AI-Driven Solutions Delivered",      desc: "150+ Ruby & PyBrain-powered intelligent systems built — delivering performance, scalability, and predictive accuracy for global businesses.",               image: "/Assets/seerviceSlider/slide1.webp" },
    { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Ruby & AI Expertise",       desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering Ruby and PyBrain frameworks — ensuring superior code quality, reliable neural networks, and intelligent AI solutions.`,          image: "/Assets/seerviceSlider/slide2.webp" },
    { count: "200+", title: "Clients Empowered Globally",         desc: "200+ organizations trust us for Ruby & PyBrain systems delivering AI predictions, automation, and high-performance computational intelligence.",            image: "/Assets/seerviceSlider/slide3.webp" },
    { count: "99%",  title: "AI Optimization Success Rate",       desc: "Up to 99% improvement in AI computation efficiency — reducing processing time while enhancing predictive accuracy and system scalability.",               image: "/Assets/seerviceSlider/slide4.webp" },
    { count: "24/7", title: "Technical Support & Monitoring",     desc: "Continuous monitoring, updates, and optimization keeping Ruby–PyBrain systems stable, secure, and performing at peak capacity around the clock.",           image: "/Assets/seerviceSlider/slide5.webp" },
  ],

  faq: {
    title: "Ruby & PyBrain Development Services",
    items: [
      { title: "What is PyBrain?",                                   description: "PyBrain is a Python-based library for machine learning and neural networks. When integrated with Ruby, it enables rapid development of intelligent and predictive AI application systems." },
      { title: "Why use Ruby with PyBrain for AI solutions?",        description: "Combining Ruby's simplicity and PyBrain's neural network capabilities allows rapid development of scalable, intelligent, and maintainable AI applications." },
      { title: "Can PyBrain handle large datasets?",                 description: "Yes, PyBrain works with efficient data structures and optimized computations to handle large-scale AI datasets for predictive modeling and analysis." },
      { title: "Is PyBrain suitable for machine learning and AI?",   description: "Absolutely. PyBrain provides neural network and reinforcement learning capabilities essential for AI and ML model development and deployment." },
      { title: "Do you integrate PyBrain into existing Ruby systems?",description: "Yes, we integrate PyBrain-based AI computation into existing Ruby applications to enhance automation, predictions, and intelligent workflows." },
      { title: "How secure are Ruby–PyBrain applications?",          description: "We implement encryption, safe API practices, and environment isolation to ensure your AI systems are secure, reliable, and production-ready." },
      { title: "Can you optimize existing Ruby code with PyBrain?",   description: "Definitely. We refactor and enhance Ruby code by integrating PyBrain neural networks for faster AI computations and more efficient predictions." },
      { title: "Do you offer ongoing maintenance for Ruby–PyBrain projects?", description: "Yes, we provide long-term support including performance tuning, dependency updates, and system optimization for AI solutions." },
      { title: "Which industries benefit from PyBrain solutions?",   description: "Finance, healthcare, logistics, and research use PyBrain for AI predictions, automation, and machine learning solutions across diverse workflows." },
      { title: "Can PyBrain be integrated with visualization tools?", description: "Yes, PyBrain outputs integrate with visualization libraries to display predictions, neural network results, and AI analytics insights effectively." },
    ],
  },
};

const Ruby = ({ cms } = {}) => {
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

export default Ruby;
