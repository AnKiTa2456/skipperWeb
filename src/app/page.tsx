
import AiInputCard from '@/components/homeCards/AiInputCard'
import CardCarouselParent from '@/components/homeCards/CardCarouselParent'
import SpecialCard from '@/components/homeCards/SpecialCard'
import TemplateCard from '@/components/homeCards/TemplateCard'
import ThemeChange from '@/components/homeCards/ThemeChange'
import HeroContent from '@/components/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/ui/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <CardCarouselParent />
      <TemplateCard />
      <SpecialCard />
      <AiInputCard />
      <ThemeChange />
      <Footer />
    </div>
  )
}

export default page