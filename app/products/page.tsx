import { ProductBrowser } from "@/components/ProductBrowser";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">All products</h1>
        <p className="text-sm text-slate-600">
          Browse HVAC, plumbing, electrical, carpentry, and tools from partner
          supply houses. Filter by trade, same-day eligibility, and more.
        </p>
      </header>
      <ProductBrowser />
    </div>
  );
}
