import { createFileRoute } from "@tanstack/react-router";
import { CreateListingPage } from "@/pages/CreateListingPage";

export const Route = createFileRoute("/_shell/listings/new")({
  head: () => ({
    meta: [
      { title: "Create listing — GLOBEX" },
      { name: "description", content: "Publish product specs, quantity, certifications and pricing for global buyers." },
      { property: "og:title", content: "Create listing — GLOBEX" },
      { property: "og:description", content: "Publish product specs, quantity, certifications and pricing for global buyers." },
    ],
  }),
  component: CreateListingPage,
});
