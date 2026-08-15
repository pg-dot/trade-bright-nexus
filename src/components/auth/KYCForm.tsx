import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "@/components/shared/FileUploader";

interface KYCFormProps {
  onSubmit?: (values: Record<string, string>) => void;
}

export function KYCForm({ onSubmit }: KYCFormProps) {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget) as Iterable<[string, string]>);
        onSubmit?.(data);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="gst">GST number</Label>
          <Input id="gst" name="gst" placeholder="27AABCS1429P1ZL" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="pan">PAN</Label>
          <Input id="pan" name="pan" placeholder="AABCS1429P" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="iec">IEC code</Label>
          <Input id="iec" name="iec" placeholder="0301XXXXXX" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="entity">Entity type</Label>
          <Input id="entity" name="entity" placeholder="Private Limited" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="address">Registered business address</Label>
        <Textarea id="address" name="address" rows={3} placeholder="Street, city, state, PIN" />
      </div>

      <FileUploader
        label="Upload GST certificate, PAN card and IEC"
        hint="PDF or JPG, up to 10 MB each"
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <Button type="submit">Submit for verification</Button>
    </form>
  );
}

export default KYCForm;
