import products from "../app/data/products.json";

export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category);
}

export function getAllProducts() {
  return products;
}
