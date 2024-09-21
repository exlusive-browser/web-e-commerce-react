import { Button } from "@/components/ui/button";
import { MainLayout } from "@/layout/MainLayout";
// import { useLocation, Link } from 'react-router-dom';
// import {DynamicBreadcrumb} from "@/components/ui/breadcumb1";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"

export function LandingPage() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      {/* <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
          <BreadcrumbPage>Smartphones</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}

      <p className="font-title font-bold text-2xl mb-4">My Title</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit id
        nostrum fugit minima, quasi voluptatum at soluta perspiciatis voluptas,
        amet laboriosam exercitationem nisi ducimus assumenda iure. Iusto at
        suscipit quibusdam harum magnam quidem, omnis quod, quisquam porro
        ducimus iure, error et ipsam repudiandae reiciendis culpa cum fuga
        soluta asperiores perspiciatis ut vitae ea rerum. Odit a modi commodi
        fugiat eligendi nihil rem optio maxime distinctio aliquid recusandae,
        culpa tenetur vel eaque similique, adipisci quibusdam cumque iusto earum
        id dolor. Dolore temporibus totam soluta illo praesentium iure deserunt
        odit veritatis dolorem incidunt! Nulla excepturi repellendus perferendis
        sunt reprehenderit odit reiciendis asperiores!
      </p>
      <div className="flex gap-4 mt-5">
        <Button className="px-16 font-bold">Create</Button>
        <Button className="px-16 font-bold bg-primaryDark">Create 2</Button>
      </div>
    </MainLayout>
  );
}
