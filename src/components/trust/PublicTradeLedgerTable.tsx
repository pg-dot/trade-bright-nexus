import { DataTable, type Column } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/Badge";
import { tradeLedger, type TradeRecord } from "@/lib/mock-data";

interface PublicTradeLedgerTableProps {
  records?: TradeRecord[];
}

export function PublicTradeLedgerTable({ records = tradeLedger }: PublicTradeLedgerTableProps) {
  const columns: Column<TradeRecord & Record<string, unknown>>[] = [
    { key: "id", header: "Trade", sortable: true },
    { key: "counterparty", header: "Counterparty", sortable: true },
    { key: "product", header: "Product" },
    { key: "value", header: "Value", sortable: true },
    { key: "date", header: "Date", sortable: true },
    {
      key: "status",
      header: "Status",
      render: (r) => (
        <StatusBadge
          tone={r.status === "Successful" ? "success" : r.status === "Disputed" ? "danger" : "info"}
        >
          {r.status === "Successful" ? "✓ Successful" : r.status === "Disputed" ? "⚠ Disputed" : "In escrow"}
        </StatusBadge>
      ),
    },
    {
      key: "txHash",
      header: "On-chain proof",
      render: (r) => (
        <span className="font-mono text-xs text-primary underline-offset-2 hover:underline">
          {r.txHash}
        </span>
      ),
    },
  ];

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-sm font-semibold text-foreground">Public trade ledger</h2>
        <p className="text-xs text-muted-foreground">
          Each row is anchored to a tamper-evident hash — evidence only, never interpretation.
        </p>
      </div>
      <DataTable columns={columns} rows={records as (TradeRecord & Record<string, unknown>)[]} />
    </section>
  );
}

export default PublicTradeLedgerTable;
