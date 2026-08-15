import { ScoreGaugeWidget } from "@/components/shared/ScoreGaugeWidget";

interface TrustScoreGaugeProps {
  score?: number;
  updatedAt?: string;
  size?: number;
}

export function TrustScoreGauge({ score = 87, updatedAt = "Recomputed 2h ago", size = 140 }: TrustScoreGaugeProps) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-5">
      <ScoreGaugeWidget score={score} label="Trust Score" size={size} />
      <p className="text-xs text-muted-foreground">{updatedAt}</p>
      <p className="max-w-56 text-center text-[11px] text-muted-foreground">
        Derived by the AI layer from blockchain-anchored evidence; the score itself is not stored
        on-chain.
      </p>
    </div>
  );
}

export default TrustScoreGauge;
