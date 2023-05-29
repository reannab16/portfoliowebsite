import { Cherry } from "./icons";

export function SliderNav() {
  return (
    <div className="flex flex-row items-center justify-center nav">
      <div className="sans-class nav flex flex-col justify-center items-end mb-auto text-lg text-[#65a888] pr-[5px]">
        <a
          className="hover:text-[#524956] pl-2 pr-2 mt-1 rounded-full duration-300 hover:-translate-y-[1.5px]"
          href=""
        >
          about
        </a>
        <a
          className="hover:text-[#524956] pl-2 pr-2 mt-1 rounded-full duration-300 hover:-translate-y-[1.5px]"
          href=""
        >
          projects
        </a>
        <a
          className="hover:text-[#524956] pl-2 pr-2 mt-1 rounded-full duration-300 hover:-translate-y-[1.5px]"
          href=""
        >
          contact
        </a>
      </div>

      <div className="relative radio-container flex flex-col h-[12.5vh] bg-[#65a888] items-center justify-around w-[2px]">
        <input
          type="radio"
          name=""
          id="about"
          value="about"
          className="opacity-0 absolute"
        />
        <label
          htmlFor="about"
          className=" circle h-[10px] w-[10px] border-solid border-[2px] rounded-full border-[#65a888] bg-[#cddfae]"
        ></label>
        <input
          type="radio"
          name=""
          id="projects"
          value="projects"
          className="opacity-0 absolute "
        />
        <label
          htmlFor="projects"
          className=" circle h-[10px] w-[10px] border-solid border-[2px] rounded-full border-[#65a888] bg-[#cddfae]"
        ></label>
        <input
          type="radio"
          name=""
          id="contact"
          value="contact"
          className="opacity-0 absolute "
        />
        <label
          htmlFor="contact"
          className=" circle h-[10px] w-[10px] border-solid border-[2px] rounded-full border-[#65a888] bg-[#cddfae]"
        ></label>
        <div className="slider absolute top-0 bottom-0 left-0 right-0 cursor-pointer before:absolute before:h-[90px] before:w-[90px] before:top-[5px] before:z-20 flex items-center justify-center  ">
          {/* <Cherry className="relative z-30" /> */}
        </div>
      </div>
    </div>
  );
}
