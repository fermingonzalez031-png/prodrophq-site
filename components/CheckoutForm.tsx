"use client";

import { FormEvent, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useOrders } from "@/context/OrdersContext";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

export const CheckoutForm = () => {
  const { items, total, clearCart } = useCart();
  const { createOrder } = useOrders();
  const { profile } = useUser();
  const router = useRouter();

  const [poNumber, setPoNumber] = useState("");
  const [jobsiteName, setJobsiteName] = useState("");
  const [jobsiteAddress, setJobsiteAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [sameDay, setSameDay] = useState(false);
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "terms">("card");
  const [submitting, setSubmitting] = useState(false);

  // If no items
  if (!items.length) {
    return <p className="text-sm text-slate-600">Your cart is empty.</p>;
  }

  // Gate checkout on business registration
  if (!profile) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-700">
          Please register your business before scheduling a delivery. Prodrophq
          is available to licensed contractors only.
        </p>
        <Link
          href="/account/register"
          className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Register your business
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!items.length) return;

    setSubmitting(true);

    const orderId = createOrder({
      items,
      poNumber,
      jobsiteName,
      jobsiteAddress,
      deliveryDate,
      deliveryTime,
      sameDay,
      notes,
      paymentMethod,
    });

    clearCart();
    router.push(`/orders/${orderId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-[2fr,1fr]">
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Order details</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium">Purchase order</label>
            <input
              type="text"
              value={poNumber}
              onChange={(e) => setPoNumber(e.target.value)}
              required
              placeholder="PO name or number"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Jobsite name</label>
            <input
              type="text"
              value={jobsiteName}
              onChange={(e) => setJobsiteName(e.target.value)}
              required
              placeholder="e.g. Oak Street Renovation"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Jobsite address</label>
          <input
            type="text"
            value={jobsiteAddress}
            onChange={(e) => setJobsiteAddress(e.target.value)}
            required
            placeholder="Street, city, state, zip"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3 items-end">
          <div className="space-y-1">
            <label className="text-sm font-medium">Delivery date</label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Delivery time window</label>
            <input
              type="time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={sameDay}
              onChange={(e) => setSameDay(e.target.checked)}
              className="rounded border"
            />
            Same-day (in-stock items only)
          </label>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Notes for driver</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Gate codes, unloading instructions, contact on site..."
            className="w-full rounded-md border px-3 py-2 text-sm min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm">Payment method</h3>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Card on file with supply house
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="terms"
                checked={paymentMethod === "terms"}
                onChange={() => setPaymentMethod("terms")}
              />
              House account / terms
            </label>
          </div>
          <p className="text-xs text-slate-500">
            In a future release, you’ll be able to link specific supplier
            accounts and payment profiles here.
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {submitting ? "Placing order..." : "Place order & start delivery"}
        </button>
      </div>

      <aside className="rounded-lg border bg-white p-4 space-y-4">
        <h2 className="font-semibold text-lg">Summary</h2>
        <ul className="space-y-2 text-sm">
          {items.map(({ product, quantity }) => (
            <li
              key={product.id}
              className="flex items-center justify-between gap-2"
            >
              <span className="flex-1">
                {product.name} <span className="text-xs">x{quantity}</span>
              </span>
              <span>
                ${(product.price * quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t pt-3">
          <span className="text-sm font-semibold">Materials total</span>
          <span className="text-lg font-semibold">
            ${total.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          Delivery fees will be calculated based on supplier distance and driver
          availability.
        </p>
      </aside>
    </form>
  );
};
