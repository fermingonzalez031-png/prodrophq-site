"use client";

import { useOrders } from "@/context/OrdersContext";
import { OrderProgress, OrderStatus } from "@/components/OrderProgress";
import { suppliers } from "@/data/suppliers";
import Link from "next/link";

const STATUS_SEQUENCE: OrderStatus[] = [
  "gathering",
  "ready_for_pickup",
  "picked_up",
  "in_route",
  "delivered",
];

const STATUS_LABEL: Record<OrderStatus, string> = {
  gathering: "Gathering materials",
  ready_for_pickup: "Ready for pickup",
  picked_up: "Picked up",
  in_route: "In route",
  delivered: "Delivered",
};

export default function DriverPage() {
  const { orders, updateStatus } = useOrders();

  const activeOrders = orders.filter((o) => o.status !== "delivered");
  const completedOrders = orders.filter((o) => o.status === "delivered");

  const handleAdvance = (id: string, current: OrderStatus) => {
    const idx = STATUS_SEQUENCE.indexOf(current);
    if (idx === -1 || idx === STATUS_SEQUENCE.length - 1) return;
    const next = STATUS_SEQUENCE[idx + 1];
    updateStatus(id, next);
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Driver view (demo)</h1>
        <p className="text-sm text-slate-600">
          This page simulates the Prodrophq driver app. Use it to move orders
          through each step as you pick up and deliver materials.
        </p>
      </header>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Active orders</h2>
          <Link
            href="/account"
            className="text-xs text-blue-600 hover:underline"
          >
            Back to My Account
          </Link>
        </div>

        {activeOrders.length === 0 ? (
          <p className="text-sm text-slate-600">
            No active orders. Once a contractor schedules a delivery, it will
            appear here.
          </p>
        ) : (
          <div className="space-y-4">
            {activeOrders.map((order) => {
              const supplier = suppliers.find(
                (s) => s.id === order.supplierId
              );
              const idx = STATUS_SEQUENCE.indexOf(order.status);
              const canAdvance = idx >= 0 && idx < STATUS_SEQUENCE.length - 1;
              const nextStatus = canAdvance
                ? STATUS_SEQUENCE[idx + 1]
                : order.status;

              return (
                <div
                  key={order.id}
                  className="rounded-lg border bg-white p-4 text-sm space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <Link
                        href={`/orders/${order.id}`}
                        className="font-semibold hover:underline"
                      >
                        Order {order.id}
                      </Link>
                      <p className="text-xs text-slate-500">
                        {order.jobsiteName} • PO {order.poNumber}
                      </p>
                      {supplier && (
                        <p className="text-xs text-slate-500">
                          Supply house: {supplier.name} — {supplier.city},{" "}
                          {supplier.state}
                        </p>
                      )}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      {STATUS_LABEL[order.status]}
                    </span>
                  </div>

                  <OrderProgress current={order.status} />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">
                      Delivery: {order.deliveryDate} at {order.deliveryTime} •{" "}
                      {order.sameDay
                        ? "Same-day eligible"
                        : "Standard scheduled delivery"}
                    </p>
                    {canAdvance && (
                      <button
                        onClick={() =>
                          handleAdvance(order.id, order.status)
                        }
                        className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
                      >
                        Advance to {STATUS_LABEL[nextStatus]}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {completedOrders.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Completed today</h2>
          <div className="space-y-2 text-sm">
            {completedOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border bg-white p-3"
              >
                <div>
                  <span className="font-semibold">Order {order.id}</span>{" "}
                  <span className="text-xs text-slate-500">
                    • {order.jobsiteName} • PO {order.poNumber}
                  </span>
                </div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Delivered & signed for
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
