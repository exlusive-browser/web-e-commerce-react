import { Product, SimplifiedProduct } from "@/entities/product-item";
import { axiosClient } from "@/lib/axios-client";

export async function getTopSellingProducts(): Promise<SimplifiedProduct[]> {
  const response = await axiosClient.get<SimplifiedProduct[]>("/top-selling");
  return response.data;
}

export async function getProducts(): Promise<Product[]> {
  const response = await axiosClient.get<Product[]>("/product");
  return response.data;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await axiosClient.get<Product>(`/products/${id}`);
  const product = response.data; // Ahora es un objeto directamente

  return product;
}

export async function getRecommendedProducts(
  productId: number
): Promise<Product[]> {
  // normally, if we were using a real backend, the product id would be enough to get the recommended products
  const baseProduct = await getProductById(productId);
  const id = baseProduct.id;
  const category = baseProduct.category;
  const response = await axiosClient.get<Product[]>(
    `/products?category=${category}&id_ne=${id}&_limit=4`
  );
  return response.data;
}
