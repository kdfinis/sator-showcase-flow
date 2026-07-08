export type Pkg = {
  id: "odrzavano" | "vlasnistvo";
  name: string;
  priceShort: string;
  priceHome: string;
  bestFor: string;
  includes: string[];
  extras?: { label: string; items: string[] }[];
  policy?: string;
  policy?: string;
  handoff?: string;
};

export const PACKAGES: Pkg[] = [
  {
    id: "odrzavano",
    name: "Održavano",
    priceShort: "79 EUR / mj",
    priceHome:
      "Od 79 EUR mjesečno (najmanje 12 mjeseci), uz početnu naknadu od 990 EUR",
    bestFor:
      "Za firme koje žele da web bude postavljen, održavan i tehnički pod kontrolom bez njihove svakodnevne brige.",
    includes: [
      "Izrada i dizajn stranice prema dogovorenom opsegu",
      "Poslužitelj i SSL certifikat dok je paket aktivan",
      "Osnovna sigurnost i tehnički nadzor",
      "Prilagodba za mobilne uređaje",
      "Poziv jednim dodirom i kontakt obrazac",
      "Osnovna optimizacija za tražilice",
      "Do 30 minuta manjih izmjena mjesečno",
      "Osnovni tehnički popravci",
      "Podrška za pitanja vezana uz aktivnu stranicu",
    ],
    policy:
      "Ako se mjesečni paket prestane plaćati, prestaju poslužitelj, održavanje i podrška pod Sator Digital upravljanjem nakon pisanog upozorenja. Domena ostaje na vaše ime. Ako želite nastaviti samostalno, možemo dogovoriti jednokratnu predaju ili preseljenje prema zasebnoj ponudi.",
  },
  {
    id: "vlasnistvo",
    name: "Vlasništvo",
    priceShort: "od 2.490 EUR",
    priceHome:
      "Od 2.490 EUR jednokratno, opcionalno održavanje 99 EUR mjesečno",
    bestFor:
      "Za firme koje žele platiti jednom, dobiti urednu predaju i imati jasnu kontrolu nad svojom stranicom.",
    includes: [
      "Izrada stranice s većim opsegom sekcija i podstranica",
      "Jasna struktura ponude i usluga",
      "Prilagodba za mobilne uređaje",
      "Kontakt obrazac i osnovno mjerenje posjeta",
      "Osnovna optimizacija za tražilice",
      "Predaja pristupa nakon pune uplate",
      "Kratke upute za korištenje",
      "Dva kruga razumnih izmjena",
    ],
    extras: [
      {
        label: "Opcionalno održavanje (99 EUR / mj)",
        items: [
          "Tehničke provjere",
          "Provjere sigurnosnih kopija gdje je tehnički dostupno",
          "Osnovna sigurnost",
          "Do 30 minuta manjih izmjena mjesečno",
        ],
      },
    ],
  },
];

export const ALL_INCLUDE = [
  "Osnovnu strukturu stranice prema dogovorenom opsegu",
  "Prilagodbu za mobilne uređaje",
  "Poziv jednim dodirom",
  "WhatsApp ili kontakt put ako ga želite koristiti",
  "Kontakt obrazac koji šalje upite na email",
  "Osnovnu optimizaciju za tražilice",
  "Osnovno mjerenje posjeta",
  "Tehničku pripremu za objavu",
  "Jasnu predaju prema pravilima paketa",
  "Domenu na vaše ime",
];


/** Prošireni opseg — usluge koje Sator Digital izvodi izvan standardnog paketa, kao zasebnu ponudu. */
export const EXTENDED_SERVICES: { title: string; desc: string }[] = [
  {
    title: "Veći redizajn postojeće stranice",
    desc: "Cjelovita revizija strukture, sadržaja i vizualnog identiteta izvan opsega paketa.",
  },
  {
    title: "Dodatne podstranice i sekcije",
    desc: "Proširenje opsega nakon zaključene prve isporuke prema novoj specifikaciji.",
  },
  {
    title: "Dodatni jezici",
    desc: "Priprema strukture i prijevoda za višejezičnu verziju stranice.",
  },
  {
    title: "Napredna optimizacija za tražilice",
    desc: "Dugoročni rad na sadržaju, tehničkom SEO-u i pozicioniranju izvan osnovnog setupa.",
  },
  {
    title: "Složenije integracije",
    desc: "Rezervacijski sustavi, internetske trgovine, CRM povezivanja i slična proširenja.",
  },
];

/** Vanjski stručnjaci — usluge koje ne izvodimo interno, ali povezujemo klijenta s provjerenim izvođačima. */
export const PARTNER_SERVICES: { title: string; desc: string }[] = [
  {
    title: "Profesionalno fotografiranje",
    desc: "Povezujemo vas s fotografima za interijere, proizvode, ugostiteljstvo i nekretnine.",
  },
  {
    title: "Oglasne kampanje na Googleu i Meti",
    desc: "Preporuka specijaliziranih agencija i freelancera za vođenje plaćenih kampanja.",
  },
  {
    title: "Video produkcija i drone snimanje",
    desc: "Povezivanje s produkcijskim timovima kada projekt zahtijeva video materijale.",
  },
  {
    title: "Copywriting i prijevodi",
    desc: "Preporuka autora i prevoditelja za opsežnije tekstove i višejezične verzije.",
  },
];


