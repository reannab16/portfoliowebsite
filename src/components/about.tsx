import React from "react";
import { Me } from "./icons";

export default function About() {
    return(
        <div className="bg-[#cddfae] h-[100vh] w-[60vw] flex flex-col justify-start items-center" >
            <div className="h-[90%] w-[80%] flex flex-col items-center justify-center mr-[10%]">
                <div className="h-[50%] w-[50%] flex-col flex justify-center items-center">
                    <Me className="-mb-[8%]" />
                    <div className="text-6xl text-[#65a888] font-extrabold">ABOUT ME</div>
                </div>
                <div className="h-[55%] bg-[#fbe4ea] w-[90%] -mt-[3%] rounded-xl opacity-80 p-[11.1%] text-base text-[#504256] text-justify">
                    Welcome to my portfolio website! I'm Reanna, a passionate artist, illustrator, <span className="text-[#65a888] italic">designer</span> and <span className="text-[#65a888] italic">developer</span>.
                    <br/><br/>Obsessed with all things <span className="text-[#65a888] italic">art and design</span>, naturally after learning to code, that translated to a love of creative <span className="text-[#65a888] italic">aesthetic web design. </span> 
                    By combining my skills, I create visually captivating websites that seamlessly blend functionality and artistic expression. <br/><br/>
                    Check out <a href="#" className="text-[#65a888] italic">my work</a> below!
                </div>

            </div>
        </div>
    )
}