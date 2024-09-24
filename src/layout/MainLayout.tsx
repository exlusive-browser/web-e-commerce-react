import { Footer } from "./Footer";
import { useState } from "react";
import { SubHeader } from "./Header/SubHeader";
import { Header } from "./Header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const onHambugerClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header onHambugerClick={onHambugerClick} />
        <SubHeader open={open} onHambugerClick={onHambugerClick} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
