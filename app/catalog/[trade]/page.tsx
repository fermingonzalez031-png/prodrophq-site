import { getProductsForTrade } from "@/lib/catalog";
import ProductGrid from "@/components/ProductGrid";

interface Props {
  params: { trade: string };
}

export default function TradeCatalogPage({ params }: Props) {
  const products = getProductsForTrade(params.trade);

  return (
    <section>
      <h1>{params.trade.toUpperCase()} catalog</h1>
      <ProductGrid products={products} />
    </section>
  );
}
