import { CustomImage } from "@/components/custom/custom-image";
import { getImgUrl } from "@/lib/image-utils";

export interface DynamicPromotionalImageProps {
  imgId: string;
}

export function DynamicPromotionalImage({
  imgId,
}: DynamicPromotionalImageProps) {
  return (
    <div className="w[80vw] text-white p-5 rounded-md flex flex-col items-center text-center">
      <div className="cursor-pointer transition-transform transform hover:scale-105">
        <CustomImage
          src={getImgUrl(imgId)}
          alt={`Image with id ${imgId}`}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
