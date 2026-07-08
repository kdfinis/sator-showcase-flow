import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CTAGroup } from "./CTA";
import { Reveal } from "./Reveal";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Editorial hero — no icons, image placeholders, oversized display type. */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const stripX = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[color:var(--bone)] pt-14 md:pt-24 pb-24"
    >
      <div className="container-wide relative">
        {/* Meta strip */}
        <div className="flex items-baseline justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-text)] pb-8 border-b border-[color:var(--line)]">
          <span className="num">HR — MMXXVI</span>
          <span className="hidden md:inline">Split · Hrvatska</span>
          <span className="num">Ed. 01</span>
        </div>

        <div className="pt-14 md:pt-20 grid gap-14 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow text-[color:var(--muted-text)] mb-8">
                Web ateljea za lokalne firme
              </div>
            </Reveal>

            <h1 className="text-[42px] leading-[0.98] md:text-[92px] md:leading-[0.96] tracking-[-0.045em] font-medium text-[color:var(--ink)]">
              <RevealWords text="Web stranice za lokalne" />
              <br />
              <RevealWords text="firme koje žele" delay={0.15} />
              <br />
              <span className="text-[color:var(--brand)] font-medium">
                <RevealWords text="više upita s Googlea" delay={0.3} />
              </span>
            </h1>
          </div>

          <div className="md:col-span-4 md:pt-6 flex flex-col justify-between gap-10">
            <Reveal delay={0.15}>
              <p className="text-[15px] leading-relaxed text-[color:var(--ink)]/80 max-w-sm">
                Prvi preview najčešće u roku od tjedan dana, a završena
                stranica najčešće kroz oko mjesec dana. Radimo za obrte i male
                firme u Hrvatskoj.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <CTAGroup />
            </Reveal>
          </div>
        </div>

        {/* Editorial spread — image placeholders */}
        <div className="mt-20 md:mt-28 grid gap-4 md:grid-cols-12 md:gap-6">
          <motion.div
            style={reduced ? undefined : { y: imgY }}
            className="md:col-span-8"
          >
            <ImagePlaceholder
              ratio="16/9"
              index="01"
              label="Studio · portret rada"
              tone="ink"
            />
          </motion.div>
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            <ImagePlaceholder
              ratio="4/3"
              index="02"
              label="Detalj · tipografija"
              tone="paper"
            />
            <div className="border border-[color:var(--line)] p-6 flex-1 flex flex-col justify-between bg-[color:var(--paper)]">
              <div className="eyebrow text-[color:var(--muted-text)]">
                Napomena
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
                Demo smjera prije finalne odluke. Domena na vaše ime. Jasna
                cijena prije početka rada.
              </p>
              <div className="mt-6 eyebrow text-[color:var(--muted-text)]">
                Brz kontakt — Telefon · WhatsApp
              </div>
            </div>
          </div>
        </div>

        {/* Micro index */}
        <motion.div
          style={reduced ? undefined : { x: stripX }}
          className="mt-16 grid grid-cols-4 gap-4 md:gap-8 border-t border-[color:var(--line)] pt-8"
        >
          {[
            { k: "Preview", v: "~ 7 dana" },
            { k: "Isporuka", v: "~ 30 dana" },
            { k: "Vlasništvo", v: "Domena vaša" },
            { k: "Cijena", v: "Prije početka" },
          ].map((s, i) => (
            <div key={s.k} className="flex flex-col">
              <span className="num text-[10px] tracking-widest text-[color:var(--muted-text)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 eyebrow text-[color:var(--muted-text)]">
                {s.k}
              </span>
              <span className="mt-1 text-lg md:text-2xl tracking-[-0.02em] font-medium">
                {s.v}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: reduced ? "none" : "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + 0.05 + i * 0.05, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="inline-block mr-[0.22em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  );
}
