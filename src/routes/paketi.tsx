import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { CTAButton, CTAGroup } from "@/components/site/CTA";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import {
  PROCESS_SERVICES,
  WEB_SERVICES,
  COMMON_APPROACH,
  WEB_ALL_INCLUDE,
  SCOPE_DRIVERS,
  WEB_PRICE_DRIVERS,
  PROCESS_EXTENDED,
  WEB_EXTENDED,
  PARTNER_SERVICES,
  SCOPE_BOUNDARIES,
  ENGAGEMENT_TERMS,
  WEB_PAYMENT_TERMS,
  type Service,
} from "@/lib/data";

export const Route = createFileRoute("/paketi")({
  head: () => ({
    meta: [
      {
        title: "Usluge: procesi i web stranice, Sator Digital",
      },
      {
        name: "description",
        content:
          "Procesi: Snimka, Redizajn i Uvođenje. Web: Održavano od 79 EUR mjesečno uz početnu naknadu 990 EUR, ili Vlasništvo od 2.490 EUR. Domena na vaše ime.",
      },
      {
        property: "og:title",
        content: "Usluge: procesi i web stranice, Sator Digital",
      },
      {
        property: "og:description",
        content:
          "Dvije linije usluga: redizajn procesa i digitalizacija, te izrada web stranica s vidljivim cijenama.",
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
      <SectionDivider label="Procesi i digitalizacija" />
      <ServicesList services={PROCESS_SERVICES} lineLabel="Program" />
      <ScopeDrivers />
      <ExtendedBlock
        eyebrow="Prošireni opseg · procesi"
        titleBefore="Dodatne usluge"
        titleAccent="uz procesne programe"
        intro="Radovi u nastavku ne ulaze u standardni opseg Snimke, Redizajna i Uvođenja. Izvode se kao zasebna ponuda prema specifikaciji."
        items={PROCESS_EXTENDED}
        tone="bone"
      />
      <SectionDivider label="Web stranice" />
      <WebAllInclude />
      <ServicesList services={WEB_SERVICES} lineLabel="Paket" startDark />
      <WebPriceDrivers />
      <ExtendedBlock
        eyebrow="Prošireni opseg · web"
        titleBefore="Dodatne usluge"
        titleAccent="izvan standardnog paketa"
        intro="Radovi navedeni u nastavku ne ulaze u standardni opseg paketa Održavano i Vlasništvo. Izvode se kao zasebna ponuda prema specifikaciji i procjeni opsega."
        items={WEB_EXTENDED}
        tone="paper"
      />
      <PartnerServicesSection />
      <WebPaymentTerms />
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
          <span>Usluge · Izdanje 02</span>
          <span className="num">Procesi + Web</span>
        </div>
        <Reveal>
          <h1 className="mt-14 text-5xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.96]">
            Usluge & <span className="text-[color:var(--brand)] font-medium">programi</span>
          </h1>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-xl md:text-2xl leading-relaxed tracking-[-0.01em] text-[color:var(--ink)]/85 font-light">
              Dvije linije. Procesni programi mapiraju i redizajniraju način rada. Web paketi grade i
              vode prezentacijsku stranicu s jasnim cijenama.
            </p>
            <p className="mt-8 text-[16px] leading-relaxed text-[color:var(--ink)]/75 max-w-2xl">
              Možete uzeti samo Snimku, samo Održavano, ili spojiti linije kad digitalizacija i web
              idu zajedno. Opseg dogovaramo pisano prije početka.
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
            Sator Digital ne pozicionira se kao prodavač alata niti najjeftinija IT opcija. Radimo
            redizajn procesa i digitalizaciju, te izradu web stranica kao zasebnu uslugu unutar istog
            studija. AI koristimo uz ljudsku provjeru prije vanjskog korištenja. Za web: definirani
            opseg, domena na vaše ime i podrška prema odabranom paketu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <section className="bg-[color:var(--ink)] text-[color:var(--bone)]">
      <div className="container-wide py-10 md:py-14">
        <Reveal>
          <div className="eyebrow opacity-70 mb-3">Linija usluga</div>
          <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium">{label}</h2>
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
          <span className="eyebrow text-[color:var(--muted-text)]">Zajednički standard · procesi</span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Što je{" "}
                <span className="text-[color:var(--brand)] font-medium">uvijek uključeno</span> u
                procesne programe.
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

function WebAllInclude() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">Zajednički standard · web</span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Zajedničke{" "}
                <span className="text-[color:var(--brand)] font-medium">stavke svih web paketa</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
              {WEB_ALL_INCLUDE.map((i, idx) => (
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

function ServicesList({
  services,
  lineLabel,
  startDark = false,
}: {
  services: Service[];
  lineLabel: string;
  startDark?: boolean;
}) {
  return (
    <section className="bg-[color:var(--bone)]">
      {services.map((s, i) => (
        <ServiceBlock
          key={s.id}
          service={s}
          index={i}
          total={services.length}
          lineLabel={lineLabel}
          isDark={startDark ? i % 2 === 0 : i % 2 === 1}
        />
      ))}
    </section>
  );
}

function ServiceBlock({
  service,
  index,
  total,
  lineLabel,
  isDark,
}: {
  service: Service;
  index: number;
  total: number;
  lineLabel: string;
  isDark: boolean;
}) {
  const boundaryLabel = service.category === "web" ? "Pravila plaćanja" : "Granica opsega";
  const ctaLabel = service.category === "web" ? "Zatraži ponudu" : "Dogovori razgovor";

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
          className={`flex items-baseline justify-between border-b pb-4 mb-14 ${isDark ? "border-[color:var(--bone)]/25" : "border-[color:var(--line)]"}`}
        >
          <span className={`eyebrow ${isDark ? "opacity-70" : "text-[color:var(--muted-text)]"}`}>
            {lineLabel} · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
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
                <div className="eyebrow text-[color:var(--brand)] mb-3">{boundaryLabel}</div>
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
                {ctaLabel}
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
          <span className="eyebrow text-[color:var(--muted-text)]">Što utječe na opseg · procesi</span>
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
                Tri procesna programa pokrivaju tipičan put od snimke do uvođenja. Cijenu dogovaramo
                nakon razgovora. Za širi opseg dogovaramo proširene stavke ili zasebnu ponudu.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebPriceDrivers() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--paper)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">Što utječe na cijenu · web</span>
        </div>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Cijena{" "}
                <span className="text-[color:var(--brand)] font-medium">ovisi o opsegu</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {WEB_PRICE_DRIVERS.map((c) => (
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
                Paketi pokrivaju standardnu web stranicu s jasnim opsegom. Za složenije projekte,
                portale, rezervacijske sustave i internetske trgovine radi se posebna ponuda prema
                opsegu.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExtendedBlock({
  eyebrow,
  titleBefore,
  titleAccent,
  intro,
  items,
  tone,
}: {
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  intro: string;
  items: { title: string; desc: string }[];
  tone: "bone" | "paper";
}) {
  return (
    <section
      className={
        tone === "bone" ? "py-24 md:py-32 bg-[color:var(--bone)]" : "py-24 md:py-32 bg-[color:var(--paper)]"
      }
    >
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">{eyebrow}</span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                {titleBefore}{" "}
                <span className="text-[color:var(--brand)] font-medium">{titleAccent}</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-md">
                {intro}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
              {items.map((s, i) => (
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

function PartnerServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">
            Suradnja s vanjskim stručnjacima · web
          </span>
        </div>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-md">
                Povezujemo vas s{" "}
                <span className="text-[color:var(--brand)] font-medium">provjerenim izvođačima</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-md">
                Za usluge koje ne izvodimo interno, pomažemo u pronalasku stručnjaka i uskladiti
                isporuku njihova rada s opsegom projekta.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7 grid gap-4 md:grid-cols-2">
            {PARTNER_SERVICES.map((s) => (
              <Reveal key={s.title}>
                <div className="border border-[color:var(--line)] p-6 bg-[color:var(--paper)] h-full">
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

function WebPaymentTerms() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--paper)]">
      <div className="container-wide">
        <div className="border-b border-[color:var(--line)] pb-4 mb-14">
          <span className="eyebrow text-[color:var(--muted-text)]">Uvjeti plaćanja · web</span>
        </div>
        <RevealGroup className="border-y border-[color:var(--line)] divide-y divide-[color:var(--line)]">
          {WEB_PAYMENT_TERMS.map((t, i) => (
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

function ScopeBoundariesSection() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--bone)]">
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
                <div className="border border-[color:var(--line)] p-6 bg-[color:var(--paper)] h-full">
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
    <section className="py-24 md:py-32 bg-[color:var(--paper)]">
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
          Koja usluga{" "}
          <span className="text-[color:var(--brand)] font-medium">ima smisla kod vas?</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-[color:var(--bone)]/80">
          Pošaljite kratak opis situacije ili projekta. Predlažemo procesni program, web paket ili
          kombinaciju.
        </p>
        <div className="mt-10">
          <CTAGroup />
        </div>
      </div>
    </section>
  );
}
