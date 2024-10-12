import ErrorMessage from "@/components/ui/ErrorMessage";
import { Skeleton } from "@/components/ui/skeleton";
import { PromotionalImage } from "@/entities/promotional-image";
import { getImgUrl } from "@/lib/image-utils";
import { getPromotionalImgById } from "@/repositores/promotional.repository";
import { useQuery } from "@tanstack/react-query";

export interface DynamicPromotionalImageProps {
  imgId: string;
}

export function DynamicPromotionalImage({
  imgId,
}: DynamicPromotionalImageProps) {
  const { isLoading, isError, data } = useQuery<PromotionalImage>({
    queryKey: ["promotional-imgs", imgId],
    queryFn: () => getPromotionalImgById(imgId),
  });

  if (isLoading) {
    return (
      <div className="w[80vw] text-white p-5 rounded-md flex flex-col items-center text-center">
        <Skeleton className="h-[175px] w-[350px] rounded-xl" />
      </div>
    );
  }

  if (isError || !data) {
    return <ErrorMessage />;
  }

  return (
    <div className="w[80vw] text-white p-5 rounded-md flex flex-col items-center text-center">
      <div className="cursor-pointer transition-transform transform hover:scale-105">
        <img src={getImgUrl(imgId)} className="rounded-lg shadow-md" />
      </div>
    </div>
  );
}
