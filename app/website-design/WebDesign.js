"use client";
const bannerImg = "/Assets/stock/photo-1547658719-da2b51169166.webp";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";
import {
  FaPaintBrush, FaMobileAlt, FaSearch, FaShoppingCart, FaCode, FaLayerGroup,
  FaRocket, FaHeadset, FaChartLine, FaDesktop, FaWordpress, FaTools,
} from "react-icons/fa";

const features = [
  {
    title: "Custom Website Design",
    description:
      "We design 100% custom websites tailored to your brand identity and business goals. Every layout, color palette, and typography choice is intentional — crafted by our designers to create a unique digital presence that captures attention, builds trust, and drives conversions from the very first visit.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Responsive Web Development",
    description:
      "Every website we build is fully responsive across all devices — smartphones, tablets, laptops, and desktops. We follow a mobile-first approach ensuring consistent performance, clean layouts, and fast load times regardless of screen size or browser, giving every visitor a seamless browsing experience.",
    icon: <FaMobileAlt />,
  },
  {
    title: "SEO-Optimized Architecture",
    description:
      "Our websites are built with SEO best practices from the ground up — semantic HTML, clean URLs, optimized metadata, structured data, Core Web Vitals compliance, and fast server-side rendering. This gives your website the technical foundation to rank on Google and drive organic traffic continuously.",
    icon: <FaSearch />,
  },
  {
    title: "eCommerce Website Development",
    description:
      "We build powerful eCommerce websites on WooCommerce, Shopify, and custom platforms. From product catalog management and secure payment gateways to inventory systems and order tracking, our eCommerce solutions are built to convert browsers into buyers and scale with your growing catalog.",
    icon: <FaShoppingCart />,
  },
  {
    title: "CMS & WordPress Development",
    description:
      "We build websites on WordPress, Webflow, and headless CMS platforms — giving you full control to manage content, add pages, publish blogs, and update imagery without any developer involvement. Our CMS solutions are intuitive, secure, and scalable for businesses of any size.",
    icon: <FaWordpress />,
  },
  {
    title: "Web Application Development",
    description:
      "Beyond informational websites, we build complex, data-driven web applications with user portals, dashboards, booking systems, and real-time features. Built on Next.js, React, and Node.js, our web apps combine great UX design with robust, scalable backend architecture.",
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Our UI/UX designers create wireframes, interactive prototypes, and high-fidelity mockups before a single line of code is written. We conduct user research and usability testing to validate design decisions — ensuring the final website is intuitive, accessible, and optimized for user engagement.",
    icon: <FaLayerGroup />,
  },
];

const bizCards = [
  {
    icons: <FaRocket className="text-white w-8 h-8" />,
    title: "Fast Delivery, Zero Compromise",
    desc: "We deliver professional, production-ready websites within agreed timelines using agile sprints and clear milestones — without cutting corners on design quality, performance, or security.",
  },
  {
    icons: <FaChartLine className="text-white w-8 h-8" />,
    title: "Results-Driven Approach",
    desc: "Every design decision we make is tied to measurable outcomes — conversion rates, time-on-page, and bounce rates. We build websites that don't just look good but actively grow your business.",
  },
  {
    icons: <FaHeadset className="text-white w-8 h-8" />,
    title: "Dedicated Support & Training",
    desc: "Post-launch, you get ongoing support, content management training, security updates, and a dedicated point of contact — so your website always performs at its best.",
  },
];

const sliderCards = [
  {
    count: "1000+",
    title: "Websites Designed & Delivered",
    desc: `Over 1,000 websites successfully designed and launched for businesses across industries — from startups to established enterprises — in ${YEARS_EXPERIENCE_DISPLAY} years of web design expertise.`,
    image: "/Assets/stock/photo-1522252234503-e356532cafd5.webp",
  },
  {
    count: YEARS_EXPERIENCE_DISPLAY,
    title: "Years of Web Design Experience",
    desc: `${YEARS_EXPERIENCE_DISPLAY} years of crafting websites that balance stunning visual design with technical excellence — proven across hundreds of industries and business types worldwide.`,
    image: "/Assets/stock/photo-1555066931-4365d14bab8c.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our clients consistently award us 5-star ratings for design quality, communication, on-time delivery, and the business results their new websites deliver.",
    image: "/Assets/stock/photo-1460925895917-afdab827c52f.webp",
  },
  {
    count: "3x",
    title: "Average Traffic Increase",
    desc: "Businesses that switch to our SEO-optimized websites see an average 3x increase in organic search traffic within the first 6 months after launch.",
    image: "/Assets/stock/photo-1498050108023-c5249f4df085.webp",
  },
  {
    count: "50+",
    title: "Industries Served",
    desc: "We've delivered websites for clients in healthcare, retail, education, real estate, logistics, hospitality, finance, technology, and many more niche industries.",
    image: "/Assets/stock/photo-1517245386807-bb43f82c33c4.webp",
  },
];

