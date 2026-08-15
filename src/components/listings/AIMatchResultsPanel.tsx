import { Link } from "@tanstack/react-router";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/shared/Badge";
import { aiMatches } from "@/lib/mock-data";

interface AIMatchResultsPanelProps {
  query?: string;
  matches?: typeof aiMatches;
}

export function AIMatchResultsPanel({
  query = "organic green cardamom 8mm for EU retail",
  matches = aiMatches,
}: AIMatchResultsPanelProps) {
  return (
    <section className="space-y-4 rounded-lg border border-border bg-card p-5">
      <header className="flex items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold text-foreground">AI-ranked matches</h2>
          <p className="text-xs text-muted-foreground">Semantic query: “{query}”</p>
        </div>
        <StatusBadge tone="info">pgvector + reranker</StatusBadge>
      </header>

      <ul className="space-y-4">
        {matches.map((m) => (
          <li key={m.listingId} className="rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Link
                  to="/listings/$listingId"
                  params={{ listingId: m.listingId }}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  {m.title}
                </Link>
                <p className="text-xs text-muted-foreground">{m.exporter}</p>
              </div>
              <StatusBadge tone={m.overall >= 85 ? "success" : "warning"}>
                {m.overall}% match
              </StatusBadge>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {m.breakdown.map((b) => (
                <div key={b.label} className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{b.label}</span>
                    <span className="tabular-nums">{b.value}</span>
                  </div>
                  <Progress value={b.value} className="h-1.5" />
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-muted-foreground">{m.rationale}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AIMatchResultsPanel;
