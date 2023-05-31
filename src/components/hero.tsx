import React from "react";
import { Flower } from "./icons";
import { Panda } from "./icons";

export default function Hero() {
  return (
    <div className="bg-[#cddfae] h-[100vh] w-[60vw] flex flex-col justify-center items-center max-w-[1280px] sm:pl-0 pl-5" id="home">
      <div className=" hero-container flex flex-col h-[65%] md:w-[80%] w-[95%] justify-between items-start">
        <Flower className=" md:h-[60%] h-[30%] -mt-[14%]"/>
        <div className="-mt-[17%]">
          <div className="font-bold md:text-4xl text-3xl text-[#504256]">
            Hi, I&apos;m
          </div>
          <div className="font-extrabold text-white md:text-[4rem] text-6xl myName lg:leading-tight">
            REANNA BAKSHANI
          </div>

          <div className="md:text-lg text-base w-[83%] text-[#524956] xl:pb-0 pb-4">
            A designer and developer, based in London, who loves creative web
            design! Feel free to contact me or check out my work on GitHub!
          </div>
        </div>
        <a
          href=""
          className="duration-300 hover:bg-[#524956] rounded-full hover:text-[#65a888] font-bold text-base bg-[#65a888] text-[#524956] p-4 md:pl-10 md:pr-10 pl-6 pr-6 hover:-translate-y-[2px]"
        >
          contact me!
        </a>
      </div>
    </div>
  );
}
