import React from 'react'
import Animated from './Animated'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Animated Video Production Company | Explainer Video Services",
  description:
    "Professional explainer video and animation services — from scriptwriting and storyboarding to 2D/3D motion graphics and voiceovers that turn ideas into engaging brand stories.",
  keywords: [
    "animated video production", "explainer video services",
    "2D animation company", "3D motion graphics", "animated video for business",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("animated-services", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("animated-services");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Animated cms={cms}/>
    </div>
  )
}
