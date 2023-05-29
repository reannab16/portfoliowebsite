import Hero from "@/components/hero";
import { Panda } from "@/components/icons";
import { Cherry } from "@/components/icons";
import { SliderNav }  from "@/components/slidernav";
import  About  from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-row justify-start items-center bg-[#cddfae]">

      {/* DYNAMIC CONTENT */}
      <div className="h-full w-full">
        <Hero />
        <About/>
        <Projects/>
      </div>

      {/* STATIC CONTENT */}
      <div className="flex flex-col items-end h-[75vh] w-[30vw] mr-[5%] fixed justify-end  bottom-[12.5vh] left-[60vw]">
        
        <Panda className="h-[58%]" />
      </div>
    </main>
  );
}
