"use client";
import bannerImg from "../Assets/and.gif";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaMobileAlt, FaBug, FaVial, FaCheckCircle, FaCogs, FaShieldAlt, FaServer,
} from "react-icons/fa";

const features = [
  {
    title: "Functional Testing",
    description:
      "We rigorously test every feature, button, workflow, and interaction within your mobile app to ensure it behaves exactly as intended. Our functional testing process validates all business logic, form inputs, API responses, and navigation flows — leaving no edge case untested.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Usability Testing",
    description:
      "User experience is everything. Our usability testing evaluates your app's intuitiveness, design consistency, and ease of navigation across a wide range of real users. We identify friction points in the user journey and provide actionable recommendations to improve satisfaction and retention.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Performance Testing",
    description:
      "We simulate high-traffic conditions and stress scenarios to measure your app's speed, responsiveness, and stability under load. From launch time to data loading and crash recovery, our performance tests ensure your app delivers a smooth experience even in demanding conditions.",
    icon: <FaServer />,
  },
  {
    title: "Security Testing",
    description:
      "Our security testing team probes your app for vulnerabilities including data leakage, unauthorized access, insecure data storage, and weak authentication. We conduct penetration testing and vulnerability assessments to safeguard user data and protect your brand reputation.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Compatibility Testing",
    description:
      "We test your app across hundreds of real device-OS-screen combinations to ensure consistent performance and appearance. From Android 8 to iOS 17, across phones and tablets, we ensure your app looks and works perfectly for every user regardless of their device.",
    icon: <FaCogs />,
  },
  {
    title: "Automated Testing",
    description:
      "We build robust automated test suites using Appium, Selenium, and Espresso to enable fast, repeatable regression testing. Automated tests integrated into your CI/CD pipeline catch regressions early, reduce manual effort, and accelerate your release cycles significantly.",
    icon: <FaVial />,
  },
  {
    title: "Bug Tracking & Reporting",
    description:
      "Every defect we find is meticulously documented with steps to reproduce, severity level, screenshots, and device information. We use Jira and Confluence to maintain a transparent bug backlog that keeps your development team informed and empowers rapid resolution.",
    icon: <FaBug />,
  },
];

const bizCards = [
  {
    title: "Certified QA Professionals",
    desc: "Our team comprises certified mobile testing specialists with deep expertise in iOS and Android platforms, ensuring every test is conducted with precision and thoroughness.",
    icons: <FaCheckCircle className="text-white w-8 h-8" />,
  },
  {
    title: "Real Device Testing Lab",
    desc: "We test on a wide range of real physical devices — not just emulators — giving you accurate results that reflect true end-user conditions across all major manufacturers.",
    icons: <FaMobileAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Fast Turnaround & Transparent Reporting",
    desc: "We deliver detailed test reports within agreed timelines. Our transparent process keeps you informed at every stage, from test planning to final sign-off.",
    icons: <FaBug className="text-white w-8 h-8" />,
  },
  {
    title: "CI/CD Integration",
    desc: "Our automated test suites integrate seamlessly into your existing CI/CD pipelines, enabling continuous quality checks with every build and accelerating your time to market.",
    icons: <FaVial className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "47",
    title: "iOS App Quality Audit",
    desc: "Performed end-to-end functional and security testing for a healthcare iOS app, identifying 47 critical bugs before launch.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    count: "95%",
    title: "Android Performance Testing",
    desc: "Stress-tested a fintech Android app under 10,000 concurrent users, resolving memory leaks and reducing crash rate by 95%.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    count: "120+",
    title: "Cross-Platform Compatibility",
    desc: "Validated a retail app across 120+ device-OS combinations, ensuring consistent UI and performance for all user segments.",
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=80",
  },
  {
    count: "2hr",
    title: "Automated Regression Suite",
    desc: "Built a full Appium-based automation suite that reduced regression testing time from 3 days to under 2 hours per sprint.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
  },
];

const platforms = [
  { icon: <FaMobileAlt className="text-white w-6 h-6" />, title: "Appium Mobile Testing", desc: "Cross-platform mobile automation for iOS and Android, enabling reliable functional and regression testing on real devices." },
  { icon: <FaBug className="text-white w-6 h-6" />, title: "Bug Tracking with Jira", desc: "Every defect documented with steps to reproduce, severity rating, device info, and screenshots for rapid developer resolution." },
  { icon: <FaVial className="text-white w-6 h-6" />, title: "Selenium & Cypress", desc: "Robust automated test suites for web and hybrid apps — fast, repeatable regression cycles integrated into your CI/CD pipeline." },
  { icon: <FaCheckCircle className="text-white w-6 h-6" />, title: "Manual QA Testing", desc: "Certified QA specialists conduct exploratory and scripted manual testing on real devices, catching issues automation misses." },
  { icon: <FaShieldAlt className="text-white w-6 h-6" />, title: "Security & Penetration Testing", desc: "OWASP Mobile Top 10 checks, authentication testing, and data storage audits to protect your users and brand reputation." },
  { icon: <FaServer className="text-white w-6 h-6" />, title: "CI/CD Integration", desc: "Automated test suites integrated with GitHub Actions, Jenkins, and Bitrise — continuous quality checks with every code commit." },
];

