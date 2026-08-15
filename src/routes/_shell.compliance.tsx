import { createFileRoute } from "@tanstack/react-router";
import { CompliancePage } from "@/pages/CompliancePage";

export const Route = createFileRoute("/_shell/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance — GLOBEX" },
      { name: "description", content: "Required documents, licences and regulatory restrictions per product and route." },
      { property: "og:title", content: "Compliance — GLOBEX" },
      { property: "og:description", content: "Required documents, licences and regulatory restrictions per product and route." },
    ],
  }),
  component: CompliancePage,
});
