import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  const obj = {
    userName: "Pankaj",
    Password: 12345,
  };

  const arr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-500 rounded-xl p-4 text-yellow-300">
        TailWind CSS Test{" "}
      </h1>
      <Card TutorialName="React Tutorial | Pankaj Thakur" myObj={obj} />
      <Card TutorialName="Monika Singh" />
    </>
  );
}

export default App;
