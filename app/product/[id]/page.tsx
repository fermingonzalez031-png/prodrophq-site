// app/product/[id]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/products"; 
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.id === params.id);

  return {
    title: product ? `${product.name} · ProDrop` : "Product Not Found",
    description: product?.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "30px" }}>
      <h1>{product.name}</h1>

      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        <strong>Brand:</strong> {product.brand}
      </p>

      <p style={{ fontSize: "22px", margin: "15px 0" }}>
        <strong>${product.price}</strong>
      </p>

      <p>
        <strong>SKU:</strong> {product.sku}
      </p>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        {product.description}
      </p>

      <p
        style={{
          marginTop: "20px",
          color: product.inStock ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        style={{
          marginTop: "25px",
          padding: "12px 18px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#0070f3",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
