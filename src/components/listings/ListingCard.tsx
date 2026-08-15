import { Link } from "@tanstack/react-router";
import { StatusBadge } from "@/components/shared/Badge";
import { Button } from "@/components/ui/button";
import type { Listing } from "@/lib/mock-data";

interface ListingCardProps {
  listing: Listing;
  selected?: boolean;
  onToggleCompare?: (id: string) => void;
}

export function ListingCard({ listing, selected, onToggleCompare }: ListingCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
      <div className="flex h-28 items-center justify-center bg-muted text-4xl" aria-hidden>
        {listing.thumbnail}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug text-foreground">{listing.title}</h3>
          {listing.verified ? <StatusBadge tone="success">✓ KYC</StatusBadge> : null}
        </div>
        <p className="text-xs text-muted-foreground">
          {listing.exporter} · {listing.origin}
        </p>
        <div className="flex flex-wrap gap-1">
          {listing.certifications.slice(0, 2).map((c) => (
            <StatusBadge key={c} tone="info">
              {c}
            </StatusBadge>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <p className="text-lg font-semibold text-foreground">
              ${listing.price.toFixed(2)}
              <span className="text-xs font-normal text-muted-foreground">/{listing.unit}</span>
            </p>
            <p className="text-xs text-muted-foreground">MOQ {listing.moq}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">★ {listing.rating.toFixed(1)}</p>
            <p className="text-xs text-muted-foreground">Trust {listing.trustScore}</p>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm" className="flex-1">
            <Link to="/listings/$listingId" params={{ listingId: listing.id }}>
              View
            </Link>
          </Button>
          <Button
            size="sm"
            variant={selected ? "default" : "outline"}
            onClick={() => onToggleCompare?.(listing.id)}
          >
            {selected ? "Added" : "Compare"}
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ListingCard;
