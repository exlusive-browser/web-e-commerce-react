export interface Specification {
  feature: string;
  details: string[];
}

export interface Product {
  id: number;
  image: string;
  hoverImage: string;
  title: string;
  brand: string;
  discount: string;
  originalPrice: string;
  price: string;
  seller: string;
  rating: string;
  category: string;
  description: string;
  technicalSpecifications: Specification[];
}

export interface SimplifiedProduct {
  id: number;
  image: string;
  hoverImage: string;
  title: string;
  brand: string;
  discount: string;
  originalPrice: string;
  price: string;
  seller: string;
  rating: string;
}
