import { createFileRoute } from "@tanstack/react-router";
import { AdminDisputesPage } from "@/pages/AdminDisputesPage";

export const Route = createFileRoute("/_shell/admin/disputes")({
  head: () => ({
    meta: [
      { title: "Dispute oversight — GLOBEX" },
      { name: "description", content: "Monitor every active dispute across the platform." },
      { property: "og:title", content: "Dispute oversight — GLOBEX" },
      { property: "og:description", content: "Monitor every active dispute across the platform." },
    ],
  }),
  component: AdminDisputesPage,
});
