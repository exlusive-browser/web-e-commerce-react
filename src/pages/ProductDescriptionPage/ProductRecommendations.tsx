import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "../Landing/ProductCard";
import ErrorMessage from "@/components/ui/ErrorMessage";
import SkeletonCard from "@/components/ui/SkeletonCard";

interface ProductRecommendationsProps {
  currentProductId: number;
}

export const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ currentProductId }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["recommendedProducts", currentProductId],
    queryFn: () => getRecommendedProducts(currentProductId),
  });

  if (isLoading) {
    return (
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array(4).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!Array.isArray(data)) {
    return <ErrorMessage />;
  }

  return (
    <div className="container mx-auto p-5">
      <section className="might-be-int" id="might-be-int">
        <h2 className="text-2xl font-bold mb-4">You might be interested in</h2>
        <hr className="mb-4" style={{ borderColor: "#2e86c1", borderWidth: "2px" }} />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((product: any) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              onClick={() => console.log(`Navigating to /products/${product.id}`)}
            >
              <ProductCard
                id={product.id}
                image={product.image}
                hoverImage={product.hoverImage}
                title={product.title}
                brand={product.brand}
                discount={product.discount}
                originalPrice={product.originalPrice}
                price={product.price}
                seller={product.seller}
                rating={product.rating}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

const getRecommendedProducts = async (currentProductId: number) => {
  const baseId = Math.floor(currentProductId / 10) * 10;
  const response = await fetch(`https://uninorte-web-ecommerce.inevaup.workers.dev/products?id_ne=${currentProductId}&id_gte=${baseId}&id_lte=${baseId + 9}&_limit=4`);
 
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};