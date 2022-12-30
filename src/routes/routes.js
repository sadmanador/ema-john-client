import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventor/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import Shipping from "../components/Shipping/Shipping";
import Shop from "../components/Shop/Shop";
import Signup from "../components/Signup/Signup";
import Main from "../layouts/Main";
import { productAndCartLoader } from "../loader/productAndCartLoader";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: productAndCartLoader
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: productAndCartLoader
      },
      {
        path: '/inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/shipping',
        element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  }
])