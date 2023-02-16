import React from "react";
import Logo from "../assets/logo-black.png";
import MobLogo from "../assets/mobile-logo.png";
import { MenuButton } from "./Buttons";

const Navbar = () => {
  return (
    <div className="px-6 sm:px-12 py-4 flex justify-between items-center gap-3 border-b-2">
      <div className="flex items-center gap-8">
        <div className="min-w-max">
          <a href="#">
            <img className="max-sm:hidden" src={Logo} alt="logo" />
            <img className="sm:hidden" src={MobLogo} alt="logo" />
          </a>
        </div>

        <ul className="flex gap-4 font-medium max-sm:hidden">
          <li className="hover:underline">
            <a href="">Products</a>
          </li>
          <li className="hover:underline">
            <a href="">Resources</a>
          </li>
          <li className="hover:underline">
            <a href="">Leaderboard</a>
          </li>
        </ul>
      </div>

      <div className="px-3 py-1.5 flex items-center gap-2 rounded-3xl bg-[#F7F7F7] border-2 border-solid border-[#EBEBEB] sm:flex-row-reverse">
        <input
          type="search"
          placeholder="Search Projects"
          className="bg-transparent w-[150px] lg:w-auto"
        />
        <span className="material-symbols-rounded">search</span>
      </div>

      <div className="sm:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default Navbar;
