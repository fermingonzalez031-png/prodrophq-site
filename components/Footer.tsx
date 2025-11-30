import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Prodrophq. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <p>
            For licensed HVAC, plumbing, electrical, and carpentry professionals
            across the United States.
          </p>
          <Link
            href="/driver"
            className="text-xs text-blue-600 hover:underline"
          >
            Driver view (demo)
          </Link>
          <Link
            href="/supplier"
            className="text-xs text-blue-600 hover:underline"
          >
            Supplier view (demo)
          </Link>
        </div>
      </div>
    </footer>
  );
};
