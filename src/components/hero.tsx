import React from "react";
import { Flower } from "./icons";
import { Panda } from "./icons";

export default function Hero() {
    return (
        <div className="bg-[#D4E6B5] h-[100vh] w-[100vw] flex flex-col justify-end items-center ">
            <div className="flex flex-col justify-center items-center text-white w-full pl-[2vw] pr-[2vw] md:mb-[0.75vw] font-[helvetica]">
                <div className="flex flex-row justify-start items-center w-full h-">
                    <Panda className="mb-[-0.5vw] ml-[0.25vw]"/>
                </div>
                <div className="w-full font-extrabold md:text-xl text-xs flex flex-row justify-between items-center pl-[5px] pr-[5px] mb-[-0.5vw]">
                    <div>DESIGNER x DEVELOPER</div>
                    <div>MY WORK</div>
                </div>
                <div className="w-full font-extrabold text-4xl md:text-9xl flex flex-row justify-between items-center mb-[-0.5vw]">
                    <p className="">REANNA</p>
                    <Flower className="h-[30%] md:h-[80%]"/>
                    <div>BAKSHANI</div>
                </div>
                <div className="w-full font-extrabold text-xs md:text-xl flex flex-row items-center">
                    <div className="ml-[10vw]">ASPIRING CREATIVE</div>
                    <div className="ml-[27vw]">ARTIST</div>
                    <div className="ml-[28vw]">CONTACT</div>
                </div>
            </div>
        </div>
    )
}