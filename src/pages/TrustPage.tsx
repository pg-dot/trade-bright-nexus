import { ExporterPublicProfile } from "@/components/trust/ExporterPublicProfile";
import { TradeRiskCompositeCard } from "@/components/trust/TradeRiskCompositeCard";
import { RiskWarningBanner } from "@/components/trust/RiskWarningBanner";

export function TrustPage() {
  return (
    <div className="space-y-6">
      <RiskWarningBanner onAction={() => undefined} />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ExporterPublicProfile />
        <TradeRiskCompositeCard />
      </div>
    </div>
  );
}

export default TrustPage;
