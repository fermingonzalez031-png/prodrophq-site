export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;      // matches the category keys in catalogs.ts
  image?: string;        // optional for future image support
};

// TEMPORARY DEMO PRODUCTS — add more as needed
export const products: Product[] = [
  {
    id: "duct-tape-001",
    name: "Pro Industrial Duct Tape",
    description: "High‑strength, weather‑resistant duct tape for industrial use.",
    price: 14.99,
    category: "tape",
    image: "/images/products/duct-tape.png"
  },
  {
    id: "wire-12g-001",
    name: "12 Gauge Copper Wire",
    description: "Heavy‑duty electrical copper wire for professional installations.",
    price: 29.99,
    category: "wire",
  },
  {
    id: "gloves-nitrile-001",
    name: "Nitrile Work Gloves",
    description: "Durable protective gloves for shop and field use.",
    price: 9.99,
    category: "gloves",
  },
];

// GET A PRODUCT BY ID
export function getProductById(id: string) {
  return products.find((p) => p.id === id) ?? null;
}

// GET PRODUCTS BY CATEGORY
export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

// GET ALL PRODUCT IDS (for generateStaticParams)
export function getAllProductIds() {
  return products.map((p) => ({ id: p.id }));
}

