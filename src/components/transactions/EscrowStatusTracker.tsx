import { Stepper } from "@/components/shared/Stepper";
import { StatusBadge } from "@/components/shared/Badge";

interface EscrowStatusTrackerProps {
  /** 0 = initiated, 3 = released */
  currentStep?: number;
  amount?: string;
  reference?: string;
}

const steps = [
  { id: "initiated", label: "Escrow initiated" },
  { id: "held", label: "Payment held" },
  { id: "delivered", label: "Delivered" },
  { id: "released", label: "Funds released" },
];

export function EscrowStatusTracker({
  currentStep = 2,
  amount = "$61,500",
  reference = "TRD-9077",
}: EscrowStatusTrackerProps) {
  return (
    <section className="space-y-5 rounded-lg border border-border bg-card p-5">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Escrow status</h2>
          <p className="text-xs text-muted-foreground">
            {reference} · {amount} held with partner bank
          </p>
        </div>
        <StatusBadge tone={currentStep >= 3 ? "success" : "info"}>
          {steps[Math.min(currentStep, steps.length - 1)]?.label}
        </StatusBadge>
      </header>
      <Stepper steps={steps} currentStep={currentStep} />
    </section>
  );
}

export default EscrowStatusTracker;
