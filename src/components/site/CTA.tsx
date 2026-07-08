import { Link } from "@tanstack/react-router";
import { telHref, waHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center gap-2 px-5 py-3 text-[13px] tracking-[0.14em] uppercase font-semibold transition-colors whitespace-nowrap";

const styles: Record<Variant, string> = {
  primary:
    "bg-[color:var(--ink)] text-[color:var(--bone)] hover:bg-[color:var(--brand)]",
  secondary:
    "border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--bone)]",
  ghost:
    "text-[color:var(--ink)] hover:text-[color:var(--brand)] px-0",
};

export function CTAButton({
  variant = "primary",
  href,
  to,
  children,
  className,
  external,
  arrow = true,
  ...rest
}: {
  variant?: Variant;
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  arrow?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = cn(base, styles[variant], className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="transition-transform group-hover:translate-x-1">→</span>
      )}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
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
      {inner}
    </a>
  );
}

export function CTAGroup({
  showForm = true,
  className,
}: {
  showForm?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3 items-center", className)}>
      <CTAButton variant="primary" href={telHref()}>
        Nazovi
      </CTAButton>
      <CTAButton variant="secondary" href={waHref()} external>
        WhatsApp
      </CTAButton>
      {showForm && (
        <CTAButton variant="ghost" to="/kontakt">
          Pošalji upit
        </CTAButton>
      )}
    </div>
  );
}
