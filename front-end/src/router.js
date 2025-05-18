import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Category from "./pages/Category.js";
import Product from "./pages/Product.js";
import Cart from "./pages/Cart.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import App from "./App.js";
import Categories from "./pages/Categories.js";
import { getData } from "./api/api.js";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "category/:name", element: <Category /> },
      {
        path: "category/:id/product/:id",
        element: <Product />  ,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      ,
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
