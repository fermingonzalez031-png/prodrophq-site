// components/ProductGrid.tsx
"use client";

import { useMemo } from "react";
import { PRODUCTS, type Product } from "@/lib/products";

type Props = {
  category: string; // e.g. "plumbing", "hvac"
};

export default function ProductGrid({ category }: Props) {
  // Filter products by category (trade)
  const items: Product[] = useMemo(() => {
    return PRODUCTS.filter((p) => p.trade === category);
  }, [category]);

  if (items.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: "25px",
        marginTop: "20px",
      }}
    >
      {items.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            padding: "16px",
            background: "white",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0" }}>{p.name}</h3>
          <p style={{ margin: "0 0 4px 0", color: "#666" }}>{p.brand}</p>

          <p style={{ fontWeight: "bold", margin: "10px 0" }}>
            ${p.price.toFixed(2)}
          </p>

          <p
            style={{
              color: p.inStock ? "green" : "red",
              marginBottom: "10px",
            }}
          >
            {p.inStock ? "In stock" : "Out of stock"}
          </p>

          <button
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              background: "#0070f3",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
