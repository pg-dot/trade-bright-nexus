import { Link } from "@tanstack/react-router";
import { useSession, type Role } from "@/lib/role-context";

interface NavItem {
  to: string;
  label: string;
  icon: string;
}

const navByRole: Record<Role, NavItem[]> = {
  exporter: [
    { to: "/dashboard", label: "Dashboard", icon: "▦" },
    { to: "/listings/new", label: "Create listing", icon: "＋" },
    { to: "/listings", label: "Marketplace", icon: "🛒" },
    { to: "/transactions", label: "Transactions", icon: "⇄" },
    { to: "/trust", label: "Trust & risk", icon: "◎" },
    { to: "/disputes", label: "Disputes", icon: "⚖" },
    { to: "/compliance", label: "Compliance", icon: "📋" },
  ],
  buyer: [
    { to: "/dashboard", label: "Dashboard", icon: "▦" },
    { to: "/listings", label: "Discover", icon: "🔍" },
    { to: "/compare", label: "Compare", icon: "⧉" },
    { to: "/transactions", label: "Transactions", icon: "⇄" },
    { to: "/trust", label: "Trust & risk", icon: "◎" },
    { to: "/disputes", label: "Disputes", icon: "⚖" },
    { to: "/compliance", label: "Compliance", icon: "📋" },
  ],
  admin: [
    { to: "/admin", label: "Overview", icon: "▦" },
    { to: "/admin/verification", label: "KYC queue", icon: "🪪" },
    { to: "/admin/disputes", label: "Dispute oversight", icon: "⚖" },
    { to: "/listings", label: "Marketplace", icon: "🛒" },
  ],
};

export function Sidebar() {
  const { user } = useSession();
  const items = navByRole[user.role];

  return (
    <aside className="hidden w-60 shrink-0 flex-col justify-between bg-sidebar px-3 py-4 md:flex">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <span aria-hidden className="w-4 text-center">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="rounded-lg bg-sidebar-accent/60 p-3">
        <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
        <p className="truncate text-xs text-sidebar-foreground/70">{user.company}</p>
      </div>
    </aside>
  );
}

export default Sidebar;
