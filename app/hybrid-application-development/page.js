import Hybrid from "./Hybrid";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "Hybrid App Development Company | Flutter & React Native Apps",
  description:
    "Hybrid app development services combining the best of native and web technologies — build once with Flutter or React Native and launch on iOS and Android simultaneously.",
  keywords: [
    "hybrid app development company", "Flutter app development company",
    "React Native app development", "cross platform app development",
    "cost-effective mobile app development",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("hybrid-application-development", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("hybrid-application-development");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Hybrid cms={cms} />;
}
