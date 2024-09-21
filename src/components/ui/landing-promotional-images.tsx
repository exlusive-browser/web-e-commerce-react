import * as React from "react";

interface PromtionalProps {
  item: { image: string; link: string };
}

const PromotionalImages: React.FC<PromtionalProps> = ({ item }) => {
  const handleClick = (link: string) => {
    window.open(link, "_blank"); // Abre el link en una nueva pestaña
  };
  return (
    <div className="w[80vw] text-white p-5 rounded-md flex flex-col items-center text-center">
      <div
        className="cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => handleClick(item.link)}
      >
        <img src={item.image} className="  rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default PromotionalImages;
