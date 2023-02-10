import {createBrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

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
            path: "/" ,
            element: <Cart/>,
          },
          {
            path: "/category2" ,
            element: <>category 2</>,
          }, 
          {
            path: "/category3" ,
            element: <>category 3</>,
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
    ]
  },
 
  {
    path: "/admin",
    element:<Admin/>,
  },
 
]);