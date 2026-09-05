"use client";
const ecc = "/Assets/stock/photo-1498050108023-c5249f4df085.webp";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";
import {
  FaShoppingCart, FaPaintBrush, FaClock,
  FaMagento, FaWordpress, FaShopify, FaOpencart, FaCogs, FaServer,
  FaSitemap, FaImages, FaLock, FaFilter, FaShippingFast, FaBoxes, FaChartLine,
} from "react-icons/fa";

const Ecommerce = ({ cms } = {}) => {
  const features = [
    {
      title: "Easy Navigation & Engaging Interface",
      description:
        "We design intuitive navigation structures and engaging user interfaces that allow visitors to browse effortlessly. A seamless navigation system not only improves the shopping experience but also ensures customers spend more time exploring your products, ultimately driving higher conversions.",
      icon: <FaSitemap />,
    },
    {
      title: "Multiple Product Images",
      description:
        "Visual appeal is critical in eCommerce. By offering multiple product images from different angles, customers get a realistic sense of your products. This increases trust and reduces return rates, ensuring buyers feel confident in their purchase decisions.",
      icon: <FaImages />,
    },
    {
      title: "Quick & Secure Checkout",
      description:
        "A smooth and secure checkout process is at the heart of a successful online store. We implement fast, one-page checkouts with trusted payment gateways, SSL encryption, and multiple payment options to ensure that customers complete their purchases without hesitation.",
      icon: <FaLock />,
    },
    {
      title: "Categories & Filters",
      description:
        "Advanced categorization and filtering options help users quickly locate products they're interested in. By creating smart product taxonomies and layered navigation, we make shopping intuitive and efficient for your customers.",
      icon: <FaFilter />,
    },
    {
      title: "Seamless Order Tracking",
      description:
        "Customers can track their orders in real time, from purchase confirmation to delivery. A transparent and accessible order tracking system builds trust, reduces customer service queries, and improves overall satisfaction.",
      icon: <FaShippingFast />,
    },
    {
      title: "Easy Order & Inventory Management",
      description:
        "Our admin-friendly dashboard allows you to manage orders, update product attributes, configure tax and shipping rules, apply discounts, and monitor stock levels with ease. With seamless automation, you save time and focus more on growing your business.",
      icon: <FaBoxes />,
    },
    {
      title: "Analytics & Insights",
      description:
        "We integrate powerful analytics tools that provide actionable insights into your eCommerce performance. From conversion tracking to sales trends and customer behavior analysis, you'll have the data you need to make informed business decisions and maximize ROI.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaShoppingCart className="text-white w-8 h-8" />,
      title: "Specialized in eCommerce",
      desc: "Out of the wide range of services we provide, eCommerce web development is our specialization. We build online stores that are fast, secure, and optimized for conversions.",
    },
    {
      icons: <FaPaintBrush className="text-white w-8 h-8" />,
      title: "Innovative Designs",
      desc: "Our innovative eCommerce developers ensure your website stays up-to-date with the latest design trends, creating an engaging and seamless user experience for your customers.",
    },
    {
      icons: <FaClock className="text-white w-8 h-8" />,
      title: "On-Time Delivery",
      desc: "As a top eCommerce website design company, we ensure timely delivery of your online store, meeting deadlines without compromising on quality or performance.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Websites Delivered",
      desc: "We have crafted over 250+ eCommerce websites that captivate customers and drive sales. Each store is designed to be visually appealing, user-friendly, and fully optimized for performance, ensuring an outstanding online shopping experience.",
      image: "/Assets/stock/photo-1607082348824-0a96f2a4b9da.webp",
    },
    {
      count: YEARS_EXPERIENCE_DISPLAY,
      title: "Years of Experience",
      desc: `With more than ${YEARS_EXPERIENCE_DISPLAY} years in eCommerce website development, Future IT Touch Pvt. Ltd. brings deep industry expertise. Our team ensures each project leverages best practices, modern technologies, and innovative design strategies.`,
      image: "/Assets/stock/photo-1522202176988-66273c2fd55f.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 clients globally, we deliver tailor-made eCommerce solutions that meet diverse business needs. Our experience spans multiple industries and markets, ensuring websites that resonate with both local and international customers.",
      image: "/Assets/stock/photo-1573164713988-8665fc963095.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-centric approach has earned us a 98% satisfaction rate. We focus on clear communication, timely delivery, and creating online stores that exceed expectations and foster long-term business partnerships.",
      image: "/Assets/stock/photo-1551288049-bebda4e38f71.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "We provide round-the-clock support for all your eCommerce websites. Our dedicated team ensures technical issues are resolved promptly, updates are applied efficiently, and your online store operates smoothly at all times.",
      image: "/Assets/stock/photo-1516321318423-f06f85e504b3.webp",
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

  const techCategories = [
    {
      title: "eCommerce Platforms",
      techs: ["Shopify", "WooCommerce", "Magento", "OpenCart", "PrestaShop", "BigCommerce"],
    },
    {
      title: "Front End",
      techs: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Back End",
      techs: ["Node.js", "PHP", "Laravel", "Python", "Ruby on Rails", "Express.js", ".NET"],
    },
    {
      title: "Database & Storage",
      techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      title: "Payments & APIs",
      techs: ["Stripe", "PayPal", "Razorpay", "REST APIs", "GraphQL", "Webhooks"],
    },
    {
      title: "DevOps & Cloud",
      techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Nginx"],
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

  const FALLBACK_CONTENT = {
    bannerImg: ecc,
    bannerTitle: "ECOMMERCE WEBSITE DESIGN SERVICES",
    bannerDesc: `Are you planning to expand your business by reaching out to your customers online? An eCommerce website would be the best option to enhance your customer base and increase your sales. Whether you want to create your first online store or overcome the sales slump with your existing one, we can help you out with our results-driven eCommerce website design services. Hire experienced developers from Future IT Touch Pvt. Ltd. for top-notch eCommerce web development solutions with a rich user interface, integration of payment gateway and shipping API, advanced security features, easy-to-manage product inventory and much more.
`,
    overviewImage: "/Assets/stock/photo-1556742049-0cfed4f6a45d.webp",
    overviewImageAlt: "eCommerce website development",
    overviewBadge: "Trusted eCommerce Website Development",
    overviewHeading: "Building Engaging",
    overviewHighlight: "Online Storefronts",
    overviewParagraphs: [
      "At Future IT Touch Pvt. Ltd. we specialize in creating eCommerce websites that deliver seamless user experiences and powerful management features for businesses worldwide.",
      "The goal of every online store is to provide users with an experience comparable to shopping in a physical store, while ensuring administrators enjoy effortless management. Our eCommerce development services focus on:",
      { boldPrefix: "For Users:", text: "Easy navigation, engaging interface, multiple product images, quick checkout, categories & filters, secured payments, and smooth order tracking." },
      { boldPrefix: "For Admins:", text: "Simple order management, product attributes, tax & shipping integration, offers & discounts, inventory management, and detailed analytics." },
      `With over ${YEARS_EXPERIENCE_DISPLAY} years of expertise, we've built hundreds of B2B and B2C eCommerce stores. Choose our custom eCommerce web design services to deliver exceptional digital shopping experiences for your customers.`,
    ],
    overviewCtaText: "Start Your eCommerce Journey",
    features,
    bizCards: businessData,
    sliderCards: cards,
    platforms,
    techCategories,
    faqData,
    featuresBadge: "Trusted eCommerce Website Development Company",
    featuresTitle: "Creating Online Stores That",
    featuresTitleHighlight: "Engage & Convert",
    bizBadge: "Leading eCommerce Website Design Company in India",
    bizHeading: "Partner with Us for",
    bizHighlight: "Growth & Innovation",
    sliderTitle: " Delivering Engaging eCommerce Experiences with",
    platformsTitle: `Ecommerce Website Development Platforms We Use
`,
    faqTitle: "About eCommerce Website Developmen",
    techBadge: "eCommerce Tech Stack",
    techHeading: "Technologies",
    techHeadingHighlight: "We Build With",
    techDescription: "From storefronts to payment gateways, we use the right combination of modern technologies to deliver fast, secure, and scalable eCommerce experiences.",
  };

  const content = cms
    ? {
        ...cms,
        bannerImg: cms.bannerImg || ecc,
        overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage,
        featuresBadge: cms.featuresBadge || FALLBACK_CONTENT.featuresBadge,
        featuresTitle: cms.featuresTitle || FALLBACK_CONTENT.featuresTitle,
        featuresTitleHighlight: cms.featuresTitleHighlight || FALLBACK_CONTENT.featuresTitleHighlight,
        bizBadge: cms.bizBadge || FALLBACK_CONTENT.bizBadge,
        bizHeading: cms.bizHeading || FALLBACK_CONTENT.bizHeading,
        bizHighlight: cms.bizHighlight || FALLBACK_CONTENT.bizHighlight,
        sliderTitle: cms.sliderTitle || FALLBACK_CONTENT.sliderTitle,
        platformsTitle: cms.platformsTitle || FALLBACK_CONTENT.platformsTitle,
        faqTitle: cms.faqTitle || FALLBACK_CONTENT.faqTitle,
        techBadge: cms.techBadge || FALLBACK_CONTENT.techBadge,
        techHeading: cms.techHeading || FALLBACK_CONTENT.techHeading,
        techHeadingHighlight: cms.techHeadingHighlight || FALLBACK_CONTENT.techHeadingHighlight,
        techDescription: cms.techDescription || FALLBACK_CONTENT.techDescription,
        features: isSectionDisabled(cms.enabledSections, "features") ? [] : (cms.features?.length ? cms.features : FALLBACK_CONTENT.features),
        bizCards: isSectionDisabled(cms.enabledSections, "biz") ? [] : (cms.bizCards?.length ? cms.bizCards : FALLBACK_CONTENT.bizCards),
        sliderCards: isSectionDisabled(cms.enabledSections, "slider") ? [] : (cms.sliderCards?.length ? cms.sliderCards : FALLBACK_CONTENT.sliderCards),
        platforms: isSectionDisabled(cms.enabledSections, "platforms") ? [] : (cms.platforms?.length ? cms.platforms : FALLBACK_CONTENT.platforms),
        techCategories: isSectionDisabled(cms.enabledSections, "techstack") ? [] : (cms.techCategories?.length ? cms.techCategories : FALLBACK_CONTENT.techCategories),
        faqData: isSectionDisabled(cms.enabledSections, "faq") ? [] : (cms.faqData?.length ? cms.faqData : FALLBACK_CONTENT.faqData),
      }
    : FALLBACK_CONTENT;

  return <CommonServicePage {...content} featuresStickyImg="/Assets/stock/photo-1563013544-824ae1b704d3.webp" />;
};

export default Ecommerce;
