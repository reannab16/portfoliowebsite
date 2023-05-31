import React from "react";

export default function Projects() {

    type Projecttype = {
        name: string;
        src: string;
    }

    const Projects: Projecttype[] = [
        {
          name: "firstportfolio",
          src: "portfolio0.png",
        },
        {
          name: "tictactoe",
          src: "tictactoe.png",
        },
        {
          name: "mamawebsite",
          src: "fifty.png",
        },
        {
          name: "unmade",
          src: "",
        },
      ];

      const Artwork: Projecttype[] = [
        {
            name: "UFO",
            src: "UFO.png",
          },
          {
            name: "butterflygirl",
            src: "butterfly-girl.png",
          },
          {
            name: "rose",
            src: "rose.jpg",
          },
          {
            name: "wildflower",
            src: "wildflower.jpg",
          },
      ]


    return(
        <div className="bg-[#cddfae] xl:h-[100vh] xl:w-[60vw] flex flex-col justify-center items-center max-w-[1280px] w-[100vw]" id="projects">
            <div className="flex flex-col justify-center items-center xl:h-[20%] xl:w-[73.5%] mr-[6.5%] xl:opacity-100 opacity-0 h-0 w-0">
                <div className="flex flex-row justify-start items-center h-[60%] w-full">
                    <div className="text-7xl font-extrabold text-[var(--darkGreen)]">PROJECTS</div>
                    <div className="text-5xl font-extrabold italic text-white ml-[2%]">&</div>
                </div>
                <div className="flex flex-row justify-end items-center h-[40%] w-full">
                    <div className="text-5xl font-extrabold text-[var(--lightPink)]">ARTWORK</div>
                </div>
            </div>
            <div className="flex flex-row xl:h-[50%] xl:w-[73.5%] mr-[6.5%] justify-between items-center xl:opacity-100 opacity-0 h-0 w-0">
                <div className="flex flex-row justify-around items-around h-[110%] w-[55%] flex-wrap mt-[-7%]">
                    {Projects.map((item)=> {
                        return(
                            <a
                                key={item.name}
                                className="bg-[var(--darkGreen)] h-[47%] w-[48.5%] overflow-hidden relative flex flex-col items-center justify-center"
                                href="">
                                    <img src={item.src} alt={item.name} className="h-[100%] w-[100%] object-cover opacity-20 hover:opacity-100 duration-300" />

                            </a>
                        )
                    })}
                </div>
                <div className="flex flex-row justify-around items-around h-[100%] w-[41.9%] flex-wrap">
                    {Artwork.map((item)=>{
                        return(
                            <a
                                key={item.name}
                                className="bg-[var(--lightPink)] h-[41%] w-[48%] mb-[-1.5%]"
                                href="">
                                    <img src={item.src} alt={item.name} className="h-[100%] w-[100%] object-cover opacity-20 hover:opacity-100 duration-300"/>

                            </a>
                        )
                    })}
                    <div className="text-[var(--darkGreen)] text-center text-base mb-[-3%]">Purchase my art on redubble and view more on my art insta!</div>

                </div>

            </div>

            {/* <div className="xl:opacity-0 opacity-100 flex flex-col items-center justify-center w-full h-[200vh] xl:h-0 xl:w-0">
                <div className="text-5xl font-extrabold text-[var(--darkGreen)]">PROJECTS</div>
                <div className="flex flex-row justify-around items-around h-[50%] w-[60%] flex-wrap">
                        <div className="bg-[var(--darkGreen)] h-[21%] w-[100%]"></div>
                        <div className="bg-[var(--darkGreen)] h-[21%] w-[100%]"></div>
                        <div className="bg-[var(--darkGreen)] h-[21%] w-[100%]"></div>
                        <div className="bg-[var(--darkGreen)] h-[21%] w-[100%]"></div>
                </div>
                <div className="text-5xl font-extrabold text-[var(--lightPink)]">ARTWORK</div>
                    <div className="flex flex-row justify-around items-around h-[50%] w-[60%] flex-wrap">
                        <div className="bg-[var(--lightPink)] h-[32%] w-[48%]"></div>
                        <div className="bg-[var(--lightPink)] h-[32%] w-[48%]"></div>
                        <div className="bg-[var(--lightPink)] h-[32%] w-[48%] mb-[-3%]"></div>
                        <div className="bg-[var(--lightPink)] h-[32%] w-[48%] mb-[-3%]"></div>
                        <div className="text-[var(--darkGreen)] text-center text-base mb-[-3%]">Purchase my art on redubble and view more on my art insta!</div>

                    </div>


            </div> */}
            
        </div>
    )
}
