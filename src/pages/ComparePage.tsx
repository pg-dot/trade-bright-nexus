import { useState } from "react";
import { ListingComparisonView } from "@/components/listings/ListingComparisonView";
import { listings } from "@/lib/mock-data";

export function ComparePage() {
  const [selected, setSelected] = useState(listings.slice(0, 3));

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Compare listings</h1>
        <p className="text-sm text-muted-foreground">Up to three shortlisted listings side by side.</p>
      </header>
      <ListingComparisonView
        listings={selected}
        onRemove={(id) => setSelected((prev) => prev.filter((l) => l.id !== id))}
      />
    </div>
  );
}

export default ComparePage;
