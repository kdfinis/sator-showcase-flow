import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
  defaultOpen = -1,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);
  return (
    <div className="border-t border-[color:var(--line)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-[color:var(--line)]">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-baseline justify-between gap-6 text-left py-5 md:py-6 group"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-4 md:gap-6">
                <span className="num text-[11px] tracking-widest text-[color:var(--muted-text)] w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-[17px] md:text-xl tracking-[-0.02em] font-medium transition-colors",
                    isOpen ? "text-[color:var(--brand)]" : "text-[color:var(--ink)] group-hover:text-[color:var(--brand)]",
                  )}
                >
                  {it.q}
                </span>
              </span>
              <span
                aria-hidden
                className={cn(
                  "shrink-0 text-2xl leading-none transition-transform duration-300",
                  isOpen ? "rotate-45 text-[color:var(--brand)]" : "text-[color:var(--ink)]",
                )}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pl-12 md:pl-14 pr-4 pb-6 text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-2xl">
                    {it.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
