import { createFileRoute } from "@tanstack/react-router";
import { AdminVerificationPage } from "@/pages/AdminVerificationPage";

export const Route = createFileRoute("/_shell/admin/verification")({
  head: () => ({
    meta: [
      { title: "KYC queue — GLOBEX" },
      { name: "description", content: "Approve or reject exporter and buyer verification submissions." },
      { property: "og:title", content: "KYC queue — GLOBEX" },
      { property: "og:description", content: "Approve or reject exporter and buyer verification submissions." },
    ],
  }),
  component: AdminVerificationPage,
});
