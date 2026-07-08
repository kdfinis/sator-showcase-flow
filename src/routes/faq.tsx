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
      <section
        className="pt-16 md:pt-24 pb-10 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#ffffff,#fff3f8)" }}
      >
        <div className="blob w-[420px] h-[420px] -top-24 -left-24 bg-[color:var(--pale-pink)]" />
        <div className="container-x relative">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[color:var(--plum)]">
              Česta <span className="text-gradient-pink">pitanja</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-[color:var(--plum)]/75">
              Ovdje su najčešća pitanja prije početka. Ako želite najbrži
              odgovor, nazovite ili pošaljite WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <CTAGroup />
          </Reveal>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(180deg,#fff3f8,#fce4f0)" }}
      >
        <div className="container-x max-w-3xl">
          <Reveal>
            <FAQAccordion items={FAQ_ITEMS} defaultOpen={0} />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
