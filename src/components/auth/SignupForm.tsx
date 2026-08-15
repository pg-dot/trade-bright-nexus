import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignupFormProps {
  onSubmit?: (values: { identifier: string; password: string; mode: "password" | "otp" }) => void;
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const [mode, setMode] = useState<"password" | "otp">("password");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({ identifier, password, mode });
      }}
    >
      <div className="flex gap-2 rounded-md bg-muted p-1">
        {(["password", "otp"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`flex-1 rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              mode === m ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            {m === "password" ? "Email + password" : "Phone OTP"}
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="signup-id">{mode === "password" ? "Work email" : "Phone number"}</Label>
        <Input
          id="signup-id"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder={mode === "password" ? "trade@company.com" : "+91 98XXXXXX21"}
        />
      </div>

      {mode === "password" ? (
        <div className="space-y-1.5">
          <Label htmlFor="signup-pass">Password</Label>
          <Input
            id="signup-pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 10 characters"
          />
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          A 6-digit code will be sent by SMS. Placeholder — OTP verification wires up later.
        </p>
      )}

      <Button type="submit" className="w-full">
        {mode === "password" ? "Create account" : "Send OTP"}
      </Button>
    </form>
  );
}

export default SignupForm;
