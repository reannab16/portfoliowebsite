"use client";
import React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuItems } from "./menuItems";
import { useState } from "react";

export function MobileNav() {
  const [isOpen, ToggleOpen] = useState(false);

  return (
    <div
      className="fixed top-0 right-0 sm:hidden z-40 cursor-pointer"
      onClick={() => ToggleOpen(!isOpen)}
    >
      <div
        className={`${
          isOpen
            ? "fixed opacity-1 h-screen w-screen top-0 right-0"
            : "opacity-0"
        } duration-500 sm:hidden bg-[var(--pandaLight)]`}
      >
        <MenuItems/>
      </div>
      <div
        className={`${
          isOpen ? "rotate-45 translate-y-2" : ""
        } w-7 h-1 rounded-full bg-white fixed top-5 right-5 duration-300`}
      ></div>
      <div
        className={`${
          isOpen ? "opacity-0" : "opacity-1"
        } w-7 h-1 rounded-full bg-white fixed top-7 right-5 duration-300`}
      ></div>
      <div
        className={` ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        } w-7 h-1 rounded-full bg-white fixed top-9 right-5 duration-300`}
      ></div>
    </div>
  );
}
