import { ProductDetail } from "./ProductDetail";
import { MainLayout } from "@/layout/MainLayout";
import { useParams } from "react-router-dom";
import { TechnicalSpecifications } from "./TechnicalSpecifications";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { ProductRecommendations } from "./ProductRecommendations";


export function ProductDescription() {
    const { id } = useParams();
    return (
        <MainLayout>
            <DynamicBreadcrumb />
            <ProductDetail id={Number(id)} />
            <TechnicalSpecifications id={Number(id)} />
            <ProductRecommendations currentProductId={Number(id)} />
        </MainLayout>
    );
}