const platforms = [
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Corporate & Business Websites",
    desc: "Professional multi-page websites for companies that need to establish credibility, showcase services, and generate qualified enquiries from their target market.",
  },
  {
    icon: <FaShoppingCart className="text-white w-6 h-6" />,
    title: "eCommerce Stores",
    desc: "Full-featured online stores built on WooCommerce or Shopify with product management, secure payments, shipping integration, and conversion-optimized checkout flows.",
  },
  {
    icon: <FaWordpress className="text-white w-6 h-6" />,
    title: "CMS & WordPress Sites",
    desc: "Content-managed websites that empower your team to update pages, publish blogs, and manage media without any technical knowledge or developer dependency.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Custom Web Applications",
    desc: "Complex, data-driven web apps with user portals, dashboards, booking systems, and real-time features — built on Next.js and React for speed and scalability.",
  },
  {
    icon: <FaMobileAlt className="text-white w-6 h-6" />,
    title: "Small Business Websites",
    desc: "Affordable, professional websites for startups and small businesses — mobile-responsive, SEO-ready, and designed to convert local visitors into customers.",
  },
  {
    icon: <FaTools className="text-white w-6 h-6" />,
    title: "Website Redesign & Migration",
    desc: "Modernize your outdated website with a performance-focused redesign or migrate to a new platform — with zero downtime, full SEO preservation, and improved UX.",
  },
];

const faqData = [
  {
    title: "How much does a professional website cost?",
    description:
      "Website costs vary depending on complexity, features, and design requirements. A simple business website may start at ₹15,000–₹40,000, while eCommerce and custom web applications can range from ₹50,000 to ₹5,00,000+. Contact us for a detailed quote based on your specific requirements.",
  },
  {
    title: "How long does it take to build a website?",
    description:
      "A standard business website typically takes 2–4 weeks from design approval to launch. eCommerce websites take 4–8 weeks, and complex web applications may take 8–16 weeks. We provide a detailed project timeline during the discovery phase.",
  },
  {
    title: "Will my website be mobile-friendly?",
    description:
      "Yes, every website we build is 100% responsive and mobile-optimized. We follow a mobile-first design approach and test across multiple devices, screen sizes, and browsers before launch.",
  },
  {
    title: "Do you provide website hosting and domain services?",
    description:
      "Yes, we assist with domain registration, hosting setup, SSL certificates, and server configuration. We work with leading providers like AWS, DigitalOcean, and Vercel to ensure fast, reliable, and secure hosting for your website.",
  },
  {
    title: "Can I update my website content after launch?",
    description:
      "Yes. Most of our websites are built on CMS platforms like WordPress, enabling you to easily update text, images, blog posts, and pages without any coding knowledge. We provide training and documentation after launch.",
  },
  {
    title: "Do you offer post-launch website maintenance?",
    description:
      "Yes. We offer monthly maintenance packages that include security updates, performance monitoring, plugin updates, content updates, and technical support to keep your website running securely and optimally.",
  },
];

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React.js",      icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js",       icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tailwind CSS",  icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript",    icon: "https://cdn.simpleicons.org/typescript" },
      { name: "HTML/CSS",      icon: "https://cdn.simpleicons.org/html5" },
    ],
  },
  {
    title: "CMS & eCommerce",
    techs: [
      { name: "WordPress",     icon: "https://cdn.simpleicons.org/wordpress" },
      { name: "WooCommerce",   icon: "https://cdn.simpleicons.org/woocommerce" },
      { name: "Shopify",       icon: "https://cdn.simpleicons.org/shopify" },
      { name: "Webflow",       icon: "https://cdn.simpleicons.org/webflow" },
    ],
  },
  {
    title: "Backend & APIs",
    techs: [
      { name: "Node.js",       icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "PHP",           icon: "https://cdn.simpleicons.org/php" },
      { name: "MySQL",         icon: "https://cdn.simpleicons.org/mysql" },
      { name: "MongoDB",       icon: "https://cdn.simpleicons.org/mongodb" },
    ],
  },
  {
    title: "Design & DevOps",
    techs: [
      { name: "Figma",         icon: "https://cdn.simpleicons.org/figma" },
      { name: "Vercel",        icon: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Cloudflare",    icon: "https://cdn.simpleicons.org/cloudflare" },
      { name: "GitHub Actions",icon: "https://cdn.simpleicons.org/githubactions" },
    ],
  },
];

