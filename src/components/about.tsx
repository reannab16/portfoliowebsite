"use client";
import React from "react";
import { Me } from "./icons";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const aboutVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const aboutTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export default function About() {
  return (
    <div
      id="about"
      className="bg-[#cddfae] h-[100vh] max-h-[70rem] md:w-[60vw] w-[100%] flex flex-col sm:justify-start justify-center items-center max-w-[1280px] 2xl:justify-start"
    >
      <div className="h-[90%] md:w-[80%] w-[90%] flex flex-col items-center justify-center sm:justify-start xl:justify-start ">
        <motion.div
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[50%] xl:w-[50%] flex-col flex justify-center items-center md:w-[70%] w-[60%] whitespace-nowrap"
        >
          <Me className="md:-mb-[6%] md:-mt-0 -mt-5" />
          <div className="md:text-6xl text-3xl text-[#65a888] font-extrabold max-[962px]:text-5xl md:-mt-0 -mt-7 max-[1025px]:pb-5">
            ABOUT ME
          </div>
        </motion.div>
        <motion.div
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" pink-block md:h-[61%] sm:h-[80%] h-[93%] max-h-[45rem] bg-[#fbe4ea] md:w-[92%] w-[100%] max-w-4xl md:-mt-[3%] rounded-xl opacity-80 md:pl-[10.1%] md:pr-[10.1%] pl-[8.5%] pr-[8.5%] text-base text-[#504256] text-left flex justify-center items-center p-2 "
        >
          <div className="pt-2 pb-2">
            Welcome to my portfolio website! I&apos;m Reanna, a passionate
            artist, illustrator,{" "}
            <span className="text-[#65a888] italic">designer</span> and{" "}
            <span className="text-[#65a888] italic">developer</span>.
            <br />
            <br />
            Obsessed with all things{" "}
            <span className="text-[#65a888] italic">art and design</span>,
            naturally after learning to code, that translated to a love of
            creative{" "}
            <span className="text-[#65a888] italic">
              aesthetic web design.{" "}
            </span>
            By combining my skills, I create visually captivating websites that
            seamlessly blend functionality and artistic expression. <br />
            <br />
            Check out{" "}
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-[#65a888] italic work-a hover:cursor-pointer"
            >
              my work
            </Link>{" "}
            below!
          </div>
        </motion.div>
      </div>
    </div>
  );
}
