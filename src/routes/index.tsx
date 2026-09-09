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
import { SERVICES, FAQ_ITEMS, FAQ_TEASER_KEYS } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Redizajn procesa i digitalizacija poslovanja, Sator Digital" },
      {
        name: "description",
        content:
          "Mapiramo kako posao teče, redizajniramo operativni model i podržavamo uvođenje novih rutina. AI uz ljudsku provjeru. Hrvatski i engleski, na daljinu i na terenu.",
      },
      {
        property: "og:title",
        content: "Redizajn procesa i digitalizacija poslovanja, Sator Digital",
      },
      {
        property: "og:description",
        content:
          "Mapiramo kako posao teče, redizajniramo operativni model i podržavamo uvođenje novih rutina. AI uz ljudsku provjeru.",
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
      <ServicesPreview />
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
    "Posao se odvija, ali nitko nema jasnu kartu koraka, vlasnika i alata.",
    "Vodstvo pokušava AI alate bez preuređenih rutina, kontrolnih točaka i ljudske provjere prije vanjskog korištenja.",
    "Novi CRM ili sustav uveden je brzo, a tim se vraća na stare navike.",
  ];
  return (
    <section className="py-24 md:py-36 bg-[color:var(--bone)]">
      <div className="container-wide">
        <SectionLabel title="Kontekst" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02]">
                Alati postoje.{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  Proces često ne prati.
                </span>
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
                    <p className="text-[16px] leading-relaxed text-[color:var(--ink)]/85">{t}</p>
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
        <SectionLabel title="Pristup" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02]">
                Operativni model s{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  jasnim koracima i vlasnicima.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-xl text-[17px] leading-relaxed text-[color:var(--ink)]/85">
                Prvo mapiramo kako posao danas teče. Zatim redizajniramo rutine, uskladimo alate i
                digitalne kanale, uključujući izradu ili obnovu web stranice kad to podržava novi
                način rada, i obučimo ljude. AI koristimo kao pomoć u internim radovima, uvijek uz
                ljudsku provjeru prije vanjskog korištenja. Radimo na hrvatskom i engleskom, na
                daljinu i na terenu.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder ratio="3/4" index="03" tone="ink" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoSection() {
  const items = [
    "Profesionalne uslužne firme (pravo, revizija, savjetovanje, inženjering)",
    "Poslovne škole i pružatelji edukacije s zastarjelim digitalnim modelom",
    "Udruge i članice organizacije u kojima volonteri i zaposlenici dijele iste operacije",
    "Srednji operatori (50 do 250 ljudi) koji su narasli brže od procesa",
    "Vodstvo koje traži siguran smjer za AI uz ljudsku provjeru, a ne samo novi alat",
  ];
  return (
    <section className="py-24 md:py-36 bg-[color:var(--bone)]">
      <div className="container-wide">
        <SectionLabel title="Za koga radimo" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02]">
                Za timove koji{" "}
                <span className="text-[color:var(--brand)] font-medium">trebaju red u poslu</span>.
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

function ServicesPreview() {
  return (
    <section className="py-24 md:py-36 bg-[color:var(--paper)]">
      <div className="container-wide">
        <SectionLabel title="Usluge" />
        <div className="flex items-end justify-between mb-14 gap-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-medium leading-[1.02] max-w-3xl">
              Tri programa.{" "}
              <span className="text-[color:var(--brand)] font-medium">
                Jedan smjer: jasniji posao.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/paketi"
              className="group inline-flex items-center gap-2 eyebrow text-[color:var(--ink)] whitespace-nowrap"
            >
              Sve usluge <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <PackageCard pkg={SERVICES[0]} index={0} emphasis="primary" compact />
          <PackageCard pkg={SERVICES[1]} index={1} emphasis="balanced" compact />
          <PackageCard pkg={SERVICES[2]} index={2} compact />
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <ServiceFitCard
            title="Kada Snimka ima smisla"
            chips={[
              "Procesi nisu dokumentirani",
              "Vodstvo traži jasnu sliku prije promjene",
              "Fiksni opseg 2 do 4 tjedna",
              "Prije odabira alata",
              "Uvod u suradnju bez obveze",
            ]}
          />
          <ServiceFitCard
            title="Kada Redizajn ima smisla"
            chips={[
              "Nakon Snimke ili s jasnim procesima",
              "CRM ne odgovara stvarnom poslu",
              "Web stranica treba pratiti novi način rada",
              "Tim je spreman na veće promjene",
              "Višefazni plan s odobrenjima",
              "Operativni model treba preuređenje",
            ]}
          />
        </div>

        <Reveal className="mt-16 border-t border-[color:var(--line)] pt-8 max-w-3xl">
          <div className="eyebrow text-[color:var(--muted-text)] mb-4">Napomena o opsegu</div>
          <p className="text-[16px] leading-relaxed text-[color:var(--ink)]/85">
            Svaki program počinje uvodnim razgovorom. Opseg i sljedeći korak dogovaramo pisano prije
            početka rada. Cijene ne objavljujemo na stranici jer ovise o veličini tima i dubini
            promjene.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceFitCard({ title, chips }: { title: string; chips: string[] }) {
  return (
    <Reveal>
      <div className="border border-[color:var(--line)] p-8 bg-[color:var(--bone)] h-full">
        <div className="eyebrow text-[color:var(--muted-text)] mb-6">{title}</div>
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
      t: "Institucionalni digitalni prijelaz",
      d: "Vođenje organizacijskog redizajna pri prelasku na online isporuku: mapiranje CRM-a, koordinacije s predavačima, operacija s polaznicima i izvještavanja. Obuka tima i podrška klijentima pri usvajanju novih rutina.",
      idx: "04",
      label: "Obrazovanje · Operacije",
    },
    {
      t: "Operativna strategija i automatizacija",
      d: "Dizajn radnih tokova, praktična automatizacija i AI pomoć u internim izvještajima uz ljudsku provjeru. Ponovno slaganje procesa istraživanja, edukacije i administracije u institucionalnom okruženju.",
      idx: "05",
      label: "Institucija · Digitalizacija",
    },
  ];
  return (
    <section className="py-24 md:py-36 bg-[color:var(--bone)]">
      <div className="container-wide">
        <SectionLabel title="Iskustvo pristupa" />
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          {items.map((p) => (
            <div key={p.t} className="block">
              <ImagePlaceholder ratio="4/3" index={p.idx} label={p.label} tone="ink" />
              <div className="mt-6">
                <h3 className="text-2xl md:text-3xl tracking-[-0.03em] font-medium">{p.t}</h3>
              </div>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[color:var(--ink)]/75">
                {p.d}
              </p>
            </div>
          ))}
        </div>
        <Reveal className="mt-12 max-w-2xl">
          <p className="text-[14px] leading-relaxed text-[color:var(--muted-text)]">
            Gornje opisuje pristup i interno iskustvo, ne klijentske studije slučaja niti jamstvo
            rezultata kod vas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FAQTeaser() {
  const teaser = FAQ_ITEMS.filter((f) => FAQ_TEASER_KEYS.includes(f.q));
  return (
    <section className="py-24 md:py-36 bg-[color:var(--paper)]">
      <div className="container-wide">
        <SectionLabel title="Česta pitanja" />
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.05]">
                Odgovori na{" "}
                <span className="text-[color:var(--brand)] font-medium">najčešća pitanja.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[color:var(--ink)]/75 max-w-sm">
                Za pitanja izvan ovog popisa dostupni smo telefonom, e-poštom i WhatsAppom.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Link to="/faq" className="group inline-flex items-center gap-2 eyebrow">
                Sva pitanja{" "}
                <span className="transition-transform group-hover:translate-x-1">→</span>
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
            Spremni posložiti{" "}
            <span className="text-[color:var(--brand)] font-medium">kako se radi?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-xl text-lg text-[color:var(--bone)]/80">
            Pošaljite naziv organizacije, ulogu i što danas koči tim. Vraćamo se s prijedlogom
            uvodnog razgovora.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap gap-3 items-center">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 bg-[color:var(--bone)] text-[color:var(--ink)] px-6 py-4 text-[13px] tracking-[0.14em] uppercase font-semibold hover:bg-[color:var(--brand)] hover:text-[color:var(--bone)] transition-colors"
            >
              <span>Dogovori uvodni razgovor</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <CTAGroup
              showPrimary={false}
              className="[&_a]:text-[color:var(--bone)] [&_a]:border-[color:var(--bone)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
