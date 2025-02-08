import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Casino from "../pages/Casino/Casino";
import CasinoIFrame from "../pages/CasinoIFrame/CasinoIFrame";

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
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/casino/:eventId/:eventTypeId",
      element: <CasinoIFrame />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
