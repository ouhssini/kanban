import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import New from "../views/New";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "*",
    element: <h1 className="text-4xl font-black text-teal-700">NOT FOUND</h1>,
  },
]);
