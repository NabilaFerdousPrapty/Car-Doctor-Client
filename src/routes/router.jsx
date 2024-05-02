
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'/about',
          element:<About/>
        },{
          path:"/services",
          element:<Services/>
        },{
          path:"/blog",
          element:<Blog/>
        },{
          path:"/contact",
          element:<Contact/>
        }
      ]
    },
  ]);