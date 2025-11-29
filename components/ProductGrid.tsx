// components/ProductGrid.tsx
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "../lib/getProducts";

type Props = {
  category: string;
};

export default function ProductGrid({ category }: Props) {
  const items = getProductsByCategory(category);

  if (!items.length) {
    return <p>No products in this category yet.</p>;
  }

  return (
    <div
      style={{
        marginTop: 20,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
