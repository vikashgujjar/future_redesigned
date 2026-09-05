import React from "react";
import {
  FaWordpress, FaShopify, FaShoppingCart, FaDatabase, FaCogs,
  FaLock, FaRocket, FaTools, FaServer, FaCheckCircle,
  FaLayerGroup, FaBolt, FaSyncAlt, FaStar, FaHeadset, FaCode,
} from "react-icons/fa";
import wsjImg from "../Assets/wsj.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";

const FALLBACK_CONTENT = {
  banner: {
    bgImage: "/Assets/stock/photo-1563013544-824ae1b704d3.webp",
    image: wsjImg,
    category: "CMS & eCommerce",
    breadcrumb: "WordPress · Shopify · WooCommerce",
    title: "WordPress · Shopify · WooCommerce",
    tagline:
      "Build powerful, conversion-focused, and fully customizable websites and online stores using the world's most trusted CMS and eCommerce platforms.",
  },

  intro: {
    badge: "Future IT Touch · CMS & eCommerce Experts",
    heading: "Grow Your Business Online with",
    highlight: "WordPress & Shopify",
    paras: [
      "At Future IT Touch, we specialize in building high-performing, SEO-friendly, and fully customizable websites using WordPress and Shopify — platforms trusted by millions of businesses worldwide for their flexibility and power.",
      "From seamless eCommerce functionality to intuitive CMS design, our expert developers create websites that are visually captivating, responsive, and optimized for maximum conversions — tailored to reflect your brand identity.",
      "Whether you need a sleek Shopify storefront or a feature-rich WordPress site with custom plugins and integrations, we deliver top-notch performance, security, and scalability to grow your business in the competitive digital landscape.",
    ],
    highlights: [
      "Custom WordPress & Shopify themes built for speed and conversions",
      "WooCommerce & Shopify stores with secure payment gateway integration",
      "Plugin, app & API integration for CRM, ERP, and marketing tools",
      "SEO-optimized, mobile-responsive sites with 24/7 post-launch support",
    ],
    stats: [
      { num: "250+", label: "Websites Delivered",     desc: "WordPress and Shopify sites built for global clients across industries.", icon: <FaWordpress /> },
      { num: YEARS_EXPERIENCE_DISPLAY,  label: "Years of Expertise",     desc: `${YEARS_EXPERIENCE_DISPLAY} years of CMS and eCommerce development excellence.`,                   icon: <FaLayerGroup /> },
      { num: "400+", label: "Global Clients Served",  desc: "400+ satisfied clients with strong online presences worldwide.",         icon: <FaStar /> },
    ],
  },

  services: [
    {
      icon: <FaWordpress />,
      title: "Custom WordPress & Shopify Development",
      desc: "Feature-rich, fast, and SEO-optimized websites tailored to your goals — with secure API and payment gateway integrations from day one.",
      points: [
        "Custom business websites",
        "SEO-optimized CMS platforms",
        "Third-party plugin & API integration",
        "Secure, scalable architecture",
      ],
    },
    {
      icon: <FaShoppingCart />,
      title: "eCommerce Website Development",
      desc: "Powerful Shopify and WooCommerce stores with multi-store management, product filtering, inventory control, and real-time order tracking.",
      points: [
        "Shopify & WooCommerce stores",
        "Multi-store & inventory management",
        "Secure payment gateway setup",
        "Conversion-optimized UX",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Custom Theme & Plugin Development",
      desc: "Visually stunning, performance-optimized WordPress themes and Shopify apps built with lightweight, scalable code for consistent branding.",
      points: [
        "Custom WordPress themes",
        "Shopify apps & plugins",
        "Reusable design components",
        "Optimized page load speed",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "API Integration & Data Connectivity",
      desc: "Real-time API connections with CRMs, ERPs, marketing tools, and payment systems — automating workflows across multiple platforms.",
      points: [
        "Payment & shipping API setup",
        "CRM & ERP integration",
        "OAuth2 secure authentication",
        "Cross-platform data automation",
      ],
    },
    {
      icon: <FaLock />,
      title: "Security & Website Maintenance",
      desc: "Malware, DDoS, and unauthorized-access protection with SSL, secure backups, role-based access control, and continuous monitoring.",
      points: [
        "Malware & DDoS protection",
        "SSL & secure backups",
        "Role-based access control",
        "Continuous performance monitoring",
      ],
    },
    {
      icon: <FaTools />,
      title: "Ongoing Support & Optimization",
      desc: "24/7 troubleshooting, speed improvements, mobile responsiveness audits, and zero-downtime migrations to WordPress or Shopify.",
      points: [
        "24/7 support & troubleshooting",
        "Speed & mobile optimization",
        "Zero-downtime site migration",
        "Long-term growth support",
      ],
    },
  ],

  process: [
    { icon: <FaCheckCircle />, title: "Requirement Analysis",          desc: "Understanding your business model, goals, and design vision to create a WordPress or Shopify solution aligned with your growth strategy." },
    { icon: <FaCode />,        title: "UI/UX Design & Prototyping",    desc: "Creating intuitive, conversion-optimized interfaces and prototypes that reflect your brand identity and enhance the user experience." },
    { icon: <FaLayerGroup />,  title: "Theme Development",             desc: "Building or customizing themes using clean, modular code to ensure responsive layouts and brand-consistent designs across all devices." },
    { icon: <FaCogs />,        title: "Plugin & App Integration",      desc: "Integrating essential plugins and Shopify apps for SEO, analytics, payments, shipping, and marketing automation." },
    { icon: <FaDatabase />,    title: "API & Payment Setup",           desc: "Ensuring smooth API connections with CRMs, ERPs, and payment gateways for secure transactions and operational efficiency." },
    { icon: <FaBolt />,        title: "Testing & QA",                  desc: "In-depth performance, cross-browser, and usability testing to ensure flawless operation, responsiveness, and user satisfaction." },
    { icon: <FaLock />,        title: "Security Implementation",       desc: "Securing WordPress and Shopify sites with firewalls, SSL encryption, and malware protection to safeguard your business and customers." },
    { icon: <FaRocket />,      title: "Deployment & Launch",           desc: "Deploying on fast, secure servers with full functionality, smooth navigation, and optimal load speed across all devices." },
    { icon: <FaSyncAlt />,     title: "Maintenance & Support",         desc: "Post-launch continuous updates, performance optimization, and technical support to keep your site fast, secure, and user-friendly." },
  ],

  features: [
    { icon: <FaWordpress />,     title: "Custom WordPress Development",  desc: "Tailored WordPress websites that are fast, secure, and SEO-friendly — ensuring smooth content management and superior user experience at every touchpoint." },
    { icon: <FaShopify />,       title: "Shopify Store Development",     desc: "Fully customized Shopify stores designed to maximize sales, streamline operations, and deliver seamless eCommerce experiences that convert visitors into customers." },
    { icon: <FaCogs />,          title: "Theme & Plugin Customization",  desc: "Custom plugins, themes, and apps that add unique features and enhance your site's overall functionality, performance, and brand consistency." },
    { icon: <FaLock />,          title: "Advanced Security Layers",      desc: "SSL, secure payment integrations, firewalls, and malware scanning — complete digital safety for your website and customer data at every layer." },
    { icon: <FaRocket />,        title: "Performance Optimization",      desc: "Enhanced loading speed, responsiveness, and SEO performance through caching, image optimization, and efficient code practices for better search rankings." },
    { icon: <FaTools />,         title: "Maintenance & Upgrades",        desc: "Ongoing plugin management, core updates, and dedicated support to keep your WordPress or Shopify site secure, fast, and feature-rich long-term." },
  ],

  stack: [
    { name: "WordPress 6.x" },
    { name: "Shopify 2.0" },
    { name: "WooCommerce" },
    { name: "Elementor Pro" },
    { name: "ACF / CPT UI" },
    { name: "Shopify Liquid" },
    { name: "PHP 8.x" },
    { name: "MySQL" },
    { name: "REST API" },
    { name: "Stripe / Razorpay" },
    { name: "Yoast SEO" },
    { name: "Cloudflare" },
    { name: "AWS / Cloudinary" },
    { name: "Git / CI/CD" },
    { name: "GTM / GA4" },
    { name: "Metafields" },
  ],

  slider: [
    { count: "250+", title: "Websites Successfully Delivered",  desc: "250+ WordPress and Shopify websites built for global clients — combining creativity with functionality for impactful digital experiences.",       image: "/Assets/seerviceSlider/slide1.webp" },
    { count: YEARS_EXPERIENCE_DISPLAY,  title: "Years of Development Expertise",   desc: `${YEARS_EXPERIENCE_DISPLAY} years specializing in responsive, secure, and conversion-driven CMS and eCommerce websites built on the latest technologies.`,         image: "/Assets/seerviceSlider/slide2.webp" },
    { count: "400+", title: "Satisfied Global Clients",         desc: "400+ clients worldwide with strong online presences powered by modern WordPress and Shopify solutions built for transparency and growth.",        image: "/Assets/seerviceSlider/slide3.webp" },
    { count: "98%",  title: "Client Satisfaction Rate",         desc: "98% satisfaction through top-notch designs, flawless performance, timely delivery, and ongoing customer support on every project.",             image: "/Assets/seerviceSlider/slide4.webp" },
    { count: "24/7", title: "Dedicated Technical Support",      desc: "Round-the-clock maintenance for quick fixes to full-scale upgrades — keeping your store or CMS secure and performing flawlessly.",             image: "/Assets/seerviceSlider/slide5.webp" },
  ],

  faq: {
    title: "WordPress · Shopify · WooCommerce",
    items: [
      { title: "Why choose WordPress or Shopify for your website?",  description: "WordPress and Shopify are user-friendly, flexible, and scalable platforms ideal for building websites and online stores that deliver exceptional performance and easy management." },
      { title: "Do you provide custom theme development?",           description: "Yes, we specialize in fully custom WordPress and Shopify themes designed to reflect your brand and provide optimal user experiences across all devices." },
      { title: "Can you integrate third-party APIs and plugins?",    description: "Absolutely. We integrate payment gateways, CRM tools, analytics, and other third-party APIs to enhance functionality and streamline business operations." },
      { title: "Do you offer WooCommerce development services?",     description: "Yes, we develop custom WooCommerce stores within WordPress, providing full control, scalability, and eCommerce functionality tailored to your brand." },
      { title: "Is Shopify better for eCommerce?",                   description: "Shopify is perfect for eCommerce due to its built-in tools, security, and scalability. We customize it for your unique store requirements and branding goals." },
      { title: "Can you migrate my site to WordPress or Shopify?",   description: "Yes, we handle complete website migration with zero downtime — ensuring your data, design, and SEO rankings remain intact throughout the process." },
      { title: "How do you ensure website security?",                description: "We implement SSL encryption, firewalls, malware scanning, and regular updates to keep your WordPress or Shopify website completely secure at all times." },
      { title: "Do you provide SEO-friendly development?",           description: "Yes, all our WordPress and Shopify websites are developed with SEO best practices, clean code, and optimized structures for better search rankings." },
      { title: "Do you offer post-launch maintenance?",              description: "We provide ongoing maintenance, updates, and support to ensure your site remains up-to-date, secure, and high-performing after launch." },
      { title: "Which industries do you serve?",                     description: "We deliver WordPress and Shopify solutions for eCommerce, fashion, real estate, healthcare, education, and many other industries across the globe." },
    ],
  },
};

const Shopify = ({ cms } = {}) => {
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

export default Shopify;
