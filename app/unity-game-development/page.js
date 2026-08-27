import Unity from "./Unity";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Unity 2D/3D - Future IT Touch Private Limited",
  description:
    "Unity game development for immersive 2D, 3D, AR, and VR experiences across mobile, desktop, console, and WebGL, including real-time multiplayer integration.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export async function generateMetadata() {
  return loadServicePageSeo("unity-game-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("unity-game-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Unity cms={cms} />
    </div>
  );
}
