import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { telHref, waHref, RESPONSE_TIME_PROMISE } from "@/lib/site";

export const Route = createFileRoute("/hvala")({
  head: () => ({
    meta: [
      { title: "Hvala, upit je poslan" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Hvala,
});

function Hvala() {
  const prepare = [
    "Link na Google Maps profil",
    "Link na Facebook ili Instagram",
    "Popis usluga",
    "Radno vrijeme i područje rada",
    "Deset do dvadeset fotografija ako ih imate",
  ];
  return (
    <SiteLayout>
      <section className="py-24 md:py-40 bg-[color:var(--bone)] min-h-[80vh]">
        <div className="container-wide">
          <div className="flex items-baseline justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-text)] pb-8 border-b border-[color:var(--line)]">
            <span>Potvrda — 200 OK</span>
            <span className="num">§ Zaprimljeno</span>
          </div>

          <div className="mt-20 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal>
                <h1 className="text-5xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.96]">
                  Hvala.{" "}
                  <span className="italic text-[color:var(--brand)] font-light">
                    Upit je poslan.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 text-xl md:text-2xl leading-relaxed font-light text-[color:var(--ink)]/85 max-w-2xl">
                  Pregledat ćemo poruku i javiti se s nekoliko kratkih pitanja
                  ili prijedlogom za kratak poziv.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 eyebrow text-[color:var(--muted-text)]">
                  Odgovor u pravilu u roku od {RESPONSE_TIME_PROMISE.toLowerCase()}.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4">
              <div className="eyebrow text-[color:var(--muted-text)] mb-6">
                Ako želite ubrzati proces, pripremite
              </div>
              <ul className="border-t border-[color:var(--line)]">
                {prepare.map((p, i) => (
                  <li key={p} className="grid grid-cols-[auto_1fr] gap-4 py-3 border-b border-[color:var(--line)]">
                    <span className="num text-[10px] tracking-widest text-[color:var(--muted-text)] pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[color:var(--line)] flex flex-wrap items-center gap-6">
            <span className="eyebrow text-[color:var(--muted-text)]">
              Ako je hitno
            </span>
            <a
              href={telHref()}
              className="group inline-flex items-center gap-3 bg-[color:var(--ink)] text-[color:var(--bone)] px-6 py-4 text-[13px] tracking-[0.14em] uppercase font-semibold hover:bg-[color:var(--brand)] transition-colors"
            >
              <span>Nazovi</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-[color:var(--ink)] px-6 py-4 text-[13px] tracking-[0.14em] uppercase font-semibold hover:bg-[color:var(--ink)] hover:text-[color:var(--bone)] transition-colors"
            >
              <span>WhatsApp</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-[13px] tracking-[0.14em] uppercase font-semibold hover:text-[color:var(--brand)] transition-colors"
            >
              <span>←</span>
              <span>Povratak na početnu</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
