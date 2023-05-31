import React from "react";
import { Me } from "./icons";

export default function About() {
  return (
    <div id="about" className="bg-[#cddfae] h-[100vh] md:w-[60vw] w-[100%] flex flex-col sm:justify-start justify-center items-center max-w-[1280px]">
      <div className="h-[90%] md:w-[80%] w-[90%] flex flex-col items-center justify-center md:mr-[10%]">
        <div className="h-[50%] xl:w-[50%] flex-col flex justify-center items-center md:w-[70%] w-[60%] whitespace-nowrap">
          <Me className="md:-mb-[8%] md:-mt-0 -mt-5" />
          <div className="md:text-6xl text-3xl text-[#65a888] font-extrabold max-[962px]:text-5xl md:-mt-0 -mt-7 ">ABOUT ME</div>
        </div>
        <div className=" pink-block md:h-[55%] sm:h-[80%] h-[93%] bg-[#fbe4ea] md:w-[90%] w-[100%] max-w-4xl md:-mt-[3%] rounded-xl opacity-80 md:pl-[11.1%] md:pr-[11.1%] pl-[8.5%] pr-[8.5%] text-base text-[#504256] text-left flex justify-center items-center ">
          <div>
          Welcome to my portfolio website! I&apos;m Reanna, a passionate artist,
          illustrator, <span className="text-[#65a888] italic">designer</span>{" "}
          and <span className="text-[#65a888] italic">developer</span>.
          <br />
          <br />
          Obsessed with all things{" "}
          <span className="text-[#65a888] italic">art and design</span>,
          naturally after learning to code, that translated to a love of
          creative{" "}
          <span className="text-[#65a888] italic">aesthetic web design. </span>
          By combining my skills, I create visually captivating websites that
          seamlessly blend functionality and artistic expression. <br />
          <br />
          Check out{" "}
          <a
            href="#projects"
            className="text-[#65a888] italic work-a"
          >
            my work
          </a>{" "}
          below!
          </div>
        </div>
      </div>
    </div>
  );
}



// <div className="group">

//     <div className="group-hover:text-black">a</div>
//     <div className="group-hover:width-100">b</div>
// </div>