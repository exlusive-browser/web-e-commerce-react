import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { TopsellingProducts } from "./TopsellingProducts";
import { AdBanner } from "./LandingAdBanner";
import { PromotionalImages } from "./LandingPromotionalmages";
import { importAsset, importImage } from "@/lib/image-utils";

const items = [
  {
    image: importAsset("images", "sale1.png"),
    link: "/",
  },
  {
    image: importAsset("images", "sale2.png"),
    link: "/",
  },
];

export function LandingPage() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <AdBanner items={items} />
      <PromotionalImages
        item={{ image: importImage("sale3.png"), link: "/" }}
      />
      <TopsellingProducts />
      <PromotionalImages
        item={{ image: importImage("sale4.png"), link: "/" }}
      />
    </MainLayout>
  );
}
