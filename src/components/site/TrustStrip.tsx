const items = [
  "Demo smjera prije finalne odluke",
  "Domena na vaše ime",
  "Jasna cijena prije početka",
  "Prvi preview ~7 dana",
  "Bez skrivenih stavki",
  "Fokus na upite, ne na tehniku",
];

/** Endless editorial marquee — no icons, just text and hairlines. */
export function TrustStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[color:var(--line)] bg-[color:var(--bone)]">
      <div className="marquee-track flex whitespace-nowrap py-4">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 pr-10 text-[11px] tracking-[0.22em] uppercase text-[color:var(--ink)]/80 font-medium"
          >
            <span>{t}</span>
            <span className="h-1 w-1 bg-[color:var(--brand)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
