import { Product, SimplifiedProduct } from "@/entities/product-item";
import { axiosClient } from "@/lib/axios-client";
import { formatCurrency } from "@/lib/helpers";

type ProductRepoEntity = Product & {
  originalPrice: number;
  price: number;
};

type SimplifiedProductRepoEntity = SimplifiedProduct & {
  originalPrice: number;
  price: number;
};

function fromRepoEntityToProductEntity(product: ProductRepoEntity): Product {
  return {
    ...product,
    price: formatCurrency(product.price),
    originalPrice: formatCurrency(product.originalPrice),
  };
}

function fromRepoEntityToSimplifiedProductEntity(
  product: SimplifiedProductRepoEntity
): SimplifiedProduct {
  return {
    ...product,
    price: formatCurrency(product.price),
    originalPrice: formatCurrency(product.originalPrice),
  };
}

export async function getTopSellingProducts(): Promise<SimplifiedProduct[]> {
  const response = await axiosClient.get<SimplifiedProductRepoEntity[]>(
    "/top-selling"
  );
  return response.data.map(fromRepoEntityToSimplifiedProductEntity);
}

export async function getProducts(): Promise<Product[]> {
  const response = await axiosClient.get<ProductRepoEntity[]>("/product");
  return response.data.map(fromRepoEntityToProductEntity);
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const response = await axiosClient.get<ProductRepoEntity[]>(
    `/products?category=${category}`
  );
  return response.data.map(fromRepoEntityToProductEntity);
}

export async function getProductById(id: number): Promise<Product> {
  const response = await axiosClient.get<ProductRepoEntity>(`/products/${id}`);
  const product = response.data; // Ahora es un objeto directamente

  return fromRepoEntityToProductEntity(product);
}

export async function getRecommendedProducts(
  productId: number
): Promise<Product[]> {
  // normally, if we were using a real backend, the product id would be enough to get the recommended products
  const baseProduct = await getProductById(productId);
  const id = baseProduct.id;
  const category = baseProduct.category;
  const response = await axiosClient.get<ProductRepoEntity[]>(
    `/products?category=${category}&id_ne=${id}&_limit=4`
  );
  return response.data.map(fromRepoEntityToProductEntity);
}
