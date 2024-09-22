import Sidebar from "@/components/shared/Sidebar"




const HomeLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <main className='flex '>
        <div className="hidden lg:flex  lg:w-52 lg:h-screen">
           <Sidebar />
        </div>
       <section className="flex w-full rounded-lg h-screen py-14">
         {children} 
       </section>
            
      </main>
    )
  }
  
  export default HomeLayout