import { CustomImage } from "@/components/custom/custom-image";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Skeleton } from "@/components/ui/skeleton";
import { PromotionalImage } from "@/entities/promotional-image";
import { getImgUrl } from "@/lib/image-utils";
import { getAdBannerImages } from "@/repositores/promotional.repository";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function AdBanner() {
  const { isLoading, isError, data } = useQuery<PromotionalImage[]>({
    queryKey: ["ad-banner-imgs"],
    queryFn: getAdBannerImages,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = data || [];

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (isLoading) {
    return (
      <div className="w[80vw] text-white p-5 rounded-md flex flex-col items-center text-center">
        <Skeleton className="h-[275px] w-[550px] rounded-xl" />
      </div>
    );
  }

  if (isError || images.length === 0) {
    return <ErrorMessage />;
  }

  return (
    <div className="flex w-full h[auto] justify-center  text-white p-5 rounded-md  ">
      <div className="cursor-pointer transition-transform transform hover:scale-105">
        <CustomImage
          src={getImgUrl(images[currentIndex].id)}
          alt={`Ad ${currentIndex}`}
          className="object-scale-down"
        />
      </div>
    </div>
  );
}
