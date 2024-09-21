import { LandingPage } from "@/pages/Landing/LandingPage";
import { ProductList } from "@/pages/ProductList/ProductList";
import TopsellingProducts from "@/pages/Products/TopsellingProducts"; 
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/Landing-page",
    element: <LandingPage />,
  },
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/", 
    element: <TopsellingProducts />,
  },

]);
