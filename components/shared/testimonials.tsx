import { ArrowUpDown, Database } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
    <section>
        <div className='flex lg:mx-20 lg:px-20  mx-4 px-4 '>
            <div className='flex w-full flex-wrap gap-10'>
                <div className='border hover:bg-white/5 border-white/10 lg:w-80 rounded-xl w-full h-64 lg:h-52 flex flex-col'>
                   <div className='mt-3 flex justify-between w-full '>
                     <div className='flex  mx-2 gap-3'> 
                        <h1 className='font-medium text-xl'>DataBase</h1>
                        <Database  className='text-emerald-700' size={29} />
                     </div>
                     <div className='flex  mx-2 gap-3' > 
                        <h1>Active</h1>
                        <ArrowUpDown className='text-emerald-400 animate-pulse'  />
                    </div>
                    </div>
                    <div className='flex w-full mt-7'>
                        <p className='text-center'>Experience lightning-fast hosting with unparalleled reliability. Our cutting-edge infrastructure
                             ensures your website stays online 24/7, with 99.9% uptime guaranteed.</p>
                    </div>
                </div>
                <div className='border hover:bg-white/5 border-white/10 lg:w-80 rounded-xl w-full h-64 lg:h-52 flex flex-col'>
                   <div className='mt-3 flex justify-between w-full '>
                     <div className='flex  mx-2 gap-3'> 
                        <h1 className='font-medium text-xl'>DataBase</h1>
                        <Database  className='text-emerald-700' size={29} />
                     </div>
                     <div className='flex  mx-2 gap-3' > 
                        <h1>Active</h1>
                        <ArrowUpDown className='text-emerald-400 animate-pulse'  />
                    </div>
                    </div>
                    <div className='flex w-full mt-7'>
                        <p className='text-center'>Experience lightning-fast hosting with unparalleled reliability. Our cutting-edge infrastructure
                             ensures your website stays online 24/7, with 99.9% uptime guaranteed.</p>
                    </div>
                </div>
                <div className='border hover:bg-white/5 border-white/10 lg:w-80 rounded-xl w-full h-64 lg:h-52 flex flex-col'>
                   <div className='mt-3 flex justify-between w-full '>
                     <div className='flex  mx-2 gap-3'> 
                        <h1 className='font-medium text-xl'>DataBase</h1>
                        <Database  className='text-emerald-700' size={29} />
                     </div>
                     <div className='flex  mx-2 gap-3' > 
                        <h1>Active</h1>
                        <ArrowUpDown className='text-emerald-400 animate-pulse'  />
                    </div>
                    </div>
                    <div className='flex w-full mt-7'>
                        <p className='text-center'>Experience lightning-fast hosting with unparalleled reliability. Our cutting-edge infrastructure
                             ensures your website stays online 24/7, with 99.9% uptime guaranteed.</p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default Testimonials