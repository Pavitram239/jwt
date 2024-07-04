import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddProduct,
  AddUser,
  Dashboard,
  Home,
  Login,
  Products,
  Register,
} from "./pages";
import { action as loginAction } from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
          {
            path: "add-user",
            element: <AddUser />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
