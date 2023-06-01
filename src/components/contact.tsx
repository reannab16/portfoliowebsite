import React from "react";
import { LeafStem } from "./icons";

export default function Contact() {
    return(
        <div className="bg-[#cddfae] h-[100vh] md:w-[60vw] flex flex-col justify-center items-center max-w-[1280px] w-[100vw] overflow-hidden mt-20">
            <div className="text-6xl text-[var(--lightPink)] font-extrabold pb-3 relative">
                CONTACT
                <LeafStem className="absolute h-12 scale-x-[-1] -top-10 right-7"/>
                </div>
            <form action="https://formsubmit.co/contact@reanna.dev" method="POST" className=" xl:h-[55%] h-[70%] flex flex-col justify-around items-center text-[var(--darkGreen)] placeholder:text-[var(--darkGreen)]">
                <input type="text" name="name" id="name" required placeholder="name" className="placeholder:text-[var(--darkGreen)] bg-[var(--lightGreen)] border-b-2 border-b-[var(--darkGreen)] w-[21.5rem] placeholder:pl-4 pb-1 pt-1"/>
                <input type="email" name="email" id="email" required placeholder="email" className="placeholder:text-[var(--darkGreen)] bg-[var(--lightGreen)] border-b-2 border-b-[var(--darkGreen)] w-[21.5rem] placeholder:pl-4 pb-1 pt-1" />
                <input type="text" name="message" id="message" placeholder="message" required className="h-[40%] w-[21.5rem] bg-[var(--lightPink)] relative placeholder:absolute placeholder:text-[var(--darkGreen)] text-base placeholder:p-1 mt-3"/>
                <button type="submit" className="text-[var(--lightPink)] bg-[var(--darkGreen)] pl-8 pr-8 p-2 rounded-full mt-3">Submit</button>
            </form>

        </div>
    )
}