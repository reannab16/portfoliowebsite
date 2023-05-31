import React from "react";
import { Me } from "./icons";

export default function About() {
  return (
    <div className="bg-[#cddfae] h-[100vh] md:w-[60vw] w-[100%] flex flex-col sm:justify-start justify-center items-center">
      <div className="h-[90%] md:w-[80%] w-[90%] flex flex-col items-center justify-center md:mr-[10%]">
        <div className="h-[50%] xl:w-[50%] flex-col flex justify-center items-center md:w-[70%] w-[60%] whitespace-nowrap">
          <Me className="-mb-[8%]" />
          <div className="text-6xl text-[#65a888] font-extrabold max-[962px]:text-5xl ">ABOUT ME</div>
        </div>
        <div className="md:h-[55%] sm:h-[80%] h-[85%] bg-[#fbe4ea] md:w-[90%] w-[100%] -mt-[3%] rounded-xl opacity-80 pl-[11.1%] pr-[11.1%] text-base text-[#504256] text-left flex justify-center items-center ">
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
            href="#"
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