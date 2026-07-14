import React from 'react'
import OurPortfolio from './OurPortfolio'

export const metadata = {
  title: "Our Portfolio - Future IT Touch Private Limited",
  description:
    "Browse a selection of websites, apps, and digital marketing projects delivered by Future IT Touch for clients across healthcare, education, retail, and more.",
  alternates: {
    canonical: "/our-portfolio",
  },
};

export default function page() {
  return (
    <div>
      <OurPortfolio/>
    </div>
  )
}
