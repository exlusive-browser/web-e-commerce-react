import { LandingPage } from "@/pages/Landing/LandingPage";
import { ProductList } from "@/pages/ProductList/ProductList";
import { ProductDescription } from "@/pages/ProductDescription/ProductDescription";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/product-list",
    element: <p>Product List Generic</p>,
  },
  {
    path: "/product-list/:category",
    element: <ProductList />,
  },
  {
    path: "/products/:id",
    element: <ProductDescription />,
  }
]);
