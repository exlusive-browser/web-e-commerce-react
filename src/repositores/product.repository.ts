import {Product} from "@/entities/Product";
import {axiosClient} from "@/lib/axios-client";

export async function getProducts(): Promise<Product[]> {
  const response = await axiosClient.get<Product[]>("/product");
  return response.data;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await axiosClient.get<Product>(`/product/${id}`);
  return response.data;
}
