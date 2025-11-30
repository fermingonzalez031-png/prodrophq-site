import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import { OrdersProvider } from "@/context/OrdersContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prodrophq – Same-day construction material delivery",
  description:
    "Prodrophq connects licensed contractors with local supply houses for same-day delivery of HVAC, plumbing, electrical, and carpentry materials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <UserProvider>
          <CartProvider>
            <OrdersProvider>
              <Header />
              <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
                {children}
              </main>
              <Footer />
            </OrdersProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
