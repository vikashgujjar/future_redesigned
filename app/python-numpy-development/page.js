import Numpy from "./Numpy";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Python-NumPy, Pandas - Future IT Touch Private Limited",
  description:
    "Python and NumPy development for data analytics, scientific computing, and AI-powered systems, with integration across Pandas, SciPy, TensorFlow, and PyTorch.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export async function generateMetadata() {
  return loadServicePageSeo("python-numpy-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("python-numpy-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Numpy cms={cms} />
    </div>
  );
}
