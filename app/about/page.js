import React from 'react'
import AboutShow from './AboutShow'
import { COMPANY_START_YEAR } from '../lib/companyStats'
import { getAboutPageContent, buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Our Story – Future Touch",
  description: `Future Touch is a Website Development and Digital Marketing Company Founded in ${COMPANY_START_YEAR} by Vinod Tanwar.`,
};

export async function generateMetadata() {
  return buildPageMetadata("about", DEFAULT_METADATA);
}

export default async function page() {
  const about = await getAboutPageContent();
  return (
    <div>
      <AboutShow about={about} />
    </div>
  )
}
