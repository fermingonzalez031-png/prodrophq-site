export default function Page() {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {/* LEFT SIDEBAR FILTERS */}
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

      {/* PRODUCT GRID */}
      <section style={{ flex: 1 }}>
        <h1>Plumbing</h1>
        <p>Browse plumbing supplies and materials.</p>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {/* Placeholder items */}
          <div style={{ border: "1px solid #ccc", padding: "10px" }}>Item 1</div>
          <div style={{ border: "1px solid #ccc", padding: "10px" }}>Item 2</div>
          <div style={{ border: "1px solid #ccc", padding: "10px" }}>Item 3</div>
        </div>
      </section>
    </div>
  );
}
