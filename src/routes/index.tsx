import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { PackageCard } from "@/components/site/PackageCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTAGroup } from "@/components/site/CTA";
import { StickyProcess } from "@/components/site/StickyProcess";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PACKAGES, FAQ_ITEMS, FAQ_TEASER_KEYS } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Izrada web stranica za obrte i male firme, Split i Hrvatska — Sator Digital" },
      {
        name: "description",
        content:
          "Izrada web stranica za obrte i male firme. Paketi od 79 EUR mjesečno uz početnu naknadu, ili jednokratna izrada od 2.490 EUR. Mobilna optimizacija, kontakt forma, osnovni SEO setup, SSL, hosting i domena na vaše ime.",
      },
      { property: "og:title", content: "Izrada web stranica za obrte i male firme, Split i Hrvatska — Sator Digital" },
      {
        property: "og:description",
        content: "Izrada web stranica za obrte i male firme. Paketi od 79 EUR mjesečno uz početnu naknadu, ili jednokratna izrada od 2.490 EUR. Mobilna optimizacija, kontakt forma, osnovni SEO setup, SSL, hosting i domena na vaše ime.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <OutcomeSection />
      <WhoSection />
      <PackagesPreview />
      <StickyProcess />
      <ProofSection />
      <FAQTeaser />
      <FinalCTA />
    </SiteLayout>
  );
}

function SectionLabel({ title }: { index?: string; title: string }) {
  return (
    <div className="border-b border-[color:var(--line)] pb-4 mb-14">
      <span className="eyebrow text-[color:var(--brand-2)]">{title}</span>
    </div>
  );
}

