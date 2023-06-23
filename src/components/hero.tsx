"use client";
import React from "react";
import { Flower } from "./icons";
import { Panda } from "./icons";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 10,
      duration: 1,
      delay: 0.2,
    },
    hover: {
      y: -200,
    }
  },
};

export default function Hero() {
  return (
    <div
      className="bg-[#cddfae] h-[100vh] w-[60vw] flex flex-col justify-center items-center max-w-[1280px] sm:pl-0 pl-4"
      id="home"
    >
      <div className=" hero-container flex flex-col h-[100%] md:w-[80%] w-[95%] justify-center items-start">
        <Flower className="xl:mb-[5%] mb-[3%]" />
        <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="font-bold md:text-4xl text-3xl text-[#524956]">
            Hi, I&apos;m
          </div>
          <div className="font-extrabold text-white md:text-[4rem] text-6xl myName lg:leading-tight">
            REANNA BAKSHANI
          </div>

          <div className="md:text-lg text-base w-[83%] text-[#524956] xl:pb-0 pb-1">
            A designer and developer, based in London, who loves creative web
            design! Feel free to contact me or check out my work on GitHub!
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{y:-5, transition: {duration: 0.3},}}
          viewport={{ once: true }}
          className="h-[auto] mt-[7.5%]"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className=" duration-300 hover:bg-[#524956] rounded-full hover:text-[#65a888] font-bold text-base bg-[#65a888] text-[#524956] p-4 md:pl-10 md:pr-10 pl-5 pr-5 hover:-translate-y-[2px] hover:cursor-pointer"
          >
            contact me!
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
