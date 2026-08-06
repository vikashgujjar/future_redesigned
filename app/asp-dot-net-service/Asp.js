import React from "react";
import {
  FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaLock, FaRocket, FaCheckCircle, FaLayerGroup, FaBolt,
  FaSyncAlt, FaStar, FaHeadset, FaMicrosoft,
} from "react-icons/fa";
import aspImg from "../Assets/asp.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const Asp = () => (
  <CommonTechPage
    banner={{
      bgImage: "/Assets/stock/photo-1542831371-29b0f74f9713.webp",
      image: aspImg,
      category: "Enterprise Technology",
      breadcrumb: "Microsoft · .NET · ASP.NET",
      title: "ASP.NET · .NET Core · MVC",
      tagline:
        "Build robust, secure, and enterprise-grade web applications using Microsoft's most powerful .NET ecosystem — trusted by businesses worldwide.",
    }}

    intro={{
      badge: "Future IT Touch · .NET Experts",
      heading: "Enterprise-Grade Web Apps with",
      highlight: "ASP.NET, .NET Core & MVC",
      paras: [
        "At Future IT Touch, we specialize in developing reliable, high-performance web applications using ASP.NET, .NET Core, and MVC architecture. Our expert .NET developers craft scalable, maintainable systems for startups and enterprises alike.",
        "Whether it's a corporate portal, enterprise ERP, cloud-based platform, or RESTful API backend, we use modern .NET frameworks, structured MVC patterns, and optimized databases to deliver unmatched performance and flexibility.",
        "As a trusted ASP.NET development company, we build applications that are fast, secure, and easy to scale — with clean C# code and Microsoft best practices at every layer.",
      ],
      highlights: [
        "ASP.NET Core & MVC for scalable enterprise architecture",
        "Entity Framework Core with SQL Server / PostgreSQL",
        "Secure JWT, OAuth2 & Microsoft Identity authentication",
        "Azure & AWS deployment with CI/CD pipelines",
      ],
      stats: [
        { num: "100+", label: "Apps Developed",      desc: "Over 100 ASP.NET web solutions built and maintained across industries.",    icon: <FaCode /> },
        { num: YEARS_EXPERIENCE_DISPLAY,  label: "Years .NET Expertise", desc: `${YEARS_EXPERIENCE_DISPLAY} years crafting robust, secure, and scalable .NET systems.`,              icon: <FaMicrosoft /> },
        { num: "500+", label: "Global Clients",       desc: "Trusted by 500+ clients worldwide for enterprise-grade ASP.NET solutions.", icon: <FaStar /> },
      ],
    }}

    services={[
      {
        icon: <FaCode />,
        title: "Custom ASP.NET Web Development",
        desc: "High-performance, scalable web applications built with ASP.NET using clean, modular C# code and enterprise-grade architecture.",
        points: [
          "Enterprise-grade web applications",
          "Secure backend systems in C#",
          "CMS & ERP solutions on .NET",
          "Modular, maintainable codebase",
        ],
      },
      {
        icon: <FaServer />,
        title: "ASP.NET MVC Development",
        desc: "Structured MVC-based ASP.NET solutions with RESTful APIs, Entity Framework, and clean separation of concerns for maintainability.",
        points: [
          "Model-View-Controller architecture",
          "RESTful API integration",
          "Entity Framework data access",
          "Authentication, caching & routing",
        ],
      },
      {
        icon: <FaCogs />,
        title: "ASP.NET Core Development",
        desc: "Lightweight, cross-platform ASP.NET Core applications with modern architecture, high scalability, and third-party cloud integration.",
        points: [
          "Cross-platform .NET Core apps",
          "Microservice-ready architecture",
          "Cloud API integration",
          "Server-side performance optimization",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "API Integration & Backend Services",
        desc: "Robust RESTful APIs using ASP.NET Core Web API — connecting your app with CRMs, ERPs, and external platforms via secure token systems.",
        points: [
          "ASP.NET Core Web API",
          "CRM & ERP integrations",
          "JWT & OAuth2 authentication",
          "Secure data flow architecture",
        ],
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Maintenance",
        desc: "Multi-layered security with SSL, OAuth, data encryption, and protection against SQL injection, XSS, and CSRF attacks.",
        points: [
          "SSL, OAuth & encryption",
          "SQL injection & XSS defense",
          "Vulnerability scanning & patches",
          "24/7 technical monitoring",
        ],
      },
      {
        icon: <FaTools />,
        title: "Ongoing Support & Optimization",
        desc: "Continuous .NET application monitoring, legacy upgrades to .NET Core, performance tuning, and expert post-deployment consultation.",
        points: [
          "Legacy ASP.NET to Core upgrades",
          "Performance & scalability tuning",
          "Bug fixes & system updates",
          "Expert .NET consultation",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirements Analysis",       desc: "Defining your business goals, audience, and technical needs to design a tailored ASP.NET solution." },
      { icon: <FaLayerGroup />,  title: "Planning & Architecture",     desc: "Designing a well-structured backend and database model for scalability, maintainability, and long-term performance." },
      { icon: <FaCode />,        title: "Frontend Integration",        desc: "Collaborating to deliver responsive, engaging UIs seamlessly integrated with the ASP.NET backend." },
      { icon: <FaServer />,      title: "Backend Development",         desc: "Building secure server-side logic and APIs with ASP.NET Core or MVC following Microsoft's best practices." },
      { icon: <FaDatabase />,    title: "Database Design",             desc: "Setting up efficient SQL Server or PostgreSQL databases for smooth data transactions and long-term reliability." },
      { icon: <FaCogs />,        title: "API Development",             desc: "Developing RESTful APIs using ASP.NET Core to integrate with cloud platforms, CRMs, and mobile apps." },
      { icon: <FaShieldAlt />,   title: "Security Hardening",          desc: "Applying data encryption, HTTPS, multi-factor auth, and secure token systems for production-ready security." },
      { icon: <FaBolt />,        title: "Testing & QA",                desc: "Running comprehensive manual and automated tests to ensure flawless functionality and user experience." },
      { icon: <FaRocket />,      title: "Deployment & Server Setup",   desc: "Deploying on Azure, AWS, or private servers with zero-downtime launch and proper scaling configuration." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Support",       desc: "Continuous updates, monitoring, and troubleshooting — keeping your .NET applications optimized and secure." },
    ]}

    features={[
      { icon: <FaCode />,       title: "Custom ASP.NET Solutions",           desc: "Dynamic and secure ASP.NET web applications aligned with your business objectives — built with clean, efficient code for top performance and flexibility." },
      { icon: <FaCogs />,       title: "ASP.NET Core Development",           desc: "Feature-rich, high-performance web apps using ASP.NET Core with fast execution, modular design, and future-ready cross-platform architecture." },
      { icon: <FaServer />,     title: "MVC-Based Web Applications",         desc: "Specializing in ASP.NET MVC projects that provide strong separation of logic, clean code structure, and consistent long-term maintainability." },
      { icon: <FaLock />,       title: "Enterprise Security Implementation",  desc: "Top-tier security layers including role-based access, Microsoft Identity management, and secure token authentication for complete system protection." },
      { icon: <FaRocket />,     title: "Performance Optimization",           desc: "Enhanced .NET applications with caching, async operations, and optimized database queries for lightning-fast performance and effortless scalability." },
      { icon: <FaTools />,      title: "Maintenance & Support",              desc: "24/7 monitoring, version upgrades, and troubleshooting to ensure your ASP.NET applications stay efficient, secure, and always up-to-date." },
    ]}

    techCategories={[
      { title:".NET Technology Stack", techs:[
        {name:"ASP.NET Core 8",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg"},
        {name:".NET 8 / 9",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"},
        {name:"C# 12",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},
        {name:"ASP.NET MVC"},
        {name:"Entity Framework Core",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/entityframeworkcore/entityframeworkcore-original.svg"},
        {name:"Blazor",icon:"https://cdn.simpleicons.org/blazor"},
        {name:"SignalR"},
        {name:"LINQ"},
        {name:"SQL Server",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"},
        {name:"Swagger / OpenAPI",icon:"https://cdn.simpleicons.org/swagger"},
        {name:"NUnit / xUnit"},
        {name:"Docker",icon:"https://cdn.simpleicons.org/docker"},
        {name:"Microsoft Identity"},
        {name:"Redis",icon:"https://cdn.simpleicons.org/redis"},
        {name:"Dapper"},
      ]},
      { title:"Cloud Platforms We Deploy On", techs:[
        {name:"AWS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
        {name:"Microsoft Azure",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"},
        {name:"Google Cloud Platform (GCP)",icon:"https://cdn.simpleicons.org/googlecloud"},
        {name:"Oracle Cloud (OCI)",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"},
        {name:"IBM Cloud"},
        {name:"DigitalOcean",icon:"https://cdn.simpleicons.org/digitalocean"},
        {name:"Linode (Akamai Cloud)",icon:"https://cdn.simpleicons.org/akamai"},
        {name:"Vultr",icon:"https://cdn.simpleicons.org/vultr"},
        {name:"Alibaba Cloud",icon:"https://cdn.simpleicons.org/alibabacloud"},
        {name:"VMware Cloud",icon:"https://cdn.simpleicons.org/vmware"},
        {name:"OVHcloud",icon:"https://cdn.simpleicons.org/ovh"},
        {name:"Other Cloud Providers"},
      ]},
    ]}

    slider={[
      { count: "100+", title: "Applications Developed",    desc: "100+ ASP.NET web solutions built and maintained — delivering reliable performance and long-term stability across industries.", image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,  title: "Years of .NET Expertise",   desc: `${YEARS_EXPERIENCE_DISPLAY} years of ASP.NET experience crafting robust, secure, and scalable systems that power modern enterprises worldwide.`,       image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "500+", title: "Global Clients Served",     desc: "Trusted by 500+ clients globally with high-performance ASP.NET applications and continuous backend support.",                  image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "98%",  title: "Client Satisfaction Rate",  desc: "98% satisfaction rate through innovation, consistent quality, and reliable .NET solutions that exceed expectations.",          image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Technical Assistance",      desc: "Round-the-clock monitoring, maintenance, and upgrade support for all your ASP.NET systems — uninterrupted service guaranteed.", image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "ASP.NET · .NET Core · MVC",
      items: [
        { title: "What is ASP.NET development?",               description: "ASP.NET is Microsoft's open-source web framework for building secure, scalable web applications using C#. It supports both MVC and Core architectures for modern enterprise solutions." },
        { title: "Why choose ASP.NET Core for web development?", description: "ASP.NET Core is cross-platform, fast, and ideal for cloud-based applications. It offers superior performance, security, and scalability for enterprise-grade systems." },
        { title: "What makes ASP.NET MVC development effective?", description: "ASP.NET MVC follows the Model-View-Controller pattern, enabling clean code structure, testability, and flexibility for complex web applications." },
        { title: "Can ASP.NET handle enterprise-level applications?", description: "Yes. ASP.NET Core is built for large-scale enterprise projects — offering modular design, advanced caching, authentication, and seamless cloud integration." },
        { title: "How secure are ASP.NET applications?",       description: "We implement encryption, HTTPS, role-based authentication, and Microsoft Identity security, along with built-in protection from SQL injection, XSS, and CSRF attacks." },
        { title: "Is ASP.NET suitable for small projects?",    description: "Yes. ASP.NET Core's lightweight and modular design makes it ideal for startups and SMEs, offering rapid development cycles and lower maintenance overhead." },
        { title: "Can ASP.NET integrate with APIs and databases?", description: "Absolutely. ASP.NET integrates seamlessly with RESTful APIs, SQL Server, MySQL, MongoDB, and Azure databases to power data-driven web solutions." },
        { title: "Do you offer maintenance for ASP.NET applications?", description: "Yes — full support including security patches, performance upgrades, bug fixes, and version migrations for all .NET-based systems." },
        { title: "Can you migrate legacy systems to ASP.NET Core?", description: "Definitely. We specialize in upgrading legacy ASP.NET or other tech stacks to modern .NET Core for better performance, maintainability, and cloud compatibility." },
        { title: "Which industries benefit from ASP.NET solutions?", description: "ASP.NET serves finance, healthcare, eCommerce, logistics, and education — its flexibility making it ideal for enterprise and business-critical web platforms." },
      ],
    }}
  />
);

export default Asp;
