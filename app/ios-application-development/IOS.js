"use client";
import io from "../Assets/io.webp";
import ec from "../Assets/iii.gif";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers, FaCogs, FaApple, FaCloud, FaLock, FaChartLine, FaMobileAlt, FaPalette, FaTools, FaBriefcase, FaBullhorn } from "react-icons/fa";
import { SiSwift } from "react-icons/si";
import CommonServicePage from "../components/CommonServicePage";

const IOS = () => (
  <CommonServicePage
    // ── Banner ──────────────────────────────────────────────
    bannerImg={ec}
    bannerTitle="IOS APP DEVELOPMENT SERVICES"
    bannerDesc="Future IT Touch Pvt. Ltd. provides cutting-edge mobile app development services to turn your dreams of a business app into reality. We have a proficient team for custom iOS app development, well versed in the latest frameworks, Objective C and Swift. We give our best efforts into creating highly interactive, innovative and scalable apps that meet your business objectives. By far, we have developed about 150+ mobile apps for a worldwide client base — from start-ups to SMBs and large enterprises."

    // ── Overview ─────────────────────────────────────────────
    overviewImage={io}
    overviewImageAlt="iOS App Development"
    overviewBadge="Trusted iOS Application Development"
    overviewHeading="Crafting High-Performance"
    overviewHighlight="iOS Applications"
    overviewCtaText="Start Your iOS App Project"
    overviewParagraphs={[
      "At Future IT Touch Pvt. Ltd. we specialize in developing iOS applications that combine elegant design, seamless performance, and intuitive functionality — helping businesses connect better with their users across iPhone, iPad, and Apple Watch.",
      "Our iOS app development process focuses on building secure, scalable, and feature-rich mobile experiences that meet Apple's highest standards. Whether you need a customer-facing app, enterprise solution, or startup MVP, we deliver results that stand out on the App Store.",
      { boldPrefix: "Our Expertise Includes:", text: "UI/UX design tailored for iOS, Swift and SwiftUI development, API integration, performance optimization, push notifications, and advanced app analytics." },
      { boldPrefix: "Why Choose Us:", text: "End-to-end app development, strict security protocols, seamless backend integration, App Store deployment support, and post-launch maintenance." },
    ]}

    // ── Features ─────────────────────────────────────────────
    featuresBadge="Our iPhone App Development Process"
    featuresTitle="We're a trusted iOS app development company in"
    featuresTitleHighlight="India"
    featuresStickyImg={ec}
    features={[
      { icon: <FaApple />,    title: "Expertise in iOS Development",      description: "iPhone app development is our core strength. We create high-performing, scalable, and feature-rich iOS applications that deliver seamless user experiences across iPhones and iPads." },
      { icon: <FaPalette />,  title: "Innovative App Designs",             description: "Our UI/UX designers craft visually appealing and intuitive app interfaces that follow Apple's Human Interface Guidelines, ensuring every design enhances engagement." },
      { icon: <FaClock />,    title: "On-Time Project Delivery",           description: "We follow agile methodologies to ensure every iPhone app project is delivered on schedule without compromising on quality or performance." },
      { icon: <FaUsers />,    title: "Dedicated iOS Development Team",     description: "Our experienced iOS developers, designers, and QA engineers collaborate to deliver custom mobile apps tailored to your business goals from concept to launch." },
      { icon: <FaBriefcase />,title: "Proven Industry Experience",         description: "With 15+ years in app development, we've built iPhone apps for startups, enterprises, and global brands across eCommerce, healthcare, travel, and fintech." },
      { icon: <FaBullhorn />, title: "App Marketing & Optimization",       description: "Beyond development, we help you grow your app with App Store Optimization, mobile marketing, and user engagement strategies that maximize downloads and ROI." },
      { icon: <FaTools />,    title: "Continuous Support & Maintenance",   description: "Our responsibility doesn't end with app launch. We provide ongoing maintenance, updates, and support to ensure your iOS app stays secure and high-performing." },
    ]}

    // ── Business cards ───────────────────────────────────────
    bizBadge="Leading iOS App Development Company in India"
    bizHeading="Partner with Us for"
    bizHighlight="Growth & Innovation"
    bizCards={[
      { icons: <FaMobileAlt className="text-white w-8 h-8" />, title: "Specialized in iOS Development",  desc: "We focus on building robust, high-performing iOS applications tailored for iPhone, iPad, and Apple Watch." },
      { icons: <FaPaintBrush className="text-white w-8 h-8" />,title: "Innovative & Intuitive Design",   desc: "Our design experts create visually stunning app interfaces aligned with Apple's Human Interface Guidelines." },
      { icons: <FaClock className="text-white w-8 h-8" />,     title: "Timely Project Delivery",         desc: "We prioritize meeting deadlines while maintaining top-tier quality, performance, and reliability in every project." },
    ]}

    // ── Slider ───────────────────────────────────────────────
    sliderTitle="Delivering Innovative iOS App Experiences with"
    sliderCards={[
      { count: "250+",  title: "iOS Apps Delivered",    desc: "We've developed and launched over 250 iOS applications across diverse industries with superior performance and UX.",          image: "/Assets/seerviceSlider/slide1.webp" },
      { count: "15+",   title: "Years of Experience",   desc: "With 15+ years of expertise Future IT Touch has mastered building scalable iOS apps using Swift, SwiftUI, and modern frameworks.", image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "500+",  title: "Global Clients Served", desc: "We've successfully delivered iOS apps for 500+ global clients from startups to enterprises.",                                 image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "98%",   title: "Client Satisfaction",   desc: "Our client-first approach and commitment to quality have earned us a 98% satisfaction rate.",                                 image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7",  title: "Technical Support",     desc: "Our dedicated support team ensures your iOS application runs flawlessly post-launch.",                                        image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    // ── Platforms ────────────────────────────────────────────
    platformsTitle="iOS App Development Technologies We Use"
    platforms={[
      { icon: <SiSwift className="text-white w-6 h-6" />, title: "Swift & SwiftUI Development", desc: "We specialize in modern iOS apps using Swift and SwiftUI, ensuring high performance and a smooth user experience." },
      { icon: <FaApple className="text-white w-6 h-6" />, title: "Native iOS App Development",  desc: "We build robust native apps for iPhone, iPad, and Apple Watch using Xcode and Apple's latest frameworks." },
      { icon: <FaCloud className="text-white w-6 h-6" />, title: "Cloud Integration",            desc: "Our team integrates apps with iCloud, Firebase, and AWS for secure data storage and real-time sync." },
      { icon: <FaLock  className="text-white w-6 h-6" />, title: "Security & Compliance",        desc: "We implement strong encryption, secure authentication, and GDPR compliance for every iOS application." },
      { icon: <FaCogs  className="text-white w-6 h-6" />, title: "API & Backend Development",    desc: "We create RESTful and GraphQL APIs and integrate them seamlessly with your iOS apps." },
      { icon: <FaTools className="text-white w-6 h-6" />, title: "App Testing & Maintenance",    desc: "We conduct rigorous testing via TestFlight and automated tools and provide ongoing maintenance." },
    ]}

    // ── FAQ ──────────────────────────────────────────────────
    faqTitle="About iOS Application Development"
    faqData={[
      { title: "What technologies do you use for iOS app development?",      description: "We primarily use Swift, SwiftUI, and Objective-C, along with Xcode, UIKit, CoreData, and various Apple SDKs." },
      { title: "Can you help with publishing my app on the App Store?",      description: "Yes, we handle the entire App Store submission process, including compliance checks, app signing, and deployment support." },
      { title: "Do you provide custom iOS app development?",                 description: "Absolutely! We develop custom iPhone and iPad applications tailored to your unique business needs." },
      { title: "How do you ensure app security?",                            description: "We follow Apple's best security practices, implementing data encryption, secure authentication, and regular audits." },
      { title: "Will my iOS app work on all Apple devices?",                 description: "Yes, we build responsive iOS apps compatible across iPhone, iPad, and Apple Watch with consistent design." },
      { title: "Do you provide post-launch support?",                        description: "Yes, we offer continuous maintenance, updates, and support to keep your iOS app up-to-date with the latest iOS versions." },
    ]}
    techCategories={[
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
    ]}
  />
);

export default IOS;
