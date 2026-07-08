import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Check, X, PackageOpen } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { CTAButton, CTAGroup } from "@/components/site/CTA";
import {
  PACKAGES,
  ALL_INCLUDE,
  NOT_INCLUDED_GLOBAL,
  type Pkg,
} from "@/lib/data";

export const Route = createFileRoute("/paketi")({
  head: () => ({
    meta: [
      { title: "Paketi i cijene, Sator Digital" },
      {
        name: "description",
        content:
          "Tri jasna paketa za izradu web stranice. Managed mjesečno, Owner jednokratno i Independence premium predaja. Domena na vaše ime i jasna cijena.",
      },
      { property: "og:title", content: "Paketi i cijene, Sator Digital" },
      {
        property: "og:description",
        content:
          "Tri jasna paketa za izradu web stranice. Domena na vaše ime i jasna cijena.",
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
      <PaymentTerms />
      <BottomCTA />
    </SiteLayout>
  );
}

function PageHero() {
  return (
    <section
      className="relative pt-16 md:pt-24 pb-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#ffffff,#fff3f8)" }}
    >
      <div className="blob w-[400px] h-[400px] -top-24 -left-24 bg-[color:var(--pale-pink)]" />
      <div className="container-x relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-blush)] bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--plum)]/80">
            <PackageOpen className="h-3.5 w-3.5 text-[color:var(--pink)]" />
            Paketi
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Paketi i <span className="text-gradient-pink">cijene</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-lg text-[color:var(--plum)]/75">
            Tri jasna puta. Bez skrivenih stavki. Domena na vaše ime.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[color:var(--plum)]/80">
            Ako vam je cilj dobiti više upita i izgledati ozbiljnije na
            Googleu, najvažnije je da web bude jasan, brz i da ima jednostavan
            put do poziva ili poruke. Paketi su složeni tako da odmah znate što
            dobivate, što je dodatno i koji je sljedeći korak.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PositioningNote() {
  return (
    <section className="py-12 bg-white">
      <div className="container-x">
        <Reveal className="rounded-[20px] border border-[color:var(--border-blush)] bg-[color:var(--card-tint)] p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-[color:var(--plum)]/85">
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
    <section
      className="py-16 md:py-20"
      style={{ background: "linear-gradient(180deg,#ffffff,#fff8fb)" }}
    >
      <div className="container-x">
        <Reveal className="max-w-2xl mb-8">
          <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
            Svi paketi uključuju
          </div>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Osnove koje{" "}
            <span className="text-gradient-pink">uvijek dobivate</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10">
          <RevealGroup className="grid sm:grid-cols-2 gap-2.5">
            {ALL_INCLUDE.map((i) => (
              <RevealItem key={i}>
                <div className="flex gap-2.5 rounded-xl bg-white border border-[color:var(--border-blush)] px-4 py-3">
                  <Check className="h-4 w-4 mt-0.5 flex-none text-[color:var(--pink)]" />
                  <span className="text-sm text-[color:var(--plum)]/90">
                    {i}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--mauve)] mb-3">
              Nije uključeno osim ako je navedeno
            </div>
            <RevealGroup className="space-y-2">
              {NOT_INCLUDED_GLOBAL.map((i) => (
                <RevealItem key={i}>
                  <div className="flex gap-2.5 items-start">
                    <X className="h-4 w-4 mt-0.5 flex-none text-[color:var(--mauve)]" />
                    <span className="text-sm text-[color:var(--plum)]/70">
                      {i}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackagesList() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-x space-y-16">
        {PACKAGES.map((p, i) => (
          <PackageBlock key={p.id} pkg={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function PackageBlock({ pkg, index }: { pkg: Pkg; index: number }) {
  const isBalanced = pkg.id === "owner";
  return (
    <div id={pkg.id}>
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
              Paket {String(index + 1).padStart(2, "0")}
            </div>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
              {pkg.name}
              {isBalanced && (
                <span className="ml-3 align-middle inline-flex items-center rounded-full bg-[color:var(--pink)] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                  Balansirano
                </span>
              )}
            </h2>
          </div>
          <div className="text-[color:var(--pink)] text-lg font-bold">
            {pkg.priceHome}
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-[color:var(--plum)]/80">
          {pkg.bestFor}
        </p>
      </Reveal>

      <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <TiltCard>
          <div className="h-full rounded-[20px] border border-[color:var(--border-blush)] bg-white p-6 md:p-8">
            <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)] mb-4">
              Uključeno
            </div>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {pkg.includes.map((i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[15px] text-[color:var(--plum)]/90"
                >
                  <Check className="h-4 w-4 mt-0.5 flex-none text-[color:var(--pink)]" />
                  {i}
                </li>
              ))}
            </ul>

            {pkg.extras?.map((ex) => (
              <div key={ex.label} className="mt-6">
                <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)] mb-3">
                  {ex.label}
                </div>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {ex.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-2.5 text-[15px] text-[color:var(--plum)]/90"
                    >
                      <Check className="h-4 w-4 mt-0.5 flex-none text-[color:var(--pink)]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {pkg.notIncluded && (
              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--mauve)] mb-3">
                  Nije uključeno
                </div>
                <ul className="space-y-1.5">
                  {pkg.notIncluded.map((it) => (
                    <li
                      key={it}
                      className="flex gap-2.5 text-sm text-[color:var(--plum)]/70"
                    >
                      <X className="h-4 w-4 mt-0.5 flex-none text-[color:var(--mauve)]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </TiltCard>

        <div className="space-y-4">
          {pkg.policy && (
            <div className="rounded-[20px] border-2 border-[color:var(--pink)]/40 bg-[color:var(--blush)] p-6">
              <div className="flex items-center gap-2 text-[color:var(--pink)] font-bold text-sm uppercase tracking-widest">
                <AlertTriangle className="h-4 w-4" /> Pravila plaćanja
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--plum)]/90">
                {pkg.policy}
              </p>
            </div>
          )}
          {pkg.handoff && (
            <div className="rounded-[20px] border border-[color:var(--border-blush)] bg-[color:var(--card-tint)] p-6">
              <div className="text-[color:var(--pink)] font-bold text-sm uppercase tracking-widest">
                Predaja
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--plum)]/90">
                {pkg.handoff}
              </p>
            </div>
          )}
          <div className="rounded-[20px] bg-[color:var(--plum)] text-white p-6">
            <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
              Sljedeći korak
            </div>
            <p className="mt-2 text-sm text-white/80">
              Pošaljite naziv firme i grad. Predložit ćemo najpraktičniji
              sljedeći korak.
            </p>
            <div className="mt-4">
              <CTAButton to="/kontakt" variant="primary" className="w-full">
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
    "Managed se pokreće nakon uplate setup iznosa. Mjesečna naknada počinje prema dogovorenom datumu i traje najmanje 12 mjeseci.",
    "Owner se plaća u dvije faze: 50 posto prije početka rada i 50 posto prije objave ili predaje.",
    "Independence se plaća u tri faze: 50 posto prije početka, 30 posto nakon odobrenog smjera, 20 posto prije finalne predaje.",
    "Rokovi ovise o tome da klijent na vrijeme dostavi materijale i feedback. Ako materijali kasne, pomiče se i rok objave.",
  ];
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "linear-gradient(180deg,#ffffff,#fff3f8)" }}
    >
      <div className="container-x">
        <Reveal className="max-w-2xl mb-8">
          <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
            Uvjeti plaćanja
          </div>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Jasno i <span className="text-gradient-pink">bez iznenađenja</span>
          </h2>
        </Reveal>
        <RevealGroup className="grid md:grid-cols-2 gap-4">
          {terms.map((t) => (
            <RevealItem key={t}>
              <div className="rounded-[20px] bg-white border border-[color:var(--border-blush)] p-6 h-full">
                <p className="text-[15px] leading-relaxed text-[color:var(--plum)]/85">
                  {t}
                </p>
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container-x">
        <div className="rounded-[28px] p-8 md:p-12 bg-[color:var(--pale-pink)] border border-[color:var(--border-blush)] text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[color:var(--plum)]">
              Niste sigurni koji paket?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl mx-auto text-[color:var(--plum)]/75">
              Nazovite ili pošaljite kratku poruku, javimo se s prijedlogom.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex justify-center">
            <CTAGroup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
