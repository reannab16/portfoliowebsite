import Hero from "@/components/hero"
import { Panda } from "@/components/icons"

export default function Home() {
  return (
    <main className="container mx-auto flex flex-row justify-around items-center bg-[#cddfae]">
       {/* STATIC CONTENT */}
       <div className="h-full w-5vw">
        
       </div>


      {/* DYNAMIC CONTENT */}
      <div className="h-full w-full">
        <Hero/>
      </div>

      {/* STATIC CONTENT */}
      <div className="flex flex-col items-end h-[75vh] w-[30vw] justify-between mr-[5%]">
        <div className="sans-class nav flex flex-col justify-center items-end mb-auto text-lg text-[#524956]">
          <a className="hover:bg-[#65a888] pl-2 pr-2 mt-1 rounded-full duration-300" href="">about</a>
          <a className="hover:bg-[#65a888] pl-2 pr-2 mt-1 rounded-full duration-300" href="">projects</a>
          <a className="hover:bg-[#65a888] pl-2 pr-2 mt-1 rounded-full duration-300" href="">experience</a>
        </div>
        <Panda className="mt-auto h-[58%]"/>
      </div>
      
      
    </main>
  )
}
