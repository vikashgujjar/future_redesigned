import React from 'react'
import OurTeam from './OurTeam'
import loadTeam from './loadTeam'
import { buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Our Team - Future IT Touch Private Limited",
  description:
    "Meet the designers, developers, strategists, and leaders behind Future IT Touch — the team building digital products for clients across India and beyond.",
};

export async function generateMetadata() {
  return buildPageMetadata("our-team", DEFAULT_METADATA, { alternates: { canonical: "/our-team" } });
}

export default async function page() {
  const team = await loadTeam();
  return (
    <div>
      <OurTeam team={team} />
    </div>
  )
}
