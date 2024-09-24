import * as React from "react";
import searchIcon from "@/assets/header/magnifyng-glass.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MenuItem {
  title: string;
  links: { label: string; url: string }[];
}

interface LateralNavBarProps {
  menuItems: MenuItem[];
  onHambugerClick?: () => void;
}

export const LateralNavBar: React.FC<LateralNavBarProps> = ({
  menuItems,
  onHambugerClick,
}) => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white text-black p-4 z-10 border border-gray-200 border-solid overflow-y-auto">
      <button
        className="mb-4 px-4 py-2 bg-blue-300 rounded hover:bg-blue-100"
        onClick={onHambugerClick}
      >
        {" "}
        {"X"} {}
      </button>

      <div className="flex flex-row space-x-2">
        <Input className="w-full" placeholder="Search for products" />
        <Button type="submit">
          <img src={searchIcon} alt="Search" className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            <button className="px-4 py-2 text-2xl">{item.title}</button>
            <div className="mt-1">
              <ul>
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="px-4 py-2 text-sm hover:bg-gray-100 rounded w-full text-left"
                  >
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
