import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import {
  User,
  Github,
  Home,
  Profile,
  Contact,
  About,
  githubInfoLoader,
} from "./Components";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact-us",
//         element: <Contact />,
//       },
//       {
//         path: "/User/:userid",
//         element: <User />,
//       },
//       {
//         loader: githubInfoLoader,
//         path: "github",
//         element: <Github />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="contact-us" element={<Contact />} />
      <Route path="User/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
