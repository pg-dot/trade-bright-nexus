import { cn } from "@/lib/utils";

interface ScoreGaugeWidgetProps {
  /** 0-100 */
  score: number;
  label?: string;
  size?: number;
  className?: string;
}

export function ScoreGaugeWidget({
  score,
  label = "Score",
  size = 140,
  className,
}: ScoreGaugeWidgetProps) {
  const clamped = Math.max(0, Math.min(100, score));
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);
  const tone =
    clamped >= 75 ? "text-success" : clamped >= 45 ? "text-warning" : "text-destructive";

  return (
    <div className={cn("inline-flex flex-col items-center gap-2", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-muted"
            strokeWidth={10}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={cn("stroke-current transition-[stroke-dashoffset] duration-700", tone)}
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-3xl font-semibold tabular-nums", tone)}>{clamped}</span>
          <span className="text-[11px] uppercase tracking-wide text-muted-foreground">/ 100</span>
        </div>
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}

export default ScoreGaugeWidget;
