import * as React from "react";
import { NavBar } from "./NavBar";
import { LateralNavBar } from "./LateralNavBar";

interface SubHeaderProps {
  open: boolean;
  onHambugerClick?: () => void;
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  open,
  onHambugerClick,
}) => {
  const [isSmallScreen, setIsSmallScreen] = React.useState<boolean>(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1024);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      title: "Technology",
      links: [
        { label: "Computers", url: "/" },
        { label: "Televisions", url: "/" },
        { label: "Audio", url: "/" },
        { label: "Video", url: "/" },
        { label: "Printing", url: "/" },
        { label: "Cameras", url: "/" },
      ],
    },
    {
      title: "Appliances",
      links: [
        { label: "Air Conditioning", url: "/" },
        { label: "Refrigeration", url: "/" },
        { label: "Washers/Dryers", url: "/" },
      ],
    },
    {
      title: "Smartphones",
      links: [
        { label: "Smartphones", url: "/product-list/smartphones" },
        { label: "Tablets", url: "/" },
        { label: "Smartwatch", url: "/" },
      ],
    },
    {
      title: "Home",
      links: [
        { label: "Living Rooms", url: "/" },
        { label: "Dining Room", url: "/" },
        { label: "Kitchen", url: "/" },
        { label: "Bathroom", url: "/" },
      ],
    },
  ];

  return (
    <>
      {!isSmallScreen ? <NavBar menuItems={menuItems} /> : null}
      {isSmallScreen && open ? (
        <LateralNavBar
          menuItems={menuItems}
          onHambugerClick={onHambugerClick}
        />
      ) : null}
    </>
  );
};
