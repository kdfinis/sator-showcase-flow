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
    name: "Redizajn",
    shapeShort: "Višefazno, nakon snimke",
    shapeLong: "Višefazni program: otkrivanje, dizajn, podrška uvođenju",
    bestFor:
      "Za timove spremne preurediti operativni model, uskladiti alate i ponovno složiti CRM ili izvještavanje nakon snimke.",
    includes: [
      "Redizajn operativnog modela i uloga po koracima",
      "Procjena i usporedba tehnologija prema stvarnim potrebama procesa",
      "Ponovno mapiranje CRM polja, prodajnih tokova i izvještaja",
      "Izrada ili obnova web stranice kad je dio digitalizacije (kontakt, upiti, usluge na webu)",
      "Fazni plan uvođenja s jasnim odobrenjima",
      "Priručnici i dokumentacija koje tim može održavati",
    ],
    extras: [
      {
        label: "Tipičan slijed",
        items: [
          "Snimka kao ulazna točka",
          "Dizajn ciljanog modela rada i odluka o alatima",
          "Web i drugi kanali kad potkrepljuju novi način rada",
          "Podrška pri uvođenju i usvajanju novih rutina",
        ],
      },
    ],
    boundary:
      "Redizajn ne uključuje arhitektonsko projektiranje niti licencirani porezni, pravni ili revizijski savjet. Web stranica ulazi u opseg kad podržava dogovoreni proces, ne kao izolirani marketinški paket.",
  },
  {
    id: "uvodjenje",
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

/** Zajednički elementi svih programa suradnje. */
export const COMMON_APPROACH = [
  "Jasno dogovoren opseg prije početka rada",
  "Pisani materijali koje organizacija zadržava",
  "Rad na daljinu s posjetima na terenu kada ima smisla",
  "Hrvatski i engleski jezik prema potrebi klijenta",
  "AI uz ljudsku provjeru prije vanjskog korištenja",
  "Bez izmišljenih postotaka uštede ili jamstava rezultata",
];

/** Što utječe na opseg i trajanje suradnje. */
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

/** Prošireni opseg izvan tri glavna programa, kao zasebna ponuda. */
export const EXTENDED_SERVICES: { title: string; desc: string }[] = [
  {
    title: "Web stranica u sklopu digitalizacije",
    desc: "Izrada ili obnova poslovne web stranice (usluge, kontakt, upiti) kad je to dio dogovorenog procesa, ne izolirani paket bez konteksta.",
  },
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

/** Granice opsega i što ne radimo. */
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
    desc: "Svakodnevna IT podrška, nabava opreme i neupravljani hosting nisu fokus savjetodavnog programa.",
  },
];

/** Kako se dogovara suradnja (bez objavljenih cijena). */
export const ENGAGEMENT_TERMS: string[] = [
  "Uvodni razgovor bez obveze nastavka",
  "Pisani prijedlog opsega nakon razgovora ili Snimke",
  "Fazno plaćanje prema dogovorenim isporukama",
  "Rokovi ovise o dostupnosti dionika i brzini povratnih informacija",
  "Cijena se ne objavljuje na stranici; dogovara se individualno",
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
    a: "Za profesionalne usluge, udruge, poslovne škole i srednje operatore koji su narasli brže od svojih procesa. Tipično kad timovi rade u zasebnim rutinama, alati ne prate posao ili vodstvo traži siguran AI smjer uz ljudsku provjeru.",
  },
  {
    q: "Radite li i web stranice?",
    a: "Da, kad je web dio digitalizacije: kontakt, upiti, prikaz usluga, usklađen s dogovorenim procesom. Ne prodajemo izolirane brošurne pakete bez konteksta rada u organizaciji. Web ulazi u Redizajn ili kao prošireni opseg nakon razgovora.",
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
    a: "Dogovorimo uvodni razgovor putem telefona, emaila ili obrasca. Razgovor je kratak: razumijemo kontekst, što koči tim i koji program (Snimka, Redizajn ili Uvođenje) ima smisla. Bez obveze nastavka.",
  },
  {
    q: "Koliko košta suradnja?",
    a: "Cijenu dogovaramo nakon uvodnog razgovora i definiranog opsega. Na stranici ne objavljujemo fiksne cijene jer opseg ovisi o veličini tima i dubini promjene.",
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
  "Radite li na daljinu ili na terenu?",
  "Kako koristite AI u radu?",
  "Za koga je ovaj program?",
  "Kako izgleda prvi korak?",
];
