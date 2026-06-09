"use client";
import gm from "../Assets/qa.webp";
import d1 from "../Assets/cr.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaShieldAlt, FaClipboardCheck, FaTools, FaHandshake, FaChartLine, FaMoneyBillWave,
  FaBug, FaCogs, FaUserShield,
  FaFlask, FaGlobe, FaCloud, FaRobot, FaCode, FaMobileAlt,
  FaComments, FaCheckCircle, FaTachometerAlt, FaPuzzlePiece, FaTabletAlt,
} from "react-icons/fa";

const Quality = () => {
  const features = [
    {
      title: "Reliable Brand Experience",
      description:
        "We create a trustworthy digital brand experience by ensuring every website and application functions flawlessly. From link validation to spelling accuracy, our QA experts eliminate issues that can harm your brand's credibility.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Comprehensive Quality Assurance",
      description:
        "Quality assurance isn't just testing—it's ensuring usability, reliability, and performance. We make sure every feature works seamlessly so users can confidently engage with your digital platform.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Efficient QA Tools & Automation",
      description:
        "We bring the best QA tools and automation frameworks to make testing more efficient. From automated regression tests to manual validation, we optimize workflows for consistent results.",
      icon: <FaTools />,
    },
    {
      title: "Agency-Focused Testing Approach",
      description:
        "Our team has a proven track record of working with digital agencies, adapting to their workflows, communication styles, and deadlines while maintaining top-notch QA standards.",
      icon: <FaHandshake />,
    },
    {
      title: "Actionable QA Insights",
      description:
        "We translate testing results into actionable insights that development teams can easily implement, bridging the gap between QA findings and technical execution.",
      icon: <FaChartLine />,
    },
    {
      title: "Transparent Cost Estimation",
      description:
        "We provide clear cost estimates for QA and testing phases in upcoming projects, allowing clients to plan accurately while maintaining quality benchmarks.",
      icon: <FaMoneyBillWave />,
    },
  ];

  const businessData = [
    {
      icons: <FaBug className="text-white w-8 h-8" />,
      title: "Comprehensive Testing Process",
      desc: "We conduct end-to-end manual and automated testing to ensure your web applications perform seamlessly, meet all functional requirements, and remain error-free across devices.",
    },
    {
      icons: <FaCogs className="text-white w-8 h-8" />,
      title: "Automation & Performance Testing",
      desc: "Our QA team leverages the latest tools and frameworks to automate testing cycles, improve speed, and validate system performance under various real-world conditions.",
    },
    {
      icons: <FaUserShield className="text-white w-8 h-8" />,
      title: "Security & Usability Assurance",
      desc: "We ensure your digital product is not only secure but also user-friendly. Our QA experts check for data protection, smooth navigation, and overall usability to guarantee a flawless user experience.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Corporate Web Apps Delivered",
      desc: "We've tested and optimized over 250+ corporate web applications to ensure flawless performance, security, and usability. Every project undergoes rigorous QA checks to guarantee error-free functionality and reliability.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Industry Expertise",
      desc: "With more than 15 years in software testing and quality assurance, Future IT Touch Pvt. Ltd. ensures that every digital product we deliver meets the highest industry standards for performance and security.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Businesses Served",
      desc: "Trusted by over 500 global clients, we provide QA and testing solutions that enhance software quality, prevent issues before launch, and ensure seamless functionality across platforms and devices.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to precision and excellence in testing has earned us a 98% client satisfaction rate. We ensure smooth launches, superior performance, and bug-free experiences for every project.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Reliable Technical Support",
      desc: "Our QA support team provides 24/7 monitoring, issue resolution, and ongoing validation to ensure your systems run flawlessly even after deployment, keeping performance at its peak.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaFlask className="text-white w-6 h-6" />,
      title: "Prototype Testing",
      desc: "We validate early-stage prototypes to identify design and functionality flaws before full-scale development, saving time and cost.",
    },
    {
      icon: <FaGlobe className="text-white w-6 h-6" />,
      title: "Cross-Browser Testing",
      desc: "Ensure your web application performs flawlessly across all major browsers and devices, providing consistent user experiences.",
    },
    {
      icon: <FaCloud className="text-white w-6 h-6" />,
      title: "Cloud-Based Testing",
      desc: "We leverage scalable cloud environments for fast, secure, and collaborative QA execution across multiple test scenarios.",
    },
    {
      icon: <FaRobot className="text-white w-6 h-6" />,
      title: "Test Automation",
      desc: "Accelerate your QA process with automated scripts that ensure repeatable and accurate testing for faster releases.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Web Application Testing",
      desc: "Comprehensive end-to-end testing to identify functional, UI, and performance issues in web-based applications.",
    },
    {
      icon: <FaMobileAlt className="text-white w-6 h-6" />,
      title: "Desktop/Mobile App Testing",
      desc: "Thorough testing of mobile and desktop applications to ensure responsive designs, smooth performance, and minimal crashes.",
    },
    {
      icon: <FaComments className="text-white w-6 h-6" />,
      title: "QA Consulting",
      desc: "Our experts provide strategic QA consultation to improve testing processes, enhance software quality, and reduce risk.",
    },
    {
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
      title: "Functionality & Usability Testing",
      desc: "We assess user workflows, features, and interfaces to ensure your software is functional, intuitive, and user-friendly.",
    },
    {
      icon: <FaTachometerAlt className="text-white w-6 h-6" />,
      title: "Performance Testing",
      desc: "We simulate real-world conditions to ensure your application can handle peak loads and deliver optimal performance.",
    },
    {
      icon: <FaPuzzlePiece className="text-white w-6 h-6" />,
      title: "Integrated Systems Testing",
      desc: "End-to-end system integration testing to verify that all components work seamlessly together in complex architectures.",
    },
    {
      icon: <FaTabletAlt className="text-white w-6 h-6" />,
      title: "Device Compatibility Testing",
      desc: "We test across multiple devices, resolutions, and operating systems to guarantee flawless performance everywhere.",
    },
    {
      icon: <FaShieldAlt className="text-white w-6 h-6" />,
      title: "Security Testing",
      desc: "We identify vulnerabilities and ensure your application is protected against data breaches, malware, and cyber threats.",
    },
  ];

  const faqData = [
    {
      title: "What eCommerce platforms do you develop on?",
      description:
        "We work with major eCommerce platforms including Shopify, Magento, WooCommerce, OpenCart, and PrestaShop. We also build fully custom eCommerce websites for businesses that need tailored features and scalability.",
    },
    {
      title: "Can you create a fully customized online store?",
      description:
        "Yes, our team specializes in building unique and customized eCommerce websites. From design to advanced back-end functionality, we ensure your store reflects your brand identity and delivers an engaging user experience.",
    },
    {
      title: "How do you ensure website security?",
      description:
        "Security is our top priority. We implement SSL encryption, data protection, and follow industry standards like PA-DSS compliance to keep your online store safe from vulnerabilities and cyber threats.",
    },
    {
      title: "Can your websites handle large product inventories?",
      description:
        "Absolutely. Our eCommerce solutions are optimized to manage thousands of products, high traffic, and complex inventory structures while maintaining fast load times and smooth performance.",
    },
    {
      title: "Are your eCommerce websites mobile-friendly?",
      description:
        "Yes, every eCommerce website we create is fully responsive and mobile-first, ensuring an intuitive and seamless shopping experience across smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      description:
        "Yes, we offer 24/7 support and regular maintenance to ensure your website remains secure, updated, and running smoothly. Our team helps with performance optimization, updates, and troubleshooting when needed.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={gm}
      bannerTitle="Quality Assurance"
      bannerDesc="Our services are of assured quality so drop us an email. Clients expect their interactive agency to guard the reputation of their products and company. Quality assurance testing protects a client's brand reputation by verifying that their customers' experiences with their product, website, app, and campaign are consistently positive."
      overviewImage={gm}
      overviewImageAlt="Quality Assurance Services"
      overviewBadge="Reliable Software Quality Assurance Services"
      overviewHeading="Ensuring Excellence Through"
      overviewHighlight="Comprehensive QA and Testing"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we deliver end-to-end Quality Assurance and software testing services to ensure your applications run flawlessly, perform seamlessly, and meet the highest standards of reliability and security.",
        "Our QA experts use advanced testing frameworks and automation tools to identify issues before they impact users. We focus on ensuring every product release is stable, scalable, and aligned with your business objectives through continuous testing and monitoring.",
        { boldPrefix: "For Developers:", text: "Early bug detection, CI/CD testing integration, API validation, and automated regression testing for faster and more efficient development cycles." },
        { boldPrefix: "For Businesses:", text: "Comprehensive functional, performance, security, and usability testing that ensures consistent user experiences and protects your brand's reputation." },
        "With over 15 years of experience in delivering top-notch digital solutions, our Quality Assurance services help organizations reduce risks, optimize performance, and achieve reliable, high-quality software products that users trust.",
      ]}
      overviewCtaText="Start Your QA and Testing Project"
      featuresBadge="Trusted Quality Assurance Services"
      featuresTitle="Creating Flawless Digital Experiences Through"
      featuresTitleHighlight="Rigorous Testing"
      featuresStickyImg={d1}
      features={features}
      bizBadge="Leading Quality Assurance & Testing Company in India"
      bizHeading="Partner with Us for"
      bizHighlight="Flawless Digital Performance"
      bizCards={businessData}
      sliderTitle="Delivering Excellence Through Comprehensive QA with"
      sliderCards={cards}
      platformsTitle="Our Quality Assurance & Testing Services"
      platforms={platforms}
      faqTitle="About QA & Software Testing"
      faqData={faqData}
    />
  );
};

export default Quality;
