"use client";
const cwd = "/Assets/stock/photo-1522252234503-e356532cafd5.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaMagento, FaWordpress, FaShopify, FaOpencart, FaCogs, FaServer,
  FaProjectDiagram, FaRobot, FaBars,
  FaPalette, FaChartBar, FaSearch, FaLaptopCode, FaUserCheck,
} from "react-icons/fa";
import useYearsExperience from "../lib/useYearsExperience";

const Corporate = () => {
  const yearsExperience = useYearsExperience();
  const features = [
    {
      title: "Appealing Layout",
      description:
        "Our website layouts are sleek, minimalistic, and visually engaging. They leave a lasting impression on users and help them easily absorb content without distraction, reinforcing your brand's professional image.",
      icon: <FaPalette />,
    },
    {
      title: "Dynamic Functionalities",
      description:
        "We utilize modern technologies like PHP, JavaScript, CSS, and third-party APIs to craft interactive and dynamic web applications. From image galleries and CTA buttons to micro-interactions, every feature enhances user engagement.",
      icon: <FaCogs />,
    },
    {
      title: "Scalability",
      description:
        "Our web solutions grow with your business. Built with scalability in mind, your corporate website can easily expand its features and functionalities as your organization evolves.",
      icon: <FaChartBar />,
    },
    {
      title: "SEO-Friendly Content",
      description:
        "We integrate SEO best practices right into the development process. From clean code to optimized content, our corporate web apps are designed to boost search visibility and strengthen your brand presence online.",
      icon: <FaSearch />,
    },
    {
      title: "Responsive Solution",
      description:
        "Every solution we build is optimized for all devices and screen sizes. Whether it's a desktop, tablet, or mobile, your corporate website delivers a seamless and consistent user experience everywhere.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Excellent UI / UX",
      description:
        "We combine outstanding UI design with strong technical performance to ensure an exceptional user experience. Each interface is crafted to engage visitors and encourage meaningful interactions.",
      icon: <FaUserCheck />,
    },
  ];

  const businessData = [
    {
      icons: <FaProjectDiagram className="text-white w-8 h-8" />,
      title: "Dynamic Web Solutions",
      desc: "Out of the wide range of services we provide, corporate web app development is our expertise. We build fast, secure, and scalable solutions for enterprise success.",
    },
    {
      icons: <FaRobot className="text-white w-8 h-8" />,
      title: "Smart Automation",
      desc: "Our expert developers integrate automation and chatbot features to make your web applications more interactive, efficient, and user-friendly across all devices.",
    },
    {
      icons: <FaBars className="text-white w-8 h-8" />,
      title: "Seamless Navigation",
      desc: "As a leading corporate web development company, we ensure smooth navigation and responsive designs that deliver flawless user experiences on every platform.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Corporate Web Apps Delivered",
      desc: "We've developed over 250+ corporate web applications that empower businesses to operate efficiently and engage users effectively. Each project is built for performance, reliability, and seamless digital interaction.",
      image: "/Assets/stock/photo-1517245386807-bb43f82c33c4.webp",
    },
    {
      count: yearsExperience,
      title: "Years of Industry Expertise",
      desc: `With ${yearsExperience} years in corporate web development, Future IT Touch Pvt. Ltd. delivers robust and innovative web solutions. Our experience ensures every project blends technology, scalability, and exceptional user experience.`,
      image: "/Assets/stock/photo-1460925895917-afdab827c52f.webp",
    },
    {
      count: "500+",
      title: "Global Businesses Served",
      desc: "Trusted by over 500 corporate clients worldwide, we create tailored web applications designed for growth and efficiency. Our expertise spans industries, delivering results that meet both local and global business goals.",
      image: "/Assets/stock/photo-1498050108023-c5249f4df085.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-first approach has earned us a 98% satisfaction rate. We focus on transparency, timely delivery, and building enterprise-grade web applications that exceed expectations and drive long-term success.",
      image: "/Assets/stock/photo-1467232004584-a241de8bcf5d.webp",
    },
    {
      count: "24/7",
      title: "Reliable Technical Support",
      desc: "We provide 24/7 support to ensure your corporate web applications run seamlessly. Our dedicated support team quickly resolves issues, applies updates, and maintains consistent system performance.",
      image: "/Assets/stock/photo-1547658719-da2b51169166.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaOpencart className="text-white w-6 h-6" />,
      title: "OpenCart Development",
      desc: "OpenCart allows easy customization and lightweight websites using AJAX. With over 14,000 extensions, we create beautiful and functional online stores with enhanced features and PA-DSS compliant security.",
    },
    {
      icon: <FaMagento className="text-white w-6 h-6" />,
      title: "Magento Development",
      desc: "Magento handles thousands of products and heavy traffic with ease. Its modular structure allows deep customization for marketplaces and offers unmatched security due to PA-DSS compliance.",
    },
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress & WooCommerce",
      desc: "WordPress websites with WooCommerce are lightweight, fast, and easy to manage. Scalable and secure, we deliver fully functional eCommerce stores with REST API, configurable shipping, and payment options.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "PrestaShop Development",
      desc: "PrestaShop is free, lightweight, and easy to use. With multilingual support, we create unique eCommerce websites that allow global sales without complex coding requirements.",
    },
    {
      icon: <FaServer className="text-white w-6 h-6" />,
      title: "Custom Development",
      desc: "Need a feature-rich marketplace tailored to your business? We build custom eCommerce solutions using frameworks like Laravel, CakePHP, CodeIgniter, NodeJS, and databases like MySQL for seamless performance.",
    },
    {
      icon: <FaShopify className="text-white w-6 h-6" />,
      title: "Shopify Development",
      desc: "Shopify is a fully hosted platform for quick online store setup. Our Shopify developers build SEO-optimized storefronts with Drop Shipping, Fraud Prevention, Social Media Integration, and more.",
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
      bannerImg={cwd}
      bannerTitle="CORPORATE WEBSITE DESIGN"
      bannerDesc="An innovative and engaging website is crucial to maximize your business efficiency. Future IT Touch Pvt. Ltd. corporate website design company can be your right partner. From simple, informative blogging site to complex web applications and eCommerce website development – we provide a comprehensive web solution. Our team is adept at developing fast-loading, responsive, and user-friendly websites that have consistent accessibility across multiple devices and browsers. Backed with a long experience and industry exposure, we have satisfied a global clientele with a futuristic web solution. Transform your ideas into reality with us."
      overviewImage={cwd}
      overviewImageAlt="Corporate website design"
      overviewBadge="Reliable Corporate Web App Development"
      overviewHeading="Building Powerful and"
      overviewHighlight="Scalable Business Applications"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we craft secure and scalable web applications designed to streamline operations, enhance collaboration, and empower enterprises to achieve their digital goals with efficiency and precision.",
        "Our focus is on building robust web applications that simplify complex business processes and drive productivity across departments. With innovative tools and intuitive design, our corporate web apps deliver measurable results for businesses worldwide.",
        { boldPrefix: "For Employees:", text: "Easy access dashboards, intuitive interfaces, secure logins, workflow automation, real-time data sharing, and cloud integration for seamless performance." },
        { boldPrefix: "For Management:", text: "Centralized control, detailed analytics, role-based access, performance tracking, communication tools, and data-driven decision-making." },
        `With over ${yearsExperience} years of industry experience, we've delivered innovative web solutions for leading corporations. Choose our custom web app development services to transform your organization's digital workflow and boost operational efficiency.`,
      ]}
      overviewCtaText="Start Your Corporate Web App Project"
      featuresBadge="Trusted Business Web App Development Service"
      featuresTitle="Delivering Innovative &"
      featuresTitleHighlight="Scalable Web Solutions for Corporates"
      features={features}
      bizBadge="Leading Corporate Web Application Development Company in India"
      bizHeading="Partner with Us for"
      bizHighlight="Excellence & Innovation"
      bizCards={businessData}
      sliderTitle="Delivering Innovative Corporate Web Solutions with"
      sliderCards={cards}
      platformsTitle="Cutting-Edge Web Application Development for Corporates – End-to-End Robust Web Solutions for Your Business"
      platforms={platforms}
      faqTitle="About eCommerce Website Developmen"
      faqData={faqData}
      techCategories={[
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
      ]}
    />
  );
};

export default Corporate;
