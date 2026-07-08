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

function P({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Reveal className="mt-8">
      <h2 className="text-lg font-bold text-[color:var(--plum)]">{title}</h2>
      <div className="mt-2 text-[15px] leading-relaxed text-[color:var(--plum)]/80">
        {children}
      </div>
    </Reveal>
  );
}

function Placeholder({ v }: { v: string }) {
  return isPlaceholder(v) ? (
    <span className="italic text-[color:var(--mauve)]">{v}</span>
  ) : (
    <>{v}</>
  );
}

function Privacy() {
  const legalPending =
    isPlaceholder(LEGAL_NAME) || isPlaceholder(OIB) || isPlaceholder(ADDRESS);

  return (
    <SiteLayout>
      <section className="pt-16 md:pt-20 pb-20 bg-white">
        <div className="container-x max-w-2xl">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
              Politika <span className="text-gradient-pink">privatnosti</span>
            </h1>
          </Reveal>

          {legalPending && (
            <Reveal delay={0.05}>
              <div className="mt-6 rounded-xl border border-[color:var(--pink)]/40 bg-[color:var(--blush)] px-4 py-3 text-sm text-[color:var(--plum)]/85">
                Pravni podaci bit će ažurirani prije finalne objave stranice.
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--plum)]/80">
              Ova stranica objašnjava kako Sator Digital obrađuje podatke koje
              pošaljete kroz kontakt formu, email, telefon ili WhatsApp.
            </p>
          </Reveal>

          <P title="Voditelj obrade">
            <ul className="space-y-1">
              <li>
                Voditelj obrade: <Placeholder v={LEGAL_NAME} />
              </li>
              <li>
                OIB: <Placeholder v={OIB} />
              </li>
              <li>
                Adresa: <Placeholder v={ADDRESS} />
              </li>
              <li>
                Email:{" "}
                {isPlaceholder(EMAIL) ? (
                  <Placeholder v={EMAIL} />
                ) : (
                  <a
                    href={mailHref()}
                    className="text-[color:var(--pink)] underline"
                  >
                    {EMAIL}
                  </a>
                )}
              </li>
            </ul>
          </P>

          <P title="Koje podatke prikupljamo">
            Prikupljamo podatke koje sami pošaljete, uključujući ime i prezime,
            naziv firme, grad, kontakt podatke, linkove koje pošaljete i
            sadržaj poruke.
          </P>

          <P title="Svrha obrade">
            Podatke koristimo kako bismo odgovorili na vaš upit, pripremili
            ponudu, dogovorili poziv i pružili uslugu ako se odlučite za
            suradnju.
          </P>

          <P title="Pravna osnova">
            Obrada se temelji na vašem zahtjevu, komunikaciji prije mogućeg
            ugovora, izvršenju ugovora ako do suradnje dođe i legitimnom
            interesu za osnovnu poslovnu komunikaciju.
          </P>

          <P title="Rok čuvanja">
            Podatke čuvamo onoliko koliko je potrebno za odgovor na upit,
            poslovnu komunikaciju, ugovorne obveze i zakonske obveze.
          </P>

          <P title="Alati trećih strana">
            Za komunikaciju i tehničko funkcioniranje stranice možemo koristiti
            alate trećih strana kao što su email, hosting, analitika,
            formulari i komunikacijski alati.
          </P>

          <P title="Vaša prava">
            Možete zatražiti pristup, ispravak, brisanje ili ograničenje obrade
            svojih podataka u skladu s važećim pravilima zaštite osobnih
            podataka.
          </P>

          <P title="Kontakt za privatnost">
            Za pitanja o privatnosti javite se na{" "}
            {isPlaceholder(EMAIL) ? (
              <Placeholder v={EMAIL} />
            ) : (
              <a href={mailHref()} className="text-[color:var(--pink)] underline">
                {EMAIL}
              </a>
            )}
            .
          </P>
        </div>
      </section>
    </SiteLayout>
  );
}
