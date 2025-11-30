
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

interface Props {
  params: { slug: string };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const filtered = products.filter((p) => p.category === category.slug);

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">{category.name}</h1>
        <p className="text-sm text-slate-600">{category.description}</p>
      </header>
      {filtered.length === 0 ? (
        <p className="text-sm text-slate-500">
          No sample products yet. Add more items to <code>products.ts</code>.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
