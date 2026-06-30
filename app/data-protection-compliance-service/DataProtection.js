"use client";
import securityImg from "../Assets/Security.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaFileAlt, FaShieldAlt, FaLock, FaDatabase, FaUserShield,
  FaCheckCircle, FaExclamationTriangle, FaGlobe, FaSearch,
  FaClipboardList, FaBuilding, FaIndustry,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt />,
    title: "DPDPA 2023 Compliance Programme",
    description:
      "End-to-end Digital Personal Data Protection Act 2023 compliance — Data Principal rights management, Data Fiduciary obligations, consent management framework, Data Protection Officer (DPO) support, privacy notices, and breach notification playbooks.",
  },
  {
    icon: <FaShieldAlt />,
    title: "CERT-In Controls Implementation",
    description:
      "Full implementation of all 15 CERT-In mandatory controls for Indian businesses — 6-hour incident reporting, 180-day log retention, NTP synchronisation, vulnerability management, designated CISO/POC, and continuous monitoring.",
  },
  {
    icon: <FaGlobe />,
    title: "ISO 27001 Certification Support",
    description:
      "Gap assessment, ISMS design, Statement of Applicability, risk treatment plan, control implementation, internal audit, and management review — everything required to achieve and maintain ISO 27001 certification with your chosen certification body.",
  },
  {
    icon: <FaLock />,
    title: "PCI-DSS Compliance",
    description:
      "PCI-DSS v4.0 compliance programme for businesses processing cardholder data — scope definition, gap assessment, control implementation across all 12 PCI requirements, SAQ completion support, and QSA engagement coordination.",
  },
  {
    icon: <FaBuilding />,
    title: "RBI Cyber Security Framework",
    description:
      "Compliance support for RBI's Cyber Security Framework for banks and NBFCs — covering IT governance, cyber crisis management, IT risk framework, continuous surveillance, and the annual cyber security audit requirements.",
  },
  {
    icon: <FaClipboardList />,
    title: "Privacy Policy & Data Governance",
    description:
      "Drafting and review of privacy policies, data processing agreements (DPAs), Data Fiduciary-Processor contracts, records of processing activities (ROPA), and data transfer impact assessments aligned to DPDPA 2023.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Audit Readiness & Evidence Management",
    description:
      "Ongoing compliance programme management — evidence collection, control testing, audit scheduling, remediation tracking, and annual review — keeping you audit-ready throughout the year, not just before an assessment.",
  },
];

