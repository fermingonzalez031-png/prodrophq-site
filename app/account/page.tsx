"use client";

import { useUser } from "@/context/UserContext";
import { useOrders } from "@/context/OrdersContext";
import Link from "next/link";
import { OrderProgress } from "@/components/OrderProgress";

export default function AccountPage() {
  const { profile } = useUser();
  const { orders } = useOrders();

  if (!profile) {
    return (
      <div className="space-y-4 max-w-xl">
        <h1 className="text-2xl font-bold">My account</h1>
        <p className="text-sm text-slate-700">
          You don&apos;t have a business profile yet. Register your company to
          place orders and schedule deliveries.
        </p>
        <Link
          href="/account/register"
          className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Register business
        </Link>
      </div>
    );
  }

  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="space-y-8">
      <section className="space-y-4 max-w-xl">
        <h1 className="text-2xl font-bold">My account</h1>
        <div className="rounded-lg border bg-white p-4 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base">
              {profile.companyName}
            </h2>
            <Link
              href="/account/register"
              className="text-xs text-blue-600 hover:underline"
            >
              Edit profile
            </Link>
          </div>
          <p>
            <span className="font-medium">Primary contact:</span>{" "}
            {profile.contactName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {profile.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {profile.phone}
          </p>
          <div className="grid sm:grid-cols-2 gap-2 pt-2 border-t mt-2">
            {profile.contractorLicense && (
              <p className="text-xs">
                <span className="font-medium">Contractor lic:</span>{" "}
                {profile.contractorLicense}
              </p>
            )}
            {profile.plumbingLicense && (
              <p className="text-xs">
                <span className="font-medium">Plumbing lic:</span>{" "}
                {profile.plumbingLicense}
              </p>
            )}
            {profile.electricalLicense && (
              <p className="text-xs">
                <span className="font-medium">Electrical lic:</span>{" "}
                {profile.electricalLicense}
              </p>
            )}
            {profile.hvacLicense && (
              <p className="text-xs">
                <span className="font-medium">HVAC lic:</span>{" "}
                {profile.hvacLicense}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent orders</h2>
          <Link
            href="/categories"
            className="text-xs text-blue-600 hover:underline"
          >
            Start a new order
          </Link>
        </div>

        {sortedOrders.length === 0 ? (
          <p className="text-sm text-slate-600">
            No orders yet. Add materials to your company cart and schedule a
            delivery to see it here.
          </p>
        ) : (
          <div className="space-y-4">
            {sortedOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-lg border bg-white p-4 text-sm space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <Link
                      href={`/orders/${order.id}`}
                      className="font-semibold hover:underline"
                    >
                      Order {order.id}
                    </Link>
                    <p className="text-xs text-slate-500">
                      {order.jobsiteName} • PO {order.poNumber}
                    </p>
                    <p className="text-xs text-slate-500">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <StatusBadge status={order.status} />
                </div>
                <div className="mt-2">
                  <OrderProgress current={order.status} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: Parameters<typeof OrderProgress>[0]["current"] }) {
  const labelMap: Record<string, string> = {
    gathering: "Gathering materials",
    ready_for_pickup: "Ready for pickup",
    picked_up: "Picked up",
    in_route: "In route",
    delivered: "Delivered",
  };

  const colorMap: Record<string, string> = {
    gathering: "bg-amber-100 text-amber-800",
    ready_for_pickup: "bg-blue-100 text-blue-800",
    picked_up: "bg-indigo-100 text-indigo-800",
    in_route: "bg-sky-100 text-sky-800",
    delivered: "bg-green-100 text-green-800",
  };

  const label = labelMap[status] ?? status;
  const classes =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium " +
    (colorMap[status] || "bg-slate-100 text-slate-700");

  return <span className={classes}>{label}</span>;
}
