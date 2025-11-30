
import { CartSummary } from "@/components/CartSummary";

export default function CartPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Company cart</h1>
      <p className="text-sm text-slate-600">
        Assign a purchase order and continue to delivery scheduling.
      </p>
      <CartSummary />
    </div>
  );
}
