import Navbar from '@/components/Navbar'
import React from 'react'
import HeroSection from '@/components/HeroSection'
import SideSocials from '@/components/SideSocials'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import AboutSection from '@/components/AboutSection'
import ContactsSection from '@/components/ContactsSection'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <SideSocials />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </div>
  )
}

export default page