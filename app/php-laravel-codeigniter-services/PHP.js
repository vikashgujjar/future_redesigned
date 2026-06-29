import React from "react";
import { FaPhp, FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools, FaLock, FaRocket, FaCheckCircle, FaLayerGroup, FaBolt, FaLeaf, FaUsers, FaStar, FaHeadset } from "react-icons/fa";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";

const PHP = () => (
  <CommonTechPage
    banner={{
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=85",
      category: "Web Technology",
      breadcrumb: "PHP · Laravel · CodeIgniter",
      title: "PHP · Laravel · CodeIgniter",
      tagline: "Build secure, scalable, and cost-effective web applications using the world's most proven server-side technologies — trusted by millions of developers globally.",
    }}

    intro={{
      badge: "Future IT Touch · Web Experts",
      heading: "Powering the Web with",
      highlight: "PHP, Laravel & CodeIgniter",
      paras: [
        "At Future IT Touch, we specialize in building secure, scalable, and feature-rich web applications using PHP, Laravel, and CodeIgniter — trusted frameworks that power over 77% of the world's websites.",
        "Whether you need a custom business portal, eCommerce platform, or enterprise-grade CMS, our developers leverage clean MVC architecture, optimized database management, and robust API design to deliver applications that grow with your business.",
        "From startups to large enterprises, we craft PHP-based solutions that are fast, secure, and easy to maintain — giving you a competitive edge in the digital market.",
      ],
      highlights: [
        "MVC clean architecture for long-term maintainability",
        "Enterprise-grade security with SQL injection prevention",
        "RESTful & GraphQL API development with Laravel",
        "24/7 maintenance with performance monitoring",
      ],
      stats: [
        { num:"500+", label:"Projects Delivered",   desc:"PHP, Laravel & CodeIgniter apps shipped globally.", icon:<FaCode /> },
        { num:"10+",  label:"Years of Expertise",   desc:"A decade building secure, scalable PHP solutions.",  icon:<FaLayerGroup /> },
        { num:"98%",  label:"Client Satisfaction",  desc:"Client-first approach drives our quality promise.",  icon:<FaStar /> },
        { num:"24/7", label:"Support Available",    desc:"Round-the-clock monitoring & technical support.",    icon:<FaHeadset /> },
      ],
    }}

    services={[
      {
        icon: <FaCode />,
        title: "Custom PHP Web Development",
        desc: "High-performance, secure, and scalable PHP solutions built to match your exact business requirements.",
        points: ["Dynamic web applications", "Secure backend systems", "Custom CMS solutions", "Clean, reusable code"],
      },
      {
        icon: <FaServer />,
        title: "Laravel Framework Development",
        desc: "Elegant and modular Laravel applications built with Eloquent ORM, queues, caching, and robust authentication.",
        points: ["Feature-rich Laravel apps", "RESTful APIs", "Eloquent ORM", "Auth & queues"],
      },
      {
        icon: <FaCogs />,
        title: "CodeIgniter Application Development",
        desc: "Lightweight, fast web applications using CodeIgniter's simple MVC structure for rapid, efficient development.",
        points: ["Lightweight fast apps", "MVC architecture", "Third-party API integration", "Optimized performance"],
      },
      {
        icon: <FaDatabase />,
        title: "API Integration & Backend Services",
        desc: "Secure RESTful and GraphQL APIs that seamlessly connect your web app to third-party services and mobile platforms.",
        points: ["RESTful & GraphQL APIs", "Third-party connectivity", "Token-based auth", "Data exchange layers"],
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Maintenance",
        desc: "Comprehensive security hardening including SQL injection prevention, XSS protection, and CSRF defense.",
        points: ["SQL injection prevention", "XSS & CSRF protection", "Vulnerability audits", "24/7 monitoring"],
      },
      {
        icon: <FaTools />,
        title: "Migration & Upgrade Services",
        desc: "Seamlessly migrate legacy PHP systems to modern Laravel or CodeIgniter with zero downtime and improved performance.",
        points: ["Legacy to Laravel migration", "Version upgrades", "Performance optimization", "Code refactoring"],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirement Analysis",    desc: "Understanding your business goals, users, and technical requirements in detail." },
      { icon: <FaLayerGroup />,  title: "Architecture & Design",   desc: "Designing scalable MVC architecture and database schema for long-term growth." },
      { icon: <FaCode />,        title: "Backend Development",     desc: "Building server-side logic with PHP, Laravel, or CodeIgniter using clean code." },
      { icon: <FaDatabase />,    title: "Database Design",         desc: "Creating optimized MySQL or PostgreSQL schemas for fast, reliable data handling." },
      { icon: <FaShieldAlt />,   title: "Security Hardening",      desc: "Implementing encryption, validation, and protection against common web threats." },
      { icon: <FaBolt />,        title: "Testing & QA",            desc: "Thorough manual and automated testing for error-free, reliable performance." },
      { icon: <FaServer />,      title: "Deployment",              desc: "Zero-downtime deployment with server configuration and environment setup." },
      { icon: <FaTools />,       title: "Ongoing Support",         desc: "24/7 monitoring, bug fixes, updates, and performance tuning after launch." },
    ]}

    features={[
      { icon: <FaCode />,       title: "MVC Clean Architecture",     desc: "We follow strict MVC design patterns ensuring your codebase remains clean, modular, and easy to scale as your business grows." },
      { icon: <FaLock />,       title: "Enterprise-Grade Security",  desc: "Multi-layer security with input validation, CSRF tokens, and encrypted data storage protects your application from threats." },
      { icon: <FaRocket />,     title: "Performance Optimization",   desc: "Query caching, lazy loading, and optimized database indexing deliver lightning-fast page loads and API responses." },
      { icon: <FaDatabase />,   title: "Scalable Database Design",   desc: "We architect database schemas for high-traffic scenarios with connection pooling and query optimization techniques." },
      { icon: <FaBolt />,       title: "Rapid Development",         desc: "Laravel's built-in features — queues, events, broadcasting — reduce development time by up to 40% compared to raw PHP." },
      { icon: <FaLeaf />,       title: "Long-Term Maintainability", desc: "Clean code standards, comprehensive documentation, and modular structure ensure your application is easy to maintain." },
    ]}

    stack={[
      { name: "PHP 8.x" },
      { name: "Laravel 11" },
      { name: "CodeIgniter 4" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Composer" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "Docker" },
      { name: "Nginx" },
      { name: "Elasticsearch" },
      { name: "JWT Auth" },
      { name: "PHPUnit" },
      { name: "Blade Templates" },
    ]}

    slider={[
      { count: "500+", title: "Projects Delivered",          desc: "500+ PHP, Laravel, and CodeIgniter projects delivered — from MVPs to enterprise systems.", image: "/Assets/seerviceSlider/slide1.webp" },
      { count: "10+",  title: "Years of PHP Expertise",      desc: "Over a decade building and scaling PHP applications across diverse industries globally.",   image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "98%",  title: "Client Satisfaction Rate",    desc: "98% satisfaction driven by clean code, on-time delivery, and responsive support teams.",    image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "24/7", title: "Dedicated Support",           desc: "Round-the-clock monitoring, bug fixes, and technical support for all PHP applications.",     image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "300+", title: "Laravel Apps Built",          desc: "Over 300 Laravel applications delivered for businesses ranging from startups to enterprises.", image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "PHP · Laravel · CodeIgniter",
      items: [
        { title: "What is PHP development?", description: "PHP is a powerful open-source scripting language for server-side web development. It's used to build secure, scalable dynamic web applications and powers platforms like WordPress, Magento, and Laravel." },
        { title: "Why choose Laravel over raw PHP?", description: "Laravel provides built-in authentication, routing, queues, ORM, and caching — reducing development time significantly. It follows the MVC pattern for clean, maintainable code architecture." },
        { title: "What makes CodeIgniter a good choice?", description: "CodeIgniter is lightweight, fast, and requires minimal configuration — ideal for small to medium projects where speed of development and low server overhead are priorities." },
        { title: "Can you migrate my old PHP app to Laravel?", description: "Yes. We specialize in migrating legacy PHP applications to modern Laravel with improved architecture, better security, and enhanced performance with minimal downtime." },
        { title: "How do you ensure security in PHP applications?", description: "We apply input validation, parameterized queries, CSRF protection, XSS filtering, rate limiting, and encrypted storage. Laravel's built-in security features further harden each application." },
        { title: "Do you build REST APIs with PHP/Laravel?", description: "Yes. We build secure, versioned RESTful APIs using Laravel Passport or Sanctum for authentication, enabling mobile apps and third-party services to integrate seamlessly." },
        { title: "Can PHP/Laravel handle high-traffic applications?", description: "Absolutely. With proper caching (Redis/Memcached), database optimization, CDN integration, and horizontal scaling, Laravel handles millions of requests per day reliably." },
        { title: "Do you offer post-launch support?", description: "Yes. We offer 24/7 maintenance packages covering bug fixes, security patches, performance monitoring, and feature updates for all PHP, Laravel, and CodeIgniter projects." },
      ],
    }}
  />
);

export default PHP;
