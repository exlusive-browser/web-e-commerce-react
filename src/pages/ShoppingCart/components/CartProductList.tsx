import { CartItem } from "@/entities/cart";
import { ProductItemCart } from "./ProductItemCart";

export interface CartProductListProps {
  cartItems: CartItem[];
  onAmountChange: (productId: number, newAmount: number) => void;
}

export function CartProductList({
  cartItems,
  onAmountChange,
}: CartProductListProps) {
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((cartItem) => (
        <ProductItemCart
          cartItem={cartItem}
          onAmountChange={onAmountChange}
          key={cartItem.product.id}
        />
      ))}
    </div>
  );
}
