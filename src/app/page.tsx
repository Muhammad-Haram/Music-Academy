import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import FeaturedCards from '@/components/FeaturedCards'
import WhyChooseUs from '@/components/WhyChooseUs'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <Hero />
      <FeaturedCards />
      <WhyChooseUs/>
    </main>
  )
}

export default page