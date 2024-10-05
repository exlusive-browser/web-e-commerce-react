import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductCard } from "./ProductCard"; 
import ErrorMessage from "../../components/ui/ErrorMessage";
import SkeletonCard from "../../components/ui/SkeletonCard";
import { formatTitle } from "@/lib/format-title";

const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const { data } = await axios.get("https://uninorte-web-ecommerce.inevaup.workers.dev/top-selling"); 
      return data;
    },
    retry: 2, 
    refetchOnWindowFocus: false,
  });
};

export const TopsellingProducts: React.FC = () => { 
  const { data, error, isLoading } = useFeaturedProducts();

  if (isLoading) {
    return (
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array(12).fill(0).map((_, index) => (
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
      <h2 className="text-2xl font-sans mb-5">
        Technology <span className="text-gray-500">{data.length} results</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((product: any) => (
          <Link key={product.id} to={`/products/${product.id}/${formatTitle(product.title)}`} onClick={() => console.log(`Navigating to /products/${product.id}`)}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <nav aria-label="Page navigation">
          <ul className="inline-flex space-x-2">
            <li>
              <Link to="#" className="px-4 py-2 text-blue-600 bg-blue-200 rounded-lg">1</Link>
            </li>
            <li>
              <Link to="#" className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg">2</Link>
            </li>
            <li>
              <Link to="#" className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg">3</Link>
            </li>
            <li>
              <Link to="#" className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg">4</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
