export type TradeId = "plumbing" | "hvac" | "electrical" | "tools";

export interface Product {
  id: string;
  trade: TradeId;
  subcat: string;
  name: string;
  brand: string;
  price: number;
  inStock: boolean;
  sku: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  { id:"p1", trade:"plumbing", subcat:"pipe-fittings", name:"3/4 Copper Elbow", brand:"Generic", price:2.45, inStock:true, sku:"CU-ELB-075", description:"3/4 inch copper elbow for potable water systems." },
  { id:"h1", trade:"hvac", subcat:"condensers", name:"2 Ton 14 SEER AC Condenser", brand:"CoolAir", price:1489.0, inStock:true, sku:"CA-2T-14", description:"Residential AC condenser for split systems." }
];

export function getProductsForTrade(tradeId: string): Product[] {
  return PRODUCTS.filter(p => p.trade === tradeId);
}

export function searchProducts(q: string): Product[] {
  const query = q.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.sku.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
}
