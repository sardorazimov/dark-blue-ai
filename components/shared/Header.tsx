/* eslint-disable @next/next/no-img-element */
'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { ModeToggle } from "../providers/mode-toogle";



const Header = () => {
 const router = useRouter()

  return (
    <header className="relative ">
      <div className="w-full fixed h-14 backdrop-blur-2xl  border-b border-white/10">
       <div className="flex justify-between w-full" >
        <div className="flex mx-10">
            <Link href={'/'} className="mt-3 flex gap-1  ">
            <img src="/logo.svg"  alt="Logo" className="" />
            <h1 className="font-bold underline-offset-0 mt-1 text-xl">DarkAI </h1>
            </Link>
        </div>
        <div className="flex mt-3 mx-10 gap-4">
            <BsGithub  className="cursor-pointer" size={28}  onClick={() => router.push('https://github.com/sardorazimov')} />
           <ModeToggle />
            <div className="lg:hidden flex">
                <BiMenuAltRight  className="" size={28}/>
            </div>
        </div>
       </div>
      </div>
    </header>
  );
};

export default Header;