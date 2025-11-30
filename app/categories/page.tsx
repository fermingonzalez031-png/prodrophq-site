
import { CategoryGrid } from "@/components/CategoryGrid";

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Categories</h1>
      <p className="text-sm text-slate-600">
        Browse HVAC, plumbing, electrical, carpentry, and more across your
        preferred local suppliers.
      </p>
      <CategoryGrid />
    </div>
  );
}
