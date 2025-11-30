
import Link from "next/link";
import type { Product } from "@/data/products";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-lg border bg-white p-4 flex flex-col gap-2">
      <div className="aspect-[4/3] w-full bg-slate-100 rounded-md mb-2 flex items-center justify-center text-xs text-slate-400">
        {product.imageUrl ? "Product image" : "No image"}
      </div>
      <Link
        href={`/products/${product.id}`}
        className="font-semibold hover:underline"
      >
        {product.name}
      </Link>
      <div className="text-xs text-slate-500">{product.sku}</div>
      <div className="text-sm text-slate-600">{product.shortDescription}</div>
      <div className="mt-auto flex items-center justify-between">
        <div className="font-semibold">${product.price.toFixed(2)}</div>
        <div
          className={`text-xs ${
            product.inStock ? "text-green-600" : "text-amber-600"
          }`}
        >
          {product.inStock ? "In stock for same-day" : "Special order"}
        </div>
      </div>
    </div>
  );
};
