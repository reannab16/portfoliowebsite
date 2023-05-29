import React from "react";
import { Flower } from "./icons";
import { Panda } from "./icons";

export default function Hero() {
  return (
    <div className="bg-[#cddfae] h-[100vh] w-[60vw] flex flex-col justify-center items-center ">
      <div className="flex flex-col h-[65%] w-[80%] justify-between items-start">
        <Flower className=" h-[70%] -mt-[14%]" />
        <div className="-mt-[17%]">
          <div className="font-bold text-[4vh] -mb-[2%] text-[#504256]">
            Hi, I'm
          </div>
          <div className="font-extrabold text-white text-[7.5vh] pb-[0%] ">
            REANNA BAKSHANI
          </div>

          <div className="text-lg w-[83%] text-[#524956]">
            A designer and developer, based in London, who loves creative web
            design! Feel free to contact me or check out my work on GitHub!
          </div>
        </div>
        <a href="" className="duration-300 hover:bg-[#524956] rounded-full hover:text-[#65a888] font-bold text-[2vh] bg-[#65a888] text-[#524956] p-4 pl-10 pr-10 hover:-translate-y-[2px]">contact me!</a>

      </div>
    </div>
  );
}
