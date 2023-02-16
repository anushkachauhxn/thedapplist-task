import React, { useEffect, useState } from "react";
import { CloseButton } from "./Buttons";

const CategoriesDrawer = ({ categories }) => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([Array(categories.length).fill(false)]);

  useEffect(() => {
    console.log("visible", visible);
  }, [visible]);

  return (
    <>
      <button
        className="px-2.5 py-1 flex justify-center rounded-md border-2 border-solid border-[#EBEBEB] whitespace-nowrap"
        onClick={() => setVisible(!visible)}
      >
        Categories
        <span className="ml-1 material-symbols-rounded">chevron_right</span>
      </button>

      <div
        id="categoriesDrawer"
        className={`absolute top-0 left-0 bottom-0 z-40 h-screen w-60 py-4 overflow-y-auto no-scrollbar bg-white transition-transform duration-200 ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 pb-4 flex justify-between items-center border-b-2">
          <h2 className="font-extrabold text-lg">Categories</h2>
          <CloseButton handleClick={() => setVisible(false)} />
        </div>

        <ul className="px-4">
          {categories.map((category, index) => (
            <li
              className="form-check px-3 py-4 flex items-center gap-2 border-b-2"
              key={index}
            >
              <input
                className="opacity-0 absolute h-6 w-6"
                type="checkbox"
                onChange={(e) => {
                  let newValues = [...values];
                  newValues[index] = e.target.checked;
                  setValues(newValues);
                }}
              />
              <div
                className={`rounded-md border-2 h-6 w-6 grid place-items-center text-white ${
                  values[index]
                    ? "bg-black border-black"
                    : "bg-white border-[#EBEBEB]"
                } transition duration-200`}
              >
                <span className="material-symbols-rounded text-[16px]">
                  check
                </span>
              </div>

              <label>{category}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesDrawer;
