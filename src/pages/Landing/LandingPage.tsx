import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import TopsellingProducts from "../Products/TopsellingProducts";

export function LandingPage() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <TopsellingProducts />
    </MainLayout>
  );
}
