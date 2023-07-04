"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const listvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type navType = {
  name: string;
  href: string;
  number: number;
};

const navBlocks: navType[] = [
  {
    name: "home",
    href: "#home",
    number: 0,
  },
  {
    name: "about",
    href: "#about",
    number: 1,
  },
  {
    name: "projects",
    href: "#projects",
    number: 2,
  },
  {
    name: "skills",
    href: "#skills",
    number: 3,
  },
  {
    name: "contacts",
    href: "#contact",
    number: 4,
  },
];

export function MenuItems(isOpen: any) {
  const [isBloomed, setBloomed] = useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      var home: any = document.getElementById("home");
      var about: any = document.getElementById("about");
      var skills: any = document.getElementById("skills");
      var port: any = document.getElementById("projects");
      var contact: any = document.getElementById("contact");

      if (
        window.scrollY >= home.offsetTop &&
        window.scrollY < home.offsetTop + home.offsetHeight
      ) {
        setBloomed(0)
      }
      if (
        window.scrollY >= home.offsetTop + home.offsetHeight &&
        window.scrollY < about.offsetTop + about.offsetHeight
      ) {
        setBloomed(1)
      }
      if (
        window.scrollY >= about.offsetTop + about.offsetHeight &&
        window.scrollY < port.offsetTop + port.offsetHeight
      ) {
        setBloomed(2)
      }
      if (
        window.scrollY >= port.offsetTop + port.offsetHeight &&
        window.scrollY < skills.offsetTop + skills.offsetHeight
      ) {
        setBloomed(3)
      }
      if (
        window.scrollY >= skills.offsetTop + skills.offsetHeight &&
        window.scrollY < contact.offsetTop + contact.offsetHeight
      ) {
        setBloomed(4)
      }
    });
  }

  return (
    <motion.div variants={listvariants} className={`${isOpen ? 'h-screen w-screen flex flex-col items-center justify-center bg-[var(--pandaLight)] fixed top-0 right-0 left-0':'hidden'} z-50 sm:hidden gap-y-3`}>
      {navBlocks.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 gap-x-2 flex items-center justify-center"
        >
          <div className={`duration-300 ${(isBloomed == item.number) ? 'bloomedbg h-9 w-9':'h-3 w-3 rounded-full bg-none border-2 border-[var(--lightPink)]'}`}></div>
          <div className={`duration-300 ${(isBloomed == item.number) ? 'text-white':'text-[var(--lightPink)]'} ?}`}>{item.name}</div>
        </motion.a>
      ))}
    </motion.div>
  );
}
