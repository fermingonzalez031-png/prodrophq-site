// components/Filters.tsx
export default function Filters() {
  return (
    <aside
      style={{
        width: "250px",
        borderRight: "1px solid #ddd",
        paddingRight: "20px",
      }}
    >
      <h2>Filters</h2>

      <div style={{ marginTop: "15px" }}>
        <h3>Brand</h3>
        <select style={{ width: "100%", padding: "8px" }}>
          <option value="">Any</option>
          <option>SharkBite</option>
          <option>Sioux Chief</option>
          <option>NIBCO</option>
        </select>
      </div>

      <div style={{ marginTop: "15px" }}>
        <h3>Price</h3>
        <input type="range" min="0" max="5000" />
      </div>

      <div style={{ marginTop: "15px" }}>
        <h3>Size</h3>
        <select style={{ width: "100%", padding: "8px" }}>
          <option value="">Any</option>
          <option>1/2"</option>
          <option>3/4"</option>
          <option>1"</option>
        </select>
      </div>
    </aside>
  );
}
