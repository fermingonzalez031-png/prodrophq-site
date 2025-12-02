// app/api/demo/driver-orders/route.ts
import { NextResponse } from "next/server";

type OrderStatus =
  | "gathering"
  | "ready_for_pickup"
  | "picked_up"
  | "in_route"
  | "delivered";

interface OrderItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
}

interface DriverOrder {
  id: string;
  supplierName: string;
  supplierAddress: string;
  jobsiteName: string;
  jobsiteAddress: string;
  poNumber: string;
  deliveryDate: string;
  deliveryTime: string;
  status: OrderStatus;
  sameDay: boolean;
  items: OrderItem[];
}

// For now this is static demo data.
// Later we can replace this with real DB-backed orders.
const demoOrders: DriverOrder[] = [
  {
    id: "ORD-000123",
    supplierName: "Metro Plumbing & Heating Supply",
    supplierAddress: "123 Industrial Way, Newark, NJ",
    jobsiteName: "Oak Street Renovation",
    jobsiteAddress: "45 Oak St, Newark, NJ",
    poNumber: "PO-1457",
    deliveryDate: "2025-06-01",
    deliveryTime: "14:30",
    status: "ready_for_pickup",
    sameDay: true,
    items: [
      {
        id: "i1",
        name: '3/4" Type L Copper Pipe – 10 ft',
        sku: "CU-L-034-10",
        quantity: 8,
      },
      {
        id: "i2",
        name: '1/2" PEX-A Tubing – 300 ft Coil (Red)',
        sku: "PEX-A-050-300-R",
        quantity: 2,
      },
    ],
  },
  {
    id: "ORD-000124",
    supplierName: "Electric Wholesale Distributors",
    supplierAddress: "20 Power Ln, Newark, NJ",
    jobsiteName: "Warehouse Panel Upgrade",
    jobsiteAddress: "900 Commerce Blvd, Newark, NJ",
    poNumber: "PO-1458",
    deliveryDate: "2025-06-01",
    deliveryTime: "10:00",
    status: "gathering",
    sameDay: false,
    items: [
      {
        id: "i3",
        name: "20A Single-Pole Circuit Breaker",
        sku: "CB-20A-SP",
        quantity: 24,
      },
    ],
  },
];

export async function GET() {
  // For now we just return all demo orders.
  // The driver app will filter out delivered ones.
  return NextResponse.json(demoOrders);
}
