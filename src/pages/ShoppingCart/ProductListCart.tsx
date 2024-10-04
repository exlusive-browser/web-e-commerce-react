import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { ProductItemCart } from "@/pages/ShoppingCart/components/ProductItemCart";
import imgTest from "@/assets/images/product1.png";
import { PurchaseOverview } from "./components/PurchaseOverview";

export function ProductListCart() {

  const productExample = [
    {
      id: 902,
      image: "product902.png",
      hoverImage: "product902-hover.png",
      title: "XIAOMI Redmi Note 13 Pro 256GB Storage 8GB RAM Green",
      brand: "XIAOMI",
      discount: "-55%",
      originalPrice: "$1.999.900",
      price: "$1.029.000",
      seller: "XIAOMI",
      rating: "4.3 ★ (27 reviews)",
    },
    {
      id: 905,
      image: "product905.png",
      hoverImage: "product905-hover.png",
      title: "Samsung Galaxy A55 5G 256GB 8GB RAM Purple",
      brand: "SAMSUNG",
      discount: "-34%",
      originalPrice: "$2.099.900",
      price: "$1.369.988",
      seller: "itel",
      rating: "3.8 ★ (97 reviews)",
    },
    {
      id: 904,
      image: "product904.png",
      hoverImage: "product904-hover.png",
      title: "MOTOROLA Moto G14 128 GB 8 GB RAM Purple",
      brand: "MOTOROLA",
      discount: "-45%",
      originalPrice: "$759.000",
      price: "$415.000",
      seller: "MOTOROLAs",
      rating: "5 ★ (5 reviews)",
    },
  ];
  

  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <h1>Shopping Cart</h1>
      <div className="flex flex-col-reverse justify-center lg:flex-row p-[50px] lg:p-[50px] ">
        <div className="w-full lg:w-3/5  px-50">
          <ProductItemCart products={productExample} />
        </div>
        <div className="w-full lg:w-2/5 p-[50px]">
          <PurchaseOverview />
        </div>
        </div>
    </MainLayout>
  );
  
}
