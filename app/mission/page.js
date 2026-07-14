import React from 'react'
import Mission from './Mission'

export const metadata = {
  title: "Mission & Vision - Future IT Touch Private Limited",
  description:
    "Discover the mission, vision, and core values driving Future IT Touch — a people-first, client-focused team building tailored digital solutions across industries.",
  alternates: {
    canonical: "/mission",
  },
};

export default function page() {
  return (
    <div>
      <Mission/>
    </div>
  )
}
