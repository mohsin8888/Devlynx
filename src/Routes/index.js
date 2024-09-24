import React from "react";
import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Service from "../pages/Service";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact_Us from "../pages/Contact _Us";

// Using createHashRouter for hash-based routing
const Router = createHashRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact-us",
        element: <Contact_Us />,
      },
    ],
  },
]);

export default Router;
