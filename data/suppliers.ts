// data/suppliers.ts
export interface Supplier {
  id: string;
  name: string;
  city: string;
  state: string;
  sameDayRadiusMiles: number;
}

export const suppliers: Supplier[] = [
  {
    id: "sup1",
    name: "Metro Plumbing & Heating Supply",
    city: "Newark",
    state: "NJ",
    sameDayRadiusMiles: 35,
  },
  {
    id: "sup2",
    name: "Pro HVAC Supply",
    city: "Philadelphia",
    state: "PA",
    sameDayRadiusMiles: 40,
  },
  {
    id: "sup3",
    name: "Electric Wholesale Distributors",
    city: "Baltimore",
    state: "MD",
    sameDayRadiusMiles: 30,
  },
];
