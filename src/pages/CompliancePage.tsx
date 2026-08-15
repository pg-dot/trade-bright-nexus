import { ComplianceChecklistWidget } from "@/components/regulatory/ComplianceChecklistWidget";
import { RegulatoryRiskIndicator } from "@/components/regulatory/RegulatoryRiskIndicator";

export function CompliancePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Regulatory intelligence
        </h1>
        <p className="text-sm text-muted-foreground">
          Documents, licences and restrictions for your product and destination route.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        <ComplianceChecklistWidget />
        <RegulatoryRiskIndicator />
      </div>
    </div>
  );
}

export default CompliancePage;
