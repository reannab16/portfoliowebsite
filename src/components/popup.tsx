import React, { useState } from "react";
import { ProjectType } from "./projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faX,
  faArrowUpRightFromSquare,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PopUpProps = {
  project: ProjectType | undefined;
  onClick: () => void;
};

export default function PopUp({ project, onClick }: PopUpProps) {
  //   var blur = document.querySelectorAll(".blurred");

  //   function toggle() {
  //     blur.forEach((element) => {
  //       element.classList.toggle("active");
  //     });
  //   }

  return (
    <div className="fixed top-[calc(50%-15vh)] left-[calc(50%-25vw)] p-9 w-[50vw] z-10 flex flex-row justify-center items-center border-4 bg-[var(--lightGreen)] border-[var(--pandaLight)] rounded-xl">
      <a
        className="absolute top-0 right-0 p-2 hover:cursor-pointer"
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faSquareXmark}
          className="text-[var(--pandaLight)] h-5 ml-2 hover:text-[var(--darkGreen)] duration-300"
        />
      </a>
      <img
        src={project?.popupsrc}
        alt="first portfolio picture"
        className=" w-[30%] object-contain rounded-xl ml-5"
      />
      <div className="w-[70%] flex flex-col justify-between items-start mr-5">
        <div className="font-extrabold text-[var(--pandaLight)] text-4xl ml-5 flex items-center justify-center">
          <div>{project!.title}</div>
          <a href={project?.projectsrc} target="blank">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-5 ml-2 hover:text-[var(--darkGreen)] duration-300 cursor-pointer hover:-translate-y-[2px]"
            />
          </a>

            <a href={project?.git} target="blank">
                <FontAwesomeIcon
                icon={faGithub}
                className="h-5 ml-2 hover:text-[var(--darkGreen)] duration-300 cursor-pointer hover:-translate-y-[2px]"
                />
            </a>
        </div>
        <div className="text-[var(--pandaLight)] text-base ml-5 mt-2">
          {project!.text}
        </div>

        <div className="ml-5 flex flex-row items-center justify-start flex-wrap mt-2">
          {project?.skills.map((skill) => {
            return (
              <div className="bg-[var(--darkGreen)] flex items-center justify-center pr-4 pl-4 p-1 rounded-full text-slate-100 text-base m-2">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
