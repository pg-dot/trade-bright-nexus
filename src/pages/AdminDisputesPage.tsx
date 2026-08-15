import { DisputeOversightDashboard } from "@/components/admin/DisputeOversightDashboard";
import { ArbitratorDashboard } from "@/components/disputes/ArbitratorDashboard";

export function AdminDisputesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Dispute oversight</h1>
        <p className="text-sm text-muted-foreground">All active disputes across the platform.</p>
      </header>
      <DisputeOversightDashboard />
      <ArbitratorDashboard />
    </div>
  );
}

export default AdminDisputesPage;
