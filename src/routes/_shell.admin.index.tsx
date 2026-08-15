import { createFileRoute } from "@tanstack/react-router";
import { AdminOverviewPage } from "@/pages/AdminOverviewPage";

export const Route = createFileRoute("/_shell/admin/")({
  head: () => ({
    meta: [
      { title: "Admin overview — GLOBEX" },
      { name: "description", content: "Platform analytics: GMV, transactions, active users and dispute rate." },
      { property: "og:title", content: "Admin overview — GLOBEX" },
      { property: "og:description", content: "Platform analytics: GMV, transactions, active users and dispute rate." },
    ],
  }),
  component: AdminOverviewPage,
});
