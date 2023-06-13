"use client"

export function SliderNav() {

 if (typeof window !== "undefined") {

  window.addEventListener("scroll", function() {
    var home: any = document.getElementById("home");
    var about: any = document.getElementById("about");
    var skills: any = document.getElementById("skills");
    var port: any = document.getElementById("projects");
    var contact: any = document.getElementById("contact");

    const disttop = {
      home: '-1px',
      abt: '39px',
      proj: '79px',
      skls: '119px',
      ctct: '159px'
    }

  

    function bloom(distance: string) {
      document.documentElement.style.setProperty('--flowertop', distance)
      console.log(disttop.home);
    }


    if (window.scrollY >= (home.offsetTop) && window.scrollY < (home.offsetTop + home.offsetHeight)) {
      bloom(disttop.home);
    }
    if (window.scrollY >= (home.offsetTop + home.offsetHeight) && window.scrollY < (about.offsetTop + about.offsetHeight)) {
      bloom(disttop.abt);
    }
    if (window.scrollY >= (about.offsetTop + about.offsetHeight) && window.scrollY < (port.offsetTop + port.offsetHeight)) {
      bloom(disttop.proj);
    }
    if (window.scrollY >= (port.offsetTop + port.offsetHeight) && window.scrollY < (skills.offsetTop + skills.offsetHeight)) {
      bloom(disttop.skls);
    }
    if (window.scrollY >= (skills.offsetTop + skills.offsetHeight) && window.scrollY < (contact.offsetTop + contact.offsetHeight)) {
      bloom(disttop.ctct);
    }
    
  })
 }




  return (
    <div className="flex flex-row items-center justify-center nav md:opacity-100 opacity-0">
      <div className="sans-class nav flex flex-col gap-y-4 justify-center items-end mb-auto text-sm text-[#65a888] pr-[5px]">
        {navLinks.map((item) => {
          return (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[#524956] pl-2 pr-2 mt-1 rounded-full duration-300 nav-items" id={item.id}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

type navLink = {
  name: string;
  href: string;
  id: string;
};

const navLinks: navLink[] = [
  {
    name: "home",
    href: "#home",
    id: "homelink",
  },
  {
    name: "about",
    href: "#about",
    id: "aboutlink",
  },
  {
    name: "projects & art",
    href: "#projects",
    id: "projectsArtlink",
  },
  {
    name: "skills",
    href: "#skills",
    id: "skillslink",
  },
  {
    name: "contact",
    href: "#contact",
    id: "contactlink",
  },
];
