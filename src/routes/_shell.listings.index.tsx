import { createFileRoute } from "@tanstack/react-router";
import { ListingBrowsePage } from "@/pages/ListingBrowsePage";

export const Route = createFileRoute("/_shell/listings")({
  head: () => ({
    meta: [
      { title: "Marketplace — GLOBEX" },
      { name: "description", content: "Discover verified exporters with AI-ranked semantic search across trade listings." },
      { property: "og:title", content: "Marketplace — GLOBEX" },
      { property: "og:description", content: "Discover verified exporters with AI-ranked semantic search across trade listings." },
    ],
  }),
  component: ListingBrowsePage,
});
