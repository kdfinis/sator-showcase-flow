import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { CTAButton, CTAGroup } from "@/components/site/CTA";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import {
  PACKAGES,
  ALL_INCLUDE,
  NOT_INCLUDED_GLOBAL,
  type Pkg,
} from "@/lib/data";

export const Route = createFileRoute("/paketi")({
  head: () => ({
    meta: [
      { title: "Paketi i cijene izrade web stranica — Sator Digital" },
      {
        name: "description",
        content:
          "Dva jasna paketa za izradu web stranica za obrte i male firme. Paket Održavano od 79 EUR mjesečno uz početnu naknadu, ili paket Vlasništvo od 2.490 EUR jednokratno. Domena na vaše ime, mobilna optimizacija, osnovni SEO setup.",
      },
      { property: "og:title", content: "Paketi i cijene izrade web stranica — Sator Digital" },
      {
        property: "og:description",
        content:
          "Dva jasna paketa. Vidljiva cijena, jasan opseg, domena na vaše ime.",
      },
    ],
  }),
  component: Paketi,
});

function Paketi() {
  return (
    <SiteLayout>
      <PageHero />
      <PositioningNote />
      <AllPackagesInclude />
      <PackagesList />
      <PriceDrivers />
      <PaymentTerms />
      <BottomCTA />
    </SiteLayout>
  );
}

