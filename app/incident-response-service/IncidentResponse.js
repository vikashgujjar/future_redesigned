"use client";
const securityImg = "/Assets/stock/photo-1526374965328-7f61d4dc18c5.webp";
import CommonServicePage from "../components/CommonServicePage";
import { isSectionDisabled } from "../lib/loadServicePage";
import {
  FaExclamationTriangle, FaShieldAlt, FaSearch, FaLock,
  FaDatabase, FaHeadset, FaSyncAlt, FaFileAlt, FaCheckCircle,
  FaUserShield, FaCloud, FaNetworkWired,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHeadset />,
    title: "24/7 Incident Detection & Escalation",
    description:
      "Our SOC monitors your environment round-the-clock. When a confirmed incident is detected — ransomware activation, data exfiltration, account compromise — our incident response team is escalated immediately with a target 15-minute response time.",
  },
  {
    icon: <FaLock />,
    title: "Rapid Containment & Isolation",
    description:
      "Immediate threat containment — isolating compromised endpoints, revoking compromised credentials, blocking attacker command-and-control (C2) communication, and preventing lateral movement before the attacker can expand their foothold.",
  },
  {
    icon: <FaSearch />,
    title: "Digital Forensics & Investigation",
    description:
      "Full-scope digital forensic investigation — memory acquisition, disk imaging, log analysis, malware reverse engineering, attacker timeline reconstruction, and identification of the initial access vector to understand exactly what happened.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Ransomware Response & Recovery",
    description:
      "Specialised ransomware response — determining encryption scope, identifying variant, assessing decryption options, coordinating with law enforcement (CERT-In, cybercrime cells), and managing recovery from clean backups with integrity verification.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Breach Assessment",
    description:
      "Determining the scope, nature, and impact of a data breach — identifying what personal data was accessed or exfiltrated, assessing DPDPA 2023 breach notification obligations, and preparing the 72-hour breach notification to DPBI.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Incident Response",
    description:
      "Specialised incident response for cloud environments — AWS, Azure, and GCP — covering compromised IAM credentials, S3 data exfiltration, cryptomining infections, container compromise, and cloud-native log forensics.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Post-Incident Hardening & Reporting",
    description:
      "After containment and recovery, we conduct root cause analysis and implement hardening measures to prevent recurrence — delivering a post-incident report with timeline, impact assessment, root cause, and remediation roadmap.",
  },
];

const bizCards = [
  {
    title: "15-Minute Response Time",
    desc: "When a confirmed incident is declared, our incident response team begins active response within 15 minutes — not hours. Every minute of attacker dwell time increases damage. We treat incidents like emergencies because they are.",
    icons: <FaHeadset className="text-white w-8 h-8" />,
  },
  {
    title: "DPDPA Breach Notification Ready",
    desc: "DPDPA 2023 requires breach notification to DPBI within 72 hours. We have pre-built breach notification workflows and templates — so when an incident occurs, compliance obligations are handled alongside technical response.",
    icons: <FaFileAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Indian Forensics Jurisdiction",
    desc: "Our forensic investigations are conducted under Indian law — evidence preserved in formats admissible in Indian courts, coordination with local cybercrime cells and CERT-In, and understanding of Indian cybercrime prosecution processes.",
    icons: <FaSearch className="text-white w-8 h-8" />,
  },
  {
    title: "Ransomware Recovery Experience",
    desc: "We have managed ransomware incidents for Indian SMEs — from initial detection through decryption assessment, backup recovery, and system rebuild. We know what works and what costs time when every hour of downtime affects your business.",
    icons: <FaExclamationTriangle className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "< 15min",
    title: "Incident Response Activation",
    desc: "Our target is to have an active incident responder engaged within 15 minutes of a confirmed incident declaration — 24 hours a day, 365 days a year.",
    image: "/Assets/stock/photo-1526374965328-7f61d4dc18c5.webp",
  },
  {
    count: "50+",
    title: "Incidents Managed",
    desc: "50+ security incidents managed for Indian SMEs — ransomware, data breaches, BEC, cloud compromise, and insider threats — with full forensic investigation and post-incident hardening.",
    image: "/Assets/stock/photo-1563986768609-322da13575f3.webp",
  },
  {
    count: "72h",
    title: "DPDPA Breach Notification",
    desc: "Every incident response engagement includes DPDPA 2023 breach notification assessment — ensuring you meet the 72-hour regulatory notification obligation without missing the deadline.",
    image: "/Assets/stock/photo-1614064641938-3bbee52942c7.webp",
  },
  {
    count: "100%",
    title: "Root Cause Identified",
    desc: "In every incident engagement, we identify the root cause and initial access vector — giving your team the knowledge to prevent recurrence, not just recover from the current incident.",
    image: "/Assets/stock/photo-1573164713712-03790a178651.webp",
  },
];

