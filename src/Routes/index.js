import React from "react";
import { createBrowserRouter } from "react-router-dom";
import  Home  from "../pages/Home";
import DashboardLayout from '../layout/DashboardLayout';
 import Service from "../pages/Service";
import About from "../pages/About";
 import Careers from "../pages/Careers";
 import Contact_Us from "../pages/Contact _Us";
 const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DashboardLayout/>
        ),

    children: [
        {
          path: "/",
          element: <Home />,
        }, 
        {
            path: "/services",
            element: <Service  />,
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
    ]

    }
 ]);
 export default Router;