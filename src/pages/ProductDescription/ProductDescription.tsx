import { ProductDetail } from "./ProductDetail";
import { MainLayout } from "@/layout/MainLayout";
import { useParams } from "react-router-dom";
import { TechnicalSpecifications } from "./TechnicalSpecifications";


export function ProductDescription() {
    const { id } = useParams();
    return (
        <MainLayout>
            <ProductDetail id={Number(id)} />
            <TechnicalSpecifications id={Number(id)} />
        </MainLayout>
    );
}