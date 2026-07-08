import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Editorial image placeholder. No stock photos, no icons.
 * Renders a labeled frame with a warm grain fill so real photography
 * can slot in later without layout shift.
 */
export function ImagePlaceholder({
  ratio = "4/3",
  label,
  index,
  tone = "ink",
  className,
  caption,
}: {
  ratio?: "4/3" | "3/4" | "16/9" | "1/1" | "3/2" | "2/3" | "21/9";
  label?: string;
  index?: string | number;
  tone?: "ink" | "bone" | "paper";
  className?: string;
  caption?: string;
}) {
  const reduced = useReducedMotion();
  const bg =
    tone === "ink"
      ? "bg-[color:var(--ink)] text-[color:var(--bone)] grain-dark"
      : tone === "paper"
        ? "bg-[color:var(--paper)] text-[color:var(--ink)] grain"
        : "bg-[color:var(--bone)] text-[color:var(--ink)] grain";

  return (
    <figure className={cn("group block", className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        whileHover={reduced ? undefined : { scale: 1.005 }}
        style={{ aspectRatio: ratio.replace("/", " / ") }}
        className={cn(
          "relative w-full overflow-hidden border border-[color:var(--line)]",
          bg,
        )}
      >
        <div className="absolute inset-0 flex items-end justify-between p-4">
          <span className="eyebrow opacity-70">
            {index !== undefined ? `Fig. ${String(index).padStart(2, "0")}` : "Fig."}
          </span>
          {label && (
            <span className="eyebrow opacity-70 text-right max-w-[60%] truncate">
              {label}
            </span>
          )}
        </div>
        {/* corner ticks */}
        <span className="absolute top-2 left-2 h-3 w-3 border-l border-t border-current opacity-40" />
        <span className="absolute top-2 right-2 h-3 w-3 border-r border-t border-current opacity-40" />
        <span className="absolute bottom-2 left-2 h-3 w-3 border-l border-b border-current opacity-40" />
        <span className="absolute bottom-2 right-2 h-3 w-3 border-r border-b border-current opacity-40" />
      </motion.div>
      {caption && (
        <figcaption className="mt-3 text-xs text-[color:var(--muted-text)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
