import { createFileRoute } from "@tanstack/react-router";
import { ComparePage } from "@/pages/ComparePage";

export const Route = createFileRoute("/_shell/compare")({
  head: () => ({
    meta: [
      { title: "Compare listings — GLOBEX" },
      { name: "description", content: "Side-by-side comparison of shortlisted export listings." },
      { property: "og:title", content: "Compare listings — GLOBEX" },
      { property: "og:description", content: "Side-by-side comparison of shortlisted export listings." },
    ],
  }),
  component: ComparePage,
});
