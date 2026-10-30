/*
  CONTENUTI DEL PORTFOLIO
  -----------------------
  Modifica questo file per aggiornare testi, progetti e contatti.
  Per ogni progetto puoi indicare `cover` (percorso di un'immagine, es.
  "assets/img/casa-tevere-cover.jpg") e `gallery` (lista di immagini).
  Se `cover` manca, viene generata una copertina astratta con i colori `palette`.
*/

const SITE = {
  name: "Lorenzo Pressi",
  role: "Interior designer",
  location: "Terni · Roma",
  available: true,
  availability: "Aperto a collaborazioni e opportunità",
  intro:
    "Progetto interni e oggetti partendo da chi li vive: spazi funzionali, materiali scelti con cura, dettagli che fanno la differenza.",
  about: [
    "Sono un interior designer formato all'Istituto Pantheon Design & Technology di Roma. Mi interessa il progetto in tutte le sue scale: dalla distribuzione degli spazi alla scelta di materiali, finiture e tessuti, fino al disegno del singolo prodotto.",
    "Ho maturato esperienza in azienda presso Talenti S.p.A., lavorando sulla progettazione e modellazione del prodotto. Un percorso tra moda, web design e lingue straniere mi ha dato uno sguardo trasversale sulla comunicazione e sull'immagine dei progetti.",
  ],
  services: [
    { title: "Interior design", text: "Progettazione di spazi residenziali e commerciali, dal concept alla distribuzione." },
    { title: "Prodotto e arredo", text: "Progettazione e modellazione 3D di prodotti e complementi d'arredo." },
    { title: "Materiali e finiture", text: "Ricerca e selezione di materiali, finiture e tessuti, moodboard e abachi." },
    { title: "Presentazione", text: "Tavole di progetto, fotoritocco e impaginazione con la suite Adobe." },
  ],
  tools: ["Rhinoceros", "AutoCAD", "InDesign", "Photoshop", "Lightroom", "Adobe Acrobat", "Excel", "Canva", "WordPress", "HTML"],
  languages: ["Italiano", "Inglese", "Francese", "Spagnolo"],
  experience: [
    {
      years: "2025 — 2026",
      title: "Tirocinio e stage",
      place: "Talenti S.p.A., Amelia (TR)",
      note: "Progettazione e modellazione del prodotto, scelta di materiali, finiture e tessuti.",
    },
    {
      years: "2023 — 2024",
      title: "Servizio Civile Universale",
      place: "Helios, Terni",
      note: "Coordinamento eventi, reportistica sui progetti, gestione del portale web in WordPress.",
    },
  ],
  education: [
    { years: "2023 — 2026", title: "Interior Design", place: "Istituto Pantheon Design & Technology, Roma" },
    {
      years: "2021 — 2022",
      title: "Corso di Web Design",
      place: "Egina, Foligno",
      note: "Certificazione “Best digital innovator in accessibility” al SHU2022.",
    },
    { years: "2020 — 2021", title: "Scienze della Moda e del Costume", place: "Sapienza Università di Roma" },
    { years: "2014 — 2020", title: "Liceo Linguistico", place: "Liceo Angeloni, Terni" },
  ],
  email: "lorenzopressi314@gmail.com",
  socials: [
    { label: "Behance", url: "https://www.behance.net/" },
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};

/*
  PROGETTI DI ESEMPIO — da sostituire con i tuoi lavori reali.
*/
const PROJECTS = [
  {
    slug: "casa-tevere",
    title: "Casa sul Tevere",
    client: "Progetto universitario",
    year: 2026,
    categories: ["Residenziale"],
    summary: "Ristrutturazione di un appartamento di 90 mq per una giovane famiglia.",
    palette: ["#c9b79c", "#6b4f3a", "#efe8dc"],
    accent: "#a0714f", // colore usato nella pagina del progetto (default: primo della palette)
    role: "Concept, distribuzione, materiali",
    challenge:
      "Un appartamento frammentato in tante stanze piccole e buie, da trasformare in una casa aperta e luminosa senza perdere privacy.",
    solution:
      "Ho ripensato la distribuzione attorno a un unico blocco attrezzato che separa zona giorno e zona notte, con materiali naturali e una palette calda che amplifica la luce.",
    results: ["Piante e sezioni in AutoCAD", "Modello 3D in Rhino", "Abaco di materiali e finiture"],
  },
  {
    slug: "concept-store",
    title: "Concept store",
    client: "Progetto universitario",
    year: 2025,
    categories: ["Retail"],
    summary: "Spazio vendita per un marchio di abbigliamento sostenibile nel centro di Roma.",
    palette: ["#2f3e46", "#84a98c", "#e9edc9"],
    accent: "#52796f",
    role: "Concept, layout espositivo",
    challenge:
      "Raccontare i valori del marchio nello spazio fisico e guidare il cliente in un percorso di scoperta, in pochi metri quadri.",
    solution:
      "Un sistema espositivo modulare in legno e tessuti riciclati, riconfigurabile a ogni stagione, con un percorso che porta dalla vetrina al cuore del negozio.",
    results: ["Layout espositivo", "Arredi modulari su misura", "Tavole di presentazione"],
  },
  {
    slug: "seduta-outdoor",
    title: "Seduta outdoor",
    client: "Progetto di prodotto",
    year: 2025,
    categories: ["Prodotto"],
    summary: "Studio di una seduta per esterni, dalla forma alla scelta dei tessuti tecnici.",
    palette: ["#e76f51", "#264653", "#f4e9dc"],
    role: "Progettazione, modellazione 3D",
    challenge:
      "Disegnare una seduta comoda e leggera, resistente agli agenti atmosferici e facile da produrre.",
    solution:
      "Una struttura essenziale in alluminio con un intreccio in corda tecnica, studiata in Rhino e sviluppata con varianti di colore e finitura.",
    results: ["Modello 3D in Rhino", "Varianti di finitura", "Disegni tecnici"],
  },
  {
    slug: "bistrot",
    title: "Bistrot",
    client: "Progetto universitario",
    year: 2024,
    categories: ["Hospitality"],
    summary: "Interni per un piccolo bistrot di quartiere, tra cucina a vista e sala.",
    palette: ["#283618", "#dda15e", "#fefae0"],
    accent: "#bc6c25",
    role: "Concept, illuminazione, arredi",
    challenge:
      "Creare un ambiente accogliente e riconoscibile in uno spazio stretto e profondo, con molti posti a sedere.",
    solution:
      "Una lunga panca imbottita lungo la parete, luci basse sui tavoli e un bancone che diventa il centro della scena.",
    results: ["Pianta arredata", "Studio illuminotecnico", "Moodboard materiali"],
  },
];
