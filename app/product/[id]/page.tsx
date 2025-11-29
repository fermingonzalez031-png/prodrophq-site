import { getProductById } from "../../../lib/getProducts";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const item = getProductById(params.id);

  if (!item) {
    return <div style={{ padding: 20 }}>Product not found.</div>;
  }

  return (
    <div style={{ display: "flex", gap: 30 }}>
      <div style={{ flex: "0 0 360px" }}>
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 8,
            padding: 12,
          }}
        >
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <div>No image</div>
          )}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h1 style={{ marginTop: 0 }}>{item.name}</h1>
        {item.brand && (
          <div style={{ color: "#6b7280", marginBottom: 8 }}>{item.brand}</div>
        )}
        <div style={{ fontWeight: 700, fontSize: 20 }}>${item.price}</div>
        <p style={{ marginTop: 20 }}>
          This is a placeholder description. Later you can add a description
          field into products.json and render it here.
        </p>
      </div>
    </div>
  );
}
