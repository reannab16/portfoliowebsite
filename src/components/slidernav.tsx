import { Cherry } from "./icons";

export function SliderNav() {
  return (
    <div className="flex flex-row items-center justify-center nav md:opacity-100 opacity-0">
      <div className="sans-class nav flex flex-col gap-y-4 justify-center items-end mb-auto text-sm text-[#65a888] pr-[5px]">
        {navLinks.map((item) => {
          return (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[#524956] pl-2 pr-2 mt-1 rounded-full duration-300 nav-items"
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
};

const navLinks: navLink[] = [
  {
    name: "home",
    href: "#home",
  },
  {
    name: "about",
    href: "#about",
  },
  {
    name: "projects",
    href: "#projects",
  },
  {
    name: "contact",
    href: "#contact",
  },
];
