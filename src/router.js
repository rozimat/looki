import {createBrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";

export const routes = createBrowserRouter([
  
  {
    path: "/",
    element:<Header/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/shop",
        element: <>Shops</>,
      },
      {
        path: "/pages" ,
        element: <>page</>,
      },
      {
        path: "/blogs",
        element: <>Blogs</>,
      },
      {
        path: "/contacts",
        element: <>contacts</>,
      },
    ]
  },
 
  {
    path: "/admin",
    element:<Admin/>,
  },
 
]);