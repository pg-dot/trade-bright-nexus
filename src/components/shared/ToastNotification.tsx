import { toast } from "sonner";

export type ToastTone = "success" | "error" | "info" | "warning";

/** Thin wrapper so the app has one notification entry point. */
export function notify(tone: ToastTone, message: string, description?: string) {
  const fn =
    tone === "success"
      ? toast.success
      : tone === "error"
        ? toast.error
        : tone === "warning"
          ? toast.warning
          : toast.info;
  fn(message, { description });
}

export default notify;
