import Swift from "./Swift";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Swift App Development - Future IT Touch Private Limited",
  description:
    "Native iOS app development with Swift and SwiftUI, delivering secure, pixel-perfect experiences for iPhone, iPad, and Apple Watch built on Apple's latest frameworks.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export async function generateMetadata() {
  return loadServicePageSeo("swift-app-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("swift-app-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Swift cms={cms} />
    </div>
  );
}
