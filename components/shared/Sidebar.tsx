'use client'
import { MessageCircle, Search, Settings } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

import { RiBankCard2Fill } from 'react-icons/ri';
import ContextMenu from './ContextMenu';

import UserBar from './UserBar';

const Sidebar = () => {
    const currentPath = usePathname();
   
  return (
    <div className='lg:py-[57px] w-full'>
      <nav className='w-full h-full mx-auto '>
            <div className="container flex flex-col justify-between  items-center">
                {/* <div className="logo">
                    <Link href={'/'}><h4 className='text-2xl tracking-tight font-bold'>active <span className=' text-green-500 uppercase'>Linktest</span></h4></Link>
                </div> */}

                {/* <div className='text-3xl text-slate-600 cursor-pointer lg:hidden' onClick={() => setToggle(prev => !prev)}>
                    {toggle ? <BiMenuAltRight /> : <AiOutlineClose />}
                </div> */}

                <div className="hidden py-10 lg:flex  flex-col items-center w-full gap-10  border-b border-white/10">
                    <Link href={'/welcome'} className={currentPath === "/welcome" ? "text-green-500 font-semibold" : ""}>
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
                <ContextMenu/>
                {/* <UserBar /> */}
                 <div className='py-40'>
                   <UserBar/>  
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
  )
}

export default Sidebar