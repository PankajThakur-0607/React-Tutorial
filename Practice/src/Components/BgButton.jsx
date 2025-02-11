import React, { useEffect } from "react";
import { useState } from "react";

function BgButton() {
  const [color, setColor] = useState("gray");

  function updateColor(newColor) {
    return function () {
      setColor(newColor);
    };
  }
  return (
    <>
      <div
        className="min-h-64 w-full   bg-gray-700 py-4 mt-2 flex  justify-center "
        style={{ background: color }}
      >
        <h1 className="text-white text-2xl">BackGround Changer</h1>
      </div>

      <div className="bg-gray-700 w-full px-5 py-3 text-white flex flex-wrap justify-center gap-3">
        <button
          onClick={updateColor("#1E1014")}
          className="px-4 py-1 rounded-full cursor-pointer"
          style={{ backgroundColor: "#1E1014" }}
        >
          Licorice
        </button>
        <button
          onClick={() => setColor("red")}
          className="px-4 py-1 rounded-full cursor-pointer "
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={updateColor("green")}
          className="px-4 py-1 rounded-full cursor-pointer"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("#1798E3")}
          className="px-4 py-1 rounded-full cursor-pointer"
          style={{ backgroundColor: "#1798E3" }}
        >
          blue
        </button>
        <button
          onClick={() => setColor("#BD2D87")}
          className="px-4 py-1 rounded-full cursor-pointer"
          style={{ backgroundColor: "#BD2D87" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("#561E4F")}
          className="px-4 py-1 rounded-full cursor-pointer"
          style={{ backgroundColor: "#561E4F" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("#FE611E")}
          className="px-4 py-1 rounded-full cursor-pointer"
          style={{ backgroundColor: "#FE611E" }}
        >
          Orange
        </button>
        <button
          onClick={() => setColor("#E8E80A")}
          className="px-4 py-1 rounded-full cursor-pointer text-black"
          style={{ backgroundColor: "#F7F144" }}
        >
          Yellow
        </button>
      </div>



      
    </>
  );
}

export default BgButton;
