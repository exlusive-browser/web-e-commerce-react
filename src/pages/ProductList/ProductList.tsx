import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { Filters } from "./filters";
import { OrderBy } from "./orderby";
export function ProductList() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <div className="flex flex-col px-4 md:flex-row md:px-6">
        {/* Contenedor para los botones en móvil */}
        <div className="flex justify-between mb-4 md:hidden">
          <div className="w-1/2 mr-2">
            <Filters />
          </div>
          <div className="w-1/2 ml-2">
            <OrderBy />
          </div>
        </div>

        {/* Filtros ocupando la columna izquierda en escritorio */}
        <div className="hidden md:flex md:w-1/6 p-4 rounded-md">
          <Filters />
        </div>

        <div className="flex-1 p-4">
          <div className="flex flex-col">
            <div className="hidden md:flex justify-end mb-4">
              <OrderBy />
            </div>
            <p className="text-2xl mb-4 break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi
              debitis perferendis officiis quasi. Non assumenda id eligendi architecto
              quidem repellendus illum nam sed, ea facilis ab, ducimus adipisci iste
              earum nesciunt ipsum, pariatur qui enim quaerat fugiat vero nulla
              quisquam sequi. Architecto deleniti neque odit nam accusamus esse maxime
              fugiat adipisci debitis sed. Commodi, animi at! Assumenda ea nihil illo
              accusantium, est eius voluptatem totam ratione. Quod quas optio non!
              Soluta voluptatum excepturi quasi eum repellat magni obcaecati incidunt
              odio officia id repudiandae recusandae voluptatem dolorem, modi
              praesentium! Corporis fugit illum eum vero, officiis ex culpa sint
              consequuntur accusantium.
            </p>
            <p className="text-2xl break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi
              debitis perferendis officiis quasi. Non assumenda id eligendi architecto
              quidem repellendus illum nam sed, ea facilis ab, ducimus adipisci iste
              earum nesciunt ipsum, pariatur qui enim quaerat fugiat vero nulla
              quisquam sequi. Architecto deleniti neque odit nam accusamus esse maxime
              fugiat adipisci debitis sed. Commodi, animi at! Assumenda ea nihil illo
              accusantium, est eius voluptatem totam ratione. Quod quas optio non!
              Soluta voluptatum excepturi quasi eum repellat magni obcaecati incidunt
              odio officia id repudiandae recusandae voluptatem dolorem, modi
              praesentium! Corporis fugit illum eum vero, officiis ex culpa sint
              consequuntur accusantium.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
