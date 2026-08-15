interface RiskWarningBannerProps {
  title?: string;
  detail?: string;
  onAction?: () => void;
  actionLabel?: string;
}

export function RiskWarningBanner({
  title = "Transaction Risk High — Extra Verification Required",
  detail = "Document integrity score is 45/100. Request a third-party inspection certificate before escrow release.",
  onAction,
  actionLabel = "Request inspection",
}: RiskWarningBannerProps) {
  return (
    <div
      role="alert"
      className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4"
    >
      <div>
        <p className="text-sm font-semibold text-destructive">{title}</p>
        <p className="text-xs text-muted-foreground">{detail}</p>
      </div>
      {onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="rounded-md bg-destructive px-3 py-1.5 text-xs font-medium text-destructive-foreground"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

export default RiskWarningBanner;
