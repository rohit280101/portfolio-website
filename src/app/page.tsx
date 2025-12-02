import React from 'react'
import HeroFuturistic from '../components/HeroFuturistic'
import ProjectsFuturistic from '../components/ProjectsFuturistic'
import SkillsFuturistic from '../components/SkillsFuturistic'
import AboutFuturistic from '../components/AboutFuturistic'
import ContactFuturistic from '../components/ContactFuturistic'

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <HeroFuturistic />
      <div className="container mx-auto px-6">
        <ProjectsFuturistic />
        <SkillsFuturistic />
        <AboutFuturistic />
        <ContactFuturistic />
      </div>
    </main>
  )
}
 