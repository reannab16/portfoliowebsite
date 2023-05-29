"use client";

import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SideSocials() {
  const socials = [
    {
      name: "GitHub",
      icon: faGithub,
      href: "https://github.com/reannab16"
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/in/reannab16/",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      href: "https://www.instagram.com/reanna_art/",
    },
    {
      name: "CodePen",
      icon: faCodepen,
      href: "https://codepen.io/reannab16"
    },
  ];

  return (
    <div className="side-socials">
      {socials.map((social, index) => (
        <a key={index} href={social.href} target="_blank">
          <FontAwesomeIcon icon={social.icon} className="h-[20px]"/>
        </a>
      ))}
    </div>
  )
};


