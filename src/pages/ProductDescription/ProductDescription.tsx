import { ProductDetail } from "./ProductDetail";
import { MainLayout } from "@/layout/MainLayout";
import { useParams } from "react-router-dom";


export function ProductDescription() {
    const { id } = useParams();
    return (
        <MainLayout>
            <ProductDetail id={Number(id)} />
        </MainLayout>
    );
}