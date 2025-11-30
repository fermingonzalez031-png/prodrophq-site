
"use client";

import React, { createContext, useContext, useState } from "react";

export interface ContractorProfile {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  contractorLicense?: string;
  plumbingLicense?: string;
  electricalLicense?: string;
  hvacLicense?: string;
}

interface UserContextValue {
  profile: ContractorProfile | null;
  setProfile: (profile: ContractorProfile) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<ContractorProfile | null>(null);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
