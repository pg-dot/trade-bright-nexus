import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  label: string;
  description?: string;
  timestamp?: string;
}

interface StepperProps {
  steps: Step[];
  /** index of the current step */
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  orientation = "horizontal",
  className,
}: StepperProps) {
  if (orientation === "vertical") {
    return (
      <ol className={cn("relative space-y-6 border-l border-border pl-6", className)}>
        {steps.map((step, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <li key={step.id} className="relative">
              <span
                className={cn(
                  "absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] font-bold",
                  done && "border-success bg-success text-success-foreground",
                  active && "border-primary bg-primary text-primary-foreground",
                  !done && !active && "border-border bg-background text-muted-foreground",
                )}
              >
                {done ? "✓" : i + 1}
              </span>
              <p
                className={cn(
                  "text-sm font-medium",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {step.label}
              </p>
              {step.description ? (
                <p className="text-xs text-muted-foreground">{step.description}</p>
              ) : null}
              {step.timestamp ? (
                <p className="mt-0.5 text-[11px] text-muted-foreground">{step.timestamp}</p>
              ) : null}
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <ol className={cn("flex w-full items-center", className)}>
      {steps.map((step, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <li key={step.id} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1 text-center">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold",
                  done && "border-success bg-success text-success-foreground",
                  active && "border-primary bg-primary text-primary-foreground",
                  !done && !active && "border-border bg-background text-muted-foreground",
                )}
              >
                {done ? "✓" : i + 1}
              </span>
              <span
                className={cn(
                  "max-w-24 text-xs",
                  active ? "font-medium text-foreground" : "text-muted-foreground",
                )}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 ? (
              <div
                className={cn("mx-2 h-0.5 flex-1", done ? "bg-success" : "bg-border")}
                aria-hidden
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export default Stepper;
