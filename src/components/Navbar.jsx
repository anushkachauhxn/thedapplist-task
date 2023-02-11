import React from "react";
import Logo from "../assets/logo-black.png";
import SearchIcon from "../assets/search.png";

const Navbar = () => {
  return (
    <div className="container px-12 py-4 flex justify-between items-center border-b-2">
      <div className="flex items-center gap-8">
        <div>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="flex gap-4 font-medium">
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

      <div className="py-1.5 px-3 rounded-3xl bg-[#F7F7F7] border-2 border-solid border-[#EBEBEB] flex gap-2">
        <img src={SearchIcon} alt="" />
        <input
          type="search"
          className="bg-transparent"
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default Navbar;
