
import { CheckoutForm } from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Schedule delivery</h1>
      <p className="text-sm text-slate-600">
        Confirm your purchase order, jobsite, and delivery window. Items marked
        in stock are eligible for same-day pickup and delivery from partner
        supply houses.
      </p>
      <CheckoutForm />
    </div>
  );
}
