import ProductGrid from "@/components/ProductGrid";
import { searchProducts } from "@/lib/catalog";

interface Props {
  searchParams: { q?: string };
}

export default function CatalogPage({ searchParams }: Props) {
  const q = typeof searchParams.q === "string" ? searchParams.q : "";
  const products = q ? searchProducts(q) : [];

  return (
    <section>
      <h1>Catalog search</h1>
      {q ? <p>Results for "{q}"</p> : <p>Use the search box above.</p>}
      <ProductGrid products={products} />
    </section>
  );
}
