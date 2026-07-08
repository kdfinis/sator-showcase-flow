import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full bg-transparent border-0 border-b border-[color:var(--line)] px-0 py-3 text-[15px] text-[color:var(--ink)] placeholder-[color:var(--muted-text)]/70 transition focus:outline-none focus:border-[color:var(--ink)]";

const labelCls =
  "block eyebrow text-[color:var(--muted-text)] mb-2";

const selectCls = cn(inputCls, "appearance-none pr-6 bg-[color:var(--bone)]");

export function ContactForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // TODO: Wire to production email or CRM (e.g. Lovable Cloud edge function
    // posting to Resend / a CRM). Do not silently discard form data in prod.
    try {
      await new Promise((r) => setTimeout(r, 700));
      navigate({ to: "/hvala" });
    } catch {
      setError(
        "Nešto nije uspjelo. Pokušajte ponovno ili nas kontaktirajte direktno telefonom ili WhatsAppom.",
      );
      setLoading(false);
    }
  }

  return (
    <form
      id="kontakt-form"
      onSubmit={onSubmit}
      noValidate
      className="scroll-mt-24"
    >
      <div className="eyebrow text-[color:var(--muted-text)] mb-8">
        Upit
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="ime" className={labelCls}>
            Ime i prezime *
          </label>
          <input id="ime" name="ime" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="firma" className={labelCls}>
            Naziv firme *
          </label>
          <input id="firma" name="firma" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="grad" className={labelCls}>
            Grad *
          </label>
          <input id="grad" name="grad" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="kontakt" className={labelCls}>
            Telefon ili email *
          </label>
          <input id="kontakt" name="kontakt" required className={inputCls} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="webStanje" className={labelCls}>
            Imate li web danas? *
          </label>
          <select
            id="webStanje"
            name="webStanje"
            required
            defaultValue=""
            className={selectCls}
          >
            <option value="" disabled>
              Odaberite
            </option>
            <option>Nemam web stranicu</option>
            <option>Imam Facebook ili Instagram</option>
            <option>Imam web stranicu, ali je stara</option>
            <option>Imam web stranicu, treba redesign</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="poruka" className={labelCls}>
            Poruka *
          </label>
          <textarea
            id="poruka"
            name="poruka"
            required
            rows={4}
            className={cn(inputCls, "resize-y min-h-[110px]")}
          />
        </div>

        <div className="md:col-span-2 pt-6 border-t border-[color:var(--line)]">
          <div className="eyebrow text-[color:var(--muted-text)]">
            Neobavezno
          </div>
        </div>

        <div>
          <label htmlFor="maps" className={labelCls}>
            Link na Google Maps profil
          </label>
          <input
            id="maps"
            name="maps"
            type="url"
            placeholder="https://"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="soc" className={labelCls}>
            Link na Facebook ili Instagram
          </label>
          <input
            id="soc"
            name="soc"
            type="url"
            placeholder="https://"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="rok" className={labelCls}>
            Željeni rok
          </label>
          <select id="rok" name="rok" defaultValue="" className={selectCls}>
            <option value="">Odaberite</option>
            <option>Što prije</option>
            <option>U sljedeća 2 tjedna</option>
            <option>U sljedećih mjesec dana</option>
            <option>Nije hitno</option>
          </select>
        </div>
        <div>
          <label htmlFor="budzet" className={labelCls}>
            Budžet okvirno
          </label>
          <select id="budzet" name="budzet" defaultValue="" className={selectCls}>
            <option value="">Odaberite</option>
            <option>Do 1.000 EUR</option>
            <option>1.000 do 2.500 EUR</option>
            <option>2.500 do 5.000 EUR</option>
            <option>5.000 EUR i više</option>
            <option>Nisam siguran</option>
          </select>
        </div>
      </div>

      <label className="mt-10 flex items-start gap-3 text-sm text-[color:var(--ink)]/80 cursor-pointer max-w-2xl">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-[color:var(--ink)]"
        />
        <span>
          Slanjem upita pristajem da me kontaktirate vezano uz ovaj zahtjev. Ne
          šaljemo spam. Detalji su u Politici privatnosti.
        </span>
      </label>

      {error && (
        <div className="mt-6 border border-[color:var(--brand)] px-4 py-3 text-sm text-[color:var(--brand)]">
          {error}
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-3 bg-[color:var(--ink)] text-[color:var(--bone)] px-8 py-4 text-[13px] tracking-[0.14em] uppercase font-semibold transition-colors hover:bg-[color:var(--brand)] disabled:opacity-70"
        >
          <span>{loading ? "Šaljem" : "Pošalji upit"}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <span className="text-xs text-[color:var(--muted-text)]">
          Odgovor u pravilu u roku od 1 radnog dana.
        </span>
      </div>
    </form>
  );
}
