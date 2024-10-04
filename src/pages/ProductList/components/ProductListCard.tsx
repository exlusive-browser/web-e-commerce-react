import { importImage } from "@/lib/image-utils";
import { StarsRating } from "./StarsRating";
import cartIcon from "@/assets/plp/cart.svg";
import { useState } from "react";

interface Product {
  title: string;
  rating: string;
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

        const fixedPrice = parseFloat(product.originalPrice.replace('$', '').replace(/\./g, ''));
        const fixedDiscount = Math.abs(parseInt(product.discount.replace('%', ''), 10));
        const discountedPrice = (
          fixedPrice - (fixedPrice * fixedDiscount) / 100
        ).toFixed(2);

        const fixedRating = Math.round(parseFloat(product.rating.split(' ')[0]));

        return (
          <div
            key={index}
            className="flex flex-col lg:flex-row w-full h-auto lg:h-80 max-w-5xl mb-10 cursor-pointer rounded-2xl overflow-hidden transition-transform transform hover:scale-105 shadow-md"
            onMouseEnter={() => setCurrentImage(product.hoverImage)}
            onMouseLeave={() => setCurrentImage(product.image)}
          >
            <img
              src={importImage(currentImage)} 
              alt={product.title}
              className="w-full lg:w-[35%] object-cover h-64 lg:h-auto transition-opacity duration-500 ease-in-out"
            />
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
                      ${fixedPrice.toLocaleString()}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">
                      ${Number(discountedPrice).toLocaleString()}
                    </p>
                    <p className="text-[#3498db] font-bold">
                      {fixedDiscount}% off
                    </p>
                  </>
                ) : (
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    ${fixedPrice.toLocaleString()}
                  </p>
                )}
              </div>
              <p className="text-sm md:text-sm mb-5">{product.description}</p>
              <a href="#">
                <div className="flex h-12 w-full lg:w-[160px] rounded-xl bg-[#3498db] gap-3 items-center justify-center">
                  <img src={cartIcon} alt="Add to cart" className="h-7" />
                  <p className="text-white">Add to cart</p>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
