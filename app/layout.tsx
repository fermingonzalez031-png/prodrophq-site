import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ProDrop HQ – Jobsite Supply Delivery",
  description: "ProDrop gets HVAC, plumbing, and electrical materials from supply houses to your jobsite fast."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ maxWidth: 1200, margin: "0 auto", padding: "16px" }}>
          {children}
        </main>
      </body>
      import NavBar from "../components/NavBar";

<body>
  <NavBar />
  <div className="page-wrapper">{children}</div>
</body>

    </html>
  );
}
