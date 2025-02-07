import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  function updateColor(newColor) {
    return function () {
      setColor(newColor);
    };
  }
  return (
    <div
      className="h-screen w-screen duration-200 flex  justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="mt-4 text-2xl font-medium text-white">
        BackGround Changer
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-25 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white  ">
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
      </div>
    </div>
  );
}

export default App;
