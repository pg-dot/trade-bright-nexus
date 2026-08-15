import { useState } from "react";
import { ListingCard } from "@/components/listings/ListingCard";
import { ListingFilterSidebar, type ListingFilters } from "@/components/listings/ListingFilterSidebar";
import { AIMatchResultsPanel } from "@/components/listings/AIMatchResultsPanel";
import { SearchBarWithFilters } from "@/components/shared/SearchBarWithFilters";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { listings } from "@/lib/mock-data";

export function ListingBrowsePage() {
  const [filters, setFilters] = useState<ListingFilters>({
    categories: [],
    certifications: [],
    locations: [],
    maxPrice: 50,
  });
  const [compare, setCompare] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "ai">("grid");

  const visible = listings.filter(
    (l) =>
      l.price <= filters.maxPrice &&
      (filters.categories.length === 0 || filters.categories.includes(l.category)),
  );

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">Marketplace</h1>
          <p className="text-sm text-muted-foreground">{visible.length} listings match your filters</p>
        </div>
        <div className="flex gap-2">
          <Button variant={view === "grid" ? "default" : "outline"} size="sm" onClick={() => setView("grid")}>
            All listings
          </Button>
          <Button variant={view === "ai" ? "default" : "outline"} size="sm" onClick={() => setView("ai")}>
            AI matches
          </Button>
          {compare.length >= 2 ? (
            <Button asChild size="sm" variant="secondary">
              <Link to="/compare">Compare ({compare.length})</Link>
            </Button>
          ) : null}
        </div>
      </header>

      <SearchBarWithFilters />

      <div className="flex flex-col gap-6 lg:flex-row">
        <ListingFilterSidebar filters={filters} onChange={setFilters} />
        <div className="min-w-0 flex-1">
          {view === "ai" ? (
            <AIMatchResultsPanel />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((l) => (
                <ListingCard
                  key={l.id}
                  listing={l}
                  selected={compare.includes(l.id)}
                  onToggleCompare={(id) =>
                    setCompare((prev) =>
                      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].slice(-3),
                    )
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListingBrowsePage;
