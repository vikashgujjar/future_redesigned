import DataProtection from "./DataProtection";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "Data Protection & Compliance Services | Future IT Touch",
  description:
    "DPDPA 2023, CERT-In controls, ISO 27001, and PCI-DSS compliance services for Indian businesses — end-to-end compliance programmes delivered as a managed service.",
  keywords: [
    "data protection compliance services", "DPDPA compliance services",
    "ISO 27001 compliance", "CERT-In compliance services", "PCI-DSS compliance company",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("data-protection-compliance-service", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("data-protection-compliance-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <DataProtection cms={cms} />;
}
