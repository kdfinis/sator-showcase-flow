import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { telHref, waHref, RESPONSE_TIME_PROMISE } from "@/lib/site";

export const Route = createFileRoute("/hvala")({
  head: () => ({
    meta: [
      { title: "Hvala, upit je poslan" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Hvala,
});

function Hvala() {
  const prepare = [
    "Link na Google Maps profil",
    "Link na Facebook ili Instagram",
    "Popis usluga",
    "Radno vrijeme i područje rada",
    "Deset do dvadeset fotografija ako ih imate",
  ];
  return (
    <SiteLayout>
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#ffffff,#fff3f8)" }}
      >
        <div className="blob w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2 bg-[color:var(--pale-pink)]" />
        <div className="container-x relative max-w-2xl">
          <Reveal className="card-soft p-8 md:p-12 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--pink)] text-white mx-auto shadow-[0_16px_40px_-16px_rgba(232,62,140,0.7)]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight text-[color:var(--plum)]">
              Hvala, <span className="text-gradient-pink">upit je poslan</span>
            </h1>
            <p className="mt-4 text-[color:var(--plum)]/80">
              Pregledat ćemo poruku i javiti se s nekoliko kratkih pitanja ili
              prijedlogom za kratak poziv.
            </p>
            <p className="mt-2 text-sm text-[color:var(--mauve)]">
              U pravilu odgovaramo u roku od {RESPONSE_TIME_PROMISE.toLowerCase()}.
            </p>

            <div className="mt-8 text-left">
              <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)] mb-3">
                Ako želite ubrzati proces, pripremite
              </div>
              <ul className="space-y-2">
                {prepare.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-[color:var(--plum)]/85">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--pink)] flex-none" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-[color:var(--plum)]/75">
              Ako je hitno, najbrže je nazvati ili poslati WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={telHref()}
                className="inline-flex items-center gap-2 rounded-[14px] bg-[color:var(--pink)] hover:bg-[color:var(--pink-hover)] text-white font-semibold px-5 py-3"
              >
                <Phone className="h-4 w-4" /> Nazovi
              </a>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[14px] bg-white border border-[color:var(--border-blush)] text-[color:var(--plum)] font-semibold px-5 py-3"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-[14px] px-5 py-3 text-[color:var(--plum)] font-semibold hover:text-[color:var(--pink)]"
              >
                <ArrowLeft className="h-4 w-4" /> Povratak na početnu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
