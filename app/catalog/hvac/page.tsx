import ProductGrid from "../../../components/ProductGrid";

export default function Page() {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <aside
        style={{
          width: "250px",
          borderRight: "1px solid #ddd",
          paddingRight: "20px",
        }}
      >
        <h2>Filters</h2>
        <p>(Brand, Size, Price, Type, etc.)</p>
      </aside>

      <section style={{ flex: 1 }}>
        <h1>HVAC</h1>
        <p>Browse HVAC materials and equipment.</p>
        <ProductGrid category="hvac" />
      </section>
    </div>
  );
}
