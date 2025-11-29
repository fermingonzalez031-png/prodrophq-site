"use client";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Plumbing", href: "/catalog/plumbing" },
  { name: "HVAC", href: "/catalog/hvac" },
  { name: "Electrical", href: "/catalog/electrical" },
  { name: "Tools", href: "/catalog/tools" },
  { name: "Safety", href: "/catalog/safety" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderBottom: "1px solid #e5e7eb",
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ fontWeight: 700, fontSize: 20 }}>
        ProDrop
      </Link>

      {/* Main categories */}
      <div style={{ display: "flex", gap: 20 }}>
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            style={{ fontSize: 14, fontWeight: 500, color: "#374151" }}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Search + Cart */}
      <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search products"
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            width: 180,
          }}
        />
        <Link href="/cart" style={{ fontWeight: 600 }}>
          Cart
        </Link>
      </div>
    </nav>
  );
}
