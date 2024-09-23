import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import TopsellingProducts from "../Products/TopsellingProducts";
import PromotionalImages from "@/components/ui/landing-promotional-images";
import AdBanner from "@/components/ui/landing-ad-banner";
import sale1 from "@/assets/images/sale1.png";
import sale2 from "@/assets/images/sale2.png";
import sale3 from "@/assets/images/sale3.png";
import sale4 from "@/assets/images/sale4.png";

const items = [
  {
    image: sale1,
    link: "/",
  },
  {
    image: sale2,
    link: "/",
  },
];

export function LandingPage() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <AdBanner items={items} />
      <PromotionalImages
        item={{ image: sale3, link: "/" }}
      />
      <TopsellingProducts />
      <PromotionalImages
        item={{ image: sale4, link: "/" }}
      />
    </MainLayout>
  );
}
