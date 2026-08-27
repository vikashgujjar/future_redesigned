import MobileApp from "./MobileApp";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "Mobile App Development Company | iOS, Android & Cross-Platform Apps",
  description: "Full-stack mobile app development company building native iOS, Android, and cross-platform apps with Swift, Kotlin, React Native, and Flutter — from UX design through launch and ongoing support.",
  keywords: [
    "mobile app development company", "app development services",
    "custom mobile app development", "hire app developers",
    "startup app development company", "on demand app development",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("application-developement", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("application-developement");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <MobileApp cms={cms} />;
}
