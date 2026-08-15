import { useState } from "react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/shared/Badge";

export type PaymentMethod = "fiat" | "crypto";

interface PaymentMethodSelectorProps {
  value?: PaymentMethod;
  onChange?: (method: PaymentMethod) => void;
}

export function PaymentMethodSelector({ value, onChange }: PaymentMethodSelectorProps) {
  const [internal, setInternal] = useState<PaymentMethod>(value ?? "fiat");
  const active = value ?? internal;

  const select = (m: PaymentMethod) => {
    setInternal(m);
    onChange?.(m);
  };

  const options = [
    {
      id: "fiat" as const,
      title: "Fiat — Razorpay escrow",
      blurb: "INR / USD settlement, T+2 release after delivery confirmation.",
      disabled: false,
    },
    {
      id: "crypto" as const,
      title: "Crypto (stablecoin)",
      blurb: "Smart-contract escrow on-chain.",
      disabled: true,
    },
  ];

  return (
    <section className="space-y-3 rounded-lg border border-border bg-card p-5">
      <h2 className="text-sm font-semibold text-foreground">Payment method</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            disabled={o.disabled}
            onClick={() => select(o.id)}
            className={cn(
              "rounded-lg border p-4 text-left transition-colors",
              active === o.id ? "border-primary bg-primary/5" : "border-border",
              o.disabled && "cursor-not-allowed opacity-60",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-foreground">{o.title}</p>
              {o.disabled ? <StatusBadge tone="neutral">Phase 2</StatusBadge> : null}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{o.blurb}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default PaymentMethodSelector;
