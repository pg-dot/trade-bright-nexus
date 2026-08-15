import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FileUploaderProps {
  label?: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  onFilesSelected?: (files: File[]) => void;
  className?: string;
}

export function FileUploader({
  label = "Upload file",
  hint = "PDF, PNG or JPG up to 10 MB",
  accept,
  multiple = false,
  onFilesSelected,
  className,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (list: FileList | null) => {
    if (!list) return;
    const next = Array.from(list);
    setFiles(next);
    onFilesSelected?.(next);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
        className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/40 px-4 py-8 text-center"
      >
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
        <Button type="button" variant="secondary" size="sm" onClick={() => inputRef.current?.click()}>
          Browse files
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
      {files.length > 0 ? (
        <ul className="space-y-1">
          {files.map((f) => (
            <li
              key={f.name}
              className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-1.5 text-xs"
            >
              <span className="truncate text-foreground">{f.name}</span>
              <span className="text-muted-foreground">{(f.size / 1024).toFixed(0)} KB</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default FileUploader;
