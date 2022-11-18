import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventor/Inventory";
import Orders from "../components/Orders/Orders";
import Shop from "../components/Shop/Shop";
import Main from "../layouts/Main";
import { productAndCartLoader } from "../loader/productAndCartLoader";

export const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      { path: '/', element: <Shop></Shop>, loader: productAndCartLoader},
      { path: '/orders', element: <Orders></Orders>, loader: productAndCartLoader},
      { path: '/inventory', element: <Inventory></Inventory> },
      { path: '/about', element: <About></About> }
    ]
  }
])