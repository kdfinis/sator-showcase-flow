export type Pkg = {
  id: "managed" | "owner" | "independence";
  name: string;
  priceShort: string;
  priceHome: string;
  bestFor: string;
  includes: string[];
  extras?: { label: string; items: string[] }[];
  notIncluded?: string[];
  policy?: string;
  handoff?: string;
};

export const PACKAGES: Pkg[] = [
  {
    id: "managed",
    name: "Managed",
    priceShort: "79 EUR / mj",
    priceHome:
      "Od 79 EUR mjesečno (najmanje 12 mjeseci), uz setup od 990 EUR",
    bestFor:
      "Za firme koje žele da web bude postavljen, održavan i tehnički pod kontrolom bez njihove svakodnevne brige.",
    includes: [
      "Izrada i dizajn stranice prema dogovorenom opsegu",
      "Hosting i SSL dok je paket aktivan",
      "Osnovna sigurnost i tehnički nadzor",
      "Mobilna optimizacija",
      "Klik za poziv i kontakt forma",
      "Osnovni SEO setup",
      "Do 30 minuta manjih izmjena mjesečno",
      "Osnovni tehnički popravci",
      "Podrška za pitanja vezana uz aktivnu stranicu",
    ],
    policy:
      "Ako se mjesečni paket prestane plaćati, prestaju hosting, održavanje i podrška pod Sator Digital upravljanjem nakon pisanog upozorenja. Domena ostaje na vaše ime. Ako želite nastaviti samostalno, možemo dogovoriti jednokratnu predaju ili migraciju prema zasebnoj ponudi.",
  },
  {
    id: "owner",
    name: "Owner",
    priceShort: "od 2.490 EUR",
    priceHome:
      "Od 2.490 EUR jednokratno, opcionalno održavanje 99 EUR mjesečno",
    bestFor:
      "Za firme koje žele platiti jednom, dobiti urednu predaju i imati jasnu kontrolu nad svojom stranicom.",
    includes: [
      "Izrada stranice s većim opsegom sekcija i stranica",
      "Jasna struktura ponude i usluga",
      "Mobilna optimizacija",
      "Kontakt forma i osnovno mjerenje",
      "Osnovni SEO setup",
      "Predaja pristupa nakon pune uplate",
      "Kratke upute za korištenje",
      "Dva kruga razumnih revizija",
    ],
    extras: [
      {
        label: "Opcionalno održavanje (99 EUR / mj)",
        items: [
          "Tehničke provjere",
          "Backup provjere gdje je tehnički dostupno",
          "Osnovna sigurnost",
          "Do 30 minuta manjih izmjena mjesečno",
        ],
      },
    ],
    notIncluded: [
      "Hosting trošak nakon predaje ako klijent koristi vlastiti hosting",
      "Velike izmjene dizajna",
      "Napredni SEO",
      "Novi jezici",
      "Oglasne kampanje",
    ],
  },
  {
    id: "independence",
    name: "Independence",
    priceShort: "5.000 EUR",
    priceHome: "5.000 EUR jednokratno",
    bestFor:
      "Za firme koje žele premium isporuku, dokumentaciju, predaju pristupa i maksimalnu neovisnost nakon projekta.",
    includes: [
      "Premium strukturu i dizajn prema dogovorenom opsegu",
      "Detaljniju razradu sadržaja i poruka",
      "Mobilnu optimizaciju i tehničku pripremu",
      "Kontakt putove, formu, analitiku i osnovni SEO setup",
      "Predaju admin pristupa nakon pune uplate",
      "Dokument s osnovnim uputama",
      "Popis korištenih alata, računa i tehničkih postavki",
      "Kratku završnu edukaciju ili poziv za predaju",
      "Tri kruga razumnih revizija",
      "Preporuke za daljnje poboljšanje",
    ],
    handoff:
      "Kompletna predaja znači da nakon pune uplate dobivate dogovorene pristupe, dokumentaciju i osnovne upute za nastavak bez naše svakodnevne podrške. Ako se koriste alati trećih strana, njihovi troškovi i pravila ostaju odvojeni od naše usluge.",
  },
];

export const ALL_INCLUDE = [
  "Osnovnu strukturu stranice prema dogovorenom opsegu",
  "Mobilnu optimizaciju",
  "Klik za poziv",
  "WhatsApp ili kontakt put ako ga želite koristiti",
  "Kontakt formu koja šalje upite na email",
  "Osnovni SEO setup",
  "Osnovno mjerenje posjeta",
  "Tehničku pripremu za objavu",
  "Jasnu predaju prema pravilima paketa",
  "Domenu na vaše ime",
];

