import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    id: number;
    image: string;
    hoverImage: string;
    title: string;
    brand: string;
    discount: string;
    originalPrice: string;
    price: string;
    seller: string;
    rating: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    image,
    hoverImage,
    title,
    brand,
    discount,
    originalPrice,
    price,
    seller,
    rating,
}) => (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col justify-between transform transition-transform hover:scale-105 h-full">
        <Link to={`/product/${id}`} className="flex-1">
            <div className="relative w-full h-52 overflow-hidden rounded-lg mb-3 group">
                <img
                    src={image}
                    alt={title}
                    className="absolute w-full h-full object-contain transition-opacity duration-300"
                />
                <img
                    src={hoverImage}
                    alt={`${title} hover`}
                    className="absolute w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ zIndex: 10 }} // Asegúrate de que esta imagen esté por encima
                />
            </div>
            <div className="flex flex-col h-40"> {/* Estableciendo altura fija para mantener consistencia */}
                <h3 className="font-semibold">{title}</h3>
                <p className="text-gray-500 text-sm">{brand}</p>
                <div className="flex items-center space-x-2">
                    <p className="text-white" style={{ backgroundColor: '#2e86c1', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem' }}>{discount}</p>
                    <p className="text-gray-500 line-through text-sm">{originalPrice}</p>
                </div>
                <p className="text-lg font-bold">{price}</p>
                <p className="text-gray-700 text-xs">
                    <strong>Sold by:</strong> {seller}
                </p>
                <p className="text-gray-500 text-xs">{rating}</p>
            </div>
        </Link>
        <button style={{ backgroundColor: '#3498db' }} className="text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2 cart-icon"
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
);