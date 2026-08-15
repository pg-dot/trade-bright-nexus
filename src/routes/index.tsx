import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/Badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLOBEX — Unified Digital Trade Platform" },
      {
        name: "description",
        content:
          "GLOBEX connects exporters and importers through AI-ranked discovery, escrow payments, trust scoring and a blockchain-anchored audit trail.",
      },
      { property: "og:title", content: "GLOBEX — Unified Digital Trade Platform" },
      {
        property: "og:description",
        content:
          "AI-ranked exporter discovery, escrow-backed payments, document verification and tamper-evident trade records.",
      },
    ],
  }),
  component: Landing,
});

const pillars = [
  { title: "AI-ranked discovery", body: "Semantic matching on specs, certifications and route feasibility — not keyword search." },
  { title: "Escrow-backed trades", body: "Payment held until delivery is confirmed and documents reconcile." },
  { title: "Evidence on-chain", body: "Verified facts are anchored; the AI layer interprets them into an updatable trust score." },
  { title: "Human arbitration", body: "AI recommends, a human arbitrator decides. Disputes stay accountable." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex h-14 items-center justify-between border-b border-border px-6">
        <span className="text-base font-semibold tracking-tight text-foreground">GLOBEX</span>
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/signup">Get started</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20">
        <StatusBadge tone="info">Smart India Hackathon 2025 · Mechanism A</StatusBadge>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          A unified digital trade platform for exporters and importers
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          List products, get matched by AI, transact under escrow, and build a trust score backed by
          tamper-evident records — end to end, in one workspace.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/dashboard">Open demo dashboard</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/listings">Browse marketplace</Link>
          </Button>
        </div>

        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.title} className="rounded-lg border border-border bg-card p-5">
              <h2 className="text-sm font-semibold text-foreground">{p.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
