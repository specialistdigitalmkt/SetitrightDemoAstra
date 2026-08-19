# Set It Right — sito in Astro

Porting del sito WordPress `setitright.it` (blocchi Gutenberg + tema `setitrighttheme` + Stackable)
in un sito **statico Astro**: stesso contenuto e stesso linguaggio visivo, senza WordPress,
senza plugin e senza database.

## Requisiti

- **Node.js >= 22.12** (Astro 7). Verifica con `node -v`.
  Se sei su Node 18 (come la macchina su cui è stato creato il progetto), aggiorna con nvm:

  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash && . ~/.bashrc && nvm install 22 && nvm use 22
  ```

## Comandi

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` genera il sito statico in `dist/` (7 pagine, ~350 KB inclusi gli asset).
`npm run preview` serve la build in locale.

## Struttura

```
public/img/              asset scaricati dal sito WordPress (loghi, icone SVG, immagini progetti)
src/data/site.ts         nome, payoff, email, voci di menu
src/data/progetti.ts     schede progetto (generano /progetto/<slug>/)
src/styles/tokens.css    colori e font presi 1:1 dai preset di theme.json, più la scala di spaziature
src/styles/base.css      reset, layout helper, card, bottoni, animazioni di reveal
src/layouts/Base.astro   <head>, SEO/OG, header, footer, observer per le animazioni
src/components/          Header, Footer, Cta, ProgettoCard
src/components/home/     Hero, Problema, Metodo, PayoffTabs, ChiSiamo, Progetti
src/pages/               index, come-lavoriamo, i-nostri-progetti, contatti, 404, progetto/[slug]
```

## Come modificare i contenuti

- **Testi di sezione**: sono nel frontmatter del rispettivo componente in `src/components/home/`
  (es. le quattro card del "problema" sono l'array `silos` in `Problema.astro`).
- **Progetti**: aggiungi un oggetto a `src/data/progetti.ts`; la pagina di dettaglio
  `/progetto/<slug>/` viene generata da sola e la scheda compare in home e in portfolio.
- **Menu, email, payoff**: `src/data/site.ts`.
- **Colori**: `src/styles/tokens.css` — sono gli stessi valori che il tema WordPress esponeva come
  `var(--wp--preset--color--*)`: nero `#000000`, bianco `#ffffff`, `white-60` `rgba(255,255,255,.6)`,
  `gray-50` `#f9fafb`, `gray-300` `#d1d5dc`, `gray-500` `#6f6f6f`.
- **Spaziature**: sempre in `tokens.css`, ma la scala `sm/md/lg/xl` è ricavata dai padding usati nei
  pattern (sezioni a 96px), non dai preset `--wp--preset--spacing--*` che nel tema valgono
  12/16/24/32/48px.

## Corrispondenza con i blocchi WordPress

| Pattern WordPress            | Componente Astro                     |
| ---------------------------- | ------------------------------------ |
| `setitrighttheme/hero-home`  | `components/home/Hero.astro`         |
| `setitrighttheme/il-problema`| `components/home/Problema.astro`     |
| `setitrighttheme/la-funzione-v2` | `components/home/Metodo.astro`   |
| `setitrighttheme/payoff-setitright` (blocco HTML + JS) | `components/home/PayoffTabs.astro` |
| `setitrighttheme/chi-siamo`  | `components/home/ChiSiamo.astro`     |
| `setitrighttheme/progetti-gestiti` (Stackable feature-grid) | `components/home/Progetti.astro` + `ProgettoCard.astro` |
| Sezione finale "Parliamone"  | `components/Cta.astro`               |

Note sul porting:

- Le classi `sir-reveal`, `sir-reveal-left`, `sir-reveal-tilt`, `sir-delay-*` sono state
  reimplementate con un `IntersectionObserver` in `Base.astro` (rispetta `prefers-reduced-motion`).
- Il blocco payoff interattivo (`sir-payoff-*`) è stato riscritto con stati `default / active /
  compact` gestiti via `data-state`, teaser come `<button>` e supporto tastiera (Esc chiude).
- L'occhiello "supporto IT e marketing per aziende", che nel tema era reso invisibile con un colore
  trasparente, qui è l'`<h1>` della home nascosto visivamente ma leggibile da SEO e screen reader.
- Le dipendenze da Stackable sono state eliminate: nessun CSS/JS di plugin.

## Form contatti

Di default il form in `/contatti/` apre il client di posta con una mail precompilata (funziona su
qualsiasi hosting statico). Per l'invio via server, sostituisci l'handler in
`src/pages/contatti.astro` con una di queste opzioni:

- **Servizio esterno**: cambia `action` in un endpoint Formspree/Basin e rimuovi lo `<script>`.
- **Endpoint proprio**: aggiungi un adapter (`npx astro add node` oppure `netlify` / `vercel`) e
  crea `src/pages/api/contatti.ts` con un handler `POST`.

## Deploy

Essendo output statico va su qualsiasi hosting: Netlify, Vercel, Cloudflare Pages, GitHub Pages o
un normale spazio web (carica il contenuto di `dist/`).
Build command: `npm run build` — publish directory: `dist`.

## Cosa manca rispetto al sito attuale

- Pagine interne oltre a quelle portate (eventuali servizi, privacy/cookie policy, blog).
- Immagini/testi dei progetti oltre ai due presenti in home.
- P.IVA e dati legali nel footer (`src/components/Footer.astro`).
