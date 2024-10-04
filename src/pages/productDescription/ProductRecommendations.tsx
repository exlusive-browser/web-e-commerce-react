import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../Landing/ProductCard";
import product13Image from "@/assets/images/magsafe.jpg";
import product14Image from "@/assets/images/magsafe_hover.jpg";
import product15Image from "@/assets/images/airpods.jpg";
import product16Image from "@/assets/images/airpods_hover.jpg";
import product17Image from "@/assets/images/cargador.jpg";
import product18Image from "@/assets/images/cargador_hover.jpg";
import product19Image from "@/assets/images/case.jpg";
import product20Image from "@/assets/images/case_hover.jpg";

export const ProductRecommendations: React.FC = () => {
  const products = [
    {
      id: 13,
      image: product13Image,
      hoverImage: product14Image,
      title: "APPLE MagSafe Charger",
      brand: "APPLE",
      discount: "-10%",
      originalPrice: "$219.000",
      price: "$197.100",
      seller: "iShop",
      rating: "4.7 ★ (31 reviews)",
    },
    {
      id: 15,
      image: product15Image,
      hoverImage: product16Image,
      title: "AirPods Pro 2nd Generation Headphones",
      brand: "APPLE",
      discount: "-20%",
      originalPrice: "$1.389.010",
      price: "$1.111.208",
      seller: "iShop",
      rating: "4.9 ★ (116 reviews)",
    },
    {
      id: 16,
      image: product17Image,
      hoverImage: product18Image,
      title: "APPLE 20W USB-C Power Adapter",
      brand: "APPLE",
      discount: "-15%",
      originalPrice: "$130.000",
      price: "$110.500",
      seller: "iShop",
      rating: "5 ★ (1,046 reviews)",
    },
    {
      id: 17,
      image: product19Image,
      hoverImage: product20Image,
      title: "Case APPLE MagSafe iPhone 15 Transparent",
      brand: "APPLE",
      discount: "-10%",
      originalPrice: "$299.000",
      price: "$269.100",
      seller: "iShop",
      rating: "5 ★ (4 reviews)",
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <section className="might-be-int" id="might-be-int">
        <h2 className="text-2xl font-bold mb-4">You might be interested in</h2>
        <hr
          className="mb-4"
          style={{ borderColor: "#2e86c1", borderWidth: "2px" }}
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              hoverImage={product.hoverImage}
              title={product.title}
              brand={product.brand}
              discount={product.discount}
              originalPrice={product.originalPrice}
              price={product.price}
              seller={product.seller}
              rating={product.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
