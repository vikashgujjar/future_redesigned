import React from 'react'
import Mission from './Mission'
import { getMissionPageContent, buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Mission & Vision - Future IT Touch Private Limited",
  description:
    "Discover the mission, vision, and core values driving Future IT Touch — a people-first, client-focused team building tailored digital solutions across industries.",
};

export async function generateMetadata() {
  return buildPageMetadata("mission", DEFAULT_METADATA, { alternates: { canonical: "/mission" } });
}

export default async function page() {
  const mission = await getMissionPageContent();
  return (
    <div>
      <Mission mission={mission} />
    </div>
  )
}
