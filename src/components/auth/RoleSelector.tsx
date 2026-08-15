import type { Role } from "@/lib/role-context";
import { cn } from "@/lib/utils";

interface RoleSelectorProps {
  value?: Role | undefined;
  onChange?: ((role: Role) => void) | undefined;
}

const options: { role: Role; title: string; blurb: string; icon: string }[] = [
  {
    role: "exporter",
    title: "Exporter",
    blurb: "List products, manage escrow shipments and build a trust score.",
    icon: "🏭",
  },
  {
    role: "buyer",
    title: "Buyer / Importer",
    blurb: "Discover verified suppliers with AI-ranked semantic search.",
    icon: "🌍",
  },
];

export function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => (
        <button
          key={o.role}
          type="button"
          onClick={() => onChange?.(o.role)}
          className={cn(
            "rounded-lg border p-4 text-left transition-colors",
            value === o.role
              ? "border-primary bg-primary/5"
              : "border-border bg-card hover:border-primary/40",
          )}
        >
          <span className="text-2xl" aria-hidden>
            {o.icon}
          </span>
          <p className="mt-2 font-medium text-foreground">{o.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{o.blurb}</p>
        </button>
      ))}
    </div>
  );
}

export default RoleSelector;
