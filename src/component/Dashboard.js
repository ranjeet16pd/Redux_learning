import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ErrorEle from "./ErrorEle";
import { Provider } from "react-redux";
import store from "../store/store";
const Applayout = () => {
  return (
    <>
      <Provider store={store}> 
        <Navbar />
        <Outlet />
      </Provider>
    </>
  );
};

const Dashboard = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
      // errorElement: <ErrorEle />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Dashboard;
