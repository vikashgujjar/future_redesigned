"use client";
const securityImg = "/Assets/stock/photo-1451187580459-43490279c0fa.webp";
import CommonServicePage from "../components/CommonServicePage";
import { isSectionDisabled } from "../lib/loadServicePage";
import {
  FaCloud, FaShieldAlt, FaLock, FaDatabase, FaUserShield,
  FaSearch, FaExclamationTriangle, FaCheckCircle, FaFileAlt,
  FaNetworkWired, FaLayerGroup, FaServer,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCloud />,
    title: "Cloud Security Posture Management (CSPM)",
    description:
      "Continuous automated scanning of your AWS, Azure, and GCP environments — detecting misconfigurations, publicly exposed resources, unencrypted data stores, and compliance deviations with real-time alerting and prioritised remediation.",
  },
  {
    icon: <FaUserShield />,
    title: "IAM & Privilege Access Review",
    description:
      "Comprehensive review of Identity and Access Management policies — identifying over-privileged roles, inactive accounts, wildcard permissions, missing MFA enforcement, and cross-account trust misconfigurations that create privilege escalation paths.",
  },
  {
    icon: <FaDatabase />,
    title: "Cloud Data Protection & Encryption",
    description:
      "Assessment and implementation of data protection controls — S3 bucket policies, encryption at rest and in transit, database security groups, secrets management (AWS Secrets Manager / Azure Key Vault), and DLP policy configuration.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Container & Kubernetes Security",
    description:
      "Security hardening of Docker and Kubernetes environments — image vulnerability scanning, RBAC policy review, network policy enforcement, pod security standards, secrets management, and runtime threat detection.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Cloud Network Security",
    description:
      "Review and hardening of cloud network controls — VPC security groups, network ACLs, private endpoint configurations, exposed management ports, inter-VPC peering security, and WAF rule review.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cloud-Native SIEM & Log Management",
    description:
      "Centralised cloud audit log collection, SIEM integration, and alerting — CloudTrail, Azure Monitor, GCP Cloud Audit Logs — with a 180-day retention policy aligned to CERT-In mandatory requirements for Indian businesses.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Cloud Compliance & Governance",
    description:
      "Cloud compliance programmes aligned to DPDPA 2023 (data residency, processing controls), CERT-In, ISO 27001, and PCI-DSS — with policy-as-code implementation using AWS Config, Azure Policy, or GCP Org Policy.",
  },
];

const bizCards = [
  {
    title: "Indian Data Residency Expertise",
    desc: "We specialise in configuring AWS India (ap-south-1), Azure India, and GCP Mumbai regions to ensure your data never leaves Indian soil — a key DPDPA 2023 and CERT-In requirement for Indian businesses.",
    icons: <FaCloud className="text-white w-8 h-8" />,
  },
  {
    title: "Multi-Cloud Coverage",
    desc: "Whether you're on AWS, Azure, GCP, or a multi-cloud setup, we provide unified security posture management — a single dashboard across all your cloud environments with consolidated risk scoring.",
    icons: <FaLayerGroup className="text-white w-8 h-8" />,
  },
  {
    title: "Shift-Left Security",
    desc: "We integrate security into your DevOps pipeline — SAST/DAST scanning, IaC security review (Terraform, CloudFormation), container image scanning in CI/CD, and pre-deployment compliance checks.",
    icons: <FaServer className="text-white w-8 h-8" />,
  },
  {
    title: "Continuous Posture Monitoring",
    desc: "Cloud security is not a one-time audit. Our managed CSPM service continuously monitors your cloud environment — detecting new misconfigurations, shadow IT, and compliance drifts as soon as they appear.",
    icons: <FaSearch className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "200+",
    title: "Cloud Security Assessments",
    desc: "200+ cloud security assessments across AWS, Azure, and GCP for Indian SMEs — covering IAM reviews, CSPM, network security, and compliance gap analysis.",
    image: "/Assets/stock/photo-1451187580459-43490279c0fa.webp",
  },
  {
    count: "75%",
    title: "Average IAM Risk Reduction",
    desc: "After our IAM reviews, clients typically eliminate 75% of over-privileged roles and unused access keys — dramatically reducing the blast radius of any credential compromise.",
    image: "/Assets/stock/photo-1614064641938-3bbee52942c7.webp",
  },
  {
    count: "100%",
    title: "Indian Data Residency Coverage",
    desc: "Every cloud security programme we design ensures full Indian data residency compliance — critical for DPDPA 2023 and CERT-In mandated data localisation requirements.",
    image: "/Assets/stock/photo-1544197150-b99a580bb7a8.webp",
  },
  {
    count: "4",
    title: "Compliance Frameworks Supported",
    desc: "Our cloud security programmes cover DPDPA 2023, CERT-In, ISO 27001, and PCI-DSS — as applicable to your industry — with policy-as-code automation where possible.",
    image: "/Assets/stock/photo-1563986768609-322da13575f3.webp",
  },
];

