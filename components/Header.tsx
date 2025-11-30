"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const Header = () => {
  const { items } = useCart();
  const { profile } = useUser();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-md border px-2 py-1 text-xs font-semibold">
              PRO
            </span>
            <span className="font-bold text-xl tracking-tight">Prodrophq</span>
          </Link>
        </div>

        <form
          onSubmit={onSearch}
          className="flex-1 max-w-md w-full flex items-center gap-2"
        >
          <input
            type="search"
            placeholder="Search by product name or SKU"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-md border px-3 py-1.5 text-sm"
          />
          <button
            type="submit"
            className="hidden sm:inline-flex rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
          >
            Search
          </button>
        </form>

        <nav className="flex items-center gap-4 text-sm justify-end">
          <Link href="/categories" className="hover:underline">
            Shop by Category
          </Link>
          <Link href="/account/register" className="hover:underline">
            {profile ? "My Account" : "Register Business"}
          </Link>
          <Link href="/cart" className="relative hover:underline">
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 text-xs bg-blue-600 text-white rounded-full px-1.5">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
