import productsData from "../data/products.json";
import type { ProductsResponse } from "../types/product";

export function getProducts(): Promise<ProductsResponse> {
  return Promise.resolve(productsData as ProductsResponse);
}
