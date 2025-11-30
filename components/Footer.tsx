
export const Footer = () => {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Prodrophq. All rights reserved.</p>
        <p>
          For licensed HVAC, plumbing, electrical, and carpentry professionals
          across the United States.
        </p>
      </div>
    </footer>
  );
};
