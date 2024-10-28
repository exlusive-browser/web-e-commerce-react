import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { PurchaseOverview } from "./components/PurchaseOverview";
import { CartProductList } from "./components/CartProductList";
import { CartItem } from "@/entities/cart";
import { useState } from "react";
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

export function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState(productExample);

  const handleAmountChange = (productId: number, newAmount: number) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.product.id === productId ? { ...item, amount: newAmount } : item
      )
    );
  };

  const orderOverview = getOrderOverview(cartItems);

  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <h1 className="pl-10 pt-5 pb-5 text-3xl text-gray-800 font-bold  text-center">
        SHOPPING CART
      </h1>
      <div className="flex flex-col-reverse justify-center lg:flex-row  p-[50px] lg:p-[50px] gap-4">
        <div className="w-full lg:w-3/5">
          <CartProductList
            cartItems={cartItems}
            onAmountChange={handleAmountChange}
          />
        </div>
        <div className="w-full lg:w-2/5">
          <PurchaseOverview
            subtotal={orderOverview.subtotal}
            discounts={orderOverview.discounts}
            total={orderOverview.total}
          />
        </div>
      </div>
    </MainLayout>
  );
}
