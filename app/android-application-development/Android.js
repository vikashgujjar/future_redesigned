"use client";
import app from "../Assets/app.webp";
import ec from "../Assets/and.gif";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaProjectDiagram, FaMapMarkerAlt, FaBell, FaShareAlt, FaCreditCard, FaBluetooth,
  FaLightbulb, FaMobileAlt, FaSyncAlt, FaPalette, FaCogs, FaGooglePlay,
  FaCheckCircle, FaLifeRing,
} from "react-icons/fa";

const Android = () => {
  const features = [
    {
      title: "Android Architecture Pattern",
      description:
        "We follow the MVVM (Model-View-ViewModel) architecture to ensure clean, maintainable, and scalable code. The Model manages data, the View handles user interactions, and the ViewModel connects them seamlessly — creating a balanced ecosystem for better performance and readability.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "GPS Integration",
      description:
        "We can integrate GPS functionality into your Android app based on your project requirements. This feature improves navigation and user experience, giving your application a competitive edge through location-based services and mapping accuracy.",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Push Notifications",
      description:
        "Push notifications are powerful tools to engage users and boost retention. From promoting new offers and sending reminders to alerting users about updates, we integrate smart notification systems that help you drive meaningful user actions.",
      icon: <FaBell />,
    },
    {
      title: "Social Media Integration",
      description:
        "Our Android apps allow seamless integration with popular social platforms. This lets users share content, connect their accounts, and stay updated with your brand — enhancing engagement and visibility through effortless social sharing.",
      icon: <FaShareAlt />,
    },
    {
      title: "Payment Gateways",
      description:
        "We integrate secure and reliable payment gateways to simplify in-app purchases and transactions. Users can make payments effortlessly using credit cards, UPI, wallets, or other methods — ensuring convenience and boosting your business's cashless operations.",
      icon: <FaCreditCard />,
    },
    {
      title: "Communicating over BLE & NFC",
      description:
        "Our Android applications support communication using BLE (Bluetooth Low Energy) and NFC (Near-Field Communication). These technologies enable device-to-device interaction, real-time data exchange, and innovative features like indoor navigation and contactless operations.",
      icon: <FaBluetooth />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creativity at its Best",
      desc: "Our Android developers excel at creating stunning and engaging apps. In today's competitive market, only a creative, intuitive, and user-friendly app can truly stand out and capture user attention.",
    },
    {
      icons: <FaMobileAlt className="text-white w-8 h-8" />,
      title: "Customized User Interface",
      desc: "We don't rely on generic templates — every Android app we build is tailored to your business niche and audience. Our customized UI ensures your app perfectly reflects your brand identity.",
    },
    {
      icons: <FaSyncAlt className="text-white w-8 h-8" />,
      title: "Updated with the Latest Technologies",
      desc: "Our team stays ahead of industry trends, leveraging the latest Android frameworks and tools to deliver high-performing, future-ready applications that align with evolving user expectations.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Android Apps Delivered",
      desc: "We've successfully developed over 250 custom Android applications that empower businesses to reach and engage users effectively. Each app is optimized for performance, security, and a seamless mobile experience.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Mobile Development Expertise",
      desc: "With more than 15 years in Android app development, Future IT Touch Pvt. Ltd. delivers cutting-edge mobile solutions. Our deep industry experience ensures every app combines innovation, scalability, and exceptional user experience.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 businesses worldwide, we build Android applications tailored to diverse industries — from startups to large enterprises. Our apps help brands expand their reach and achieve measurable success.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-first approach has earned us a 98% satisfaction rate. We focus on intuitive design, smooth performance, and delivering Android apps that exceed expectations while driving long-term business growth.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated App Support",
      desc: "We offer 24/7 technical support to ensure your Android applications run without interruption. From maintenance to version updates, our dedicated team keeps your app secure, stable, and future-ready.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaMobileAlt className="text-white w-6 h-6" />,
      title: "Custom App Development",
      desc: "Looking to craft spectacular and user-friendly Android apps? We offer diverse tailor-made solutions that run seamlessly across all Android devices. Our expert team has successfully created numerous customized apps for cross-industry verticals within quick turnaround times, addressing the specific needs of small and large enterprises.",
    },
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Stunning UI/UX",
      desc: "With extensive experience in UI/UX design, we blend futuristic designs and top-notch functionality to deliver reliable applications that provide an exceptional user experience. Hire our dedicated Android app developers to bring your innovative idea to life and elevate your business.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "Feature Extension",
      desc: "We support your business growth by building scalable mobility solutions. Launch MVPs to gain a competitive edge, then expand features as needed. We also integrate third-party APIs to extend your app's functionality seamlessly.",
    },
    {
      icon: <FaGooglePlay className="text-white w-6 h-6" />,
      title: "Deployment",
      desc: "Our team expertly handles Google Play Store deployment, managing app submission, description, asset listing, and optimization. We ensure your Android application is fully ready to gain visibility and perform efficiently in the app store.",
    },
    {
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
      title: "App Testing",
      desc: "We perform rigorous testing to identify bugs and deliver a market-ready, glitch-free application. From functionality and usability to accessibility and performance, we ensure your app works flawlessly across multiple Android devices.",
    },
    {
      icon: <FaLifeRing className="text-white w-6 h-6" />,
      title: "Support & Maintenance",
      desc: "Regular maintenance keeps your Android app agile and user-friendly. We provide extensive support including security review, upgrades, UI improvements, bug fixes, and performance optimization, letting you focus on your core business while we handle your app.",
    },
  ];

  const faqData = [
    {
      title: "Which eCommerce platforms do you specialize in?",
      description:
        "We specialize in OpenCart, Magento, WordPress/WooCommerce, PrestaShop, Shopify, and custom eCommerce solutions tailored to your business requirements.",
    },
    {
      title: "Can you customize my eCommerce store?",
      description:
        "Absolutely! Our developers provide deep customization for your online store, from front-end design to back-end functionalities, ensuring it matches your brand and business needs.",
    },
    {
      title: "Do you ensure website security?",
      description:
        "Yes, security is a top priority. We follow best practices and use PA-DSS compliant platforms to ensure your eCommerce website is safe, secure, and reliable.",
    },
    {
      title: "Can you handle large product catalogs?",
      description:
        "Definitely. Platforms like Magento and custom solutions can store thousands of products and manage heavy traffic seamlessly, without compromising performance.",
    },
    {
      title: "Do you offer mobile-friendly websites?",
      description:
        "Yes, all our eCommerce websites are responsive and mobile-first, ensuring smooth shopping experiences on smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      description:
        "We provide dedicated support, updates, and maintenance to ensure your online store remains functional, secure, and optimized for growth even after launch.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={app}
      bannerTitle="ANDROID APP DEVELOPMENT SERVICES"
      bannerDesc="Powering 2 Billion mobile devices across the globe, Android inevitably stands out as one of the most sought-after platforms for mobile app development. Future IT Touch Pvt. Ltd. is an certified leading Android app development company in India empowering the businesses of a global clientele with innovative, scalable, and interactive mobility solutions for years. Reach us for industry-standard android app development services at a competitive rate."
      overviewImage={app}
      overviewImageAlt="Android App Development"
      overviewBadge="Reliable Android Application Development"
      overviewHeading="Crafting Powerful, Scalable, and"
      overviewHighlight="User-Friendly Android Apps"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we specialize in building high-performance Android applications tailored to your business needs — designed for speed, security, and a seamless user experience across all devices.",
        "Our team combines creativity with cutting-edge technology to develop Android apps that empower brands, improve customer engagement, and boost business efficiency. From concept to deployment, we ensure every app delivers value and scalability.",
        { boldPrefix: "For Businesses:", text: "Custom Android solutions for eCommerce, enterprise management, and service-based industries with robust integrations, analytics, and smooth performance." },
        { boldPrefix: "For Users:", text: "Intuitive UI/UX design, fast loading times, offline functionality, and secure data handling to ensure a delightful experience on every Android device." },
        "With over 15 years of expertise in mobile development, we've delivered innovative Android apps for startups and global enterprises alike. Choose our custom Android app development services to turn your ideas into engaging digital experiences that drive results.",
      ]}
      overviewCtaText="Start Your Android App Project"
      featuresBadge="Trusted Android Application Development Service"
      featuresTitle="Building Innovative, Scalable & High-Performance"
      featuresTitleHighlight="Android Apps"
      featuresStickyImg={ec}
      features={features}
      bizBadge="Benefits of Our Android App Development Services"
      bizHeading="Leverage the Power of Android to"
      bizHighlight="Reach a Global Audience"
      bizCards={businessData}
      sliderTitle="Delivering Innovative Android Application Solutions"
      sliderCards={cards}
      platformsTitle="Cutting-Edge Android Application Development – End-to-End Robust Mobile Solutions for Your Business"
      platforms={platforms}
      faqTitle="About eCommerce Website Developmen"
      faqData={faqData}
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
};

export default Android;