function PageHero() {
  return (
    <section className="pt-14 md:pt-24 pb-20 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="flex items-baseline justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-text)] pb-8 border-b border-[color:var(--line)]">
          <span>Paketi — Izdanje 01</span>
          <span className="num">Cijene</span>
        </div>
        <Reveal>
          <h1 className="mt-14 text-5xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.96]">
            Paketi &{" "}
            <span className="text-[color:var(--brand)] font-medium">
              cijene
            </span>
          </h1>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-xl md:text-2xl leading-relaxed tracking-[-0.01em] text-[color:var(--ink)]/85 font-light">
              Dva jasna puta. Bez skrivenih stavki. Domena na vaše ime.
            </p>
            <p className="mt-8 text-[16px] leading-relaxed text-[color:var(--ink)]/75 max-w-2xl">
              Ako vam je cilj dobiti više upita i izgledati ozbiljnije na
              Googleu, najvažnije je da web bude jasan, brz i da ima jednostavan
              put do poziva ili poruke. Paketi su složeni tako da odmah znate
              što dobivate, što je dodatno i koji je sljedeći korak.
            </p>
          </Reveal>
          <div className="md:col-span-5">
            <ImagePlaceholder ratio="4/3" index="01" label="Cijenovnik · korice" tone="ink" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PositioningNote() {
  return (
    <section className="py-16 bg-[color:var(--paper)]">
      <div className="container-wide">
        <Reveal className="max-w-3xl">
          <div className="eyebrow text-[color:var(--muted-text)] mb-6">
            Napomena o poziciji
          </div>
          <p className="text-[17px] leading-relaxed text-[color:var(--ink)]/85">
            Sator Digital nije najjeftinija opcija na tržištu. Jeftina web
            stranica može izgledati privlačno na početku, ali problem nastaje
            kod strukture, sadržaja, vlasništva, podrške i odgovornosti nakon
            objave. Ovdje plaćate jasnu isporuku, uređen proces i web koji je
            napravljen da pomogne klijentu da vas kontaktira.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function AllPackagesInclude() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">
            Zajednički standard
          </span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Osnove koje{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  uvijek dobivate
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 grid gap-12 md:grid-cols-2">
            <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
              {ALL_INCLUDE.map((i, idx) => (
                <RevealItem key={i}>
                  <div className="grid grid-cols-[auto_1fr] gap-4 py-3.5">
                    <span className="num text-[10px] tracking-widest text-[color:var(--muted-text)] pt-1.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] leading-relaxed">{i}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            <div>
              <div className="eyebrow text-[color:var(--muted-text)] mb-4">
                Nije uključeno osim ako je navedeno
              </div>
              <RevealGroup className="space-y-2">
                {NOT_INCLUDED_GLOBAL.map((i) => (
                  <RevealItem key={i}>
                    <div className="text-[14px] leading-relaxed text-[color:var(--ink)]/60 line-through decoration-[color:var(--line)]">
                      {i}
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackagesList() {
  return (
    <section className="bg-[color:var(--bone)]">
      {PACKAGES.map((p, i) => (
        <PackageBlock key={p.id} pkg={p} index={i} />
      ))}
    </section>
  );
}

function PackageBlock({ pkg, index }: { pkg: Pkg; index: number }) {
  const isDark = index % 2 === 1;
  return (
    <div
      id={pkg.id}
      className={
        isDark
          ? "bg-[color:var(--ink)] text-[color:var(--bone)]"
          : "bg-[color:var(--paper)] text-[color:var(--ink)]"
      }
    >
      <div className="container-wide py-24 md:py-36">
        <div
          className={`border-b pb-4 mb-14 ${isDark ? "border-[color:var(--bone)]/25" : "border-[color:var(--line)]"}`}
        >
          <span className={`eyebrow ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}>
            Paket · {String(index + 1).padStart(2, "0")} / 02
          </span>
          <span className={`num text-xs ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}>
            {pkg.priceShort}
          </span>
        </div>

        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-6xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.95]">
                {pkg.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className={`mt-8 text-lg font-medium ${isDark ? "text-[color:var(--bone)]/85" : "text-[color:var(--ink)]/85"}`}
              >
                {pkg.priceHome}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className={`mt-6 text-[16px] leading-relaxed max-w-md ${isDark ? "text-[color:var(--bone)]/75" : "text-[color:var(--ink)]/80"}`}
              >
                {pkg.bestFor}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ImagePlaceholder
                className="mt-10"
                ratio="3/2"
                index={String(index + 1).padStart(2, "0")}
                label={pkg.name}
                tone={isDark ? "bone" : "ink"}
              />
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className={`eyebrow mb-6 ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}>
              Uključeno
            </div>
            <ul
              className={`border-y ${isDark ? "border-[color:var(--bone)]/20 divide-[color:var(--bone)]/15" : "border-[color:var(--line)] divide-[color:var(--line)]"} divide-y`}
            >
              {pkg.includes.map((i, idx) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-6 py-3.5">
                  <span
                    className={`num text-[10px] tracking-widest pt-1.5 ${isDark ? "opacity-60" : "text-[color:var(--muted-text)]"}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed">{i}</span>
                </li>
              ))}
            </ul>

            {pkg.extras?.map((ex) => (
              <div key={ex.label} className="mt-10">
                <div className={`eyebrow mb-4 ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}>
                  {ex.label}
                </div>
                <ul
                  className={`border-y ${isDark ? "border-[color:var(--bone)]/20 divide-[color:var(--bone)]/15" : "border-[color:var(--line)] divide-[color:var(--line)]"} divide-y`}
                >
                  {ex.items.map((it, idx) => (
                    <li key={it} className="grid grid-cols-[auto_1fr] gap-6 py-3.5">
                      <span className={`num text-[10px] tracking-widest pt-1.5 ${isDark ? "opacity-60" : "text-[color:var(--muted-text)]"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px]">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {pkg.notIncluded && (
              <div className="mt-10">
                <div className={`eyebrow mb-4 ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}>
                  Nije uključeno
                </div>
                <ul className="space-y-2">
                  {pkg.notIncluded.map((it) => (
                    <li
                      key={it}
                      className={`text-[14px] line-through ${isDark ? "text-[color:var(--bone)]/50 decoration-[color:var(--bone)]/20" : "text-[color:var(--ink)]/55 decoration-[color:var(--line)]"}`}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {pkg.policy && (
              <div className={`mt-10 border-l-2 border-[color:var(--brand)] pl-6 py-2`}>
                <div className="eyebrow text-[color:var(--brand)] mb-3">
                  Pravila plaćanja
                </div>
                <p className={`text-[14px] leading-relaxed ${isDark ? "text-[color:var(--bone)]/85" : "text-[color:var(--ink)]/85"} max-w-2xl`}>
                  {pkg.policy}
                </p>
              </div>
            )}

            {pkg.handoff && (
              <div className={`mt-10 border-l-2 border-[color:var(--brand)] pl-6 py-2`}>
                <div className="eyebrow text-[color:var(--brand)] mb-3">
                  Predaja
                </div>
                <p className={`text-[14px] leading-relaxed ${isDark ? "text-[color:var(--bone)]/85" : "text-[color:var(--ink)]/85"} max-w-2xl`}>
                  {pkg.handoff}
                </p>
              </div>
            )}

            <div className="mt-12">
              <CTAButton
                to="/kontakt"
                variant={isDark ? "secondary" : "primary"}
                className={
                  isDark
                    ? "border-[color:var(--bone)] text-[color:var(--bone)] hover:bg-[color:var(--bone)] hover:text-[color:var(--ink)]"
                    : ""
                }
              >
                Zatraži {pkg.name}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentTerms() {
  const terms = [
    "Paket Održavano pokreće se nakon uplate početne naknade. Mjesečna naknada počinje prema dogovorenom datumu i traje najmanje 12 mjeseci.",
    "Paket Vlasništvo plaća se u dvije faze: 50 posto prije početka rada i 50 posto prije objave ili predaje.",
    "Rokovi ovise o tome da klijent na vrijeme dostavi materijale i povratne informacije. Ako materijali kasne, pomiče se i rok objave.",
  ];
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">
            Uvjeti plaćanja
          </span>
        </div>
        <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
          {terms.map((t, i) => (
            <RevealItem key={t}>
              <div className="grid grid-cols-[auto_1fr] gap-8 py-6">
                <span className="num text-xs tracking-widest text-[color:var(--muted-text)] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] leading-relaxed max-w-3xl">{t}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--ink)] text-[color:var(--bone)]">
      <div className="container-wide">
        <div className="eyebrow opacity-70 mb-10">Sljedeći korak</div>
        <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium max-w-3xl">
          Niste sigurni koji paket?{" "}
          <span className="text-[color:var(--brand)] font-medium">
            Javite se.
          </span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-[color:var(--bone)]/80">
          Nazovite ili pošaljite kratku poruku, javimo se s prijedlogom.
        </p>
        <div className="mt-10">
          <CTAGroup />
        </div>
      </div>
    </section>
  );
}
