'use client'

import { MessageCircle, Search, Settings } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { RiBankCard2Fill } from 'react-icons/ri';

const Sidebar = () => {
  const currentPath = usePathname()
  return (
    <div className='py-12 fixed w-52'>
      <div className='flex flex-col w-full h-screen border rounded-lg'>
      <nav className='w-full h-full mx-auto flex '>
            <div className="container flex flex-col justify-between  items-center">
                <div className="hidden py-10 lg:flex  flex-col items-center w-full gap-10  border-b border-white/10">
                    <Link href={'/home'} className={currentPath === "/welcome" ? "text-green-500 font-semibold" : ""}>
                     <div className='flex gap-2'>
                        <MessageCircle className='text-blue-700' />
                       <h1> Chats</h1>
                     </div>
                    </Link>
                    <Link href={'/page-two'} className={currentPath === "/page-two" ? "text-green-500 font-semibold" : ""}>
                    <div className='flex gap-2'>
                        <Search className='text-blue-700' />
                       <h1> Search</h1>
                     </div>
                    </Link>
                    <Link href={'/page-three'} className={currentPath === "/page-three" ? "text-green-500 font-semibold" : ""}>
                    <div className='flex gap-2'>
                        <RiBankCard2Fill className='text-blue-700' size={27} />
                       <h1> Billing</h1>
                     </div>
                    </Link>
                    <Link href={'/page-three'} className={currentPath === "/page-three" ? "text-green-500 font-semibold" : ""}>
                    <div className='flex gap-2'>
                        <Settings className='text-blue-700'  />
                       <h1> Settings</h1>
                     </div>
                    </Link>
                </div>
                
                {/* <UserBar /> */}
                 <div className=''>
                    
                </div> 
            </div>
            {/* {!toggle && <div className='w-full lg:hidden'>
                <div className='container flex flex-col gap-6 py-10'>
                    <Link href={'/welcome'} className={`${currentPath === "/welcome" ? "text-white font-semibold px-3 bg-green-500 rounded-md" : "text-slate-600"} py-3 text-center`}>Page One</Link>
                    <Link href={'/page-two'} className={`${currentPath === "/page-two" ? "text-white font-semibold px-3 bg-green-500 rounded-md" : "text-slate-600"} py-3 text-center`}>Page Two</Link>
                    <Link href={'/page-three'} className={`${currentPath === "/page-three" ? "text-white font-semibold px-3 bg-green-500 rounded-md" : "text-slate-600"} py-3 text-center`}>Page Three</Link>
                </div>
            </div>
            } */}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar