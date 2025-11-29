import products from "@/app/data/products.json";

// Return clean category name (title‑cased)
export function getCategoryName(category: string): string {
  return category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

// Return all unique category keys
export function getAllCategoryKeys(): string[] {
  const keys = new Set<string>();

  for (const product of products) {
    if (product.category) {
      keys.add(product.category.toLowerCase());
    }
  }

  return Array.from(keys);
}
