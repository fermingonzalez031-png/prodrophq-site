import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/catalog";

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find(p => p.id === params.id);
  if (!product) return notFound();

  return (
    <section>
      <h1>{product.name}</h1>
      <p>{product.brand} • {product.sku}</p>
      <p>{product.description}</p>
      <p><strong>${product.price.toFixed(2)}</strong></p>
    </section>
  );
}
