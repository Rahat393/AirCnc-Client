import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Main from "../Layout/Main";
import CommingSoon from "../../src/Pages/Shared/ComingSoon";
import Details from "../Pages/Details";
import SearchResult from "../Pages/SearchResult";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Welcome from "../Pages/Dashboard/Welcome";
import MyBookings from "../Pages/Dashboard/MyBookings";
import BecomeHost from "../Pages/Dashboard/BecomeHost";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AllBookings from "../Pages/Dashboard/AllBookings";
import AddHome from "../Pages/AddHome";
import ManageHome from "../Pages/Dashboard/ManageHome";
import AllHome from "../Pages/AllHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/all-homes",
        element: <AllHome />,
      },
      {
        path: "/comming-soon",
        element: <CommingSoon />,
      },
      {
        path: "/service-details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/homes/${params.id}`),
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "Dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "become-host",
        element: (
          <PrivateRoute>
            <BecomeHost />
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "all-bookings",
        element: (
          <PrivateRoute>
            <AllBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "add-home",
        element: (
          <PrivateRoute>
            <AddHome />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-home",
        element: (
          <PrivateRoute>
            <ManageHome />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
