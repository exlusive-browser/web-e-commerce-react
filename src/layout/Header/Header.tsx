import hamburgerIcon from "@/assets/header/hamburger.svg";
import logoIcon from "@/assets/header/logo.svg";
import searchIcon from "@/assets/header/magnifyng-glass.svg";
import accountIcon from "@/assets/header/account.svg";
import cartIcon from "@/assets/header/cart.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface HeaderProps {
  onHambugerClick?: () => void;
}

export function Header({ onHambugerClick }: HeaderProps) {
  return (
    <header className="flex justify-normal lg:justify-between items-center py-6 px-8 bg-white">
      <button className="p-2 lg:hidden" onClick={onHambugerClick}>
        <img src={hamburgerIcon} alt="Menu" className="h-6 w-6" />
      </button>

      <a className="flex lg:grow-0 grow items-center gap-3" href="/">
        <img
          src={logoIcon}
          alt="Company Logo"
          className="h-12 hidden lg:block"
        />
        <span className="font-title font-bold text-lg lg:px-0 px-2">
          Up Ecommerce
        </span>
      </a>

      <div className="hidden lg:flex flex-grow px-16 items-center space-x-2">
        <Button type="submit">
          <img src={searchIcon} alt="Search" className="h-4 w-4" />
        </Button>
        <Input className="w-full" placeholder="Search for products" />
      </div>

      <div className="flex">
        <Button asChild variant="link" className="text-foreground">
          <a href="/account">
            <img
              src={accountIcon}
              alt="My Account"
              className="h-6 w-5 mr-0 lg:mr-2"
            />
            <span className="hidden lg:block">My Account</span>
          </a>
        </Button>
        <Button asChild variant="link" className="text-foreground">
          <a href="/cart">
            <img src={cartIcon} alt="Cart" className="h-6 w-5 mr-0 lg:mr-2" />
            <span className="hidden lg:block">Cart</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
