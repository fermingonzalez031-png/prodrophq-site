import { getProductsByCategory } from "../../../lib/getProducts";

export default function Page() {
  const items = getProductsByCategory("plumbing");

  return (
    <div>
      <h1>Plumbing</h1>
      <p>Browse plumbing supplies and materials.</p>

      <div style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(3, 1fr)",
        marginTop: "20px"
      }}>
        {items.map(item => (
          <div key={item.id}
               style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
