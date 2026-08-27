import Haskell from "./Haskell";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Haskell AI/ML Development - Future IT Touch Private Limited",
  description:
    "Haskell-based AI and machine learning development leveraging functional programming, strong type safety, and parallel computation for reliable, high-performance systems.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("haskell-ai-and-ml-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("haskell-ai-and-ml-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Haskell cms={cms} />
    </div>
  );
}
