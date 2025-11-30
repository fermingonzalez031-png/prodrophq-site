import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

interface SearchPageProps {
  searchParams?: { q?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const q = (searchParams?.q ?? "").trim();
  const query = q.toLowerCase();

  const filtered = query
    ? products.filter((p) => {
        const inName = p.name.toLowerCase().includes(query);
        const inSku = p.sku.toLowerCase().includes(query);
        const inDesc =
          p.shortDescription.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query);
        return inName || inSku || inDesc;
      })
    : [];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Search</h1>
      <p className="text-sm text-slate-600">
        {q
          ? `Results for “${q}” (${filtered.length} match${
              filtered.length === 1 ? "" : "es"
            })`
          : "Enter a product name or SKU in the search box above."}
      </p>

      {q && filtered.length === 0 && (
        <p className="text-sm text-slate-500">
          No products matched that search. Try a different keyword or SKU.
        </p>
      )}

      {filtered.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
