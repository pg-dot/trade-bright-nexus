import { StatusBadge } from "@/components/shared/Badge";

export interface ComplianceItem {
  id: string;
  label: string;
  status: "complete" | "pending" | "missing";
}

interface ComplianceChecklistWidgetProps {
  product?: string;
  route?: string;
  items?: ComplianceItem[];
}

const defaults: ComplianceItem[] = [
  { id: "c1", label: "IEC registration", status: "complete" },
  { id: "c2", label: "Spices Board export certificate", status: "complete" },
  { id: "c3", label: "Phytosanitary certificate", status: "pending" },
  { id: "c4", label: "EU organic transaction certificate", status: "missing" },
  { id: "c5", label: "Certificate of origin (Form A)", status: "pending" },
];

export function ComplianceChecklistWidget({
  product = "Green cardamom (HS 0908.31)",
  route = "India → Netherlands",
  items = defaults,
}: ComplianceChecklistWidgetProps) {
  return (
    <section className="space-y-3 rounded-lg border border-border bg-card p-5">
      <header>
        <h2 className="text-sm font-semibold text-foreground">Compliance checklist</h2>
        <p className="text-xs text-muted-foreground">
          {product} · {route}
        </p>
      </header>
      <ul className="divide-y divide-border">
        {items.map((i) => (
          <li key={i.id} className="flex items-center justify-between py-2 text-sm">
            <span className="text-foreground">{i.label}</span>
            <StatusBadge
              tone={i.status === "complete" ? "success" : i.status === "pending" ? "warning" : "danger"}
            >
              {i.status}
            </StatusBadge>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ComplianceChecklistWidget;
