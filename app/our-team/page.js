import React from 'react'
import OurTeam from './OurTeam'

export const metadata = {
  title: "Our Team - Future IT Touch Private Limited",
  description:
    "Meet the designers, developers, strategists, and leaders behind Future IT Touch — the team building digital products for clients across India and beyond.",
  alternates: {
    canonical: "/our-team",
  },
};

export default function page() {
  return (
    <div>
      <OurTeam/>
    </div>
  )
}
