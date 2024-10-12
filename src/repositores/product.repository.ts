import { Product } from "@/entities/Product";
import { SimplifiedProduct } from "@/entities/product-item";
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
