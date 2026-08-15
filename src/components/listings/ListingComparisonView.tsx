import { StatusBadge } from "@/components/shared/Badge";
import type { Listing } from "@/lib/mock-data";

interface ListingComparisonViewProps {
  /** 2-3 listings side by side */
  listings: Listing[];
  onRemove?: (id: string) => void;
}

const rows: { label: string; get: (l: Listing) => string }[] = [
  { label: "Exporter", get: (l) => l.exporter },
  { label: "Origin", get: (l) => l.origin },
  { label: "Price", get: (l) => `$${l.price.toFixed(2)} / ${l.unit}` },
  { label: "MOQ", get: (l) => l.moq },
  { label: "Available", get: (l) => l.quantityAvailable },
  { label: "HS code", get: (l) => l.hsCode },
  { label: "Certifications", get: (l) => l.certifications.join(", ") },
  { label: "Rating", get: (l) => `★ ${l.rating.toFixed(1)}` },
  { label: "Trust score", get: (l) => String(l.trustScore) },
];

export function ListingComparisonView({ listings, onRemove }: ListingComparisonViewProps) {
  if (listings.length < 2) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
        Select at least two listings from the marketplace to compare them side by side.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            <th className="w-40 px-4 py-3 text-left text-xs uppercase tracking-wide text-muted-foreground">
              Attribute
            </th>
            {listings.map((l) => (
              <th key={l.id} className="px-4 py-3 text-left">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-foreground">{l.title}</p>
                    {l.verified ? <StatusBadge tone="success">✓ Verified</StatusBadge> : null}
                  </div>
                  {onRemove ? (
                    <button
                      type="button"
                      onClick={() => onRemove(l.id)}
                      className="text-xs text-muted-foreground hover:text-destructive"
                    >
                      ✕
                    </button>
                  ) : null}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <td className="px-4 py-3 text-xs uppercase tracking-wide text-muted-foreground">
                {row.label}
              </td>
              {listings.map((l) => (
                <td key={l.id} className="px-4 py-3 text-foreground">
                  {row.get(l)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListingComparisonView;
