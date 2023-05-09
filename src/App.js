import "./App.css";
import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./screen/Root";
import ErrorPage from "./screen/Error";
import Main from "./screen/Main";
import Start from "./screen/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/start", element: <Main /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
