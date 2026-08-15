import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EvidenceUploader } from "@/components/disputes/EvidenceUploader";

interface FileDisputeFormProps {
  transactionRef?: string;
  onSubmit?: (values: Record<string, string>) => void;
}

const reasons = [
  "Quality below contracted spec",
  "Short shipment / quantity mismatch",
  "Delayed delivery",
  "Document forgery suspicion",
  "Non-payment",
];

export function FileDisputeForm({ transactionRef = "TRD-9077", onSubmit }: FileDisputeFormProps) {
  return (
    <form
      className="space-y-5 rounded-lg border border-border bg-card p-5"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget) as Iterable<[string, string]>);
        onSubmit?.(data);
      }}
    >
      <h2 className="text-sm font-semibold text-foreground">File a dispute</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="txn">Transaction reference</Label>
          <Input id="txn" name="transaction" defaultValue={transactionRef} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="reason">Reason</Label>
          <select
            id="reason"
            name="reason"
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
          >
            {reasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="claim">Claimed amount (USD)</Label>
          <Input id="claim" name="claim" type="number" placeholder="18200" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="incident">Incident date</Label>
          <Input id="incident" name="incident" type="date" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="description">What happened?</Label>
        <Textarea id="description" name="description" rows={4} placeholder="Describe the issue factually…" />
      </div>

      <EvidenceUploader />

      <Button type="submit">Submit dispute</Button>
    </form>
  );
}

export default FileDisputeForm;
