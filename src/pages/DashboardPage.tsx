import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/Badge";
import { ListingCard } from "@/components/listings/ListingCard";
import { AIMatchResultsPanel } from "@/components/listings/AIMatchResultsPanel";
import { EscrowStatusTracker } from "@/components/transactions/EscrowStatusTracker";
import { TrustScoreGauge } from "@/components/trust/TrustScoreGauge";
import { TradeRiskCompositeCard } from "@/components/trust/TradeRiskCompositeCard";
import { RiskWarningBanner } from "@/components/trust/RiskWarningBanner";
import { VerificationStatusTracker } from "@/components/auth/VerificationStatusTracker";
import { PlatformAnalyticsDashboard } from "@/components/admin/PlatformAnalyticsDashboard";
import { useSession } from "@/lib/role-context";
import { listings } from "@/lib/mock-data";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-foreground">{value}</p>
    </div>
  );
}

export function DashboardPage() {
  const { user } = useSession();

  if (user.role === "admin") {
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Platform overview</h1>
        <PlatformAnalyticsDashboard />
      </div>
    );
  }

  const isExporter = user.role === "exporter";

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            {isExporter ? "Exporter dashboard" : "Buyer dashboard"}
          </h1>
          <p className="text-sm text-muted-foreground">{user.company}</p>
        </div>
        <Button asChild>
          <Link to={isExporter ? "/listings/new" : "/listings"}>
            {isExporter ? "Create listing" : "Discover suppliers"}
          </Link>
        </Button>
      </header>

      <RiskWarningBanner onAction={() => undefined} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {isExporter ? (
          <>
            <Stat label="Active listings" value="12" />
            <Stat label="Open enquiries" value="7" />
            <Stat label="In escrow" value="$61.5K" />
            <Stat label="Disputes" value="1" />
          </>
        ) : (
          <>
            <Stat label="Saved searches" value="5" />
            <Stat label="New AI matches" value="9" />
            <Stat label="In escrow" value="$42.8K" />
            <Stat label="Shipments in transit" value="2" />
          </>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {isExporter ? (
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Your recent listings</h2>
                <StatusBadge tone="info">Mechanism A</StatusBadge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {listings.slice(0, 2).map((l) => (
                  <ListingCard key={l.id} listing={l} />
                ))}
              </div>
            </section>
          ) : (
            <AIMatchResultsPanel />
          )}
          <EscrowStatusTracker />
        </div>

        <div className="space-y-6">
          <TrustScoreGauge />
          <TradeRiskCompositeCard />
          <VerificationStatusTracker status="verified" />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
