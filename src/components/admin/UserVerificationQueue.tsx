import { DataTable, type Column } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/Badge";
import { kycQueue } from "@/lib/mock-data";

type Row = (typeof kycQueue)[number] & Record<string, unknown>;

interface UserVerificationQueueProps {
  rows?: typeof kycQueue;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export function UserVerificationQueue({
  rows = kycQueue,
  onApprove,
  onReject,
}: UserVerificationQueueProps) {
  const columns: Column<Row>[] = [
    { key: "id", header: "Ref", sortable: true },
    { key: "business", header: "Business", sortable: true },
    { key: "role", header: "Role" },
    { key: "gst", header: "GST" },
    { key: "submitted", header: "Submitted", sortable: true },
    { key: "docs", header: "Docs", render: (r) => <StatusBadge tone="info">{r.docs} files</StatusBadge> },
    {
      key: "actions",
      header: "Decision",
      render: (r) => (
        <div className="flex gap-2">
          <Button size="sm" onClick={() => onApprove?.(r.id)}>
            Approve
          </Button>
          <Button size="sm" variant="outline" onClick={() => onReject?.(r.id)}>
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">KYC verification queue</h2>
      <DataTable columns={columns} rows={rows as Row[]} emptyMessage="Queue is clear." />
    </section>
  );
}

export default UserVerificationQueue;