const platforms = [
  { icon: <FaCloud className="text-white w-6 h-6" />,       title: "AWS Security Hub",          desc: "Native AWS security posture management — aggregating findings from GuardDuty, Inspector, Macie, and Config into a single prioritised dashboard." },
  { icon: <FaShieldAlt className="text-white w-6 h-6" />,   title: "Microsoft Defender for Cloud", desc: "Azure and multi-cloud security posture management — continuous compliance monitoring, threat protection, and security recommendations." },
  { icon: <FaSearch className="text-white w-6 h-6" />,       title: "Prisma Cloud / Wiz",        desc: "Third-party CSPM platforms for unified multi-cloud security posture visibility, workload protection, and compliance reporting." },
  { icon: <FaDatabase className="text-white w-6 h-6" />,    title: "HashiCorp Vault",            desc: "Secrets management platform for secure storage and rotation of API keys, database credentials, and certificates across cloud environments." },
  { icon: <FaLayerGroup className="text-white w-6 h-6" />,  title: "Falco (Kubernetes Security)", desc: "Cloud-native runtime security for containers and Kubernetes — detecting anomalous behaviour, privilege escalation, and container escape in real time." },
  { icon: <FaNetworkWired className="text-white w-6 h-6" />, title: "Terraform / AWS Config",    desc: "Infrastructure-as-code security scanning and policy-as-code enforcement — ensuring cloud resources are deployed in a compliant configuration from day one." },
];

