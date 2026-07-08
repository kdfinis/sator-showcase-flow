import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { CTAButton } from "./CTA";
import type { Pkg } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PackageCard({
  pkg,
  emphasis = "normal",
  compact = false,
}: {
  pkg: Pkg;
  emphasis?: "normal" | "primary" | "balanced";
  compact?: boolean;
}) {
  const isPrimary = emphasis === "primary";
  const isBalanced = emphasis === "balanced";

  return (
    <TiltCard className="h-full">
      <motion.div
        className={cn(
          "relative h-full rounded-[20px] p-6 md:p-7 flex flex-col",
          "bg-white border transition-colors",
          isPrimary
            ? "border-[color:var(--pink)] shadow-[0_30px_60px_-30px_rgba(232,62,140,0.45)]"
            : "border-[color:var(--border-blush)]",
        )}
      >
        {isBalanced && (
          <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-[color:var(--pink)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            <Sparkles className="h-3 w-3" /> Balansirano
          </div>
        )}
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="text-xl font-bold text-[color:var(--plum)]">
            {pkg.name}
          </h3>
          <span
            className={cn(
              "text-sm font-semibold",
              isPrimary ? "text-[color:var(--pink)]" : "text-[color:var(--mauve)]",
            )}
          >
            {pkg.priceShort}
          </span>
        </div>
        <p className="text-sm text-[color:var(--plum)]/80 font-medium">
          {compact ? pkg.priceHome : pkg.priceHome}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--mauve)]">
          {pkg.bestFor}
        </p>

        {!compact && (
          <>
            <div className="my-5 h-px bg-[color:var(--border-blush)]" />
            <ul className="space-y-2.5 text-sm text-[color:var(--plum)]/90">
              {pkg.includes.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check className="h-4 w-4 mt-0.5 flex-none text-[color:var(--pink)]" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="flex-1" />
        <div className="pt-6">
          <CTAButton
            to="/kontakt"
            variant={isPrimary ? "primary" : "secondary"}
            className="w-full"
          >
            Zatraži paket
          </CTAButton>
        </div>
      </motion.div>
    </TiltCard>
  );
}
