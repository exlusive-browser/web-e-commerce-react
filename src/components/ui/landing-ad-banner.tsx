import * as React from "react";
import { useEffect, useState } from "react";

interface AdBannerProps {
  items: { image: string; link: string }[];
}

const AdBanner: React.FC<AdBannerProps> = ({ items }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [items.length]);

  const handleClick = (link: string) => {
    window.open(link, "_blank"); // Abre el link en una nueva pestaña
  };

  return (
    <div className="flex w-full h-full justify-center  text-white p-5 rounded-md  ">

      <div
        className="cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => handleClick(items[currentIndex].link)}
      >
        <img
          src={items[currentIndex].image}
          className=" h-[60vh]  rounded-lg shadow-md"
          alt={`Ad ${currentIndex}`}
        />
      </div>

    </div>
  );
};

export default AdBanner;
