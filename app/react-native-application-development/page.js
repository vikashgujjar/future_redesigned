import Native from "./Native";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "React Native App Development - Future IT Touch Private Limited",
  description:
    "Cross-platform mobile app development with React Native, delivering native-quality iOS and Android experiences from a single JavaScript codebase with faster delivery.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export async function generateMetadata() {
  return loadServicePageSeo("react-native-application-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("react-native-application-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <>
      <Native cms={cms} />
    </>
  );
}
