import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { TopsellingProducts } from "./TopsellingProducts";
import { AdBanner } from "./LandingAdBanner";
import { DynamicPromotionalImage } from "./DynamicPromotionalImage";

export function LandingPage() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <AdBanner />
      <DynamicPromotionalImage imgId="/promotional/sale3.jpg" />
      <TopsellingProducts />
      <DynamicPromotionalImage imgId="/promotional/sale4.jpg" />
    </MainLayout>
  );
}
