// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 30px",
            backgroundColor: "#0A2540",
            color: "white",
          }}
        >
          <Link href="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
            ProDrop
          </Link>


<nav style={{ display: "flex", gap: "20px", fontSize: "16px" }}>
  <Link href="/catalog/Plumbing">Plumbing</Link>
  <Link href="/catalog/HVAC">HVAC</Link>
  <Link href="/catalog/electrical">Electrical</Link>
  <Link href="/catalog/Tools">Tools</Link>
  <Link href="/catalog/Safety">Safety</Link>
</nav>

        </header>

        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
