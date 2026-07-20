"use client";
const gm = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import {
  FaDesktop, FaMobileAlt, FaSearch, FaShoppingCart, FaLock, FaChartLine,
  FaPaintBrush, FaRocket, FaHeadset, FaRegClock, FaTools, FaGlobe,
} from "react-icons/fa";

const features = [
  {
    title: "Professional Custom Design",
    description:
      "We craft visually stunning, brand-aligned website designs tailored specifically for small businesses and startups. Every pixel is purposeful — from color palette to typography — creating a strong first impression that builds instant credibility with your target audience.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Mobile-Responsive Layouts",
    description:
      "Over 60% of web traffic comes from mobile devices. All our small business websites are built with a mobile-first approach, ensuring flawless performance and perfect display across smartphones, tablets, and desktops without any additional cost.",
    icon: <FaMobileAlt />,
  },
  {
    title: "SEO-Optimized Structure",
    description:
      "We build every small business website with search engine optimization baked in from day one — clean code, fast loading, proper metadata, semantic HTML, and structured data — so your business ranks higher on Google and attracts organic visitors without paid ads.",
    icon: <FaSearch />,
  },
  {
    title: "eCommerce Integration",
    description:
      "Want to sell products or services online? We seamlessly integrate WooCommerce, Shopify, or custom shopping cart solutions into your small business website, complete with secure payment gateways, inventory management, and easy order tracking.",
    icon: <FaShoppingCart />,
  },
  {
    title: "SSL Security & Performance",
    description:
      "We implement SSL certificates, web application firewalls, and security hardening on every website. Combined with fast hosting setup, CDN integration, and optimized assets, your site loads under 2 seconds and stays protected against modern cyber threats.",
    icon: <FaLock />,
  },
  {
    title: "Analytics & Growth Tracking",
    description:
      "We connect Google Analytics, Search Console, and conversion tracking to your website, giving you clear insights into traffic, visitor behavior, and lead sources. Data-driven visibility empowers you to make smarter decisions and grow your business online.",
    icon: <FaChartLine />,
  },
];

const businessData = [
  {
    icons: <FaRocket className="text-white w-8 h-8" />,
    title: "Fast & Affordable Launch",
    desc: "We deliver professional small business websites within 7–14 days at startup-friendly pricing — without compromising on quality, functionality, or design standards.",
  },
  {
    icons: <FaPaintBrush className="text-white w-8 h-8" />,
    title: "100% Custom Designs",
    desc: "No templates, no generic layouts. Every website is uniquely designed from scratch to reflect your brand identity, values, and the audience you serve.",
  },
  {
    icons: <FaHeadset className="text-white w-8 h-8" />,
    title: "Dedicated Support Team",
    desc: "Our team provides ongoing post-launch support, updates, and training — so you're never left to manage your website alone after the project is delivered.",
  },
];

const cards = [
  {
    count: "500+",
    title: "Small Business Websites Delivered",
    desc: "We have designed and launched over 500 small business websites that have helped startups and growing businesses build a strong digital presence and attract more customers.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  },
  {
    count: YEARS_EXPERIENCE_DISPLAY,
    title: "Years of Web Design Experience",
    desc: `With ${YEARS_EXPERIENCE_DISPLAY} years in the industry, Future IT Touch brings deep expertise in building websites that not only look great but are built to convert visitors into customers.`,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our small business clients consistently rate us 5 stars for design quality, communication, on-time delivery, and the tangible results their websites deliver.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  },
  {
    count: "7 Days",
    title: "Average Launch Turnaround",
    desc: "We follow an agile, sprint-based approach that allows us to design, develop, test, and launch most small business websites within just 7–14 business days.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80",
  },
  {
    count: "24/7",
    title: "Post-Launch Support",
    desc: "We don't disappear after launch. Our team is available around the clock to handle updates, fix issues, and help your website grow alongside your business.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80",
  },
];

const platforms = [
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Business Brochure Websites",
    desc: "Elegant, multi-page websites that showcase your services, team, and contact information — designed to build trust and generate enquiries from new customers.",
  },
  {
    icon: <FaShoppingCart className="text-white w-6 h-6" />,
    title: "Small Business eCommerce",
    desc: "Affordable online stores for small businesses — product listings, secure payments, and order management built on WooCommerce or Shopify for easy self-management.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Local SEO Websites",
    desc: "Websites built specifically to rank in local Google searches — with Google My Business integration, location pages, and schema markup for service-area businesses.",
  },
  {
    icon: <FaMobileAlt className="text-white w-6 h-6" />,
    title: "Mobile-First Landing Pages",
    desc: "High-converting single-page websites optimized for mobile traffic, perfect for local service businesses, freelancers, and startups running digital ad campaigns.",
  },
  {
    icon: <FaTools className="text-white w-6 h-6" />,
    title: "WordPress CMS Websites",
    desc: "Easy-to-manage WordPress websites that let you update content, add blog posts, and manage your pages without any technical knowledge or developer help.",
  },
  {
    icon: <FaGlobe className="text-white w-6 h-6" />,
    title: "Startup Portfolio Websites",
    desc: "Polished, modern portfolio and company profile websites that establish your brand credibility and give investors, partners, and clients the right first impression.",
  },
];

