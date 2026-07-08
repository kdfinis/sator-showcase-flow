import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Search,
  MessageCircle,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { PackageCard } from "@/components/site/PackageCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTAGroup } from "@/components/site/CTA";
import { StickyProcess } from "@/components/site/StickyProcess";
import { TiltCard } from "@/components/site/TiltCard";
import { PACKAGES, FAQ_ITEMS, FAQ_TEASER_KEYS } from "@/lib/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sator Digital, web stranice za obrte u Hrvatskoj i BiH",
      },
      {
        name: "description",
        content:
          "Web stranice za lokalne firme koje žele više upita s Googlea. Demo smjera prije finalne odluke, domena na vaše ime, jasna cijena i prvi preview za tjedan dana.",
      },
      { property: "og:title", content: "Sator Digital, web stranice za obrte u Hrvatskoj i BiH" },
      {
        property: "og:description",
        content:
          "Web stranice za lokalne firme koje žele više upita s Googlea.",
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
      <FoldSection />
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

/** Section "fold" — previous section tilts away on scroll. */
function FoldSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -6]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section className="relative py-4 perspective-1200">
      <motion.div
        ref={ref}
        style={reduced ? undefined : { rotateX, y, transformOrigin: "top center" }}
        className="container-x"
      >
        <div className="rounded-[28px] bg-[color:var(--plum)] text-white p-8 md:p-12 shadow-[0_40px_80px_-40px_rgba(42,16,35,0.55)]">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
                Sator Digital
              </div>
              <h2 className="mt-3 text-2xl md:text-4xl font-extrabold leading-tight">
                Ne prodajemo samo web.{" "}
                <span className="text-[color:var(--pink)]">
                  Gradimo online prisutnost koja donosi upite.
                </span>
              </h2>
            </div>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Radimo brze, jasne i mobilne web stranice za obrte i male firme.
              Cilj je da kupac u deset sekundi shvati tko ste, što nudite i
              kako vas može kontaktirati. Bez kompliciranja, bez tehničkih
              priča i bez prebacivanja posla na vas.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    "Ljudi vas pronađu na Google Mapsu, ali onda nemaju gdje jasno vidjeti usluge, cijene, radove i način kontakta.",
    "Facebook i Instagram pomažu, ali nisu zamjena za web stranicu koju vi posjedujete i koju Google može indeksirati.",
    "Kada konkurencija ima urednu stranicu, izgleda ozbiljnije i češće dobije poziv.",
  ];
  const icons = [MapPin, Search, MessageCircle];
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg,#ffffff,#fff3f8)" }}
    >
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
            Problem
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Imate Google recenzije, ali nemate{" "}
            <span className="text-gradient-pink">stranicu koja pretvara</span>{" "}
            posjetitelje u upite
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 grid md:grid-cols-3 gap-4">
          {items.map((t, i) => {
            const Icon = icons[i];
            return (
              <RevealItem key={i}>
                <TiltCard>
                  <div className="h-full rounded-[20px] bg-white border border-[color:var(--border-blush)] p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--blush)] text-[color:var(--pink)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--plum)]/85">
                      {t}
                    </p>
                  </div>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

function OutcomeSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <Reveal>
          <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
            Što radimo
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Ne prodajemo samo web.{" "}
            <span className="text-gradient-pink">
              Gradimo online prisutnost koja donosi upite.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-[color:var(--plum)]/80">
            Radimo brze, jasne i mobilne web stranice za obrte i male firme.
            Cilj je da kupac u deset sekundi shvati tko ste, što nudite i kako
            vas može kontaktirati. Bez kompliciranja, bez tehničkih priča i bez
            prebacivanja posla na vas. Sekundarno pomažemo i s grafičkim
            dizajnom i osnovnom digitalizacijom, ali web je uvijek glavni
            fokus.
          </p>
        </Reveal>
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
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg,#fff3f8,#fce4f0)" }}
    >
      <div className="container-x">
        <Reveal className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
            Za koga radimo
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Kome ovo{" "}
            <span className="text-gradient-pink">najviše koristi</span>
          </h2>
        </Reveal>
        <RevealGroup className="grid md:grid-cols-2 gap-3">
          {items.map((t) => (
            <RevealItem key={t}>
              <div className="flex gap-3 rounded-2xl bg-white border border-[color:var(--border-blush)] p-5">
                <div className="mt-0.5 h-5 w-5 flex-none rounded-full bg-[color:var(--pink)] text-white flex items-center justify-center">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <p className="text-[15px] leading-relaxed text-[color:var(--plum)]/90">
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

function PackagesPreview() {
  // Emphasize Managed and Owner on home.
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
              Paketi
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
              Tri jasna puta.{" "}
              <span className="text-gradient-pink">Bez skrivenih stavki.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/paketi"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--pink)] hover:text-[color:var(--pink-hover)]"
            >
              Pogledaj sve pakete <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <PackageCard pkg={PACKAGES[0]} emphasis="primary" compact />
          <PackageCard pkg={PACKAGES[1]} emphasis="primary" compact />
          <PackageCard pkg={PACKAGES[2]} emphasis="normal" compact />
        </div>

        <Reveal className="mt-10 rounded-[20px] bg-[color:var(--blush)] border border-[color:var(--border-blush)] p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-[color:var(--plum)]/85">
            Na tržištu postoje vrlo jeftine web stranice. Sator Digital nije
            najjeftinija opcija. Razlika je u procesu, jasnoći, vlasništvu,
            podršci i odgovornosti nakon objave. Cilj nije samo da stranica
            postoji, nego da izgleda ozbiljno, radi na mobitelu i vodi
            posjetitelja prema pozivu, WhatsAppu ili upitu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProofSection() {
  const items = [
    {
      d: "tenet.hr",
      t: "Web prisutnost za arhitektonski i projektni kontekst. Primjer prezentacije usluge, strukture i ozbiljnijeg vizualnog dojma.",
      href: "https://tenet.hr",
    },
    {
      d: "rotasestate.com",
      t: "Web prezentacija za nekretninski i turistički projekt. Primjer premium vizualnog smjera i prodajne prezentacije imovine.",
      href: "https://rotasestate.com",
    },
  ];
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg,#ffffff,#fff8fb)" }}
    >
      <div className="container-x">
        <Reveal className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
            Odabrani primjeri
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Rad koji{" "}
            <span className="text-gradient-pink">govori sam za sebe</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((p) => (
            <TiltCard key={p.d}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-[20px] bg-white border border-[color:var(--border-blush)] p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xl font-bold text-[color:var(--plum)] group-hover:text-[color:var(--pink)] transition">
                    {p.d}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[color:var(--pink)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--plum)]/75">
                  {p.t}
                </p>
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQTeaser() {
  const teaser = FAQ_ITEMS.filter((f) => FAQ_TEASER_KEYS.includes(f.q));
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg,#fff8fb,#fce4f0)" }}
    >
      <div className="container-x grid md:grid-cols-[0.9fr_1.3fr] gap-10 items-start">
        <Reveal>
          <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
            Česta pitanja
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-[color:var(--plum)]">
            Kratki odgovori{" "}
            <span className="text-gradient-pink">bez tehničke buke</span>
          </h2>
          <p className="mt-4 text-[color:var(--plum)]/75">
            Ako želite najbrži odgovor, nazovite ili pošaljite WhatsApp.
          </p>
          <div className="mt-6">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--pink)]"
            >
              Sva pitanja <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQAccordion items={teaser} defaultOpen={0} />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-[28px] p-8 md:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, #fce4f0 0%, #ffffff 60%, #fff3f8 100%)",
            border: "1px solid var(--border-blush)",
          }}
        >
          <div className="blob w-[420px] h-[420px] -top-32 -right-32 bg-[#ffc9de]" />
          <div className="relative">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)] max-w-3xl mx-auto">
                Želite da vas kupci lakše pronađu i{" "}
                <span className="text-gradient-pink">jave se?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl mx-auto text-[color:var(--plum)]/75 text-lg">
                Pošaljite naziv firme, grad i recite imate li web stranicu
                danas. Predložit ćemo najpraktičniji sljedeći korak.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex justify-center">
              <CTAGroup />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
