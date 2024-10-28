import { Link } from "react-router-dom";
import { getImgUrl } from "@/lib/image-utils";
import { AmountChooser } from "./AmountChooser";
import { useState } from "react";
import { formatTitle } from "@/lib/format-title";
import { CartItem } from "@/entities/cart";

interface ProductItemCartProps {
  cartItem: CartItem;
  onAmountChange: (productId: number, newAmount: number) => void;
}

export const ProductItemCart: React.FC<ProductItemCartProps> = ({
  cartItem,
  onAmountChange,
}) => {
  const product = cartItem.product;
  const [currentImage, setCurrentImage] = useState(product.image);

  return (
    <div
      key={product.id}
      className="flex justify-center bg-white rounded-2xl shadow-md py-4 px-8 max-h-[400px]"
      onMouseEnter={() => setCurrentImage(product.hoverImage)}
      onMouseLeave={() => setCurrentImage(product.image)}
    >
      <div className="flex flex-col sm:flex-row h-full w-full">
        <div className="h-[100px] sm:max-w-[300px] sm:h-full overflow-hidden rounded-lg mb-3 group">
          <img
            src={getImgUrl(currentImage)}
            alt={product.title}
            className="object-cover transition-opacity duration-300"
          />
        </div>
        <Link
          to={`/products/${product.id}/${formatTitle(product.title)}`}
          className="flex-1 mb-2"
        >
          <div className="flex flex-col min-w-[70px]">
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
        <div className="flex items-center justify-end">
          <AmountChooser
            onAmountChange={(newAmount) =>
              onAmountChange(product.id, newAmount)
            }
            initialAmount={cartItem.amount}
          />
        </div>
      </div>
    </div>
  );
};
