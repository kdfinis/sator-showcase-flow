export type ServiceCategory = "proces" | "web";

export type Service = {
  id: "snimka" | "redizajn" | "uvodjenje" | "odrzavano" | "vlasnistvo";
  category: ServiceCategory;
  name: string;
  shapeShort: string;
  shapeLong: string;
  bestFor: string;
  includes: string[];
  extras?: { label: string; items: string[] }[];
  boundary?: string;
};

/** Programi redizajna procesa i digitalizacije. */
export const PROCESS_SERVICES: Service[] = [
  {
    id: "snimka",
    category: "proces",
    name: "Snimka",
    shapeShort: "2 do 4 tjedna, fiksni opseg",
    shapeLong: "Fiksni opseg od 2 do 4 tjedna, s jasno dogovorenim isporukama",
    bestFor:
      "Za organizacije koje žele razumjeti kako posao danas stvarno teče prije bilo kakve promjene alata ili rutina.",
    includes: [
      "Vođeni intervjui s ključnim ljudima (na daljinu ili na terenu)",
      "Karta postojećeg toka rada s vlasnicima koraka",
      "Popis mjesta gdje se gubi vrijeme i uska grla",
      "Prijedlog sljedećeg koraka i okvira suradnje",
      "Pisani materijali koje zadržavate u vlasništvu organizacije",
    ],
    boundary:
      "Snimka ne uključuje implementaciju niti prodaju softvera. Cilj je jasna slika i dogovoren sljedeći korak, ne brza promjena alata.",
  },
  {
    id: "redizajn",
    category: "proces",
    name: "Redizajn",
    shapeShort: "Višefazno, nakon snimke",
    shapeLong: "Višefazni program: otkrivanje, dizajn, podrška uvođenju",
    bestFor:
      "Za timove spremne preurediti operativni model, uskladiti alate i ponovno složiti CRM ili izvještavanje nakon snimke.",
    includes: [
      "Redizajn operativnog modela i uloga po koracima",
      "Procjena i usporedba tehnologija prema stvarnim potrebama procesa",
      "Ponovno mapiranje CRM polja, prodajnih tokova i izvještaja",
      "Fazni plan uvođenja s jasnim odobrenjima",
      "Priručnici i dokumentacija koje tim može održavati",
    ],
    extras: [
      {
        label: "Tipičan slijed",
        items: [
          "Snimka kao ulazna točka",
          "Dizajn ciljanog modela rada i odluka o alatima",
          "Podrška pri uvođenju i usvajanju novih rutina",
        ],
      },
    ],
    boundary:
      "Redizajn ne uključuje arhitektonsko projektiranje niti licencirani porezni, pravni ili revizijski savjet. Izrada web stranice je zasebna usluga (Održavano / Vlasništvo) i može ići usporedno s redizajnom.",
  },
  {
    id: "uvodjenje",
    category: "proces",
    name: "Uvođenje",
    shapeShort: "Uz redizajn ili zasebno",
    shapeLong: "AI prijelaz uz ljudsku provjeru, kontrolne točke i podršku timu",
    bestFor:
      "Za organizacije koje žele praktičnu AI pomoć u internim radovima, uz ljudsku provjeru prije svega što ide vani, i obuku tima na novim rutinama.",
    includes: [
      "Identifikacija gdje AI može pomoći u nacrtima, izvještajima ili internim operacijama, uz ljudsku provjeru prije vanjskog korištenja",
      "Pisani dijagram kontrolnih točaka i imenovanih odobravatelja prije vanjskog korištenja",
      "Obuka tima (radionice, upute, konzultacije u dogovorenim terminima)",
      "Podrška pri usvajanju novih digitalnih navika",
    ],
    boundary:
      "Ne gradimo vlastiti AI proizvod, ne prodajemo agentne platforme niti šaljemo neprovjerene AI izlaze klijentima ili regulatorima. Sve vani ide uz ljudsku provjeru.",
  },
];

