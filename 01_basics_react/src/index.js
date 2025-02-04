import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


// Javacript ko html me lana hi padega nhi toh we cannot manipulate 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
