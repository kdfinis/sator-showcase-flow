export type Service = {
  id: "snimka" | "redizajn" | "uvodjenje";
  name: string;
  shapeShort: string;
  shapeLong: string;
  bestFor: string;
  includes: string[];
  extras?: { label: string; items: string[] }[];
  boundary?: string;
};

export const SERVICES: Service[] = [
  {
    id: "snimka",
    name: "Snimka",
    shapeShort: "2 do 4 tjedna, fiksni opseg",
    shapeLong: "Fiksni opseg od 2 do 4 tjedna, s jasno dogovorenim isporukama",
    bestFor:
      "Za organizacije koje žele razumjeti kako posao danas stvarno teče prije bilo kakve promjene alata ili rutina.",
    includes: [
      "Vođeni intervjui s ključnim ljudima (na daljinu ili na terenu)",
      "Karta postojećeg toka rada (as-is) s vlasnicima koraka",
      "Registar bolne točke i uskih grla",
      "Prijedlog sljedećeg koraka i okvira suradnje",
      "Pisani materijali koje zadržavate u vlasništvu organizacije",
    ],
    boundary:
      "Snimka ne uključuje implementaciju niti prodaju softvera. Cilj je jasna slika i dogovoren sljedeći korak, ne brza promjena alata.",
  },
  {
    id: "redizajn",
    name: "Redizajn",
    shapeShort: "Višefazno, nakon snimke",
    shapeLong: "Višefazni program: otkrivanje, dizajn, podrška uvođenju",
    bestFor:
      "Za timove spremne preurediti operativni model, uskladiti alate i ponovno složiti CRM ili izvještavanje nakon snimke.",
    includes: [
      "Redizajn operativnog modela i uloga po koracima",
      "Procjena i usporedba tehnologija prema stvarnim potrebama procesa",
      "Ponovno mapiranje CRM polja, pipelinea i izvještaja",
      "Fazni plan uvođenja s jasnim odobrenjima",
      "Runbookovi i dokumentacija koje tim može održavati",
    ],
    extras: [
      {
        label: "Tipičan slijed",
        items: [
          "Snimka kao ulazna točka",
          "Dizajn to-be modela i odluka o alatima",
          "Podrška pri uvođenju i usvajanju novih rutina",
        ],
      },
    ],
    boundary:
      "Redizajn ne uključuje arhitektonsko projektiranje, izradu web stranica za obrte niti licencirani porezni, pravni ili revizijski savjet.",
  },
  {
    id: "uvodjenje",
    name: "Uvođenje",
    shapeShort: "Uz redizajn ili zasebno",
    shapeLong: "AI prijelaz s kontrolnim točkama i podrškom timu",
    bestFor:
      "Za organizacije koje žele praktičnu AI pomoć u internim radovima, uz ljudsku provjeru prije svega što ide vani, i obuku tima na novim rutinama.",
    includes: [
      "Identifikacija gdje AI može pomoći u nacrtima, izvještajima ili internim operacijama",
      "Dizajn kontrolnih točaka i imenovanih odobravatelja",
      "Obuka i enablement tima (radionice, upute, office hours)",
      "Podrška pri usvajanju novih digitalnih navika",
      "AI spominjemo uz ljudsku provjeru u istom koraku",
    ],
    boundary:
      "Ne gradimo vlastiti AI proizvod, ne prodajemo agentne platforme niti šaljemo neprovjerene AI izlaze klijentima ili regulatorima.",
  },
];

/** Zajednički elementi svih programa suradnje. */
export const COMMON_APPROACH = [
  "Jasno dogovoren opseg prije početka rada",
  "Pisani materijali koje organizacija zadržava",
  "Rad na daljinu s posjetima na terenu kada ima smisla",
  "Hrvatski i engleski jezik prema potrebi klijenta",
  "AI uz ljudsku provjeru prije vanjskog korištenja",
  "Bez izmišljenih ROI brojki ili jamstava uštede",
];

/** Granice opsega i što ne radimo. */
export const SCOPE_BOUNDARIES: { title: string; desc: string }[] = [
  {
    title: "Arhitektura i građevina",
    desc: "Projektiranje, dozvole, BIM i izvođenje ostaju izvan opsega (TENET Arhitektura).",
  },
  {
    title: "Web stranice za obrte i male firme",
    desc: "Brošurne stranice, lokalni SEO paketi i hosting za hrvatske obrte nisu dio ovog programa.",
  },
  {
    title: "Akademije i akreditirani programi",
    desc: "Ne prodajemo formalne edukacijske programe ni katalog tečajeva. Radimo enablement u okviru vaših procesa.",
  },
  {
    title: "AI proizvodi i agentne platforme",
    desc: "Ne razvijamo vlastiti AI softver niti prodajemo agentne alate. Savjetujemo i podržavamo uvođenje uz provjere.",
  },
  {
    title: "Licencirani porez, pravni i revizijski savjet",
    desc: "Za regulirana pitanja uključujemo vaše licencirane savjetnike; mi ne potpisujemo takve nalaze.",
  },
  {
    title: "IT helpdesk i hardver",
    desc: "Čisti helpdesk, nabava opreme i neupravljani hosting nisu fokus advisory programa.",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Što je Snimka i koliko traje?",
    a: "Snimka je fiksni program otkrivanja od 2 do 4 tjedna. Uključuje intervjue, kartu postojećeg toka rada, registar bolne točke i prijedlog sljedećeg koraka. Bez implementacije i bez prodaje softvera.",
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
    a: "Za profesionalne usluuge, udruge, poslovne škole i srednje operatore koji su narasli brže od svojih procesa. Tipično kad timovi rade u silosima, alati ne prate rutine ili vodstvo traži siguran AI smjer.",
  },
  {
    q: "Što ne radite?",
    a: "Ne radimo arhitekturu, web stranice za obrte, akreditirane akademije, AI proizvode, licencirani porezni ili pravni savjet niti IT helpdesk. Granice su namjerno jasne kako biste znali što možete očekivati.",
  },
  {
    q: "Imate li klijentske studije slučaja s postotcima?",
    a: "Ne. Ne objavljujemo izmišljene ROI brojke niti testimoniale. Iskustvo temeljimo na internom radu u institucijama i korporativnom okruženju, opisano kao pristup, ne kao jamstvo rezultata kod vas.",
  },
  {
    q: "Kako izgleda prvi korak?",
    a: "Dogovorimo uvodni razgovor putem telefona, emaila ili obrasca. Razgovor je kratak: razumijemo kontekst, što koči tim i koji program (Snimka, Redizajn ili Uvođenje) ima smisla. Bez obveze nastavka.",
  },
  {
    q: "Koliko košta suradnja?",
    a: "Cijenu dogovaramo nakon uvodnog razgovora i definiranog opsega. Na stranici ne objavljujemo fiksne cijene jer opseg ovisi o veličini tima i dubini promjene.",
  },
  {
    q: "Možete li preuzeti privremeno operativno vodstvo?",
    a: "U ograničenom opsegu, za definirano razdoblje, ako kapacitet dopušta. To nije standardni paket na stranici; dogovara se individualno nakon Snimke ili uvodnog razgovora.",
  },
  {
    q: "Kako vas kontaktirati?",
    a: "Najbrže je nazvati ili poslati email. WhatsApp je dostupan za kratke poruke. Za pisani upit koristite obrazac na kontakt stranici.",
  },
];

export const FAQ_TEASER_KEYS = [
  "Što je Snimka i koliko traje?",
  "Radite li na daljinu ili na terenu?",
  "Kako koristite AI u radu?",
  "Za koga je ovaj program?",
  "Kako izgleda prvi korak?",
];
