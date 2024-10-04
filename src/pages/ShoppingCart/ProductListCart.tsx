import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { ProductItemCart } from "@/pages/ShoppingCart/components/ProductItemCart";
import imgTest from "@/assets/images/product1.jpg";

export function ProductListCart() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <h1>Shopping Cart</h1>
      <div className="flex flex-row justify-center p-[50px]">
        <ProductItemCart
          products={[
            {
              name: "iPhone 15 Pro Max 256 GB Natural Titanium",
              rating: 4,
              price: 5899000,
              discount: 17,
              description:
                "Premium smartphone with a sleek titanium finish, 256 GB storage, and advanced camera features for a superior mobile experience.",
              img: imgTest,
            },
          ]}
        />
      </div>
    </MainLayout>
  );
}
