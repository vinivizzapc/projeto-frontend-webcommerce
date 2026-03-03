import type { ProductsResponse } from "../types/product";

export async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(
    "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return await response.json();
}
