import { motion } from "framer-motion";
import { WireMorph, type WireVariant } from "@/components/site/WireMorph";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Editorial visual frame. Plain by default; pass `variant` to fill it
 * with a rotating wireframe animation (hero only).
 */
export function ImagePlaceholder({
  ratio = "4/3",
  label,
  index,
  tone = "ink",
  className,
  caption,
  variant,
}: {
  ratio?: "4/3" | "3/4" | "16/9" | "1/1" | "3/2" | "2/3" | "21/9";
  label?: string;
  index?: string | number;
  tone?: "ink" | "bone" | "paper";
  className?: string;
  caption?: string;
  variant?: WireVariant;
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
        {variant && <WireMorph variant={variant} tone={tone} />}

        {label && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-end p-4">
            <span className="eyebrow opacity-50 text-right max-w-[70%] truncate">
              {label}
            </span>
          </div>
        )}
        {typeof index !== "undefined" && (
          <span className="pointer-events-none absolute top-3 left-3 z-10 eyebrow opacity-40">
            {String(index).padStart(2, "0")}
          </span>
        )}
        {/* corner ticks */}
        <span className="pointer-events-none absolute top-2 left-2 z-10 h-3 w-3 border-l border-t border-current opacity-40" />
        <span className="pointer-events-none absolute top-2 right-2 z-10 h-3 w-3 border-r border-t border-current opacity-40" />
        <span className="pointer-events-none absolute bottom-2 left-2 z-10 h-3 w-3 border-l border-b border-current opacity-40" />
        <span className="pointer-events-none absolute bottom-2 right-2 z-10 h-3 w-3 border-r border-b border-current opacity-40" />
      </motion.div>
      {caption && (
        <figcaption className="mt-3 text-xs text-[color:var(--muted-text)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
