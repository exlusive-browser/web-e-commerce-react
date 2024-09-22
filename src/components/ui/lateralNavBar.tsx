import * as React from "react";

interface MenuItem {
  title: string;
  links: { label: string; url: string }[];
}

interface LateralNavBarProps {
  menuItems: MenuItem[];
  onHambugerClick?: () => void;
}

const LateralNavBar: React.FC<LateralNavBarProps> = ({
  menuItems,
  onHambugerClick,
}) => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 z-10">
      <button
        className="mb-4 px-4 py-2 bg-blue-300 rounded hover:bg-blue-100"
        onClick={onHambugerClick}
      >
        {" "}
        {"X"} {}
      </button>
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            <button className="px-4 py-2 text-2xl">{item.title}</button>
            <div className="mt-1">
              <ul>
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="px-4 py-2 text-sm hover:bg-gray-700 rounded w-full text-left"
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

export default LateralNavBar;
