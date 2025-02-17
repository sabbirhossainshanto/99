import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Casino from "../pages/Casino/Casino";
import CasinoIFrame from "../pages/CasinoIFrame/CasinoIFrame";
import Register from "../pages/Register/Register";

import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Deposit from "../pages/Deposit/Deposit";
import ChangePasswordLogin from "../pages/ChangePasswordLogin/ChangePasswordLogin";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import ChangeButtonValue from "../pages/ChangeButtonValue/ChangeButtonValue";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/change-btn-value",
          element: <ChangeButtonValue />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/change-password-login",
      element: <ChangePasswordLogin />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/casino/:name/:gameId",
      element: <CasinoIFrame />,
    },
    {
      path: "/deposit",
      element: <Deposit />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
