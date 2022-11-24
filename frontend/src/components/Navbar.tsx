import Image from "next/image";
import React from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import menuSchema from "../routes/menuSchema";

export default function NavBar() {
  const scrollPosition = useScrollPosition();
  const { useState } = React;

  const setActive = (index: number) => {
    const newMenu = [...menuSchema];
    newMenu.forEach((item) => (item.active = false));
    newMenu[index].active = true;
    setMenu(newMenu);
  };

  const [menuState, setMenu] = useState(menuSchema);

  return (
    <>
      <nav
        className={`sticky top-0 w-full font-poppins transition duration-300 ${
          scrollPosition > 0
            ? "border-b border-transparent border-opacity-0 bg-slate-900 shadow-lg backdrop-blur"
            : "border-b border-gray-400 border-opacity-20 bg-transparent"
        }`}
      >
        <div className="flex  justify-between px-10 sm:px-4 md:items-center xl:px-[155px]">
          <div className=" flex items-center justify-between py-3 md:py-5">
            <div className="flex justify-between">
              <Image
                src="/assets/logo-text.svg"
                alt="Nekoding Logo"
                width={150}
                height={50}
                className="mr-5"
              />

              <div className="flex items-center">
                <div className="hidden lg:flex">
                  {menuState.map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer px-3 py-2 text-sm font-normal tracking-[1.5px] transition duration-300
                    ${
                      item.active
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
          </div>
          <div className="mt-2 flex h-full min-w-[250px] cursor-pointer items-center justify-between text-base font-semibold text-white sm:mt-2 lg:mt-0">
            <div className="text-center">Login</div>
            <div className="h-9 w-28 items-center rounded-lg border py-[4px] text-center hover:bg-white hover:text-black">
              Register
            </div>
            {/* 3 dots vertical */}
            <div className="mr-1 flex h-6 w-6 flex-col justify-between lg:hidden">
              <div className="h-1 w-full rounded-full bg-white"></div>
              <div className="h-1 w-full rounded-full bg-white"></div>
              <div className="h-1 w-full rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </nav>
      {/* Responsive Menu */}
      {/* <div className="absolute top-0 right-0 mr-10 mt-16 h-[350px] w-[300px] bg-slate-600 p-3 shadow-lg sm:mr-5 lg:hidden">
        <div className="flex h-full flex-col justify-evenly">
          {menuState.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-md py-4 px-3 text-sm font-normal tracking-[1.5px] transition duration-300
                    ${
                      item.active
                        ? "rounded-md bg-purple-600 font-semibold text-white"
                        : "font-semibold text-gray-500 hover:text-white"
                    }
                    `}
              onClick={() => setActive(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
