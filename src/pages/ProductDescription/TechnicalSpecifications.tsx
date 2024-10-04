import { useQuery } from "@tanstack/react-query";
import { Product } from "@/entities/Product";
import { getProductById } from "@/repositores/product.repository";
import { importImage } from "@/lib/image-utils";
import { Spinner } from "@/components/ui/spinner";
import ErrorMessage from "@/components/ui/ErrorMessage";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

interface ProductDetailProps {
    id: number;
}

export const TechnicalSpecifications: React.FC<ProductDetailProps> = ({ id }) => {
    const { isLoading, isError, data, error } = useQuery<Product, Error>({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
    });
    if (isLoading) {
        return <Spinner size="large" />;
    }

    if (isError || !data) {
        return <ErrorMessage />
    }
    return (
        <section className="tech-spec px-2 lg:px-24 bg-white">
            <h2 className="pt-8 text-2xl font-bold text-[#333]">Technical specifications</h2>
            <hr className="border-none h-1 bg-[#2e86c1] w-full m-0" />
            <table className="w-full border-collapse mt-5">
                <thead className="bg-[#5499cd]">
                    <tr>
                        <th className="p-4 text-white">Feature</th>
                        <th className="p-4 text-white">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.technicalSpecifications.map((spec, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? "bg-gray-200" : ""}`}>
                            <td className="font-bold p-4 text-center">{spec.feature}</td>
                            <td className="p-4 text-center">
                                {spec.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}