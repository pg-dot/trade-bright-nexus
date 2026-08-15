import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarWithFiltersProps {
  placeholder?: string;
  quickFilters?: string[];
  onSearch?: (query: string, activeFilters: string[]) => void;
  className?: string;
}

export function SearchBarWithFilters({
  placeholder = "Search products, HS codes, exporters…",
  quickFilters = ["Verified only", "Ready to ship", "ISO certified", "Organic"],
  onSearch,
  className,
}: SearchBarWithFiltersProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string[]>([]);

  const toggle = (f: string) =>
    setActive((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  return (
    <div className={cn("space-y-3", className)}>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.(query, active);
        }}
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Search listings"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="flex flex-wrap gap-2">
        {quickFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => toggle(f)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              active.includes(f)
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBarWithFilters;
