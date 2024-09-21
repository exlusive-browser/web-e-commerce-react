import React from "react";
import { Link } from "react-router-dom";
import product1Image from "@/assets/images/product1.png";
import product10Image from "@/assets/images/product10.png";
import product11Image from "@/assets/images/product11.png";
import product7Image from "@/assets/images/product7.png";
import product5Image from "@/assets/images/product5.png";
import product3Image from "@/assets/images/product3.png";
import product4Image from "@/assets/images/product4.png";
import product2Image from "@/assets/images/product2.png";
import product6Image from "@/assets/images/product6.png";
import product8Image from "@/assets/images/product8.png";
import product9Image from "@/assets/images/product9.png";
import product12Image from "@/assets/images/product12.png";
import product1HoverImage from "@/assets/images/product1-hover.png";
import product10HoverImage from "@/assets/images/product10-hover.png";
import product11HoverImage from "@/assets/images/product11-hover.png";
import product7HoverImage from "@/assets/images/product7-hover.png";
import product5HoverImage from "@/assets/images/product5-hover.png";
import product3HoverImage from "@/assets/images/product3-hover.png";
import product4HoverImage from "@/assets/images/product4-hover.png";
import product2HoverImage from "@/assets/images/product2-hover.png";
import product6HoverImage from "@/assets/images/product6-hover.png";
import product8HoverImage from "@/assets/images/product8-hover.png";
import product9HoverImage from "@/assets/images/product9-hover.png";
import product12HoverImage from "@/assets/images/product12-hover.png";

const TopsellingProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      image: product1Image,
      hoverImage: product1HoverImage,
      title: "iPhone 15 Pro Max 256 GB Natural Titanium",
      brand: "APPLE",
      discount: "-17%",
      originalPrice: "$5.899.000",
      price: "$4.869.600",
      seller: "iShop",
      rating: "4.3 ★ (3 reviews)",
    },
    {
      id: 2,
      image: product7Image,
      hoverImage: product7HoverImage,
      title: "APPLE 12.9-Inch LTE 128GB Storage 8GB RAM",
      brand: "APPLE",
      discount: "-25%",
      originalPrice: "$6.869.000",
      price: "$5.151.750",
      seller: "e-commerce",
      rating: "4.8 ★ (2 reviews)",
    },
    {
      id: 3,
      image: product5Image,
      hoverImage: product5HoverImage,
      title: "XIAOMI Redmi Note 13 Pro 256GB Storage 8GB RAM Green",
      brand: "XIAOMI",
      discount: "-55%",
      originalPrice: "$1.999.900",
      price: "$1.029.000",
      seller: "XIAOMI",
      rating: "4.3 ★ (27 reviews)",
    },
    {
      id: 4,
      image: product3Image,
      hoverImage: product3HoverImage,
      title: "SAMSUNG GALAXY Tablet TAB S7 12.4 Inches 128 GB 6 GB RAM",
      brand: "SAMSUNG GALAXY",
      discount: "-33%",
      originalPrice: "$3.999.900",
      price: "$2.679.900",
      seller: "Twido",
      rating: "4.1 ★ (14 reviews)",
    },
    {
      id: 5,
      image: product4Image,
      hoverImage: product4HoverImage,
      title: "iPhone 15 128 GB Pink",
      brand: "APPLE",
      discount: "-10%",
      originalPrice: "$4.139.010",
      price: "$4.097.620",
      seller: "Mac Center",
      rating: "4.8 ★ (4 reviews)",
    },
    {
      id: 6,
      image: product2Image,
      hoverImage: product2HoverImage,
      title: "MOTOROLA Moto G14 128 GB 8 GB RAM Purple",
      brand: "MOTOROLA",
      discount: "-45%",
      originalPrice: "$759.000",
      price: "$415.000",
      seller: "MOTOROLAs",
      rating: "5 ★ (5 reviews)",
    },
    {
      id: 7,
      image: product6Image,
      hoverImage: product6HoverImage,
      title: "LENOVO M9 Tablet 9-Inch 64GB Storage 4GB RAM Arctic Grey",
      brand: "LENOVO",
      discount: "-53%",
      originalPrice: "$949.000",
      price: "$446.030",
      seller: "TechnoShop",
      rating: "4.6 ★ (11 reviews)",
    },
    {
      id: 8,
      image: product8Image,
      hoverImage: product8HoverImage,
      title: "APPLE Watch Ultra 2 49mm Titanium Blue MREG3BE/A",
      brand: "APPLE",
      discount: "-31%",
      originalPrice: "$4.799.900",
      price: "$3.269.900",
      seller: "iShop",
      rating: "4.1 ★ (90 reviews)",
    },
    {
      id: 9,
      image: product9Image,
      hoverImage: product9HoverImage,
      title: "Apple iPad Mini 6th Generation 2021 8.3 64GB Starlight Silver",
      brand: "APPLE",
      discount: "-31%",
      originalPrice: "$2.998.000",
      price: "$2.039.800",
      seller: "e-commerce",
      rating: "4.4 ★ (8 reviews)",
    },
    {
      id: 10,
      image: product10Image,
      hoverImage: product10HoverImage,
      title: "Redmi Watch 4 Gray XIAOMI Watch 4",
      brand: "XIAOMI",
      discount: "-10%",
      originalPrice: "$515.000",
      price: "$463.500",
      seller: "XIAOMI",
      rating: "4.0 ★ (45 reviews)",
    },
    {
      id: 11,
      image: product11Image,
      hoverImage: product11HoverImage,
      title: "Samsung Galaxy A55 5G 256GB 8GB RAM Purple",
      brand: "SAMSUNG",
      discount: "-34%",
      originalPrice: "$2.099.900",
      price: "$1.369.988",
      seller: "itel",
      rating: "3.8 ★ (97 reviews)",
    },
    {
      id: 12,
      image: product12Image,
      hoverImage: product12HoverImage,
      title: "HUAWEI nova 10 Pro 256GB 8GB RAM Gray",
      brand: "HUAWEI",
      discount: "-28%",
      originalPrice: "$3.699.900",
      price: "$2.912931",
      seller: "HUAWEI",
      rating: "4.1 ★ (78 reviews)",
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center mb-5">
        <h2 className="text-2xl font-sans">
          Technology <span className="text-gray-500">12 results</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col justify-between transition-transform transform hover:scale-105"
            key={product.id}
          >
            <Link to={`/product/${product.id}`} className="flex-1">
              <div className="relative w-full h-52 overflow-hidden rounded-lg mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute w-full h-full object-contain transition-opacity duration-300"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.title} hover`}
                  className="absolute w-full h-full object-contain transition-opacity duration-300 opacity-0 hover:opacity-100"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold font-sans">{product.title}</h3>
                <p className="text-gray-500 text-[12px] font-sans">
                  {product.brand}
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-white bg-[#2e86c1] py-1 px-2 rounded text-[12px] inline-block font-sans">
                    {product.discount}
                  </p>
                  <p className="text-gray-500 line-through text-[14px] font-sans">
                    {product.originalPrice}
                  </p>
                </div>
                <p className="text-lg font-bold font-sans">{product.price}</p>
                <p className="text-gray-700 text-[12px] font-sans">
                  <strong>Sold by:</strong> {product.seller}
                </p>
                <p className="text-gray-500 text-[12px] font-sans">
                  {product.rating}
                </p>
              </div>
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex items-center justify-center mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 font-sans whitespace-nowrap text-sm sm:text-xs md:text-base md:py-3 md:px-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 2l1.5 4h13l-2 9H7L4.5 6H2m6 16a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 font-sans">
          1
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 font-sans">
          2
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded font-sans">
          3
        </button>
      </div>
    </div>
  );
};

export default TopsellingProducts;
