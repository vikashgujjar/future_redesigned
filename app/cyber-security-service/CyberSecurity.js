"use client";
import securityImg from "../Assets/Security.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaShieldAlt, FaBug, FaLock, FaCloud, FaDatabase,
  FaHeadset, FaSyncAlt, FaSearch, FaExclamationTriangle,
  FaNetworkWired, FaUserShield, FaFileAlt, FaFingerprint,
  FaRupeeSign, FaCheckCircle, FaLayerGroup,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt />,
    title: "Compliance First — ₹25K–50K/Month",
    description:
      "Perfect for small businesses starting their compliance journey. Covers DPDPA 2023 readiness, CERT-In controls, security policy templates, and basic employee security awareness training with monthly compliance reporting.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Plus — ₹50K–1.5L/Month",
    description:
      "Built for growing tech companies and e-commerce businesses. Includes 24/7 SOC monitoring, EDR endpoint protection, incident detection & response, quarterly vulnerability assessments, and 4 hours of vCISO advisory per month.",
  },
  {
    icon: <FaLock />,
    title: "Enterprise Shield — ₹1.5L+/Month",
    description:
      "For regulated sectors — BFSI, healthcare, and manufacturing. Full MSSP with dedicated SOC team, advanced compliance (ISO 27001, PCI-DSS, RBI), bi-annual penetration testing, and 24/7 dedicated vCISO support with board-level reporting.",
  },
  {
    icon: <FaBug />,
    title: "Vulnerability Assessment & Penetration Testing",
    description:
      "OSCP-certified engineers conduct black-box, grey-box, and white-box testing across web, mobile, API, network, and cloud targets — delivering risk-ranked findings with step-by-step remediation guidance.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Security Posture Management",
    description:
      "Continuous AWS, Azure, and GCP configuration auditing — covering IAM policy reviews, storage misconfiguration detection, container security, Kubernetes hardening, and cloud-native SIEM log management.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 SOC Monitoring & Incident Response",
    description:
      "Round-the-clock Security Operations Centre with real-time threat detection, alert triage, digital forensics, root cause analysis, and post-incident hardening — all with Indian data residency.",
  },
  {
    icon: <FaUserShield />,
    title: "vCISO & Security Awareness Training",
    description:
      "Virtual CISO advisory at a fraction of full-time cost — covering security roadmap, phishing simulations, developer secure coding workshops, vendor risk management, and board-level security dashboards.",
  },
  {
    icon: <FaDatabase />,
    title: "DPDPA 2023 & Compliance-as-a-Service",
    description:
      "End-to-end DPDPA 2023, CERT-In, ISO 27001, PCI-DSS, and RBI compliance programmes — gap analysis, policy development, control implementation, employee training, and continuous audit-readiness monitoring.",
  },
];

const bizCards = [
  {
    title: "Tricity Hub — 40% Cost Advantage",
    desc: "Our Chandigarh Tricity operations deliver enterprise-grade SOC at 40% lower cost than Mumbai or Delhi MSSPs — every rupee of that arbitrage is passed directly to our SME clients.",
    icons: <FaRupeeSign className="text-white w-8 h-8" />,
  },
  {
    title: "Regulation-First Approach",
    desc: "Deep DPDPA 2023 and CERT-In expertise baked into every package. Compliance-as-a-Service is not a bolt-on — it is the foundation of everything we deliver for Indian businesses.",
    icons: <FaFileAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Remote Onboarding in 72 Hours",
    desc: "Cloud-native SOC with Indian data residency and a single client dashboard. We go from contract signing to active monitoring in 72 hours — no site visits, no complex procurement.",
    icons: <FaCloud className="text-white w-8 h-8" />,
  },
  {
    title: "Month-to-Month, No Lock-In",
    desc: "All packages available on 30-day rolling contracts. No complex enterprise sales cycles. We earn your business every month through results, not contractual obligation.",
    icons: <FaCheckCircle className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "500+",
    title: "Security Assessments Completed",
    desc: "500+ VAPT engagements across web, mobile, API, network, and cloud — risk-ranked reports with step-by-step remediation roadmaps delivered to Indian SMEs.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    count: "40%",
    title: "Lower Cost Than Metro MSSPs",
    desc: "Our Chandigarh Tricity hub delivers enterprise-grade security operations at 40% lower overhead — and we pass every rupee of that saving directly to our clients.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    count: "200+",
    title: "Indian SMEs Protected",
    desc: "200+ small and medium enterprises across India protected with 24/7 SOC monitoring, DPDPA/CERT-In compliance programmes, and proactive threat response.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
  },
  {
    count: "4",
    title: "Compliance Frameworks Covered",
    desc: "DPDPA 2023, CERT-In controls, ISO 27001, and sector-specific (RBI, PCI-DSS, HIPAA) — built into every package, not charged separately.",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=800&q=80",
  },
];

