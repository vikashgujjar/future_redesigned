"use client";
const bannerImg = "/Assets/stock/photo-1512428813834-c702c7702b78.webp";
import CommonServicePage from "../components/CommonServicePage";
import { COMPANY_START_YEAR } from "../lib/companyStats";
import {
  FaMobileAlt, FaAndroid, FaApple, FaReact, FaCode, FaCloud, FaSync,
} from "react-icons/fa";

const features = [
  {
    title: "iOS App Development",
    description:
      "We build high-performance iOS applications using Swift and Objective-C, leveraging the full power of Apple's ecosystem. From intuitive UI design adhering to Apple's Human Interface Guidelines to seamless integration with iCloud, Apple Pay, and ARKit, our iOS apps deliver polished, native experiences that users love.",
    icon: <FaApple />,
  },
  {
    title: "Android App Development",
    description:
      "Our Android development team builds robust, scalable apps using Kotlin and Java for the world's largest mobile platform. We ensure compatibility across the fragmented Android device landscape while delivering smooth animations, material design compliance, and deep integration with Google services.",
    icon: <FaAndroid />,
  },
  {
    title: "Cross-Platform Development",
    description:
      "Maximize your reach while minimizing costs with cross-platform apps built using React Native and Flutter. Our cross-platform solutions share up to 90% of the codebase between iOS and Android while delivering near-native performance and platform-specific user experiences.",
    icon: <FaReact />,
  },
  {
    title: "Progressive Web Apps (PWA)",
    description:
      "Bridge the gap between web and mobile with Progressive Web Apps that work offline, load instantly, and can be installed directly from the browser. PWAs give your business a mobile-first experience without the barriers of app store distribution — reaching more users at lower cost.",
    icon: <FaCode />,
  },
  {
    title: "Cloud-Connected Apps",
    description:
      "We architect and build mobile apps with powerful cloud backends using AWS, Firebase, and Azure. Real-time sync, push notifications, scalable databases, and serverless functions enable your app to handle millions of users while maintaining fast, reliable performance.",
    icon: <FaCloud />,
  },
  {
    title: "App Maintenance & Updates",
    description:
      "App launch is just the beginning. We provide ongoing maintenance, OS compatibility updates, feature enhancements, and performance optimizations to keep your app secure, competitive, and aligned with evolving user expectations — with dedicated support available 24/7.",
    icon: <FaSync />,
  },
  {
    title: "Custom Enterprise Mobile Solutions",
    description:
      "We develop tailor-made enterprise mobile applications that streamline internal workflows, improve team productivity, and integrate with existing ERP and CRM systems. Our enterprise apps are built with robust security, role-based access control, and offline capability for field operations.",
    icon: <FaMobileAlt />,
  },
];

const bizCards = [
  {
    title: "End-to-End Development",
    desc: "From initial concept and UX design to development, testing, deployment, and post-launch support — we handle every stage of your mobile app project under one roof.",
    icons: <FaMobileAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Agile Development Process",
    desc: "We follow agile methodologies with bi-weekly sprints, regular demos, and continuous client feedback loops — ensuring transparency, flexibility, and on-time delivery.",
    icons: <FaSync className="text-white w-8 h-8" />,
  },
  {
    title: "Scalable Architecture",
    desc: "Every app we build is designed for growth. Our cloud-native architectures and modular codebases can scale effortlessly from 100 to 10 million users without requiring a complete rebuild.",
    icons: <FaCloud className="text-white w-8 h-8" />,
  },
  {
    title: "Multi-Platform Expertise",
    desc: "With deep expertise in iOS, Android, React Native, and Flutter, we help you choose the right technology for your target audience, budget, and long-term product roadmap.",
    icons: <FaReact className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "50K+",
    title: "Healthcare App Development",
    desc: "Built a HIPAA-compliant telemedicine app with real-time video consultations, appointment booking, and EHR integration serving 50,000+ patients.",
    image: "/Assets/stock/photo-1607746882042-944635dfe10e.webp",
  },
  {
    count: "35%",
    title: "E-Commerce Mobile App",
    desc: "Developed a React Native shopping app with AR product preview, one-tap checkout, and loyalty rewards — driving 35% higher mobile conversion rates.",
    image: "/Assets/stock/photo-1556742049-0cfed4f6a45d.webp",
  },
  {
    count: "500+",
    title: "Fleet Management App",
    desc: "Created a cross-platform fleet tracking and management app with real-time GPS, driver analytics, and automated dispatch routing for a logistics company.",
    image: "/Assets/stock/photo-1519003722824-194d4455a60c.webp",
  },
  {
    count: "100K",
    title: "Fitness & Wellness App",
    desc: "Launched a Flutter-based fitness app with AI workout recommendations, wearable integration, and social challenges — reaching 100K downloads in 3 months.",
    image: "/Assets/stock/photo-1551650975-87deedd944c3.webp",
  },
];

