import { createFileRoute } from "@tanstack/react-router";
import { ListingDetailPage } from "@/pages/ListingDetailPage";

export const Route = createFileRoute("/_shell/listings/$listingId")({
  head: () => ({
    meta: [
      { title: "Listing detail — GLOBEX" },
      { name: "description", content: "Full product specifications, certifications and exporter trust profile." },
      { property: "og:title", content: "Listing detail — GLOBEX" },
      { property: "og:description", content: "Full product specifications, certifications and exporter trust profile." },
    ],
  }),
  component: ListingDetailPage,
});
