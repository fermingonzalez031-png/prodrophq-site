
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export const CartSummary = () => {
  const { items, total, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-600">Your cart is empty.</p>
        <Link
          href="/categories"
          className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {items.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex items-center justify-between gap-3 rounded-md border bg-white p-3"
          >
            <div className="flex-1">
              <div className="font-semibold text-sm">{product.name}</div>
              <div className="text-xs text-slate-500">
                SKU: {product.sku} • ${product.price.toFixed(2)} {product.unit}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  updateQuantity(product.id, Number(e.target.value) || 1)
                }
                className="w-16 rounded-md border px-2 py-1 text-xs"
              />
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-xs text-slate-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Subtotal</span>
        <span className="text-lg font-semibold">
          ${total.toFixed(2)}
        </span>
      </div>
      <Link
        href="/checkout"
        className="inline-flex justify-center w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};
