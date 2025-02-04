import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App </h1>
    </div>
  );
}


// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "click me to Visit Google",
// };

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit to Google! </a>
)
  

const anotherUser = "Monisa Kingh"
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com' , target : '_blank'},
  'click to visit Google !',
  anotherUser
)


createRoot(document.getElementById("root"))
.render(
    reactElement
);
