import { useQuery } from "@tanstack/react-query";
import { Product } from "@/entities/Product";
import { getProductById } from "@/repositores/product.repository";
import { importImage } from "./Images";
import Image4 from "@/assets/images/product4.png";
import Image4Hover from "@/assets/images/product4-hover.png";
interface ProductDetailProps {
    id: number;
}

const ProductDesc = async (product: Product) => {
    const image = await importImage(product.image);
    const hoverImage = await importImage(product.hoverImage);

    return {
        title: product.title,
        image,
        hoverImage,
        originalPrice: product.originalPrice,
        price: product.price,
        description: product.description,
    };
};

export const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
    const { isLoading, isError, data, error } = useQuery<Product, Error>({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
    });

    const { data: productInfo, isLoading: isProductDescLoading, isError: isProductDescError } = useQuery({
        queryKey: ["productDesc", data],
        queryFn: () => ProductDesc(data!),
        enabled: !!data, // Solo ejecuta esta query si `data` es no nulo
    });

    if (isLoading || isProductDescLoading) {
        return <div className="text-center">Loading...</div>;
    }

    if (isError || isProductDescError) {
        return <div className="text-center text-red-500">Error: {error?.message || "Failed to load product details"}</div>;
    }

    if (!productInfo) {
        return <div className="text-center">Product not found.</div>;
    }

    return (
        <div>
            <section className="product-desc2 p-6 bg-white shadow-md rounded-md" id="product-desc2">
                <h1 className="text-3xl font-bold mb-4">{productInfo.title}</h1>
                <div className="container-sec1 flex flex-col md:flex-row gap-6">
                    <div className="image-container flex-1">
                        <img
                            src={Image4}
                            alt={productInfo.title}
                            className="product-image w-full h-auto max-h-96 object-contain rounded-lg transition-transform duration-300 ease-in-out"
                            onMouseOver={(e) => (e.currentTarget.src = Image4Hover)}
                            onMouseOut={(e) => (e.currentTarget.src = Image4)}
                        />
                    </div>
                    <div className="desc-container flex-1">
                        <h3 className="text-lg font-bold mb-2">Product Description</h3>
                        <p className="text-gray-700 text-justify mb-4">{productInfo.description}</p>
                        <h2 className="text-xl font-bold text-black-600 mb-1">{productInfo.originalPrice}</h2>
                        <h2 className="text-lg text-gray-500 line-through">{productInfo.price}</h2>
                        <div className="flex items-center gap-4">
                            <div className="quantity-selector">
                                <select id="quantity" className="quantity-dropdown border rounded-md p-2">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <button className="desc-button flex items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
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

        </div>
    );
};
