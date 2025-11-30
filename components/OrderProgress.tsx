
export type OrderStatus =
  | "gathering"
  | "ready_for_pickup"
  | "picked_up"
  | "in_route"
  | "delivered";

const steps: { id: OrderStatus; label: string }[] = [
  { id: "gathering", label: "Gathering materials" },
  { id: "ready_for_pickup", label: "Materials ready for pickup" },
  { id: "picked_up", label: "Driver picked up materials" },
  { id: "in_route", label: "In route to jobsite" },
  { id: "delivered", label: "Delivered & signed for" },
];

export const OrderProgress = ({
  current,
}: {
  current: OrderStatus;
}) => {
  const currentIndex = steps.findIndex((s) => s.id === current);

  return (
    <ol className="flex flex-col gap-3 text-sm">
      {steps.map((step, index) => {
        const done = index <= currentIndex;
        return (
          <li key={step.id} className="flex items-center gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                done
                  ? "bg-blue-600 text-white"
                  : "border border-slate-300 text-slate-400"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={done ? "font-medium" : "text-slate-500"}
            >
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
};
