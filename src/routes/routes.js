import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventor/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import Shop from "../components/Shop/Shop";
import Signup from "../components/Signup/Signup";
import Main from "../layouts/Main";
import { productAndCartLoader } from "../loader/productAndCartLoader";

export const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      { path: '/', element: <Shop></Shop>, loader: productAndCartLoader},
      { path: '/orders', element: <Orders></Orders>, loader: productAndCartLoader},
      { path: '/inventory', element: <Inventory></Inventory> },
      { path: '/signup', element: <Signup></Signup> },
      { path: '/login', element: <Login></Login> },
      { path: '/about', element: <About></About> }
    ]
  }
])