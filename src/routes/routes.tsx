import { LandingPage } from "@/pages/Landing/LandingPage";
import { ProductList } from "@/pages/ProductList/ProductList";
import { ProductDescription } from "@/pages/ProductDescription/ProductDescription";
import { ProductListCart } from "@/pages/ShoppingCart/ProductListCart";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/products",
    element: <p>Product List Generic</p>,
  },
  {
    path: "/products/category/:id",
    element: <ProductList />,
  },
  {
    path: "/products/:id",
    element: <ProductDescription />,
  },
  {
    path: "/shopping-cart",
    element: <ProductListCart />,
  },
]);
