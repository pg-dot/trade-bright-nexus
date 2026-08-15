import { createFileRoute } from "@tanstack/react-router";
import { SignupPage } from "@/pages/SignupPage";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account — GLOBEX" },
      { name: "description", content: "Register as an exporter or buyer on GLOBEX." },
      { property: "og:title", content: "Create account — GLOBEX" },
      { property: "og:description", content: "Register as an exporter or buyer on GLOBEX." },
    ],
  }),
  component: SignupPage,
});
