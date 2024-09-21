import { StarsRating } from "./StarsRating";
import cartIcon from "@/assets/plp/cart.svg";

interface Product {
  name: string;
  rating: number;
  price: number;
  discount: number;
  description: string;
  img: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductCard: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-col justify-center gap-8">
      {products.map((product, index) => {
        const discountedPrice = (product.price - (product.price * product.discount) / 100).toFixed(2);

        return (
          <div
            key={index}
            className="flex flex-col md:flex-row mx-3 md:w-[700px] lg:w-[800px] mb-10 cursor-pointer rounded-2xl overflow-hidden transition-transform transform hover:scale-105 shadow-md">
            <img src={product.img} alt={product.name} className="w-full md:w-2/3 object-cover" />
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl md:text-xl my-1">{product.name}</h2>
                <StarsRating rating={product.rating} />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-5 items-start md:items-center">
                {product.discount > 0 ? (
                  <>
                    <p className="text-gray-500 text-xl md:text-2xl font-light line-through decoration-1">
                      ${product.price.toLocaleString()}
                    </p>
                    <p className="text-xl md:text-2xl font-bold">
                      ${Number(discountedPrice).toLocaleString()}
                    </p>
                    <p className="text-[#3498db] font-bold">{product.discount}% off</p>
                  </>
                ) : (
                  <p className="text-xl md:text-2xl font-bold">${product.price.toLocaleString()}</p>
                )}
              </div>
              <p className="mb-3">{product.description}</p>
              <a href="#">
                <div className="flex h-12 w-full md:w-[160px] rounded-xl bg-[#3498db] gap-3 items-center justify-center">
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



export default ProductCard;