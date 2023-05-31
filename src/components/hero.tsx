import React from "react";
import { Flower } from "./icons";
import { Panda } from "./icons";

export default function Hero() {
  return (
    <div className="bg-[#cddfae] h-[100vh] w-[60vw] flex flex-col justify-center items-center ">
      <div className="flex flex-col h-[65%] w-[80%] justify-between items-start">
        <Flower className=" md:h-[70%] h-[40%] -mt-[14%]"/>
        <div className="-mt-[17%]">
          <div className="font-bold text-4xl text-[#504256]">
            Hi, I&apos;m
          </div>
          <div className="font-extrabold text-white text-[4rem] myName leading-tight">
            REANNA BAKSHANI
          </div>

          <div className="text-lg w-[83%] text-[#524956] xl:pb-0 pb-4">
            A designer and developer, based in London, who loves creative web
            design! Feel free to contact me or check out my work on GitHub!
          </div>
        </div>
        <a
          href=""
          className="duration-300 hover:bg-[#524956] rounded-full hover:text-[#65a888] font-bold text-[2vh] bg-[#65a888] text-[#524956] p-4 pl-10 pr-10 hover:-translate-y-[2px]"
        >
          contact me!
        </a>
      </div>
    </div>
  );
}
