import { StatusBadge } from "@/components/shared/Badge";
import { TrustScoreGauge } from "@/components/trust/TrustScoreGauge";
import { PublicTradeLedgerTable } from "@/components/trust/PublicTradeLedgerTable";

interface ExporterPublicProfileProps {
  name?: string;
  location?: string;
  since?: string;
  badges?: string[];
  stats?: { label: string; value: string }[];
  trustScore?: number;
}

const defaultStats = [
  { label: "Completed trades", value: "24" },
  { label: "GMV shipped", value: "$1.86M" },
  { label: "On-time delivery", value: "96%" },
  { label: "Open disputes", value: "1" },
];

export function ExporterPublicProfile({
  name = "Deccan Spice Exports Pvt Ltd",
  location = "Kochi, Kerala, India",
  since = "Member since 2023",
  badges = ["KYC verified", "GST verified", "Spices Board licensed", "ISO 22000"],
  stats = defaultStats,
  trustScore = 87,
}: ExporterPublicProfileProps) {
  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-xl font-semibold text-foreground">{name}</h1>
            <p className="text-sm text-muted-foreground">
              {location} · {since}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <StatusBadge key={b} tone="success">
                ✓ {b}
              </StatusBadge>
            ))}
          </div>
          <dl className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-muted-foreground">{s.label}</dt>
                <dd className="text-lg font-semibold text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <TrustScoreGauge score={trustScore} />
      </section>

      <PublicTradeLedgerTable />
    </div>
  );
}

export default ExporterPublicProfile;