const bizCards = [
  {
    title: "DPDPA 2023 First-Movers",
    desc: "We were among the first Indian MSSPs to build a complete DPDPA 2023 compliance programme. Our framework covers all obligations of Indian Data Fiduciaries — from consent management to breach notification timelines.",
    icons: <FaFileAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Compliance-as-a-Service",
    desc: "We manage your entire compliance programme as an ongoing service — policy updates when regulations change, continuous control monitoring, evidence collection, and annual review cycles. You focus on your business; we keep you compliant.",
    icons: <FaCheckCircle className="text-white w-8 h-8" />,
  },
  {
    title: "Sector-Specific Expertise",
    desc: "Pre-built compliance modules for BFSI (RBI, PCI-DSS), healthcare, e-commerce, manufacturing, and SaaS — tailored to your industry's specific regulatory requirements, not generic templates.",
    icons: <FaIndustry className="text-white w-8 h-8" />,
  },
  {
    title: "Legal + Technical Coverage",
    desc: "Compliance requires both legal expertise (policy drafting, DPA agreements, privacy notices) and technical controls (encryption, access controls, logging). We provide both in a single integrated programme.",
    icons: <FaGlobe className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "100+",
    title: "Compliance Programmes Delivered",
    desc: "100+ DPDPA, CERT-In, ISO 27001, and PCI-DSS compliance programmes delivered to Indian SMEs — from initial gap assessment to certification and ongoing maintenance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    count: "4",
    title: "Compliance Frameworks Mastered",
    desc: "DPDPA 2023, CERT-In controls, ISO 27001, and sector-specific frameworks (RBI, PCI-DSS, HIPAA) — pre-built as modular programmes, not custom-built from scratch for each client.",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=800&q=80",
  },
  {
    count: "₹250Cr",
    title: "Maximum DPDPA Penalty Avoided",
    desc: "Non-compliance with DPDPA 2023 can attract penalties up to ₹250 crore per violation. Our compliance programme eliminates that regulatory risk for Indian businesses of all sizes.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
  },
  {
    count: "72h",
    title: "DPDPA Breach Notification Readiness",
    desc: "DPDPA 2023 requires breach notification to DPBI within 72 hours. Our incident response integration with the compliance programme ensures you can meet this deadline without scrambling.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

const platforms = [
  { icon: <FaFileAlt className="text-white w-6 h-6" />,      title: "DPDPA 2023 Framework",       desc: "Our proprietary DPDPA compliance framework covers all Data Fiduciary obligations — consent, processing, storage, breach notification, and DPO support." },
  { icon: <FaShieldAlt className="text-white w-6 h-6" />,    title: "CERT-In Controls Toolkit",    desc: "Pre-built implementation guides for all 15 CERT-In essential controls — mapped to specific technical configurations and policy templates." },
  { icon: <FaGlobe className="text-white w-6 h-6" />,        title: "ISO 27001 ISMS Templates",    desc: "Complete ISMS documentation library — policies, procedures, risk registers, SoA templates, and audit checklists aligned to ISO 27001:2022." },
  { icon: <FaDatabase className="text-white w-6 h-6" />,     title: "GRC Platform Integration",    desc: "Integration with GRC platforms (OneTrust, ServiceNow GRC) for automated evidence collection, control testing, and compliance dashboard reporting." },
  { icon: <FaLock className="text-white w-6 h-6" />,         title: "DPA & Privacy Policy Drafting", desc: "Legal-technical drafting of Data Processing Agreements, privacy notices, ROPA, cross-border transfer agreements, and consent management frameworks." },
  { icon: <FaClipboardList className="text-white w-6 h-6" />, title: "Audit Evidence Management",  desc: "Structured evidence collection and management system — ensuring every control has documented evidence ready for internal or external audit at all times." },
];

const techCategories = [
  {
    title: "Compliance Frameworks",
    techs: [
      { name: "ISO 27001",    icon: "https://cdn.simpleicons.org/iso" },
      { name: "OWASP",        icon: "https://cdn.simpleicons.org/owasp" },
      { name: "Elastic SIEM", icon: "https://cdn.simpleicons.org/elastic" },
    ],
  },
  {
    title: "Security Controls",
    techs: [
      { name: "Splunk",       icon: "https://cdn.simpleicons.org/splunk" },
      { name: "Vault",        icon: "https://cdn.simpleicons.org/vault" },
      { name: "Grafana",      icon: "https://cdn.simpleicons.org/grafana" },
      { name: "Ansible",      icon: "https://cdn.simpleicons.org/ansible" },
    ],
  },
  {
    title: "Cloud Compliance",
    techs: [
      { name: "AWS",          icon: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Azure",        icon: "https://cdn.simpleicons.org/microsoftazure" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
      { name: "Terraform",    icon: "https://cdn.simpleicons.org/terraform" },
    ],
  },
];

const faqData = [
  {
    title: "Does DPDPA 2023 apply to my business?",
    description:
      "DPDPA 2023 applies to any entity that processes digital personal data of Indian citizens — regardless of business size. This includes employee data, customer data, and user data processed through your website or app. Penalties for non-compliance range from ₹10 crore to ₹250 crore per violation.",
  },
  {
    title: "What are the 15 CERT-In essential controls?",
    description:
      "CERT-In's essential controls include: 6-hour incident reporting, 180-day log retention, NTP time synchronisation, mandatory security audit, designated CISO and security contact, vulnerability management programme, network traffic monitoring, and backup and recovery processes — among others.",
  },
  {
    title: "How long does ISO 27001 certification take?",
    description:
      "For most Indian SMEs, achieving ISO 27001 certification takes 6–12 months from initial gap assessment to certification audit. This includes ISMS design, control implementation, internal audit, and management review before the external Stage 1 and Stage 2 certification audits.",
  },
  {
    title: "What is the difference between DPDPA 2023 and GDPR?",
    description:
      "DPDPA 2023 is India's data protection law modelled loosely after GDPR but with significant differences — no right to data portability in the initial framework, a consent-first approach, specific Indian Data Principal rights, and penalties enforced by the Data Protection Board of India (DPBI).",
  },
  {
    title: "Do you provide a DPO (Data Protection Officer) as a service?",
    description:
      "Yes. For organisations that need a DPO under DPDPA 2023 but don't have one in-house, we provide a virtual DPO service — handling compliance oversight, breach assessment, regulatory engagement, and data protection impact assessments on a fractional basis.",
  },
  {
    title: "Is compliance a one-time project or ongoing?",
    description:
      "Compliance is continuous. Regulations change (DPDPA rules are still being notified), your systems and data flows evolve, and auditors expect evidence of ongoing controls — not a certificate from three years ago. Our Compliance-as-a-Service model keeps you continuously compliant.",
  },
  {
    title: "What happens if we have a data breach under DPDPA 2023?",
    description:
      "You must notify the Data Protection Board of India (DPBI) within 72 hours and affected Data Principals promptly. Our incident response integration ensures breach notification readiness — with pre-drafted notification templates, breach assessment procedures, and DPO coordination built into the programme.",
  },
];

const DataProtection = () => (
  <CommonServicePage
    bannerImg={securityImg}
    bannerTitle="Data Protection & Compliance Services"
    bannerDesc="DPDPA 2023, CERT-In controls, ISO 27001, PCI-DSS, and RBI compliance programmes delivered as a managed service for Indian businesses — gap assessment, policy development, control implementation, ongoing monitoring, and audit readiness. Stay compliant, always."

    overviewImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    overviewImageAlt="Data Protection & Compliance Services"
    overviewBadge="Cyber Security · Compliance-as-a-Service"
    overviewHeading="Indian Regulatory Compliance"
    overviewHighlight="Built In, Not Bolted On"
    overviewParagraphs={[
      "DPDPA 2023 is now in force. CERT-In controls are mandatory. ISO 27001 is increasingly required by enterprise clients and government vendors. Non-compliance is no longer a theoretical risk — it is a live business and legal liability for every Indian organisation that processes personal data.",
      "We provide Compliance-as-a-Service — managing your entire compliance programme across DPDPA 2023, CERT-In, ISO 27001, PCI-DSS, and sector-specific frameworks (RBI, HIPAA) as an ongoing managed service. Our team handles gap assessments, policy drafting, control implementation, employee training, evidence collection, and audit preparation.",
      "Unlike legal consultants who deliver a report and leave, we stay with you — keeping controls active, updating policies when regulations change, and providing year-round audit readiness so compliance is never a last-minute scramble.",
    ]}
    overviewCtaText="Request a Free Compliance Gap Assessment"

    featuresBadge="Our Compliance Services"
    featuresTitle="End-to-End Compliance Across"
    featuresTitleHighlight="All Indian Regulations"
    featuresStickyImg="https://images.unsplash.com/photo-1573164713712-03790a178651?w=800&q=80"
    features={features}

    bizBadge="Why Choose Us"
    bizHeading="Compliance Expertise That"
    bizHighlight="Covers Legal & Technical"
    bizCards={bizCards}

    sliderTitle="Compliance Outcomes That Protect Your Business"
    sliderCards={sliderCards}

    platformsTitle="Our Compliance Tools & Frameworks"
    platforms={platforms}

    techBadge="Our Compliance Tech Stack"
    techHeading="Frameworks & Technologies"
    techHeadingHighlight="We Implement"
    techDescription="We implement compliance controls using industry-standard security tools, GRC platforms, and cloud-native policy engines — ensuring your compliance programme has technical teeth, not just paper policies."
    techCategories={techCategories}

    faqTitle="Frequently Asked Questions — Data Protection & Compliance"
    faqData={faqData}
  />
);

export default DataProtection;
