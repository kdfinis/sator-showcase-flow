import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
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

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  const disabled = isPlaceholder(value);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-6 border-t border-[color:var(--line)] last:border-b hover:text-[color:var(--brand)] transition-colors ${disabled ? "pointer-events-none opacity-70" : ""}`}
    >
      <span className="eyebrow text-[color:var(--muted-text)] w-24">{label}</span>
      <span className="text-xl md:text-2xl tracking-[-0.02em] font-medium break-all">
        {value}
      </span>
      <span className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
        ↗
      </span>
    </a>
  );
}

function Kontakt() {
  return (
    <SiteLayout>
      <section className="pt-14 md:pt-24 pb-14 bg-[color:var(--bone)]">
        <div className="container-wide">
          <div className="flex items-baseline justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-text)] pb-8 border-b border-[color:var(--line)]">
            <span>Kontakt — Ed. 01</span>
            <span className="num">Kontakt</span>
          </div>

          <div className="mt-14 grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <h1 className="text-5xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.96]">
                  <span className="text-[color:var(--brand)] font-medium">
                    Kontakt
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 text-xl md:text-2xl leading-relaxed font-light max-w-2xl text-[color:var(--ink)]/85">
                  Najbrže je nazvati ili poslati WhatsApp. Ako vam je lakše,
                  pošaljite upit kroz formu.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <ImagePlaceholder ratio="4/3" index="01" label="Studio · kontakt" tone="ink" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[color:var(--bone)]">
        <div className="container-wide">
          <div className="eyebrow text-[color:var(--muted-text)] mb-6">Kanali</div>
          <div>
            <ContactRow label="Telefon" value={PHONE_DISPLAY} href={telHref()} />
            <ContactRow label="WhatsApp" value={WHATSAPP_URL} href={waHref()} external />
            <ContactRow label="Email" value={EMAIL} href={mailHref()} />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[color:var(--paper)]">
        <div className="container-wide">
          <div className="border-b border-[color:var(--line)] pb-4 mb-14">
            <span className="eyebrow text-[color:var(--muted-text)]">Što slijedi</span>
          </div>
          <div className="grid gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <h2 className="text-3xl md:text-5xl tracking-[-0.04em] font-medium leading-[1.02] max-w-sm">
                Pregledamo poruku i{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  javimo se.
                </span>
              </h2>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-sm">
                Pregledamo poruku i javimo se s nekoliko kratkih pitanja ili
                prijedlogom za kratak poziv. Cilj je brzo shvatiti što vam
                treba, imate li postojeći web i koji paket ima najviše smisla.
              </p>
            </Reveal>
            <div className="md:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
