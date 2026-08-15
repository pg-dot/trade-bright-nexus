import { Link, useNavigate } from "@tanstack/react-router";
import { SignupForm } from "@/components/auth/SignupForm";

export function SignupPage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="text-lg font-semibold tracking-tight text-foreground">GLOBEX</p>
          <p className="text-sm text-muted-foreground">Create your trade account</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <SignupForm onSubmit={() => navigate({ to: "/onboarding" })} />
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Already registered?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
