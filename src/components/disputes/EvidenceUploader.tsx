import { FileUploader } from "@/components/shared/FileUploader";

interface EvidenceUploaderProps {
  onFilesSelected?: (bucket: string, files: File[]) => void;
}

export function EvidenceUploader({ onFilesSelected }: EvidenceUploaderProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <FileUploader
        label="Photos of goods"
        hint="JPG or PNG, geotagged if possible"
        accept="image/*"
        multiple
        onFilesSelected={(f) => onFilesSelected?.("photos", f)}
      />
      <FileUploader
        label="Documents"
        hint="Invoice, contract, correspondence"
        accept=".pdf,.doc,.docx"
        multiple
        onFilesSelected={(f) => onFilesSelected?.("documents", f)}
      />
      <FileUploader
        label="Inspection reports"
        hint="Third-party lab or SGS reports"
        accept=".pdf"
        multiple
        onFilesSelected={(f) => onFilesSelected?.("inspection", f)}
      />
    </div>
  );
}

export default EvidenceUploader;
