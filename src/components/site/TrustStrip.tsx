import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const pills = [
  "Demo smjera prije finalne odluke",
  "Domena na vaše ime",
  "Jasna cijena prije početka",
  "Prvi preview ~7 dana",
  "Fokus na upite, ne na tehniku",
];

export function TrustStrip() {
  return (
    <Reveal className="flex flex-wrap justify-center gap-2">
      {pills.map((p, i) => (
        <motion.span
          key={p}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-[color:var(--border-blush)] bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs md:text-[13px] font-medium text-[color:var(--plum)]/85"
        >
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[color:var(--pink)]" />
          {p}
        </motion.span>
      ))}
    </Reveal>
  );
}
