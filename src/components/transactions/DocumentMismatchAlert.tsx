interface Mismatch {
  field: string;
  invoiceValue: string;
  packingValue: string;
}

interface DocumentMismatchAlertProps {
  mismatches?: Mismatch[];
  onReview?: () => void;
}

const defaults: Mismatch[] = [
  { field: "Net weight", invoiceValue: "18,000 kg", packingValue: "17,640 kg" },
  { field: "Carton count", invoiceValue: "1,800", packingValue: "1,764" },
];

export function DocumentMismatchAlert({ mismatches = defaults, onReview }: DocumentMismatchAlertProps) {
  if (mismatches.length === 0) return null;

  return (
    <div
      role="alert"
      className="rounded-lg border border-warning/50 bg-warning/10 p-4 text-warning-foreground"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">OCR detected document inconsistencies</p>
          <p className="text-xs opacity-80">
            Invoice and packing list disagree on {mismatches.length} field(s). Resolve before escrow
            release.
          </p>
        </div>
        {onReview ? (
          <button
            type="button"
            onClick={onReview}
            className="rounded-md border border-warning/50 px-3 py-1 text-xs font-medium"
          >
            Review
          </button>
        ) : null}
      </div>
      <ul className="mt-3 space-y-1 text-xs">
        {mismatches.map((m) => (
          <li key={m.field} className="flex flex-wrap gap-2">
            <span className="font-medium">{m.field}:</span>
            <span>invoice {m.invoiceValue}</span>
            <span aria-hidden>vs</span>
            <span>packing list {m.packingValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentMismatchAlert;