const faqData = [
  {
    title: "What types of mobile app testing do you offer?",
    description:
      "We offer functional, usability, performance, security, compatibility, regression, and automated testing for both iOS and Android applications — covering the full spectrum of QA requirements.",
  },
  {
    title: "Do you test on real devices or simulators?",
    description:
      "We primarily test on real physical devices to provide the most accurate results. Our device lab includes a wide range of Android and iOS devices across different manufacturers, screen sizes, and OS versions.",
  },
  {
    title: "How long does mobile app testing take?",
    description:
      "Testing timelines depend on app complexity and the scope of testing required. A standard functional test cycle takes 1–2 weeks, while comprehensive testing including automation setup can take 3–4 weeks.",
  },
  {
    title: "Can you integrate automated tests into our CI/CD pipeline?",
    description:
      "Yes. We build automated test suites compatible with GitHub Actions, Jenkins, Bitrise, and other CI/CD platforms, enabling continuous quality checks with every code commit.",
  },
  {
    title: "What bug tracking tools do you use?",
    description:
      "We use Jira as our primary bug tracking tool, with Confluence for test documentation. All bugs are reported with detailed reproduction steps, severity ratings, screenshots, and device information.",
  },
];

const techCategories = [
  {
    title: "Testing Frameworks",
    techs: [
      { name: "Selenium", icon: "https://cdn.simpleicons.org/selenium" },
      { name: "Cypress", icon: "https://cdn.simpleicons.org/cypress" },
      { name: "Jest", icon: "https://cdn.simpleicons.org/jest" },
      { name: "Appium", icon: "https://cdn.simpleicons.org/appium" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    ],
  },
  {
    title: "Project Management",
    techs: [
      { name: "Jira", icon: "https://cdn.simpleicons.org/jira" },
      { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
    ],
  },
  {
    title: "CI/CD",
    techs: [
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    ],
  },
];

const Mobile = () => {
  return (
    <CommonServicePage
      bannerImg={bannerImg}
      bannerTitle="Mobile Application Testing Services"
      bannerDesc="Future IT Touch is an eminent Mobile Application Testing organisation that offers outstanding versatile application testing services. We developed our specialty in mobile testing, particularly in iOS and Android devices. With a group of devoted certified testers, we perform a wide range of web, mobile, and cross-platform portable application testing for functionality, usability, consistency, and compatibility."
      overviewImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
      overviewImageAlt="Mobile Application Testing"
      overviewBadge="Mobile Application Testing Services"
      overviewHeading="Mobile Application"
      overviewHighlight="Testing"
      overviewParagraphs={[
        "Future IT Touch is an eminent Mobile Application Testing organisation that offers outstanding versatile application testing services. We developed our specialty in mobile testing, particularly in iOS and Android.",
        "With a group of devoted certified testers, we perform a wide range of web, mobile, and cross-platform application testing. We test applications for functionality, usability, consistency, and compatibility for longer use and stability.",
        "Our QA approach combines manual and automated testing to deliver comprehensive coverage — catching bugs before they reach your users and protecting your brand reputation.",
      ]}
      overviewCtaText="Start Your Testing Project"
      featuresBadge="Our Testing Services"
      featuresTitle="Comprehensive Testing That"
      featuresTitleHighlight="Ensures Quality"
      featuresStickyImg="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
      features={features}
      bizBadge="Why Choose FTS for Testing"
      bizHeading="Partner with Experts for"
      bizHighlight="Bug-Free Mobile Apps"
      bizCards={bizCards}
      sliderTitle="Delivering Quality Assurance Excellence Across Platforms"
      sliderCards={sliderCards}
      platformsTitle="Testing Tools & Platforms We Use"
      platforms={platforms}
      techBadge="Our QA Tech Stack"
      techHeading="Technologies"
      techHeadingHighlight="We Test With"
      techDescription="We use industry-leading testing frameworks, automation tools, and CI/CD integrations to deliver thorough, efficient, and reliable mobile app quality assurance."
      techCategories={techCategories}
      faqTitle="Frequently Asked Questions — Mobile App Testing"
      faqData={faqData}
    />
  );
};

export default Mobile;
