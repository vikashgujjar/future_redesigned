import CloudSecurity from "./CloudSecurity";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Cloud Security Services | Future IT Touch",
  description:
    "Cloud security posture management, IAM review, container security, and continuous compliance monitoring across AWS, Azure, and GCP — built for Indian SMEs.",
  keywords: [
    "cloud security services", "cloud security posture management",
    "AWS security services", "Azure cloud security", "cloud compliance monitoring",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("cloud-security-service", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("cloud-security-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <CloudSecurity cms={cms} />;
}
