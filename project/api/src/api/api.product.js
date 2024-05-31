import { BASE_URL } from "./api";

export async function getProduct(productId) {
  const res = await fetch(`${BASE_URL}/product/${productId}`);
  const data = await res.json();

  return data;
}

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();

  return data;
}
