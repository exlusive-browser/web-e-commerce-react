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
      <div>
        {products.map((product, index) => {
          const discountedPrice = (product.price - (product.price * product.discount) / 100).toFixed(2);
  
          return (
            <div key={index} className="flex h-[300px] mb-10 mx-5 rounded-xl overflow-hidden transition-transform transform hover:scale-105 shadow-md">
              <img src={product.img} alt={product.name} className="mr-5"/>
              <div className="my-3">
                <h2 className="text-3xl mb-1">{product.name}</h2>
                <StarsRating rating={product.rating} />
                <div className="flex gap-4 mb-5 items-center">
                  {product.discount > 0 ? (
                    <>
                      <p className="text-gray-500 text-2xl font-light line-through decoration-1">${product.price.toLocaleString()}</p>
                      <p className="text-2xl font-bold">${Number(discountedPrice).toLocaleString()}</p>
                      <p className="text-[#3498db] font-bold">{product.discount}% off</p>
                    </>
                  ) : (
                    <p className="text-2xl font-bold">${product.price.toLocaleString()}</p>
                  )}
                </div>
                <p className="mb-3">{product.description}</p>
                <a href="#">
                  <div className="flex h-12 w-40 rounded-xl bg-[#3498db] gap-3 items-center justify-center">
                    <img src={cartIcon} alt="Add to cart" className="h-7"/>
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