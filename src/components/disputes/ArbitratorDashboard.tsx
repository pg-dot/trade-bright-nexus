import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "@/components/shared/Badge";
import { DisputeStatusTracker } from "@/components/disputes/DisputeStatusTracker";

interface ArbitratorDashboardProps {
  disputeId?: string;
  onDecision?: (decision: { outcome: string; reasoning: string }) => void;
}

const evidence = [
  { id: "e1", label: "Buyer photos (12)", source: "Buyer", hash: "0x4c1a…88b0" },
  { id: "e2", label: "SGS lab report — curcumin 3.8%", source: "Third party", hash: "0x9de4…1177" },
  { id: "e3", label: "Signed contract — 5% curcumin", source: "Platform", hash: "0x2bb9…04f2" },
  { id: "e4", label: "Packing list + invoice", source: "Exporter", hash: "0x77c3…9a51" },
];

const outcomes = [
  "Full refund to buyer",
  "Partial refund (50%)",
  "Release to exporter",
  "Re-inspection ordered",
];

export function ArbitratorDashboard({ disputeId = "DSP-311", onDecision }: ArbitratorDashboardProps) {
  const [outcome, setOutcome] = useState(outcomes[0] as string);
  const [reasoning, setReasoning] = useState("");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <DisputeStatusTracker disputeId={disputeId} currentStep={3} />

        <section className="space-y-3 rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm font-semibold text-foreground">Evidence bundle</h2>
          <ul className="divide-y divide-border">
            {evidence.map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-3 py-2">
                <div>
                  <p className="text-sm text-foreground">{e.label}</p>
                  <p className="text-xs text-muted-foreground">Submitted by {e.source}</p>
                </div>
                <span className="font-mono text-xs text-primary">{e.hash}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="space-y-6">
        <section className="space-y-2 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">AI recommendation</h2>
            <StatusBadge tone="info">advisory</StatusBadge>
          </div>
          <p className="text-sm text-foreground">Partial refund — 40% of invoice value</p>
          <p className="text-xs text-muted-foreground">
            Lab curcumin content (3.8%) falls short of the contracted 5%, but goods are merchantable
            and were accepted at port. Confidence 0.72.
          </p>
        </section>

        <section className="space-y-3 rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm font-semibold text-foreground">Arbitrator decision</h2>
          <select
            aria-label="Outcome"
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
          >
            {outcomes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <Textarea
            rows={5}
            placeholder="Reasoning (published to both parties and anchored on-chain)"
            value={reasoning}
            onChange={(e) => setReasoning(e.target.value)}
          />
          <Button className="w-full" onClick={() => onDecision?.({ outcome, reasoning })}>
            Issue binding decision
          </Button>
        </section>
      </div>
    </div>
  );
}

export default ArbitratorDashboard;