const platforms = [
  { icon: <FaSearch className="text-white w-6 h-6" />,          title: "Volatility (Memory Forensics)",   desc: "Open-source framework for memory forensics — extracting running processes, network connections, and injected code from memory captures." },
  { icon: <FaDatabase className="text-white w-6 h-6" />,        title: "Splunk / Elastic SIEM",           desc: "SIEM platforms for rapid log correlation, attacker timeline reconstruction, and evidence aggregation during active incidents." },
  { icon: <FaNetworkWired className="text-white w-6 h-6" />,    title: "Wireshark / NetworkMiner",        desc: "Network packet capture and analysis for identifying exfiltration channels, C2 beacons, and attacker communication patterns." },
  { icon: <FaShieldAlt className="text-white w-6 h-6" />,       title: "YARA / Sigma Rules",              desc: "Malware detection and threat hunting rules — identifying malware samples, attacker tools, and attack patterns across the environment." },
  { icon: <FaExclamationTriangle className="text-white w-6 h-6" />, title: "Autopsy / FTK (Disk Forensics)", desc: "Forensic analysis platforms for disk image examination, deleted file recovery, and timeline analysis of compromised systems." },
  { icon: <FaCloud className="text-white w-6 h-6" />,           title: "AWS CloudTrail / Azure Logs",     desc: "Cloud audit log analysis for investigating cloud incidents — identifying compromised IAM keys, unauthorised API calls, and data exfiltration." },
];

