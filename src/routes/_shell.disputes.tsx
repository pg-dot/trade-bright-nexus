import { createFileRoute } from "@tanstack/react-router";
import { DisputesPage } from "@/pages/DisputesPage";

export const Route = createFileRoute("/_shell/disputes")({
  head: () => ({
    meta: [
      { title: "Disputes — GLOBEX" },
      { name: "description", content: "File disputes, track resolution stages and review arbitrator decisions." },
      { property: "og:title", content: "Disputes — GLOBEX" },
      { property: "og:description", content: "File disputes, track resolution stages and review arbitrator decisions." },
    ],
  }),
  component: DisputesPage,
});
