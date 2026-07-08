// Central constants — do not invent real business data.
// Values marked TO_BE_FILLED must remain as such until provided.

export const SITE_NAME = "Sator Digital";
export const PHONE_DISPLAY = "TO_BE_FILLED";
export const PHONE_TEL = "TO_BE_FILLED";
export const WHATSAPP_URL = "TO_BE_FILLED";
export const EMAIL = "TO_BE_FILLED";
export const LEGAL_NAME = "TO_BE_FILLED";
export const OIB = "TO_BE_FILLED";
export const ADDRESS = "TO_BE_FILLED";
export const VAT_STATUS = "TO_BE_FILLED";
export const BASE_URL = "TO_BE_FILLED";
export const SERVICE_AREA = "Hrvatska, s fokusom na Split i lokalne firme";
export const RESPONSE_TIME_PROMISE = "1 radni dan";

export const PLACEHOLDER = "TO_BE_FILLED";

export const isPlaceholder = (v: string) => v === PLACEHOLDER;

// Safe href helpers — return "#" when placeholder so links don't 404.
export const telHref = () => (isPlaceholder(PHONE_TEL) ? "#" : `tel:${PHONE_TEL}`);
export const waHref = () => (isPlaceholder(WHATSAPP_URL) ? "#" : WHATSAPP_URL);
export const mailHref = () => (isPlaceholder(EMAIL) ? "#" : `mailto:${EMAIL}`);

export const NAV_LINKS = [
  { to: "/", label: "Početna" },
  { to: "/paketi", label: "Paketi" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontakt", label: "Kontakt" },
] as const;
