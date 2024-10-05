import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { TopsellingProducts } from "./TopsellingProducts";
import { AdBanner } from "./LandingAdBanner";
import { importAsset } from "@/lib/image-utils";
import { DynamicPromotionalImage } from "./DynamicPromotionalImage";

const items = [
  {
    image: importAsset("images", "sale1.jpg"),
    link: "/",
  },
  {
    image: importAsset("images", "sale2.jpg"),
    link: "/",
  },
];

export function LandingPage() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <AdBanner items={items} />
      <DynamicPromotionalImage imgId="sale3.jpg" />
      <TopsellingProducts />
      <DynamicPromotionalImage imgId="sale4.jpg" />
    </MainLayout>
  );
}
