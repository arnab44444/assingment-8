
import {
    createBrowserRouter,
  } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Blogs from "../pages/Blogs";
import DoctorDetails from "../pages/DoctorDetails";

  
  const router = createBrowserRouter([
      {
        path: "/",
        Component : MainLayout,
        errorElement: <ErrorPage></ErrorPage> ,
        children:[
          {
              index: true,
              element: <Home></Home>,
  
              
  
              loader : () => fetch('../doctors.json'),
              hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>,
  
          },
          {
            path: '/bookings',
            Component: Booking,
          },
          
          {
            path: "/blog",
            element: <Blogs></Blogs>
          },
          {
            path: '/contactUs',
            Component: ErrorPage,
          },
          {
              path: "/doctor-details/:id",
              element: <DoctorDetails></DoctorDetails>,
  
              hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>,
   
              loader : () => fetch('../doctors.json'),
          }
        ]
      },
      
    ]);
  
    export default router