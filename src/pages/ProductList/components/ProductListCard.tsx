import { getImgUrl } from "@/lib/image-utils";
import { StarsRating } from "./StarsRating";
import cartIcon from "@/assets/plp/cart.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatTitle } from "@/lib/format-title";

interface Product {
  id: number;
  title: string;
  rating: string;
  price: string;
  originalPrice: string;
  discount: string;
  description: string;
  image: string;
  hoverImage: string;
}

interface ProductListProps {
  products: Product[];
}

export const ProductListCard: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-col">
      {products.map((product, index) => {
        const [currentImage, setCurrentImage] = useState(product.image);
        const [isLgScreen, setIsLgScreen] = useState(false);

        useEffect(() => {
          const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
          };

          handleResize();

          window.addEventListener("resize", handleResize);

          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);

        const fixedDiscount = Math.abs(
          parseInt(product.discount.replace("%", ""), 10)
        );

        const fixedRating = Math.round(
          parseFloat(product.rating.split(" ")[0])
        );

        return (
          <Link
            to={`/products/${product.id}/${formatTitle(product.title)}`}
            key={index}
          >
            <div
              className="flex flex-col lg:flex-row w-full h-auto lg:h-80 max-w-5xl mb-10 cursor-pointer rounded-2xl overflow-hidden transition-transform transform lg:hover:scale-105 shadow-md"
              onMouseEnter={() =>
                isLgScreen && setCurrentImage(product.hoverImage)
              }
              onMouseLeave={() => isLgScreen && setCurrentImage(product.image)}
            >
              <div className="flex bg-white align-center justify-center md:w-[300px]  w-auto h-[300px] md:h-auto">
                <img
                  src={getImgUrl(currentImage)}
                  alt={product.title}
                  className=" object-contain h-full lg:h-full transition-opacity duration-500 ease-in-out"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg md:text-2xl font-semibold my-1">
                    {product.title}
                  </h2>
                  <StarsRating rating={fixedRating} />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-3 items-start sm:items-center">
                  {fixedDiscount > 0 ? (
                    <>
                      <p className="text-gray-500 text-lg sm:text-xl md:text-2xl font-light line-through decoration-1">
                        {product.originalPrice}
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold">
                        {product.price}
                      </p>
                      <p className="text-[#3498db] font-bold">
                        {product.discount} off
                      </p>
                    </>
                  ) : (
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
                <p className="text-sm md:text-sm mb-5">{product.description}</p>

                <button>
                  <div className="flex h-11 w-full lg:w-[150px] rounded-xl bg-[#3498db] items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 cart-icon text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 2l1.5 4h13l-2 9H7L4.5 6H2m6 16a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                      />
                    </svg>
                    <p className="text-white">Add to cart</p>
                  </div>
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
