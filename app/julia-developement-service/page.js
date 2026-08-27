import Julia from "./Julia";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Julia - Future IT Touch Private Limited",
  description:
    "High-performance Julia development for scientific computing, numerical modeling, and AI workflows — combining C-level execution speed with clean, productive code.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("julia-developement-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("julia-developement-service");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <>
      <Julia cms={cms} />
    </>
  );
}
