"use client";

import { sections } from "@/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "../../components/navbar/NavLink";

const Navbar = () => {
  return (
    <nav className="h-screen min-w-[60px]">
      <div className="navbar flex flex-col gap-3 border text-gray-500 fixed bg-white h-screen z-50">
        <button className="grid place-items-center pt-5 text-2xl">
          <input id="ham" type="checkbox" />
          <label htmlFor="ham">
            <RxHamburgerMenu />
          </label>
        </button>

        <div className="flex flex-col">
          {sections.map((i) => (
            <NavLink key={i.name} item={i} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
