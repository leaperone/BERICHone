import { redirect } from "next/navigation";
import type React from "react";
import { auth } from "@/auth";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./SideBar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return (
    <div className="flex h-screen w-full overflow-y-hidden">
      <SidebarProvider defaultOpen={false}>
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </SidebarProvider>
    </div>
  );
}
