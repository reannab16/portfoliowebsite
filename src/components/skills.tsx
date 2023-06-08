"use client";
import React from "react";
import { MiniFlower } from "./icons";
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

const skillVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 1,
    },
  },
};

export default function Skills() {
  type skill = {
    name: string;
  };

  const skills: skill[] = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript/TS" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind" },
    { name: "Three.js" },
    { name: "Flutter" },
    { name: "Git" },
    { name: "Figma" },
    { name: "Blender" },
    { name: "Procreate" },
    { name: "MongoDB" },
    { name: "Framer Motion" },
    { name: "Vectornator" },
    { name: "Python" },
  ];

  return (
    <div
      className="bg-[#cddfae] md:h-[70vh] lg:h-[auto] xl:h-[50vh] md:w-[60vw] flex flex-col justify-center items-center max-w-[1280px] w-[100%] mt-14 max-h-[40rem] 2xl:mt-0"
      id="skills"
    >
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[var(--pandaLight)] flex items-center justify-center right-4 text-6xl font-extrabold relative skills after:h-[0.35rem] after:w-[15.6rem] after:bg-[var(--lightPink)] after:absolute after:top-[calc(100% + 1rem)] after:-left-5"
      >
        SKILLS
        <MiniFlower className="absolute top-[2.1rem] h-16 left-48" />
      </motion.div>

      <div className="flex flex-row items-center justify-center flex-wrap md:w-[73%] w-[90%] h-[60%] md:h-[70vh] max-w-[40rem] max-h-[20rem] md:max-lg:max-h-[90rem] max-sm:max-h-[90rem] mt-4">
        {skills.map((item) => {
          return (
            <motion.div
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
              key={item.name}
              className="bg-[var(--darkGreen)] flex items-center justify-center pr-5 pl-5 p-2 rounded-full text-slate-100 text-base m-2"
            >
              {item.name}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
