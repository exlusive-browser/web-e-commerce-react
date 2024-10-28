import { CartItem, OrderOverview } from "@/entities/cart";
import { useEffect, useState } from "react";
import { ProductItemCart } from "./ProductItemCart";
import { getOrderOverview } from "@/services/shopping-cart.service";

const productExample: CartItem[] = [
  {
    product: {
      id: 902,
      image: "product902.jpg",
      hoverImage: "product902-hover.jpg",
      title: "XIAOMI Redmi Note 13 Pro 256GB Storage 8GB RAM Green",
      brand: "XIAOMI",
      discount: "-55%",
      originalPrice: "$1.999.900",
      price: "$1.029.000",
      seller: "XIAOMI",
      rating: "4.3 ★ (27 reviews)",
    },
    amount: 1,
  },
  {
    product: {
      id: 905,
      image: "product905.jpg",
      hoverImage: "product905-hover.jpg",
      title: "Samsung Galaxy A55 5G 256GB 8GB RAM Purple",
      brand: "SAMSUNG",
      discount: "-34%",
      originalPrice: "$2.099.900",
      price: "$1.369.988",
      seller: "itel",
      rating: "3.8 ★ (97 reviews)",
    },
    amount: 1,
  },
  {
    product: {
      id: 901,
      image: "product901.jpg",
      hoverImage: "product901-hover.jpg",
      title: "Iphone 14 Pro Max memory 124 Gb new",
      brand: "Iphone",
      discount: "-34%",
      originalPrice: "$4.099.900",
      price: "$3.369.988",
      seller: "itel",
      rating: "3.8 ★ (97 reviews)",
    },
    amount: 1,
  },
];

export interface CartProductListProps {
  onOrderOverviewChange: (newOrderOverview: OrderOverview) => void;
}

export function CartProductList({
  onOrderOverviewChange,
}: CartProductListProps) {
  const [cartItems, setCartItems] = useState(productExample);

  const handleAmountChange = (productId: number, newAmount: number) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.product.id === productId ? { ...item, amount: newAmount } : item
      )
    );
  };

  // In the future, we will use redux to manage the state
  useEffect(() => {
    console.log("hi");
    const oderOverview = getOrderOverview(cartItems);
    onOrderOverviewChange(oderOverview);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((cartItem) => (
        <ProductItemCart
          cartItem={cartItem}
          onAmountChange={handleAmountChange}
          key={cartItem.product.id}
        />
      ))}
    </div>
  );
}
