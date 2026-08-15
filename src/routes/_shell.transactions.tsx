import { createFileRoute } from "@tanstack/react-router";
import { TransactionsPage } from "@/pages/TransactionsPage";

export const Route = createFileRoute("/_shell/transactions")({
  head: () => ({
    meta: [
      { title: "Transactions — GLOBEX" },
      { name: "description", content: "Escrow status, shipment tracking and trade document verification." },
      { property: "og:title", content: "Transactions — GLOBEX" },
      { property: "og:description", content: "Escrow status, shipment tracking and trade document verification." },
    ],
  }),
  component: TransactionsPage,
});
