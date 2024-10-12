import { LandingPage } from "@/pages/Landing/LandingPage";
import { ProductList } from "@/pages/ProductList/ProductList";
import { ProductDescription } from "@/pages/ProductDescriptionPage/ProductDescription";
import { ProductListCart } from "@/pages/ShoppingCart/ProductListCart";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/categories/:id",
    element: <ProductList />,
  },
  // TODO: remove :id from the path, only :title is enough
  {
    path: "/products/:id/:title",
    element: <ProductDescription />,
  },
  {
    path: "/shopping-cart",
    element: <ProductListCart />,
  },
]);
