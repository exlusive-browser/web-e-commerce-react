import { Product, SimplifiedProduct } from "@/entities/product-item";

export function productToTopSellingProduct(
  product: Product
): SimplifiedProduct {
  return {
    id: product.id,
    image: product.image,
    hoverImage: product.hoverImage,
    title: product.title,
    brand: product.brand,
    discount: product.discount,
    originalPrice: product.originalPrice,
    price: product.price,
    seller: product.seller,
    rating: product.rating,
  };
}
