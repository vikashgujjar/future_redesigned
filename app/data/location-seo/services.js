// Service taxonomy for location-based landing pages (Service × Location SEO).
// `slug` is used verbatim in URLs: /{countryCode}/{slug}-services-in-{citySlug}
// `canonicalPath` points at the existing, unchanged service page this new
// page should link back to for internal linking / "main service" context.

export const SERVICE_CATEGORIES = [
  { slug: "website-design", name: "Website Design" },
  { slug: "mobile-app-development", name: "Mobile App Development" },
  { slug: "digital-marketing", name: "Digital Marketing" },
  { slug: "design-branding", name: "Design & Branding" },
  { slug: "cyber-security", name: "Cyber Security" },
];

export const SERVICES = [
  // ── Website Design ──────────────────────────────────────────────
  {
    slug: "website-design",
    name: "Website Design",
    category: "website-design",
    canonicalPath: "/website-design",
    shortDescription:
      "Custom, responsive website design built around your brand and conversion goals.",
    keywords: [
      "web design company", "website design services", "professional web designer",
      "custom web design company", "affordable web design services", "responsive web design company",
      "business website design services", "website redesign services", "hire web designer",
      "best web design agency", "web design experts", "website design for startups",
      "SEO friendly web design", "WordPress web design company", "Shopify website design services",
    ],
  },
  {
    slug: "ecommerce-website",
    name: "eCommerce Website",
    category: "website-design",
    canonicalPath: "/ecommerce-website-development",
    shortDescription:
      "Conversion-focused eCommerce storefronts built on Shopify, WooCommerce, and custom stacks.",
    keywords: [
      "ecommerce website development", "ecommerce web design company", "online store development",
      "Shopify development company", "WooCommerce development services", "custom ecommerce website development company",
      "ecommerce development agency", "multi-vendor marketplace development", "ecommerce SEO services",
    ],
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    category: "website-design",
    canonicalPath: "/web-app-development",
    shortDescription:
      "Scalable web applications and SaaS platforms engineered for reliability and growth.",
    keywords: [
      "web application development services", "custom web application development", "SaaS development company",
      "enterprise web development", "scalable web solutions", "cloud web application development",
      "API integration services", "web app development company",
    ],
  },
  {
    slug: "cms-web-development",
    name: "CMS Web Development",
    category: "website-design",
    canonicalPath: "/cms-development",
    shortDescription:
      "WordPress, headless CMS, and content-managed website builds your team can maintain easily.",
    keywords: [
      "CMS development services", "WordPress web design company", "headless CMS development",
      "content management system development", "custom CMS development company",
    ],
  },
  {
    slug: "small-business-website",
    name: "Small Business Website",
    category: "website-design",
    canonicalPath: "/business-developement",
    shortDescription:
      "Affordable, fast-turnaround websites purpose-built for small and growing businesses.",
    keywords: [
      "small business web design USA", "affordable website development services for small business",
      "website design for startups", "small business website design services", "web design company for startups",
    ],
  },
  {
    slug: "corporate-website",
    name: "Corporate Website",
    category: "website-design",
    canonicalPath: "/web-app-developemnt-corporate",
    shortDescription:
      "Polished corporate websites that reflect enterprise brand standards and scale across teams.",
    keywords: [
      "corporate website design services", "enterprise web development", "B2B website development services",
      "business website design services", "top web design company USA",
    ],
  },

  // ── Mobile App Development ──────────────────────────────────────
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "mobile-app-development",
    canonicalPath: "/application-developement",
    shortDescription:
      "Native and cross-platform mobile apps designed for performance, retention, and scale.",
    keywords: [
      "mobile app development company USA", "app development services", "custom mobile app development",
      "hire app developers", "best mobile app development company", "app development agency USA",
      "enterprise app development services", "startup app development company",
    ],
  },
  {
    slug: "android-app-development",
    name: "Android App Development",
    category: "mobile-app-development",
    canonicalPath: "/android-application-development",
    shortDescription:
      "Kotlin and Java Android apps built for the Play Store and enterprise distribution.",
    keywords: [
      "Android app development company", "hire Android developers", "Android app developers near me",
      "custom Android app development", "enterprise Android app development",
    ],
  },
  {
    slug: "ios-app-development",
    name: "IOS App Development",
    category: "mobile-app-development",
    canonicalPath: "/ios-application-development",
    shortDescription:
      "Swift-based iOS apps engineered for App Store approval, speed, and polish.",
    keywords: [
      "iPhone app development company", "iOS app development company", "hire iOS developers",
      "Swift app development company", "custom iOS app development",
    ],
  },
  {
    slug: "hybrid-app-development",
    name: "Hybrid App Development",
    category: "mobile-app-development",
    canonicalPath: "/hybrid-application-development",
    shortDescription:
      "Flutter and React Native apps that ship to iOS and Android from a single codebase.",
    keywords: [
      "hybrid app development company", "Flutter app development company", "React Native app development",
      "cross platform app development", "startup app development company",
    ],
  },
  {
    slug: "mobile-app-testing",
    name: "Mobile App Testing",
    category: "mobile-app-development",
    canonicalPath: "/mobile-application-testing",
    shortDescription:
      "Manual and automated QA testing that catches issues before your app ships.",
    keywords: [
      "mobile app testing services", "app QA testing company", "automated mobile testing services",
      "mobile app quality assurance",
    ],
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    category: "mobile-app-development",
    canonicalPath: "/quality-assurance",
    shortDescription:
      "Dedicated QA engineering to keep releases stable across devices and platforms.",
    keywords: [
      "software quality assurance services", "QA testing company", "dedicated QA engineers",
      "enterprise app development services",
    ],
  },

  // ── Digital Marketing Service ───────────────────────────────────
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "digital-marketing",
    canonicalPath: "/digital-marketing-service",
    shortDescription:
      "Full-funnel digital marketing spanning SEO, paid media, social, and content.",
    keywords: [
      "digital marketing agency", "digital marketing services USA", "full service digital marketing company",
      "online marketing agency", "performance marketing agency",
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "digital-marketing",
    canonicalPath: "/search-engine-optimization",
    shortDescription:
      "White-hat SEO strategy built for long-term, sustainable organic growth.",
    keywords: [
      "SEO services company", "search engine optimization agency", "organic SEO services",
      "technical SEO services", "SEO agency near me", "ecommerce SEO services",
    ],
  },
  {
    slug: "ppc-management",
    name: "PPC Management",
    category: "digital-marketing",
    canonicalPath: "/pay-per-click-service",
    shortDescription:
      "Google Ads and paid media management focused on measurable return on ad spend.",
    keywords: [
      "PPC management company", "Google Ads management services", "paid search agency",
      "PPC agency near me", "performance marketing agency",
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "digital-marketing",
    canonicalPath: "/social-media-marketing-service",
    shortDescription:
      "Social strategy, content, and paid social campaigns that build engaged audiences.",
    keywords: [
      "social media marketing agency", "social media management services", "Instagram marketing agency",
      "social media advertising agency",
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    category: "digital-marketing",
    canonicalPath: "/local-search-engine-optimization",
    shortDescription:
      "Google Business Profile and local search optimization for map-pack visibility.",
    keywords: [
      "local SEO services", "Google Business Profile optimization", "local search marketing agency",
      "local SEO company near me",
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    category: "digital-marketing",
    canonicalPath: "/content-marketing-service",
    shortDescription:
      "Editorial content and content strategy that earns organic traffic and trust.",
    keywords: [
      "content marketing agency", "content marketing services", "SEO content writing services",
      "content strategy agency",
    ],
  },

  // ── Design & Branding ───────────────────────────────────────────
  {
    slug: "design-branding",
    name: "Design & Branding",
    category: "design-branding",
    canonicalPath: "/graphic-design-services",
    shortDescription:
      "Brand identity and design systems that give businesses a consistent, professional look.",
    keywords: [
      "branding agency", "brand identity design company", "graphic design agency",
      "corporate branding services", "creative design agency",
    ],
  },
  {
    slug: "logo-design",
    name: "Logo Design",
    category: "design-branding",
    canonicalPath: "/logo-design-services",
    shortDescription:
      "Distinctive, versatile logo design that anchors a brand's visual identity.",
    keywords: [
      "logo design company", "custom logo design services", "professional logo designer",
      "logo design agency near me",
    ],
  },
  {
    slug: "corporate-identity-design",
    name: "Corporate Identity Design",
    category: "design-branding",
    canonicalPath: "/corporate-stationery-design",
    shortDescription:
      "Cohesive corporate identity systems spanning stationery, guidelines, and brand assets.",
    keywords: [
      "corporate identity design services", "brand identity design company", "corporate stationery design",
      "brand guidelines design agency",
    ],
  },
  {
    slug: "brochure-design",
    name: "Brochure Design",
    category: "design-branding",
    canonicalPath: "/brochure-design-service",
    shortDescription:
      "Print and digital brochure design that communicates your offer clearly and persuasively.",
    keywords: [
      "brochure design company", "brochure design services", "marketing collateral design agency",
    ],
  },
  {
    slug: "animated-video",
    name: "Animated Videos",
    category: "design-branding",
    canonicalPath: "/animated-services",
    shortDescription:
      "Explainer and marketing animation that turns complex ideas into clear visual stories.",
    keywords: [
      "animated video production company", "explainer video company", "2D animation studio",
      "motion graphics agency",
    ],
  },
  {
    slug: "creative-agency",
    name: "Creative Agency",
    category: "design-branding",
    canonicalPath: "/creative-services",
    shortDescription:
      "End-to-end creative direction across branding, digital, and campaign design.",
    keywords: [
      "creative agency near me", "creative design agency", "full service creative agency",
    ],
  },

  // ── Cyber Security ───────────────────────────────────────────────
  {
    slug: "cyber-security",
    name: "Cyber Security",
    category: "cyber-security",
    canonicalPath: "/cyber-security-service",
    shortDescription:
      "Enterprise cyber security services protecting infrastructure, applications, and data.",
    keywords: [
      "cyber security company", "cyber security services USA", "managed security services provider",
      "enterprise cyber security company",
    ],
  },
  {
    slug: "vulnerability-assessment",
    name: "Vulnerability Assessment",
    category: "cyber-security",
    canonicalPath: "/vulnerability-assessment-service",
    shortDescription:
      "Systematic vulnerability scanning and assessment to close security gaps before attackers find them.",
    keywords: [
      "vulnerability assessment services", "vulnerability scanning company", "security risk assessment services",
    ],
  },
  {
    slug: "penetration-testing",
    name: "Penetration Testing",
    category: "cyber-security",
    canonicalPath: "/penetration-testing-service",
    shortDescription:
      "Manual penetration testing that simulates real-world attacks against your applications and network.",
    keywords: [
      "penetration testing company", "pen testing services", "ethical hacking services",
      "application penetration testing",
    ],
  },
  {
    slug: "network-security",
    name: "Network Security",
    category: "cyber-security",
    canonicalPath: "/network-security-service",
    shortDescription:
      "Network security architecture, monitoring, and hardening for on-prem and cloud environments.",
    keywords: [
      "network security services", "network security company", "firewall management services",
    ],
  },
  {
    slug: "cloud-security",
    name: "Cloud Security",
    category: "cyber-security",
    canonicalPath: "/cloud-security-service",
    shortDescription:
      "Cloud security posture management and hardening across AWS, Azure, and GCP environments.",
    keywords: [
      "cloud security services", "cloud security company", "AWS security services", "cloud security posture management",
    ],
  },
  {
    slug: "data-protection-compliance",
    name: "Data Protection & Compliance",
    category: "cyber-security",
    canonicalPath: "/data-protection-compliance-service",
    shortDescription:
      "Data protection, GDPR, and compliance advisory to keep sensitive information secure.",
    keywords: [
      "data protection compliance services", "GDPR compliance services", "data privacy consulting company",
    ],
  },
  {
    slug: "incident-response",
    name: "Incident Response",
    category: "cyber-security",
    canonicalPath: "/incident-response-service",
    shortDescription:
      "Rapid incident response and forensics to contain breaches and minimize business impact.",
    keywords: [
      "incident response services", "cyber security incident response company", "breach response services",
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCategory(categorySlug) {
  return SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
}
