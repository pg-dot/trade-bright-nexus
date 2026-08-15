import { CreateListingForm } from "@/components/listings/CreateListingForm";
import { ComplianceChecklistWidget } from "@/components/regulatory/ComplianceChecklistWidget";

export function CreateListingPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Create listing</h1>
        <p className="text-sm text-muted-foreground">
          Rich specs improve AI match quality — buyers are ranked against your exact attributes.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CreateListingForm />
        </div>
        <ComplianceChecklistWidget />
      </div>
    </div>
  );
}

export default CreateListingPage;
