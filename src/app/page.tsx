import Hero from "@/components/hero";
import { Panda } from "@/components/icons";
import { Cherry } from "@/components/icons";
import { SliderNav }  from "@/components/slidernav";
import  About  from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-row sm:justify-start justify-center items-center bg-[#cddfae]">

      {/* DYNAMIC CONTENT */}
      <div className="h-[full] w-full overflow-x-hidden">
        <Hero />
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>

      {/* STATIC CONTENT */}
      <div className="flex flex-col items-end md:h-[75vh] h-[65vh] w-[30%] max-w-md lg:mr-[5%] fixed justify-end  bottom-[12.5vh] left-[60%] md:mr-[10%] md:opacity-100 opacity-0">
        
        <Panda className="lg:h-[58%] lg:mr-[-0.5%] h-[45%]" />
      </div>
    </main>
  );
}
