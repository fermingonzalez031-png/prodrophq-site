
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          backgroundColor: "#0A2540",
          padding: "60px 30px",
          borderRadius: "12px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Your Trade Supply Hub
        </h1>

        <input
          type="text"
          placeholder="Search products, brands, categories..."
          style={{
            width: "70%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}
        />
      </section>

      {/* CATEGORY GRID */}
      <section style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Shop by Category
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
         {[
  { name: "Plumbing", link: "/catalog/plumbing" },
  { name: "HVAC", link: "/catalog/hvac" },
  { name: "Electrical", link: "/catalog/electrical" },
  { name: "Tools", link: "/catalog/tools" },
  { name: "Safety", link: "/catalog/safety" },
].map((cat) => (
  <Link
    key={cat.name}
    href={cat.link}
    style={{
      padding: "25px",
      background: "#f5f5f5",
      borderRadius: "10px",
      fontSize: "22px",
      fontWeight: "600",
      textAlign: "center",
      textDecoration: "none",
      color: "#0A2540",
    }}
  >
    {cat.name}
  </Link>
))}

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        style={{
          marginTop: "60px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {[
          "Fast Local Delivery",
          "Pro‑Only Inventory",
          "Real‑Time Stock",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "#e8f2ff",
              padding: "20px 30px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {item}
          </div>
        ))}
      </section>

    </div>
  );
}
