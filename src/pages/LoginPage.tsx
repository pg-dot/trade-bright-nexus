import { Link, useNavigate } from "@tanstack/react-router";
import { LoginForm } from "@/components/auth/LoginForm";

export function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="text-lg font-semibold tracking-tight text-foreground">GLOBEX</p>
          <p className="text-sm text-muted-foreground">Sign in to your trade workspace</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <LoginForm onSubmit={() => navigate({ to: "/dashboard" })} />
        </div>
        <p className="text-center text-xs text-muted-foreground">
          New to GLOBEX?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
