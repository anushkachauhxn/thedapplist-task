import React from "react";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import { ChainDropdown, SortByDropdown } from "./components/Dropdowns";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="container px-12 py-6">
        <h1 className="text-3xl">
          Search results for <span className="font-extrabold">Projects</span>
        </h1>

        <div className="mt-6 flex gap-3 items-center">
          <FilterBar />
          <ChainDropdown />
          <SortByDropdown />
        </div>

        <div className="my-6 grid grid-cols-4 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default App;
