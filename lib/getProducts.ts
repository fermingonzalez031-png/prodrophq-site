// lib/getProducts.ts

import productsData from "@/app/data/products.json";

export type TradeId = "plumbing" | "hvac" | "electrical" | "tools" | "safety";

export type Product = {
  id: string;
  trade: TradeId;   // plumbing, hvac, etc.
  subcat: string;
  name: string;
  brand: string;
  price: number;
  inStock: boolean;
  sku: string;
  description: string;
};

export const PRODUCTS: Product[] = productsData as Product[];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductsForTrade(tradeId: string): Product[] {
  return PRODUCTS.filter(
    (p) => p.trade.toLowerCase() === tradeId.toLowerCase()
  );
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function searchProducts(q: string): Product[] {
  const query = q.toLowerCase();
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
  );
}
