import { Link } from "@tanstack/react-router";
import {
  SITE_NAME,
  PHONE_DISPLAY,
  EMAIL,
  WHATSAPP_URL,
  LEGAL_NAME,
  OIB,
  ADDRESS,
  VAT_STATUS,
  isPlaceholder,
  telHref,
  waHref,
  mailHref,
  NAV_LINKS,
} from "@/lib/site";

const Placeholder = ({ v }: { v: string }) =>
  isPlaceholder(v) ? (
    <span className="text-[color:var(--mauve)] italic">{v}</span>
  ) : (
    <span>{v}</span>
  );

export function Footer() {
  const legalPending =
    isPlaceholder(LEGAL_NAME) || isPlaceholder(OIB) || isPlaceholder(ADDRESS);

  return (
    <footer className="mt-24 bg-[color:var(--plum)] text-white/90">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-[color:var(--pink)] text-white font-black">
              S
            </span>
            <span className="text-lg font-bold tracking-tight">
              {SITE_NAME}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Sator Digital izrađuje jasne web stranice za lokalne firme koje
            ljudi traže na Googleu. Sekundarno nudimo grafički dizajn i osnovnu
            digitalizaciju poslovanja.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-[color:var(--pink)] mb-4 font-bold">
            Navigacija
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white text-white/70">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privatnost" className="hover:text-white text-white/70">
                Politika privatnosti
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-[color:var(--pink)] mb-4 font-bold">
            Kontakt
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={telHref()} className="hover:text-white text-white/70">
                <Placeholder v={PHONE_DISPLAY} />
              </a>
            </li>
            <li>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-white/70"
              >
                <Placeholder v={WHATSAPP_URL} />
              </a>
            </li>
            <li>
              <a href={mailHref()} className="hover:text-white text-white/70">
                <Placeholder v={EMAIL} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/60 grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <div>
              <Placeholder v={LEGAL_NAME} /> · OIB: <Placeholder v={OIB} />
            </div>
            <div>
              <Placeholder v={ADDRESS} /> · <Placeholder v={VAT_STATUS} />
            </div>
            {legalPending && (
              <div className="text-[color:var(--pink)]/90 mt-2">
                Pravni podaci bit će ažurirani prije finalne objave stranice.
              </div>
            )}
          </div>
          <div className="md:text-right">
            © {new Date().getFullYear()} {SITE_NAME}. Sva prava pridržana.
          </div>
        </div>
      </div>
    </footer>
  );
}
