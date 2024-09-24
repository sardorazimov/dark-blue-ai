import Sidebar from "@/components/shared/Sidebar"




const HomeLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <main className='flex  max-w-screen-2xl h-screen '>
        <aside className="flex lg:w-52 ">
         <Sidebar/>
        </aside>
        {children}
      </main>
    )

  }
  
  export default HomeLayout