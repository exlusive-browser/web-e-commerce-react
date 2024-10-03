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

export const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
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
    const images = [
        importImage(data.image),
        importImage(data.hoverImage),
    ];


    return (
        <section className="product-desc2 px-6 md:px-24 bg-white shadow-md rounded-md" id="product-desc2">
            <h1 className="text-2xl font-bold mb-4 text-[#333] py-6">{data.title}</h1>
            <div className="container-sec1 flex flex-col md:flex-row gap-6">
                <div className="flex flex-1 justify-center items-center">
                    <Carousel className="w-full max-w-md">
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center">
                                                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-between items-center w-full mt-2"> {/* Ajustar la posición de los botones */}
                            <div className="flex flex-1 justify-start md:justify-start">
                                <CarouselPrevious className="text-gray-700 hover:text-blue-500 transition duration-200" />
                            </div>
                            <div className="flex flex-1 justify-end md:justify-end">
                                <CarouselNext className="text-gray-700 hover:text-blue-500 transition duration-200" />
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="desc-container flex-1">
                    <h3 className="text-lg font-bold mb-2">Product Description</h3>
                    <p className="text-gray-700 text-justify mb-4">{data.description}</p>
                    <div className="flex items-center space-x-2">
                        <p className="text-white bg-[#2e86c1] p-1 px-2 rounded text-xs">{data.discount}</p>
                        <p className="text-gray-500 line-through text-base">{data.originalPrice}</p>
                    </div>
                    <p className="text-2xl font-bold py-2">{data.price}</p>
                    <div className="flex items-center gap-4">
                        <div className="quantity-selector inline-block border border-[#3498db] p-2 rounded-md">
                            <select id="quantity" className="quantity-dropdown text-base bg-white p-1 cursor-pointer outline-none border-none">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <button className="desc-button flex items-center bg-[#3498db] text-white py-2 px-4 rounded-md hover:bg-[#2e86c1] transition duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="cart-icon w-5 h-5 mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 2l1.5 4h13l-2 9H7L4.5 6H2m6 16a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                                />
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};
