
import Link from "next/link";
import { categories } from "@/data/categories";

export const CategoryGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/categories/${cat.slug}`}
          className="rounded-lg border bg-white p-4 hover:shadow-sm transition"
        >
          <h3 className="font-semibold mb-1">{cat.name}</h3>
          <p className="text-sm text-slate-600">{cat.description}</p>
        </Link>
      ))}
    </div>
  );
};
