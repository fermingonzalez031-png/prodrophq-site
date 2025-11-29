import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/catalog";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  if (!products.length) {
    return <p>No products in this demo yet.</p>;
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
