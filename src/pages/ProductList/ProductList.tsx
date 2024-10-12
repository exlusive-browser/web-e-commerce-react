import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { ProductContainer } from "./components/ProductContainer";
import { PromotionalImages } from "@/pages/Landing/LandingPromotionalmages";
import { getImgUrl } from "@/lib/image-utils";

import { FilterSection } from "./FilterSection";
import { OrderSection } from "./OrderSection";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProductList = (category: string) => {
  return useQuery({
    queryKey: ["productList", category],
    queryFn: async () => {
      const url = `https://uninorte-web-ecommerce.inevaup.workers.dev/products?category=${category}`;
      const { data } = await axios.get(url);
      return data;
    },
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

export function ProductList() {
  const { id: category } = useParams();
  const { data } = useProductList(category || "");
  const formattedCategory = (category ?? "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const productCount = data?.length || 0;

  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <div className="flex flex-col px-4 md:flex-row md:px-6">
        <div className="mb-4 md:hidden">
          <div className="flex justify-between mb-4 md:hidden">
            <div className="w-1/2 mr-2">
              <FilterSection category={category || "null"} />
            </div>
            <div className="w-1/2 ml-2">
              <OrderSection />
            </div>
          </div>
          <p className="font-bold pl-2">
            <span className="text-gray-500 font-normal">
              {productCount} results in
            </span>{" "}
            {formattedCategory}
          </p>
        </div>

        <div className="hidden md:flex md:w-1/5 p-4 rounded-md">
          <FilterSection category={category || "null"} />
        </div>

        <div className="flex-1 p-4 md:w-2/3">
          <div className="flex flex-col">
            <p className="hidden md:block font-bold mb-5 text-lg">
              <span className="text-gray-500 font-normal">
                {productCount} results in
              </span>{" "}
              {formattedCategory}
            </p>
            <ProductContainer />
          </div>
        </div>

        <div className="hidden md:col md:block justify-between items-center mb-4">
          <OrderSection />
        </div>
      </div>
      <PromotionalImages item={{ image: getImgUrl("plp-ad.jpg"), link: "/" }} />
    </MainLayout>
  );
}
