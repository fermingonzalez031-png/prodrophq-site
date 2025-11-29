import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              padding: "4px 10px",
              borderRadius: 999,
              background: "#e0ecff",
              color: "#1d4ed8",
              fontSize: 12,
              display: "inline-flex",
              marginBottom: 10,
            }}
          >
            Built for HVAC, plumbing, electrical, and more.
          </div>
          <h1 style={{ fontSize: 32, margin: "0 0 10px" }}>
            Same-day material drops for pros.
          </h1>
          <p style={{ margin: 0, color: "#4b5563", maxWidth: 520 }}>
            ProDrop connects licensed contractors, local supply houses, and
            independent drivers so you can keep working while the parts come to
            you.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <a
              href="mailto:info@prodrophq.com?subject=ProDrop%20Early%20Access"
            >
              <button
                style={{
                  borderRadius: 999,
                  border: 0,
                  background: "#1d4ed8",
                  color: "white",
                  padding: "10px 18px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Get early access
              </button>
            </a>
            <Link href="/catalog/plumbing">
              <button
                style={{
                  borderRadius: 999,
                  border: "1px solid #cbd5f5",
                  background: "white",
                  color: "#1d4ed8",
                  padding: "10px 18px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                View catalog
              </button>
            </Link>
          </div>

          <p
            style={{
              marginTop: 10,
              color: "#6b7280",
              fontSize: 12,
            }}
          >
            No more driving to the supply house mid-job. Build a cart, add a PO,
            and drop to your jobsite.
          </p>
        </div>

        {/* Right side hero card */}
        <div
          style={{
            borderRadius: 16,
            border: "1px solid #e5e7eb",
            padding: 18,
            background: "#f9fafb",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 16 }}>How a ProDrop run works</h3>
          <ol
            style={{
              margin: 0,
              paddingLeft: 18,
              color: "#4b5563",
              fontSize: 14,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <li>Create a job, add materials from the catalog.</li>
            <li>Local supply house confirms stock and prepares the order.</li>
            <li>Driver picks up materials and heads to your jobsite.</li>
            <li>You sign for delivery and keep the job moving.</li>
          </ol>
          <p style={{ margin: 0, color: "#9ca3af", fontSize: 12 }}>
            Contractor app · Supplier portal · Driver app — all connected
            through ProDrop HQ.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section>
        <h2 style={{ margin: "0 0 8px", fontSize: 22 }}>Who ProDrop serves</h2>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
          One network, three sides: contractors, supply houses, and drivers.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 18,
          }}
        >
          <div
            style={{
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              padding: 14,
              background: "white",
            }}
          >
            <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>Contractors</h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "#4b5563",
                fontSize: 14,
              }}
            >
              <li>Stay on the job while materials come to you.</li>
              <li>Search by trade, part, brand, or SKU.</li>
              <li>Add PO numbers and jobsite notes to each drop.</li>
            </ul>
          </div>

          <div
            style={{
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              padding: 14,
              background: "white",
            }}
          >
            <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>Supply Houses</h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "#4b5563",
                fontSize: 14,
              }}
            >
              <li>List in-stock items and preferred brands.</li>
              <li>Receive organized POs from licensed contractors.</li>
              <li>Mark orders “ready for pickup” in seconds.</li>
            </ul>
          </div>

          <div
            style={{
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              padding: 14,
              background: "white",
            }}
          >
            <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>Drivers</h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "#4b5563",
                fontSize: 14,
              }}
            >
              <li>Pick up pre-packed orders from supply houses.</li>
              <li>Get clear drop-off instructions and contacts.</li>
              <li>Capture signatures and photo proof on delivery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STEPS */}
      <section>
        <h2 style={{ margin: "0 0 8px", fontSize: 22 }}>How ProDrop works</h2>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
          A simple, repeatable flow designed for busy trades.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 18,
          }}
        >
          {[
            {
              step: "1",
              title: "Create a job & cart",
              text: "Filter by trade and supplier, add items to a job-specific cart, and attach your PO.",
            },
            {
              step: "2",
              title: "Supplier confirms & stages",
              text: "Partner supply houses confirm stock and stage materials for pickup.",
            },
            {
              step: "3",
              title: "Driver picks up",
              text: "A ProDrop driver or in-house runner grabs the order and heads to your job.",
            },
            {
              step: "4",
              title: "Drop, sign, done",
              text: "You sign on delivery, get a time-stamped record, and keep working.",
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                padding: 14,
                background: "white",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 999,
                  background: "#1d4ed8",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  marginBottom: 8,
                }}
              >
                {item.step}
              </div>
              <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#4b5563", fontSize: 14 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE + CTA */}
      <section
        style={{
          borderRadius: 14,
          border: "1px solid #d1d5db",
          padding: 18,
          background: "#f3f4f6",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20 }}>Starting in Westchester.</h2>
        <p style={{ margin: 0, color: "#4b5563", fontSize: 14 }}>
          ProDrop is being designed around real HVAC and plumbing workflows in
          Westchester County, NY, with expansion into nearby markets as the
          network grows.
        </p>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>
          Interested in being a launch partner or pilot supplier? Let&apos;s
          talk.
        </p>
        <div style={{ marginTop: 4 }}>
          <a href="mailto:info@prodrophq.com?subject=ProDrop%20Partnership">
            <button
              style={{
                borderRadius: 999,
                border: 0,
                background: "#111827",
                color: "white",
                padding: "8px 16px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Talk to ProDrop
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
