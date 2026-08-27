import Android from "./Android";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Android App Development Company | Custom Android Apps",
  description:
    "Android app development company building custom, scalable Android applications with Kotlin and Java — from UI/UX design to Play Store launch and ongoing maintenance.",
  keywords: [
    "Android app development company", "custom android app development",
    "hire android developers", "android app developers near me",
    "enterprise android app development",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("android-application-development", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("android-application-development");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Android cms={cms} />;
}
