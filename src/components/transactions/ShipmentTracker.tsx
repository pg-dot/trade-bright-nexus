import { Stepper, type Step } from "@/components/shared/Stepper";

interface ShipmentTrackerProps {
  events?: Step[];
  currentStep?: number;
  vessel?: string;
}

const defaultEvents: Step[] = [
  { id: "pickup", label: "Cargo picked up", description: "Kochi, IN", timestamp: "12 Jul, 09:20" },
  { id: "customs", label: "Export customs cleared", description: "Cochin Port", timestamp: "13 Jul, 16:05" },
  { id: "sail", label: "Vessel departed", description: "MV Sea Garnet", timestamp: "14 Jul, 22:40" },
  { id: "transit", label: "In transit", description: "Suez Canal", timestamp: "24 Jul, 06:10" },
  { id: "arrival", label: "Arrival at Rotterdam", description: "ETA", timestamp: "05 Aug" },
];

export function ShipmentTracker({
  events = defaultEvents,
  currentStep = 3,
  vessel = "MV Sea Garnet · BL 884219",
}: ShipmentTrackerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-border bg-card p-5">
      <header>
        <h2 className="text-sm font-semibold text-foreground">Shipment timeline</h2>
        <p className="text-xs text-muted-foreground">{vessel}</p>
      </header>
      <Stepper steps={events} currentStep={currentStep} orientation="vertical" />
    </section>
  );
}

export default ShipmentTracker;
