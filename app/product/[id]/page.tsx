import { PRODUCTS } from "../../../lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
      {/* PRODUCT IMAGE */}
      <div
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* PRODUCT INFO */}
      <div>
        <h1 style={{ margin: 0 }}>{product.name}</h1>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          ${product.price.toFixed(2)}
        </p>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>

        <p style={{ marginTop: "20px" }}>{product.description}</p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "#0070f3",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
