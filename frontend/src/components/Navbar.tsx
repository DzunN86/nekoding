import Image from "next/image";
import React from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import menuSchema from "../routes/menuSchema";
import DropdownMenu from "./DropdownMenu";

export default function NavBar() {
  const scrollPosition = useScrollPosition();
  const { useState } = React;

  const setActive = (index: number) => {
    const newMenu = [...menuSchema];
    newMenu.forEach((item) => (item.active = false));
    newMenu[index].active = true;
    setMenu(newMenu);
  };

  const show = () => {
    setShowMenu(!showMenu);
  };

  const [menuState, setMenu] = useState(menuSchema);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav
        className={`sticky top-0 w-full font-poppins transition duration-300 ${scrollPosition > 0
          ? "bg-slate-900 shadow-lg backdrop-blur"
          : "bg-transparent"
          }`}
      >
        <div className="flex justify-between py-3 px-10 md:items-center md:px-10 xl:px-[155px]">
          <div className="flex items-center justify-between py-3 md:py-5">
            <Image
              src="/assets/logo-text.svg"
              alt="Nekoding Logo"
              width={150}
              height={50}
              className="mr-5"
            />
            <div className="flex justify-between">
              <div className="lg:flex hidden items-center">

                {menuState.map((item, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer px-3 py-2 text-sm font-normal tracking-[1.5px] transition duration-300
                    ${item.active
                        ? "font-semibold text-white"
                        : "font-semibold text-gray-500 hover:text-white"
                      }
                    `}
                    onClick={() => setActive(index)}
                  >
                    {item.name}
                  </div>
                ))}

              </div>
            </div>
          </div>
          <DropdownMenu />

          <div className="mt-2 hidden h-full min-w-[250px] items-center justify-around text-base font-semibold text-white sm:mt-2 lg:mt-0 lg:flex">
            <a href="#" className="text-center hover:bg-black bg-opacity-20 px-8 py-2 rounded-lg">
              Login
            </a>
            <a
              href="#"
              className="h-9 w-28 items-center rounded-lg border bg-transparent py-[4px] text-center hover:bg-white hover:text-black"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`absolute top-0 right-0 m-5 block h-[350px] w-[300px] rounded-lg bg-slate-800 p-3 shadow-lg transition-all duration-300 lg:hidden
        ${showMenu ? "block" : "hidden"}
        `}
        id="menu"
      >
        <button
          type="button"
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          tabIndex={0}
          onClick={show}
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="h-2.5 w-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>

        <div className="flex h-full flex-col justify-evenly">
          {menuState.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-md py-4 px-3 text-sm font-medium tracking-[1.5px] transition duration-300
                    ${item.active
                  ? "rounded-md font-semibold text-white"
                  : "font-semibold text-gray-500 hover:text-white"
                }
                    `}
              onClick={() => setActive(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
