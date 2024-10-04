import ErrorMessage from '@/components/ui/ErrorMessage';
import SkeletonCard from '@/components/ui/SkeletonCard';
import { ProductListCard } from './ProductListCard';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
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

export function ProductContainer() {
    const { category } = useParams<{ category: string }>();

    const { data, error, isLoading } = useProductList(category || '');

    if (isLoading) {
        return (
            <div className="flex flex-col">
                    {Array(6).fill(0).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
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
        <ProductListCard
            products={data}
        />
    );
}