"use client";

import { useState, useMemo } from "react";
import { suppliers } from "@/data/suppliers";
import { useOrders } from "@/context/OrdersContext";
import type { OrderStatus } from "@/components/OrderProgress";
import { OrderProgress } from "@/components/OrderProgress";
import Link from "next/link";

const STATUS_LABEL: Record<OrderStatus, string> = {
  gathering: "Gathering materials",
  ready_for_pickup: "Ready for pickup",
  picked_up: "Picked up by driver",
  in_route: "In route",
  delivered: "Delivered",
};

export default function SupplierPage() {
  const { orders, updateStatus } = useOrders();
  const [supplierId, setSupplierId] = useState(
    suppliers.length ? suppliers[0].id : ""
  );

  const supplier = suppliers.find((s) => s.id === supplierId) ?? suppliers[0];

  const supplierOrders = useMemo(
    () => orders.filter((o) => o.supplierId === supplier.id),
    [orders, supplier.id]
  );

  const gatheringOrders = supplierOrders.filter(
    (o) => o.status === "gathering"
  );
  const otherOrders = supplierOrders.filter(
    (o) => o.status !== "gathering"
  );

  const handleMarkReady = (orderId: string) => {
    updateStatus(orderId, "ready_for_pickup");
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Supplier view (demo)</h1>
        <p className="text-sm text-slate-600">
          This page simulates the counter screen at a partner supply house.
          Staff can see incoming Prodrophq orders and mark materials as ready
          for pickup once they&apos;re staged.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium">Supply house</label>
            <select
              value={supplierId}
              onChange={(e) => setSupplierId(e.target.value)}
              className="rounded-md border px-3 py-2 text-sm bg-white"
            >
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.city}, {s.state}
                </option>
              ))}
            </select>
          </div>
          <Link
            href="/driver"
            className="text-xs text-blue-600 hover:underline"
          >
            Go to driver view
          </Link>
        </div>

        {supplierOrders.length === 0 ? (
          <p className="text-sm text-slate-600">
            No Prodrophq orders for this supplier yet. Once a contractor selects
            this supply house at checkout, orders will appear here.
          </p>
        ) : (
          <div className="space-y-6">
            {/* Orders still being gathered */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Gathering materials</h2>
              {gatheringOrders.length === 0 ? (
                <p className="text-sm text-slate-600">
                  No orders currently in the gathering stage.
                </p>
              ) : (
                <div className="space-y-3">
                  {gatheringOrders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-lg border bg-white p-4 text-sm space-y-2"
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
                            Jobsite: {order.jobsiteName} • PO {order.poNumber}
                          </p>
                          <p className="text-xs text-slate-500">
                            Delivery: {order.deliveryDate} at{" "}
                            {order.deliveryTime}
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                          {STATUS_LABEL[order.status]}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-slate-700">
                          Materials
                        </p>
                        <ul className="space-y-0.5 text-xs text-slate-700">
                          {order.items.map(({ product, quantity }) => (
                            <li key={product.id}>
                              {product.name}{" "}
                              <span className="text-slate-500">
                                (x{quantity}, {product.sku})
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between gap-3 pt-2">
                        <p className="text-xs text-slate-500">
                          Mark as &quot;ready for pickup&quot; when materials
                          are staged and driver can arrive.
                        </p>
                        <button
                          onClick={() => handleMarkReady(order.id)}
                          className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                        >
                          Mark ready for pickup
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* All other orders for this supplier */}
            {otherOrders.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Other orders</h2>
                <div className="space-y-3 text-sm">
                  {otherOrders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-lg border bg-white p-4 space-y-2"
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
                            Jobsite: {order.jobsiteName} • PO {order.poNumber}
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          {STATUS_LABEL[order.status]}
                        </span>
                      </div>
                      <OrderProgress current={order.status} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
