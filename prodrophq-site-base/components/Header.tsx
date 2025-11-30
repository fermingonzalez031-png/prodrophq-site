
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";

export const Header = () => {
  const { items } = useCart();
  const { profile } = useUser();

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-md border px-2 py-1 text-xs font-semibold">
            PRO
          </span>
          <span className="font-bold text-xl tracking-tight">Prodrophq</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
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
