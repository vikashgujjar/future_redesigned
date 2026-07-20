// Shared "trust building" content (features / bizCards / sliderCards /
// platforms / techCategories / base FAQs) reused across every service that
// belongs to the same category. This keeps 31 services well-populated with
// polished, hand-authored sections without needing 31 distinct rich content
// sets — the parts of a location page that are genuinely unique per page
// (hero copy, overview intro, location FAQs) come from content.js instead.
import {
  FaPaintBrush, FaMobileAlt, FaSearch, FaShoppingCart, FaCode, FaLayerGroup,
  FaRocket, FaHeadset, FaChartLine, FaDesktop, FaWordpress, FaTools,
  FaAndroid, FaApple, FaVial, FaCheckCircle, FaSyncAlt, FaTabletAlt,
  FaBullhorn, FaGoogle, FaHashtag, FaMapMarkerAlt, FaPenNib, FaChartPie,
  FaPalette, FaIdCard, FaFileAlt, FaFilm, FaLightbulb, FaAward, FaThumbsUp,
  FaShieldAlt, FaUserSecret, FaNetworkWired, FaCloud, FaLock, FaBug, FaClipboardCheck,
  FaServer, FaDatabase, FaCogs, FaBolt, FaLeaf, FaCube, FaCubes, FaLink,
  FaRobot, FaBrain, FaGamepad, FaWindows, FaJava, FaReact, FaVuejs, FaNodeJs,
  FaPython, FaChartBar, FaProjectDiagram, FaFlask, FaMicrochip, FaGem,
  FaTerminal, FaExchangeAlt, FaFingerprint,
} from "react-icons/fa";
import { YEARS_EXPERIENCE_DISPLAY } from "../../lib/companyStats";

const iconCls6 = "text-white w-6 h-6";
const iconCls8 = "text-white w-8 h-8";

// Company-wide credibility stats — same across every service/location page,
// reusing existing site imagery rather than sourcing new assets per page.
export const SHARED_SLIDER_CARDS = [
  { count: "1000+", title: "Projects Delivered", desc: `Over 1,000 projects successfully delivered for businesses across industries — from startups to established enterprises — in ${YEARS_EXPERIENCE_DISPLAY} years of experience.`, image: "/Assets/seerviceSlider/slide1.webp" },
  { count: YEARS_EXPERIENCE_DISPLAY, title: "Years of Industry Experience", desc: `${YEARS_EXPERIENCE_DISPLAY} years of delivering technology and marketing solutions that balance quality with technical excellence, proven across hundreds of businesses worldwide.`, image: "/Assets/seerviceSlider/slide2.webp" },
  { count: "98%", title: "Client Satisfaction Rate", desc: "Our clients consistently rate us highly for delivery quality, communication, and the business results we help them achieve.", image: "/Assets/seerviceSlider/slide3.webp" },
  { count: "50+", title: "Cities Served Worldwide", desc: "We deliver remote services to businesses across 50+ cities spanning North America, Europe, Asia Pacific, and the Middle East.", image: "/Assets/seerviceSlider/slide4.webp" },
  { count: "50+", title: "Industries Served", desc: "We've delivered solutions for clients in healthcare, retail, education, real estate, logistics, hospitality, finance, and many more industries.", image: "/Assets/seerviceSlider/slide5.webp" },
];

