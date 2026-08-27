import CyberSecurity from "./CyberSecurity";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "Cyber Security Services | Future IT Touch",
  description:
    "Protect your business with enterprise-grade cyber security services — vulnerability assessment, penetration testing, network security, cloud security, data protection, and incident response.",
};

export async function generateMetadata() {
  return loadServicePageSeo("cyber-security-service", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("cyber-security-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <CyberSecurity cms={cms} />;
}
