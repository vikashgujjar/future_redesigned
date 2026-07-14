export const dynamic = "force-static";

const SITE_URL = "https://futuretouch.in";

// Static routes, mirrored from app/**/page.js. Orphan/dev-only routes
// (login, sign, sendotp, tryApp, tryuiservice) are intentionally excluded —
// they aren't linked from any navigation and shouldn't be indexed.
const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service", priority: 0.9, changeFrequency: "monthly" },
  { path: "/price", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/our-team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/our-portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mission", priority: 0.5, changeFrequency: "yearly" },
  { path: "/why-us", priority: 0.6, changeFrequency: "monthly" },
  { path: "/trending-technology", priority: 0.7, changeFrequency: "monthly" },

  // Website / development services
  { path: "/website-design", priority: 0.8, changeFrequency: "monthly" },
  { path: "/web-app-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/web-app-developemnt-corporate", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ecommerce-website-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cms-development", priority: 0.7, changeFrequency: "monthly" },
  { path: "/business-developement", priority: 0.7, changeFrequency: "monthly" },

  // Mobile / app services
  { path: "/application-developement", priority: 0.8, changeFrequency: "monthly" },
  { path: "/android-application-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ios-application-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hybrid-application-development", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mobile-application-testing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/quality-assurance", priority: 0.6, changeFrequency: "monthly" },

  // Digital marketing
  { path: "/digital-marketing-service", priority: 0.8, changeFrequency: "monthly" },
  { path: "/search-engine-optimization", priority: 0.8, changeFrequency: "monthly" },
  { path: "/local-search-engine-optimization", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pay-per-click-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/social-media-marketing-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/content-marketing-service", priority: 0.7, changeFrequency: "monthly" },

  // Design / branding
  { path: "/graphic-design-services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/logo-design-services", priority: 0.6, changeFrequency: "monthly" },
  { path: "/corporate-stationery-design", priority: 0.6, changeFrequency: "monthly" },
  { path: "/brochure-design-service", priority: 0.6, changeFrequency: "monthly" },
  { path: "/animated-services", priority: 0.6, changeFrequency: "monthly" },
  { path: "/creative-services", priority: 0.6, changeFrequency: "monthly" },

  // Cyber security
  { path: "/cyber-security-service", priority: 0.8, changeFrequency: "monthly" },
  { path: "/vulnerability-assessment-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/penetration-testing-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/network-security-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cloud-security-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/data-protection-compliance-service", priority: 0.7, changeFrequency: "monthly" },
  { path: "/incident-response-service", priority: 0.7, changeFrequency: "monthly" },

  // Technology stack pages
  { path: "/php-laravel-codeigniter-services", priority: 0.6, changeFrequency: "monthly" },
  { path: "/reactjs-vuejs-nodejs-development-services", priority: 0.6, changeFrequency: "monthly" },
  { path: "/asp-dot-net-service", priority: 0.6, changeFrequency: "monthly" },
  { path: "/python-and-django-service", priority: 0.6, changeFrequency: "monthly" },
  { path: "/angularjs-development-service", priority: 0.6, changeFrequency: "monthly" },
  { path: "/wordpress-and-shopify-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/swift-app-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/react-native-application-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/flutter-application-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ionic-application-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/java-application-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/unity-game-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/python-numpy-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ruby-and-pybrain-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/julia-developement-service", priority: 0.6, changeFrequency: "monthly" },
  { path: "/lisp-online-store-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/haskell-ai-and-ml-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/c-plus-plus-blockchain-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/solidity-blockchain-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/python-blockchain-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/customer-polls-blockchain", priority: 0.5, changeFrequency: "monthly" },

  // Legal / support
  { path: "/Privacy-Policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/Terms-Conditions", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refund", priority: 0.3, changeFrequency: "yearly" },
  { path: "/support", priority: 0.4, changeFrequency: "monthly" },
];

// Kept in sync with app/blog/[slug]/page.js's generateStaticParams()
const BLOG_SLUGS = [
  "everything-you-need-to-know-about-nodejs",
  "exploring-the-key-features-of-laravel-7-framework",
  "best-technology-for-mobile-application-development",
];

export default function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
