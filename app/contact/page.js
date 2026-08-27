import React from 'react'
import Contact from './Contact'
import { getSiteSettings, buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Contact - Future IT Touch Private Limited",
  description: "Get in touch with Future IT Touch to discuss your project — reach our team by phone, email, or Skype, or send a message through our contact form for a prompt reply.",
};

export async function generateMetadata() {
  return buildPageMetadata("contact", DEFAULT_METADATA);
}

export default async function page() {
  const settings = await getSiteSettings();
  return (
    <>
      <Contact settings={settings} />
    </>
  )
}
