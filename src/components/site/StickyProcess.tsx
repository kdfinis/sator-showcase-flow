import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const steps = [
  {
    n: "01",
    t: "Kratki poziv",
    d: "U desetak minuta razumijemo što radite, imate li postojeći web, koji je cilj stranice i koji paket ima najviše smisla.",
  },
  {
    n: "02",
    t: "Preview smjera",
    d: "Pripremimo smjer strukture i dizajna kako biste vidjeli u kojem smjeru idemo prije finalne izrade. Preview nije gotova stranica, nego kontrolna točka za sigurniju odluku.",
  },
  {
    n: "03",
    t: "Izrada i objava",
    d: "Nakon dogovorenog opsega i uplate prema paketu krećemo u izradu. Prvi preview obično je spreman za tjedan dana, a završetak je najčešće oko mjesec dana, ovisno o materijalima i feedbacku.",
  },
];

/** Sticky "story moment" — steps advance as user scrolls through a tall wrapper. */
export function StickyProcess() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const active = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  return (
    <section
      className="relative"
      style={{ background: "linear-gradient(180deg,#fff3f8,#ffffff)" }}
    >
      <div ref={wrap} className="container-x relative" style={{ height: reduced ? "auto" : "220vh" }}>
        <div className="sticky top-24 py-16 md:py-24">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-widest font-bold text-[color:var(--pink)]">
              Kako radimo
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--plum)]">
              Tri koraka.{" "}
              <span className="text-gradient-pink">Bez tehničke buke.</span>
            </h2>
            <p className="mt-4 text-[color:var(--plum)]/75 text-lg max-w-xl">
              Ako nemate tekst i fotke spremne, krenemo s minimumom i vodimo vas
              kroz najkraći put do objave.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5 perspective-1200">
            {steps.map((s, i) => (
              <StepCard key={s.n} step={s} index={i} progress={active} reduced={reduced} />
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
  const opacity = useTransform(progress, (v) => (reduced ? 1 : v >= index ? 1 : 0.35));
  const y = useTransform(progress, (v) => (reduced ? 0 : v >= index ? 0 : 20));
  const rotate = useTransform(progress, (v) => (reduced ? 0 : v >= index ? 0 : 4));
  return (
    <motion.div
      style={{ opacity, y, rotateX: rotate, transformStyle: "preserve-3d" }}
      className="rounded-[20px] bg-white border border-[color:var(--border-blush)] p-6 md:p-7 shadow-[0_25px_60px_-40px_rgba(42,16,35,0.35)]"
    >
      <div className="flex items-baseline justify-between">
        <span className="text-4xl font-black text-[color:var(--pink)]/30">
          {step.n}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[color:var(--mauve)]">
          Korak
        </span>
      </div>
      <h3 className="mt-3 text-xl font-bold text-[color:var(--plum)]">
        {step.t}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--plum)]/75">
        {step.d}
      </p>
    </motion.div>
  );
}