export const NOT_INCLUDED_GLOBAL = [
  "Veliki redizajn",
  "Nove stranice izvan dogovorenog opsega",
  "Dodatni jezici (osim ako je uključeno)",
  "Napredni SEO i dugoročni SEO projekti",
  "Google Ads ili Meta Ads",
  "Kompleksne integracije",
  "Profesionalno fotografiranje",
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Koliko traje izrada?",
    a: "Prvi preview najčešće dobijete za oko tjedan dana nakon dogovorenog opsega i uplate prema paketu. Završena stranica je najčešće gotova za oko mjesec dana. Najviše utječe brzina dostave materijala i feedbacka.",
  },
  {
    q: "Što trebam poslati od materijala?",
    a: "Minimalno trebamo naziv firme, grad, broj telefona ili email, popis usluga, radno vrijeme i područje rada. Idealno je poslati i logo, deset do dvadeset fotografija, cjenik ako želite da bude javan i link na Google Maps profil.",
  },
  {
    q: "Nemam tekst. Pomažete li s copyjem?",
    a: "Da. Većina vlasnika dobro zna svoj posao, ali ga nije lako pretvoriti u jasan web tekst. Pomažemo složiti strukturu i tekst tako da posjetitelj brzo shvati što nudite i kako vas može kontaktirati.",
  },
  {
    q: "Nemam fotografije. Je li to problem?",
    a: "Nije blokada. Možemo krenuti s privremenim vizualima i dati vam jednostavan foto brief za kasnije. Za vile, restorane, premium usluge, nekretnine i arhitekturu profesionalne fotografije mogu značajno pomoći.",
  },
  {
    q: "Hoće li stranica raditi na mobitelu?",
    a: "Da. Mobilna verzija je dio standarda jer većina ljudi prvo provjeri firmu s mobitela. Stranica mora biti jasna, brza i jednostavna za kontakt.",
  },
  {
    q: "Je li domena moja?",
    a: "Da. Domena ide na vaše ime. To je važno jer domena ne smije biti taoc agencije ili dobavljača.",
  },
  {
    q: "Što je uključeno u Managed paket?",
    a: "Managed uključuje izradu stranice, hosting i SSL dok je paket aktivan, osnovnu tehničku brigu, kontakt formu, klik za poziv, osnovni SEO setup i do 30 minuta manjih izmjena mjesečno. Veće izmjene, novi jezici, dodatne stranice i napredni SEO posebno se dogovaraju.",
  },
  {
    q: "Što ako prestanem plaćati mjesečni paket?",
    a: "Domena ostaje na vaše ime. Hosting, održavanje i podrška pod Sator Digital upravljanjem prestaju nakon pisanog upozorenja. Ako želite nastaviti samostalno, možemo dogovoriti jednokratnu predaju ili migraciju prema posebnoj ponudi.",
  },
  {
    q: "Imate li povrat novca ili garanciju?",
    a: "Kod digitalnih usluga najpoštenije je jasno definirati opseg, faze i revizije. Garantiramo isporuku dogovorenog opsega prema ponudi. Ne garantiramo prvu poziciju na Googleu ili određeni broj upita jer to ovisi o tržištu, konkurenciji i ponudi klijenta.",
  },
  {
    q: "Kako izgleda plaćanje?",
    a: "Managed se pokreće nakon uplate setup iznosa i zatim se plaća mjesečno. Owner se u pravilu plaća 50 posto prije početka i 50 posto prije objave ili predaje. Independence se plaća u fazama prema ponudi.",
  },
  {
    q: "Radite li web shop?",
    a: "Možemo procijeniti web shop, ali to nije osnovni fokus prve ponude. Ako trebate ozbiljan web shop, prvo procjenjujemo opseg, proizvode, plaćanja, dostavu i administraciju, pa predlažemo najbolji sljedeći korak.",
  },
  {
    q: "Mogu li imati samo Facebook ili Instagram?",
    a: "Možete, ali tada ovisite o platformama koje ne kontrolirate. Web stranica je vaša baza. Ona pomaže ljudima s Googlea da jasno vide usluge, dokaze, kontakt i sljedeći korak.",
  },
  {
    q: "Što je osnovni SEO?",
    a: "Osnovni SEO znači urednu strukturu stranice, naslove, meta opise, indeksiranje, mobilnu prilagodbu i jasan sadržaj usluga. To nije isto kao dugoročni SEO rad ili garancija pozicije na Googleu.",
  },
  {
    q: "Kako vas kontaktirati?",
    a: "Najbrže je nazvati ili poslati WhatsApp. Možete poslati i upit kroz formu na kontakt stranici.",
  },
];

export const FAQ_TEASER_KEYS = [
  "Koliko traje izrada?",
  "Što trebam poslati od materijala?",
  "Nemam tekst. Pomažete li s copyjem?",
  "Je li domena moja?",
  "Što ako prestanem plaćati mjesečni paket?",
];
