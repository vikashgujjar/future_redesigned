"use client";
const gg = "/Assets/stock/photo-1498050108023-c5249f4df085.webp";
const image2 = "/Assets/stock/photo-1517245386807-bb43f82c33c4.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaTools, FaDatabase,
  FaLaptopCode, FaShoppingCart, FaBuilding, FaNetworkWired, FaCode, FaCogs,
  FaServer, FaShippingFast, FaCloud, FaSms, FaVideo, FaMapMarkedAlt, FaChartLine,
} from "react-icons/fa";
import useYearsExperience from "../lib/useYearsExperience";
import { COMPANY_START_YEAR } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";

const Ecommerce = ({ cms } = {}) => {
  const yearsExperience = useYearsExperience();
  const features = [
    {
      title: "Seamless Third-Party API Integration",
      description:
        "Our web applications are designed to seamlessly integrate with premium third-party APIs to enhance functionality and streamline your business processes. From payment gateways to messaging services, we ensure smooth and secure connections that empower your application.",
      icon: <FaCloud />,
    },
    {
      title: "Real-Time Communication & Notifications",
      description:
        "Integrating APIs like Twilio for SMS and video or Zoom for webinars, we enable your web applications to communicate in real-time. These features improve engagement, provide instant updates, and create interactive experiences for users across devices.",
      icon: <FaSms />,
    },
    {
      title: "Video & Streaming Integration",
      description:
        "With Vimeo and Zoom API integration, your applications can host live streams, webinars, and video content efficiently. This ensures high-quality streaming, interactive sessions, and an engaging user experience without the need for complex in-house setups.",
      icon: <FaVideo />,
    },
    {
      title: "Mapping & Geolocation Services",
      description:
        "Google Maps and other location-based APIs are integrated to offer precise geolocation features. Whether it's displaying store locations, tracking deliveries, or enabling location-based services, your users get a rich and interactive mapping experience.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Logistics & SMS Automation",
      description:
        "From xotel SMS & Call APIs to alamove for delivery logistics, we implement systems that automate communication and operations. This ensures timely notifications, efficient order tracking, and a smooth workflow for both businesses and end-users.",
      icon: <FaShippingFast />,
    },
    {
      title: "Custom Workflows & Configurations",
      description:
        "Our developers build custom logic and workflows using APIs like nableX to suit your unique business needs. This allows your web application to handle complex processes efficiently while remaining user-friendly and scalable.",
      icon: <FaCogs />,
    },
    {
      title: "Analytics & Insights Integration",
      description:
        "By connecting analytical APIs, we enable you to track user behavior, system performance, and operational metrics. This data-driven approach helps businesses make informed decisions, optimize features, and maximize ROI through actionable insights.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaTools className="text-white w-8 h-8" />,
      title: "Application Enhancement",
      desc: "We provide continuous improvement for your web applications by adding new features, enhancing functionality, and keeping your software up-to-date with evolving business needs.",
    },
    {
      icons: <FaServer className="text-white w-8 h-8" />,
      title: "Hosting Migration & Support",
      desc: "Our team ensures seamless hosting migration and ongoing support, keeping your web application secure, fast, and accessible for your users at all times.",
    },
    {
      icons: <FaDatabase className="text-white w-8 h-8" />,
      title: "Database Optimization",
      desc: "We optimize your databases for performance and scalability, ensuring smooth operations, faster data retrieval, and a reliable backend for your web applications.",
    },
  ];

  const cards = [
    {
      count: "100+",
      title: "Applications Maintained",
      desc: "We have successfully maintained over 100 web applications, ensuring optimal performance, smooth functionality, and timely updates. Each application is carefully monitored to provide seamless experiences for your users.",
      image: "/Assets/stock/photo-1460925895917-afdab827c52f.webp",
    },
    {
      count: yearsExperience,
      title: "Years of Expertise",
      desc: `With ${yearsExperience} years of experience in web application maintenance and support, our team brings deep technical knowledge to every project. We ensure best practices, modern technologies, and effective maintenance strategies are applied.`,
      image: "/Assets/stock/photo-1522252234503-e356532cafd5.webp",
    },
    {
      count: "500+",
      title: "Clients Supported Globally",
      desc: "Trusted by over 500 clients worldwide, we provide reliable maintenance and support for diverse web applications. Our experience spans multiple industries, ensuring your app stays robust and fully functional across all platforms.",
      image: "/Assets/stock/photo-1555066931-4365d14bab8c.webp",
    },
    {
      count: "98%",
      title: "Satisfaction Rate",
      desc: "Our client-centric approach has earned a 98% satisfaction rate. We focus on delivering proactive maintenance, timely updates, and responsive support, ensuring every application operates smoothly and meets client expectations.",
      image: "/Assets/stock/photo-1467232004584-a241de8bcf5d.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "We provide round-the-clock support for all web applications. Our dedicated team resolves technical issues quickly, optimizes performance, and ensures your applications remain reliable and accessible at all times.",
      image: "/Assets/stock/photo-1498050108023-c5249f4df085.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      title: "Web Portal Development",
      desc: "We build user-focused web portals that combine advanced functionality with intuitive design. Tailored to reflect your brand, these portals encourage user interaction while delivering seamless performance and robust features.",
    },
    {
      icon: <FaShoppingCart className="text-white w-6 h-6" />,
      title: "Ecommerce Website Development",
      desc: "Our team creates B2B, B2C, and multi-vendor eCommerce platforms that are visually appealing, secure, and optimized for conversions. From planning to deployment, we provide comprehensive web store development services.",
    },
    {
      icon: <FaBuilding className="text-white w-6 h-6" />,
      title: "Enterprise Application Development",
      desc: "We deliver scalable and secure enterprise-grade web applications designed to support business growth. Our solutions adapt to market changes while ensuring faster time-to-market and a competitive advantage.",
    },
    {
      icon: <FaNetworkWired className="text-white w-6 h-6" />,
      title: "Progressive Web App (PWA) Development",
      desc: "We develop lightweight, secure, and engaging Progressive Web Applications that work offline, send push notifications, and perform seamlessly across multiple devices and browsers, following Google's guidelines.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Single Page Application (SPA) Development",
      desc: "We create interactive and fast-loading single-page applications with flexible architecture. Our SPAs are optimized for performance, cross-browser responsiveness, and an immersive user experience.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "Custom Web Application Development",
      desc: "We design feature-rich, tailor-made web applications using modern frameworks and technologies to meet unique business requirements, ensuring optimal performance, scalability, and security.",
    },
  ];

  const faqData = [
    {
      title: "What types of web applications do you develop?",
      description:
        "We specialize in web portals, B2B/B2C web applications, enterprise applications, progressive web apps, and single-page applications tailored to your business needs.",
    },
    {
      title: "Can you customize applications to my business requirements?",
      description:
        "Absolutely! Our developers provide full customization for functionality, UI/UX, and integrations, ensuring the application aligns perfectly with your workflows and objectives.",
    },
    {
      title: "Do you provide secure and scalable solutions?",
      description:
        "Yes, security and scalability are top priorities. We follow industry best practices, integrate secure coding standards, and build applications capable of handling growing traffic and data needs.",
    },
    {
      title: "Can you integrate third-party APIs?",
      description:
        "Definitely. We integrate APIs like payment gateways, SMS/video services, cloud storage, maps, and other third-party solutions to enhance the functionality of your web application.",
    },
    {
      title: "Are the applications mobile-friendly and responsive?",
      description:
        "Yes, all our web applications are designed to be fully responsive and cross-browser compatible, ensuring seamless performance across desktops, tablets, and smartphones.",
    },
    {
      title: "Do you provide maintenance and ongoing support?",
      description:
        "We offer continuous maintenance, updates, and technical support to ensure your web applications remain secure, fast, and optimized even after deployment.",
    },
  ];

  const techCategories = [
    { title:"Frontend", techs:[
      {name:"React.js",icon:"https://cdn.simpleicons.org/react"},
      {name:"Next.js",icon:"https://cdn.simpleicons.org/nextdotjs/white"},
      {name:"Angular",icon:"https://cdn.simpleicons.org/angular"},
      {name:"Vue.js",icon:"https://cdn.simpleicons.org/vuedotjs"},
      {name:"TypeScript",icon:"https://cdn.simpleicons.org/typescript"},
      {name:"HTML/CSS",icon:"https://cdn.simpleicons.org/html5"},
    ]},
    { title:"Backend", techs:[
      {name:"Node.js",icon:"https://cdn.simpleicons.org/nodedotjs"},
      {name:"PHP",icon:"https://cdn.simpleicons.org/php"},
      {name:"Laravel",icon:"https://cdn.simpleicons.org/laravel"},
      {name:"Python",icon:"https://cdn.simpleicons.org/python"},
      {name:"Express.js",icon:"https://cdn.simpleicons.org/express/white"},
      {name:".NET",icon:"https://cdn.simpleicons.org/dotnet"},
    ]},
    { title:"Database", techs:[
      {name:"MySQL",icon:"https://cdn.simpleicons.org/mysql"},
      {name:"PostgreSQL",icon:"https://cdn.simpleicons.org/postgresql"},
      {name:"MongoDB",icon:"https://cdn.simpleicons.org/mongodb"},
      {name:"Redis",icon:"https://cdn.simpleicons.org/redis"},
    ]},
    { title:"DevOps & Cloud", techs:[
      {name:"Docker",icon:"https://cdn.simpleicons.org/docker"},
      {name:"AWS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
      {name:"GitHub Actions",icon:"https://cdn.simpleicons.org/githubactions"},
      {name:"Nginx",icon:"https://cdn.simpleicons.org/nginx"},
      {name:"Vercel",icon:"https://cdn.simpleicons.org/vercel/white"},
    ]},
  ];

  const FALLBACK_CONTENT = {
    bannerImg: gg,
    bannerTitle: "WEB APPLICATION DEVELOPMENT",
    bannerDesc: `Future IT Touch Pvt. Ltd. is an award-winning website development company offering custom web application development services to startups, SMBs, and large enterprises. With an aim to driving business transformation, we are building quality web applications for diverse business domains since ${COMPANY_START_YEAR}. Leveraging cutting-edge technology frameworks, APIs, and databases, we can craft futuristic, conversion-driven, and highly optimized solutions that ensure excellent user experience.`,
    overviewImage: image2,
    overviewImageAlt: "Web application development",
    overviewBadge: "Premium Web Application Development",
    overviewHeading: "Building Powerful and",
    overviewHighlight: "Scalable Web Applications",
    overviewParagraphs: [
      "At Future IT Touch Pvt. Ltd. we specialize in developing robust web applications that streamline business processes, improve operational efficiency, and provide seamless user experiences across devices. Our team leverages modern frameworks and technologies to craft scalable, secure, and high-performing solutions tailored to your business needs.",
      "To ensure your web application delivers maximum value, we integrate a variety of third-party APIs to enhance functionality and enable smooth workflows. From cloud storage with Amazon S3 and CloudFront, real-time communication via Twilio and Zoom, to interactive maps using Google Maps API, our integrations cover a wide range of essential services. We also support video streaming through Vimeo, logistics integration with alamove, and advanced messaging with xotel and nableX APIs.",
      `With over ${yearsExperience} years of experience, we ensure that every project is delivered with performance, scalability, and security in mind.`,
    ],
    overviewCtaText: "Start Your Web App Journey",
    features,
    bizCards: businessData,
    sliderCards: cards,
    platforms,
    techCategories,
    faqData,
    featuresBadge: "Trusted Web App Development Company",
    featuresTitle: "Creating Web Applications That Are",
    featuresTitleHighlight: "Powerful & Scalable",
    bizBadge: "Reliable Web Application Maintenance & Support",
    bizHeading: "Ensuring Your Web Applications Run",
    bizHighlight: "Smoothly & Efficiently",
    sliderTitle: "Ensuring Smooth & Reliable Web Application Performance",
    platformsTitle: "Our Suite of Web Application Development Services",
    faqTitle: "About eCommerce Website Development",
  };

  const content = cms
    ? {
        ...cms,
        bannerImg: cms.bannerImg || gg,
        overviewImage: cms.overviewImage || image2,
        featuresBadge: cms.featuresBadge || FALLBACK_CONTENT.featuresBadge,
        featuresTitle: cms.featuresTitle || FALLBACK_CONTENT.featuresTitle,
        featuresTitleHighlight: cms.featuresTitleHighlight || FALLBACK_CONTENT.featuresTitleHighlight,
        bizBadge: cms.bizBadge || FALLBACK_CONTENT.bizBadge,
        bizHeading: cms.bizHeading || FALLBACK_CONTENT.bizHeading,
        bizHighlight: cms.bizHighlight || FALLBACK_CONTENT.bizHighlight,
        sliderTitle: cms.sliderTitle || FALLBACK_CONTENT.sliderTitle,
        platformsTitle: cms.platformsTitle || FALLBACK_CONTENT.platformsTitle,
        faqTitle: cms.faqTitle || FALLBACK_CONTENT.faqTitle,
        features: isSectionDisabled(cms.enabledSections, "features") ? [] : (cms.features?.length ? cms.features : FALLBACK_CONTENT.features),
        bizCards: isSectionDisabled(cms.enabledSections, "biz") ? [] : (cms.bizCards?.length ? cms.bizCards : FALLBACK_CONTENT.bizCards),
        sliderCards: isSectionDisabled(cms.enabledSections, "slider") ? [] : (cms.sliderCards?.length ? cms.sliderCards : FALLBACK_CONTENT.sliderCards),
        platforms: isSectionDisabled(cms.enabledSections, "platforms") ? [] : (cms.platforms?.length ? cms.platforms : FALLBACK_CONTENT.platforms),
        techCategories: isSectionDisabled(cms.enabledSections, "techstack") ? [] : (cms.techCategories?.length ? cms.techCategories : FALLBACK_CONTENT.techCategories),
        faqData: isSectionDisabled(cms.enabledSections, "faq") ? [] : (cms.faqData?.length ? cms.faqData : FALLBACK_CONTENT.faqData),
      }
    : FALLBACK_CONTENT;

  return <CommonServicePage {...content} featuresStickyImg={image2} />;
};

export default Ecommerce;
