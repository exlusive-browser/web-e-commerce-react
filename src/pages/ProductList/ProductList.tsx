import { MainLayout } from "@/layout/MainLayout";
import ProductCard from "./components/ProductCard";

export function ProductList() {
  return (
    <MainLayout>
      <p>ProductList</p>
      <ProductCard
        products={[
          {
            name: "iPhone 15 Pro Max 256 GB Natural Titanium",
            rating: 4,
            price: 5899000,
            discount: 17,
            description: "Premium smartphone with a sleek titanium finish, 256 GB storage, and advanced camera features for a superior mobile experience.",
            img: "https://via.placeholder.com/150",
          },
          {
            name: "Product 2",
            rating: 3,
            price: 2000,
            discount: 10,
            description: "Description 2",
            img: "https://via.placeholder.com/150",
          },
          {
            name: "Product 3",
            rating: 5,
            price: 300,
            discount: 30,
            description: "Description 3",
            img: "https://via.placeholder.com/150",
          },
        ]} />
    </MainLayout>
  );
}