const techCategories = [
  {
    title: "Cloud Platforms",
    techs: [
      { name: "AWS",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Google Cloud",  icon: "https://cdn.simpleicons.org/googlecloud" },
      { name: "Oracle Cloud",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "IBM Cloud" },
      { name: "DigitalOcean",  icon: "https://cdn.simpleicons.org/digitalocean" },
      { name: "Linode (Akamai Cloud)", icon: "https://cdn.simpleicons.org/akamai" },
      { name: "Vultr",         icon: "https://cdn.simpleicons.org/vultr" },
      { name: "Alibaba Cloud", icon: "https://cdn.simpleicons.org/alibabacloud" },
      { name: "VMware Cloud",  icon: "https://cdn.simpleicons.org/vmware" },
      { name: "OVHcloud",      icon: "https://cdn.simpleicons.org/ovh" },
      { name: "Other Cloud Providers" },
    ],
  },
  {
    title: "Security Tools",
    techs: [
      { name: "Vault",         icon: "https://cdn.simpleicons.org/vault" },
      { name: "Elastic SIEM",  icon: "https://cdn.simpleicons.org/elastic" },
      { name: "Grafana",       icon: "https://cdn.simpleicons.org/grafana" },
      { name: "Splunk",        icon: "https://cdn.simpleicons.org/splunk" },
    ],
  },
  {
    title: "Infrastructure",
    techs: [
      { name: "Terraform",     icon: "https://cdn.simpleicons.org/terraform" },
      { name: "Docker",        icon: "https://cdn.simpleicons.org/docker" },
      { name: "Kubernetes",    icon: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Ansible",       icon: "https://cdn.simpleicons.org/ansible" },
    ],
  },
];

const faqData = [
  {
    title: "Who is responsible for cloud security — us or our cloud provider?",
    description:
      "Both. Cloud providers (AWS, Azure, GCP) secure the underlying infrastructure — hardware, data centres, and hypervisors. You are responsible for securing everything you build on top: configurations, access controls, data, applications, and user access. This is the 'shared responsibility model'.",
  },
  {
    title: "What is Cloud Security Posture Management (CSPM)?",
    description:
      "CSPM is continuous automated monitoring of your cloud environment to detect misconfigurations — publicly accessible S3 buckets, overly permissive security groups, unencrypted databases, and missing MFA. It gives you real-time visibility into your cloud security posture against compliance benchmarks.",
  },
  {
    title: "Does DPDPA 2023 apply to data stored in the cloud?",
    description:
      "Yes. DPDPA 2023 applies to personal data processed digitally, regardless of where it is stored — cloud or on-premise. You remain responsible as the Data Fiduciary for the security and processing of personal data even when it is in AWS, Azure, or GCP.",
  },
  {
    title: "What are the most common cloud security mistakes Indian SMEs make?",
    description:
      "The most common issues we find are: publicly accessible S3 buckets or Azure blob storage, over-privileged IAM roles (admin access given to everyone), missing MFA on root/admin accounts, unencrypted RDS or database instances, exposed management ports (SSH/RDP), and no audit logging enabled.",
  },
  {
    title: "How do you ensure our data stays in India?",
    description:
      "We specifically configure your cloud environment to use Indian region endpoints (AWS ap-south-1 Mumbai, Azure India, GCP Mumbai) and implement S3 bucket policies, Azure Policy, or GCP Org Policy to prevent data replication outside Indian regions — directly addressing DPDPA 2023 data residency concerns.",
  },
  {
    title: "Do you support Kubernetes and containerised environments?",
    description:
      "Yes. We cover full container and Kubernetes security — Dockerfile best practice review, image vulnerability scanning (Trivy, Grype), Kubernetes RBAC policy review, pod security standards, network policy enforcement, and runtime threat detection using Falco.",
  },
  {
    title: "How often should we conduct cloud security assessments?",
    description:
      "We recommend continuous posture monitoring (CSPM) rather than point-in-time assessments — cloud environments change daily and a misconfiguration can be introduced with any new deployment. Our managed cloud security service provides continuous monitoring rather than quarterly snapshots.",
  },
];

const FALLBACK_CONTENT = {
  bannerImg: securityImg,
  bannerTitle: "Cloud Security Services",
  bannerDesc: "Continuous cloud security posture management, IAM privilege review, data protection, container security, and compliance across AWS, Azure, and GCP — with full Indian data residency compliance for DPDPA 2023 and CERT-In requirements. Built for Indian SMEs moving to the cloud.",
  overviewImage: "/Assets/stock/photo-1614064641938-3bbee52942c7.webp",
  overviewImageAlt: "Cloud Security Services",
  overviewBadge: "Cyber Security · Cloud Security",
  overviewHeading: "Cloud Security with",
  overviewHighlight: "Indian Data Residency Built In",
  overviewParagraphs: [
    "The cloud has transformed how Indian businesses operate — but it has also introduced a new category of security risk that traditional security tools don't cover. Misconfigured S3 buckets, over-privileged IAM roles, and unencrypted databases are responsible for the majority of cloud breaches worldwide.",
    "Our cloud security programme provides continuous posture management across AWS, Azure, and GCP — detecting misconfigurations in real time, enforcing least-privilege access, securing container workloads, and implementing compliance controls aligned to DPDPA 2023, CERT-In, and ISO 27001.",
    "We specialise in Indian data residency configurations — ensuring your cloud architecture keeps personal data within Indian borders, satisfying DPDPA 2023 requirements and eliminating cross-border data transfer risks.",
  ],
  overviewCtaText: "Request a Cloud Security Assessment",
  features,
  bizCards,
  sliderCards,
  platforms,
  techCategories,
  faqData,
  featuresBadge: "Our Cloud Security Services",
  featuresTitle: "Comprehensive Cloud Security Across",
  featuresTitleHighlight: "AWS, Azure & GCP",
  bizBadge: "Why Choose Us",
  bizHeading: "Cloud Security by",
  bizHighlight: "Indian Compliance Experts",
  sliderTitle: "Cloud Security Outcomes for Indian Businesses",
  platformsTitle: "Cloud Security Platforms We Use",
  techBadge: "Our Cloud Security Stack",
  techHeading: "Tools & Platforms",
  techHeadingHighlight: "We Secure Clouds With",
  techDescription: "We use native cloud security services combined with best-in-class third-party CSPM, SIEM, and secrets management tools to deliver continuous cloud security without complexity.",
  faqTitle: "Frequently Asked Questions — Cloud Security",
};

const CloudSecurity = ({ cms } = {}) => {
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

export default CloudSecurity;
