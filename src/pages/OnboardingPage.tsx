import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { RoleSelector } from "@/components/auth/RoleSelector";
import { KYCForm } from "@/components/auth/KYCForm";
import { VerificationStatusTracker } from "@/components/auth/VerificationStatusTracker";
import type { Role } from "@/lib/role-context";

export function OnboardingPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-12">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Set up your GLOBEX account
        </h1>
        <p className="text-sm text-muted-foreground">
          Pick how you trade, then complete KYC so buyers and exporters can verify you.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">1. Choose your role</h2>
        <RoleSelector value={role} onChange={setRole} />
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">2. Business verification</h2>
        <div className="rounded-lg border border-border bg-card p-5">
          <KYCForm onSubmit={() => setSubmitted(true)} />
        </div>
      </section>

      {submitted ? (
        <>
          <VerificationStatusTracker status="under_review" note="Typical review time: 24-48 hours." />
          <Button onClick={() => navigate({ to: "/dashboard" })}>Continue to dashboard</Button>
        </>
      ) : null}
    </div>
  );
}

export default OnboardingPage;
