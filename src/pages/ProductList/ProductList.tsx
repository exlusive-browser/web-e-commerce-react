import { MainLayout } from "@/layout/MainLayout";
import DynamicBreadcrumb from "@/components/ui/dynamicbreadcrumb";
import { Filters } from "./filters";
import { OrderBy } from "./orderby";
import ProductCard from "./components/ProductCard";

export function ProductList() {
  return (
    <MainLayout>
      <DynamicBreadcrumb />
      <div className="flex flex-col px-4 md:flex-row md:px-6">
        <div className="mb-4 md:hidden">
          <div className="flex justify-between mb-4 md:hidden">
            <div className="w-1/2 mr-2">
              <Filters />
            </div>
            <div className="w-1/2 ml-2">
              <OrderBy />
            </div>
          </div>
          <p className="font-bold pl-2">10 results in Smartphones</p>
        </div>

        <div className="hidden md:flex md:w-1/6 p-4 rounded-md">
          <Filters />
        </div>

        <div className="flex-1 p-4 md:w-2/3">
          <div className="flex flex-col">
            <p className="hidden md:block font-bold mb-5 text-lg">10 results in Smartphones</p>
            <ProductCard
              products={[
                {
                  name: "iPhone 15 Pro Max 256 GB Natural Titanium",
                  rating: 4,
                  price: 5899000,
                  discount: 17,
                  description: "Premium smartphone with a sleek titanium finish, 256 GB storage, and advanced camera features for a superior mobile experience.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "APPLE 12.9-Inch LTE 128GB Storage 8GB RAM",
                  rating: 5,
                  price: 6869000,
                  discount: 25,
                  description: "Large-screen LTE tablet with 128 GB storage and 8 GB RAM, perfect for productivity and entertainment on the go.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "XIAOMI Redmi Note 13 Pro 256GB Storage 8GB RAM Green",
                  rating: 4,
                  price: 1999900,
                  discount: 55,
                  description: "High-performance smartphone with 256 GB storage, 8 GB RAM, and a sleek green finish for power users.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "SAMSUNG GALAXY Tablet TAB S7 12.4 Inches 128 GB 6 GB RAM",
                  rating: 4,
                  price: 3999900,
                  discount: 33,
                  description: "Large-screen tablet with 128 GB storage and 6 GB RAM, designed for multimedia and productivity.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "iPhone 15 128 GB Pink",
                  rating: 5,
                  price: 4139010,
                  discount: 10,
                  description: "Sleek iPhone 15 in a vibrant pink color, with 128 GB storage for all your apps and media.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "MOTOROLA Moto G14 128 GB 8 GB RAM Purple",
                  rating: 5,
                  price: 759000,
                  discount: 45,
                  description: "Affordable yet powerful smartphone with 128 GB storage and 8 GB RAM for smooth multitasking.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "LENOVO M9 Tablet 9-Inch 64GB Storage 4GB RAM Arctic Grey",
                  rating: 5,
                  price: 949000,
                  discount: 53,
                  description: "Compact tablet with 64 GB storage and 4 GB RAM, ideal for entertainment and light productivity.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "APPLE Watch Ultra 2 49mm Titanium Blue MREG3BE/A",
                  rating: 4,
                  price: 4799900,
                  discount: 31,
                  description: "Advanced smartwatch with 49mm titanium build, designed for durability and performance tracking.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "Apple iPad Mini 6th Generation 2021 8.3 64GB Starlight Silver",
                  rating: 4,
                  price: 2998000,
                  discount: 31,
                  description: "Compact iPad Mini with 64 GB storage, perfect for portability without compromising on performance.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "Redmi Watch 4 Gray XIAOMI Watch 4",
                  rating: 4,
                  price: 515000,
                  discount: 10,
                  description: "Stylish and functional smartwatch with a sleek design and essential health-tracking features.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "Samsung Galaxy A55 5G 256GB 8GB RAM Purple",
                  rating: 4,
                  price: 2099900,
                  discount: 34,
                  description: "High-performance smartphone with 5G connectivity, 256 GB storage, and 8 GB RAM for seamless multitasking.",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "HUAWEI nova 10 Pro 256GB 8GB RAM Gray",
                  rating: 4,
                  price: 3699900,
                  discount: 28,
                  description: "Flagship smartphone with 256 GB storage, 8 GB RAM, and a stunning gray finish, built for power users.",
                  img: "https://via.placeholder.com/150",
                },
              ]} />

          </div>
        </div>

        <div className="hidden md:col md:block justify-between items-center mb-4">
          <OrderBy />
        </div>
      </div>
    </MainLayout>
  );
}
