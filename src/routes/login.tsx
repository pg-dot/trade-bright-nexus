import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/pages/LoginPage";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — GLOBEX" },
      { name: "description", content: "Sign in to the GLOBEX unified digital trade platform." },
      { property: "og:title", content: "Sign in — GLOBEX" },
      { property: "og:description", content: "Sign in to the GLOBEX unified digital trade platform." },
    ],
  }),
  component: LoginPage,
});
