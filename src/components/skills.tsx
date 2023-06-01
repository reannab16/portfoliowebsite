import React from "react";
import { MiniFlower } from "./icons";

export default function Skills() {
    type skill = {
        name: string;
    };

    const skills: skill[] = [
        {name: "HTML&CSS"},
        {name:"JavaScript/TS"},
        {name: "React"},
        {name:"Next.js"},
        {name:"Tailwind"},
        {name:"Three.js"},
        {name:"Flutter"},
        {name:"Git"},
        {name:"Figma"},
        {name:"Blender"},
        {name:"Procreate"},
        {name:"MongoDB"},
        {name:"Framer Motion"},
        {name:"Vectornator"}
    ];



    return(
        <div className="bg-[#cddfae] xl:h-[100vh] md:w-[60vw] flex flex-col justify-center items-center max-w-[1280px] w-[100%]" id="skills">
            <div className="text-[var(--pandaLight)] flex items-center justify-center right-4 text-6xl font-extrabold relative skills after:h-[0.35rem] after:w-[15.6rem] after:bg-[var(--lightPink)] after:absolute after:top-[calc(100% + 1rem)] after:-left-5">
                SKILLS
                <MiniFlower className="absolute top-[2.1rem] h-16 left-48"/>
            </div>

            <div className="flex flex-row items-center justify-center flex-wrap md:w-[73%] w-[100%] h-[30%] mt-4">
                {skills.map((item)=>{
                    return(
                        <div key={item.name} className="h-10 bg-[var(--darkGreen)] flex items-center justify-center w-32 rounded-full text-slate-100 text-base m-2">{item.name}</div>
                    )
                })}

            </div>

        </div>
    )
}