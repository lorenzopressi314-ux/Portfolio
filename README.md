# Portfolio — Lorenzo Pressi

Portfolio personale da designer, in HTML, CSS e JavaScript puro (nessuna build).

## Struttura

```
index.html      Home: hero, lavori filtrabili, chi sono, contatti
project.html    Pagina case study (project.html?p=<slug>)
js/data.js      ← TUTTI i contenuti: testi, progetti, contatti, social
js/main.js      Logica di rendering e interazioni
css/style.css   Stili (colori e font nelle variabili in cima al file)
assets/img/     Le tue immagini
```

## Personalizzare

1. Apri `js/data.js` e modifica `SITE` (nome, bio, servizi, esperienze, email, social).
2. Sostituisci i progetti di esempio in `PROJECTS`. Per usare immagini vere,
   mettile in `assets/img/` e aggiungi al progetto:
   ```js
   cover: "assets/img/aurora-cover.jpg",
   gallery: ["assets/img/aurora-1.jpg", "assets/img/aurora-2.jpg"],
   ```
   Senza `cover`, viene generata una copertina astratta dai colori `palette`.
3. Il titolo della hero si cambia direttamente in `index.html`.

## Vedere il sito in locale

```bash
python3 -m http.server 8000
# apri http://localhost:8000
```

## Pubblicare gratis con GitHub Pages

Repository → Settings → Pages → Source: "Deploy from a branch" → branch `main`, cartella `/ (root)`.
Il sito sarà online su `https://<utente>.github.io/<repo>/`.
