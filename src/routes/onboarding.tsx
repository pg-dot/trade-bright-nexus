import { createFileRoute } from "@tanstack/react-router";
import { OnboardingPage } from "@/pages/OnboardingPage";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Onboarding — GLOBEX" },
      { name: "description", content: "Choose your role and complete KYC verification." },
      { property: "og:title", content: "Onboarding — GLOBEX" },
      { property: "og:description", content: "Choose your role and complete KYC verification." },
    ],
  }),
  component: OnboardingPage,
});
