import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/pages/DashboardPage";

export const Route = createFileRoute("/_shell/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — GLOBEX" },
      { name: "description", content: "Role-based trade dashboard: listings, escrow, trust and disputes at a glance." },
      { property: "og:title", content: "Dashboard — GLOBEX" },
      { property: "og:description", content: "Role-based trade dashboard: listings, escrow, trust and disputes at a glance." },
    ],
  }),
  component: DashboardPage,
});
