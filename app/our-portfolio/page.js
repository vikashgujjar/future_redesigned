import React from 'react'
import OurPortfolio from './OurPortfolio'
import loadPortfolio from './loadPortfolio'
import { buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Our Portfolio - Future IT Touch Private Limited",
  description:
    "Browse a selection of websites, apps, and digital marketing projects delivered by Future IT Touch for clients across healthcare, education, retail, and more.",
};

export async function generateMetadata() {
  return buildPageMetadata("our-portfolio", DEFAULT_METADATA, { alternates: { canonical: "/our-portfolio" } });
}

export default async function page() {
  const items = await loadPortfolio();
  return (
    <div>
      <OurPortfolio items={items} />
    </div>
  )
}
