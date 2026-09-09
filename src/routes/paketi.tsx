import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { CTAButton, CTAGroup } from "@/components/site/CTA";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import {
  SERVICES,
  COMMON_APPROACH,
  SCOPE_DRIVERS,
  EXTENDED_SERVICES,
  SCOPE_BOUNDARIES,
  ENGAGEMENT_TERMS,
  type Service,
} from "@/lib/data";

export const Route = createFileRoute("/paketi")({
  head: () => ({
    meta: [
      { title: "Usluge redizajna procesa i digitalizacije, Sator Digital" },
      {
        name: "description",
        content:
          "Tri programa: Snimka (otkrivanje procesa), Redizajn (operativni model i alati) i Uvođenje (AI prijelaz uz ljudsku provjeru i podršku timu).",
      },
      { property: "og:title", content: "Usluge redizajna procesa i digitalizacije, Sator Digital" },
      {
        property: "og:description",
        content: "Snimka, Redizajn i Uvođenje. Jasni programi bez objavljenih cijena na stranici.",
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
      <CommonApproach />
      <ServicesList />
      <ScopeDrivers />
      <ExtendedServicesSection />
      <ScopeBoundariesSection />
      <EngagementTerms />
      <BottomCTA />
    </SiteLayout>
  );
}

function PageHero() {
  return (
    <section className="pt-14 md:pt-24 pb-20 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="flex items-baseline justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-text)] pb-8 border-b border-[color:var(--line)]">
          <span>Usluge · Izdanje 01</span>
          <span className="num">Programi</span>
        </div>
        <Reveal>
          <h1 className="mt-14 text-5xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.96]">
            Usluge & <span className="text-[color:var(--brand)] font-medium">programi</span>
          </h1>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-xl md:text-2xl leading-relaxed tracking-[-0.01em] text-[color:var(--ink)]/85 font-light">
              Tri jasna programa. Snimka mapira postojeće stanje. Redizajn preuređuje model rada.
              Uvođenje podržava tim i AI prijelaz uz ljudsku provjeru.
            </p>
            <p className="mt-8 text-[16px] leading-relaxed text-[color:var(--ink)]/75 max-w-2xl">
              Svaki program počinje uvodnim razgovorom. Opseg i cijena dogovaramo pisano prije
              početka rada.
            </p>
          </Reveal>
          <div className="md:col-span-5">
            <ImagePlaceholder ratio="4/3" index="01" tone="ink" />
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
          <div className="eyebrow text-[color:var(--muted-text)] mb-6">Napomena o poziciji</div>
          <p className="text-[17px] leading-relaxed text-[color:var(--ink)]/85">
            Sator Digital ne pozicionira se kao prodavač alata niti jeftina IT opcija. Radimo kao
            praktični savjetnici za redizajn procesa: prvo mapiramo posao, zatim uskladimo alate,
            digitalne kanale (uključujući web stranicu kad treba) i obučimo ljude. AI koristimo uz
            ljudsku provjeru prije vanjskog korištenja.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CommonApproach() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">Zajednički standard</span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Što je{" "}
                <span className="text-[color:var(--brand)] font-medium">uvijek uključeno</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
              {COMMON_APPROACH.map((i, idx) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesList() {
  return (
    <section className="bg-[color:var(--bone)]">
      {SERVICES.map((s, i) => (
        <ServiceBlock key={s.id} service={s} index={i} />
      ))}
    </section>
  );
}

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const isDark = index % 2 === 1;
  return (
    <div
      id={service.id}
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
            Program · {String(index + 1).padStart(2, "0")} / 03
          </span>
          <span
            className={`num text-xs ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}
          >
            {service.shapeShort}
          </span>
        </div>

        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-6xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.95]">
                {service.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className={`mt-8 text-lg font-medium ${isDark ? "text-[color:var(--bone)]/85" : "text-[color:var(--ink)]/85"}`}
              >
                {service.shapeLong}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className={`mt-6 text-[16px] leading-relaxed max-w-md ${isDark ? "text-[color:var(--bone)]/75" : "text-[color:var(--ink)]/80"}`}
              >
                {service.bestFor}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ImagePlaceholder
                className="mt-10"
                ratio="3/2"
                index={String(index + 1).padStart(2, "0")}
                label={service.name}
                tone={isDark ? "bone" : "ink"}
              />
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div
              className={`eyebrow mb-6 ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}
            >
              Uključeno
            </div>
            <ul
              className={`border-y ${isDark ? "border-[color:var(--bone)]/20 divide-[color:var(--bone)]/15" : "border-[color:var(--line)] divide-[color:var(--line)]"} divide-y`}
            >
              {service.includes.map((i, idx) => (
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

            {service.extras?.map((ex) => (
              <div key={ex.label} className="mt-10">
                <div
                  className={`eyebrow mb-4 ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}
                >
                  {ex.label}
                </div>
                <ul
                  className={`border-y ${isDark ? "border-[color:var(--bone)]/20 divide-[color:var(--bone)]/15" : "border-[color:var(--line)] divide-[color:var(--line)]"} divide-y`}
                >
                  {ex.items.map((it, idx) => (
                    <li key={it} className="grid grid-cols-[auto_1fr] gap-6 py-3.5">
                      <span
                        className={`num text-[10px] tracking-widest pt-1.5 ${isDark ? "opacity-60" : "text-[color:var(--muted-text)]"}`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px]">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {service.boundary && (
              <div className="mt-10 border-l-2 border-[color:var(--brand)] pl-6 py-2">
                <div className="eyebrow text-[color:var(--brand)] mb-3">Granica opsega</div>
                <p
                  className={`text-[14px] leading-relaxed ${isDark ? "text-[color:var(--bone)]/85" : "text-[color:var(--ink)]/85"} max-w-2xl`}
                >
                  {service.boundary}
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
                Dogovori razgovor
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScopeDrivers() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--paper)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">Što utječe na opseg</span>
        </div>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Opseg{" "}
                <span className="text-[color:var(--brand)] font-medium">ovisi o situaciji</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {SCOPE_DRIVERS.map((c) => (
                  <span
                    key={c}
                    className="text-[13px] tracking-[0.02em] px-3 py-2 border border-[color:var(--line)] text-[color:var(--ink)]/85 bg-[color:var(--bone)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-2xl">
                Tri glavna programa pokrivaju tipičan put od snimke do uvođenja. Za širi opseg
                dogovaramo proširene stavke ili zasebnu ponudu bez objavljenih cijena na stranici.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExtendedServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">
            Prošireni opseg · zasebna ponuda
          </span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Dodatne usluge{" "}
                <span className="text-[color:var(--brand)] font-medium">izvan tri programa</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-md">
                Radovi u nastavku ne ulaze u standardni opseg Snimke, Redizajna i Uvođenja. Izvode
                se kao zasebna ponuda prema specifikaciji.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
              {EXTENDED_SERVICES.map((s, i) => (
                <RevealItem key={s.title}>
                  <div className="grid grid-cols-[auto_1fr] gap-8 py-6">
                    <span className="num text-xs tracking-widest text-[color:var(--muted-text)] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-[17px] tracking-[-0.01em] font-medium">{s.title}</div>
                      <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--ink)]/75 max-w-xl">
                        {s.desc}
                      </p>
                    </div>
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

function ScopeBoundariesSection() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--paper)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">Granice opsega</span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Što <span className="text-[color:var(--brand)] font-medium">ne radimo</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-md">
                Granice su namjerno jasne kako biste znali što možete očekivati i što tražiti
                drugdje.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7 grid gap-4 md:grid-cols-2">
            {SCOPE_BOUNDARIES.map((s) => (
              <Reveal key={s.title}>
                <div className="border border-[color:var(--line)] p-6 bg-[color:var(--bone)] h-full">
                  <div className="text-[16px] tracking-[-0.01em] font-medium">{s.title}</div>
                  <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink)]/75">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EngagementTerms() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">Kako se ugovara</span>
        </div>
        <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
          {ENGAGEMENT_TERMS.map((t, i) => (
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
          Koji program{" "}
          <span className="text-[color:var(--brand)] font-medium">ima smisla kod vas?</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-[color:var(--bone)]/80">
          Pošaljite kratak opis situacije ili nazovite. Predlažemo uvodni razgovor i sljedeće
          korake.
        </p>
        <div className="mt-10">
          <CTAGroup />
        </div>
      </div>
    </section>
  );
}
