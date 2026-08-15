import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/Badge";
import { NotificationDropdown } from "@/components/notifications/NotificationDropdown";
import { useSession, type Role } from "@/lib/role-context";

const roleLabels: Record<Role, string> = {
  exporter: "Exporter",
  buyer: "Buyer / Importer",
  admin: "Admin",
};

export function Navbar() {
  const { user, setRole } = useSession();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-card/90 px-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <Link to="/dashboard" className="text-base font-semibold tracking-tight text-foreground">
          GLOBEX
        </Link>
        <StatusBadge tone="info">{roleLabels[user.role]}</StatusBadge>
        {user.verified ? <StatusBadge tone="success">✓ Verified</StatusBadge> : null}
      </div>

      <div className="flex items-center gap-2">
        {/* Demo affordance: swap the active role to preview each dashboard. */}
        <select
          aria-label="Switch role"
          value={user.role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground"
        >
          <option value="exporter">Exporter</option>
          <option value="buyer">Buyer / Importer</option>
          <option value="admin">Admin</option>
        </select>
        <NotificationDropdown />
        <Button asChild variant="ghost" size="sm">
          <Link to="/login">Sign out</Link>
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
