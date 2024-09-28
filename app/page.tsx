
import Header from '@/components/shared/header'
import Hero from '@/components/shared/Hero'
import { Landing } from '@/components/shared/landing'
import Testimonials from '@/components/shared/testimonials'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-screen-2xl flex flex-col'>
        <Header/>
        <Hero />
        <Landing />
        <Testimonials />
    </main>
  )
}

export default page