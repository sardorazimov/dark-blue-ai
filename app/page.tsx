
import Header from '@/components/shared/header'
import Hero from '@/components/shared/Hero'
import { Landing } from '@/components/shared/landing'
import React from 'react'

const page = () => {
  return (
    <main className=''>
        <Header/>
        <Hero />
       <Landing />
    </main>
  )
}

export default page