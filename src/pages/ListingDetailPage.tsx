import { Link, useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/Badge";
import { TrustScoreGauge } from "@/components/trust/TrustScoreGauge";
import { ComplianceChecklistWidget } from "@/components/regulatory/ComplianceChecklistWidget";
import { RegulatoryRiskIndicator } from "@/components/regulatory/RegulatoryRiskIndicator";
import { listings } from "@/lib/mock-data";

export function ListingDetailPage() {
  const { listingId } = useParams({ from: "/_shell/listings/$listingId" });
  const listing = listings.find((l) => l.id === listingId) ?? listings[0]!;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="space-y-4 lg:col-span-2">
          <div className="flex h-52 items-center justify-center rounded-lg bg-muted text-7xl" aria-hidden>
            {listing.thumbnail}
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold tracking-tight text-foreground">{listing.title}</h1>
              {listing.verified ? <StatusBadge tone="success">✓ KYC verified</StatusBadge> : null}
            </div>
            <p className="text-sm text-muted-foreground">
              {listing.category} · HS {listing.hsCode} · {listing.origin}
            </p>
            <p className="text-sm text-foreground">{listing.description}</p>
          </div>

          <dl className="grid gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-3">
            {[
              { label: "Price", value: `$${listing.price.toFixed(2)} / ${listing.unit}` },
              { label: "MOQ", value: listing.moq },
              { label: "Available", value: listing.quantityAvailable },
              ...listing.specs.map((s) => ({ label: s.label, value: s.value })),
            ].map((row) => (
              <div key={row.label}>
                <dt className="text-xs text-muted-foreground">{row.label}</dt>
                <dd className="text-sm font-medium text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-2">
            {listing.certifications.map((c) => (
              <StatusBadge key={c} tone="info">
                {c}
              </StatusBadge>
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="space-y-3 rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium text-foreground">{listing.exporter}</p>
            <p className="text-xs text-muted-foreground">★ {listing.rating.toFixed(1)} · {listing.origin}</p>
            <Button className="w-full">Request quote</Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/trust">View exporter profile</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full">
              <Link to="/compare">Add to comparison</Link>
            </Button>
          </div>
          <TrustScoreGauge score={listing.trustScore} size={120} />
        </aside>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ComplianceChecklistWidget product={`${listing.title} (HS ${listing.hsCode})`} />
        <RegulatoryRiskIndicator />
      </div>
    </div>
  );
}

export default ListingDetailPage;
