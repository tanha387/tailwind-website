import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Main } from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  children:[
    {
      path: "/",
      element: <Home/>
    },
  {
    path: "/about",
    element: <About/>
  },
]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);