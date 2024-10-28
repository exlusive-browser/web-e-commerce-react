import { Product } from "@/entities/product-item";
import { PLPCardItem } from "./PLPCardItem";

interface ProductListProps {
  products: Product[];
}

export const ProductListCard: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-col">
      {products.map((product, index) => {
        return <PLPCardItem key={index} product={product} />;
      })}
    </div>
  );
};