const platforms = [
  { icon: <FaBug className="text-white w-6 h-6" />,          title: "Vulnerability Assessment (Nessus / OpenVAS)",    desc: "Industry-standard scanners for identifying and prioritising vulnerabilities across on-premise and cloud infrastructure." },
  { icon: <FaSearch className="text-white w-6 h-6" />,        title: "Penetration Testing (Burp Suite / Metasploit)",  desc: "Professional-grade tools used by our OSCP-certified engineers for web, API, and network penetration testing engagements." },
  { icon: <FaDatabase className="text-white w-6 h-6" />,      title: "SIEM & Log Management (Splunk / ELK Stack)",    desc: "Real-time security event correlation, log aggregation, and threat detection across all endpoints and cloud workloads." },
  { icon: <FaShieldAlt className="text-white w-6 h-6" />,     title: "Endpoint Detection & Response (CrowdStrike)",   desc: "Next-generation EDR platform providing real-time endpoint visibility, threat hunting, and rapid automated containment." },
  { icon: <FaCloud className="text-white w-6 h-6" />,         title: "Cloud Security (AWS Security Hub / Defender)",  desc: "Native cloud security posture management across AWS, Azure, and GCP — misconfigurations caught before they become breaches." },
  { icon: <FaNetworkWired className="text-white w-6 h-6" />,  title: "Network Security (Snort / Suricata IDS/IPS)",   desc: "Open-source intrusion detection and prevention systems providing deep packet inspection and real-time network threat response." },
];

