import { NextResponse } from "next/server";

export async function GET() {
  // For now, just return some static demo orders.
  // Later, this can read from a database instead of hardcoding.
  const orders = [
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
  ];

  return NextResponse.json(orders);
}
