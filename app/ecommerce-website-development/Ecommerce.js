import React from "react";

import Image from "next/image";
import ecc from "../Assets/ecc.svg";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaCogs,
  FaServer,
} from "react-icons/fa";
import GetNewInsight from "../components/GetNewInsight";
import {
  FaSitemap,
  FaImages,
  FaLock,
  FaFilter,
  FaShippingFast,
  FaBoxes,
  FaChartLine,
} from "react-icons/fa";

const Ecommerce = () => {
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
        "Advanced categorization and filtering options help users quickly locate products they’re interested in. By creating smart product taxonomies and layered navigation, we make shopping intuitive and efficient for your customers.",
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
        "We integrate powerful analytics tools that provide actionable insights into your eCommerce performance. From conversion tracking to sales trends and customer behavior analysis, you’ll have the data you need to make informed business decisions and maximize ROI.",
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
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Experience",
      desc: "With more than 15 years in eCommerce website development, Future IT Touch Pvt. Ltd. brings deep industry expertise. Our team ensures each project leverages best practices, modern technologies, and innovative design strategies.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 clients globally, we deliver tailor-made eCommerce solutions that meet diverse business needs. Our experience spans multiple industries and markets, ensuring websites that resonate with both local and international customers.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-centric approach has earned us a 98% satisfaction rate. We focus on clear communication, timely delivery, and creating online stores that exceed expectations and foster long-term business partnerships.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "We provide round-the-clock support for all your eCommerce websites. Our dedicated team ensures technical issues are resolved promptly, updates are applied efficiently, and your online store operates smoothly at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
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
    <>

      <CommonBannerService
        imgSrc={ecc}
        title="ECOMMERCE WEBSITE DESIGN SERVICES"
        desc="Are you planning to expand your business by reaching out to your customers online? An eCommerce website would be the best option to enhance your customer base and increase your sales. Whether you want to create your first online store or overcome the sales slump with your existing one, we can help you out with our results-driven eCommerce website design services. Hire experienced developers from Future IT Touch Pvt. Ltd. for top-notch eCommerce web development solutions with a rich user interface, integration of payment gateway and shipping API, advanced security features, easy-to-manage product inventory and much more.
"
      />

      <TechMarquee />

      {/* Trusted eCommerce Website Development */}

      <section className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "#f8faff", fontFamily: "’Inter’,sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
          <div className="relative rounded-[28px] overflow-hidden"
            style={{ boxShadow: "0 50px 100px rgba(99,102,241,.14), 0 20px 40px rgba(0,0,0,.08), 0 0 0 1px rgba(99,102,241,.08)" }}>

            {/* Top gradient strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-20"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: image with overlay */}
              <div className="relative overflow-hidden" style={{ minHeight: "clamp(320px,45vw,580px)" }}>
                <Image src={image1} alt="eCommerce website development" fill
                  sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-center" />

                <div className="absolute inset-0 z-[1]"
                  style={{ background: "linear-gradient(145deg,rgba(13,148,136,.60) 0%,rgba(99,102,241,.68) 55%,rgba(139,92,246,.75) 100%)" }} />
                <div className="absolute inset-0 z-[2] opacity-[.18]"
                  style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

                <div className="absolute top-7 left-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderTop: "2.5px solid rgba(255,255,255,.40)", borderLeft: "2.5px solid rgba(255,255,255,.40)", borderRadius: "8px 0 0 0" }} />
                <div className="absolute bottom-7 right-7 z-[3] w-14 h-14 pointer-events-none"
                  style={{ borderBottom: "2.5px solid rgba(255,255,255,.40)", borderRight: "2.5px solid rgba(255,255,255,.40)", borderRadius: "0 0 8px 0" }} />

                <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1.5px solid rgba(255,255,255,.14)" }} />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none z-[3]"
                  style={{ border: "1px solid rgba(255,255,255,.10)" }} />

                <svg className="absolute top-[28%] right-[18%] z-[3] pointer-events-none" width="22" height="22"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .50, animation: "ecFloat 5s ease-in-out infinite" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>
                <svg className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none" width="14" height="14"
                  viewBox="0 0 36 36" fill="none" style={{ opacity: .35, animation: "ecFloat 7s ease-in-out infinite 1.5s" }}>
                  <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
                </svg>

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 z-[4] flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.22)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-white text-[15px] leading-none"
                      style={{ fontFamily: "’Poppins’,sans-serif" }}>Since 2005</p>
                    <p className="text-white/65 text-[10px] tracking-[.08em] uppercase font-semibold mt-0.5">Trusted by 500+ Clients</p>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="bg-white px-8 py-12 sm:px-10 sm:py-14 xl:px-14 xl:py-16 flex flex-col justify-center">

                <div className="inline-flex items-center gap-2.5 self-start rounded-full px-4 py-1.5 mb-5"
                  style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      fontFamily: "’Poppins’,sans-serif",
                    }}>
                    Trusted eCommerce Website Development
                  </span>
                </div>

                <h4 className="font-bold leading-tight text-gray-900 mb-4"
                  style={{ fontFamily: "’Poppins’,sans-serif", fontSize: "clamp(1.65rem,3vw,2.5rem)" }}>
                  Building Engaging{" "}
                  <span style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Online Storefronts
                  </span>
                </h4>

                <div className="h-[3px] w-14 rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

                <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                  <p>
                    At{" "}
                    <span className="font-semibold" style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                      Future IT Touch Pvt. Ltd.
                    </span>{" "}
                    we specialize in creating eCommerce websites that deliver seamless user experiences and powerful management features for businesses worldwide.
                  </p>
                  <p>
                    The goal of every online store is to provide users with an experience comparable to shopping in a physical store, while ensuring administrators enjoy effortless management. Our eCommerce development services focus on:
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">For Users:</span> Easy navigation, engaging interface, multiple product images, quick checkout, categories &amp; filters, secured payments, and smooth order tracking.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">For Admins:</span> Simple order management, product attributes, tax &amp; shipping integration, offers &amp; discounts, inventory management, and detailed analytics.
                  </p>
                  <p>
                    With over 15 years of expertise, we&apos;ve built hundreds of B2B and B2C eCommerce stores. Choose our custom eCommerce web design services to deliver exceptional digital shopping experiences for your customers.
                  </p>
                </div>

                <a href="tel:+917056937000"
                  className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 4px 22px rgba(45,212,191,.28)", fontFamily: "’Poppins’,sans-serif" }}>
                  Start Your eCommerce Journey
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* high performance  */}

      <section className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}>

        {/* Decorative layer — clipped separately so sticky still works */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
          <div className="absolute -bottom-32 -right-32 w-[440px] h-[440px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }} />
        </div>

        <div className="relative z-10 px-5 md:px-12 xl:px-28">

          {/* Section heading */}
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Trusted eCommerce Website Development Company
              </span>
            </div>
            <h4 className="font-bold text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Creating Online Stores That{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Engage &amp; Convert
              </span>
            </h4>
            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          {/* Sticky image + feature cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8">

            {/* Sticky image */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-28">
              <div className="relative rounded-2xl overflow-hidden w-full"
                style={{
                  border: "1px solid rgba(99,102,241,.12)",
                  boxShadow: "0 20px 60px rgba(99,102,241,.12), 0 4px 16px rgba(0,0,0,.06)",
                }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                <Image
                  src={image1}
                  alt="eCommerce Development"
                  className="w-full object-cover hover:scale-105 md:h-[70vh] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-10 lg:gap-12">
              {features.map((feature, index) => {
                const gradients = [
                  { from: "#2dd4bf", to: "#6366f1" },
                  { from: "#6366f1", to: "#8b5cf6" },
                  { from: "#0ea5e9", to: "#2dd4bf" },
                  { from: "#a855f7", to: "#6366f1" },
                  { from: "#2dd4bf", to: "#0ea5e9" },
                  { from: "#8b5cf6", to: "#a855f7" },
                  { from: "#6366f1", to: "#2dd4bf" },
                ];
                const g = gradients[index % gradients.length];
                return (
                  <div key={index}
                    className="group relative flex flex-col items-start gap-4 p-6 rounded-xl bg-white transition-all duration-300 hover:-translate-y-1"
                    style={{
                      border: `1px solid ${g.from}22`,
                      boxShadow: "0 4px 24px rgba(99,102,241,.08), 0 1px 4px rgba(0,0,0,.05)",
                    }}>
                    {/* Top gradient line */}
                    <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                      style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />

                    {/* Floating icon */}
                    <div className="flex -mt-14 justify-center items-center w-20 h-20 rounded-xl text-3xl"
                      style={{
                        background: `linear-gradient(135deg,${g.from},${g.to})`,
                        boxShadow: `0 6px 20px ${g.from}44`,
                      }}>
                      <span className="text-white">{feature.icon}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900"
                      style={{ fontFamily: "'Poppins',sans-serif" }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm lg:text-base text-gray-600 text-justify">
                      {feature.description}
                    </p>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 10% 0%,${g.from}08,transparent 60%)` }} />
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* TurnYourBusiness */}

      <section className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 48%,#0d1540 100%)", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.022) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(99,102,241,.16),transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,.12),transparent 65%)" }} />
        </div>

        <div className="relative z-10 px-5 md:px-12 xl:px-28">

          {/* Section heading */}
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}>
                Leading eCommerce Website Design Company in India
              </span>
            </div>

            <h4 className="font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>
              Partner with Us for{" "}
              <span style={{
                background: "linear-gradient(120deg,#2dd4bf,#6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Growth &amp; Innovation
              </span>
            </h4>

            <div className="mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)", transformOrigin: "center" }} />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {businessData.map((elm, i) => {
              const gradients = [
                { from: "#2dd4bf", to: "#6366f1" },
                { from: "#6366f1", to: "#8b5cf6" },
                { from: "#0ea5e9", to: "#2dd4bf" },
              ];
              const g = gradients[i % gradients.length];
              return (
                <div key={elm.title}
                  className="group relative rounded-[20px] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,.08)",
                    boxShadow: "0 12px 48px rgba(0,0,0,.40)",
                  }}>

                  {/* Gradient banner */}
                  <div className="relative flex items-center justify-center py-10 overflow-hidden"
                    style={{ background: `linear-gradient(135deg,${g.from},${g.to})` }}>
                    <div className="absolute inset-0 opacity-[.18]"
                      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,.18)" }} />
                    <div className="absolute top-1 right-3 select-none pointer-events-none font-extrabold leading-none"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "5rem", color: "rgba(255,255,255,.12)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="relative z-10 w-[64px] h-[64px] rounded-2xl flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,.20)",
                        backdropFilter: "blur(12px)",
                        border: "1.5px solid rgba(255,255,255,.38)",
                        boxShadow: "0 8px 28px rgba(0,0,0,.22)",
                      }}>
                      {elm.icons}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col p-7"
                    style={{ background: "rgba(255,255,255,.04)", backdropFilter: "blur(16px)" }}>
                    <div className="w-10 h-[3px] rounded-full mb-4"
                      style={{ background: `linear-gradient(90deg,${g.from},${g.to})` }} />
                    <h5 className="font-bold text-white mb-3 leading-snug"
                      style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1.1rem" }}>
                      {elm.title}
                    </h5>
                    <p className="text-[13.5px] leading-[1.84] flex-1"
                      style={{ color: "rgba(255,255,255,.50)" }}>
                      {elm.desc}
                    </p>
                    <div className="mt-6 h-[1px] rounded-full"
                      style={{ background: `linear-gradient(90deg,transparent,${g.from}55,${g.to}44,transparent)` }} />
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%,${g.from}14,transparent 55%)` }} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CustomSlider
        cards={cards}
        title=" Delivering Engaging eCommerce Experiences with"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Ecommerce Website Development Platforms We Use
"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Developmen"
      />

      <GetNewInsight />
    </>
  );
};

export default Ecommerce;
