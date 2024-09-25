import * as React from "react";
import { NavBar } from "./NavBar";
import { LateralNavBar } from "./LateralNavBar";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/entities/category";
import { getCategories } from "@/repositores/category.repository";

interface SubHeaderProps {
  open: boolean;
  onHambugerClick?: () => void;
}

const categoryToMenuItem = (category: Category) => {
  return {
    title: category.title,
    links: category.subCategories.map((subCategory) => ({
      label: subCategory.title,
      url: subCategory.url,
    })),
  };
};

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

  // TODO: handle loading and error states

  const { isLoading, isError, data, error } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const menuItems = data !== undefined ? data.map(categoryToMenuItem) : [];

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