export const CATEGORY_CONTENT = {
  // ══════════════════════════════ WEBSITE DESIGN ══════════════════════════
  "website-design": {
    features: [
      { title: "Custom Website Design", icon: <FaPaintBrush />, description: "We design custom websites tailored to your brand identity and business goals — every layout, color palette, and typography choice is intentional." },
      { title: "Responsive Web Development", icon: <FaMobileAlt />, description: "Every website we build is fully responsive across smartphones, tablets, laptops, and desktops, following a mobile-first approach." },
      { title: "SEO-Optimized Architecture", icon: <FaSearch />, description: "Our websites are built with SEO best practices from the ground up — semantic HTML, clean URLs, structured data, and Core Web Vitals compliance." },
      { title: "eCommerce Development", icon: <FaShoppingCart />, description: "We build powerful eCommerce websites on WooCommerce, Shopify, and custom platforms designed to convert browsers into buyers." },
      { title: "CMS & WordPress Development", icon: <FaWordpress />, description: "We build on WordPress, Webflow, and headless CMS platforms — giving you full control to manage content without developer involvement." },
      { title: "Web Application Development", icon: <FaCode />, description: "We build data-driven web applications with user portals, dashboards, and real-time features on Next.js, React, and Node.js." },
      { title: "UI/UX Design & Prototyping", icon: <FaLayerGroup />, description: "Our designers create wireframes, prototypes, and high-fidelity mockups validated through real user research and testing." },
    ],
    bizCards: [
      { icons: <FaRocket className={iconCls8} />, title: "Fast Delivery, Zero Compromise", desc: "We deliver production-ready websites within agreed timelines using agile sprints and clear milestones — without cutting corners." },
      { icons: <FaChartLine className={iconCls8} />, title: "Results-Driven Approach", desc: "Every design decision is tied to measurable outcomes — conversion rates, time-on-page, and bounce rates." },
      { icons: <FaHeadset className={iconCls8} />, title: "Dedicated Support & Training", desc: "Post-launch, you get ongoing support, content management training, and a dedicated point of contact." },
    ],
    platforms: [
      { icon: <FaDesktop className={iconCls6} />, title: "Corporate & Business Websites", desc: "Professional multi-page websites that establish credibility and generate qualified enquiries." },
      { icon: <FaShoppingCart className={iconCls6} />, title: "eCommerce Stores", desc: "Full-featured online stores with product management, secure payments, and conversion-optimized checkout." },
      { icon: <FaWordpress className={iconCls6} />, title: "CMS & WordPress Sites", desc: "Content-managed websites that empower your team to publish and manage pages without developer dependency." },
      { icon: <FaCode className={iconCls6} />, title: "Custom Web Applications", desc: "Data-driven web apps with dashboards and real-time features, built on Next.js and React." },
      { icon: <FaMobileAlt className={iconCls6} />, title: "Small Business Websites", desc: "Affordable, professional websites designed to convert local visitors into customers." },
      { icon: <FaTools className={iconCls6} />, title: "Website Redesign & Migration", desc: "Modernize an outdated website or migrate platforms with zero downtime and full SEO preservation." },
    ],
    techCategories: [
      { title: "Frontend", techs: [
        { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      ]},
      { title: "CMS & eCommerce", techs: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
        { name: "WooCommerce", icon: "https://cdn.simpleicons.org/woocommerce" },
        { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify" },
        { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow" },
      ]},
      { title: "Backend & APIs", techs: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      ]},
      { title: "Design & DevOps", techs: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
        { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare" },
      ]},
    ],
  },

  // ═══════════════════════════ MOBILE APP DEVELOPMENT ═════════════════════
  "mobile-app-development": {
    features: [
      { title: "Native Android Development", icon: <FaAndroid />, description: "Kotlin and Java-based Android apps engineered for performance, stability, and Play Store approval." },
      { title: "Native iOS Development", icon: <FaApple />, description: "Swift-based iOS apps built for speed, polish, and smooth App Store review." },
      { title: "Cross-Platform Development", icon: <FaMobileAlt />, description: "Flutter and React Native apps that ship to iOS and Android from a single, maintainable codebase." },
      { title: "UI/UX for Mobile", icon: <FaLayerGroup />, description: "Mobile-first interface design focused on usability, retention, and conversion." },
      { title: "QA & App Testing", icon: <FaVial />, description: "Manual and automated testing across devices to catch issues before they reach production." },
      { title: "App Maintenance & Updates", icon: <FaSyncAlt />, description: "Ongoing updates, OS-compatibility patches, and performance monitoring after launch." },
    ],
    bizCards: [
      { icons: <FaRocket className={iconCls8} />, title: "Fast, Reliable Delivery", desc: "Agile sprints and clear milestones get your app to the store without cutting corners on quality." },
      { icons: <FaCheckCircle className={iconCls8} />, title: "Store-Ready Quality", desc: "Every release goes through structured QA before submission, reducing rejection risk and post-launch bugs." },
      { icons: <FaHeadset className={iconCls8} />, title: "Dedicated Support", desc: "Ongoing support and a dedicated point of contact keep your app running smoothly after launch." },
    ],
    platforms: [
      { icon: <FaAndroid className={iconCls6} />, title: "Android Apps", desc: "Native Android applications built with Kotlin for performance and long-term maintainability." },
      { icon: <FaApple className={iconCls6} />, title: "iOS Apps", desc: "Native iOS applications built with Swift, optimized for App Store guidelines." },
      { icon: <FaTabletAlt className={iconCls6} />, title: "Hybrid & Cross-Platform Apps", desc: "Flutter and React Native apps that reach both platforms from one codebase." },
      { icon: <FaVial className={iconCls6} />, title: "App QA & Testing", desc: "Structured manual and automated testing across real devices and OS versions." },
      { icon: <FaShoppingCart className={iconCls6} />, title: "On-Demand & eCommerce Apps", desc: "Booking, delivery, and marketplace apps built for scale and real-time performance." },
      { icon: <FaSyncAlt className={iconCls6} />, title: "App Modernization", desc: "Rebuild or upgrade an aging app with modern frameworks and improved performance." },
    ],
    techCategories: [
      { title: "Native", techs: [
        { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin" },
        { name: "Swift", icon: "https://cdn.simpleicons.org/swift" },
        { name: "Java", icon: "https://cdn.simpleicons.org/openjdk" },
      ]},
      { title: "Cross-Platform", techs: [
        { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
        { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
        { name: "Ionic", icon: "https://cdn.simpleicons.org/ionic" },
      ]},
      { title: "Backend & APIs", techs: [
        { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      ]},
      { title: "Testing & Delivery", techs: [
        { name: "Jest", icon: "https://cdn.simpleicons.org/jest" },
        { name: "Fastlane", icon: "https://cdn.simpleicons.org/fastlane" },
        { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
      ]},
    ],
  },

  // ═══════════════════════════ DIGITAL MARKETING ══════════════════════════
  "digital-marketing": {
    features: [
      { title: "Search Engine Optimization", icon: <FaSearch />, description: "White-hat, technical and content SEO strategies built for sustainable organic ranking growth." },
      { title: "Pay-Per-Click Advertising", icon: <FaGoogle />, description: "Google Ads and paid search campaigns managed for measurable return on ad spend." },
      { title: "Social Media Marketing", icon: <FaHashtag />, description: "Content, community management, and paid social campaigns across major platforms." },
      { title: "Local SEO", icon: <FaMapMarkerAlt />, description: "Google Business Profile optimization and local search strategy for map-pack visibility." },
      { title: "Content Marketing", icon: <FaPenNib />, description: "Editorial content and content strategy that earns organic traffic and builds authority." },
      { title: "Analytics & Reporting", icon: <FaChartPie />, description: "Transparent, data-driven reporting so you always know what's working and why." },
    ],
    bizCards: [
      { icons: <FaBullhorn className={iconCls8} />, title: "Full-Funnel Strategy", desc: "We plan campaigns across the entire customer journey, not just top-of-funnel awareness." },
      { icons: <FaChartLine className={iconCls8} />, title: "Results-Driven Reporting", desc: "Every campaign is tracked against clear KPIs so you can see exactly what's driving growth." },
      { icons: <FaHeadset className={iconCls8} />, title: "Dedicated Account Management", desc: "A dedicated marketing lead keeps strategy, execution, and communication aligned." },
    ],
    platforms: [
      { icon: <FaSearch className={iconCls6} />, title: "SEO Services", desc: "Technical, on-page, and off-page SEO built for long-term organic growth." },
      { icon: <FaGoogle className={iconCls6} />, title: "PPC Management", desc: "Google Ads and paid search campaigns optimized for cost-efficient conversions." },
      { icon: <FaHashtag className={iconCls6} />, title: "Social Media Marketing", desc: "Organic and paid social strategy across Instagram, Facebook, and LinkedIn." },
      { icon: <FaMapMarkerAlt className={iconCls6} />, title: "Local SEO", desc: "Google Business Profile and local citation management for map-pack rankings." },
      { icon: <FaPenNib className={iconCls6} />, title: "Content Marketing", desc: "SEO content, blogs, and editorial calendars that build organic authority." },
      { icon: <FaChartPie className={iconCls6} />, title: "Analytics & CRO", desc: "Conversion rate optimization backed by real campaign and site analytics." },
    ],
    techCategories: [
      { title: "SEO & Analytics", techs: [
        { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics" },
        { name: "Google Search Console", icon: "https://cdn.simpleicons.org/googlesearchconsole" },
        { name: "Semrush", icon: "https://cdn.simpleicons.org/semrush" },
      ]},
      { title: "Advertising", techs: [
        { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads" },
        { name: "Meta", icon: "https://cdn.simpleicons.org/meta" },
        { name: "LinkedIn Ads", icon: "https://cdn.simpleicons.org/linkedin" },
      ]},
      { title: "Content & Social", techs: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
        { name: "Mailchimp", icon: "https://cdn.simpleicons.org/mailchimp" },
        { name: "Hootsuite", icon: "https://cdn.simpleicons.org/hootsuite" },
      ]},
    ],
  },

  // ═══════════════════════════ DESIGN & BRANDING ══════════════════════════
  "design-branding": {
    features: [
      { title: "Brand Identity Design", icon: <FaPalette />, description: "Distinctive visual identity systems that give your brand a consistent, professional look." },
      { title: "Logo Design", icon: <FaPenNib />, description: "Versatile, memorable logo design built to work across every touchpoint." },
      { title: "Corporate Identity", icon: <FaIdCard />, description: "Cohesive corporate identity systems spanning stationery, guidelines, and brand assets." },
      { title: "Print & Brochure Design", icon: <FaFileAlt />, description: "Print and digital collateral that communicates your offer clearly and persuasively." },
      { title: "Animated Video Production", icon: <FaFilm />, description: "Explainer and marketing animation that turns complex ideas into clear visual stories." },
      { title: "Creative Direction", icon: <FaLightbulb />, description: "End-to-end creative direction across branding, digital, and campaign design." },
    ],
    bizCards: [
      { icons: <FaAward className={iconCls8} />, title: "Distinctive Creative Work", desc: "Every project is designed to stand out, not blend in with generic templates." },
      { icons: <FaThumbsUp className={iconCls8} />, title: "Brand-First Thinking", desc: "We design around your brand strategy, not just visual trends, for work that lasts." },
      { icons: <FaHeadset className={iconCls8} />, title: "Collaborative Process", desc: "Structured feedback rounds keep you involved at every stage of the creative process." },
    ],
    platforms: [
      { icon: <FaPalette className={iconCls6} />, title: "Brand Identity Systems", desc: "Full visual identity design including color, typography, and usage guidelines." },
      { icon: <FaPenNib className={iconCls6} />, title: "Logo Design", desc: "Custom logo design built to be distinctive, scalable, and versatile." },
      { icon: <FaIdCard className={iconCls6} />, title: "Corporate Stationery", desc: "Business cards, letterheads, and brand collateral designed to a consistent standard." },
      { icon: <FaFileAlt className={iconCls6} />, title: "Brochure & Print Design", desc: "Print-ready brochures and marketing materials designed for clarity and impact." },
      { icon: <FaFilm className={iconCls6} />, title: "Animated Video", desc: "Explainer videos and motion graphics that simplify complex products and services." },
      { icon: <FaLightbulb className={iconCls6} />, title: "Creative Campaigns", desc: "Full creative direction for campaigns spanning digital and print." },
    ],
    techCategories: [
      { title: "Design Tools", techs: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
        { name: "Adobe Illustrator", icon: "https://cdn.simpleicons.org/adobeillustrator" },
        { name: "Adobe Photoshop", icon: "https://cdn.simpleicons.org/adobephotoshop" },
      ]},
      { title: "Motion & Video", techs: [
        { name: "After Effects", icon: "https://cdn.simpleicons.org/adobeaftereffects" },
        { name: "Premiere Pro", icon: "https://cdn.simpleicons.org/adobepremierepro" },
      ]},
      { title: "Print & Collateral", techs: [
        { name: "InDesign", icon: "https://cdn.simpleicons.org/adobeindesign" },
        { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
      ]},
    ],
  },

  // ═══════════════════════════════ CYBER SECURITY ═════════════════════════
  "cyber-security": {
    features: [
      { title: "Vulnerability Assessment", icon: <FaBug />, description: "Systematic scanning and assessment to identify and close security gaps proactively." },
      { title: "Penetration Testing", icon: <FaUserSecret />, description: "Manual penetration testing that simulates real-world attacks against your systems." },
      { title: "Network Security", icon: <FaNetworkWired />, description: "Network architecture review, monitoring, and hardening for on-prem and cloud environments." },
      { title: "Cloud Security", icon: <FaCloud />, description: "Cloud security posture management and hardening across AWS, Azure, and GCP." },
      { title: "Data Protection & Compliance", icon: <FaLock />, description: "Data protection and compliance advisory to keep sensitive information secure." },
      { title: "Incident Response", icon: <FaClipboardCheck />, description: "Rapid incident response and forensics to contain breaches and minimize impact." },
    ],
    bizCards: [
      { icons: <FaShieldAlt className={iconCls8} />, title: "Proactive Security Posture", desc: "We help you find and fix vulnerabilities before attackers do, not just react after an incident." },
      { icons: <FaCheckCircle className={iconCls8} />, title: "Compliance-Ready Delivery", desc: "Assessments and reporting structured to support your compliance and audit requirements." },
      { icons: <FaHeadset className={iconCls8} />, title: "Responsive Security Team", desc: "Direct access to security engineers, not a ticketing queue, when something urgent comes up." },
    ],
    platforms: [
      { icon: <FaBug className={iconCls6} />, title: "Vulnerability Assessment", desc: "Comprehensive scanning and manual review to identify exploitable weaknesses." },
      { icon: <FaUserSecret className={iconCls6} />, title: "Penetration Testing", desc: "Application and network penetration testing simulating real attacker techniques." },
      { icon: <FaNetworkWired className={iconCls6} />, title: "Network Security", desc: "Firewall configuration, segmentation, and network monitoring services." },
      { icon: <FaCloud className={iconCls6} />, title: "Cloud Security", desc: "Cloud configuration review and hardening across major cloud providers." },
      { icon: <FaLock className={iconCls6} />, title: "Data Protection & Compliance", desc: "Data protection advisory aligned with relevant regulatory frameworks." },
      { icon: <FaClipboardCheck className={iconCls6} />, title: "Incident Response", desc: "Structured breach response, containment, and post-incident forensics." },
    ],
    techCategories: [
      { title: "Testing & Scanning", techs: [
        { name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite" },
        { name: "Nmap", icon: "https://cdn.simpleicons.org/nmap" },
        { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit" },
      ]},
      { title: "Cloud Security", techs: [
        { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws" },
        { name: "Microsoft Azure", icon: "https://cdn.simpleicons.org/microsoftazure" },
        { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
      ]},
      { title: "Monitoring & Response", techs: [
        { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark" },
        { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk" },
      ]},
    ],
  },
};

export function getCategoryContent(categorySlug) {
  return CATEGORY_CONTENT[categorySlug] || CATEGORY_CONTENT["website-design"];
}

// ════════════════════════════════════════════════════════════════════════
// Technology × Location "trust building" content — same DRY approach as
// CATEGORY_CONTENT above, but shaped for CommonTechPage.js's props
// (services / process / features / stack) instead of CommonServicePage.js's
// (features / bizCards / platforms / techCategories). The unique per-page
// copy (hero, overview, FAQs) comes from buildTechnologyLocationContent()
// in content.js — this file only supplies the shared, category-level
// sections reused across every technology in the same category.
const iconCls = "text-lg";

// Standard delivery process — genuinely the same steps regardless of which
// technology is involved, so it's shared across all 6 categories rather
// than repeated with cosmetic differences.
const TECH_PROCESS = [
  { icon: <FaCheckCircle className={iconCls} />, title: "Requirement Analysis", desc: "Understanding your business goals, users, and technical requirements in detail." },
  { icon: <FaLayerGroup className={iconCls} />, title: "Architecture & Design", desc: "Designing a scalable architecture and data model built for long-term growth." },
  { icon: <FaCode className={iconCls} />, title: "Development", desc: "Building clean, maintainable code following industry best practices." },
  { icon: <FaDatabase className={iconCls} />, title: "Integration & Data", desc: "Connecting APIs, databases, and third-party services into a reliable system." },
  { icon: <FaShieldAlt className={iconCls} />, title: "Security Hardening", desc: "Implementing validation, authentication, and protection against common threats." },
  { icon: <FaBolt className={iconCls} />, title: "Testing & QA", desc: "Thorough manual and automated testing for error-free, reliable performance." },
  { icon: <FaServer className={iconCls} />, title: "Deployment", desc: "Zero-downtime deployment with proper server and environment configuration." },
  { icon: <FaTools className={iconCls} />, title: "Ongoing Support", desc: "Monitoring, bug fixes, updates, and performance tuning after launch." },
];

const TECH_CATEGORY_CONTENT = {
  "Web Technology": {
    services: [
      { icon: <FaCode />, title: "Custom Web Development", desc: "Secure, scalable web applications built to match your exact business requirements.", points: ["Dynamic web applications", "Secure backend systems", "Clean, reusable code", "Custom business logic"] },
      { icon: <FaServer />, title: "Backend & API Development", desc: "Robust server-side logic and RESTful/GraphQL APIs that power web and mobile clients alike.", points: ["RESTful & GraphQL APIs", "Third-party integrations", "Token-based auth", "Queues & background jobs"] },
      { icon: <FaDatabase />, title: "Database Architecture", desc: "Optimized relational and NoSQL schemas designed for fast, reliable data access at scale.", points: ["Schema design", "Query optimization", "Caching strategy", "Migration planning"] },
      { icon: <FaShoppingCart />, title: "CMS & eCommerce Development", desc: "Content-managed sites and online stores your team can maintain without developer dependency.", points: ["WordPress & Shopify builds", "Custom CMS integration", "Payment gateway setup", "Inventory & catalog systems"] },
      { icon: <FaShieldAlt />, title: "Security & Maintenance", desc: "Ongoing hardening against SQL injection, XSS, and CSRF, plus proactive monitoring.", points: ["Vulnerability audits", "Input validation", "Encrypted storage", "24/7 monitoring"] },
      { icon: <FaTools />, title: "Migration & Modernization", desc: "Moving legacy systems onto modern frameworks with zero downtime and improved performance.", points: ["Legacy system audits", "Framework migration", "Performance tuning", "Code refactoring"] },
    ],
    features: [
      { icon: <FaCode />, title: "Clean Architecture", desc: "We follow proven design patterns so your codebase stays modular and easy to scale as the business grows." },
      { icon: <FaLock />, title: "Enterprise-Grade Security", desc: "Multi-layer security with input validation, CSRF protection, and encrypted data storage." },
      { icon: <FaRocket />, title: "Performance Optimization", desc: "Query caching, lazy loading, and database indexing for consistently fast response times." },
      { icon: <FaDatabase />, title: "Scalable Data Design", desc: "Schemas architected for high-traffic scenarios, with pooling and query optimization built in." },
      { icon: <FaBolt />, title: "Rapid, Reliable Delivery", desc: "Modern framework tooling and CI-friendly workflows keep delivery fast without cutting corners." },
      { icon: <FaLeaf />, title: "Long-Term Maintainability", desc: "Documented, standards-based code that's easy for any team to pick up and extend later." },
    ],
    stack: [
      { name: "PHP" }, { name: "Laravel" }, { name: "Node.js" }, { name: "React.js" },
      { name: "Vue.js" }, { name: "Angular" }, { name: "Python" }, { name: "Django" },
      { name: "WordPress" }, { name: "Shopify" }, { name: "MySQL" }, { name: "PostgreSQL" },
      { name: "MongoDB" }, { name: "Redis" }, { name: "REST APIs" }, { name: "Docker" },
    ],
  },

  "Enterprise Technology": {
    services: [
      { icon: <FaWindows />, title: "ASP.NET Application Development", desc: "Secure, enterprise-grade applications built on the .NET ecosystem for reliability at scale.", points: ["MVC & Web API apps", "Enterprise portals", "Legacy .NET upgrades", "Windows & cloud deployment"] },
      { icon: <FaDatabase />, title: "Enterprise Data Integration", desc: "Connecting internal systems, SQL Server databases, and third-party services into one coherent platform.", points: ["SQL Server architecture", "Service-oriented integration", "ETL & data pipelines", "Reporting dashboards"] },
      { icon: <FaShieldAlt />, title: "Identity & Access Management", desc: "Role-based access control and enterprise authentication built for compliance-sensitive organizations.", points: ["Active Directory integration", "Single sign-on", "Role-based permissions", "Audit logging"] },
      { icon: <FaServer />, title: "Cloud & On-Prem Deployment", desc: "Flexible deployment across Azure, AWS, or on-premise infrastructure to match your compliance needs.", points: ["Azure deployment", "On-premise hosting", "Hybrid architectures", "CI/CD pipelines"] },
      { icon: <FaCogs />, title: "Legacy System Modernization", desc: "Migrating aging enterprise applications to current .NET versions without disrupting operations.", points: ["Framework upgrades", "Zero-downtime migration", "Performance audits", "Code refactoring"] },
      { icon: <FaHeadset />, title: "Enterprise Support & SLAs", desc: "Dedicated support agreements built around the uptime and response times enterprise systems require.", points: ["Defined SLAs", "Proactive monitoring", "Priority incident response", "Scheduled maintenance"] },
    ],
    features: [
      { icon: <FaShieldAlt />, title: "Compliance-Ready Architecture", desc: "Built with the access controls and audit trails enterprise and regulated environments expect." },
      { icon: <FaServer />, title: "Enterprise-Scale Reliability", desc: "Systems engineered to handle high transaction volumes and mission-critical uptime requirements." },
      { icon: <FaCogs />, title: "Deep .NET Expertise", desc: "Years of hands-on experience across the full .NET stack, from Framework to modern .NET releases." },
      { icon: <FaLock />, title: "Enterprise Security Standards", desc: "Authentication, encryption, and access policies designed around enterprise security requirements." },
      { icon: <FaSyncAlt />, title: "Seamless System Integration", desc: "Purpose-built connectors between your ASP.NET applications and existing enterprise infrastructure." },
      { icon: <FaHeadset />, title: "Dedicated Enterprise Support", desc: "A consistent point of contact and defined response times for business-critical systems." },
    ],
    stack: [
      { name: "ASP.NET" }, { name: "C#" }, { name: ".NET Core" }, { name: "SQL Server" },
      { name: "Azure" }, { name: "Entity Framework" }, { name: "Web API" }, { name: "IIS" },
      { name: "Active Directory" }, { name: "Blazor" }, { name: "Docker" }, { name: "Azure DevOps" },
    ],
  },

  "Mobile Application": {
    services: [
      { icon: <FaApple />, title: "Native iOS Development", desc: "Swift-based iOS apps engineered for performance, polish, and smooth App Store review.", points: ["Swift & SwiftUI apps", "App Store optimization", "Apple ecosystem integration", "In-app purchases"] },
      { icon: <FaAndroid />, title: "Native Android Development", desc: "Kotlin and Java-based Android apps built for stability across a wide range of devices.", points: ["Kotlin & Java apps", "Play Store readiness", "Material Design UI", "Push notifications"] },
      { icon: <FaMobileAlt />, title: "Cross-Platform Development", desc: "Flutter, React Native, and Ionic apps that ship to iOS and Android from one shared codebase.", points: ["Single codebase delivery", "Native-like performance", "Shared business logic", "Faster time-to-market"] },
      { icon: <FaVial />, title: "Mobile App Testing & QA", desc: "Functional, performance, and usability testing across real iOS and Android devices before launch.", points: ["Device lab testing", "Automated test suites", "Performance profiling", "Crash & error monitoring"] },
      { icon: <FaSyncAlt />, title: "App Backend & API Integration", desc: "Secure backend services and third-party API integrations that power your mobile experience.", points: ["REST & GraphQL APIs", "Real-time sync", "Push notification services", "Offline-first architecture"] },
      { icon: <FaTabletAlt />, title: "App Maintenance & Updates", desc: "Ongoing OS-version support, bug fixes, and feature updates after your app goes live.", points: ["OS compatibility updates", "Bug fixes & patches", "Performance monitoring", "Feature enhancements"] },
    ],
    features: [
      { icon: <FaMobileAlt />, title: "Native-Quality Experience", desc: "Smooth animations and platform-appropriate UI, whether built natively or cross-platform." },
      { icon: <FaBolt />, title: "Fast, Efficient Delivery", desc: "Modern frameworks and reusable components help us ship reliable apps without dragging out timelines." },
      { icon: <FaShieldAlt />, title: "Secure by Design", desc: "Secure authentication, encrypted local storage, and safe API communication built in from day one." },
      { icon: <FaSyncAlt />, title: "Seamless Backend Integration", desc: "Reliable, well-documented API integrations connecting your app to the services it depends on." },
      { icon: <FaVial />, title: "Rigorous Device Testing", desc: "Real-device testing across screen sizes and OS versions catches issues before your users do." },
      { icon: <FaHeadset />, title: "Post-Launch Support", desc: "Ongoing updates and monitoring to keep your app compatible as new OS versions ship." },
    ],
    stack: [
      { name: "Swift" }, { name: "Kotlin" }, { name: "Java" }, { name: "Flutter" },
      { name: "React Native" }, { name: "Ionic" }, { name: "Firebase" }, { name: "SwiftUI" },
      { name: "Jetpack Compose" }, { name: "REST APIs" }, { name: "GraphQL" }, { name: "SQLite" },
    ],
  },

  "Game Technology": {
    services: [
      { icon: <FaGamepad />, title: "Unity Game Development", desc: "2D and 3D games built in Unity for mobile, desktop, and console platforms.", points: ["2D & 3D game builds", "Mobile game optimization", "Cross-platform export", "In-game monetization"] },
      { icon: <FaCube />, title: "3D Modeling & Environment Design", desc: "Immersive game environments and assets optimized for real-time rendering performance.", points: ["3D asset creation", "Environment design", "Performance-optimized models", "Lighting & shaders"] },
      { icon: <FaCogs />, title: "Gameplay Systems & Mechanics", desc: "Custom gameplay logic, physics, and interaction systems built around your game design.", points: ["Custom game mechanics", "Physics & collision systems", "AI behavior scripting", "Multiplayer networking"] },
      { icon: <FaMobileAlt />, title: "Cross-Platform Game Publishing", desc: "Preparing and deploying Unity builds across iOS, Android, Windows, and WebGL.", points: ["App store submission", "Platform-specific builds", "WebGL deployment", "Console porting guidance"] },
      { icon: <FaVial />, title: "Game QA & Performance Testing", desc: "Playtesting and performance profiling to catch bugs and frame-rate issues before launch.", points: ["Playtesting sessions", "Frame-rate profiling", "Bug tracking", "Device compatibility testing"] },
      { icon: <FaTools />, title: "Post-Launch Updates & Live Ops", desc: "Ongoing content updates, balancing, and bug fixes to keep players engaged after release.", points: ["Content updates", "Balance patches", "Analytics integration", "Live-ops support"] },
    ],
    features: [
      { icon: <FaGamepad />, title: "End-to-End Game Development", desc: "From concept and prototyping through to store submission, handled by one dedicated team." },
      { icon: <FaCube />, title: "Optimized 3D Performance", desc: "Assets and rendering pipelines tuned for smooth frame rates across target devices." },
      { icon: <FaMobileAlt />, title: "True Cross-Platform Builds", desc: "One Unity project exported cleanly to mobile, desktop, and web without rework." },
      { icon: <FaCogs />, title: "Custom Gameplay Engineering", desc: "Bespoke mechanics and systems built around your specific game design, not generic templates." },
      { icon: <FaVial />, title: "Thorough Playtesting", desc: "Real playtesting sessions catch balance and usability issues automated tests miss." },
      { icon: <FaHeadset />, title: "Live-Ops Ready", desc: "Analytics and update pipelines in place so you can keep improving the game post-launch." },
    ],
    stack: [
      { name: "Unity" }, { name: "C#" }, { name: "Blender" }, { name: "Unity Ads" },
      { name: "Photon" }, { name: "Firebase" }, { name: "WebGL" }, { name: "Android SDK" },
      { name: "Xcode" }, { name: "Git" },
    ],
  },

  "AI / ML": {
    services: [
      { icon: <FaBrain />, title: "AI & Machine Learning Development", desc: "Custom ML models and AI-powered features built around your specific data and use case.", points: ["Custom model training", "Predictive analytics", "NLP & text processing", "Recommendation engines"] },
      { icon: <FaChartBar />, title: "Data Science & Analytics", desc: "Turning raw data into actionable insight with Python-based analysis and visualization.", points: ["Data pipeline design", "Statistical analysis", "Data visualization", "Reporting dashboards"] },
      { icon: <FaFlask />, title: "Data Processing with NumPy & Pandas", desc: "High-performance numerical computing and data wrangling for research and production systems.", points: ["Large-scale data processing", "Feature engineering", "Data cleaning pipelines", "Scientific computing"] },
      { icon: <FaRobot />, title: "AI-Powered Application Integration", desc: "Embedding trained models and AI services directly into your web or mobile applications.", points: ["Model deployment", "API-based inference", "Real-time predictions", "Chatbot integration"] },
      { icon: <FaProjectDiagram />, title: "Research-Oriented Development", desc: "Specialized languages like Julia, Lisp, and Haskell for research, symbolic computation, and formal methods.", points: ["Scientific computing", "Symbolic AI systems", "Functional programming", "Prototype research tooling"] },
      { icon: <FaShieldAlt />, title: "Model Testing & Validation", desc: "Rigorous evaluation of model accuracy, bias, and performance before production deployment.", points: ["Accuracy benchmarking", "Bias & fairness testing", "Performance profiling", "A/B testing frameworks"] },
    ],
    features: [
      { icon: <FaBrain />, title: "Applied AI Expertise", desc: "We build models that solve real business problems, not just research demos." },
      { icon: <FaChartBar />, title: "Data-Driven Decision Making", desc: "Clean pipelines and clear visualization turn your raw data into decisions you can act on." },
      { icon: <FaFlask />, title: "Rigorous Experimentation", desc: "Structured testing and validation before any model reaches production." },
      { icon: <FaRobot />, title: "Production-Ready Integration", desc: "Models deployed as reliable, scalable services your applications can actually depend on." },
      { icon: <FaProjectDiagram />, title: "Specialized Language Expertise", desc: "Hands-on experience in NumPy, PyBrain, Julia, Lisp, and Haskell for problems general tools can't solve." },
      { icon: <FaLeaf />, title: "Maintainable ML Pipelines", desc: "Documented, versioned pipelines so your models stay reproducible as data and requirements evolve." },
    ],
    stack: [
      { name: "Python" }, { name: "NumPy" }, { name: "Pandas" }, { name: "TensorFlow" },
      { name: "PyTorch" }, { name: "Scikit-learn" }, { name: "PyBrain" }, { name: "Julia" },
      { name: "Lisp" }, { name: "Haskell" }, { name: "Jupyter" }, { name: "REST APIs" },
    ],
  },

  "Blockchain": {
    services: [
      { icon: <FaCube />, title: "Smart Contract Development", desc: "Secure, audited smart contracts written in Solidity for Ethereum and EVM-compatible chains.", points: ["Solidity smart contracts", "Contract auditing", "Gas optimization", "Upgradeable contract patterns"] },
      { icon: <FaLink />, title: "Blockchain Application Development", desc: "Decentralized applications (dApps) with on-chain logic and intuitive front-end experiences.", points: ["dApp development", "Wallet integration", "On-chain/off-chain architecture", "Web3 front-ends"] },
      { icon: <FaExchangeAlt />, title: "High-Performance Blockchain Systems", desc: "C++ and Python-based blockchain infrastructure engineered for speed and reliability.", points: ["Custom blockchain protocols", "Node infrastructure", "Consensus mechanism tuning", "Performance optimization"] },
      { icon: <FaFingerprint />, title: "Blockchain Voting & Polling Systems", desc: "Transparent, tamper-resistant polling and voting systems built on blockchain infrastructure.", points: ["Transparent vote recording", "Tamper-resistant architecture", "Result verification", "Access-controlled participation"] },
      { icon: <FaShieldAlt />, title: "Blockchain Security Audits", desc: "Independent review of smart contracts and blockchain systems to catch vulnerabilities before launch.", points: ["Smart contract audits", "Vulnerability assessment", "Penetration testing", "Security best-practice review"] },
      { icon: <FaDatabase />, title: "Blockchain-Backend Integration", desc: "Connecting blockchain systems to traditional databases, APIs, and existing business infrastructure.", points: ["Hybrid on/off-chain data", "API bridges", "Event indexing", "Data synchronization"] },
    ],
    features: [
      { icon: <FaCube />, title: "Audited Smart Contracts", desc: "Every contract is reviewed for security and gas efficiency before it goes anywhere near mainnet." },
      { icon: <FaLink />, title: "Full-Stack Blockchain Delivery", desc: "From smart contract to front-end, we deliver the whole dApp, not just the on-chain piece." },
      { icon: <FaExchangeAlt />, title: "Multi-Language Expertise", desc: "Solidity, C++, and Python experience covering both application- and protocol-level work." },
      { icon: <FaFingerprint />, title: "Transparent by Design", desc: "Systems built so results and transactions are independently verifiable, not just trusted." },
      { icon: <FaShieldAlt />, title: "Security-First Development", desc: "Blockchain systems carry real financial risk — we treat security review as non-negotiable." },
      { icon: <FaDatabase />, title: "Practical Hybrid Architecture", desc: "We combine on-chain guarantees with off-chain performance where it makes business sense." },
    ],
    stack: [
      { name: "Solidity" }, { name: "Ethereum" }, { name: "C++" }, { name: "Python" },
      { name: "Web3.js" }, { name: "Hardhat" }, { name: "Truffle" }, { name: "IPFS" },
      { name: "Ethers.js" }, { name: "MetaMask" },
    ],
  },
};

export function getTechCategoryContent(category) {
  const content = TECH_CATEGORY_CONTENT[category] || TECH_CATEGORY_CONTENT["Web Technology"];
  return { ...content, process: TECH_PROCESS };
}