const faqData = [
  {
    title: "How much does a small business website cost?",
    description:
      "Our small business website packages are priced to be affordable for startups and growing businesses. Pricing depends on the number of pages, features required, and level of customization. Contact us for a free quote tailored to your specific needs.",
  },
  {
    title: "How long does it take to build a small business website?",
    description:
      "A standard small business website typically takes 7–14 business days from design approval to launch. More complex projects with eCommerce, custom functionality, or multiple languages may take 3–5 weeks.",
  },
  {
    title: "Will my website work well on mobile phones?",
    description:
      "Yes, absolutely. Every website we build is fully responsive and mobile-optimized. We test on multiple devices and screen sizes to ensure your site looks and works perfectly on smartphones, tablets, and desktops.",
  },
  {
    title: "Can I update the website content myself after it's launched?",
    description:
      "Yes. We build most small business websites on WordPress or similar CMS platforms, which allow you to easily update text, images, blog posts, and pages without any coding knowledge. We also provide training on how to use your website.",
  },
  {
    title: "Will my website appear on Google search?",
    description:
      "We build all websites with on-page SEO best practices including clean URL structures, fast loading speeds, proper metadata, and schema markup. We also submit your website to Google Search Console after launch to start the indexing process.",
  },
  {
    title: "Do you offer website maintenance after launch?",
    description:
      "Yes. We offer affordable monthly maintenance packages that include security updates, plugin updates, content updates, performance monitoring, and technical support to keep your website running smoothly.",
  },
];

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React.js",      icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js",       icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "WordPress",     icon: "https://cdn.simpleicons.org/wordpress" },
      { name: "Tailwind CSS",  icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "HTML/CSS",      icon: "https://cdn.simpleicons.org/html5" },
    ],
  },
  {
    title: "eCommerce & CMS",
    techs: [
      { name: "WooCommerce",   icon: "https://cdn.simpleicons.org/woocommerce" },
      { name: "Shopify",       icon: "https://cdn.simpleicons.org/shopify" },
      { name: "Elementor",     icon: "https://cdn.simpleicons.org/elementor" },
      { name: "Webflow",       icon: "https://cdn.simpleicons.org/webflow" },
    ],
  },
  {
    title: "Backend & Database",
    techs: [
      { name: "Node.js",       icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "PHP",           icon: "https://cdn.simpleicons.org/php" },
      { name: "MySQL",         icon: "https://cdn.simpleicons.org/mysql" },
      { name: "MongoDB",       icon: "https://cdn.simpleicons.org/mongodb" },
    ],
  },
  {
    title: "Performance & SEO",
    techs: [
      { name: "Google Analytics",     icon: "https://cdn.simpleicons.org/googleanalytics" },
      { name: "Google Search Console",icon: "https://cdn.simpleicons.org/googlesearchconsole" },
      { name: "Cloudflare",           icon: "https://cdn.simpleicons.org/cloudflare" },
      { name: "Vercel",               icon: "https://cdn.simpleicons.org/vercel/white" },
    ],
  },
];

const Business = () => {
  return (
    <CommonServicePage
      bannerImg={gm}
      bannerTitle="SMALL BUSINESS WEBSITE DESIGN SERVICES"
      bannerDesc="The biggest challenge faced by any small business is expanding its customer base. With the rising costs of traditional media, a professionally developed website is the most effective first step toward building a strong digital presence. Future IT Touch Pvt. Ltd. provides affordable, custom small business website design services to clients worldwide — helping startups and growing businesses enhance their online presence and drive real growth."
      overviewImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      overviewImageAlt="Small business website design"
      overviewBadge="Website For Small Business & Startups"
      overviewHeading="Rise from a Startup to an"
      overviewHighlight="Established Brand"
      overviewParagraphs={[
        "Whether you run a small business or have invested in a startup, we build professional, results-driven websites at very reasonable price points. We use the latest technologies, create attractive design layouts, and develop business-oriented features to uplift your user experience.",
        "A well-built website for small businesses converts visitors into buyers by creating a strong first impression. This increases revenue and helps your business grow into an established brand.",
        { boldPrefix: "For Your Business:", text: "SEO-optimized, fast-loading, mobile-responsive websites that generate enquiries and grow your customer base organically." },
        { boldPrefix: "For Your Customers:", text: "Intuitive navigation, clear service presentation, easy contact options, and a trustworthy brand experience on every device." },
        `In the last ${YEARS_EXPERIENCE_DISPLAY} years, we have delivered effective web solutions to hundreds of small businesses and helped them enhance their growth online with measurable results.`,
      ]}
      overviewCtaText="Start Your Business Website"
      featuresBadge="Small Business Website Development"
      featuresTitle="Building Websites That Help Your Business"
      featuresTitleHighlight="Grow Online"
      featuresStickyImg="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
      features={features}
      bizBadge="Why Choose Future IT Touch"
      bizHeading="We Build Websites That"
      bizHighlight="Work for Your Business"
      bizCards={businessData}
      sliderTitle="Delivering Professional Websites That Drive Small Business Growth"
      sliderCards={cards}
      platformsTitle="Small Business Website Solutions We Deliver"
      platforms={platforms}
      techBadge="Our Web Tech Stack"
      techHeading="Technologies"
      techHeadingHighlight="We Build With"
      techDescription="We use modern, proven technologies to deliver fast, secure, and easy-to-manage websites that help small businesses compete online effectively."
      techCategories={techCategories}
      faqTitle="About Small Business Website Design"
      faqData={faqData}
    />
  );
};

export default Business;
