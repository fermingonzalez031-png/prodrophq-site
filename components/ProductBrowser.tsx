"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { categories, type CategorySlug } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";

type SortOption = "relevance" | "price_asc" | "price_desc" | "name";

export function ProductBrowser({
  initialCategory,
}: {
  initialCategory?: CategorySlug;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(initialCategory ?? "all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    let list = products.slice();

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (term) {
      list = list.filter((p) => {
        const inName = p.name.toLowerCase().includes(term);
        const inSku = p.sku.toLowerCase().includes(term);
        const inDesc =
          p.shortDescription.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term);
        const inBrand = p.brand.toLowerCase().includes(term);
        return inName || inSku || inDesc || inBrand;
      });
    }

    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    switch (sortBy) {
      case "price_asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "relevance":
      default:
        // leave as-is for now
        break;
    }

    return list;
  }, [search, category, inStockOnly, sortBy]);

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="rounded-lg border bg-white p-3 sm:p-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1 grid gap-3 sm:grid-cols-3">
          <div className="space-y-1">
            <label className="text-xs font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm bg-white"
            >
              <option value="all">All trades</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1 sm:col-span-2">
            <label className="text-xs font-medium">Search within results</label>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Name, SKU, brand, or description"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:w-60">
          <label className="inline-flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="rounded border"
            />
            In-stock / same-day eligible only
          </label>
          <div className="space-y-1">
            <label className="text-xs font-medium">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full rounded-md border px-3 py-2 text-sm bg-white"
            >
              <option value="relevance">Relevance</option>
              <option value="price_asc">Price: Low to high</option>
              <option value="price_desc">Price: High to low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-sm text-slate-600">
          No products match these filters. Try removing a filter or searching
          for a different term.
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
