
import type { CategorySlug } from "./categories";

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: CategorySlug;
  brand: string;
  shortDescription: string;
  description: string;
  price: number;
  unit: string;
  imageUrl: string;
  inStock: boolean;
  leadTime?: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "3/4\" Type L Copper Pipe – 10 ft Length",
    sku: "CU-L-034-10",
    category: "plumbing",
    brand: "ProCopper",
    shortDescription: "Type L hard copper, 10 ft, 3/4\"",
    description:
      "Type L hard copper tubing suitable for potable water and hydronic applications. Sold in 10 ft lengths.",
    price: 24.99,
    unit: "each",
    imageUrl: "/images/sample/copper-pipe.jpg",
    inStock: true,
  },
  {
    id: "p2",
    name: "1/2\" PEX-A Tubing – 300 ft Coil (Red)",
    sku: "PEX-A-050-300-R",
    category: "plumbing",
    brand: "FlexPEX",
    shortDescription: "1/2\" oxygen barrier PEX-A tubing",
    description:
      "300 ft coil of 1/2\" PEX-A tubing with oxygen barrier, ideal for radiant heating and potable water.",
    price: 189.0,
    unit: "coil",
    imageUrl: "/images/sample/pex-coil.jpg",
    inStock: true,
  },
  {
    id: "p3",
    name: "Programmable Wi-Fi Thermostat",
    sku: "TH-WIFI-PRG",
    category: "hvac",
    brand: "ClimaControl",
    shortDescription: "7-day programmable Wi-Fi thermostat",
    description:
      "Smart thermostat with Wi-Fi connectivity, 7-day programmability, and smartphone app integration.",
    price: 129.99,
    unit: "each",
    imageUrl: "/images/sample/thermostat.jpg",
    inStock: true,
  },
  {
    id: "p4",
    name: "20A Single-Pole Circuit Breaker",
    sku: "CB-20A-SP",
    category: "electrical",
    brand: "SureBreak",
    shortDescription: "20A 120V single-pole breaker",
    description:
      "Standard 20A single-pole circuit breaker for residential load centers.",
    price: 7.5,
    unit: "each",
    imageUrl: "/images/sample/breaker.jpg",
    inStock: true,
  },
];
