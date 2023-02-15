import React from "react";

export const ArrowButton = ({ href }) => {
  return (
    <button className="h-9 w-9 rounded-full border-2 border-solid border-[#EBEBEB] grid place-items-center">
      <span className="material-symbols-rounded">arrow_outward</span>
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
      {num > 1 ? `${num} likes` : `${num} like`}
    </button>
  );
};