
import { OrderProgress } from "@/components/OrderProgress";

interface Props {
  params: { orderId: string };
}

export default function OrderTrackingPage({ params }: Props) {
  const { orderId } = params;

  const status: "gathering" | "ready_for_pickup" | "picked_up" | "in_route" | "delivered" =
    "gathering";

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Order {orderId}</h1>
        <p className="text-sm text-slate-600">
          Track your jobsite delivery in real time as drivers pick up and
          deliver from the supply house.
        </p>
      </header>
      <OrderProgress current={status} />
      <p className="text-xs text-slate-500">
        In a future release, drivers will update these steps in real time as
        they gather, pick up, and deliver materials.
      </p>
    </div>
  );
}
