import React, { useState } from "react";

export const ChainDropdown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-fit">
      <button
        className="px-2.5 py-1 inline-flex justify-center rounded-md border-2 border-solid border-[#EBEBEB]"
        onClick={() => setVisible(!visible)}
      >
        Select Chain
        <span className="ml-1 material-symbols-rounded">expand_more</span>
      </button>

      <div className="relative w-full">
        <div
          className={`${
            !visible && "hidden"
          } absolute w-full mt-1 rounded-md border-2 border-solid border-[#EBEBEB] bg-white`}
        >
          <div className="py-1">
            <a href="" className="px-4 py-2 block text-sm hover:bg-[#F7F7F7]">
              Ethereum
            </a>
            <a href="" className="px-4 py-2 block text-sm hover:bg-[#F7F7F7]">
              Polygon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SortByDropdown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-fit">
      <button
        className="px-2.5 py-1 inline-flex justify-center rounded-md border-2 border-solid border-[#EBEBEB]"
        onClick={() => setVisible(!visible)}
      >
        Sort By
        <span className="ml-1 material-symbols-rounded">expand_more</span>
      </button>

      <div className="relative w-full">
        <div
          className={`${
            !visible && "hidden"
          } absolute w-full mt-1 rounded-md border-2 border-solid border-[#EBEBEB] bg-white`}
        >
          <div className="py-1">
            <a href="" className="px-4 py-2 block text-sm hover:bg-[#F7F7F7]">
              Likes
            </a>
            <a href="" className="px-4 py-2 block text-sm hover:bg-[#F7F7F7]">
              Votes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
