import { PlatformAnalyticsDashboard } from "@/components/admin/PlatformAnalyticsDashboard";

export function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Platform analytics</h1>
        <p className="text-sm text-muted-foreground">GMV, transaction volume and user activity.</p>
      </header>
      <PlatformAnalyticsDashboard />
    </div>
  );
}

export default AdminOverviewPage;
