// Generates unique per-page hero/overview/FAQ copy for a given
// (service, location) pair. Uses a deterministic hash to pick among several
// template variants so output is stable across builds but not identical
// mail-merge text across 1,178 pages.

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pick(arr, seed) {
  return arr[seed % arr.length];
}

export function buildLocationContent(service, location) {
  const { name: serviceName, shortDescription, keywords = [] } = service;
  const { cityName, country, blurb } = location;
  const seed = hash(`${service.slug}:${location.countryCode}:${location.citySlug}`);

  const title = `${serviceName} Services in ${cityName}`;

  // ── Meta description ──
  const metaDescVariants = [
    `${serviceName} services in ${cityName} — ${shortDescription} Trusted by businesses across ${country}. Get a free quote from Future IT Touch.`,
    `Looking for ${serviceName.toLowerCase()} in ${cityName}? Future IT Touch delivers ${shortDescription.toLowerCase()} Serving clients throughout ${country}.`,
    `Professional ${serviceName.toLowerCase()} for businesses in ${cityName}, ${country}. ${shortDescription} Request a free consultation today.`,
  ];
  const metaDescription = pick(metaDescVariants, seed);

  // ── Hero / banner description ──
  const heroDescVariants = [
    `Future IT Touch provides ${serviceName.toLowerCase()} for businesses throughout ${cityName}. ${cityName} is ${blurb}, and we help local companies compete with reliable, remote-delivered ${serviceName.toLowerCase()} backed by 23+ years of IT experience.`,
    `Helping companies throughout ${cityName} grow with professional ${serviceName.toLowerCase()}. As ${blurb}, ${cityName} businesses need a delivery partner who understands both technical execution and market pace — that's where Future IT Touch comes in.`,
    `Serving businesses across ${cityName} with dependable, remote-delivered ${serviceName.toLowerCase()}. ${cityName} is ${blurb}, and our team works as an extension of yours to help you move fast without compromising on quality.`,
  ];
  const bannerDesc = pick(heroDescVariants, seed + 1);

  // ── Overview paragraphs ──
  const introVariants = [
    `${serviceName} is a core part of how modern businesses in ${cityName} grow their digital presence. ${shortDescription}`,
    `Businesses across ${cityName}, ${country} rely on strong ${serviceName.toLowerCase()} to stay competitive in an increasingly digital-first market. ${shortDescription}`,
    `As ${blurb}, ${cityName} is home to businesses that expect fast, dependable ${serviceName.toLowerCase()}. ${shortDescription}`,
  ];
  const deliveryVariants = [
    `Future IT Touch provides remote development services for businesses in ${cityName}, combining transparent communication, agile delivery, and 23+ years of hands-on experience to keep every engagement on track.`,
    `We provide ${serviceName.toLowerCase()} for clients throughout ${cityName} on a fully remote-delivery model — no compromises on responsiveness, communication, or accountability.`,
    `Our team works with businesses across ${cityName} the same way we work with clients anywhere in ${country}: clear timelines, direct communication, and measurable outcomes.`,
  ];
  const growthVariants = [
    `Whether you're a startup finding product-market fit or an established company modernizing your digital operations, our ${serviceName.toLowerCase()} is built to support sustainable business growth in ${cityName}'s evolving digital economy.`,
    `From early-stage startups to established enterprises, businesses in ${cityName} choose Future IT Touch for ${serviceName.toLowerCase()} that's built to scale alongside their growth.`,
    `As digital transformation accelerates across ${country}, businesses in ${cityName} are investing in ${serviceName.toLowerCase()} to stay ahead — and our team is built to support that shift.`,
  ];

  const overviewParagraphs = [
    pick(introVariants, seed + 2),
    pick(deliveryVariants, seed + 3),
    {
      boldPrefix: `For Businesses in ${cityName}:`,
      text: `Trusted by businesses across ${cityName}, we combine local market awareness with global delivery standards — so you get ${serviceName.toLowerCase()} that fits how ${cityName} businesses actually operate.`,
    },
    pick(growthVariants, seed + 4),
  ];

  // ── FAQs: shared service-level questions + location-flavored ones ──
  const genericFaqs = [
    {
      title: `What does your ${serviceName.toLowerCase()} include?`,
      description: `${shortDescription} We scope every engagement around your specific business goals rather than a one-size-fits-all package.`,
    },
    {
      title: `How much does ${serviceName.toLowerCase()} cost?`,
      description: `Pricing depends on project scope, complexity, and timeline. Contact us for a free, no-obligation quote tailored to your requirements.`,
    },
    {
      title: `How long does a typical ${serviceName.toLowerCase()} project take?`,
      description: `Timelines vary by scope, but most engagements are scoped with clear milestones during the discovery phase so you always know what to expect and when.`,
    },
    {
      title: `Do you offer ongoing support after launch?`,
      description: `Yes, we offer post-delivery support and maintenance packages to keep your ${serviceName.toLowerCase()} results performing well over time.`,
    },
  ];

  const locationFaqs = [
    {
      title: `Do you provide ${serviceName.toLowerCase()} for businesses in ${cityName}?`,
      description: `Yes. Future IT Touch provides remote ${serviceName.toLowerCase()} for clients throughout ${cityName} and the wider ${country} market, with the same delivery standards we apply worldwide.`,
    },
    {
      title: `Can I hire a remote ${serviceName.toLowerCase()} team based outside ${cityName}?`,
      description: `Absolutely — our delivery model is fully remote, so businesses in ${cityName} get direct access to our team without needing a local office. Most clients work with us this way.`,
    },
    {
      title: `Do you understand the local business environment in ${cityName}?`,
      description: `We work with clients across ${country} regularly and tailor our approach to the market context of ${cityName} — ${blurb} — so recommendations are grounded in how businesses there actually operate.`,
    },
    {
      title: `What industries do you work with in ${cityName}?`,
      description: `We work across a wide range of industries in ${cityName} and throughout ${country}, adapting our ${serviceName.toLowerCase()} approach to each client's specific market and audience.`,
    },
  ];

  const faqData = [...genericFaqs, ...locationFaqs];

  // ── Breadcrumbs ── (Country and City have no dedicated hub page yet, so
  // they're shown as plain trail labels rather than links to a 404)
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: country, path: null },
    { name: serviceName, path: service.canonicalPath },
    { name: cityName, path: null },
  ];

  return {
    title,
    metaDescription,
    bannerDesc,
    overviewParagraphs,
    faqData,
    breadcrumbs,
    keywords,
  };
}
