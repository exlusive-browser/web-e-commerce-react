import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import TopsellingProducts from "../Products/TopsellingProducts";
import PromotionalImages from "@/components/ui/landing-promotional-images";
import AdBanner from "@/components/ui/landing-ad-banner";

const items = [
  {
    image: "src/assets/images/sale1.png",
    link: "/",
  },
  {
    image: "src/assets/images/sale2.png",
    link: "/",
  },
];

export function LandingPage() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <AdBanner items={items} />
      <PromotionalImages
        item={{ image: "src/assets/images/sale3.png", link: "/" }}
      />
      <TopsellingProducts />
      <PromotionalImages
        item={{ image: "src/assets/images/sale4.png", link: "/" }}
      />
    </MainLayout>
  );
}
