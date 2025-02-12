import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      {/* We should use Root.jsx to load dynamic Layout in the page here i am just using App.jsx for practice --- Always create a new file Root.jsx   */}
      <Footer />
    </>
  );
}

export default App;
