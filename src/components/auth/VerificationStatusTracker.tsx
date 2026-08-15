import { Stepper } from "@/components/shared/Stepper";
import { StatusBadge } from "@/components/shared/Badge";

export type VerificationStatus = "under_review" | "verified" | "rejected";

interface VerificationStatusTrackerProps {
  status?: VerificationStatus;
  submittedOn?: string;
  note?: string;
}

export function VerificationStatusTracker({
  status = "under_review",
  submittedOn = "2026-08-11",
  note,
}: VerificationStatusTrackerProps) {
  const steps = [
    { id: "submitted", label: "Submitted", timestamp: submittedOn },
    { id: "review", label: "Under review" },
    { id: "decision", label: status === "rejected" ? "Rejected" : "Verified" },
  ];
  const current = status === "under_review" ? 1 : 2;

  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">KYC verification</h3>
        <StatusBadge
          tone={status === "verified" ? "success" : status === "rejected" ? "danger" : "warning"}
        >
          {status === "verified"
            ? "Verified"
            : status === "rejected"
              ? "Rejected"
              : "Under review"}
        </StatusBadge>
      </div>
      <Stepper steps={steps} currentStep={current} />
      {note ? <p className="text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
}

export default VerificationStatusTracker;
