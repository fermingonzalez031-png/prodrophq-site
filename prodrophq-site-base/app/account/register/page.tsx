
"use client";

import { FormEvent, useState } from "react";
import { useUser } from "@/context/UserContext";

export default function RegisterPage() {
  const { profile, setProfile } = useUser();
  const [companyName, setCompanyName] = useState(profile?.companyName ?? "");
  const [contactName, setContactName] = useState(profile?.contactName ?? "");
  const [email, setEmail] = useState(profile?.email ?? "");
  const [phone, setPhone] = useState(profile?.phone ?? "");
  const [contractorLicense, setContractorLicense] = useState(
    profile?.contractorLicense ?? ""
  );
  const [plumbingLicense, setPlumbingLicense] = useState(
    profile?.plumbingLicense ?? ""
  );
  const [electricalLicense, setElectricalLicense] = useState(
    profile?.electricalLicense ?? ""
  );
  const [hvacLicense, setHvacLicense] = useState(
    profile?.hvacLicense ?? ""
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProfile({
      companyName,
      contactName,
      email,
      phone,
      contractorLicense,
      plumbingLicense,
      electricalLicense,
      hvacLicense,
    });
  };

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">Register your business</h1>
      <p className="text-sm text-slate-600">
        Prodrophq is available to licensed contractors only. Add your trade
        licenses so we can connect you with the right suppliers.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Company name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium">Primary contact</label>
            <input
              type="text"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div className="border-t pt-4 space-y-3">
          <h2 className="text-sm font-semibold">Licenses</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium">
                Contractor license #
              </label>
              <input
                type="text"
                value={contractorLicense}
                onChange={(e) => setContractorLicense(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">
                Plumbing license #
              </label>
              <input
                type="text"
                value={plumbingLicense}
                onChange={(e) => setPlumbingLicense(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">
                Electrical license #
              </label>
              <input
                type="text"
                value={electricalLicense}
                onChange={(e) => setElectricalLicense(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">
                HVAC license #
              </label>
              <input
                type="text"
                value={hvacLicense}
                onChange={(e) => setHvacLicense(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Save business profile
        </button>
      </form>
    </div>
  );
}
