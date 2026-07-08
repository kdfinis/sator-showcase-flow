import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full rounded-[12px] border border-[color:var(--border-blush)] bg-white px-4 py-3 text-[15px] text-[color:var(--plum)] placeholder-[color:var(--mauve)]/70 transition focus:outline-none focus:border-[color:var(--pink)] focus:ring-4 focus:ring-[color:var(--pink)]/15";

const labelCls =
  "block text-sm font-semibold text-[color:var(--plum)] mb-1.5";

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
      className="card-soft p-6 md:p-8 space-y-5 scroll-mt-24"
    >
      <div className="grid gap-5 md:grid-cols-2">
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
            className={inputCls}
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

        <div className="md:col-span-2 pt-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--mauve)] mb-3">
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
          <select id="rok" name="rok" defaultValue="" className={inputCls}>
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
          <select id="budzet" name="budzet" defaultValue="" className={inputCls}>
            <option value="">Odaberite</option>
            <option>Do 1.000 EUR</option>
            <option>1.000 do 2.500 EUR</option>
            <option>2.500 do 5.000 EUR</option>
            <option>5.000 EUR i više</option>
            <option>Nisam siguran</option>
          </select>
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-[color:var(--plum)]/85 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-[color:var(--pink)]"
        />
        <span>
          Slanjem upita pristajem da me kontaktirate vezano uz ovaj zahtjev. Ne
          šaljemo spam. Detalji su u Politici privatnosti.
        </span>
      </label>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-[14px] bg-[color:var(--pink)] hover:bg-[color:var(--pink-hover)] text-white font-semibold px-6 py-3.5 transition disabled:opacity-70 shadow-[0_16px_36px_-18px_rgba(232,62,140,0.7)]"
      >
        {loading ? "Šaljem..." : "Pošalji upit"}
      </button>
    </form>
  );
}
