import { StatusBadge } from "@/components/shared/Badge";

export interface RegulatoryFlag {
  id: string;
  country: string;
  message: string;
  severity: "low" | "medium" | "high";
}

interface RegulatoryRiskIndicatorProps {
  flags?: RegulatoryFlag[];
}

const defaults: RegulatoryFlag[] = [
  {
    id: "r1",
    country: "European Union",
    message: "Max residue limit tightened for ethylene oxide — lab test mandatory per lot.",
    severity: "high",
  },
  {
    id: "r2",
    country: "United Kingdom",
    message: "Post-Brexit health certificate required from Sep 2026.",
    severity: "medium",
  },
];

const toneFor = { high: "danger", medium: "warning", low: "neutral" } as const;

export function RegulatoryRiskIndicator({ flags = defaults }: RegulatoryRiskIndicatorProps) {
  return (
    <section className="space-y-3 rounded-lg border border-border bg-card p-5">
      <h2 className="text-sm font-semibold text-foreground">Regulatory risk</h2>
      {flags.length === 0 ? (
        <p className="text-xs text-muted-foreground">No active restrictions on this route.</p>
      ) : (
        <ul className="space-y-3">
          {flags.map((f) => (
            <li key={f.id} className="space-y-1">
              <div className="flex items-center gap-2">
                <StatusBadge tone={toneFor[f.severity]}>{f.severity} risk</StatusBadge>
                <span className="text-sm font-medium text-foreground">{f.country}</span>
              </div>
              <p className="text-xs text-muted-foreground">{f.message}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RegulatoryRiskIndicator;
