import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, telHref, waHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn(
        "sticky top-0 z-40 backdrop-blur-md transition-all",
        scrolled
          ? "bg-white/85 border-b border-[color:var(--border-blush)] shadow-[0_6px_20px_-18px_rgba(42,16,35,0.35)]"
          : "bg-white/60 border-b border-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-[10px] bg-[color:var(--pink)] text-white font-black text-sm shadow-[0_6px_18px_-6px_rgba(232,62,140,0.7)]">
            S
            <span className="absolute inset-0 rounded-[10px] ring-1 ring-white/40" />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-[color:var(--plum)]">
            Sator <span className="text-[color:var(--pink)]">Digital</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3 py-2 text-sm font-medium text-[color:var(--plum)]/80 hover:text-[color:var(--pink)] transition-colors"
              activeProps={{ className: "text-[color:var(--pink)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={telHref()}
            className="inline-flex items-center gap-1.5 rounded-[12px] px-3 py-2 text-sm font-semibold border border-[color:var(--border-blush)] text-[color:var(--plum)] hover:bg-[color:var(--blush)] transition"
          >
            <Phone className="h-4 w-4" /> Nazovi
          </a>
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[12px] px-3 py-2 text-sm font-semibold bg-[color:var(--pink)] text-white hover:bg-[color:var(--pink-hover)] transition shadow-[0_10px_24px_-14px_rgba(232,62,140,0.7)]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[color:var(--blush)]"
          aria-label="Otvori izbornik"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-[color:var(--border-blush)] bg-white"
        >
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2 py-3 rounded-lg text-[15px] font-medium text-[color:var(--plum)] hover:bg-[color:var(--blush)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
