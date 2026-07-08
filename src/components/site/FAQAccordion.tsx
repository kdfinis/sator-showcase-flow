import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
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
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className={cn(
              "rounded-2xl border bg-white transition-colors",
              isOpen
                ? "border-[color:var(--pink)] shadow-[0_20px_50px_-30px_rgba(232,62,140,0.35)]"
                : "border-[color:var(--border-blush)]",
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] md:text-base font-semibold text-[color:var(--plum)]">
                {it.q}
              </span>
              <span
                className={cn(
                  "flex-none inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all",
                  isOpen
                    ? "bg-[color:var(--pink)] text-white border-[color:var(--pink)] rotate-45"
                    : "text-[color:var(--pink)] border-[color:var(--border-blush)]",
                )}
              >
                <Plus className="h-4 w-4" strokeWidth={2.4} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0 text-[15px] leading-relaxed text-[color:var(--plum)]/85">
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
