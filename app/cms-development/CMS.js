"use client";
import gm from "../Assets/gm.webp";
import image2 from "../Assets/gif.gif";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaLaptopCode, FaSync, FaExchangeAlt,
  FaWordpress, FaShoppingBag, FaMagento, FaShopify, FaDrupal, FaCode,
  FaMoneyBillWave, FaEdit, FaFileAlt, FaGlobe, FaShareAlt, FaSearch,
} from "react-icons/fa";

const Ecommerce = () => {
  const features = [
    {
      title: "Affordable Website Management",
      description:
        "CMS development reduces ongoing maintenance costs by giving business owners the flexibility to manage and update their websites without constant developer support. This ensures cost-effectiveness and control.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Easy-to-Use Editing Tools",
      description:
        "With an intuitive WYSIWYG editor, you can edit, format, and publish content effortlessly. No coding knowledge is required, making it simple for anyone to keep the site fresh and updated.",
      icon: <FaEdit />,
    },
    {
      title: "Better Content Organization",
      description:
        "CMS platforms provide structured content management, allowing you to upload, organize, and update text, media, and documents seamlessly. This ensures a clean, consistent, and user-friendly site.",
      icon: <FaFileAlt />,
    },
    {
      title: "Multilingual Capabilities",
      description:
        "Expand your reach by building and maintaining a multilingual website with ease. A CMS makes it simple to manage translations and cater to diverse global audiences.",
      icon: <FaGlobe />,
    },
    {
      title: "Social Media Integration",
      description:
        "Connect your website to leading social media platforms, embed feeds, and share updates instantly. This boosts brand visibility and strengthens user engagement across multiple channels.",
      icon: <FaShareAlt />,
    },
    {
      title: "SEO-Friendly Structure",
      description:
        "Our CMS development ensures an SEO-optimized website with clean coding practices, metadata control, and keyword-ready architecture to improve your search engine rankings.",
      icon: <FaSearch />,
    },
  ];

  const businessData = [
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "CMS Web Design & Development",
      desc: "We build mobile-responsive CMS websites that are feature-rich, user-friendly, and fully aligned with the latest design trends and technologies.",
    },
    {
      icons: <FaSync className="text-white w-8 h-8" />,
      title: "CMS Upgrade & Integration",
      desc: "Our team helps upgrade your existing CMS version and integrates plugins or components to extend functionality and keep your website modern.",
    },
    {
      icons: <FaExchangeAlt className="text-white w-8 h-8" />,
      title: "Existing CMS Migration",
      desc: "We ensure smooth migration of your website from one CMS platform to another without losing data, SEO ranking, or performance quality.",
    },
  ];

  const cards = [
    {
      count: "100+",
      title: "CMS Websites Delivered",
      desc: "We have successfully delivered over 100 CMS-based websites, ensuring responsive design, smooth functionality, and secure, scalable online platforms for clients worldwide.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "10+",
      title: "Years of Expertise",
      desc: "With over 10 years of experience in CMS and eCommerce development, our team applies modern technologies and best practices to build robust, user-friendly websites tailored to your business needs.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Clients Supported Globally",
      desc: "Trusted by over 500 businesses globally, we provide expert CMS development and maintenance. Our solutions span multiple industries, ensuring secure, fast, and efficient websites for all.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-centric approach in CMS and eCommerce development has earned a 98% satisfaction rate. We deliver intuitive, feature-rich websites with timely support and maintenance.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "We provide round-the-clock support for all CMS websites. Our team ensures smooth operation, timely updates, and quick resolution of any technical issues to keep your site reliable.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress Development",
      desc: "We build lightweight and easy-to-manage WordPress websites. Using WooCommerce, we create scalable eCommerce stores with secure payments, shipping options, and modern features.",
    },
    {
      icon: <FaShoppingBag className="text-white w-6 h-6" />,
      title: "PrestaShop Development",
      desc: "PrestaShop is free, lightweight, and supports multiple languages. Our experts craft unique eCommerce websites that allow you to sell globally with ease and flexibility.",
    },
    {
      icon: <FaMagento className="text-white w-6 h-6" />,
      title: "Magento Development",
      desc: "We deliver powerful Magento-based eCommerce platforms with custom features, high scalability, and advanced integrations to ensure seamless online shopping experiences.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Custom Development",
      desc: "Our team creates tailor-made eCommerce solutions using Laravel, CodeIgniter, NodeJS, and other frameworks, ensuring robust, feature-rich, and scalable applications.",
    },
    {
      icon: <FaShopify className="text-white w-6 h-6" />,
      title: "Shopify Development",
      desc: "Shopify enables quick store setup with 100+ themes and plugins. We build storefronts with SEO, fraud prevention, drop-shipping support, and social media integration.",
    },
    {
      icon: <FaDrupal className="text-white w-6 h-6" />,
      title: "Drupal Development",
      desc: "Drupal is highly flexible and secure. We develop enterprise-grade CMS platforms with multi-language support, advanced customization, and strong community-driven modules.",
    },
  ];

  const faqData = [
    {
      title: "What types of CMS websites do you develop?",
      description:
        "We specialize in WordPress, PrestaShop, Magento, Shopify, Drupal, and custom CMS websites, tailored to meet your business goals and provide a seamless user experience.",
    },
    {
      title: "Can you customize CMS websites to my business needs?",
      description:
        "Absolutely! We offer full customization of themes, plugins, and features, ensuring your CMS website aligns perfectly with your brand and operational workflows.",
    },
    {
      title: "Are CMS websites secure and scalable?",
      description:
        "Yes, security and scalability are top priorities. We implement secure coding practices, configure SSL, and build CMS websites capable of handling high traffic and growing content needs.",
    },
    {
      title: "Can you integrate third-party tools and plugins?",
      description:
        "Definitely. We integrate payment gateways, marketing tools, analytics, social media plugins, and other third-party solutions to enhance your CMS website's functionality.",
    },
    {
      title: "Are the CMS websites mobile-friendly and responsive?",
      description:
        "Yes, all our CMS websites are fully responsive, mobile-optimized, and cross-browser compatible, ensuring a smooth user experience on desktops, tablets, and smartphones.",
    },
    {
      title: "Do you provide maintenance and support for CMS websites?",
      description:
        "We provide ongoing maintenance, updates, and technical support to keep your CMS website secure, fast, and fully functional even after launch.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={gm}
      bannerTitle="CMS WEB DEVELOPMENT SERVICES"
      bannerDesc="A CMS (Content Management System) allows you to control and manage the content of your website with little or no knowledge of coding. It provides an easy interface to add / delete new pages and edit the content within. CMS offers a site-search tool for the visitors to find any specific content they are looking for. At Future IT Touch Pvt. Ltd., a leading CMS web development company in India, we deal with all types of open source content management systems and provide customized solutions to meet your needs."
      overviewImage={gm}
      overviewImageAlt="CMS web development"
      overviewBadge="Custom CMS Development"
      overviewHeading="Building Flexible and"
      overviewHighlight="Easy-to-Manage CMS Websites"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we deliver custom CMS solutions that make website management simple, efficient, and scalable. Our CMS development services ensure your content is well-structured, easy to update, and optimized for performance, giving you complete control over your digital presence.",
        "Our CMS expertise covers everything from design and development to seamless migration and ongoing support. We build responsive CMS websites with modern features and smooth user experiences, ensuring you always stay ahead in the digital landscape.",
        "Whether it's upgrading to the latest CMS version, integrating plugins and components, or migrating your website to a new platform, our team ensures a hassle-free process. With reliable support and maintenance services, we are always available to resolve issues, implement improvements, and keep your CMS website secure and efficient.",
      ]}
      overviewCtaText="Start Your CMS Journey"
      featuresBadge="Trusted CMS Development Company"
      featuresTitle="Building Flexible &"
      featuresTitleHighlight="Easy-to-Manage CMS Websites"
      featuresStickyImg={image2}
      features={features}
      bizBadge="Custom CMS Website Development Services"
      bizHeading="We would be happy to discuss"
      bizHighlight="the project with you in person"
      bizCards={businessData}
      sliderTitle="Building Powerful & Scalable CMS Solutions for Your Business"
      sliderCards={cards}
      platformsTitle="Our Comprehensive CMS Development Services"
      platforms={platforms}
      faqTitle="About CMS & eCommerce Website Development"
      faqData={faqData}
    />
  );
};

export default Ecommerce;
