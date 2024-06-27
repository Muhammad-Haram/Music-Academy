import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import FeaturedCards from '@/components/FeaturedCards'
import WhyChooseUs from '@/components/WhyChooseUs'
import MovingCards from '@/components/MovingCards'
import UpComing from '@/components/UpComing'
import Instructor from '@/components/Instructor'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <Hero />
      <FeaturedCards />
      <WhyChooseUs />
      <MovingCards />
      <UpComing />
      <Instructor />
      <Footer />
    </main>
  )
}

export default page