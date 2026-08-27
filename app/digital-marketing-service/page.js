import Marketing from "./Marketing";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "Top Digital Marketing Services in India - Future IT Touch",
  description:
    "Transform your business with Future IT Touch’s  digital marketing services .Our team offers SEO, SMM, PPC, content marketing, and more .drive growth online.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("digital-marketing-service", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("digital-marketing-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Marketing cms={cms} />;
}
