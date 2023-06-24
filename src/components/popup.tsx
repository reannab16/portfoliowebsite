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
    <div className="fixed z-10 h-full w-full top-0 left-0 flex items-center justify-center ">
      <div className="relative p-9 xl:w-[50vw] lg:w-[60vw] md:w-[70vw] sm:w-[80vw] w-[90vw]  flex sm:flex-row flex-col justify-center items-center border-4 bg-[var(--lightGreen)] border-[var(--pandaLight)] rounded-xl">
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
          className=" w-[30%] object-contain rounded-xl sm:ml-5 ml-2 sm:block hidden"
        />
        <div className="sm:w-[70%] flex flex-col justify-between items-start sm:mr-5">
          <div className="font-extrabold text-[var(--pandaLight)] xl:text-4xl text-3xl ml-5 flex items-center justify-center">
            <div>{project!.title}</div>
            <a
              href={project?.projectsrc}
              target="blank"
              className="flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="sm:h-5 h-4 ml-2 hover:text-[var(--darkGreen)] duration-300 cursor-pointer hover:-translate-y-[2px]"
              />
            </a>

            {project?.git && (
              <a
                href={project?.git}
                target="blank"
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="sm:h-5 h-4 ml-2 hover:text-[var(--darkGreen)] duration-300 cursor-pointer hover:-translate-y-[2px]"
                />
              </a>
            )}
          </div>
          <div className="text-[var(--pandaLight)] text-base ml-5 mt-2">
            {project!.text}
          </div>

          <div className="ml-5 flex flex-row items-center justify-start flex-wrap mt-2">
            {project?.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="bg-[var(--darkGreen)] flex items-center justify-center pr-4 pl-4 p-1 rounded-full text-slate-100 xl:text-base text-sm xl:m-2 m-1"
                >
                  {skill}
                </div>
              );
            })}
          </div>

          <img
            src={project?.popupsrc}
            alt="first portfolio picture"
            className=" w-[40%] object-contain rounded-xl sm:ml-5 ml-5 block sm:hidden mt-5"
          />
        </div>
      </div>
    </div>
  );
}
