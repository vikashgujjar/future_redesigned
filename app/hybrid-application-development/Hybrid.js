"use client";
const ec = "/Assets/stock/photo-1512941937669-90a1b58e7e9c.webp";
const app = "/Assets/stock/photo-1526498460520-4c246339dccb.webp";
import CommonServicePage from "../components/CommonServicePage";
import { FaMobileAlt, FaPaintBrush, FaClock, FaLightbulb, FaDraftingCompass, FaCode, FaBug, FaCloudUploadAlt, FaChartLine, FaTools } from "react-icons/fa";
import { SiReact, SiFlutter, SiGooglecloud } from "react-icons/si";
import { MdOutlineApi, MdOutlineSecurity } from "react-icons/md";
import { RiTestTubeLine } from "react-icons/ri";
import useYearsExperience from "../lib/useYearsExperience";

const Hybrid = ({ cms } = {}) => {
  const yearsExperience = useYearsExperience();
  const features = [
    {
      title: "Idea & Strategy",
      description:
        "Every successful app begins with a great idea and a solid strategy. We start by understanding your vision, business goals, and target audience. Our team then defines the app's core features, competitive advantage, and monetization model to create a clear, results-driven roadmap that aligns with your long-term business objectives.",
      icon: <FaLightbulb />,
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX experts design visually stunning and user-friendly interfaces that reflect Apple's Human Interface Guidelines. We focus on delivering seamless navigation, pixel-perfect layouts, and intuitive user journeys that enhance engagement, retention, and overall satisfaction — ensuring a delightful experience for every user.",
      icon: <FaDraftingCompass />,
    },
    {
      title: "App Development",
      description:
        "Using the latest technologies like Swift, SwiftUI, and Xcode, our developers bring your app to life with precision and performance. We follow agile methodologies to ensure flexibility and transparency at every stage. From front-end interfaces to back-end logic and APIs, we build secure, scalable, and high-performing iOS applications tailored to your business needs.",
      icon: <FaCode />,
    },
    {
      title: "Testing & QA",
      description:
        "Quality assurance is a vital part of our process. Our QA engineers perform rigorous testing, including functionality, performance, usability, and device compatibility checks. We use both manual and automated testing tools to ensure your app is free from bugs, stable under real-world conditions, and delivers a flawless experience on every iPhone and iPad model.",
      icon: <FaBug />,
    },
    {
      title: "App Deployment",
      description:
        "Once your app is tested and approved, we manage the entire App Store submission process. From preparing metadata, screenshots, and descriptions to meeting Apple's compliance requirements, we ensure a smooth and successful launch. Our goal is to get your app live quickly and efficiently without any delays or rejections.",
      icon: <FaCloudUploadAlt />,
    },
    {
      title: "App Marketing",
      description:
        "Building a great app is just the beginning — getting users to discover it is the next challenge. Our marketing team uses proven strategies like App Store Optimization (ASO), social media campaigns, and influencer outreach to increase your app's visibility, downloads, and engagement. We also analyze user data to improve retention and boost ROI.",
      icon: <FaChartLine />,
    },
    {
      title: "Support & Maintenance",
      description:
        "We continue to stand by your side even after your app goes live. Our maintenance services include regular updates, performance monitoring, bug fixes, and feature enhancements to keep your app optimized and secure. We ensure it remains compatible with the latest iOS versions and Apple devices, providing a consistent experience for your users.",
      icon: <FaTools />,
    },
  ];

  const businessData = [
    {
      icons: <FaMobileAlt className="text-white w-8 h-8" />,
      title: "Specialized in iOS Development",
      desc: "We focus on building robust, high-performing iOS applications tailored for iPhone, iPad, and Apple Watch. Our apps deliver seamless functionality and exceptional user experiences.",
    },
    {
      icons: <FaPaintBrush className="text-white w-8 h-8" />,
      title: "Innovative & Intuitive Design",
      desc: "Our design experts create visually stunning and intuitive app interfaces that align perfectly with Apple's Human Interface Guidelines, ensuring elegant and user-friendly experiences.",
    },
    {
      icons: <FaClock className="text-white w-8 h-8" />,
      title: "Timely Project Delivery",
      desc: "As a trusted iOS app development company, we prioritize meeting deadlines while maintaining top-tier quality, performance, and reliability in every project we deliver.",
    },
  ];

  const cards = [
    {
      count: "300+",
      title: "Hybrid Apps Delivered",
      desc: "We've successfully built and launched over 300 hybrid mobile applications for Android and iOS using React Native, Flutter, and Ionic. Each app offers native-like performance and seamless functionality across all devices.",
      image: "/Assets/stock/photo-1607746882042-944635dfe10e.webp",
    },
    {
      count: yearsExperience,
      title: "Years of Industry Experience",
      desc: `With ${yearsExperience} years of expertise in mobile app development, Future IT Touch Pvt. Ltd. specializes in creating cost-effective and scalable hybrid applications for businesses worldwide.`,
      image: "/Assets/stock/photo-1607082348824-0a96f2a4b9da.webp",
    },
    {
      count: "500+",
      title: "Satisfied Global Clients",
      desc: "Our hybrid app solutions have empowered over 500 clients globally, from startups to enterprises. We ensure every app aligns with business objectives and provides a consistent cross-platform experience.",
      image: "/Assets/stock/photo-1512428813834-c702c7702b78.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to innovation, transparency, and quality has earned us a 98% client satisfaction rate. We ensure your hybrid app delivers outstanding value and reliability across platforms.",
      image: "/Assets/stock/photo-1526498460520-4c246339dccb.webp",
    },
    {
      count: "24/7",
      title: "Technical Support & Maintenance",
      desc: "We offer round-the-clock support and maintenance to ensure your hybrid applications remain up-to-date, secure, and high-performing — long after deployment.",
      image: "/Assets/stock/photo-1607252650355-f7fd0460ccdb.webp",
    },
  ];

  const platforms = [
    {
      icon: <SiReact className="text-white w-6 h-6" />,
      title: "React Native Development",
      desc: "We craft cross-platform apps using React Native that offer native-like performance and faster delivery.",
    },
    {
      icon: <SiFlutter className="text-white w-6 h-6" />,
      title: "Flutter App Development",
      desc: "Our Flutter experts build beautiful, high-performing apps that run smoothly on both Android and iOS.",
    },
    {
      icon: <SiGooglecloud className="text-white w-6 h-6" />,
      title: "Cloud Integration",
      desc: "We integrate apps with secure cloud platforms like Firebase, AWS, and Azure for real-time performance.",
    },
    {
      icon: <MdOutlineSecurity className="text-white w-6 h-6" />,
      title: "Security & Compliance",
      desc: "We ensure enterprise-grade app security with encryption, secure APIs, and global compliance standards.",
    },
    {
      icon: <MdOutlineApi className="text-white w-6 h-6" />,
      title: "API & Backend Integration",
      desc: "Our team builds and connects APIs for real-time data flow and scalable backend architecture.",
    },
    {
      icon: <RiTestTubeLine className="text-white w-6 h-6" />,
      title: "Testing & Maintenance",
      desc: "We perform rigorous multi-device testing and provide ongoing updates to keep your app flawless.",
    },
  ];

  const faqData = [
    {
      title: "What is hybrid app development?",
      description:
        "Hybrid app development allows you to build mobile apps using a single codebase that works on both Android and iOS platforms. It combines the benefits of web and native technologies, reducing cost and time-to-market.",
    },
    {
      title: "Which technologies do you use for hybrid app development?",
      description:
        "We use leading frameworks like React Native, Flutter, and Ionic, along with cloud services and secure APIs to build high-performing hybrid applications that feel and function like native apps.",
    },
    {
      title: "Are hybrid apps as good as native apps?",
      description:
        "Yes! With modern frameworks like React Native and Flutter, hybrid apps deliver near-native performance, smooth animations, and an exceptional user experience across devices.",
    },
    {
      title: "Can you convert my existing app into a hybrid app?",
      description:
        "Absolutely! Our experts can migrate or rebuild your existing mobile app into a hybrid solution, improving cross-platform compatibility and reducing maintenance costs.",
    },
    {
      title: "Will my hybrid app work across Android and iOS?",
      description:
        "Yes, hybrid apps are designed to work seamlessly on both platforms, ensuring consistent UI/UX, performance, and feature availability across all devices.",
    },
    {
      title: "Do you provide post-launch support for hybrid apps?",
      description:
        "Yes, we offer continuous maintenance, updates, and technical support to keep your hybrid app optimized, secure, and compatible with the latest OS versions.",
    },
  ];

  const techCategories = [
    { title:"Mobile Frameworks", techs:[
      {name:"Flutter",icon:"https://cdn.simpleicons.org/flutter"},
      {name:"React Native",icon:"https://cdn.simpleicons.org/react"},
      {name:"Android",icon:"https://cdn.simpleicons.org/android"},
      {name:"iOS / Swift",icon:"https://cdn.simpleicons.org/swift"},
      {name:"Kotlin",icon:"https://cdn.simpleicons.org/kotlin"},
    ]},
    { title:"Backend & APIs", techs:[
      {name:"Node.js",icon:"https://cdn.simpleicons.org/nodedotjs"},
      {name:"Firebase",icon:"https://cdn.simpleicons.org/firebase"},
      {name:"REST APIs",icon:"https://cdn.simpleicons.org/fastapi"},
      {name:"GraphQL",icon:"https://cdn.simpleicons.org/graphql"},
    ]},
    { title:"Database & Storage", techs:[
      {name:"SQLite",icon:"https://cdn.simpleicons.org/sqlite"},
      {name:"Firebase",icon:"https://cdn.simpleicons.org/firebase"},
      {name:"MongoDB",icon:"https://cdn.simpleicons.org/mongodb"},
      {name:"MySQL",icon:"https://cdn.simpleicons.org/mysql"},
    ]},
    { title:"Testing & DevOps", techs:[
      {name:"Appium",icon:"https://cdn.simpleicons.org/appium"},
      {name:"Jest",icon:"https://cdn.simpleicons.org/jest"},
      {name:"GitHub Actions",icon:"https://cdn.simpleicons.org/githubactions"},
      {name:"Docker",icon:"https://cdn.simpleicons.org/docker"},
    ]},
  ];

  const FALLBACK_CONTENT = {
    bannerImg: app,
    bannerTitle: "HYBRID APP DEVELOPMENT SERVICES",
    bannerDesc: "Need an app for your business that can run seamlessly across Android and iPhone yet limited by budget constraints? A Hybrid App is the answer. It is a mixture of Native and Web Apps, giving you a cross-platform experience along with scalable features in a highly customized Mobile Application. Few most popular technologies for developing hybrid apps include Ionic, a PhoneGap / Cordova based HTML5 framework and Flutter, Google's UI toolkit for building beautiful, natively compiled apps. Future IT Touch Pvt. Ltd. is an certified mobile app development agency with substantial experience in cross-platform app development. Our team of expert developers specialize in providing Hybrid App Development Services as per your business requirements.",
    overviewImage: ec,
    overviewImageAlt: "Hybrid App Development",
    overviewBadge: "Trusted Hybrid Application Development",
    overviewHeading: "Building Powerful",
    overviewHighlight: "Cross-Platform Mobile Apps",
    overviewParagraphs: [
      "At Future IT Touch Pvt. Ltd. we specialize in creating hybrid mobile applications that deliver native-like performance, consistent UI, and seamless user experiences across Android, iOS, and the web — all from a single codebase.",
      "Our hybrid app development services help businesses save time and cost while reaching a wider audience. Using the latest frameworks like React Native, Flutter, and Ionic, we build fast, reliable, and scalable apps that work smoothly on multiple platforms.",
      { boldPrefix: "Our Expertise Includes:", text: "Cross-platform UI/UX design, API integration, native performance optimization, secure data handling, real-time syncing, and app store deployment." },
      { boldPrefix: "Why Choose Us:", text: "Faster time-to-market, cost-effective solutions, reusable code architecture, consistent user experience, and full post-launch support." },
      `With over ${yearsExperience} years of experience, we've helped startups and enterprises bring their ideas to life using robust hybrid technologies. Partner with our hybrid app development experts to build high-quality, cross-platform applications that perform flawlessly across all devices.`,
    ],
    overviewCtaText: "Start Your Hybrid App Project",
    features,
    bizCards: businessData,
    sliderCards: cards,
    platforms,
    techCategories,
    faqData,
  };

  const content = cms
    ? { ...cms, bannerImg: cms.bannerImg || app, overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage }
    : FALLBACK_CONTENT;

  return (
    <CommonServicePage
      {...content}
      featuresBadge="Our iPhone App Development Process"
      featuresTitle="Trusted iOS app developers in India,"
      featuresTitleHighlight="delivering seamless and innovative apps"
      featuresStickyImg={app}
      bizBadge="Leading Hybrid App Development Company in India"
      bizHeading="Build Powerful Apps That Work on"
      bizHighlight="Every Platform"
      sliderTitle="Delivering Powerful Hybrid App Experiences with"
      platformsTitle="Hybrid App Development Technologies We Use"
      faqTitle="About Hybrid Application Development"
    />
  );
};

export default Hybrid;
