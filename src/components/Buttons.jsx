import React from "react";

export const LinkButton = ({ href }) => {
  return (
    <button className="h-9 w-9 rounded-full border-2 border-solid border-[#EBEBEB] grid place-items-center">
      <span className="material-symbols-rounded">arrow_outward</span>
    </button>
  );
};

export const PrevButton = ({ handleClick }) => {
  return (
    <button
      className="p-1.5 z-10 rounded-full bg-white border-2 border-solid border-[#EBEBEB] grid place-items-center"
      onClick={handleClick}
    >
      <span class="material-symbols-rounded">chevron_left</span>
    </button>
  );
};

export const NextButton = ({ handleClick }) => {
  return (
    <button
      className="p-1.5 z-10 rounded-full bg-white border-2 border-solid border-[#EBEBEB] grid place-items-center"
      onClick={handleClick}
    >
      <span class="material-symbols-rounded">chevron_right</span>
    </button>
  );
};

export const Views = ({ num }) => {
  return (
    <button
      className="flex justify-center gap-1.5 text-[#6B6B6B] font-medium"
      disabled
    >
      <span
        className="material-symbols-rounded"
        style={{
          fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 48",
        }}
      >
        visibility
      </span>
      {num}
    </button>
  );
};

export const Likes = ({ num }) => {
  return (
    <button className="px-2.5 py-1 flex justify-center gap-2 rounded-3xl border-2 border-solid border-[#EBEBEB] font-medium">
      <span className="material-symbols-rounded">favorite</span>
      {num == 1 ? `${num} like` : `${num} likes`}
    </button>
  );
};
