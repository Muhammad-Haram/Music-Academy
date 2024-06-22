import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import FeaturedCards from '@/components/FeaturedCards'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <Hero />
      <FeaturedCards />
    </main>
  )
}

export default page