import { Category } from "@/entities/category";
import { axiosClient } from "@/lib/axios-client";

export async function getCategories(): Promise<Category[]> {
  const response = await axiosClient.get<Category[]>("/categories");
  return response.data;
}
