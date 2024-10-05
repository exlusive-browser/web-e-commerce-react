import { PromotionalImage } from "@/entities/promotional-image";
import { axiosClient } from "@/lib/axios-client";

export async function getPromotionalImgById(
  id: string
): Promise<PromotionalImage> {
  const response = await axiosClient.get<PromotionalImage>(
    `/promotional?name=${id}`
  );
  return response.data;
}
