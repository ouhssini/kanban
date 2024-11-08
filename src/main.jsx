import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DataProvider from "./context/Context.jsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={routes} />
    </DataProvider>
  </StrictMode>
);
