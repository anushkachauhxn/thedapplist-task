import React from "react";

export const Default = ({ label, active = false }) => {
  return (
    <div
      className={`inline-block mr-2.5 px-3.5 py-1.5 w-fit rounded-2xl ${
        active ? "bg-[#000000]" : "bg-[#F7F7F7]"
      }`}
    >
      <h4
        className={`text-sm font-medium  ${
          active ? "text-[#FFF]" : "text-[#000000]"
        }`}
      >
        {label}
      </h4>
    </div>
  );
};

export const Ethereum = () => {
  return (
    <div className="inline-block mr-2.5 px-2 py-0.5 w-fit rounded-2xl border-2 border-solid border-[#000000] bg-[#F7F7F7]">
      <h4 className="text-sm font-medium text-[#000000]">Ethereum</h4>
    </div>
  );
};

export const Polygon = () => {
  return (
    <div className="inline-block mr-2.5 px-2 py-0.5 w-fit rounded-2xl border-2 border-solid border-[#362DA9] bg-[#E0DFF6]">
      <h4 className="text-sm font-medium text-[#292281]">Polygon</h4>
    </div>
  );
};

export const Binance = () => {
  return (
    <div className="inline-block mr-2.5 px-2 py-0.5 w-fit rounded-2xl border-2 border-solid border-[#FDD00D] bg-[#FFF7D7]">
      <h4 className="text-sm font-medium text-[#796301]">Binance</h4>
    </div>
  );
};
