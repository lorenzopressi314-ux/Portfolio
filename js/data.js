/*
  CONTENUTI DEL PORTFOLIO
  -----------------------
  Modifica questo file per aggiornare testi, progetti e contatti.
  Per ogni progetto puoi indicare `cover` (percorso di un'immagine, es.
  "assets/img/aurora-cover.jpg") e `gallery` (lista di immagini).
  Se `cover` manca, viene generata una copertina astratta con i colori `palette`.
*/

const SITE = {
  name: "Lorenzo Pressi",
  role: "Designer visivo & digitale",
  location: "Italia",
  available: true,
  intro:
    "Disegno identità, interfacce e sistemi visivi per brand che vogliono farsi ricordare.",
  about: [
    "Sono un designer che lavora tra branding, interfacce digitali e direzione artistica. Mi piace partire dalle persone e dalle loro storie per costruire immagini chiare, coerenti e con un carattere riconoscibile.",
    "Collaboro con studi, startup e realtà culturali, seguendo i progetti dalla strategia fino ai dettagli di esecuzione.",
  ],
  services: [
    { title: "Brand identity", text: "Logo, sistema visivo, tono di voce e linee guida." },
    { title: "UI / UX design", text: "Siti, app e prodotti digitali, dal wireframe al prototipo." },
    { title: "Direzione artistica", text: "Campagne, editoria, social e contenuti visivi." },
    { title: "Design system", text: "Componenti e regole per far crescere il prodotto in modo coerente." },
  ],
  tools: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Blender", "HTML/CSS"],
  experience: [
    { years: "2024 — oggi", title: "Freelance designer", place: "Indipendente" },
    { years: "2022 — 2024", title: "Visual designer", place: "Studio creativo" },
    { years: "2019 — 2022", title: "Laurea in Design della comunicazione", place: "Università" },
  ],
  email: "lorenzopressi314@gmail.com",
  socials: [
    { label: "Behance", url: "https://www.behance.net/" },
    { label: "Dribbble", url: "https://dribbble.com/" },
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};

const PROJECTS = [
  {
    slug: "aurora",
    title: "Aurora",
    client: "Aurora Coffee Roasters",
    year: 2026,
    categories: ["Branding"],
    summary: "Identità visiva per una torrefazione artigianale che unisce tradizione e sperimentazione.",
    palette: ["#f2a65a", "#772f1a", "#f6e7cb"],
    role: "Brand identity, packaging",
    challenge:
      "Aurora voleva distinguersi in un mercato affollato di estetiche minimal tutte simili, senza perdere il calore della tradizione artigianale.",
    solution:
      "Abbiamo costruito un sistema basato su un monogramma che richiama il sorgere del sole e una palette calda ispirata alle fasi della tostatura. Il packaging cambia colore per ogni origine del caffè.",
    results: ["+40% riconoscibilità sugli scaffali", "Sistema esteso a 12 referenze", "Linee guida in 48 pagine"],
  },
  {
    slug: "orbita",
    title: "Orbita",
    client: "Orbita App",
    year: 2026,
    categories: ["UI/UX"],
    summary: "App mobile per organizzare viaggi di gruppo, dalla ricerca al diario condiviso.",
    palette: ["#4f46e5", "#a5b4fc", "#0f172a"],
    role: "Product design, prototipazione",
    challenge:
      "Pianificare un viaggio in gruppo significa chat infinite, fogli di calcolo e decisioni rimandate. Serviva un'esperienza che rendesse semplice scegliere insieme.",
    solution:
      "Ho progettato un flusso basato su proposte e votazioni rapide, con una timeline condivisa che si trasforma in diario di viaggio. Ogni schermata è stata testata con utenti reali.",
    results: ["4 cicli di test utente", "Design system di 60+ componenti", "Tempo di pianificazione dimezzato"],
  },
  {
    slug: "festival-luce",
    title: "Festival della Luce",
    client: "Associazione culturale",
    year: 2025,
    categories: ["Art direction", "Branding"],
    summary: "Campagna e identità per un festival di arti visive e installazioni luminose.",
    palette: ["#111111", "#ffe14d", "#ff4d6d"],
    accent: "#ff4d6d", // colore usato nella pagina del progetto (default: primo della palette)
    role: "Direzione artistica, campagna",
    challenge:
      "Comunicare un festival fatto di luce e notte attraverso manifesti stampati, di giorno, in mezzo alla città.",
    solution:
      "Un linguaggio tipografico che vibra come una sorgente luminosa: lettere che si espandono e colori fluorescenti su fondo nero. Il sistema è stato declinato in affissioni, social e segnaletica.",
    results: ["120 affissioni in città", "Animazioni per social e schermi", "18.000 visitatori"],
  },
  {
    slug: "verde",
    title: "Verde",
    client: "Verde Studio Botanico",
    year: 2025,
    categories: ["Web", "UI/UX"],
    summary: "Sito e-commerce per uno studio botanico, con guide alla cura delle piante.",
    palette: ["#2d6a4f", "#b7e4c7", "#fefae0"],
    role: "Web design, art direction",
    challenge:
      "Vendere piante online senza perdere il consiglio esperto che i clienti ricevono in negozio.",
    solution:
      "Ogni scheda prodotto racconta la pianta con guide visive e un quiz che suggerisce la specie giusta per la propria casa. Layout arioso e fotografie naturali.",
    results: ["Conversioni +28%", "Quiz completato da 1 visitatore su 3", "Tempo medio in pagina raddoppiato"],
  },
  {
    slug: "margine",
    title: "Margine",
    client: "Margine Edizioni",
    year: 2024,
    categories: ["Editoriale"],
    summary: "Progetto grafico per una collana di saggi brevi di una casa editrice indipendente.",
    palette: ["#e63946", "#f1faee", "#1d3557"],
    role: "Graphic design editoriale",
    challenge:
      "Dare a una collana di saggi un'identità forte e seriale, riconoscibile in libreria e capace di accogliere temi molto diversi.",
    solution:
      "Copertine costruite su una griglia fissa dove un unico elemento geometrico, sempre diverso, sintetizza il tema del libro. Tipografia rigorosa e colori pieni.",
    results: ["8 titoli pubblicati", "Selezione a un premio di grafica editoriale", "Sistema replicabile in autonomia"],
  },
  {
    slug: "pulse",
    title: "Pulse",
    client: "Pulse Fitness",
    year: 2024,
    categories: ["Motion", "Art direction"],
    summary: "Identità in movimento e contenuti social per una catena di palestre.",
    palette: ["#ff006e", "#3a0ca3", "#4cc9f0"],
    role: "Motion design, social",
    challenge:
      "Trasmettere energia e ritmo in pochi secondi, su schermi piccoli e feed affollati.",
    solution:
      "Un logo che pulsa a tempo di musica e un kit di animazioni modulari che il team interno può riutilizzare per creare contenuti sempre nuovi.",
    results: ["Kit di 30 template animati", "Engagement social +65%", "Usato in 9 sedi"],
  },
];
