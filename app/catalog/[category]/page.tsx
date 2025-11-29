// app/catalog/[category]/page.tsx
import Filters from "../../../components/Filters";
import ProductGrid from "../../../components/ProductGrid";
import { getCategoryName, getAllCategoryKeys } from "../../../lib/catalogs.ts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { category: string };
};

export async function generateStaticParams() {
  return getAllCategoryKeys().map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = getCategoryName(params.category) ?? "Category";
  return {
    title: `${name} · ProDrop`,
    description: `Browse ${name} supplies and materials.`,
  };
}

export default function Page({ params }: Props) {
  const categoryKey = params.category?.toLowerCase();
  const categoryName = getCategoryName(categoryKey);

  if (!categoryName) {
    notFound();
  }

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Filters />

      <section style={{ flex: 1 }}>
        <h1 style={{ marginTop: 0 }}>{categoryName}</h1>
        <p>Browse {categoryName.toLowerCase()} supplies and materials.</p>

        <ProductGrid category={categoryKey} />
      </section>
    </div>
  );
}
