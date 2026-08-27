import Cblock from "./Cblock";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "C++ Blockchain Development  - Future IT Touch Private Limited",
  description:
    "High-performance C++ blockchain development — custom nodes, consensus engines, and low-latency distributed ledger systems built for enterprise-grade throughput and reliability.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export async function generateMetadata() {
  return loadServicePageSeo("c-plus-plus-blockchain-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("c-plus-plus-blockchain-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Cblock cms={cms} />
    </div>
  );
}
