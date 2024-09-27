import { ProductDetail } from "./ProductDetail";
import { MainLayout } from "@/layout/MainLayout";

export function ProductDescription() {
    const productId = 5;
    return (
        <MainLayout>
            <ProductDetail id={productId} />
        </MainLayout>
    );
}