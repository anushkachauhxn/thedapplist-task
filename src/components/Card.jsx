import React from "react";
import { ArrowButton, Likes, Views } from "./Buttons";
import { Binance, Ethereum, Polygon } from "./Chips";
import ProfileImg from "../assets/profile-pic.png";

const Card = () => {
  return (
    <div className="h-[360px] flex flex-col justify-between divide-y rounded-2xl border-2 border-solid border-[#F7F7F7]">
      <div className="h-full p-5 flex flex-col justify-between">
        <div className="flex justify-between">
          <img className="rounded-full" src={ProfileImg} alt="" />
          <ArrowButton />
        </div>

        <div>
          <h2 className="text-xl font-extrabold">Foundation</h2>
          <p className="mt-1 text-sm text-[#6B6B6B] line-clamp-4">
            Foundation is a platform that aims to build a new creative economy—a
            world where creators can use the Ethereum blockchain to value their
            work in entirely new ways, and build stronger connections with their
            supporters.
          </p>
        </div>

        <div>
          <Ethereum />
          <Polygon />
          <Binance />
        </div>
      </div>

      <div className="px-5 py-3 flex justify-between items-center bg-[#F7F7F74D]">
        <Views num={200} />
        <Likes num={1} />
      </div>
    </div>
  );
};

export default Card;
