import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "@/components/shared/FileUploader";

interface CreateListingFormProps {
  onSubmit?: (values: Record<string, string>) => void;
}

export function CreateListingForm({ onSubmit }: CreateListingFormProps) {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget) as Iterable<[string, string]>);
        onSubmit?.(data);
      }}
    >
      <fieldset className="space-y-4 rounded-lg border border-border bg-card p-5">
        <legend className="px-1 text-sm font-semibold text-foreground">Product</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="title">Product title</Label>
            <Input id="title" name="title" placeholder="Alleppey Green Cardamom — 8mm Bold" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="hsCode">HS code</Label>
            <Input id="hsCode" name="hsCode" placeholder="0908.31" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" placeholder="Spices" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="origin">Origin</Label>
            <Input id="origin" name="origin" placeholder="Kerala, India" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="specs">Specifications</Label>
          <Textarea
            id="specs"
            name="specs"
            rows={3}
            placeholder="Moisture ≤ 10%, deep green colour, steam sterilised…"
          />
        </div>
      </fieldset>

      <fieldset className="space-y-4 rounded-lg border border-border bg-card p-5">
        <legend className="px-1 text-sm font-semibold text-foreground">Commercials</legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor="price">Price (USD)</Label>
            <Input id="price" name="price" type="number" step="0.01" placeholder="21.40" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="unit">Unit</Label>
            <Input id="unit" name="unit" placeholder="kg" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="moq">MOQ</Label>
            <Input id="moq" name="moq" placeholder="500 kg" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="quantity">Quantity available</Label>
            <Input id="quantity" name="quantity" placeholder="18 MT" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="incoterm">Incoterm</Label>
            <Input id="incoterm" name="incoterm" placeholder="FOB Cochin" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="leadTime">Lead time</Label>
            <Input id="leadTime" name="leadTime" placeholder="14 days" />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4 rounded-lg border border-border bg-card p-5">
        <legend className="px-1 text-sm font-semibold text-foreground">
          Quality & certifications
        </legend>
        <div className="space-y-1.5">
          <Label htmlFor="certifications">Certifications</Label>
          <Input
            id="certifications"
            name="certifications"
            placeholder="ISO 22000, Organic (NPOP), Spices Board"
          />
        </div>
        <FileUploader label="Certification documents" multiple accept=".pdf,.jpg,.png" />
        <FileUploader label="Product photos" multiple accept="image/*" hint="JPG or PNG, up to 8 images" />
      </fieldset>

      <div className="flex gap-2">
        <Button type="submit">Publish listing</Button>
        <Button type="button" variant="outline">
          Save draft
        </Button>
      </div>
    </form>
  );
}

export default CreateListingForm;
