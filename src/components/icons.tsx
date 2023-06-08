'use client'
import { motion } from "framer-motion";
import React from "react";

const imgVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      
      stiffness: 100,
      damping: 10,
      duration: 1,
      delay: 0.2,
    },
  },
};


export function Flower({ className, initial, whileInView }: any) {
  return (
    <motion.img
      className={className}
      variants={imgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      src="new.svg"
      alt="flowerSVG"
      width={300}
      height={300}
    />
  );
}

export function Panda({ className }: any) {
  return (
    <img
      className={className}
      src="panda1.svg"
      alt="pandaSVG"
      width={300}
      height={300}
    />
  );
}

export function Cherry({ className }: any) {
  return (
    <img
      className={className}
      src="cherry.svg"
      alt="cherryBlossomSVG"
      width={100}
      height={100}
    />
  );
}

export function Me({ className }: any) {
  return (
    <img className={className} src="me.svg" alt="me" width={200} height={200} />
  );
}

export function LeafClove({ className }: any) {
  return (
    <img
      className={className}
      src="leafClove.svg"
      alt="leaves"
      width={100}
      height={100}
    />
  );
}

export function LeafStem({ className }: any) {
  return (
    <img
      className={className}
      src="leafStem.svg"
      alt="leaf"
      width={100}
      height={100}
    />
  );
}

export function MiniFlower({ className }: any) {
  return (
    <img
      className={className}
      src="miniFlower.svg"
      alt="mini flower"
      width={100}
      height={100}
    />
  );
}