const techCategories = [
  {
    title: "Offensive Security",
    techs: [
      { name: "Kali Linux",    icon: "https://cdn.simpleicons.org/kalilinux" },
      { name: "OWASP ZAP",     icon: "https://cdn.simpleicons.org/owasp" },
      { name: "Wireshark",     icon: "https://cdn.simpleicons.org/wireshark" },
      { name: "Metasploit",    icon: "https://cdn.simpleicons.org/metasploit" },
    ],
  },
  {
    title: "SIEM & Monitoring",
    techs: [
      { name: "Splunk",        icon: "https://cdn.simpleicons.org/splunk" },
      { name: "Elastic SIEM",  icon: "https://cdn.simpleicons.org/elastic" },
      { name: "Grafana",       icon: "https://cdn.simpleicons.org/grafana" },
    ],
  },
  {
    title: "Cloud Security",
    techs: [
      { name: "AWS",           icon: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Azure",         icon: "https://cdn.simpleicons.org/microsoftazure" },
      { name: "Google Cloud",  icon: "https://cdn.simpleicons.org/googlecloud" },
      { name: "HashiCorp Vault", icon: "https://cdn.simpleicons.org/vault" },
    ],
  },
  {
    title: "Infrastructure",
    techs: [
      { name: "Docker",        icon: "https://cdn.simpleicons.org/docker" },
      { name: "Kubernetes",    icon: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Linux",         icon: "https://cdn.simpleicons.org/linux" },
      { name: "Ansible",       icon: "https://cdn.simpleicons.org/ansible" },
    ],
  },
];

const faqData = [
  {
    title: "Do I need cyber security services as a small Indian business?",
    description:
      "Yes. DPDPA 2023 and CERT-In regulations now apply to all businesses processing personal data of Indian citizens, regardless of size. Non-compliance can attract penalties up to ₹250 crore. Our Compliance First package is designed to make enterprise-grade protection affordable for SMEs.",
  },
  {
    title: "What is DPDPA 2023 and does it apply to my business?",
    description:
      "The Digital Personal Data Protection Act 2023 applies to any organisation processing personal data of Indian citizens — including your employees' and customers' data. We provide an end-to-end DPDPA compliance programme covering gap assessment, policy development, consent management, and breach notification playbooks.",
  },
  {
    title: "What are CERT-In compliance requirements for MSMEs?",
    description:
      "CERT-In mandates 15 essential security controls for Indian businesses, including incident reporting within 6 hours, log retention for 180 days, and synchronised time sources. Our Security Plus and Enterprise Shield packages cover all CERT-In requirements with continuous monitoring.",
  },
  {
    title: "Why is your pricing lower than other security providers?",
    description:
      "Our Chandigarh Tricity hub operates at 40% lower overhead than metro-based MSSPs. We have access to deep cybersecurity engineering talent without metro cost structures — and we pass every rupee of that arbitrage directly to our SME clients.",
  },
  {
    title: "How quickly can you onboard our organisation?",
    description:
      "Our remote-first delivery model allows us to onboard most SMEs within 72 hours — from contract signing to active SOC monitoring, policy framework setup, agent deployment, and cloud connector configuration.",
  },
  {
    title: "What is a vCISO and do we need one?",
    description:
      "A virtual CISO (vCISO) provides strategic security leadership at a fraction of the ₹50L+ annual cost of a full-time CISO. Our vCISO covers security roadmap, board reporting, vendor risk, compliance governance, and incident response leadership — all on a flexible, fractional basis.",
  },
  {
    title: "Can we cancel month-to-month without penalties?",
    description:
      "Yes. All packages are available on 30-day rolling contracts with no long-term lock-in. We earn your business every month through results and service quality, not contractual clauses.",
  },
  {
    title: "Do you cover cloud environments like AWS, Azure, and GCP?",
    description:
      "Absolutely. Our Security Plus and Enterprise Shield packages include continuous cloud security posture management (CSPM) across AWS, Azure, and GCP — covering IAM policy, storage misconfiguration, workload protection, and cloud SIEM integration with Indian data residency.",
  },
  {
    title: "Which compliance frameworks do you specialise in?",
    description:
      "We have deep expertise in DPDPA 2023, CERT-In controls, ISO 27001, PCI-DSS, RBI cyber security framework, and HIPAA. Each compliance track is pre-built as a module — not a generic checklist — and is sector-specific to your industry vertical.",
  },
  {
    title: "What happens when a security incident occurs?",
    description:
      "Our 24/7 SOC immediately escalates confirmed incidents — containment within minutes, parallel forensic investigation, client communication throughout, and a post-incident hardening report to eliminate the root cause and prevent recurrence.",
  },
];

const CyberSecurity = () => (
  <CommonServicePage
    bannerImg={securityImg}
    bannerTitle="Cyber Security Services for Indian SMEs"
    bannerDesc="A Tricity-based Managed Security Service Provider (MSSP) delivering enterprise-grade security, simplified compliance, and remote-first delivery — built specifically for Indian small and medium enterprises at 40% lower cost than metro-based providers. DPDPA 2023 & CERT-In compliance built into every package."

    overviewImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    overviewImageAlt="Cyber Security Services for Indian SMEs"
    overviewBadge="Tricity-Based MSSP · Serving SMEs Pan-India"
    overviewHeading="Enterprise Cyber Security, Built for"
    overviewHighlight="Indian Small & Medium Enterprises"
    overviewParagraphs={[
      "At Future IT Touch, we operate as a Tricity-based MSSP — delivering enterprise-grade cyber security services at SME-friendly pricing. Our Chandigarh hub gives us a 40% cost advantage over metro cities, and we pass every rupee of that saving directly to our clients.",
      "We offer three productized packages — Compliance First (₹25K–50K/month), Security Plus (₹50K–1.5L/month), and Enterprise Shield (₹1.5L+/month) — designed to match your current stage and scale as your business grows.",
      "Every package is built around Indian regulations: DPDPA 2023, CERT-In controls, ISO 27001, and sector-specific frameworks like RBI and PCI-DSS. Compliance-as-a-Service is not a bolt-on — it is baked into the foundation of everything we deliver.",
    ]}
    overviewCtaText="Get Free Security Assessment"

    featuresBadge="Our Security Packages & Services"
    featuresTitle="Three Simple Packages — Priced for"
    featuresTitleHighlight="Indian SMEs"
    featuresStickyImg="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    features={features}

    bizBadge="Why Choose Us"
    bizHeading="Built for the"
    bizHighlight="Indian Context"
    bizCards={bizCards}

    sliderTitle="Protecting Indian Businesses with Enterprise-Grade Security"
    sliderCards={sliderCards}

    platformsTitle="Security Tools & Platforms We Use"
    platforms={platforms}

    techBadge="Our Security Tech Stack"
    techHeading="Tools & Technologies"
    techHeadingHighlight="We Operate With"
    techDescription="We use industry-standard security tools and platforms — from offensive security and SIEM to cloud posture management and EDR — to deliver comprehensive protection for Indian SMEs."
    techCategories={techCategories}

    faqTitle="Frequently Asked Questions — Cyber Security"
    faqData={faqData}
  />
);

export default CyberSecurity;
