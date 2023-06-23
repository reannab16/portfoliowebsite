"use client";
import React, { useState } from "react";
import { LeafClove, LeafStem } from "./icons";
import { motion } from "framer-motion";
import PopUp from "./popup";

function Projects() {
  const [visible, setVisible] = useState<Boolean>(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | undefined>(undefined);

  return (
    <div
      className="proj-contain-1 bg-[#cddfae] h-[100vh] w-[60vw] flex flex-col justify-center items-center max-w-[1280px] md:max-h-[70rem]"
      id="projects"
    >
      {visible && (
        <PopUp
          project={currentProject}
          onClick={() => {
            setVisible(!visible);
          }}
        />
      )}
      <div className="proj-contain-2 h-full w-[80%] flex flex-col justify-center items-center relative blurred">
        <div className="proj-headers-contain flex flex-col justify-center items-center h-[20%] w-[91.875%]">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="projtext-flex flex flex-row justify-start items-center h-[60%] w-full"
          >
            <div className="projtext-contain text-7xl font-extrabold text-[var(--darkGreen)] relative">
              <LeafClove className="absolute h-[100%] -top-[4.3rem] left-[4.3rem]" />
              PROJECTS
            </div>
            <div className="proj-and text-5xl font-extrabold italic text-white ml-[2%]">
              &
            </div>
          </motion.div>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="arttext-flex flex flex-row justify-end items-center h-[40%] w-full"
          >
            <div className="arttext-contain arttext-lg text-5xl font-extrabold text-[var(--lightPink)] relative">
              <LeafStem className="absolute -top-10 h-12 left-[8.6rem] " />
              ARTWORK
            </div>
          </motion.div>
        </div>
        <div className="projandart-contain flex flex-row h-[50%] w-[91.875%] justify-between items-center">
          <div className="projproj-contain flex flex-row justify-around items-around h-[110%] w-[55%] flex-wrap mt-[-7%]">
            {projects.map((item: ProjectType) => {
              return (
                <motion.div
                  variants={projectVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={item.name}
                  className="cursor-pointer projboxes blocks bg-[var(--darkGreen)] h-[47%] w-[48.5%] overflow-hidden relative flex flex-col items-center justify-center"
                  onClick={() => {
                    setCurrentProject(item);
                    setVisible(true);
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-[100%] w-[100%] object-cover"
                  />
                  <div className="proj-cover bg-[var(--darkGreen)] h-full w-full z-30 absolute top-0 bottom-0 opacity-70 hover:opacity-0"></div>
                </motion.div>
              );
            })}
          </div>

          <div className="artboxes-contain flex flex-row justify-around items-around h-[100%] w-[41.9%] flex-wrap">
            {Artwork.map((item) => {
              return (
                <motion.a
                  variants={projectVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={item.name}
                  className="artboxes bg-[var(--lightPink)] h-[41%] w-[48%] mb-[-1.5%] relative flex flex-col items-center justify-center"
                  href=""
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-[100%] w-[100%] object-cover"
                  />
                  <div className="bg-[var(--darkGreen)] h-full w-full z-30 absolute top-0 bottom-0 opacity-70 hover:opacity-0"></div>
                </motion.a>
              );
            })}
            <motion.div
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="art-purchase text-[var(--darkGreen)] text-center text-base mb-[-3%]"
            >
              Purchase my art on my{" "}
              <a
                href="https://www.redbubble.com/people/oopsiedaisy/shop?asc=u&ref=account-nav-dropdown"
                target="_blank"
                className="redbubble"
              >
                redubble
              </a>{" "}
              and view more on my art{" "}
              <a
                href="https://www.instagram.com/reanna_art/"
                className="art-insta"
                target="_blank"
              >
                insta
              </a>
              !
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects: ProjectType[] = [
  {
    name: "firstportfolio",
    src: "Portfolio0.png",
    popupsrc:"Portfolio00.png",
    projectsrc:"https://reannab16.github.io/my-portfolio/",
    git:"https://github.com/reannab16/my-portfolio/",
    title:"My First Portfolio",
    text:"This was my first portfolio website! Incredibly personalized with many cool features, hand-drawn illustrations and animations.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "tictactoe",
    src: "tictactoe.png",
    popupsrc:"tictactoe.png",
    projectsrc:"https://reannab16.github.io/tic-tac-toe/",
    git:"https://github.com/reannab16/tic-tac-toe",
    title:"Tic-Tac-Toe",
    text:"A simple Tic Tac Toe game made with JavaScript.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "mamawebsite",
    src: "fifty0.png",
    popupsrc:"fifty1.png",
    projectsrc:"https://reannab16.github.io/mama-birthday-website/",
    git:"https://github.com/reannab16/mama-birthday-website",
    title:"Birthday Invite + Countdown",
    text:"A website I designed and coded for my mum's 50th birthday, functioning as a birthday invite, with a countdown page presented after users RSVP.",
    skills: ["HTML", "Tailwind CSS", "Next.js", "TypeScript"],
  },
  {
    name: "unmade",
    src: "",
    popupsrc:"",
    projectsrc:"",
    git:"",
    title:"",
    text:"",
    skills: [],
  },
];

const Artwork: ProjectType[] = [
  {
    name: "UFO",
    src: "UFO-compress.jpeg",
    popupsrc:"",
    projectsrc:"",
    git:"",
    title:"",
    text:"",
    skills: [],
  },
  {
    name: "butterflygirl",
    src: "butterfly-girl-compress.jpeg",
    popupsrc:"",
    projectsrc:"",
    git:"",
    title:"",
    text:"",
    skills: [],
  },
  {
    name: "rose",
    src: "rose-compress.jpeg",
    popupsrc:"",
    projectsrc:"",
    git:"",
    title:"",
    text:"",
    skills: [],
  },
  {
    name: "wildflower",
    src: "wildflower-compress.jpeg",
    popupsrc:"",
    projectsrc:"",
    git:"",
    title:"",
    text:"",
    skills: [],
  },
];

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

const projectVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 0,
    },
  },
};

type ProjectType = {
  name: string;
  src: string;
  popupsrc: string;
  projectsrc: string;
  git: string;
  title: string;
  text: string;
  skills: string[];
};

export { Projects };
export type { ProjectType };
