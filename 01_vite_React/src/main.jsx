import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <h1>Lets Get Started</h1>
      <App />
    </>
  </StrictMode>
);
