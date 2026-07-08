import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Subtle CSS-3D tilt on hover. Disabled for reduced motion. */
export function TiltCard({
  children,
  className,
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateX(${(-py * intensity).toFixed(2)}deg) rotateY(${(px * intensity).toFixed(2)}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={className}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="tilt-card h-full will-change-transform"
      >
        {children}
      </div>
    </motion.div>
  );
}
