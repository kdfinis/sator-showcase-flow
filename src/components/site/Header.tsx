import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Editorial header that auto-hides on scroll-down and reveals on scroll-up.
 * No icons. Word-marks and links only.
 */
export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 12);
      if (open) {
        setHidden(false);
      } else if (y < 80) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors",
        scrolled
          ? "bg-[color:var(--bone)]/90 backdrop-blur-md border-b border-[color:var(--line)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-wide flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="group inline-flex items-baseline gap-2">
          <span className="text-[13px] md:text-sm font-semibold tracking-[0.14em] uppercase text-[color:var(--ink)]">
            Sator
          </span>
          <span className="h-1 w-1 bg-[color:var(--brand)] translate-y-[-2px]" />
          <span className="text-[13px] md:text-sm font-semibold tracking-[0.14em] uppercase text-[color:var(--muted-text)] group-hover:text-[color:var(--ink)] transition-colors">
            Digital
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-[13px] tracking-[0.14em] uppercase font-medium text-[color:var(--ink)]/75 hover:text-[color:var(--ink)] transition-colors"
              activeProps={{
                className:
                  "text-[color:var(--ink)] [&>span]:scale-x-100",
              }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 bg-[color:var(--ink)] transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href={telHref()}
            className="text-[13px] tracking-[0.14em] uppercase font-medium text-[color:var(--ink)] hover:text-[color:var(--brand)] transition-colors"
          >
            Nazovi
          </a>
          <Link
            to="/kontakt"
            className="text-[13px] tracking-[0.14em] uppercase font-semibold bg-[color:var(--ink)] text-[color:var(--bone)] px-4 py-2 hover:bg-[color:var(--ink-soft)] transition-colors"
          >
            Kontakt →
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Otvori izbornik"
          aria-expanded={open}
          className="md:hidden relative h-8 w-10 flex flex-col justify-center gap-[5px]"
        >
          <span
            className={cn(
              "block h-px w-full bg-[color:var(--ink)] transition-transform origin-center",
              open && "translate-y-[3px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-full bg-[color:var(--ink)] transition-transform origin-center",
              open && "-translate-y-[3px] -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--bone)]"
          >
            <div className="container-wide py-6 flex flex-col">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="py-3 text-lg font-medium border-b border-[color:var(--line)]/60 last:border-b-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="mt-6 inline-flex items-center justify-between text-sm tracking-[0.14em] uppercase font-semibold bg-[color:var(--ink)] text-[color:var(--bone)] px-4 py-4"
              >
                <span>Zatraži kontakt</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
