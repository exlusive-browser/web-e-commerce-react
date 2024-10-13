import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { PurchaseOverview } from "./components/PurchaseOverview";
import { CartProductList } from "./components/CartProductList";
import { OrderOverview } from "@/entities/cart";
import { useState } from "react";

export function ShoppingCartPage() {
  const [orderOverview, setOrderOverview] = useState<OrderOverview>({
    discounts: [],
    subtotal: 0,
    total: 0,
  });

  const onOrderOverviewChange = (newOrderOverview: OrderOverview) => {
    setOrderOverview(newOrderOverview);
  };

  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <h1 className="pl-10 pt-5 pb-5 text-3xl text-gray-800 font-bold  text-center">
        SHOPPING CART
      </h1>
      <div className="flex flex-col-reverse justify-center lg:flex-row  p-[50px] lg:p-[50px] gap-4">
        <div className="w-full lg:w-3/5">
          <CartProductList onOrderOverviewChange={onOrderOverviewChange} />
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
