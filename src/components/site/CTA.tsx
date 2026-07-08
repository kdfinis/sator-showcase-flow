import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Send } from "lucide-react";
import { telHref, waHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[14px] px-5 py-3 text-[15px] font-semibold transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--pink)]/25 whitespace-nowrap";

const styles: Record<Variant, string> = {
  primary:
    "bg-[color:var(--pink)] text-white hover:bg-[color:var(--pink-hover)] shadow-[0_10px_30px_-12px_rgba(232,62,140,0.55)]",
  secondary:
    "bg-white text-[color:var(--plum)] border border-[color:var(--border-blush)] hover:bg-[color:var(--blush)]",
  ghost:
    "text-[color:var(--plum)] hover:text-[color:var(--pink)]",
};

export function CTAButton({
  variant = "primary",
  href,
  to,
  children,
  className,
  icon,
  external,
  ...rest
}: {
  variant?: Variant;
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = cn(base, styles[variant], className);
  if (to) {
    return (
      <Link to={to} className={cls}>
        {icon}
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href ?? "#"}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}

export function CTAGroup({
  showForm = true,
  className,
  variant = "hero",
}: {
  showForm?: boolean;
  className?: string;
  variant?: "hero" | "compact";
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-3",
        variant === "hero" ? "items-center" : "",
        className,
      )}
    >
      <CTAButton
        variant="primary"
        href={telHref()}
        icon={<Phone className="h-4 w-4" strokeWidth={2.4} />}
      >
        Nazovi
      </CTAButton>
      <CTAButton
        variant="secondary"
        href={waHref()}
        external
        icon={<MessageCircle className="h-4 w-4" strokeWidth={2.4} />}
      >
        WhatsApp
      </CTAButton>
      {showForm && (
        <CTAButton
          variant="ghost"
          to="/kontakt"
          icon={<Send className="h-4 w-4" strokeWidth={2.4} />}
        >
          Pošalji upit
        </CTAButton>
      )}
    </div>
  );
}
