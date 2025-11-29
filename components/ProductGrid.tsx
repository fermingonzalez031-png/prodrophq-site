// components/ProductGrid.tsx
"use client";

import { useMemo } from "react";
import { getProductsForTrade, type Product } from "@/lib/getProducts";

type Props = {
  category?: string;
  search?: string;   // <-- ADD THIS
};


export default function ProductGrid({ category, search }: Props) {
  console.log("Search:", search);
  // then filter products using search...
}

  if (items.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: "20px",
      }}
    >
      {items.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <h3 style={{ marginBottom: "4px" }}>{p.name}</h3>
          <p style={{ margin: 0, color: "#555" }}>{p.brand}</p>
          <p style={{ fontWeight: "bold", marginTop: "8px" }}>
            ${p.price.toFixed(2)}
          </p>
          <p
            style={{
              marginTop: "6px",
              color: p.inStock ? "green" : "red",
              fontSize: "14px",
            }}
          >
            {p.inStock ? "In stock" : "Out of stock"}
          </p>
        </div>
      ))}
    </div>
  );
}
