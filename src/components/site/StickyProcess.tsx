import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const steps = [
  {
    n: "01",
    t: "Uvodni razgovor",
    d: "Kratki poziv za razumijevanje djelatnosti, postojeće stranice ako postoji, cilja projekta i odgovarajućeg paketa.",
  },
  {
    n: "02",
    t: "Prijedlog smjera",
    d: "Priprema smjera strukture i vizualnog rješenja kao kontrolne točke prije početka izrade. Ne predstavlja finalni proizvod.",
  },
  {
    n: "03",
    t: "Izrada i objava",
    d: "Nakon potvrđenog opsega i uplate prema paketu započinje izrada. Prvi pregled uobičajeno je dostupan u roku od sedam dana, s objavom u pravilu unutar mjesec dana ovisno o dostavi materijala.",
  },
];

export function StickyProcess() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  return (
    <section className="bg-[color:var(--ink)] text-[color:var(--bone)]">
      <div ref={wrap} className="container-wide" style={{ height: reduced ? "auto" : "260vh" }}>
        <div className="sticky top-0 min-h-screen flex flex-col justify-center py-24">
          <div className="flex items-baseline justify-between border-b border-[color:var(--bone)]/20 pb-6 mb-16">
            <div className="eyebrow opacity-70">Kako radimo — Proces</div>
            <div className="num text-xs opacity-70">Etape</div>
          </div>

          <h2 className="text-4xl md:text-7xl tracking-[-0.04em] font-medium max-w-3xl">
            Proces u{" "}
            <span className="text-[color:var(--brand)] font-medium">
              tri koraka.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--bone)]/75 text-lg">
            Ako materijali nisu potpuni, krećemo s minimumom i dopunjavamo
            tijekom rada prema dogovorenom rasporedu.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-10 perspective-1200">
            {steps.map((s, i) => (
              <StepCard key={s.n} step={s} index={i} progress={progress} reduced={reduced} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  progress,
  reduced,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: import("framer-motion").MotionValue<number>;
  reduced: boolean;
}) {
  const opacity = useTransform(progress, (v) => (reduced ? 1 : v >= index ? 1 : 0.25));
  const y = useTransform(progress, (v) => (reduced ? 0 : v >= index ? 0 : 24));
  const rotate = useTransform(progress, (v) => (reduced ? 0 : v >= index ? 0 : 6));

  return (
    <motion.div
      style={{ opacity, y, rotateX: rotate, transformStyle: "preserve-3d" }}
      className="border-t border-[color:var(--bone)]/30 pt-6"
    >
      <div className="flex items-baseline justify-between">
        <span className="num text-6xl md:text-7xl font-light text-[color:var(--bone)]/25">
          {step.n}
        </span>
        <span className="eyebrow text-[color:var(--bone)]/50">Korak</span>
      </div>
      <h3 className="mt-6 text-2xl md:text-3xl tracking-[-0.03em] font-medium">
        {step.t}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--bone)]/75">
        {step.d}
      </p>
    </motion.div>
  );
}
