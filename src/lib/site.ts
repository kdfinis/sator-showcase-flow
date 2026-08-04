// Central constants — do not invent real business data.
// Values marked TO_BE_FILLED must remain as such until provided.

export const SITE_NAME = "Sator Digital";
export const PHONE_DISPLAY = "+352 621 815 753";
export const PHONE_TEL = "+352621815753";
export const WHATSAPP_URL = "https://wa.me/352621815753";
export const EMAIL = "karlodefinis@gmail.com";
export const LEGAL_NAME = "Karlo Definis (Sator Digital)";
export const OIB = "TO_BE_FILLED";
export const ADDRESS = "TO_BE_FILLED";
export const VAT_STATUS = "TO_BE_FILLED";
export const BASE_URL = "https://sator-showcase-flow.lovable.app";
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
