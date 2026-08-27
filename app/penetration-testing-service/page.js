import PenetrationTesting from "./PenetrationTesting";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Penetration Testing Services | Future IT Touch",
  description:
    "Professional penetration testing services — ethical hacking by OSCP-certified engineers to identify and demonstrate exploitable security vulnerabilities before real attackers do.",
  keywords: [
    "penetration testing services", "ethical hacking services",
    "pen testing company", "application penetration testing",
    "OSCP certified penetration testers",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("penetration-testing-service", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("penetration-testing-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <PenetrationTesting cms={cms} />;
}
