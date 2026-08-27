import Ionic from "./Ionic";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Ionic Development - Future IT Touch Private Limited",
  description:
    "Cross-platform hybrid app development with Ionic and Capacitor, delivering native-like Android, iOS, and web experiences from a single codebase and faster time to market.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("ionic-application-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("ionic-application-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Ionic cms={cms} />
    </div>
  );
}
