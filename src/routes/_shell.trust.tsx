import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/pages/TrustPage";

export const Route = createFileRoute("/_shell/trust")({
  head: () => ({
    meta: [
      { title: "Trust & risk — GLOBEX" },
      { name: "description", content: "Trust score, composite trade risk and the blockchain-anchored trade ledger." },
      { property: "og:title", content: "Trust & risk — GLOBEX" },
      { property: "og:description", content: "Trust score, composite trade risk and the blockchain-anchored trade ledger." },
    ],
  }),
  component: TrustPage,
});