function ProblemSection() {
  const items = [
    "Ljudi vas pronađu na Google Mapsu, ali onda nemaju gdje jasno vidjeti usluge, cijene, radove i način kontakta.",
    "Facebook i Instagram pomažu, ali nisu zamjena za web stranicu koju vi posjedujete i koju Google može indeksirati.",
    "Kada konkurencija ima urednu stranicu, izgleda ozbiljnije i češće dobije poziv.",
  ];
  return (
    <section className="py-24 md:py-36 bg-[color:var(--bone)]">
      <div className="container-wide">
        <SectionLabel index="01" title="Problem" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02]">
                Imate Google recenzije, ali nemate{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  stranicu koja pretvara
                </span>{" "}
                posjetitelje u upite.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:pt-4">
            <RevealGroup className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
              {items.map((t, i) => (
                <RevealItem key={i}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 py-6">
                    <span className="num text-xs tracking-widest text-[color:var(--muted-text)] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[16px] leading-relaxed text-[color:var(--ink)]/85">
                      {t}
                    </p>
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

function OutcomeSection() {
  return (
    <section className="py-24 md:py-36 bg-[color:var(--paper)]">
      <div className="container-wide">
        <SectionLabel index="02" title="Pristup" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02]">
                Ne prodajemo samo web.{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  Gradimo online prisutnost koja donosi upite.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-xl text-[17px] leading-relaxed text-[color:var(--ink)]/85">
                Radimo brze, jasne i mobilne web stranice za obrte i male firme.
                Cilj je da kupac u deset sekundi shvati tko ste, što nudite i
                kako vas može kontaktirati. Bez kompliciranja, bez tehničkih
                priča i bez prebacivanja posla na vas. Sekundarno pomažemo i s
                grafičkim dizajnom i osnovnom digitalizacijom, ali web je uvijek
                glavni fokus.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder ratio="3/4" index="03" label="Detalj · dizajn" tone="ink" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoSection() {
  const items = [
    "Obrti i male firme s aktivnim poslovanjem",
    "Firme koje imaju Google Maps profil i recenzije, ali nemaju pravu web stranicu",
    "Vlasnici kojima je stranica stara, spora, nejasna ili ne izgleda ozbiljno",
    "Ljudi koji žele da netko preuzme proces od početka do objave",
    "Uslužne djelatnosti, lokalni servisi, turizam, nekretnine, arhitektura i premium usluge",
  ];
  return (
    <section className="py-24 md:py-36 bg-[color:var(--bone)]">
      <div className="container-wide">
        <SectionLabel index="03" title="Za koga radimo" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02]">
                Kome ovo{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  najviše koristi
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
              {items.map((t, i) => (
                <RevealItem key={t}>
                  <div className="grid grid-cols-[auto_1fr] gap-8 py-6">
                    <span className="num text-xs tracking-widest text-[color:var(--muted-text)] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[16px] leading-relaxed">{t}</p>
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

function PackagesPreview() {
  return (
    <section className="py-24 md:py-36 bg-[color:var(--paper)]">
      <div className="container-wide">
        <SectionLabel index="04" title="Paketi" />
        <div className="flex items-end justify-between mb-14 gap-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02] max-w-3xl">
              Dva jasna puta.{" "}
              <span className="text-[color:var(--brand)] font-medium">
                Bez skrivenih stavki.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/paketi"
              className="group inline-flex items-center gap-2 eyebrow text-[color:var(--ink)] whitespace-nowrap"
            >
              Sve pakete{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <PackageCard pkg={PACKAGES[0]} index={0} emphasis="primary" compact />
          <PackageCard pkg={PACKAGES[1]} index={1} emphasis="balanced" compact />
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <PackageFitCard
            title="Kada paket Održavano vrijedi"
            chips={[
              "Mobilna optimizacija",
              "Kontakt forma",
              "Osnovni SEO setup",
              "SSL i hosting",
              "Domena na vaše ime",
              "WhatsApp i Google karta",
              "Redovito održavanje",
              "Podrška bez brige",
            ]}
          />
          <PackageFitCard
            title="Kada paket Vlasništvo vrijedi"
            chips={[
              "Jednokratna izrada",
              "Uredna predaja pristupa",
              "Veći opseg podstranica",
              "Mobilna optimizacija",
              "Kontakt forma",
              "Osnovni SEO setup",
              "Domena na vaše ime",
              "Opcionalno održavanje",
            ]}
          />
        </div>

        <Reveal className="mt-16 border-t border-[color:var(--line)] pt-8 max-w-3xl">
          <div className="eyebrow text-[color:var(--muted-text)] mb-4">
            Napomena o cijeni
          </div>
          <p className="text-[16px] leading-relaxed text-[color:var(--ink)]/85">
            Sator Digital nije najjeftinija opcija na tržištu. Razlika je u
            procesu, jasnoći, vlasništvu, podršci i odgovornosti nakon objave.
            Cilj nije samo da stranica postoji, nego da izgleda ozbiljno, radi
            na mobitelu i vodi posjetitelja prema pozivu, WhatsAppu ili upitu.
            Za složenije projekte radi se posebna ponuda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PackageFitCard({
  title,
  chips,
}: {
  title: string;
  chips: string[];
}) {
  return (
    <Reveal>
      <div className="border border-[color:var(--line)] p-8 bg-[color:var(--bone)] h-full">
        <div className="eyebrow text-[color:var(--muted-text)] mb-6">
          {title}
        </div>
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="text-[12px] tracking-[0.02em] px-3 py-1.5 border border-[color:var(--line)] text-[color:var(--ink)]/85"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ProofSection() {
  const items = [
    {
      d: "tenet.hr",
      t: "Web prisutnost za arhitektonski i projektni kontekst. Primjer prezentacije usluge, strukture i ozbiljnijeg vizualnog dojma.",
      href: "https://tenet.hr",
      idx: "04",
      label: "Arhitektura · Studio",
    },
    {
      d: "rotasestate.com",
      t: "Web prezentacija za nekretninski i turistički projekt. Primjer premium vizualnog smjera i prodajne prezentacije imovine.",
      href: "https://rotasestate.com",
      idx: "05",
      label: "Nekretnine · Turizam",
    },
  ];
  return (
    <section className="py-24 md:py-36 bg-[color:var(--bone)]">
      <div className="container-wide">
        <SectionLabel index="05" title="Odabrani primjeri" />
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          {items.map((p) => (
            <a
              key={p.d}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <ImagePlaceholder
                ratio="4/3"
                index={p.idx}
                label={p.label}
                tone="ink"
              />
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="text-2xl md:text-3xl tracking-[-0.03em] font-medium group-hover:text-[color:var(--brand)] transition-colors">
                  {p.d}
                </h3>
                <span className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[color:var(--ink)]/75">
                {p.t}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQTeaser() {
  const teaser = FAQ_ITEMS.filter((f) => FAQ_TEASER_KEYS.includes(f.q));
  return (
    <section className="py-24 md:py-36 bg-[color:var(--paper)]">
      <div className="container-wide">
        <SectionLabel index="06" title="Česta pitanja" />
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.05]">
                Kratki odgovori{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  bez tehničke buke.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[color:var(--ink)]/75 max-w-sm">
                Ako želite najbrži odgovor, nazovite ili pošaljite WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Link
                to="/faq"
                className="group inline-flex items-center gap-2 eyebrow"
              >
                Sva pitanja{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <FAQAccordion items={teaser} defaultOpen={0} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 md:py-40 bg-[color:var(--ink)] text-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--bone)]/25 pb-4 mb-16">
          <span className="eyebrow opacity-70">Sljedeći korak</span>
        </div>
        <Reveal>
          <h2 className="text-5xl md:text-8xl tracking-[-0.04em] font-medium leading-[0.98] max-w-4xl">
            Želite da vas kupci{" "}
            <span className="text-[color:var(--brand)] font-medium">
              lakše pronađu
            </span>{" "}
            i jave se?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-xl text-lg text-[color:var(--bone)]/80">
            Pošaljite naziv firme, grad i recite imate li web stranicu danas.
            Predložit ćemo najpraktičniji sljedeći korak.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="/kontakt"
              className="group inline-flex items-center gap-3 bg-[color:var(--bone)] text-[color:var(--ink)] px-6 py-4 text-[13px] tracking-[0.14em] uppercase font-semibold hover:bg-[color:var(--brand)] hover:text-[color:var(--bone)] transition-colors"
            >
              <span>Pošalji upit</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <CTAGroup showForm={false} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
