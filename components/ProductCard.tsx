// components/ProductCard.tsx
import Link from "next/link";
import type { Product } from "../lib/getProducts";

type Props = {
  item: Product;
};

export default function ProductCard({ item }: Props) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 12,
      }}
    >
      <div
        style={{
          height: 120,
          background: "#f9fafb",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            style={{ maxHeight: 110, maxWidth: "100%" }}
          />
        ) : (
          <div style={{ opacity: 0.6 }}>No image</div>
        )}
      </div>

      <h3 style={{ margin: "12px 0 6px", fontSize: 16 }}>{item.name}</h3>
      {item.brand && (
        <div style={{ color: "#6b7280", marginBottom: 4 }}>{item.brand}</div>
      )}
      <div style={{ fontWeight: 700 }}>${item.price}</div>

      <Link href={`/product/${item.id}`}>
        <button
          style={{
            marginTop: 10,
            padding: "8px 12px",
            borderRadius: 8,
            background: "#0A2540",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          View
        </button>
      </Link>
    </div>
  );
}
