import { UserVerificationQueue } from "@/components/admin/UserVerificationQueue";

export function AdminVerificationPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">KYC verification</h1>
        <p className="text-sm text-muted-foreground">
          Approve or reject pending exporter and buyer submissions.
        </p>
      </header>
      <UserVerificationQueue />
    </div>
  );
}

export default AdminVerificationPage;
