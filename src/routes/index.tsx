import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layouts/HomeLayout";

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout ChildrenComponent={HomePage} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
