"use client";

import { useState } from "react";
import { Header, AppSidebar } from "@/components/dashboard";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("book");

  return (
    <ThemeContextProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <div
          className={`flex dark:bg-foreground flex-col flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

          <main className="flex flex-1 flex-col h-full gap-4 p-4">
            {children}
            <ThemeSwitch />
          </main>
        </div>
      </div>
    </ThemeContextProvider>
  );
}
