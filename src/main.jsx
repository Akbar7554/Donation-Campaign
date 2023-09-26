import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DonationDetails from "./Components/DonationDetails/DonationDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/donation.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/donation.json")
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
