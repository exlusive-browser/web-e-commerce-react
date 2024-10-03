import cartIcon from "@/assets/plp/cart.svg";

interface ProductCart {
  name: string;
  rating: number;
  price: number;
  discount: number;
  description: string;
  img: string;
}

interface ProducItemCartProps {
  products: ProductCart[];
}

export const ProductItemCart: React.FC<ProducItemCartProps> = ({
  products,
}) => {
  return (
    <div className="flex flex-col">
      {products.map((product, index) => {
        const discountedPrice = (
          product.price -
          (product.price * product.discount) / 100
        ).toFixed(2);

        return (
          <div
            key={index}
            className="flex flex-col lg:flex-row w-[60%] h-60 lg:h-60 max-w-5xl mb-10 cursor-pointer rounded-2xl overflow-hidden transition-transform transform hover:scale-105 shadow-md"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full lg:w-[35%] object-cover h-64 lg:h-auto"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg md:text-2xl font-semibold my-1">
                  {product.name}
                </h2>
                <p className="text-sm md:text-sm mb-5">
                {product.description.length > 100
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-3 items-start sm:items-center">
                {product.discount > 0 ? (
                  <>
                    <p className="text-gray-500 text-lg sm:text-xl md:text-2xl font-light line-through decoration-1">
                      ${product.price.toLocaleString()}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">
                      ${Number(discountedPrice).toLocaleString()}
                    </p>
                    <p className="text-[#3498db] font-bold">
                      {product.discount}% off
                    </p>
                  </>
                ) : (
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    ${product.price.toLocaleString()}
                  </p>
                )}
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};
