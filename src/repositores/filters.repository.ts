import { FiltersResponse } from "@/entities/filters";
import { axiosClient } from "@/lib/axios-client";

export async function getFilters(category: string): Promise<FiltersResponse | null> {
    const response = await axiosClient.get<FiltersResponse[]>(`/categoryfilters?categoryName=${category}`);
  
    // Devuelve el primer elemento de la lista o null si la lista está vacía
    return response.data.length > 0 ? response.data[0] : null;
  }