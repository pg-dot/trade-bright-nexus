import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DisputeStatusTracker } from "@/components/disputes/DisputeStatusTracker";
import { FileDisputeForm } from "@/components/disputes/FileDisputeForm";
import { ArbitratorDashboard } from "@/components/disputes/ArbitratorDashboard";

type Tab = "status" | "file" | "arbitrator";

export function DisputesPage() {
  const [tab, setTab] = useState<Tab>("status");

  const tabs: { id: Tab; label: string }[] = [
    { id: "status", label: "My disputes" },
    { id: "file", label: "File a dispute" },
    { id: "arbitrator", label: "Arbitrator view" },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Disputes</h1>
        <p className="text-sm text-muted-foreground">
          AI analyses the evidence; a human arbitrator issues the binding decision.
        </p>
      </header>

      <div className="flex gap-2">
        {tabs.map((t) => (
          <Button
            key={t.id}
            size="sm"
            variant={tab === t.id ? "default" : "outline"}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </Button>
        ))}
      </div>

      {tab === "status" ? (
        <div className="space-y-4">
          <DisputeStatusTracker disputeId="DSP-311" currentStep={2} />
          <DisputeStatusTracker disputeId="DSP-318" currentStep={3} />
        </div>
      ) : null}
      {tab === "file" ? <FileDisputeForm /> : null}
      {tab === "arbitrator" ? <ArbitratorDashboard /> : null}
    </div>
  );
}

export default DisputesPage;
