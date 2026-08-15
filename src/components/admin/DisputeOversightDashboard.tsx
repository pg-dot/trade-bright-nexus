import { DataTable, type Column } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/Badge";
import { disputes } from "@/lib/mock-data";

type Row = (typeof disputes)[number] & Record<string, unknown>;

const stageLabels = ["Filed", "Under inspection", "AI analysis", "Arbitrator review", "Settled"];

interface DisputeOversightDashboardProps {
  rows?: typeof disputes;
  onOpen?: (id: string) => void;
}

export function DisputeOversightDashboard({ rows = disputes, onOpen }: DisputeOversightDashboardProps) {
  const columns: Column<Row>[] = [
    { key: "id", header: "Dispute", sortable: true },
    { key: "listing", header: "Listing" },
    { key: "filedBy", header: "Filed by" },
    { key: "against", header: "Against" },
    { key: "value", header: "Value", sortable: true },
    { key: "opened", header: "Opened", sortable: true },
    {
      key: "stage",
      header: "Stage",
      render: (r) => (
        <StatusBadge tone={r.stage >= 4 ? "success" : "warning"}>{stageLabels[r.stage]}</StatusBadge>
      ),
    },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">Active disputes</h2>
      <DataTable columns={columns} rows={rows as Row[]} onRowClick={(r) => onOpen?.(r.id)} />
    </section>
  );
}

export default DisputeOversightDashboard;
