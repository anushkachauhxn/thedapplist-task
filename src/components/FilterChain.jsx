import React from "react";
import { NextButton, PrevButton } from "./Buttons";
import { Default } from "./Chips";

const FilterChain = () => {
  return (
    <div className="mr-2 w-full flex items-center">
      <PrevButton />
      <div className="-ml-2 -mr-4 w-fit">
        <Default label="Metaverse" />
        <Default label="Defi" />
        <Default label="Game" />
        <Default label="Media" />
        <Default label="Price Tracker" />
        <Default label="Gambling" active={true} />
        <Default label="Marketplace" />
        <Default label="Dao" />
        <Default label="Marketplace" />
        <Default label="Others" />
      </div>
      <NextButton />
    </div>
  );
};

export default FilterChain;
