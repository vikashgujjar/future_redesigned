"use client";
import image2 from "../Assets/lss.webp";
import cwd from "../Assets/loc.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaBuilding, FaBoxOpen, FaLayerGroup, FaFileAlt, FaFolderOpen, FaBookOpen,
  FaLightbulb, FaHandshake, FaPalette, FaChartLine,
  FaPencilRuler, FaDesktop, FaCode, FaSearch,
} from "react-icons/fa";

const Local = () => {
  const features = [
    {
      title: "Local SEO Audit & Strategy",
      description:
        "We analyze your business's local search presence and develop a tailored SEO strategy. By optimizing for location-based keywords, competitor insights, and audience behavior, we ensure your business ranks higher in local search results and attracts nearby customers.",
      icon: <FaBuilding />,
    },
    {
      title: "Google Business Profile Optimization",
      description:
        "Our team optimizes your Google Business Profile to improve visibility on Google Maps and local search results. From updating business info to adding images and posts, we ensure your profile drives clicks, calls, and visits.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Local Keyword & Content Optimization",
      description:
        "We target location-specific keywords and optimize website content to appear in local searches. By combining relevant local content, meta tags, and on-page SEO best practices, we increase your visibility and attract local customers actively searching for your services.",
      icon: <FaChartLine />,
    },
    {
      title: "Local Link Building & Citations",
      description:
        "We build high-quality local backlinks and citations across relevant directories to enhance your domain authority and local search rankings. This strengthens your online credibility and helps customers find your business easily.",
      icon: <FaBookOpen />,
    },
    {
      title: "Review & Reputation Management",
      description:
        "We help you manage online reviews and reputation to build trust and credibility. Our strategies encourage positive reviews, respond to customer feedback, and maintain a strong local presence that influences buying decisions.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "We monitor your local SEO campaigns using metrics like search rankings, website traffic, and leads. Insights are used to refine strategies, optimize efforts, and ensure your business achieves maximum results in local search.",
      icon: <FaFileAlt />,
    },
    {
      title: "Local SEO Refresh & Optimization",
      description:
        "For businesses looking to improve local search visibility, we refresh and optimize existing SEO efforts. From website updates to citation corrections, we ensure your local presence remains strong, competitive, and effective.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Local SEO Strategy",
      desc: "We design customized local SEO strategies to help your business appear in nearby search results, increasing foot traffic, calls, and leads from customers in your area.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Website & Content Optimization",
      desc: "Our team optimizes your website content, meta tags, and location pages to ensure your business ranks higher for local searches and reaches customers searching for your products or services nearby.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Local SEO Process",
      desc: "We work closely with your team to understand your business locations, services, and target audience, ensuring our local SEO efforts align with your goals and deliver measurable results.",
    },
  ];

  const cards = [
    {
      count: "1000+",
      title: "Local Listings Optimized",
      desc: "We have optimized over 1000 local listings across directories and search platforms, helping businesses increase local visibility and attract more nearby customers effectively.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of SEO Expertise",
      desc: "With over 15 years of SEO experience, Future IT Touch Pvt. Ltd. delivers expert local search optimization strategies that improve rankings, traffic, and conversions for businesses worldwide.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 brands, we create local SEO campaigns that enhance online presence, improve visibility on maps, and drive measurable traffic from local searches.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our dedication to effective local SEO strategies has earned us a 98% satisfaction rate. We ensure each campaign drives results that meet business goals and increase local engagement.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "Our team provides continuous support for local SEO campaigns, including updates, reporting, and optimizations to ensure your business remains visible and competitive in your local area.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Local SEO Audits & Strategy",
      desc: "We perform detailed local SEO audits and develop tailored strategies to improve your visibility in location-based searches and attract nearby customers.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Google Business Profile Optimization",
      desc: "We optimize your Google Business Profile for maps and search, ensuring your business appears accurately and prominently in local searches.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Local Content & Keyword Optimization",
      desc: "We enhance website content and target local keywords to improve search rankings, making it easier for nearby customers to find your products or services.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Local Link Building & Citations",
      desc: "We build quality local backlinks and citations across relevant directories to improve your domain authority and search visibility in local searches.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Review & Reputation Management",
      desc: "We monitor and manage online reviews to build trust and credibility, encouraging positive feedback and fostering strong local customer relationships.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Analytics & Continuous Optimization",
      desc: "We track local SEO performance using analytics, refining strategies to ensure sustained visibility, higher rankings, and increased local engagement.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Local SEO?",
      description:
        "Our services include local SEO audits, Google Business Profile optimization, location-based content, citation building, review management, and continuous analytics monitoring to improve local search performance.",
    },
    {
      title: "Can you optimize my business for local searches?",
      description:
        "Absolutely! We customize strategies to improve your local search rankings, ensuring customers nearby can easily find your business and engage with your services.",
    },
    {
      title: "Do you manage Google Maps and local listings?",
      description:
        "Yes, we optimize and manage your listings on Google Maps and other local directories to improve visibility, accuracy, and trust with potential customers in your area.",
    },
    {
      title: "Can you help my existing website rank locally?",
      description:
        "Definitely! We optimize your website, content, and local pages to rank higher in search results for relevant local keywords, driving targeted traffic and conversions.",
    },
    {
      title: "How do you track the success of local SEO campaigns?",
      description:
        "We track metrics such as local search rankings, traffic from local searches, leads generated, and customer engagement to measure campaign success and refine strategies accordingly.",
    },
    {
      title: "Do you provide ongoing local SEO support?",
      description:
        "Yes, we offer continuous support including campaign updates, optimization, reporting, and strategic adjustments to maintain and improve your local search visibility over time.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={cwd}
      bannerTitle="LOCAL SEO SERVICES"
      bannerDesc="Future IT Touch Pvt. Ltd. With about 46% of all the Google searches featuring a local intent, Google is placing more importance on delivering local results that offer an immediate solution to the customers. Also, studies reveal that 78% of location-oriented searches invariably lead to offline conversion. All these statistics are compelling businesses to prepare for proximity-based search. If your business is not optimized for geo-targeted search, it's high time to avail local SEO services."
      overviewImage={cwd}
      overviewImageAlt="Local SEO Services"
      overviewBadge="Professional & Result-Oriented Local SEO Services"
      overviewHeading="Optimizing Your Local Presence to"
      overviewHighlight="Attract Nearby Customers"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we create comprehensive local SEO strategies that help your business rank higher in local searches, attract relevant customers, and drive conversions. Effective local SEO builds visibility, trust, and a strong online reputation.",
        "From Google Business Profile optimization to local content creation, citations, and review management, we ensure your business stands out in your area. Our experienced SEO specialists combine technical expertise, analytics, and strategy to deliver measurable local search results.",
        "With over 15 years of experience, we provide high-quality Local SEO Services tailored to your business locations and audience. We help you attract more local customers, increase engagement, and drive leads efficiently.",
      ]}
      overviewCtaText="Improve Your Local Search Visibility Today"
      featuresBadge="Result-Oriented Local SEO Services"
      featuresTitle="Boosting Your Online Presence to"
      featuresTitleHighlight="Drive Local Customers"
      featuresStickyImg={image2}
      features={features}
      bizBadge="Professional Local SEO Company in India"
      bizHeading="Boosting Local Visibility to"
      bizHighlight="Attract Nearby Customers"
      bizCards={businessData}
      sliderTitle="Improving Local Search Rankings & Customer Visibility"
      sliderCards={cards}
      platformsTitle="Local SEO Solutions We Deliver"
      platforms={platforms}
      faqTitle="About Our Local SEO Services"
      faqData={faqData}
      techCategories={[
        { title:"Analytics & SEO", techs:[
          {name:"Google Analytics",icon:"https://cdn.simpleicons.org/googleanalytics"},
          {name:"Google Search Console",icon:"https://cdn.simpleicons.org/googlesearchconsole"},
          {name:"Ahrefs",icon:"https://cdn.simpleicons.org/ahrefs"},
          {name:"Semrush",icon:"https://cdn.simpleicons.org/semrush"},
        ]},
        { title:"Advertising", techs:[
          {name:"Google Ads",icon:"https://cdn.simpleicons.org/googleads"},
          {name:"Meta Ads",icon:"https://cdn.simpleicons.org/meta"},
          {name:"LinkedIn Ads",icon:"https://cdn.simpleicons.org/linkedin"},
        ]},
        { title:"Social & Email", techs:[
          {name:"HubSpot",icon:"https://cdn.simpleicons.org/hubspot"},
          {name:"Mailchimp",icon:"https://cdn.simpleicons.org/mailchimp"},
          {name:"Buffer",icon:"https://cdn.simpleicons.org/buffer"},
          {name:"Hootsuite",icon:"https://cdn.simpleicons.org/hootsuite"},
        ]},
        { title:"Content & CMS", techs:[
          {name:"WordPress",icon:"https://cdn.simpleicons.org/wordpress"},
          {name:"Webflow",icon:"https://cdn.simpleicons.org/webflow"},
          {name:"Canva",icon:"https://cdn.simpleicons.org/canva"},
        ]},
      ]}
    />
  );
};

export default Local;
