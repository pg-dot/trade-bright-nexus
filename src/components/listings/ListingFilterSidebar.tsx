import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export interface ListingFilters {
  categories: string[];
  certifications: string[];
  locations: string[];
  maxPrice: number;
}

interface ListingFilterSidebarProps {
  filters?: ListingFilters;
  onChange?: (filters: ListingFilters) => void;
}

const categories = ["Spices", "Textiles", "Agriculture", "Engineering goods", "Handicrafts"];
const certifications = ["ISO 22000", "Organic (NPOP)", "OEKO-TEX", "HACCP", "APEDA"];
const locations = ["Kerala", "Tamil Nadu", "Gujarat", "Haryana", "Maharashtra"];

export function ListingFilterSidebar({ filters, onChange }: ListingFilterSidebarProps) {
  const current: ListingFilters = filters ?? {
    categories: [],
    certifications: [],
    locations: [],
    maxPrice: 50,
  };

  const toggle = (key: keyof ListingFilters, value: string) => {
    const list = current[key] as string[];
    onChange?.({
      ...current,
      [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    });
  };

  const Group = ({ title, items, k }: { title: string; items: string[]; k: keyof ListingFilters }) => (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      {items.map((item) => (
        <label key={item} className="flex items-center gap-2 text-sm text-foreground">
          <Checkbox
            checked={(current[k] as string[]).includes(item)}
            onCheckedChange={() => toggle(k, item)}
          />
          {item}
        </label>
      ))}
    </div>
  );

  return (
    <aside className="w-full space-y-6 rounded-lg border border-border bg-card p-4 lg:w-64">
      <Group title="Category" items={categories} k="categories" />
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Max price (USD / unit)
        </Label>
        <Slider
          value={[current.maxPrice]}
          min={1}
          max={100}
          step={1}
          onValueChange={([v]) => onChange?.({ ...current, maxPrice: v })}
        />
        <p className="text-xs text-muted-foreground">Up to ${current.maxPrice}</p>
      </div>
      <Group title="Certification" items={certifications} k="certifications" />
      <Group title="Origin" items={locations} k="locations" />
      <Button
        variant="ghost"
        size="sm"
        className="w-full"
        onClick={() =>
          onChange?.({ categories: [], certifications: [], locations: [], maxPrice: 50 })
        }
      >
        Reset filters
      </Button>
    </aside>
  );
}

export default ListingFilterSidebar;
