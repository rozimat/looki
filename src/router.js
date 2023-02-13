import {createBrowserRouter, Navigate} from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./components/admin/Admin";
import AdminPanel from "./components/adminPanel/AdminPanel";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Cart2 from "./components/cart/Cart2";
import Cart3 from "./components/cart/Cart3";
import Pratect from "./components/protected/Pratect";
import Navbar from './components/navbar/AddCarts';
export const routes = createBrowserRouter([

  {
    path: "/",
    element:<Header/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        children:[
          {
            path: "/",
            element: <Cart/>,
          },
          {
            path: "/category=2" ,
            element: <Cart2/>,
          }, 
          {
            path: "/category=3" ,
            element: <Cart3/>,
          },
        ]
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
      {
        path: "/carts",
        element: <Navbar/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/adminpanel",
    element:
 <AdminPanel/>,
    
   
  }
]);