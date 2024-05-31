import { client } from "./api";

export async function getBrands() {
  const res = (await client.get(`/brands`)).data;

  return res;
}

export async function getBrand(brandId) {
  const res = (await client.get(`/brands/${brandId}`)).data;

  return res;
}
