import Flutter from "./Flutter";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Flutter App Development - Future IT Touch Private Limited",
  description:
    "Cross-platform Flutter and Dart app development for Android, iOS, web, and desktop from a single codebase, delivering native-quality performance at lower cost and time.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export async function generateMetadata() {
  return loadServicePageSeo("flutter-application-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("flutter-application-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Flutter cms={cms} />
    </div>
  );
}
