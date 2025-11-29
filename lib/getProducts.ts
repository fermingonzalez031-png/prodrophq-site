// lib/getProducts.ts
import products from "../app/data/products.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  brand?: string;
  price: number;
  image?: string;
};

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}
