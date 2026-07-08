import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Single floating CTA — appears after user scrolls past the fold.
 * On /kontakt it scrolls to the form; elsewhere it navigates to /kontakt.
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { location } = useRouterState();
  const onKontakt = location.pathname === "/kontakt";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = onKontakt ? "Pošalji upit" : "Zatraži kontakt";

  const inner = (
    <>
      <span className="relative z-10">{label}</span>
      <span className="relative z-10 transition-transform group-hover:translate-x-1">
        →
      </span>
      <span
        aria-hidden
        className="absolute inset-0 bg-[color:var(--brand)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
      />
    </>
  );

  const classes =
    "group relative inline-flex items-center gap-3 overflow-hidden bg-[color:var(--ink)] text-[color:var(--bone)] pl-6 pr-5 py-4 text-sm tracking-[0.14em] uppercase font-semibold shadow-[0_24px_60px_-20px_rgba(11,18,32,0.55)]";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed z-40 right-4 md:right-8 bottom-4 md:bottom-8"
        >
          {onKontakt ? (
            <a href="#kontakt-form" className={classes}>
              {inner}
            </a>
          ) : (
            <Link to="/kontakt" className={classes}>
              {inner}
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