export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Koliko traje izrada?",
    a: "Prvi pregled najčešće dobijete za oko tjedan dana nakon dogovorenog opsega i uplate prema paketu. Završena stranica je najčešće gotova za oko mjesec dana. Najviše utječe brzina dostave materijala i povratnih informacija.",
  },
  {
    q: "Što trebam poslati od materijala?",
    a: "Minimalno trebamo naziv firme, grad, broj telefona ili email, popis usluga, radno vrijeme i područje rada. Idealno je poslati i logotip, deset do dvadeset fotografija, cjenik ako želite da bude javan i poveznicu na Google Maps profil.",
  },
  {
    q: "Nemam tekst. Pomažete li s pisanjem?",
    a: "Da. Većina vlasnika dobro zna svoj posao, ali ga nije lako pretvoriti u jasan web tekst. Pomažemo složiti strukturu i tekst tako da posjetitelj brzo shvati što nudite i kako vas može kontaktirati.",
  },
  {
    q: "Nemam fotografije. Je li to problem?",
    a: "Nije zapreka. Možemo krenuti s privremenim vizualima i dati vam jednostavne upute za snimanje za kasnije. Za vile, restorane, premium usluge, nekretnine i arhitekturu profesionalne fotografije mogu značajno pomoći.",
  },
  {
    q: "Hoće li stranica raditi na mobitelu?",
    a: "Da. Prilagodba za mobilne uređaje je dio standarda jer većina ljudi prvo provjeri firmu s mobitela. Stranica mora biti jasna, brza i jednostavna za kontakt.",
  },
  {
    q: "Je li domena moja?",
    a: "Da. Domena ide na vaše ime. To je važno jer domena ne smije biti taoc agencije ili dobavljača.",
  },
  {
    q: "Što je uključeno u paket Održavano?",
    a: "Paket Održavano uključuje izradu stranice, poslužitelj i SSL certifikat dok je paket aktivan, osnovnu tehničku brigu, kontakt obrazac, poziv jednim dodirom, osnovnu optimizaciju za tražilice i do 30 minuta manjih izmjena mjesečno. Veće izmjene, novi jezici, dodatne stranice i napredna optimizacija posebno se dogovaraju.",
  },
  {
    q: "Što ako prestanem plaćati mjesečni paket?",
    a: "Domena ostaje na vaše ime. Poslužitelj, održavanje i podrška pod Sator Digital upravljanjem prestaju nakon pisanog upozorenja. Ako želite nastaviti samostalno, možemo dogovoriti jednokratnu predaju ili preseljenje prema posebnoj ponudi.",
  },
  {
    q: "Imate li povrat novca ili jamstvo?",
    a: "Kod digitalnih usluga najpoštenije je jasno definirati opseg, faze i izmjene. Jamčimo isporuku dogovorenog opsega prema ponudi. Ne jamčimo prvu poziciju na Googleu ili određeni broj upita jer to ovisi o tržištu, konkurenciji i ponudi klijenta.",
  },
  {
    q: "Kako izgleda plaćanje?",
    a: "Paket Održavano se pokreće nakon uplate početne naknade i zatim se plaća mjesečno. Paket Vlasništvo se u pravilu plaća 50 posto prije početka i 50 posto prije objave ili predaje.",
  },
  {
    q: "Radite li internetsku trgovinu?",
    a: "Možemo procijeniti internetsku trgovinu, ali to nije osnovni fokus prve ponude. Ako trebate ozbiljnu trgovinu, prvo procjenjujemo opseg, proizvode, plaćanja, dostavu i administraciju, pa predlažemo najbolji sljedeći korak.",
  },
  {
    q: "Mogu li imati samo Facebook ili Instagram?",
    a: "Možete, ali tada ovisite o platformama koje ne kontrolirate. Web stranica je vaša baza. Ona pomaže ljudima s Googlea da jasno vide usluge, dokaze, kontakt i sljedeći korak.",
  },
  {
    q: "Što je osnovna optimizacija za tražilice?",
    a: "Osnovna optimizacija znači urednu strukturu stranice, naslove, meta opise, indeksiranje, prilagodbu za mobilne uređaje i jasan sadržaj usluga. To nije isto kao dugoročan rad na optimizaciji ili jamstvo pozicije na Googleu.",
  },
  {
    q: "Kako vas kontaktirati?",
    a: "Najbrže je nazvati ili poslati WhatsApp. Možete poslati i upit kroz obrazac na kontakt stranici.",
  },
];

export const FAQ_TEASER_KEYS = [
  "Koliko traje izrada?",
  "Što trebam poslati od materijala?",
  "Nemam tekst. Pomažete li s pisanjem?",
  "Je li domena moja?",
  "Što ako prestanem plaćati mjesečni paket?",
];
