import "./App.css";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./context/UserContextProvider";
import { ThemeProvider } from "./context/Theme";
import { useEffect, useState } from "react";
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";
// function App() {
//   return (
//     <UserContextProvider>
//       <h1>Context Api</h1>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//   );
// }

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const theme = document.querySelector("html");
    theme.classList.remove("light", "dark");
    theme.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
