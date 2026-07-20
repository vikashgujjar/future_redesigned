import React from "react";
import {
  FaLock, FaRocket, FaCode, FaServer,
  FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaCheckCircle, FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud, FaShoppingCart,
} from "react-icons/fa";
import lispImg from "../Assets/lisp.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const Lisp = () => (
  <CommonTechPage
    banner={{
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=85",
      image: lispImg,
      category: "E-Commerce Development",
      breadcrumb: "Lisp · E-Commerce · Online Stores",
      title: "Lisp · E-Commerce · Online Stores",
      tagline:
        "Build high-performance, scalable, and intelligent online store platforms using Lisp — one of the most powerful and flexible programming languages for custom e-commerce, inventory management, and payment systems.",
    }}

    intro={{
      badge: "Future IT Touch · Lisp & E-Commerce Experts",
      heading: "Build Powerful Online Stores with",
      highlight: "Lisp Development",
      paras: [
        "At Future IT Touch, we specialize in building high-performance, feature-rich online stores using Lisp — a powerful, flexible programming language that provides the speed, scalability, and customization needed for complex e-commerce platforms.",
        "From product catalog management and shopping cart systems to secure payment processing and order automation, our developers craft Lisp-based e-commerce solutions designed for reliability, performance, and seamless user experiences.",
        "Whether you need a custom storefront, enterprise inventory system, or real-time sales analytics integration, our team ensures clean code, efficient algorithms, and seamless platform integration that empowers your business to grow online.",
      ],
      highlights: [
        "Custom Lisp e-commerce backends handling inventory, orders, and payment processing at scale",
        "Secure payment gateway integration with encrypted transaction validation and fraud prevention",
        "RESTful APIs for product, order, and customer management with real-time analytics dashboards",
        "Full-cycle deployment with continuous monitoring, performance optimization, and 24/7 support",
      ],
      stats: [
        { num: "150+", label: "Lisp Stores Delivered",     desc: "High-performance, scalable Lisp-powered online stores built worldwide.",         icon: <FaShoppingCart /> },
        { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Lisp Expertise",      desc: `${YEARS_EXPERIENCE_DISPLAY} years building robust Lisp e-commerce and backend solutions.`,          icon: <FaLayerGroup /> },
        { num: "200+", label: "Clients Empowered",         desc: "200+ organizations powered by custom Lisp online store solutions globally.",       icon: <FaStar /> },
      ],
    }}

    services={[
      {
        icon: <FaCode />,
        title: "Custom Lisp Development",
        desc: "Efficient, high-performance online store applications using Lisp — with modular, scalable backend architectures for e-commerce inventory, order, and payment management.",
        points: [
          "Scalable Lisp e-commerce applications",
          "Inventory & order management",
          "Payment processing integration",
          "Clean, maintainable Lisp code",
        ],
      },
      {
        icon: <FaServer />,
        title: "E-Commerce Solutions Powered by Lisp",
        desc: "Advanced e-commerce features including product catalogs, shopping carts, checkout systems, and intelligent recommendation and inventory management systems built in Lisp.",
        points: [
          "Product catalog & shopping cart",
          "Secure checkout & payment gateway",
          "High-traffic performance optimization",
          "Recommendation engine integration",
        ],
      },
      {
        icon: <FaCogs />,
        title: "Online Store Integration",
        desc: "Lisp-based e-commerce apps connected with frontend platforms and third-party services — efficient data pipelines for product analytics, user behavior tracking, and inventory sync.",
        points: [
          "Frontend & third-party integration",
          "Product analytics data pipelines",
          "User behavior tracking systems",
          "Optimized large product databases",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "API & Payment Gateway Development",
        desc: "RESTful APIs for product, order, and user management — with secure payment processing, transaction validation, and sales dashboards for inventory and customer insights.",
        points: [
          "REST APIs for orders & products",
          "Payment & transaction validation",
          "Sales & inventory dashboards",
          "Scalable e-commerce API design",
        ],
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Maintenance",
        desc: "Robust security, encryption, and fraud prevention for online stores — protecting customer data and payment information with efficient resource management and patch management.",
        points: [
          "Fraud prevention & encryption",
          "Customer data & payment security",
          "Resource efficiency optimization",
          "Performance tuning & patching",
        ],
      },
      {
        icon: <FaTools />,
        title: "Continuous Support & Optimization",
        desc: "Long-term maintenance for Lisp online store projects — dependency upgrades, backend optimization, system uptime monitoring, and scalability and feature enhancement consulting.",
        points: [
          "Long-term store maintenance",
          "Backend optimization & upgrades",
          "Uptime & traffic monitoring",
          "Scalability & feature consulting",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirement Analysis",              desc: "Understanding your e-commerce goals, product catalog, and UX needs — identifying technical challenges and designing a roadmap for your Lisp online store." },
      { icon: <FaServer />,      title: "System Architecture Planning",      desc: "Designing scalable architectures for high-traffic online stores — smooth transaction handling, secure payments, and real-time inventory updates using Lisp." },
      { icon: <FaCogs />,        title: "Feature Design & Optimization",     desc: "Crafting efficient algorithms for product search, recommendations, checkout, and payment processing — ensuring smooth customer experiences throughout." },
      { icon: <FaCloud />,       title: "Backend & API Development",         desc: "Building robust Lisp backends and APIs for order processing, inventory management, user authentication, and real-time analytics." },
      { icon: <FaDatabase />,    title: "Data Management & Analysis",        desc: "Managing and analyzing product, user, and sales data to optimize inventory, pricing, and customer engagement strategies for growth." },
      { icon: <FaRocket />,      title: "Integration & Deployment",          desc: "Integrating Lisp-based modules with frontend platforms, payment gateways, and third-party services — ensuring seamless deployment and operations." },
      { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Optimizing backend performance, implementing caching, and ensuring secure, scalable, and reliable online store operations under all traffic conditions." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",       desc: "Rigorous testing of every component for functionality, security, and speed — delivering a bug-free, high-performance Lisp online store." },
      { icon: <FaCode />,        title: "Deployment & Monitoring",           desc: "Handling production deployment, server configuration, and real-time monitoring to ensure your Lisp store runs flawlessly under all conditions." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",   desc: "Continuous maintenance, updates, and performance audits post-launch — ensuring your Lisp online store remains secure, fast, and future-ready." },
    ]}

    features={[
      { icon: <FaCode />,         title: "Custom Lisp Development",          desc: "Lisp-based online store applications that are fast, scalable, and fully customizable — ensuring reliability, security, and flexibility for e-commerce." },
      { icon: <FaCogs />,         title: "High-Performance Store Management", desc: "Inventory, order, and customer management with optimized Lisp backend logic — delivering minimal latency and maximum operational efficiency." },
      { icon: <FaServer />,       title: "E-Commerce Integration",           desc: "Payment gateways, APIs, and analytics platforms integrated to create a seamless, end-to-end shopping experience for every customer." },
      { icon: <FaLock />,         title: "Data Security & Compliance",       desc: "All customer and transactional data secured, encrypted, and compliant with industry standards for complete trust and regulatory adherence." },
      { icon: <FaRocket />,       title: "Performance Optimization",         desc: "Lisp operations fine-tuned to achieve fast loading times, efficient transactions, and low server overhead under high-traffic conditions." },
      { icon: <FaTools />,        title: "Ongoing Support & Optimization",   desc: "Continuous monitoring, maintenance, and optimization for feature enhancements and high uptime of your Lisp-powered online store." },
    ]}

    stack={[
      { name: "Common Lisp" },
      { name: "SBCL / CCL" },
      { name: "Hunchentoot" },
      { name: "Quicklisp" },
      { name: "Clack Web Framework" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "REST APIs" },
      { name: "Stripe / PayPal" },
      { name: "Docker" },
      { name: "Nginx" },
      { name: "AWS / GCP" },
      { name: "Git / CI" },
      { name: "Elasticsearch" },
      { name: "RabbitMQ" },
    ]}

    slider={[
      { count: "150+", title: "Lisp Stores Delivered",            desc: "150+ Lisp-powered online stores built — delivering high-performance, scalable, and reliable e-commerce solutions with seamless user experiences worldwide.",   image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Lisp Expertise",          desc: `${YEARS_EXPERIENCE_DISPLAY} years crafting robust Lisp online store solutions — optimizing performance, transaction handling, and user experience for demanding stores.`,         image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "200+", title: "Clients Empowered Globally",       desc: "200+ organizations trust us for Lisp-based e-commerce solutions that enhance sales, automation, and superior online shopping experiences worldwide.",           image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "Optimization Success Rate",        desc: "Up to 99% efficiency in backend computations and transaction processing — ensuring fast, reliable store operations even under heavy traffic and complex loads.",  image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Technical Support & Monitoring",   desc: "24/7 monitoring, updates, and optimization keeping your Lisp online store stable, secure, and performing at peak efficiency at all times.",                   image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Lisp Online Store Development Services",
      items: [
        { title: "What is Lisp?",                                    description: "Lisp is a high-performance, flexible programming language suitable for building complex, dynamic applications including customized online store platforms." },
        { title: "Why use Lisp for online stores?",                  description: "Lisp provides flexibility, scalability, and high performance — ideal for building secure, feature-rich, and customizable e-commerce solutions." },
        { title: "Can Lisp handle large product catalogs?",          description: "Yes, Lisp is optimized for managing large datasets, product inventories, and transaction processing efficiently at scale." },
        { title: "Is Lisp suitable for payment processing?",         description: "Absolutely. Lisp can integrate with payment gateways to ensure secure, fast, and reliable transactions for high-volume online stores." },
        { title: "Do you integrate Lisp into existing platforms?",   description: "Yes, we can integrate Lisp modules into your current e-commerce systems or cloud infrastructure for enhanced performance and features." },
        { title: "How secure are Lisp online stores?",               description: "We implement encryption, secure API practices, and compliance measures to ensure your store and customer data remain fully protected." },
        { title: "Can you optimize existing Lisp store code?",       description: "Definitely. We enhance performance, scalability, and security of existing Lisp e-commerce applications for better user experience." },
        { title: "Do you provide long-term support for Lisp stores?",description: "Yes, we offer ongoing maintenance, performance audits, and feature updates to keep your Lisp store running efficiently and securely." },
        { title: "Which industries benefit from Lisp online stores?",description: "Retail, wholesale, subscription services, and niche e-commerce businesses leverage Lisp for high-performance, customized online stores." },
        { title: "Can Lisp integrate with analytics and reporting?", description: "Yes, Lisp online stores connect with analytics, reporting, and marketing tools to optimize sales strategies and business insights." },
      ],
    }}
  />
);

export default Lisp;