const FALLBACK_CONTENT = {
  bannerImg,
  bannerTitle: "WEBSITE DESIGN & DEVELOPMENT SERVICES",
  bannerDesc: "The biggest challenge faced by any small business is to expand its customer base. With the rising expenses of electronic and print media, a professionally developed website is the first step toward achieving this aim. Future IT Touch Pvt. Ltd. provides a comprehensive range of website design and development services to clients worldwide — customized exclusively for startups and enterprises at affordable rates.",
  overviewImage: "/Assets/stock/photo-1467232004584-a241de8bcf5d.webp",
  overviewImageAlt: "Website Design & Development",
  overviewBadge: "Website Design & Development Services",
  overviewHeading: "Turning Ideas Into",
  overviewHighlight: "Powerful Digital Experiences",
  overviewParagraphs: [
    `A great website is more than a digital brochure — it's your best salesperson, working 24/7 to attract, engage, and convert visitors into paying customers. Future IT Touch Pvt. Ltd. has been crafting high-performance websites for businesses of all sizes for over ${YEARS_EXPERIENCE_DISPLAY} years.`,
    "Whether you need a sleek corporate website, a feature-rich eCommerce store, a content-managed WordPress site, or a complex web application, we deliver solutions tailored to your specific business goals and target audience.",
    { boldPrefix: "For Your Business:", text: "Custom-designed, SEO-optimized, fast-loading websites that generate leads, build credibility, and grow your customer base organically." },
    { boldPrefix: "For Your Users:", text: "Intuitive navigation, mobile-responsive layouts, accessible design, and fast page loads — an experience that keeps visitors coming back." },
    `In the last ${YEARS_EXPERIENCE_DISPLAY} years, we have delivered effective web solutions to thousands of businesses and helped them enhance their growth online with measurable, lasting results.`,
  ],
  overviewCtaText: "Start Your Website Project",
  features,
  bizCards,
  sliderCards,
  platforms,
  techCategories,
  faqData,
  featuresBadge: "Website Design & Development Services",
  featuresTitle: "Building Websites That",
  featuresTitleHighlight: "Drive Business Growth",
  bizBadge: "Why Choose Future IT Touch",
  bizHeading: "We Build Websites That",
  bizHighlight: "Deliver Real Results",
  sliderTitle: "Delivering Website Experiences That Grow Businesses Online",
  platformsTitle: "Website Solutions We Deliver",
  techBadge: "Our Web Tech Stack",
  techHeading: "Technologies",
  techHeadingHighlight: "We Build With",
  techDescription: "We use modern, proven web technologies to deliver fast, secure, scalable, and beautifully designed websites that help businesses compete and win online.",
  faqTitle: "Frequently Asked Questions — Website Design",
};

const WebDesign = ({ cms } = {}) => {
  // Images aren't uploaded to the CMS yet, so keep the local ones even when
  // CMS text content is used — same merge pattern as blog/team/portfolio.
  // Section-chrome fields (badge/heading/highlight per section) fall back
  // individually since a page can have some filled in from the CMS and
  // others still using the local default.
  const content = cms
    ? {
        ...cms,
        bannerImg: cms.bannerImg || bannerImg,
        overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage,
        featuresBadge: cms.featuresBadge || FALLBACK_CONTENT.featuresBadge,
        featuresTitle: cms.featuresTitle || FALLBACK_CONTENT.featuresTitle,
        featuresTitleHighlight: cms.featuresTitleHighlight || FALLBACK_CONTENT.featuresTitleHighlight,
        bizBadge: cms.bizBadge || FALLBACK_CONTENT.bizBadge,
        bizHeading: cms.bizHeading || FALLBACK_CONTENT.bizHeading,
        bizHighlight: cms.bizHighlight || FALLBACK_CONTENT.bizHighlight,
        sliderTitle: cms.sliderTitle || FALLBACK_CONTENT.sliderTitle,
        platformsTitle: cms.platformsTitle || FALLBACK_CONTENT.platformsTitle,
        techBadge: cms.techBadge || FALLBACK_CONTENT.techBadge,
        techHeading: cms.techHeading || FALLBACK_CONTENT.techHeading,
        techHeadingHighlight: cms.techHeadingHighlight || FALLBACK_CONTENT.techHeadingHighlight,
        techDescription: cms.techDescription || FALLBACK_CONTENT.techDescription,
        faqTitle: cms.faqTitle || FALLBACK_CONTENT.faqTitle,
        // Merge with local fallback first, THEN apply the admin's
        // enable/disable choice as the final word — a disabled section
        // must stay hidden even though it has perfectly good local content
        // to fall back to for everything else.
        features: isSectionDisabled(cms.enabledSections, "features") ? [] : (cms.features?.length ? cms.features : FALLBACK_CONTENT.features),
        bizCards: isSectionDisabled(cms.enabledSections, "biz") ? [] : (cms.bizCards?.length ? cms.bizCards : FALLBACK_CONTENT.bizCards),
        sliderCards: isSectionDisabled(cms.enabledSections, "slider") ? [] : (cms.sliderCards?.length ? cms.sliderCards : FALLBACK_CONTENT.sliderCards),
        platforms: isSectionDisabled(cms.enabledSections, "platforms") ? [] : (cms.platforms?.length ? cms.platforms : FALLBACK_CONTENT.platforms),
        techCategories: isSectionDisabled(cms.enabledSections, "techstack") ? [] : (cms.techCategories?.length ? cms.techCategories : FALLBACK_CONTENT.techCategories),
        faqData: isSectionDisabled(cms.enabledSections, "faq") ? [] : (cms.faqData?.length ? cms.faqData : FALLBACK_CONTENT.faqData),
      }
    : FALLBACK_CONTENT;

  return <CommonServicePage {...content} featuresStickyImg="/Assets/stock/photo-1551650975-87deedd944c3.webp" />;
};

export default WebDesign;
