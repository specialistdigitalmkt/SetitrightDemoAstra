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
SetitrightAstro/         export dei blocchi Gutenberg delle pagine originali (materiale di partenza)
public/img/              asset scaricati dal sito WordPress (logo, icone, immagini progetti)
public/img/progetti/     immagini e loghi cliente delle schede progetto
public/img/team/         foto del team
src/icons/               icone SVG estratte dai blocchi stackable/icon, colorate con currentColor
src/data/site.ts         nome, payoff, email, LinkedIn, voci di menu
src/data/heroAnimation.ts  configurazione dell'animazione dell'hero (era un JSON del tema)
src/data/progetti.ts     i 5 progetti con categoria, tecnologie, sfide, soluzione, risultati
src/data/team.ts         persone, settori serviti e principi della pagina Chi siamo
src/styles/tokens.css    colori e font presi 1:1 dai preset di theme.json, più la scala di spaziature
src/styles/base.css      reset, layout helper, card, tag, bottoni, animazioni di reveal
src/layouts/Base.astro   <head>, SEO/OG, header, footer, observer per le animazioni
src/components/          Header, Footer, Cta, Icon, Marquee, ProgettiSlider, ProgettoCard
src/components/home/     Hero, HeroBackground, Problema, Metodo, PayoffTabs, ChiSiamo, Progetti
src/pages/               index, chi-siamo, come-lavoriamo, i-nostri-progetti, contatti,
                         manutenzione, 404, progetto/[slug]
```

Le 12 pagine generate: home, chi siamo, come lavoriamo, portfolio, contatti, manutenzione, 404, le
5 schede progetto e il redirect dal vecchio slug del progetto Moioli. Il menu ha le stesse voci del
sito originale: Home, Chi siamo, Metodologia, Progetti, Contatti (dove "Metodologia" punta a
`/come-lavoriamo/`, come su `setitright.it`).

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
| `setitrighttheme/valori-4-card` (Il Metodo) | `pages/come-lavoriamo.astro` |
| `setitrighttheme/come-inizia-collaborazione` | `pages/come-lavoriamo.astro` |
| `setitrighttheme/portfolio-cta` | `pages/i-nostri-progetti.astro` e `pages/progetto/[slug].astro` |
| `[projects_filters]` + `core/query-grid-posts` | filtro client-side in `pages/i-nostri-progetti.astro` |
| `[fluentform id="1"]` | form in `pages/contatti.astro` (vedi sotto) |
| `assets/js/hero-concept-animation.js` + `.css` + `hero-concept-config.json` | `components/home/HeroBackground.astro` |
| `assets/js/header-scroll.js` | script in `components/Header.astro` |

Note sul porting:

- Le classi `sir-reveal`, `sir-reveal-left`, `sir-reveal-tilt`, `sir-delay-*` sono state
  reimplementate con un `IntersectionObserver` in `Base.astro` (rispetta `prefers-reduced-motion`).
- Il blocco payoff interattivo (`sir-payoff-*`) è stato riscritto con stati `default / active /
  compact` gestiti via `data-state`, teaser come `<button>` e supporto tastiera (Esc chiude).
- L'occhiello "supporto IT e marketing per aziende", che nel tema era reso invisibile con un colore
  trasparente, qui è l'`<h1>` della home nascosto visivamente ma leggibile da SEO e screen reader.
- Le dipendenze da Stackable sono state eliminate: nessun CSS/JS di plugin. Le icone dei blocchi
  `stackable/icon` erano SVG inline negli attributi dei blocchi (non file in `wp-content`): sono
  state estratte in `src/icons/`, convertite a `currentColor` e iniettate dal componente `Icon`.
- I contenuti delle schede progetto (panoramica, sfide, soluzione, tecnologie, risultati) e i
  termini delle tassonomie `categoria_progetto` / `tecnologia_progetto` sono stati presi dalle
  pagine pubblicate su `setitright.it`, perché l'export dei blocchi conteneva solo la query loop.
- Stessa cosa per `/chi-siamo/`: nell'export il file era un duplicato di `Come lavoriamo.txt`, quindi
  team, settori e principi arrivano dalla pagina pubblicata (`src/data/team.ts`).
- Il progetto Moioli è stato rinominato su WordPress: il vecchio slug risponde 301 sul sito live e
  lo stesso redirect è configurato in `astro.config.mjs`.

## Animazioni

**Hero.** L'animazione dietro al logo e' il porting di `hero-concept-animation` del tema: griglia
pulsante, onde laterali, parole che affiorano, due orbite di particelle e il punto di fusione al
centro con gli anelli che si espandono. Nel tema il DOM veniva costruito da JavaScript dopo un
`fetch` del file di configurazione; qui viene generato a build time da
`src/data/heroAnimation.ts`, quindi **l'hero non spedisce JavaScript**: e' tutto CSS. Le posizioni
delle parole vengono da un generatore pseudo-casuale con seed fisso, cosi' la build e' riproducibile:
per cambiare disposizione basta cambiare il seed in `HeroBackground.astro`.

**Header.** Sopra l'hero resta trasparente e diventa solido dopo lo scroll, come
`assets/js/header-scroll.js`.

**Aggiunte rispetto al sito attuale**, per renderlo meno statico:

- entrata scaglionata degli elementi dell'hero al caricamento, piu' l'indicatore "Scopri";
- fascia scorrevole (`Marquee`) con le parole di marketing e IT, sopra la sezione "Due mondi";
- i progetti in home sono uno slider con scroll-snap, frecce, indicatori, tastiera e avanzamento
  automatico che si ferma su hover, focus e quando la sezione non e' visibile;
- i numeri dei risultati nelle schede progetto salgono da zero quando entrano in vista;
- piu' varianti di reveal (`sir-reveal-up`, `-left`, `-right`, `-tilt`, `-soft`) con ritardi
  scaglionati, applicate anche a titoli e blocchi prima statici.

Tutto rispetta `prefers-reduced-motion`: con le animazioni ridotte la scena dell'hero resta ferma,
marquee e autoplay si fermano, i contatori mostrano il valore finale e i reveal sono gia' visibili.

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

- Privacy e cookie policy, e ogni altra pagina legale.
- Le foto del team sono le miniature 150x150 servite da WordPress: per una resa migliore vanno
  riesportate a risoluzione maggiore dalla libreria media.
- P.IVA e dati legali nel footer (`src/components/Footer.astro`).
- Le immagini dei progetti sono le versioni a 1024px servite da WordPress: se servono più nitide,
  vanno riesportate dalla libreria media.
