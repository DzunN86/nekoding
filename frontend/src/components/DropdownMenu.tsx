import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import menuSchema from "../routes/menuSchema";

export default function DropdownMenu(props: any) {
  const setActive = (index: number) => {
    const newMenu = [...menuSchema];
    newMenu.forEach((item) => (item.active = false));
    newMenu[index].active = true;
    setMenu(newMenu);
  };

  const [menuState, setMenu] = useState(menuSchema);
  return (
    <Menu
      as="div"
      className={`relative inline-block cursor-pointer text-left lg:hidden`}
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right  rounded-md bg-slate-800 p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuState.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-slate-900" : ""
                  } group flex w-full items-center rounded-md px-4 py-2 text-sm text-white`}
                  onClick={() => setActive(index)}
                >
                  {item.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
