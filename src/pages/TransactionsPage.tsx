import { EscrowStatusTracker } from "@/components/transactions/EscrowStatusTracker";
import { ShipmentTracker } from "@/components/transactions/ShipmentTracker";
import { DocumentUploader } from "@/components/transactions/DocumentUploader";
import { DocumentMismatchAlert } from "@/components/transactions/DocumentMismatchAlert";
import { PaymentMethodSelector } from "@/components/transactions/PaymentMethodSelector";
import { PublicTradeLedgerTable } from "@/components/trust/PublicTradeLedgerTable";

export function TransactionsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Transactions</h1>
        <p className="text-sm text-muted-foreground">
          Escrow, shipment and document verification for TRD-9077.
        </p>
      </header>

      <DocumentMismatchAlert onReview={() => undefined} />
      <EscrowStatusTracker />

      <div className="grid gap-6 lg:grid-cols-2">
        <ShipmentTracker />
        <PaymentMethodSelector />
      </div>

      <DocumentUploader />
      <PublicTradeLedgerTable />
    </div>
  );
}

export default TransactionsPage;
