import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTAGroup } from "@/components/site/CTA";
import { FAQ_ITEMS } from "@/lib/data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Česta pitanja, Sator Digital" },
      {
        name: "description",
        content:
          "Odgovori na pitanja o izradi web stranice, domeni, plaćanju, održavanju, materijalima, rokovima i Managed paketu.",
      },
      { property: "og:title", content: "Česta pitanja, Sator Digital" },
      {
        property: "og:description",
        content:
          "Odgovori na pitanja o izradi web stranice, domeni, plaćanju i održavanju.",
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <SiteLayout>
      <section className="pt-14 md:pt-24 pb-14 bg-[color:var(--bone)]">
        <div className="container-wide">
          <div className="flex items-baseline justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-text)] pb-8 border-b border-[color:var(--line)]">
            <span>FAQ — Ed. 01</span>
            <span className="num">Pitanja</span>
          </div>
          <div className="mt-14 grid gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <h1 className="text-5xl md:text-8xl tracking-[-0.045em] font-medium leading-[0.96]">
                Česta{" "}
                <span className="text-[color:var(--brand)] font-medium">
                  pitanja
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 md:pt-4">
              <p className="text-lg leading-relaxed text-[color:var(--ink)]/80 max-w-md">
                Ovdje su najčešća pitanja prije početka. Ako želite najbrži
                odgovor, nazovite ili pošaljite WhatsApp.
              </p>
              <div className="mt-8">
                <CTAGroup />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[color:var(--paper)]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <Reveal>
              <FAQAccordion items={FAQ_ITEMS} defaultOpen={0} />
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
