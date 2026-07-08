import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Globe,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { CTAGroup } from "./CTA";
import { TrustStrip } from "./TrustStrip";
import { Reveal } from "./Reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bentoRot = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-28"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #fff8fb 55%, #fce4f0 100%)",
      }}
    >
      {/* animated blush glows */}
      <motion.div
        style={reduced ? undefined : { y: blobY }}
        aria-hidden
        className="blob w-[520px] h-[520px] -top-40 -left-32 bg-[color:var(--pale-pink)]"
      />
      <motion.div
        style={reduced ? undefined : { y: blobY2 }}
        aria-hidden
        className="blob w-[420px] h-[420px] top-20 -right-20 bg-[#ffc9de]"
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-blush)] bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-semibold text-[color:var(--plum)]/80">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--pink)]" />
                Sator Digital · Web za lokalne firme
              </div>
            </Reveal>

            <h1 className="mt-5 text-[38px] leading-[1.05] md:text-[56px] md:leading-[1.03] font-extrabold tracking-tight text-[color:var(--plum)]">
              <RevealWords text="Web stranice za lokalne firme koje žele" />{" "}
              <span className="relative inline-block">
                <span className="text-gradient-pink">više upita s Googlea</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-[color:var(--pink)]/25"
                />
              </span>
            </h1>

            <Reveal delay={0.15}>
              <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[color:var(--plum)]/75 max-w-xl">
                Prvi preview najčešće u roku od tjedan dana, a završena stranica
                najčešće kroz oko mjesec dana. Radimo za obrte i male firme u
                Hrvatskoj i BiH.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-8">
              <CTAGroup />
            </Reveal>

            <Reveal delay={0.35} className="mt-6">
              <p className="text-sm text-[color:var(--plum)]/70 max-w-md">
                Demo smjera prije finalne odluke. Domena na vaše ime. Jasna
                cijena prije početka rada.
              </p>
              <p className="mt-1 text-sm text-[color:var(--mauve)]">
                Brz kontakt telefonom ili WhatsAppom. Fokus na upite, ne na
                tehničke pojmove.
              </p>
            </Reveal>
          </div>

          {/* Bento cluster with 3D depth */}
          <motion.div
            style={reduced ? undefined : { rotate: bentoRot }}
            className="perspective-1200 relative"
          >
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[440px] md:h-[520px]">
              <BentoCard
                className="col-span-4 row-span-3 bg-white"
                delay={0.1}
                depth={20}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--pink)]">
                  <Globe className="h-3.5 w-3.5" /> Vaš web
                </div>
                <div className="mt-3 text-2xl font-extrabold text-[color:var(--plum)] leading-tight">
                  Jasno, brzo, mobilno.
                </div>
                <div className="mt-2 text-sm text-[color:var(--mauve)] leading-relaxed">
                  Struktura koja u 10 sekundi kaže tko ste i kako vas kontaktirati.
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Poziv", "WhatsApp", "Forma"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[color:var(--blush)] border border-[color:var(--border-blush)] px-2.5 py-1 text-[11px] font-semibold text-[color:var(--plum)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </BentoCard>

              <BentoCard
                className="col-span-2 row-span-3 bg-[color:var(--pink)] text-white"
                delay={0.2}
                depth={40}
              >
                <Phone className="h-5 w-5" />
                <div className="mt-auto">
                  <div className="text-xs uppercase tracking-widest opacity-80 font-bold">
                    Klik za poziv
                  </div>
                  <div className="text-lg font-bold leading-tight mt-1">
                    Direktan put do upita
                  </div>
                </div>
              </BentoCard>

              <BentoCard
                className="col-span-3 row-span-3 bg-[color:var(--pale-pink)]"
                delay={0.3}
                depth={10}
              >
                <ShieldCheck className="h-5 w-5 text-[color:var(--pink)]" />
                <div className="mt-auto">
                  <div className="text-xs uppercase tracking-widest text-[color:var(--pink)] font-bold">
                    Vlasništvo
                  </div>
                  <div className="mt-1 text-lg font-bold text-[color:var(--plum)] leading-tight">
                    Domena na vaše ime
                  </div>
                </div>
              </BentoCard>

              <BentoCard
                className="col-span-3 row-span-3 bg-white"
                delay={0.4}
                depth={30}
              >
                <Clock className="h-5 w-5 text-[color:var(--pink)]" />
                <div className="mt-auto">
                  <div className="text-xs uppercase tracking-widest text-[color:var(--pink)] font-bold">
                    Prvi preview
                  </div>
                  <div className="mt-1 text-lg font-bold text-[color:var(--plum)] leading-tight">
                    ~ tjedan dana
                  </div>
                  <div className="mt-1 text-xs text-[color:var(--mauve)]">
                    Kontrolna točka prije finalne izrade
                  </div>
                </div>
              </BentoCard>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 md:mt-20">
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className,
  delay = 0,
  depth = 20,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  depth?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: reduced ? 0 : 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={reduced ? undefined : { y: -4, rotateX: -2, rotateY: 2 }}
      style={{ transformStyle: "preserve-3d", transform: `translateZ(${depth}px)` }}
      className={`rounded-[20px] border border-[color:var(--border-blush)] p-4 md:p-5 flex flex-col shadow-[0_20px_50px_-30px_rgba(232,62,140,0.35)] ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function RevealWords({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12, filter: reduced ? "none" : "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.05 + i * 0.04, duration: 0.55 }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  );
}
