'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const trades = [
  { id: "plumbing", label: "Plumbing" },
  { id: "hvac", label: "HVAC" },
  { id: "electrical", label: "Electrical" },
  { id: "tools", label: "Tools" }
];

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/catalog?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header style={{ background: "#020617", color: "#e5e7eb", padding: "10px 16px", display: "flex", gap: 12, alignItems: "center" }}>
      <Link href="/" style={{ fontWeight: 700 }}>ProDrop HQ</Link>
      <nav style={{ display: "flex", gap: 8 }}>
        {trades.map((t) => (
          <button key={t.id} onClick={() => router.push(`/catalog/${t.id}`)} style={{ background: "transparent", border: 0, color: "#e5e7eb", cursor: "pointer" }}>
            {t.label}
          </button>
        ))}
      </nav>
      <form onSubmit={onSubmit} style={{ display: "flex", gap: 4, flex: 1 }}>
        <input
          type="search"
          placeholder="Search by keyword or part #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1 }}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