const techCategories = [
  {
    title: "Forensics Tools",
    techs: [
      { name: "Kali Linux",   icon: "https://cdn.simpleicons.org/kalilinux" },
      { name: "Wireshark",    icon: "https://cdn.simpleicons.org/wireshark" },
      { name: "Elastic SIEM", icon: "https://cdn.simpleicons.org/elastic" },
      { name: "Splunk",       icon: "https://cdn.simpleicons.org/splunk" },
    ],
  },
  {
    title: "Threat Detection",
    techs: [
      { name: "OWASP",        icon: "https://cdn.simpleicons.org/owasp" },
      { name: "Grafana",      icon: "https://cdn.simpleicons.org/grafana" },
      { name: "Ansible",      icon: "https://cdn.simpleicons.org/ansible" },
    ],
  },
  {
    title: "Cloud Investigation",
    techs: [
      { name: "AWS",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
      { name: "Oracle Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "IBM Cloud" },
      { name: "DigitalOcean", icon: "https://cdn.simpleicons.org/digitalocean" },
      { name: "Linode (Akamai Cloud)", icon: "https://cdn.simpleicons.org/akamai" },
      { name: "Vultr",        icon: "https://cdn.simpleicons.org/vultr" },
      { name: "Alibaba Cloud", icon: "https://cdn.simpleicons.org/alibabacloud" },
      { name: "VMware Cloud", icon: "https://cdn.simpleicons.org/vmware" },
      { name: "OVHcloud",     icon: "https://cdn.simpleicons.org/ovh" },
      { name: "Other Cloud Providers" },
      { name: "Terraform",    icon: "https://cdn.simpleicons.org/terraform" },
    ],
  },
];

const faqData = [
  {
    title: "What should we do immediately when we suspect a security incident?",
    description:
      "Call your incident response team immediately — do not shut down systems (this destroys forensic evidence), do not delete logs, do not communicate over potentially compromised email, and do not pay any ransom without expert advice. If you are a Future IT Touch client, call our 24/7 incident hotline.",
  },
  {
    title: "How quickly can you respond to an incident?",
    description:
      "We target activation of an active incident responder within 15 minutes of a confirmed incident declaration for clients on our Security Plus and Enterprise Shield packages — 24 hours a day, 7 days a week, 365 days a year.",
  },
  {
    title: "Do you handle ransomware incidents?",
    description:
      "Yes. We have managed ransomware incidents for Indian SMEs — including initial containment, variant identification, ransom negotiation advisory (we do not recommend paying without expert assessment), decryption options review, and coordinated recovery from clean backups.",
  },
  {
    title: "What is the DPDPA 2023 breach notification requirement?",
    description:
      "If personal data is breached, DPDPA 2023 requires notification to the Data Protection Board of India (DPBI) within 72 hours, and notification to affected Data Principals promptly. Our incident response engagement includes breach notification assessment and notification preparation as a standard component.",
  },
  {
    title: "Can forensic evidence from your investigations be used in Indian courts?",
    description:
      "Yes. We preserve digital forensic evidence in accordance with Indian Evidence Act and IT Act requirements — using write-blocking hardware, chain-of-custody documentation, and hash verification — to ensure evidence is admissible if you pursue legal action through Indian courts or cybercrime cells.",
  },
  {
    title: "How long does an incident response engagement take?",
    description:
      "Initial containment can be achieved in hours for well-scoped incidents. Full forensic investigation and post-incident reporting typically takes 5–15 business days depending on the complexity of the incident and the size of the affected environment.",
  },
  {
    title: "What is included in the post-incident report?",
    description:
      "Our post-incident report includes: executive summary, incident timeline, initial access vector, attacker actions and dwell time, affected systems and data, root cause analysis, DPDPA breach notification assessment, and a prioritised hardening roadmap to prevent recurrence.",
  },
  {
    title: "Should we have an Incident Response Plan before an incident occurs?",
    description:
      "Absolutely. Having an Incident Response Plan (IRP) before an incident dramatically reduces response time and damage. We develop IRPs as part of our Security Plus and Enterprise Shield packages — including runbooks, escalation contacts, communication templates, and tabletop exercises.",
  },
];

const FALLBACK_CONTENT = {
  bannerImg: securityImg,
  bannerTitle: "Incident Response Services",
  bannerDesc: "24/7 incident response, digital forensics, ransomware recovery, and post-incident hardening for Indian businesses — with 15-minute response activation, DPDPA 2023 breach notification support, and root cause elimination. When every minute counts, we are ready.",

  overviewImage: "/Assets/stock/photo-1563986768609-322da13575f3.webp",
  overviewImageAlt: "Incident Response Services",
  overviewBadge: "Cyber Security · Incident Response",
  overviewHeading: "Rapid Incident Response When",
  overviewHighlight: "Every Minute Counts",
  overviewParagraphs: [
    "A security incident is not an if — it is a when. Ransomware, data breaches, account compromise, and insider threats are hitting Indian SMEs at an accelerating rate. The difference between a contained incident and a business-destroying catastrophe is how fast and how well you respond.",
    "Our 24/7 incident response service provides immediate containment, digital forensic investigation, root cause identification, and post-incident hardening — with DPDPA 2023 breach notification support built in from day one. We target incident responder activation within 15 minutes of a confirmed incident declaration.",
    "We have managed 50+ security incidents for Indian businesses — ransomware encryption, cloud credential compromise, BEC (Business Email Compromise), insider data theft, and web application breaches. Every engagement ends with a post-incident report and hardening roadmap to prevent recurrence.",
  ],
  overviewCtaText: "Speak to Our Incident Response Team",

  features,
  bizCards,
  sliderCards,
  platforms,
  techCategories,
  faqData,
  featuresBadge: "Our Incident Response Services",
  featuresTitle: "Rapid, Forensic-Grade Response",
  featuresTitleHighlight: "From Containment to Closure",
  bizBadge: "Why Choose Us",
  bizHeading: "Incident Response Built for",
  bizHighlight: "Indian Business Reality",
  sliderTitle: "Incident Response Outcomes That Minimise Damage",
  platformsTitle: "Forensic Tools Our IR Team Uses",
  techBadge: "Our Incident Response Stack",
  techHeading: "Forensic Tools & Technologies",
  techHeadingHighlight: "We Investigate With",
  techDescription: "Our incident responders use industry-standard forensic tools, SIEM platforms, and cloud audit log analysis to reconstruct attacker timelines and identify root causes rapidly.",
  faqTitle: "Frequently Asked Questions — Incident Response",
};

const IncidentResponse = ({ cms } = {}) => {
  const content = cms
    ? {
        ...cms,
        bannerImg: cms.bannerImg || securityImg,
        overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage,
        featuresBadge: cms.featuresBadge || FALLBACK_CONTENT.featuresBadge,
        featuresTitle: cms.featuresTitle || FALLBACK_CONTENT.featuresTitle,
        featuresTitleHighlight: cms.featuresTitleHighlight || FALLBACK_CONTENT.featuresTitleHighlight,
        bizBadge: cms.bizBadge || FALLBACK_CONTENT.bizBadge,
        bizHeading: cms.bizHeading || FALLBACK_CONTENT.bizHeading,
        bizHighlight: cms.bizHighlight || FALLBACK_CONTENT.bizHighlight,
        sliderTitle: cms.sliderTitle || FALLBACK_CONTENT.sliderTitle,
        platformsTitle: cms.platformsTitle || FALLBACK_CONTENT.platformsTitle,
        techBadge: cms.techBadge || FALLBACK_CONTENT.techBadge,
        techHeading: cms.techHeading || FALLBACK_CONTENT.techHeading,
        techHeadingHighlight: cms.techHeadingHighlight || FALLBACK_CONTENT.techHeadingHighlight,
        techDescription: cms.techDescription || FALLBACK_CONTENT.techDescription,
        faqTitle: cms.faqTitle || FALLBACK_CONTENT.faqTitle,
        features: isSectionDisabled(cms.enabledSections, "features") ? [] : (cms.features?.length ? cms.features : FALLBACK_CONTENT.features),
        bizCards: isSectionDisabled(cms.enabledSections, "biz") ? [] : (cms.bizCards?.length ? cms.bizCards : FALLBACK_CONTENT.bizCards),
        sliderCards: isSectionDisabled(cms.enabledSections, "slider") ? [] : (cms.sliderCards?.length ? cms.sliderCards : FALLBACK_CONTENT.sliderCards),
        platforms: isSectionDisabled(cms.enabledSections, "platforms") ? [] : (cms.platforms?.length ? cms.platforms : FALLBACK_CONTENT.platforms),
        techCategories: isSectionDisabled(cms.enabledSections, "techstack") ? [] : (cms.techCategories?.length ? cms.techCategories : FALLBACK_CONTENT.techCategories),
        faqData: isSectionDisabled(cms.enabledSections, "faq") ? [] : (cms.faqData?.length ? cms.faqData : FALLBACK_CONTENT.faqData),
      }
    : FALLBACK_CONTENT;

  return <CommonServicePage {...content} featuresStickyImg="/Assets/stock/photo-1614064641938-3bbee52942c7.webp" />;
};

export default IncidentResponse;
