import Mobile from "./Mobile";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Mobile App Testing Services | QA for iOS & Android Apps",
  description:
    "Comprehensive mobile app testing services covering functional, performance, security, and usability testing across real iOS and Android devices before you launch.",
  keywords: [
    "mobile app testing services", "QA testing for mobile apps",
    "app testing company", "automated mobile testing", "mobile app quality assurance",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("mobile-application-testing", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("mobile-application-testing");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Mobile cms={cms} />;
}
