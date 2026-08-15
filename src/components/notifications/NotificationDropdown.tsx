import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/Badge";

export interface AppNotification {
  id: string;
  kind: "match" | "escrow" | "dispute" | "compliance";
  message: string;
  time: string;
}

const defaultItems: AppNotification[] = [
  { id: "n1", kind: "match", message: "3 new AI matches for “green cardamom 8mm”", time: "12m ago" },
  { id: "n2", kind: "escrow", message: "Escrow released for TRD-9021", time: "2h ago" },
  { id: "n3", kind: "dispute", message: "Arbitrator review started on DSP-311", time: "1d ago" },
  { id: "n4", kind: "compliance", message: "EU phytosanitary certificate expires in 14 days", time: "2d ago" },
];

const toneFor = { match: "info", escrow: "success", dispute: "danger", compliance: "warning" } as const;

export function NotificationDropdown({ items = defaultItems }: { items?: AppNotification[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <span aria-hidden>🔔</span>
          <span className="sr-only">Notifications</span>
          {items.length > 0 ? (
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((n) => (
          <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-1">
            <StatusBadge tone={toneFor[n.kind]}>{n.kind}</StatusBadge>
            <span className="text-sm text-foreground">{n.message}</span>
            <span className="text-xs text-muted-foreground">{n.time}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NotificationDropdown;
