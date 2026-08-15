import { FileUploader } from "@/components/shared/FileUploader";
import { StatusBadge } from "@/components/shared/Badge";

export interface TradeDocument {
  id: string;
  name: string;
  status: "pending" | "verified" | "mismatch";
}

interface DocumentUploaderProps {
  documents?: TradeDocument[];
  onUpload?: (docId: string, files: File[]) => void;
}

const defaultDocs: TradeDocument[] = [
  { id: "invoice", name: "Commercial invoice", status: "verified" },
  { id: "packing", name: "Packing list", status: "mismatch" },
  { id: "inspection", name: "Inspection certificate", status: "pending" },
  { id: "bol", name: "Bill of lading", status: "pending" },
];

export function DocumentUploader({ documents = defaultDocs, onUpload }: DocumentUploaderProps) {
  return (
    <section className="space-y-4 rounded-lg border border-border bg-card p-5">
      <h2 className="text-sm font-semibold text-foreground">Trade documents</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {documents.map((doc) => (
          <div key={doc.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">{doc.name}</span>
              <StatusBadge
                tone={
                  doc.status === "verified"
                    ? "success"
                    : doc.status === "mismatch"
                      ? "danger"
                      : "neutral"
                }
              >
                {doc.status}
              </StatusBadge>
            </div>
            <FileUploader
              label={`Upload ${doc.name.toLowerCase()}`}
              hint="PDF preferred — OCR runs on upload"
              accept=".pdf,.jpg,.png"
              onFilesSelected={(files) => onUpload?.(doc.id, files)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default DocumentUploader;
