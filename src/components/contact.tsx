"use client"
import React from "react";
import { LeafStem } from "./icons";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const contactVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export default function Contact() {
    return(
        <div id="contact" className="bg-[#cddfae] h-[100vh] md:w-[60vw] flex flex-col justify-center items-center max-w-[1280px] w-[100%] overflow-hidden mt-14 max-h-[50rem] 2xl:-mt-0 2xl:mb-20 2xl:pr-96">
            <motion.div variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="md:text-6xl text-5xl text-[var(--lightPink)] font-extrabold pb-3 relative mt-3 2xl:ml-96">
                CONTACT
                <LeafStem className="absolute md:h-12 scale-x-[-1] md:-top-10 md:right-7 h-11 -top-9 right-4"/>
                </motion.div>
            <motion.form variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} action="https://formsubmit.co/contact@reanna.dev" method="POST" className="2xl:h-[20%] xl:h-[60%] md:h-[70%] h-[55%] flex flex-col justify-around items-center text-[var(--darkGreen)] placeholder:text-[var(--darkGreen)] text-base relative">
                <input type="text" name="name" id="name" required placeholder="name" className="placeholder:text-[var(--darkGreen)] bg-[var(--lightGreen)] border-b-2 border-b-[var(--darkGreen)] md:w-[21.5rem] w-72 placeholder:pl-4 pb-1 pt-1"/>
                <input type="email" name="email" id="email" required placeholder="email" className="placeholder:text-[var(--darkGreen)] bg-[var(--lightGreen)] border-b-2 border-b-[var(--darkGreen)] md:w-[21.5rem] w-72 placeholder:pl-4 pb-1 pt-1" />
                <input type="text" name="message" id="message" placeholder="message" required className="2xl:h-[90%] md:h-[40%] h-[40%] md:w-[21.5rem] w-72 bg-[var(--lightPink)] relative placeholder:absolute placeholder:text-[var(--darkGreen)] text-base placeholder:p-1 mt-3 2xl:absolute 2xl:-top-1 2xl:-right-96 "/>
                <button type="submit" className="text-[var(--lightPink)] bg-[var(--darkGreen)] pl-8 pr-8 p-2 rounded-full mt-3 hover:bg-[var(--pandaLight)] duration-300 hover:-translate-y-[2px] 2xl:absolute 2xl:-bottom-16 2xl:ml-96">Submit</button>
            </motion.form>

        </div>
    )
}