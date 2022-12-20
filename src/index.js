import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/Error";
import Logout from "./Components/Logout/Logout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
