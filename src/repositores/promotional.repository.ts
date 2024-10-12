import { PromotionalImage } from "@/entities/promotional-image";
import { axiosClient } from "@/lib/axios-client";

export async function getPromotionalImgById(
  id: string
): Promise<PromotionalImage> {
  const response = await axiosClient.get<PromotionalImage>(
    `/promotional?id=${id}`
  );
  return response.data;
}

export async function getAdBannerImages(): Promise<PromotionalImage[]> {
  const response = await axiosClient.get<PromotionalImage[]>("/ad-banner");
  return response.data;
}
