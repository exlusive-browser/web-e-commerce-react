import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { ProductItemCart } from "@/pages/ShoppingCart/components/ProductItemCart";
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
      amount: 1,
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
      amount: 1,
    },
    {
      id: 901,
      image: "product901.png",
      hoverImage: "product901-hover.png",
      title: "Iphone 14 Pro Max memory 124 Gb new",
      brand: "Iphone",
      discount: "-34%",
      originalPrice: "$4.099.900",
      price: "$3.369.988",
      seller: "itel",
      rating: "3.8 ★ (97 reviews)",
      amount: 1,
    }
  ];
  

  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <h1 className="pl-10 pt-5 pb-5 text-3xl text-gray-800 font-bold">SHOPPING CART</h1>
      <div className="flex flex-col-reverse justify-center lg:flex-row p-[50px] lg:p-[50px] ">
        <div className="w-full lg:w-3/5 max-w-[900px] px-50">
          <ProductItemCart products={productExample} />
        </div>
        <div className="w-full lg:w-2/5 p-[50px]">
          <PurchaseOverview />
        </div>
        </div>
    </MainLayout>
  );
  
}
