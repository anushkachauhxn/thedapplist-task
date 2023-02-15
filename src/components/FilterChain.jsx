import React from "react";
import { NextButton, PrevButton } from "./Buttons";
import { Default } from "./Chips";

const FilterChain = () => {
  const handleNext = () => {
    const filters = document.getElementById("filterBar");
    setTimeout(() => {
      filters.scrollLeft += 1000;
    }, 10);
  };

  const handlePrev = () => {
    const filters = document.getElementById("filterBar");
    setTimeout(() => {
      filters.scrollLeft -= 1000;
    }, 10);
  };

  return (
    <div className="mr-2 w-[80%] flex items-center">
      <PrevButton handleClick={handlePrev} />

      <div
        id="filterBar"
        className="-ml-2 -mr-4 inline-block flex overflow-x-auto no-scrollbar scroll-smooth"
      >
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

        <Default label="2 Metaverse" />
        <Default label="2 Defi" />
        <Default label="2 Game" />
        <Default label="2 Media" />
        <Default label="2 Price Tracker" />
        <Default label="2 Gambling" active={true} />
        <Default label="2 Marketplace" />
        <Default label="2 Dao" />
        <Default label="2 Marketplace" />
        <Default label="2 Others" />
      </div>

      <NextButton handleClick={handleNext} />
    </div>
  );
};

export default FilterChain;
