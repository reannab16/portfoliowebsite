import React from "react";

export default function Projects() {
    return(
        <div className="bg-[#cddfae] h-[100vh] w-[60vw] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[20%] w-[73.5%] mr-[6.5%]">
                <div className="flex flex-row justify-start items-center h-[60%] w-full">
                    <div className="text-7xl font-extrabold text-[var(--darkGreen)]">PROJECTS</div>
                    <div className="text-5xl font-extrabold italic text-white ml-[2%]">&</div>
                </div>
                <div className="flex flex-row justify-end items-center h-[40%] w-full">
                    <div className="text-5xl font-extrabold text-[var(--lightPink)]">ARTWORK</div>
                </div>
            </div>
            <div className="flex flex-row h-[50%] w-[73.5%] mr-[6.5%] justify-between items-center">
                <div className="flex flex-row justify-around items-around h-[110%] w-[55%] flex-wrap mt-[-7%]">
                        <div className="bg-[var(--darkGreen)] h-[47%] w-[48.5%]"></div>
                        <div className="bg-[var(--darkGreen)] h-[47%] w-[48.5%]"></div>
                        <div className="bg-[var(--darkGreen)] h-[47%] w-[48.5%]"></div>
                        <div className="bg-[var(--darkGreen)] h-[47%] w-[48.5%]"></div>
                </div>
                <div className="flex flex-row justify-around items-around h-[100%] w-[41.9%] flex-wrap">
                    <div className="bg-[var(--lightPink)] h-[41%] w-[48%]"></div>
                    <div className="bg-[var(--lightPink)] h-[41%] w-[48%]"></div>
                    <div className="bg-[var(--lightPink)] h-[41%] w-[48%] mb-[-3%]"></div>
                    <div className="bg-[var(--lightPink)] h-[41%] w-[48%] mb-[-3%]"></div>
                    <div className="text-[var(--darkGreen)] text-center text-base mb-[-3%]">Purchase my art on redubble and view more on my art insta!</div>

                </div>

            </div>
            
        </div>
    )
}
