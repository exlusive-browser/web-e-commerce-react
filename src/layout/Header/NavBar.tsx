import * as React from "react";
import { useState } from "react";

interface MenuItem {
  title: string;
  links: { label: string; url: string }[];
}

interface NavBarBarProps {
  menuItems: MenuItem[];
}

export const NavBar: React.FC<NavBarBarProps> = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  return (
    <div
      className=" bg-white text-black p-4  z-10"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto flex justify-start items-center ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <button className="px-4 py-2 hover:bg-gray-100 rounded">
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg">
                <ul>
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="px-4 py-2 hover:bg-gray-100">
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
