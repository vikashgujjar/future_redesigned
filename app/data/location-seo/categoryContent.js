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
} from "react-icons/fa";

const iconCls6 = "text-white w-6 h-6";
const iconCls8 = "text-white w-8 h-8";

// Company-wide credibility stats — same across every service/location page,
// reusing existing site imagery rather than sourcing new assets per page.
export const SHARED_SLIDER_CARDS = [
  { count: "1000+", title: "Projects Delivered", desc: "Over 1,000 projects successfully delivered for businesses across industries — from startups to established enterprises — in 23+ years of experience.", image: "/Assets/seerviceSlider/slide1.webp" },
  { count: "23+", title: "Years of Industry Experience", desc: "23+ years of delivering technology and marketing solutions that balance quality with technical excellence, proven across hundreds of businesses worldwide.", image: "/Assets/seerviceSlider/slide2.webp" },
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
