import React from "react";
import {
  FaJava, FaBug, FaBuilding, FaCloud, FaRocket, FaTools,
  FaServer, FaCogs, FaDatabase, FaLock, FaCheckCircle,
  FaLayerGroup, FaStar, FaHeadset, FaCode, FaSyncAlt,
} from "react-icons/fa";
import javaImg from "../Assets/java.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const FALLBACK_CONTENT = {
  banner: {
    bgImage: "/Assets/stock/photo-1555066931-4365d14bab8c.webp",
    image: javaImg,
    category: "Enterprise App Development",
    breadcrumb: "Java · Spring Boot · Microservices",
    title: "Java · Spring Boot · Microservices",
    tagline:
      "Build powerful, secure, and massively scalable enterprise applications using Java — trusted by global organizations for its unmatched stability, cross-platform reach, and performance under any workload.",
  },

  intro: {
    badge: "Future IT Touch · Java Experts",
    heading: "Build Robust Enterprise Solutions with",
    highlight: "Java & Spring Boot",
    paras: [
      "At Future IT Touch, we specialize in delivering high-performance, enterprise-grade Java applications using modern frameworks like Spring Boot, Hibernate, and Java EE — architected for reliability, scalability, and long-term maintainability across web, desktop, and cloud environments.",
      "Our Java developers build secure, modular, and high-performing business applications tailored to your workflows — whether it's a large-scale enterprise platform, a microservices-based system, or a real-time API-driven backend integration.",
      "From startups building their first backend to global enterprises modernizing legacy systems, we deliver Java-based solutions optimized for performance, security, and seamless integration with modern cloud infrastructure and third-party tools.",
    ],
    highlights: [
      "Spring Boot & Java EE enterprise applications built for high availability and scalability",
      "Microservices architecture for modular, independently deployable service layers",
      "Secure RESTful & GraphQL APIs integrated with AWS, Google Cloud, and Azure",
      "Full deployment lifecycle with Docker, Kubernetes, CI/CD pipelines, and 24/7 support",
    ],
    stats: [
      { num: "300+", label: "Java Apps Delivered",     desc: "Enterprise Java applications built across finance, healthcare, education, and logistics.",  icon: <FaJava /> },
      { num: YEARS_EXPERIENCE_DISPLAY,  label: "Years Java Expertise",    desc: `${YEARS_EXPERIENCE_DISPLAY} years of enterprise Java development with Spring Boot, Hibernate, and Jakarta EE.`,        icon: <FaLayerGroup /> },
      { num: "400+", label: "Global Clients Served",   desc: "400+ clients worldwide trusting us for scalable and secure Java-based solutions.",            icon: <FaStar /> },
    ],
  },

  services: [
    {
      icon: <FaJava />,
      title: "Custom Java Application Development",
      desc: "Secure, high-performance, and scalable enterprise applications using Java frameworks like Spring Boot and Java EE — with modular architectures for reliability and cross-platform support.",
      points: [
        "Spring Boot & Java EE development",
        "Cross-platform web, desktop & cloud",
        "Modular, maintainable architecture",
        "Scalable enterprise-grade systems",
      ],
    },
    {
      icon: <FaBuilding />,
      title: "Enterprise Software Development",
      desc: "Robust enterprise-grade software for finance, healthcare, logistics, and eCommerce — with microservices, workflow automation, and high-availability fault-tolerant architecture.",
      points: [
        "Microservices architecture",
        "Enterprise API & tool integration",
        "Workflow automation & CRM sync",
        "High-availability fault tolerance",
      ],
    },
    {
      icon: <FaCloud />,
      title: "API & Backend Development",
      desc: "Secure and efficient RESTful and GraphQL APIs for smooth data exchange — with real-time integrations, cloud backend connectivity (AWS, GCP, Azure), and JWT/OAuth2 security.",
      points: [
        "REST & GraphQL API development",
        "AWS, GCP & Azure integration",
        "JWT & OAuth2 security layers",
        "Real-time data communication",
      ],
    },
    {
      icon: <FaBug />,
      title: "Java Application Testing & QA",
      desc: "Comprehensive unit, integration, and regression testing using JUnit and Selenium — with load and stress testing, automated CI/CD pipelines, and production-ready builds.",
      points: [
        "JUnit & Selenium test suites",
        "Load & stress testing",
        "Automated CI/CD pipelines",
        "Multi-environment QA validation",
      ],
    },
    {
      icon: <FaRocket />,
      title: "Deployment & Optimization",
      desc: "Deployment across on-premise, cloud, and hybrid infrastructures — with Docker and Kubernetes containerization, automated release cycles, and continuous server performance monitoring.",
      points: [
        "Docker & Kubernetes orchestration",
        "On-premise, cloud & hybrid deploy",
        "Server performance optimization",
        "Zero-downtime release pipelines",
      ],
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Post-Launch Support",
      desc: "Ongoing updates, performance improvements, bug fixes, and version upgrades post-launch — with 24/7 technical support and proactive monitoring for uninterrupted business operations.",
      points: [
        "24/7 technical support",
        "Framework & version upgrades",
        "Proactive performance monitoring",
        "Feature enhancements & bug fixes",
      ],
    },
  ],

  process: [
    { icon: <FaCheckCircle />, title: "Requirement Analysis & Planning",      desc: "Analyzing your business requirements and defining a robust Java-based solution architecture aligned with your goals, scale, and long-term vision." },
    { icon: <FaCode />,        title: "System Architecture & UI Design",      desc: "Designing scalable system structures and intuitive user interfaces for seamless functionality, optimal data flow, and consistent user experience." },
    { icon: <FaJava />,        title: "Java Application Development",         desc: "Using Spring Boot, Hibernate, and Java EE to build reliable, high-performance applications with clean modular code and best-practice architecture." },
    { icon: <FaCloud />,       title: "Backend Integration & API Development",desc: "Developing secure APIs and integrating with external systems, databases, and third-party services to ensure smooth and reliable data exchange." },
    { icon: <FaBug />,         title: "Testing & Quality Assurance",          desc: "Rigorous application testing ensuring flawless performance, scalability, and security before deployment — via automated suites and multi-environment validation." },
    { icon: <FaRocket />,      title: "Deployment & Cloud Setup",             desc: "Deploying Java applications across cloud or on-premise environments with optimized performance, containerization, and high-availability configuration." },
    { icon: <FaSyncAlt />,     title: "Post-Launch Monitoring & Optimization",desc: "Continuous support, performance monitoring, and upgrades to ensure long-term success, reliability, and peak performance of your Java applications." },
  ],

  features: [
    { icon: <FaServer />,   title: "Scalable Enterprise Solutions",   desc: "Java-based systems designed to scale efficiently with your business growth — maintaining performance, reliability, and data integrity under increasing operational load." },
    { icon: <FaCogs />,     title: "Microservices Architecture",       desc: "Modular, flexible, and independently deployable microservices for faster development cycles, easier maintenance, and streamlined updates across large systems." },
    { icon: <FaDatabase />, title: "Database & API Integration",       desc: "Robust integrations with SQL and NoSQL databases and secure RESTful APIs for seamless connectivity, real-time data access, and maximum application performance." },
    { icon: <FaLock />,     title: "Enterprise-Grade Security",        desc: "Data encryption, secure authentication, and industry compliance built in — protecting your application, users, and sensitive business data at every system layer." },
    { icon: <FaRocket />,   title: "Performance Optimization",         desc: "JVM tuning, caching strategies, and code-level optimizations to reduce latency, improve throughput, and deliver exceptional performance under any workload." },
    { icon: <FaTools />,    title: "Long-Term Maintenance & Support",  desc: "Continuous maintenance, bug fixing, and version updates ensuring your Java applications run flawlessly and stay compatible with the latest frameworks and OS versions." },
  ],

  stack: [
    { name: "Java 21 LTS" },
    { name: "Spring Boot 3.x" },
    { name: "Spring Security" },
    { name: "Hibernate / JPA" },
    { name: "Jakarta EE" },
    { name: "Maven / Gradle" },
    { name: "MySQL / PostgreSQL" },
    { name: "MongoDB" },
    { name: "Redis" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "AWS / GCP / Azure" },
    { name: "JUnit / Mockito" },
    { name: "Selenium" },
    { name: "Jenkins / GitHub Actions" },
    { name: "GraphQL / REST" },
  ],

  slider: [
    { count: "300+", title: "Java Applications Delivered",  desc: "300+ Java apps built across finance, healthcare, education, and enterprise — engineered for performance, scalability, and long-term business value.",             image: "/Assets/seerviceSlider/slide1.webp" },
    { count: YEARS_EXPERIENCE_DISPLAY,  title: "Years of Java Expertise",      desc: `${YEARS_EXPERIENCE_DISPLAY} years of experience in Java technologies — Spring Boot, Hibernate, and Jakarta EE — delivering robust, cloud-ready, and high-performing enterprise systems.`, image: "/Assets/seerviceSlider/slide2.webp" },
    { count: "400+", title: "Satisfied Global Clients",     desc: "400+ businesses globally trust us for custom Java solutions that power digital transformation and operational innovation across multiple industries.",           image: "/Assets/seerviceSlider/slide3.webp" },
    { count: "99%",  title: "Deployment Success Rate",      desc: "99% successful deployment rate across cloud, on-premise, and hybrid environments — minimizing downtime and maximizing performance at every release.",           image: "/Assets/seerviceSlider/slide4.webp" },
    { count: "24/7", title: "Dedicated Technical Support",  desc: "Our team provides 24/7 assistance keeping your Java applications secure, optimized, and continuously updated to meet evolving business requirements.",           image: "/Assets/seerviceSlider/slide5.webp" },
  ],

  faq: {
    title: "Java Application Development Services",
    items: [
      { title: "Why choose Java for application development?",         description: "Java offers unmatched stability, scalability, and security — making it ideal for enterprise-grade applications that need to perform reliably across diverse platforms and workloads." },
      { title: "Do you build enterprise-level Java solutions?",        description: "Yes, we specialize in large-scale, secure, and performance-optimized enterprise Java applications using Spring Boot, Hibernate, and microservices architecture." },
      { title: "Can you integrate Java apps with existing systems?",   description: "Absolutely. We integrate Java apps with CRMs, ERPs, APIs, and databases for seamless interoperability, data synchronization, and workflow automation." },
      { title: "What Java frameworks do you use?",                     description: "We primarily use Spring Boot, Hibernate, Jakarta EE, and microservices architecture to build modern, efficient, and maintainable Java applications." },
      { title: "Do you offer cloud deployment for Java apps?",         description: "Yes, we deploy Java applications on AWS, Google Cloud, and Azure with Docker, Kubernetes, and auto-scaling for optimized performance and high availability." },
      { title: "How do you ensure security in Java applications?",     description: "We implement secure authentication (JWT, OAuth2), data encryption, and access control measures to safeguard sensitive business data and system integrity." },
      { title: "Can you migrate existing applications to Java?",       description: "Yes, we provide complete migration services to modernize legacy systems and rebuild them using Java's latest frameworks, tools, and cloud-native architecture." },
      { title: "Do you provide post-deployment support?",              description: "We offer long-term maintenance, performance monitoring, and framework upgrades to ensure your Java applications remain efficient and up-to-date post-launch." },
      { title: "Which industries benefit most from Java solutions?",   description: "Our Java applications serve finance, healthcare, education, logistics, and eCommerce — each with domain-specific integrations and compliance requirements built in." },
      { title: "Can Java handle high-traffic applications?",           description: "Yes. Java's JVM concurrency model and Spring Boot's async capabilities make it ideal for high-traffic systems requiring efficiency, throughput, and real-time responsiveness." },
    ],
  },
};

const Java = ({ cms } = {}) => {
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

export default Java;
