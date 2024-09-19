import { MainLayout } from "@/layout/MainLayout";
import { StarsRating } from "./components/StarsRating";

export function ProductList() {
  return (
    <MainLayout>
      <p>ProductList</p>
      <StarsRating rating={5} />
    </MainLayout>
  );
}
