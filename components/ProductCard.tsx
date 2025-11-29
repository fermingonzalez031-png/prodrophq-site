import type { Product } from "@/lib/catalog";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <article style={{ border: "1px solid #e2e8f0", padding: 10, borderRadius: 8 }}>
      <div style={{ fontWeight: 600 }}>{product.name}</div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>
        {product.brand} • {product.sku}
      </div>
      <div style={{ marginTop: 4 }}>{product.description}</div>
      <div style={{ marginTop: 4, fontWeight: 700 }}>${product.price.toFixed(2)}</div>
      <div style={{ marginTop: 6, fontSize: 12, color: product.inStock ? "#166534" : "#b91c1c" }}>
        {product.inStock ? "In stock" : "Out of stock"}
      </div>
    </article>
  );
}