const platforms = [
  { icon: <FaReact className="text-white w-6 h-6" />, title: "React Native & Flutter", desc: "High-performance cross-platform apps sharing up to 90% of code between iOS and Android — faster delivery, lower cost, native feel." },
  { icon: <FaAndroid className="text-white w-6 h-6" />, title: "Android Development (Kotlin)", desc: "Native Android apps with Material Design, Kotlin, and deep Google services integration — optimized across all Android device types." },
  { icon: <FaApple className="text-white w-6 h-6" />, title: "iOS Development (Swift)", desc: "Premium iOS apps following Apple's Human Interface Guidelines with full integration of iCloud, Apple Pay, ARKit, and Siri." },
  { icon: <FaCloud className="text-white w-6 h-6" />, title: "Cloud Backend (AWS, Firebase)", desc: "Scalable cloud backends with real-time sync, push notifications, serverless functions, and databases built for millions of users." },
  { icon: <FaCode className="text-white w-6 h-6" />, title: "Progressive Web Apps (PWA)", desc: "Installable, offline-capable web apps that deliver mobile-like experiences from the browser — no app store required." },
  { icon: <FaSync className="text-white w-6 h-6" />, title: "App Maintenance & Updates", desc: "Ongoing OS compatibility updates, feature enhancements, security patches, and performance optimization after launch." },
];

const faqData = [
  {
    title: "Which mobile platforms do you develop for?",
    description:
      "We develop native iOS and Android apps, as well as cross-platform apps using React Native and Flutter. We help you choose the best approach based on your target audience, timeline, and budget.",
  },
  {
    title: "How long does it take to build a mobile app?",
    description:
      "A simple app typically takes 8–12 weeks, a medium-complexity app 3–5 months, and a feature-rich enterprise app 6–12 months. We provide detailed project timelines during the discovery phase.",
  },
  {
    title: "Do you provide post-launch app maintenance?",
    description:
      "Yes. We offer comprehensive post-launch maintenance packages that include OS update compatibility, bug fixes, performance monitoring, security patches, and new feature development.",
  },
  {
    title: "Will I own the source code of my app?",
    description:
      "Absolutely. Full source code ownership is transferred to you upon project completion. We provide complete code repositories along with technical documentation.",
  },
  {
    title: "Can you integrate third-party APIs and services into the app?",
    description:
      "Yes. We have extensive experience integrating payment gateways, social logins, maps, analytics, CRM systems, push notifications, and custom third-party APIs into mobile applications.",
  },
];

const techCategories = [
  {
    title: "Mobile Frameworks",
    techs: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
      { name: "Android", icon: "https://cdn.simpleicons.org/android" },
      { name: "iOS / Swift", icon: "https://cdn.simpleicons.org/swift" },
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin" },
    ],
  },
  {
    title: "Backend & APIs",
    techs: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" },
    ],
  },
  {
    title: "Database & Storage",
    techs: [
      { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
    ],
  },
  {
    title: "Testing & DevOps",
    techs: [
      { name: "Appium", icon: "https://cdn.simpleicons.org/appium" },
      { name: "Jest", icon: "https://cdn.simpleicons.org/jest" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    ],
  },
];

const FALLBACK_CONTENT = {
  bannerImg,
  bannerTitle: "Mobile App Development Services",
  bannerDesc: `We are a full-stack mobile app development company in Chandigarh with all the expertise you need to build a successful, stable, and scalable mobile product. Future IT Touch Pvt. Ltd. offers comprehensive mobile app development services for iOS, Android, and cross-platform — backed by a team of 50+ designers, developers, and QA specialists serving clients across 3+ countries since ${COMPANY_START_YEAR}.`,
  overviewImage: "/Assets/stock/photo-1607746882042-944635dfe10e.webp",
  overviewImageAlt: "Mobile App Development",
  overviewBadge: "Custom Mobile App Solutions",
  overviewHeading: "Crafting Powerful, Scalable &",
  overviewHighlight: "Custom App Solutions",
  overviewParagraphs: [
    "At Future IT Touch Pvt. Ltd. we have a decade-long experience in custom mobile application development spanning multiple industries from retail to healthcare and enterprise.",
    "We dive into your business ecosystem, explore the market, and understand your requirements to build a truly custom strategy that unlocks the full potential of mobile technology for your company.",
    { boldPrefix: "For Businesses:", text: "Custom solutions for eCommerce, enterprise management, and service-based industries with robust integrations, analytics, and smooth performance." },
    { boldPrefix: "For Users:", text: "Intuitive UI/UX design, fast loading times, offline functionality, and secure data handling to ensure a delightful experience on every device." },
  ],
  overviewCtaText: "Start Your App Project",
  features,
  bizCards,
  sliderCards,
  platforms,
  techCategories,
  faqData,
};

const MobileApp = ({ cms } = {}) => {
  const content = cms
    ? { ...cms, bannerImg: cms.bannerImg || bannerImg, overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage }
    : FALLBACK_CONTENT;

  return (
    <CommonServicePage
      {...content}
      featuresBadge="Our App Development Services"
      featuresTitle="Building Solutions for"
      featuresTitleHighlight="Every Platform"
      featuresStickyImg="/Assets/stock/photo-1556742049-0cfed4f6a45d.webp"
      bizBadge="Why Choose Us"
      bizHeading="Partner with Experts for"
      bizHighlight="Mobile App Success"
      sliderTitle="Delivering Innovative Mobile App Experiences That Drive Growth"
      platformsTitle="Mobile App Technologies We Work With"
      techBadge="Our Mobile Tech Stack"
      techHeading="Technologies"
      techHeadingHighlight="We Build With"
      techDescription="We leverage the latest mobile development frameworks, cloud platforms, and DevOps tools to build apps that are fast, secure, and ready to scale."
      faqTitle="Frequently Asked Questions — Mobile App Development"
    />
  );
};

export default MobileApp;
