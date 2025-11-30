
"use client";

import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return notFound();

  return (
    <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
      <div className="space-y-4">
        <div className="aspect-[4/3] w-full bg-slate-100 rounded-md flex items-center justify-center text-xs text-slate-400">
          Product image
        </div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="text-sm text-slate-500">SKU: {product.sku}</div>
        <p className="text-sm text-slate-700">{product.description}</p>
      </div>
      <aside className="rounded-lg border bg-white p-4 space-y-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-slate-500">Price</span>
          <span className="text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div
          className={`text-sm ${
            product.inStock ? "text-green-600" : "text-amber-600"
          }`}
        >
          {product.inStock
            ? "In stock – eligible for same-day pickup & delivery"
            : "Special order – coordinate directly with supplier"}
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm" htmlFor="qty">
            Qty
          </label>
          <input
            id="qty"
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value) || 1)}
            className="w-20 rounded-md border px-2 py-1 text-sm"
          />
        </div>
        <button
          onClick={() => addToCart(product, qty)}
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Add to company cart
        </button>
        <p className="text-xs text-slate-500">
          Add items to your company cart, assign a purchase order, and choose
          your delivery window at checkout.
        </p>
      </aside>
    </div>
  );
}
