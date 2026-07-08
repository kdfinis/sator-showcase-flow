import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, MessageCircle, Send } from "lucide-react";
import { telHref, waHref } from "@/lib/site";

export function MobileStickyCTA() {
  const { location } = useRouterState();
  const onKontakt = location.pathname === "/kontakt";

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[color:var(--border-blush)] bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_-16px_rgba(42,16,35,0.25)]">
      <div className="grid grid-cols-3 gap-2 p-2">
        <a
          href={telHref()}
          className="flex flex-col items-center gap-0.5 py-2.5 rounded-xl bg-[color:var(--pink)] text-white font-semibold text-xs"
        >
          <Phone className="h-4 w-4" />
          Nazovi
        </a>
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-2.5 rounded-xl bg-white border border-[color:var(--border-blush)] text-[color:var(--plum)] font-semibold text-xs"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        {onKontakt ? (
          <a
            href="#kontakt-form"
            className="flex flex-col items-center gap-0.5 py-2.5 rounded-xl bg-[color:var(--plum)] text-white font-semibold text-xs"
          >
            <Send className="h-4 w-4" />
            Upit
          </a>
        ) : (
          <Link
            to="/kontakt"
            className="flex flex-col items-center gap-0.5 py-2.5 rounded-xl bg-[color:var(--plum)] text-white font-semibold text-xs"
          >
            <Send className="h-4 w-4" />
            Upit
          </Link>
        )}
      </div>
    </div>
  );
}
