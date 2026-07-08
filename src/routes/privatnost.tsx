import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  LEGAL_NAME,
  OIB,
  ADDRESS,
  EMAIL,
  isPlaceholder,
  mailHref,
} from "@/lib/site";

export const Route = createFileRoute("/privatnost")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti, Sator Digital" },
      {
        name: "description",
        content:
          "Kako Sator Digital obrađuje osobne podatke poslane putem kontakt forme, emaila, telefona i WhatsAppa.",
      },
    ],
  }),
  component: Privacy,
});

function P({ v }: { v: string }) {
  return isPlaceholder(v) ? (
    <span className="italic text-[color:var(--muted-text)]">{v}</span>
  ) : (
    <>{v}</>
  );
}

function Section({ title, num, children }: { title: string; num: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 border-t border-[color:var(--line)]">
      <span className="num text-[10px] tracking-widest text-[color:var(--muted-text)] pt-1.5">
        {num}
      </span>
      <div>
        <h2 className="eyebrow text-[color:var(--muted-text)]">{title}</h2>
        <div className="mt-3 text-[15px] leading-relaxed text-[color:var(--ink)]/85 max-w-2xl">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function Privacy() {
  const legalPending =
    isPlaceholder(LEGAL_NAME) || isPlaceholder(OIB) || isPlaceholder(ADDRESS);

  return (
    <SiteLayout>
      <section className="py-20 md:py-28 bg-[color:var(--bone)]">
        <div className="container-wide max-w-3xl">
          <div className="flex items-baseline justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-text)] pb-8 border-b border-[color:var(--line)]">
            <span>Dokument — Ed. 01</span>
            <span className="num">§ Privatnost</span>
          </div>

          <Reveal>
            <h1 className="mt-14 text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02]">
              Politika{" "}
              <span className="italic text-[color:var(--brand)] font-light">
                privatnosti
              </span>
            </h1>
          </Reveal>

          {legalPending && (
            <Reveal delay={0.05}>
              <div className="mt-8 border-l-2 border-[color:var(--brand)] pl-4 py-1 text-sm text-[color:var(--ink)]/80">
                Pravni podaci bit će ažurirani prije finalne objave stranice.
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <p className="mt-10 text-[16px] leading-relaxed text-[color:var(--ink)]/85">
              Ova stranica objašnjava kako Sator Digital obrađuje podatke koje
              pošaljete kroz kontakt formu, email, telefon ili WhatsApp.
            </p>
          </Reveal>

          <div className="mt-14">
            <Section title="Voditelj obrade" num="01">
              <ul className="space-y-1">
                <li>Voditelj obrade: <P v={LEGAL_NAME} /></li>
                <li>OIB: <P v={OIB} /></li>
                <li>Adresa: <P v={ADDRESS} /></li>
                <li>
                  Email:{" "}
                  {isPlaceholder(EMAIL) ? (
                    <P v={EMAIL} />
                  ) : (
                    <a href={mailHref()} className="underline underline-offset-4 decoration-[color:var(--brand)]">
                      {EMAIL}
                    </a>
                  )}
                </li>
              </ul>
            </Section>
            <Section title="Koje podatke prikupljamo" num="02">
              Prikupljamo podatke koje sami pošaljete, uključujući ime i prezime,
              naziv firme, grad, kontakt podatke, linkove koje pošaljete i
              sadržaj poruke.
            </Section>
            <Section title="Svrha obrade" num="03">
              Podatke koristimo kako bismo odgovorili na vaš upit, pripremili
              ponudu, dogovorili poziv i pružili uslugu ako se odlučite za
              suradnju.
            </Section>
            <Section title="Pravna osnova" num="04">
              Obrada se temelji na vašem zahtjevu, komunikaciji prije mogućeg
              ugovora, izvršenju ugovora ako do suradnje dođe i legitimnom
              interesu za osnovnu poslovnu komunikaciju.
            </Section>
            <Section title="Rok čuvanja" num="05">
              Podatke čuvamo onoliko koliko je potrebno za odgovor na upit,
              poslovnu komunikaciju, ugovorne obveze i zakonske obveze.
            </Section>
            <Section title="Alati trećih strana" num="06">
              Za komunikaciju i tehničko funkcioniranje stranice možemo
              koristiti alate trećih strana kao što su email, hosting,
              analitika, formulari i komunikacijski alati.
            </Section>
            <Section title="Vaša prava" num="07">
              Možete zatražiti pristup, ispravak, brisanje ili ograničenje
              obrade svojih podataka u skladu s važećim pravilima zaštite
              osobnih podataka.
            </Section>
            <Section title="Kontakt za privatnost" num="08">
              Za pitanja o privatnosti javite se na{" "}
              {isPlaceholder(EMAIL) ? (
                <P v={EMAIL} />
              ) : (
                <a href={mailHref()} className="underline underline-offset-4 decoration-[color:var(--brand)]">
                  {EMAIL}
                </a>
              )}
              .
            </Section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
