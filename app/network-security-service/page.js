import NetworkSecurity from "./NetworkSecurity";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Network Security Services | Future IT Touch",
  description:
    "Enterprise-grade network security services — firewall management, IDS/IPS, zero-trust architecture, network segmentation, and 24/7 monitoring to protect your infrastructure.",
  keywords: [
    "network security services", "firewall management services",
    "network security company", "intrusion detection and prevention",
    "zero trust network security",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("network-security-service", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("network-security-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <NetworkSecurity cms={cms} />;
}
