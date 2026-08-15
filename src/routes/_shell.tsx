import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/shared/Navbar";
import { Sidebar } from "@/components/shared/Sidebar";
import { RoleProvider } from "@/lib/role-context";

export const Route = createFileRoute("/_shell")({
  component: AppShell,
});

function AppShell() {
  return (
    <RoleProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="min-w-0 flex-1 px-4 py-6 md:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </RoleProvider>
  );
}
