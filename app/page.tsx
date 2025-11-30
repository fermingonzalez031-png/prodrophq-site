
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 md:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Same-day delivery from your local supply houses.
          </h1>
          <p className="text-slate-600">
            Prodrophq connects licensed contractors with local HVAC, plumbing,
            electrical, and carpentry suppliers. Order parts in a few clicks,
            and we’ll pick up and deliver straight to your jobsite.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/categories"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Shop by Category
            </Link>
            <Link
              href="/account/register"
              className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
            >
              Register Your Business
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            Available for licensed professionals only. Materials must be signed
            for upon delivery.
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4 space-y-3 text-sm">
          <h2 className="font-semibold">How it works</h2>
          <ol className="list-decimal pl-4 space-y-1 text-slate-600">
            <li>Register your business and upload your trade licenses.</li>
            <li>Browse local supply house inventory in the app.</li>
            <li>Add parts to your company cart with PO number.</li>
            <li>Choose jobsite, delivery window, and same-day if in stock.</li>
            <li>
              A Prodrophq driver or partner courier picks up and delivers to
              site.
            </li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Shop by trade</h2>
          <Link
            href="/categories"
            className="text-sm text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>
        <CategoryGrid />
      </section>
    </div>
  );
}
