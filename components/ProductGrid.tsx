import productsData from "../app/data/products.json";

interface Props {
  category?: string;
  search?: string;
}

export default function ProductGrid({ category, search }: Props) {
  let products = productsData;

  if (category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
  const q = search.toLowerCase();
  products = products.filter((p) =>
    p.name.toLowerCase().includes(q)
  );
}


  return (
    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
