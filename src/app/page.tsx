import Hero from "@/components/hero";
import { Panda } from "@/components/icons";
import { Cherry } from "@/components/icons";
import { SliderNav }  from "@/components/slidernav";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-row justify-around items-center bg-[#cddfae]">
      {/* STATIC CONTENT */}
      <div className="h-full w-5vw"></div>

      {/* DYNAMIC CONTENT */}
      <div className="h-full w-full">
        <Hero />
      </div>

      {/* STATIC CONTENT */}
      <div className="flex flex-col items-end h-[75vh] w-[30vw] justify-end mr-[5%]">
        
        <Panda className="h-[58%]" />
      </div>
    </main>
  );
}