/** Izrada i vođenje web stranica (zasebna usluga unutar digitalizacije). */
export const WEB_SERVICES: Service[] = [
  {
    id: "odrzavano",
    category: "web",
    name: "Održavano",
    shapeShort: "79 EUR / mj",
    shapeLong:
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
    boundary:
      "Ako se mjesečni paket prestane plaćati, prestaju poslužitelj, održavanje i podrška pod Sator Digital upravljanjem nakon pisanog upozorenja. Domena ostaje na vaše ime. Ako želite nastaviti samostalno, možemo dogovoriti jednokratnu predaju ili preseljenje prema zasebnoj ponudi.",
  },
  {
    id: "vlasnistvo",
    category: "web",
    name: "Vlasništvo",
    shapeShort: "od 2.490 EUR",
    shapeLong: "Od 2.490 EUR jednokratno, opcionalno održavanje 99 EUR mjesečno",
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

/** Svi glavni programi i usluge (proces + web). */
export const SERVICES: Service[] = [...PROCESS_SERVICES, ...WEB_SERVICES];

/** Zajednički elementi procesnih programa. */
export const COMMON_APPROACH = [
  "Jasno dogovoren opseg prije početka rada",
  "Pisani materijali koje organizacija zadržava",
  "Rad na daljinu s posjetima na terenu kada ima smisla",
  "Hrvatski i engleski jezik prema potrebi klijenta",
  "AI uz ljudsku provjeru prije vanjskog korištenja",
  "Bez izmišljenih postotaka uštede ili jamstava rezultata",
];

/** Što je uvijek uključeno u web usluge. */
export const WEB_ALL_INCLUDE = [
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

/** Što utječe na opseg procesnih programa. */
export const SCOPE_DRIVERS: string[] = [
  "Broj dionika u intervjuima",
  "Broj procesnih domena",
  "Dubina mapiranja",
  "Složenost CRM-a i izvještavanja",
  "Broj kontrolnih točaka i odobravatelja za AI",
  "Obuhvat obuke tima",
  "Rad na daljinu ili na terenu",
  "Broj jezika dokumentacije",
];

/** Što utječe na cijenu web usluge. */
export const WEB_PRICE_DRIVERS: string[] = [
  "Broj podstranica",
  "Opseg sadržaja",
  "Struktura ponude",
  "Broj jezika",
  "Kontakt forma",
  "Google karta",
  "WhatsApp integracija",
  "Rezervacijski upit",
  "Galerija radova",
  "Blog ili novosti",
  "Napredni SEO setup",
  "Složenije integracije",
];

/** Prošireni opseg uz procesne programe. */
export const PROCESS_EXTENDED: { title: string; desc: string }[] = [
  {
    title: "Privremeno operativno vodstvo",
    desc: "Ograničeno razdoblje vođenja digitalnih operacija uz dogovoreni opseg i jasne granice.",
  },
  {
    title: "Radionice po domenama",
    desc: "Jednodnevne ili višednevne radionice za jedan procesni segment, bez cjelovitog redizajna.",
  },
  {
    title: "Mjesečni savjetodavni sati",
    desc: "Kontinuirana podrška vodstvu oko procesa i AI prijelaza, uz ljudsku provjeru prije vanjskih odluka.",
  },
  {
    title: "Dodatni jezici dokumentacije",
    desc: "Priprema materijala na engleskom uz hrvatski, prema dogovorenom opsegu.",
  },
  {
    title: "Dublja analiza jednog sustava",
    desc: "CRM, LMS ili izvještavanje izvan standardnog opsega Redizajna, kao zaseban zadatak.",
  },
];

/** Prošireni opseg uz web usluge. */
export const WEB_EXTENDED: { title: string; desc: string }[] = [
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

/** @deprecated Use PROCESS_EXTENDED + WEB_EXTENDED */
export const EXTENDED_SERVICES = [...WEB_EXTENDED, ...PROCESS_EXTENDED];

/** Vanjski stručnjaci za web projekte. */
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

/** Granice opsega savjetodavnog / procesnog rada. */
export const SCOPE_BOUNDARIES: { title: string; desc: string }[] = [
  {
    title: "Arhitektura i građevina",
    desc: "Projektiranje, dozvole, BIM i izvođenje ostaju izvan opsega (TENET Arhitektura).",
  },
  {
    title: "Akademije i akreditirani programi",
    desc: "Ne prodajemo formalne edukacijske programe ni katalog tečajeva. Podržavamo usvajanje u okviru vaših procesa.",
  },
  {
    title: "AI proizvodi i agentne platforme",
    desc: "Ne razvijamo vlastiti AI softver niti prodajemo agentne alate. Savjetujemo i podržavamo uvođenje uz ljudsku provjeru.",
  },
  {
    title: "Licencirani porez, pravni i revizijski savjet",
    desc: "Za regulirana pitanja uključujemo vaše licencirane savjetnike; mi ne potpisujemo takve nalaze.",
  },
  {
    title: "IT podrška i hardver",
    desc: "Svakodnevna IT podrška i nabava opreme nisu fokus savjetodavnog programa. Hosting ulazi u uslugu Održavano dok je paket aktivan.",
  },
];

export const ENGAGEMENT_TERMS: string[] = [
  "Uvodni razgovor bez obveze nastavka",
  "Pisani prijedlog opsega nakon razgovora ili Snimke",
  "Fazno plaćanje prema dogovorenim isporukama",
  "Rokovi ovise o dostupnosti dionika i brzini povratnih informacija",
  "Za procesne programe cijena se dogovara individualno; za web usluge cijene su vidljive na stranici",
];

export const WEB_PAYMENT_TERMS: string[] = [
  "Paket Održavano pokreće se nakon uplate početne naknade. Mjesečna naknada počinje prema dogovorenom datumu i traje najmanje 12 mjeseci.",
  "Paket Vlasništvo plaća se u dvije faze: 50 posto prije početka rada i 50 posto prije objave ili predaje.",
  "Rokovi ovise o tome da klijent na vrijeme dostavi materijale i povratne informacije. Ako materijali kasne, pomiče se i rok objave.",
  "Domena se registrira na vaše ime.",
  "Računi dospijevaju odmah; rok plaćanja 14 dana.",
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Što je Snimka i koliko traje?",
    a: "Snimka je fiksni program otkrivanja od 2 do 4 tjedna. Uključuje intervjue, kartu postojećeg toka rada, popis mjesta gdje se gubi vrijeme i prijedlog sljedećeg koraka. Bez implementacije i bez prodaje softvera.",
  },
  {
    q: "Moram li proći Snimku prije Redizajna?",
    a: "Preporučujemo Snimku kao ulaznu točku jer daje zajedničku sliku prije većih promjena. Ako već imate dobro dokumentirane procese, moguće je dogovoriti drugačiji ulaz nakon kratkog uvodnog razgovora.",
  },
  {
    q: "Radite li na daljinu ili na terenu?",
    a: "Oboje. Intervjui i radionice najčešće kreću na daljinu. Za ključne dionike i prvi val obuke često dolazimo na teren u Hrvatskoj i šire u regiji, prema dogovorenom planu.",
  },
  {
    q: "Na kojem jeziku radite?",
    a: "Hrvatski za domaće klijente. Engleski za regionalne timove i međunarodna sjedišta. Oba jezika su uobičajena tijekom suradnje.",
  },
  {
    q: "Kako koristite AI u radu?",
    a: "AI koristimo kao pomoć u internim nacrtima i operativnim zadacima, uvijek uz ljudsku provjeru prije nego što išta ide klijentu, partneru ili regulatoru. Ne prodajemo AI alate niti obećavamo automatizaciju bez odgovornosti.",
  },
  {
    q: "Prodajete li CRM ili druge alate?",
    a: "Ne. Pomažemo procijeniti i odabrati alat prema mapiranim procesima i pripremiti CRM ili izvještavanje za novi model. Ne uzimamo proviziju od dobavljača osim ako to posebno ne dogovorimo.",
  },
  {
    q: "Za koga je ovaj program?",
    a: "Za profesionalne usluge, udruge, poslovne škole i srednje operatore koji su narasli brže od svojih procesa, te za firme kojima treba uredna web stranica. Tipično kad timovi rade u zasebnim rutinama, alati ne prate posao, web je nejasan ili vodstvo traži siguran AI smjer uz ljudsku provjeru.",
  },
  {
    q: "Radite li i web stranice?",
    a: "Da. Izrada web stranice je zasebna usluga: Održavano (mjesečno vođenje uz setup) i Vlasništvo (jednokratna izrada s predajom). Može ići samostalno ili uz Snimku, Redizajn i Uvođenje.",
  },
  {
    q: "Koliko traje izrada stranice?",
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
    a: "Nije zapreka. Možemo krenuti s privremenim vizualima i dati vam jednostavne upute za snimanje za kasnije. Za vile, restorane, premium usluge i nekretnine profesionalne fotografije mogu značajno pomoći.",
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
    q: "Kako izgleda plaćanje za web?",
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
    q: "Što ne radite?",
    a: "Ne radimo arhitekturu i građevinu, akreditirane akademije, AI proizvode, licencirani porezni ili pravni savjet niti svakodnevnu IT podršku. Granice su namjerno jasne kako biste znali što možete očekivati.",
  },
  {
    q: "Imate li klijentske studije slučaja s postotcima?",
    a: "Ne. Ne objavljujemo izmišljene postotke uštede niti preporuke klijenata bez dopuštenja. Iskustvo temeljimo na internom radu u institucijama i korporativnom okruženju, opisano kao pristup, ne kao jamstvo rezultata kod vas.",
  },
  {
    q: "Kako izgleda prvi korak?",
    a: "Dogovorimo uvodni razgovor putem telefona, emaila ili obrasca. Razgovor je kratak: razumijemo kontekst, što koči tim i koja usluga ima smisla (Snimka, Redizajn, Uvođenje, Održavano ili Vlasništvo). Bez obveze nastavka.",
  },
  {
    q: "Koliko košta suradnja na procesima?",
    a: "Za Snimku, Redizajn i Uvođenje cijenu dogovaramo nakon uvodnog razgovora i definiranog opsega. Za web usluge Održavano i Vlasništvo cijene su objavljene na stranici Usluge.",
  },
  {
    q: "Možete li preuzeti privremeno operativno vodstvo?",
    a: "U ograničenom opsegu, za definirano razdoblje, ako kapacitet dopušta. To nije standardni program na stranici; dogovara se individualno nakon Snimke ili uvodnog razgovora.",
  },
  {
    q: "Kako vas kontaktirati?",
    a: "Najbrže je nazvati ili poslati email. WhatsApp je dostupan za kratke poruke. Za pisani upit koristite obrazac na kontakt stranici.",
  },
];

export const FAQ_TEASER_KEYS = [
  "Što je Snimka i koliko traje?",
  "Radite li i web stranice?",
  "Koliko traje izrada stranice?",
  "Je li domena moja?",
  "Kako izgleda prvi korak?",
];
