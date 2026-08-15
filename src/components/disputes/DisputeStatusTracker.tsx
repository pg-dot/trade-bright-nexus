import { Stepper } from "@/components/shared/Stepper";
import { StatusBadge } from "@/components/shared/Badge";

interface DisputeStatusTrackerProps {
  disputeId?: string;
  /** 0..4 */
  currentStep?: number;
}

const steps = [
  { id: "filed", label: "Filed" },
  { id: "inspection", label: "Under inspection" },
  { id: "ai", label: "AI analysis" },
  { id: "arbitrator", label: "Arbitrator review" },
  { id: "settled", label: "Settled" },
];

export function DisputeStatusTracker({
  disputeId = "DSP-311",
  currentStep = 2,
}: DisputeStatusTrackerProps) {
  return (
    <section className="space-y-5 rounded-lg border border-border bg-card p-5">
      <header className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Dispute {disputeId}</h2>
        <StatusBadge tone={currentStep >= 4 ? "success" : "warning"}>
          {steps[Math.min(currentStep, steps.length - 1)]?.label}
        </StatusBadge>
      </header>
      <Stepper steps={steps} currentStep={currentStep} />
      <p className="text-xs text-muted-foreground">
        AI produces a recommendation only. A human arbitrator issues the binding decision.
      </p>
    </section>
  );
}

export default DisputeStatusTracker;
