import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Same-day material drops for pros.</h1>
      <p>ProDrop connects licensed contractors, local supply houses, and drivers.</p>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <Link href="/catalog/plumbing">
          <button>Shop Plumbing</button>
        </Link>
        <Link href="/catalog/hvac">
          <button>Shop HVAC</button>
        </Link>
      </div>
    </section>
  );
}
