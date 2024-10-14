import ErrorMessage from "@/components/ui/ErrorMessage";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { ProductListCard } from "./ProductListCard";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "@/repositores/product.repository";

const useProductList = (category: string) => {
  return useQuery({
    queryKey: ["productList", category],
    queryFn: () => getProductsByCategory(category),
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

export function ProductContainer() {
  const { id: category } = useParams();

  const { data, error, isLoading } = useProductList(category || "");

  if (isLoading) {
    return (
      <div className="flex flex-col">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <ErrorMessage />;
  }

  return <ProductListCard products={data} />;
}
