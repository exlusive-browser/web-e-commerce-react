import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function CustomImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  onLoad,
  onError,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;

    if (img && img.complete) {
      handleImageLoaded();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageLoaded = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    onError?.();
  };

  const aspectRatio =
    width && height ? `aspect-[${width}/${height}]` : "aspect-auto";
  const fillClass = fill ? "object-cover" : "";

  return (
    <div className={cn("relative overflow-hidden", aspectRatio, className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          fillClass,
          fill ? "w-full h-full absolute inset-0" : ""
        )}
        {...props}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
