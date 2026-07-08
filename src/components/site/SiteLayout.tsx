import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--bone)] text-[color:var(--ink)]">
      <Header />
      <main className="flex-1 pt-14 md:pt-16">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
