import { SimplifiedProduct } from "./product-item";

export interface CartItem {
  product: SimplifiedProduct;
  amount: number;
}

export interface OrderOverview {
  subtotal: number;
  discounts: number[];
  total: number;
}
