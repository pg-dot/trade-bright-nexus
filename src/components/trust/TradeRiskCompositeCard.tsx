import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/shared/Badge";

export interface RiskSubScore {
  label: string;
  value: number;
  note?: string;
}

interface TradeRiskCompositeCardProps {
  subScores?: RiskSubScore[];
}

const defaults: RiskSubScore[] = [
  { label: "Counterparty Trust", value: 87, note: "24 completed trades, 1 dispute" },
  { label: "Transaction Risk", value: 62, note: "High value, first trade with this buyer" },
  { label: "Regulatory Risk", value: 78, note: "EU organic route, no active restrictions" },
  { label: "Document Integrity", value: 45, note: "Packing list mismatch unresolved" },
];

const toneFor = (v: number) => (v >= 75 ? "success" : v >= 50 ? "warning" : "danger");

export function TradeRiskCompositeCard({ subScores = defaults }: TradeRiskCompositeCardProps) {
  const composite = Math.round(subScores.reduce((a, s) => a + s.value, 0) / subScores.length);

  return (
    <section className="space-y-4 rounded-lg border border-border bg-card p-5">
      <header className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Trade Risk Composite</h2>
        <StatusBadge tone={toneFor(composite)}>{composite} / 100</StatusBadge>
      </header>
      <ul className="space-y-3">
        {subScores.map((s) => (
          <li key={s.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-foreground">{s.label}</span>
              <span className="tabular-nums text-muted-foreground">{s.value}</span>
            </div>
            <Progress value={s.value} className="h-1.5" />
            {s.note ? <p className="text-[11px] text-muted-foreground">{s.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TradeRiskCompositeCard;
