import React from "react";
import { Link } from "react-router-dom";
import { getImgUrl } from "@/lib/image-utils";
import { formatTitle } from "@/lib/format-title";
import { SimplifiedProduct } from "@/entities/product-item";

interface ProductCardProps {
  product: SimplifiedProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Producto ${product.id} agregado al carrito`);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col h-full">
      <Link
        to={`/products/${product.id}/${formatTitle(product.title)}`}
        className="flex-1 mb-2"
      >
        <div className="relative w-full h-52 overflow-hidden rounded-lg mb-3 group">
          <img
            src={getImgUrl(product.image)}
            alt={product.title}
            className="absolute w-full h-full object-contain transition-opacity duration-300"
          />
          <img
            src={getImgUrl(product.hoverImage)}
            alt={`${product.title} hover`}
            className="absolute w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm md:text-base">
            {product.title}
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">{product.brand}</p>
          <div className="flex items-center space-x-2">
            <p
              className="text-white"
              style={{
                backgroundColor: "#2e86c1",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
                fontSize: "0.625rem",
              }}
            >
              {product.discount}
            </p>
            <p className="text-gray-500 line-through text-xs md:text-sm">
              {product.originalPrice}
            </p>
          </div>
          <p className="text-lg font-bold">{product.price}</p>
          <p className="text-gray-700 text-xs md:text-sm">
            <strong>Sold by:</strong> {product.seller}
          </p>
          <p className="text-gray-500 text-xs md:text-sm">{product.rating}</p>
        </div>
      </Link>
      <button
        onClick={handleAddToCartClick}
        style={{ backgroundColor: "#3498db" }}
        className="text-white py-1 px-2 sm:py-2 sm:px-4 rounded mt-2 hover:bg-blue-600 flex items-center justify-center"
      >
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
};
