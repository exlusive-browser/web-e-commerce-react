import { CartItem } from "@/entities/cart";

export function calculateSubtotal(cartItems: CartItem[]) {
  return cartItems.reduce((total, item) => {
    const price = parseFloat(
      item.product.originalPrice.replace(/\$|\.|,/g, "")
    );
    return total + price * item.amount;
  }, 0);
}

export function calculateDiscounts(cartItems: CartItem[]) {
  return cartItems.map((item) => {
    const price = parseFloat(
      item.product.originalPrice.replace(/\$|\.|,/g, "")
    );
    const discountValue =
      parseFloat(item.product.discount.replace(/-|%/g, "")) / 100;
    return price * discountValue * item.amount;
  });
}

export function getOrderOverview(cartItems: CartItem[]) {
  const subtotal = calculateSubtotal(cartItems);
  const discounts = calculateDiscounts(cartItems);
  const totalDiscount = discounts.reduce(
    (total, discount) => total + discount,
    0
  );
  const total = subtotal - totalDiscount;
  return { subtotal, discounts, total };
}
