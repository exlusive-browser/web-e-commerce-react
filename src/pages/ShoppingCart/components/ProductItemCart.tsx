import { Link } from "react-router-dom";
import { importImage } from "@/lib/image-utils";
import { AmountChooser } from "./AmountChooser";
import { useState } from "react";

interface ProductCart {
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
  amount: number;
}

interface ProducItemCartProps {
  products: ProductCart[];
}

export const ProductItemCart: React.FC<ProducItemCartProps> = ({
  products,
}) => {
  const [cartProducts, setCartProducts] = useState<ProductCart[]>(products);

  const handleAmountChange = (productId: number, newAmount: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, amount: newAmount } : product
      )
    );
  };

  return (
    <div className="flex flex-col gap-4 ">
      {cartProducts.map((product, index) => {
        const [currentImage, setCurrentImage] = useState(product.image);
        return (
          <div
            key={index}
            className="flex justify-center bg-white rounded-2xl shadow-md py-4 px-8 max-h-[400px]"
            onMouseEnter={() => setCurrentImage(product.hoverImage)}
            onMouseLeave={() => setCurrentImage(product.image)}
          >
            <div className="flex flex-col sm:flex-row h-full ">
              <div className="h-[100px] sm:max-w-[300px] sm:h-full overflow-hidden rounded-lg mb-3 group">
                <img
                  src={importImage(currentImage)}
                  alt={product.title}
                  className="object-cover transition-opacity duration-300"
                />
              </div>
              <Link to={`/products/${product.id}`} className="flex-1 mb-2">
                <div className="flex flex-col min-w-[70px]">
                  <h3 className="font-semibold text-sm md:text-base">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {product.brand}
                  </p>
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
                  <p className="text-gray-500 text-xs md:text-sm">
                    {product.rating}
                  </p>
                  {/* Añadir AmountChooser aquí */}
                </div>
              </Link>
              <AmountChooser
                onAmountChange={(newAmount) =>
                  handleAmountChange(product.id, newAmount)
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
