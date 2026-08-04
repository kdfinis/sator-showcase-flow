// Central public identity for Sator Digital.
// Sales email signatures and CRM outreach MUST mirror these values.
// Values marked TO_BE_FILLED stay until provided (legal only).

export const SITE_NAME = "Sator Digital";
export const SENDER_NAME = "Karlo Definis";
export const TAGLINE = "Dizajn i izrada web stranica.";
export const PHONE_DISPLAY = "+352 621 815 753";
export const PHONE_TEL = "+352621815753";
export const WHATSAPP_URL = "https://wa.me/352621815753";
export const EMAIL = "karlodefinis@gmail.com";
export const LEGAL_NAME = "Karlo Definis";
export const OIB = "TO_BE_FILLED";
export const ADDRESS = "TO_BE_FILLED";
export const VAT_STATUS = "TO_BE_FILLED";
/** Public site on GitHub Pages (not Lovable URL in client-facing copy). */
export const BASE_URL = "https://kdfinis.github.io/sator-digital";
/** Visible link label in HTML signatures (hotlink; do not print raw host). */
export const SITE_LINK_LABEL = "Sator Digital";
export const SERVICE_AREA = "Hrvatska, s fokusom na Split i lokalne firme";
export const RESPONSE_TIME_PROMISE = "1 radni dan";

export const PLACEHOLDER = "TO_BE_FILLED";

export const isPlaceholder = (v: string) => v === PLACEHOLDER;

// Safe href helpers: return "#" when placeholder so links don't 404.
export const telHref = () => (isPlaceholder(PHONE_TEL) ? "#" : `tel:${PHONE_TEL}`);
export const waHref = () => (isPlaceholder(WHATSAPP_URL) ? "#" : WHATSAPP_URL);
export const mailHref = () => (isPlaceholder(EMAIL) ? "#" : `mailto:${EMAIL}`);

/** Plain-text closer for CRM / outbound emails (append to body only). */
export const emailSignaturePlain = () =>
  [
    "--",
    SENDER_NAME,
    SITE_NAME,
    TAGLINE,
    BASE_URL,
    `WhatsApp: ${PHONE_DISPLAY}`,
    EMAIL,
  ].join("\n");

export const NAV_LINKS = [
  { to: "/", label: "Početna" },
  { to: "/paketi", label: "Paketi" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontakt", label: "Kontakt" },
] as const;