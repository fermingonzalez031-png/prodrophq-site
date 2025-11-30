import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { ProductBrowser } from "@/components/ProductBrowser";

interface Props {
  params: { slug: string };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">{category.name}</h1>
        <p className="text-sm text-slate-600">{category.description}</p>
      </header>
      <ProductBrowser initialCategory={category.slug} />
    </div>
  );
}
