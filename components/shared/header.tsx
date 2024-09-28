/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '../providers/mode-toogle'
import { RiMenu2Fill } from 'react-icons/ri'


const Header = () => {
  return (

    <header className=''>
      <div className="w-full backdrop-blur-3xl fixed top-0 inset-x-0 z-50">
        <div className="hidden lg:flex flex-row self-start mt-4 bg-slate-50 shadow-2xl dark:bg-zinc-950 items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full">
          <a className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20" href="/">
            <img alt="logo" src="/svgs/logo.svg" className='w-10 h-10' />
            <span className="font-medium text-black dark:text-white">Startup</span>
          </a>
          <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
            <a className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2" href="/#features">
              <span className="relative z-20">Features</span></a>
            <a className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2" href="/#pricing">
              <span className="relative z-20">Pricing</span></a>
            <a className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2" href="/#contact"><span className="relative z-20">Contact</span>
            </a></div>
          <div className="flex items-center gap-4">
            <button className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500">
              {/* <ModeToggle /> */}
              <span className="sr-only">
              </span>
              </button>
              <div>
              <a className="px-4 py-2 rounded-md button text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center bg-transparent shadow-none dark:text-white hidden md:block" href="/login">Login</a>
            </div>
          <button className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block" data-cal-namespace="chat-with-manu-demo" data-cal-link="manu-arora-vesr9s/chat-with-manu-demo" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}">Book a call</button>
          </div>
          </div>
          <div className="flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50"  >
            <div className="flex flex-row justify-between items-center w-full">
              <a className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20" href="/">
            <img alt="logo" src='/svgs/logo.svg' className='w-7 h-7' />
            <span className="font-medium text-black dark:text-white">Startup</span></a>
        <RiMenu2Fill className='h-7 w-7' /></div></div></div>
    </header>

  )
}

export default Header