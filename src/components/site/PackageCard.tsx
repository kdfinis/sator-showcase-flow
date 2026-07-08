import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { CTAButton } from "./CTA";
import type { Pkg } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PackageCard({
  pkg,
  index,
  emphasis = "normal",
  compact = false,
}: {
  pkg: Pkg;
  index: number;
  emphasis?: "normal" | "primary" | "balanced";
  compact?: boolean;
}) {
  const isDark = emphasis === "primary";
  const isBalanced = emphasis === "balanced";

  return (
    <TiltCard className="h-full">
      <motion.div
        className={cn(
          "relative h-full p-8 md:p-10 flex flex-col border transition-colors",
          isDark
            ? "bg-[color:var(--ink)] text-[color:var(--bone)] border-[color:var(--ink)]"
            : "bg-[color:var(--bone)] text-[color:var(--ink)] border-[color:var(--line)]",
        )}
      >
        <div className="flex items-baseline justify-between">
          <span className={cn("num text-xs", isDark ? "text-[color:var(--bone)]/60" : "text-[color:var(--muted-text)]")}>
            {String(index + 1).padStart(2, "0")} / 03
          </span>
          {isBalanced && (
            <span className="eyebrow text-[color:var(--brand)]">Balansirano</span>
          )}
        </div>

        <h3 className="mt-8 text-3xl md:text-4xl tracking-[-0.03em] font-medium">
          {pkg.name}
        </h3>

        <div className={cn("mt-6 text-sm", isDark ? "text-[color:var(--bone)]/75" : "text-[color:var(--muted-text)]")}>
          {pkg.priceHome}
        </div>

        <p className={cn("mt-6 text-[15px] leading-relaxed max-w-sm", isDark ? "text-[color:var(--bone)]/85" : "text-[color:var(--ink)]/85")}>
          {pkg.bestFor}
        </p>

        {!compact && (
          <>
            <div className={cn("my-8 h-px", isDark ? "bg-[color:var(--bone)]/20" : "bg-[color:var(--line)]")} />
            <ul className="space-y-3 text-[14px]">
              {pkg.includes.map((i) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className={cn("num pt-1 text-[10px]", isDark ? "text-[color:var(--bone)]/50" : "text-[color:var(--muted-text)]")}>
                    —
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="flex-1" />
        <div className="pt-10">
          <CTAButton
            to="/kontakt"
            variant={isDark ? "secondary" : "primary"}
            className={cn(
              "w-full justify-between",
              isDark && "border-[color:var(--bone)] text-[color:var(--bone)] hover:bg-[color:var(--bone)] hover:text-[color:var(--ink)]",
            )}
          >
            Zatraži {pkg.name}
          </CTAButton>
        </div>
      </motion.div>
    </TiltCard>
  );
}
