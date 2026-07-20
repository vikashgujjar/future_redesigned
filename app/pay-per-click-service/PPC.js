"use client";
const cwd = "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1400&q=85";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import {
  FaBullhorn, FaSearch, FaEnvelopeOpenText, FaLaptopCode, FaUsers, FaChartLine,
} from "react-icons/fa";

const PPC = () => {
  const features = [
    {
      title: "Targeted Campaigns",
      description:
        "We design PPC campaigns that reach your ideal audience with precision, ensuring your ads are shown to users who are most likely to convert. By analyzing demographics, search behavior, and interests, we optimize each campaign for maximum ROI and ad relevance. Our approach guarantees that every click has the potential to turn into a valuable lead or sale, helping you achieve measurable business growth.",
      icon: <FaBullhorn />,
    },
    {
      title: "Keyword Optimization",
      description:
        "Our PPC experts research and select high-performing keywords that accurately represent your products or services. By targeting the right search terms, we drive qualified traffic to your website while minimizing wasted ad spend. We continuously monitor keyword performance, identify emerging trends, and adjust bids to ensure your campaigns stay competitive and deliver optimal results over time.",
      icon: <FaSearch />,
    },
    {
      title: "Compelling Ad Copies",
      description:
        "We craft attention-grabbing ad copies that resonate with your audience across Google Ads, Facebook, YouTube, and other platforms. Each ad is carefully written to highlight unique selling points, encourage clicks, and drive conversions. Our team tests multiple variations, refines messaging, and optimizes calls-to-action to maximize engagement and ensure the best possible ROI for every campaign.",
      icon: <FaEnvelopeOpenText />,
    },
    {
      title: "Landing Page Optimization",
      description:
        "An effective PPC campaign requires high-converting landing pages. We design and optimize landing pages with clear messaging, persuasive calls-to-action, and a seamless user experience. From mobile responsiveness to fast load times and visually engaging layouts, we ensure that visitors are guided toward conversion efficiently, increasing your overall campaign performance and ROI.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Paid Social Advertising",
      description:
        "We manage PPC campaigns on social platforms such as Facebook, Instagram, LinkedIn, and X (Twitter). Using precise audience targeting, carousel ads, video ads, and dynamic creatives, we increase brand visibility and engagement. Our team continuously tests ad formats, messaging, and placements to maximize reach and conversions while optimizing your ad spend for the highest possible ROI.",
      icon: <FaUsers />,
    },
    {
      title: "Performance Analytics & Reporting",
      description:
        "Our team continuously monitors campaign performance, adjusts bids, and optimizes ad placements to ensure maximum effectiveness. Detailed analytics reports track impressions, clicks, conversions, and ROI, helping us make data-driven decisions. We refine campaigns based on real-time performance metrics, ensuring that your PPC investment delivers measurable results and continuous growth for your business.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaBullhorn className="text-white w-8 h-8" />,
      title: "Targeted PPC Campaigns",
      desc: "We design precision-driven PPC campaigns to reach your ideal audience. By analyzing search behavior, demographics, and interests, we ensure maximum visibility and conversion potential for your ads.",
    },
    {
      icons: <FaSearch className="text-white w-8 h-8" />,
      title: "Keyword Research & Optimization",
      desc: "Our PPC experts research high-performing keywords, optimize bids, and continuously monitor performance. This ensures your ads appear to the right audience, driving qualified traffic and maximizing ROI.",
    },
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "Landing Page Optimization",
      desc: "We create high-converting landing pages tailored to your campaigns. With clear CTAs, fast load times, and mobile-friendly design, we maximize user engagement and boost conversion rates.",
    },
  ];

  const cards = [
    {
      count: "1500+",
      title: "PPC Campaigns Successfully Executed",
      desc: "We've executed over 1500 result-driven PPC campaigns across Google, Facebook, YouTube, and LinkedIn. Each campaign is crafted to maximize reach, engagement, and ROI, ensuring high-quality leads and conversions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    },
    {
      count: YEARS_EXPERIENCE_DISPLAY,
      title: "Years of PPC Expertise",
      desc: `With over ${YEARS_EXPERIENCE_DISPLAY} years of experience in PPC management, our team delivers data-driven strategies that optimize ad spend, improve campaign performance, and help businesses achieve measurable growth.`,
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=900&q=80",
    },
    {
      count: "500+",
      title: "Satisfied Global Clients",
      desc: "Trusted by more than 500 brands worldwide, we manage PPC campaigns that increase visibility, attract ready-to-buy customers, and generate tangible ROI for businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our focus on delivering high-performing campaigns has earned a 98% client satisfaction rate. We ensure transparent reporting, timely execution, and constant optimization for each client.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80",
    },
    {
      count: "24/7",
      title: "Ongoing Campaign Monitoring",
      desc: "Our PPC experts provide round-the-clock monitoring to optimize bids, tweak ads, and refine targeting strategies, ensuring your campaigns always perform at their peak.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    },
  ];

  const platforms = [
    {
      icon: <FaBullhorn className="text-white w-6 h-6" />,
      title: "Targeted Campaign Planning",
      desc: "We research keywords, demographics, and user behavior to design campaigns that reach the right audience with precision, improving ad relevance and ROI.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Keyword & Ad Optimization",
      desc: "Our experts continually optimize keywords, bids, and ad copies to ensure your campaigns drive high-quality traffic and maximum conversions.",
    },
    {
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      title: "Landing Page Optimization",
      desc: "We design and optimize PPC landing pages to increase engagement and conversion rates, ensuring your investment generates measurable results.",
    },
    {
      icon: <FaUsers className="text-white w-6 h-6" />,
      title: "Paid Social Advertising",
      desc: "We run highly targeted social media PPC campaigns on Facebook, Instagram, LinkedIn, and X (Twitter), using precise audience targeting and engaging ad creatives.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Performance Analytics & Reporting",
      desc: "Detailed reports and continuous monitoring allow us to measure campaign success, optimize strategies, and deliver data-driven decisions for maximum impact.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-white w-6 h-6" />,
      title: "Retargeting & Lead Nurturing",
      desc: "We implement retargeting strategies to re-engage visitors who didn't convert initially, improving overall campaign efficiency and lead generation.",
    },
  ];

  const faqData = [
    {
      title: "What is included in your PPC management service?",
      description:
        "Our PPC service includes campaign strategy, keyword research, ad copy creation, landing page optimization, bid management, retargeting, analytics tracking, and ongoing optimization across platforms like Google, Facebook, LinkedIn, and YouTube.",
    },
    {
      title: "Can you manage multiple PPC platforms simultaneously?",
      description:
        "Yes, we handle campaigns across multiple platforms, ensuring consistent targeting, messaging, and performance tracking for Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and YouTube.",
    },
    {
      title: "Do you provide custom ad creatives?",
      description:
        "Absolutely! We create engaging and high-converting ad creatives, including images, videos, carousel ads, and dynamic product ads tailored to your brand and campaign objectives.",
    },
    {
      title: "How do you measure PPC performance?",
      description:
        "We track conversions, click-through rates (CTR), cost-per-click (CPC), return on ad spend (ROAS), and other key metrics using advanced analytics tools to continuously optimize your campaigns.",
    },
    {
      title: "Can PPC help my business grow quickly?",
      description:
        "Yes, PPC is a fast and measurable way to drive qualified traffic to your website or app. With properly targeted campaigns, you can generate leads, sales, and brand awareness quickly.",
    },
    {
      title: "Do you provide ongoing campaign support?",
      description:
        "Yes, our team provides continuous monitoring, bid optimization, ad updates, performance reports, and campaign adjustments to ensure sustained results and ROI.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={cwd}
      bannerTitle="PPC MANAGEMENT SERVICES"
      bannerDesc="Looking for the quickest way to bring ready-to-buy customers to your website and mobile app? PPC (Pay-per-Click) offers the perfect solution. As a leading PPC management company in India we specialize in various PPC management services such as Google Adwords, Facebook and YouTube advertisements. As an certified PPC service provider in India, we have been serving a global clientele from varied industries and demographic for the past ten years in the most efficient manner."
      overviewImage={cwd}
      overviewImageAlt="PPC Management Services"
      overviewBadge="Result-Oriented PPC Management"
      overviewHeading="Driving Targeted Traffic &"
      overviewHighlight="Maximizing ROI with PPC Campaigns"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we create highly effective Pay-Per-Click (PPC) campaigns to bring ready-to-buy customers to your website or mobile app. Our certified PPC experts specialize in Google Ads, Facebook Ads, YouTube Ads, and more, delivering measurable results with cost-effective campaigns.",
        "Our PPC services are designed to maximize your visibility, drive targeted traffic, and generate high-quality leads that convert into sales.",
        { boldPrefix: "For Businesses:", text: "Targeted ad campaigns, strategic keyword bidding, precise audience segmentation, retargeting, and data-driven optimization to maximize ROI." },
        { boldPrefix: "For Marketing Teams:", text: "Detailed analytics, campaign performance tracking, budget optimization, and reporting to guide strategy and enhance results." },
        `With over ${YEARS_EXPERIENCE_DISPLAY} years of experience in PPC management, we've delivered successful campaigns for clients across industries. Choose our PPC management services to boost your online presence, attract qualified leads, and increase conversions.`,
      ]}
      overviewCtaText="Start Your PPC Campaign Today"
      featuresBadge="Trusted PPC Management Services"
      featuresTitle="Delivering Result-Driven Paid Campaigns for"
      featuresTitleHighlight="Maximum ROI"
      featuresStickyImg={cwd}
      features={features}
      bizBadge="Leading PPC Management Company in India"
      bizHeading="Maximize Conversions &"
      bizHighlight="ROI with Expert PPC Strategies"
      bizCards={businessData}
      sliderTitle="Maximize Conversions with Expert PPC Management Solutions "
      sliderCards={cards}
      platformsTitle="Comprehensive PPC Management Services – Target, Engage & Convert Your Audience Effectively"
      platforms={platforms}
      faqTitle=" About PPC Management Services"
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

export default PPC;
