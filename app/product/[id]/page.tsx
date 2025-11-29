// app/product/[id]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS, getProductById } from "@/lib/getProducts";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id);

  return {
    title: product ? `${product.name} · ProDrop` : "Product Not Found",
    description: product?.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);

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
        <strong>${product.price.toFixed(2)}</strong>
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
    </div>
  );
}
