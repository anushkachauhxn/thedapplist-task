import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="container px-12 py-6">
        <h1 className="text-3xl">
          Search results for <span className="font-extrabold">Projects</span>
        </h1>

        <div className="my-6 grid grid-cols-4 gap-12">
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
