import ProductGrid from "../../components/ProductGrid";

type PageProps = {
  searchParams?: {
    q?: string;
  };
};

export default function Page({ searchParams }: PageProps) {
  const q = searchParams?.q || "";

  return (
    <section>
      <h1>Catalog search</h1>
      {q ? <p>Results for "{q}"</p> : <p>Use the search box above.</p>}

      <ProductGrid search={q} />
    </section>
  );
}
