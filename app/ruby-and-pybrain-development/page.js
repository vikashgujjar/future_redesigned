import Ruby from "./Ruby";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Ruby, Pybrain - Future IT Touch Private Limited",
  description:
    "AI and machine learning development combining Ruby's clean architecture with PyBrain's neural network capabilities for automation and predictive analytics.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export async function generateMetadata() {
  return loadServicePageSeo("ruby-and-pybrain-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("ruby-and-pybrain-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Ruby cms={cms} />
    </div>
  );
}
