import { Link } from "@tanstack/react-router";
import {
  SITE_NAME,
  TAGLINE,
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

const P = ({ v }: { v: string }) =>
  isPlaceholder(v) ? (
    <span className="opacity-60">{v}</span>
  ) : (
    <span>{v}</span>
  );

export function Footer() {
  const legalPending =
    isPlaceholder(LEGAL_NAME) || isPlaceholder(OIB) || isPlaceholder(ADDRESS);

  return (
    <footer className="mt-32 bg-[color:var(--ink)] text-[color:var(--bone)]">
      <div className="container-wide pt-24 pb-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="eyebrow opacity-60">{SITE_NAME}</div>
            <p className="mt-6 text-2xl md:text-3xl leading-[1.15] tracking-[-0.02em] max-w-xl font-light">
              {TAGLINE} Sekundarno grafički dizajn i osnovna digitalizacija
              poslovanja.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow opacity-60 mb-6">Navigacija</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[15px] hover:text-[color:var(--brand)] transition-colors"
                  >
                    {l.label} <span className="opacity-40">→</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privatnost"
                  className="text-[15px] hover:text-[color:var(--brand)] transition-colors"
                >
                  Privatnost <span className="opacity-40">→</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow opacity-60 mb-6">Kontakt</div>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href={telHref()} className="hover:text-[color:var(--brand)]">
                  <P v={PHONE_DISPLAY} />
                </a>
              </li>
              <li>
                <a
                  href={waHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--brand)]"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={mailHref()} className="hover:text-[color:var(--brand)] break-all">
                  <P v={EMAIL} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-[color:var(--bone)]/15 grid gap-6 md:grid-cols-2 text-xs opacity-70">
          <div className="space-y-1 num">
            <div>
              <P v={LEGAL_NAME} /> · OIB <P v={OIB} />
            </div>
            <div>
              <P v={ADDRESS} /> · <P v={VAT_STATUS} />
            </div>
            {legalPending && (
              <div className="text-[color:var(--brand)] mt-2 not-italic">
                Pravni podaci bit će ažurirani prije finalne objave stranice.
              </div>
            )}
          </div>
          <div className="md:text-right">
            © {new Date().getFullYear()} {SITE_NAME}
          </div>
        </div>
      </div>
    </footer>
  );
}
