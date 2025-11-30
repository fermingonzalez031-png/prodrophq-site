"use client";

import { OrderProgress, OrderStatus } from "@/components/OrderProgress";
import { useOrders } from "@/context/OrdersContext";
import Link from "next/link";
import { suppliers } from "@/data/suppliers";

interface Props {
  params: { orderId: string };
}

export default function OrderTrackingPage({ params }: Props) {
  const { orderId } = params;
  const { getOrderById, updateStatus } = useOrders();

  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Order not found</h1>
        <p className="text-sm text-slate-600">
  We couldn&apos;t find that order in this browser. Make sure you&apos;re using
  the same device where the order was created.
</p>

        <Link
          href="/"
          className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Back to home
        </Link>
      </div>
    );
  }

  const supplier = suppliers.find((s) => s.id === order.supplierId);

  const statuses: OrderStatus[] = [
    "gathering",
    "ready_for_pickup",
    "picked_up",
    "in_route",
    "delivered",
  ];
  const currentIndex = statuses.indexOf(order.status);
  const canAdvance = currentIndex >= 0 && currentIndex < statuses.length - 1;

  const handleAdvance = () => {
    if (!canAdvance) return;
    const nextStatus = statuses[currentIndex + 1];
    updateStatus(order.id, nextStatus);
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Order {order.id}</h1>
        <p className="text-sm text-slate-600">
          Track your jobsite delivery as drivers gather, pick up, and deliver
          materials from the supply house.
        </p>
      </header>

      <OrderProgress current={order.status} />

      <div className="grid gap-4 md:grid-cols-2 text-sm">
        <div className="space-y-1 rounded-lg border bg-white p-4">
          <h2 className="font-semibold text-base mb-1">Jobsite & PO</h2>
          <p>
            <span className="font-medium">PO:</span> {order.poNumber}
          </p>
          <p>
            <span className="font-medium">Jobsite:</span> {order.jobsiteName}
          </p>
          <p>
            <span className="font-medium">Address:</span> {order.jobsiteAddress}
          </p>
          <p>
            <span className="font-medium">Delivery:</span>{" "}
            {order.deliveryDate} at {order.deliveryTime}
          </p>
          <p>
            <span className="font-medium">Same-day:</span>{" "}
            {order.sameDay ? "Yes (in-stock items)" : "No"}
          </p>
          {supplier && (
            <p>
              <span className="font-medium">Supply house:</span>{" "}
              {supplier.name} — {supplier.city}, {supplier.state}
            </p>
          )}
          {order.notes && (
            <p>
              <span className="font-medium">Driver notes:</span> {order.notes}
            </p>
          )}
        </div>

        <div className="space-y-2 rounded-lg border bg-white p-4">
          <h2 className="font-semibold text-base mb-1">Materials</h2>
          <ul className="space-y-1">
            {order.items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex items-center justify-between gap-2"
              >
                <span className="flex-1">
                  {product.name}{" "}
                  <span className="text-xs text-slate-500">
                    (x{quantity}, {product.sku})
                  </span>
                </span>
                <span className="text-xs text-slate-600">
                  ${(product.price * quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-2">
            Materials must be signed for upon delivery.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        {canAdvance && (
          <button
            onClick={handleAdvance}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Advance status (demo)
          </button>
        )}
        {!canAdvance && (
          <span className="text-sm text-green-700">
            Order marked as delivered & signed for.
          </span>
        )}
      </div>
    </div>
  );
}
