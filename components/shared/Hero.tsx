/* eslint-disable @next/next/no-img-element */

import { Button } from "../ui/button"
import { AnimatedBeamDemo } from "./Animated"



const Hero = () => {
  return (
    <div className="py-20">
     <div className="max-w-screem-2xl flex flex-col">
        <h1 className="text-center font-bold text-4xl ">Acme Deploy and Servises</h1>
        <p className="py-10 text-base text-center">
        With our state of the art, cutting edge, we are so 
        back kinda hosting services, you can deploy your website in seconds.
        </p>
        <div className="flex flex-col   items-center w-full">
          <Button className="items-center">Started </Button>
        </div>
        <div className="py-24 mt-10 flex px-20 mx-20 border-[10px] rounded-xl dark:border-white/10">
           <img src="/s.jpg" alt=""  className="rounded-xl object-cover"/>  
        </div>
        <div className="mt-10 flex items-center w-full flex-col">
          <AnimatedBeamDemo />

        </div>
        
     </div>
    </div>
  )
}

export default Hero