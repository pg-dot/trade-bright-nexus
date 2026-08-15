import { createContext, useContext, useState, type ReactNode } from "react";

export type Role = "exporter" | "buyer" | "admin";

interface SessionUser {
  name: string;
  company: string;
  role: Role;
  verified: boolean;
}

interface RoleContextValue {
  user: SessionUser;
  setRole: (role: Role) => void;
}

const defaultUser: SessionUser = {
  name: "Pooja Gunjikar",
  company: "Deccan Spice Exports Pvt Ltd",
  role: "exporter",
  verified: true,
};

const RoleContext = createContext<RoleContextValue | null>(null);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser>(defaultUser);
  return (
    <RoleContext.Provider value={{ user, setRole: (role) => setUser((u) => ({ ...u, role })) }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useSession must be used inside RoleProvider");
  return ctx;
}
