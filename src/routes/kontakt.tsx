import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { ContactForm } from "@/components/site/ContactForm";
import {
  PHONE_DISPLAY,
  WHATSAPP_URL,
  EMAIL,
  telHref,
  waHref,
  mailHref,
  isPlaceholder,
} from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt, Sator Digital" },
      {
        name: "description",
        content:
          "Nazovite, pošaljite WhatsApp ili pošaljite upit za izradu web stranice za lokalnu firmu, obrt ili uslužni posao.",
      },
      { property: "og:title", content: "Kontakt, Sator Digital" },
      {
        property: "og:description",
        content:
          "Nazovite, pošaljite WhatsApp ili pošaljite upit za izradu web stranice.",
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const cards = [
    {
      icon: Phone,
      label: "Telefon",
      value: PHONE_DISPLAY,
      href: telHref(),
      accent: true,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: WHATSAPP_URL,
      href: waHref(),
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: mailHref(),
    },
  ];

  return (
    <SiteLayout>
      <section
        className="pt-16 md:pt-24 pb-14 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#ffffff,#fff3f8)" }}
      >
        <div className="blob w-[380px] h-[380px] -top-20 -right-20 bg-[color:var(--pale-pink)]" />
        <div className="container-x relative">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[color:var(--plum)]">
              <span className="text-gradient-pink">Kontakt</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-[color:var(--plum)]/75">
              Najbrže je nazvati ili poslati WhatsApp. Ako vam je lakše,
              pošaljite upit kroz formu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container-x grid md:grid-cols-3 gap-4">
          {cards.map((c) => {
            const Icon = c.icon;
            const disabled = isPlaceholder(c.value);
            return (
              <TiltCard key={c.label}>
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`group flex items-center gap-4 h-full rounded-[20px] p-6 border transition ${
                    c.accent
                      ? "bg-[color:var(--pink)] text-white border-[color:var(--pink)]"
                      : "bg-white border-[color:var(--border-blush)] text-[color:var(--plum)] hover:border-[color:var(--pink)]"
                  } ${disabled ? "pointer-events-none opacity-90" : ""}`}
                >
                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                      c.accent
                        ? "bg-white/15"
                        : "bg-[color:var(--blush)] text-[color:var(--pink)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div
                      className={`text-xs font-bold uppercase tracking-widest ${
                        c.accent ? "text-white/80" : "text-[color:var(--pink)]"
                      }`}
                    >
                      {c.label}
                    </div>
                    <div className="text-[15px] font-semibold break-all">
                      {c.value}
                    </div>
                  </div>
                </a>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(180deg,#ffffff,#fff8fb)" }}
      >
        <div className="container-x grid lg:grid-cols-[0.9fr_1.4fr] gap-10">
          <Reveal>
            <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
              Što slijedi
            </div>
            <h2 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-[color:var(--plum)]">
              Pregledamo poruku i{" "}
              <span className="text-gradient-pink">javimo se</span>
            </h2>
            <p className="mt-4 text-[color:var(--plum)]/80 leading-relaxed">
              Pregledamo poruku i javimo se s nekoliko kratkih pitanja ili
              prijedlogom za kratak poziv. Cilj je brzo shvatiti što vam treba,
              imate li postojeći web i koji paket ima najviše smisla.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
