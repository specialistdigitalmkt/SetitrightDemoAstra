# Guida — Viewer 3D di sistemi costruttivi (Prefabbricati Moioli)

Riferimento per creare un nuovo viewer 3D coerente con quelli esistenti
(`Tecnowing Viewer iPad.dc.html`, `Bacacier Viewer iPad.dc.html`).
Copiare questo file nella root del repo: viene letto automaticamente come contesto.

---

## 1. Struttura dei file

Ogni viewer è composto da tre pezzi, sempre gli stessi:

| File | Ruolo |
|---|---|
| `<Nome> Viewer iPad.dc.html` | UI + logica (Design Component). Nessuna geometria. |
| `<nome>-scene.js` | Geometria pura three.js. Nessun riferimento al DOM. |
| `three-d-stage.js` | Stage condiviso (renderer, luci, ombra, OrbitControls, export OBJ/GLB). Non modificare. |

Export finale opzionale: `<nome>-standalone.html` (file unico offline).

### Assets condivisi (già nel repo, riusare)

```
assets/fonts/space-grotesk-500-latin.woff2   assets/fonts/ibm-plex-sans-400-latin.woff2
assets/fonts/space-grotesk-600-latin.woff2   assets/fonts/ibm-plex-sans-600-latin.woff2
assets/fonts/ibm-plex-mono-400-latin.woff2   assets/fonts/ibm-plex-mono-500-latin.woff2
assets/logo/moioli-lockup-bianco.svg
```

---

## 2. Palette e tipografia (non cambiare)

**Colori UI**

| Uso | Hex |
|---|---|
| Header / navy pieno | `#16203A` |
| Titoli, stato attivo | `#1D2A44` |
| Rosso Moioli (accento, selezione) | `#B13733` |
| Rosso hover | `#963029` |
| Rosa accento su navy | `#D98581` |
| Rosa selezione riga | `#F1E3E2` |
| Fondo scena e pagina | `#F5F6F7` |
| Bianco pannelli | `#FFFFFF` |
| Bordi | `#E1E3E5` |
| Testo corpo | `#3B3F45` |
| Testo secondario | `#686F79` |
| Testo tenue / mono | `#9CA3AF` |
| Ombra pannelli | `0 6px 24px rgba(17,25,46,.10)` |
| Ombra barra flottante | `0 8px 28px rgba(17,25,46,.14)` |

**Tipografia**

- `Space Grotesk` 600 — nome del sistema nell'header, nome elemento nella scheda
- `IBM Plex Sans` 400/600 — UI, etichette, pulsanti (600, 11px, `letter-spacing:.09em`, uppercase)
- `IBM Plex Mono` 400/500 — quote, dimensioni, dati numerici
- Etichette di sezione: 10px, `letter-spacing:.16em`, uppercase, `#686F79`
- Raggio bordi: 5–6px pannelli e pulsanti, 8px barra flottante, 22px pill toggle

**Materiali 3D** — palette derivata dalla UI: cls scuro `#1D2A44`/`#2C3B59`/`#3B4C6B`,
tegolo/elemento chiaro `#F5F6F7`, lamiera accento `#B13733`, isolante `#E8D9C4`,
vetro `#BFE3F2` (opacity .55, emissive `#7FB8D4`), FV `#16203A`, neoprene `#2B2E33`.

---

## 3. Layout iPad landscape — 1194 × 834

```
┌──────────────────────────────────────────────────────────┐
│ header 56px  logo | eyebrow + nome sistema   ⟨azioni⟩    │  #16203A, z 30
├──────────────────────────────────────────────────────────┤
│ ┌ 280px ─────────┐                    ┌ configuratore ┐  │
│ │ Componenti     │      canvas 3D     │ Interposto    │  │
│ │ del sistema    │                    │ Configuraz.   │  │
│ │ ...            │                    └───────────────┘  │
│ │ Scheda elem.   │       ┌ barra viste + toggle ┐        │  bottom 64px
│ └────────────────┘       └──────────────────────┘        │
├──────────────────────────────────────────────────────────┤
│ barra dati mono 40px                                     │  z 25
└──────────────────────────────────────────────────────────┘
```

Regole:
- canvas: `position:absolute; top:56px; bottom:40px; left:0; right:0`
- pannelli flottanti a 20px dai bordi, `top:76px`
- hit target minimo **44px** su ogni pulsante (iPad)
- pannelli `z-index:20`, header 30, barra dati 25
- `$preview: {"width":1194,"height":834}` nei props

---

## 4. Componenti UI standard

1. **Header** — logo bianco 24px, divisore 1px `rgba(255,255,255,.18)`, eyebrow
   ("Sistema di copertura") + nome sistema; a destra 3 icon button 44×44 stroke 1.5:
   presentazione, reset vista, condividi.
2. **Elenco componenti** — collassabile (chevron che ruota -90°), righe 56px con
   pastiglia colore 12×12 (colore = materiale 3D), nome + dimensione mono.
   Riga selezionata: `background:#F1E3E2`, `box-shadow:inset 3px 0 0 #B13733`, testo rosso 600.
3. **Scheda elemento** — in fondo al pannello, fondo `#F5F6F7`; famiglia, conteggio
   elementi in mono rosso, tabella `grid-template-columns:84px 1fr` con righe separate da bordo.
   Stato vuoto: "Seleziona un elemento per isolarlo nel modello."
4. **Configuratore** — pannello in alto a destra, gruppi di pulsanti segmentati.
5. **Barra viste** — pill flottante: viste mutualmente esclusive (Assonometria ·
   Interno · Sezione · Prospetto) + divisore + toggle pill con dot 8px
   (rosso se attivo) per layer opzionali (Fotovoltaico · Stratigrafia · Tamponamenti).
6. **Barra dati** — dati generici di catalogo in mono 11px, chiave tenue + valore `#1D2A44` 500.
7. **Modalità presentazione** — nasconde tutti i pannelli, mostra solo il pulsante
   "Esci dalla presentazione".

---

## 5. Comportamenti obbligatori

- **Selezione singola**: tap su elemento o su riga → isola. Ri-tap o tap nel vuoto → deseleziona.
- **Ghosting**: il resto del modello va a `opacity 0.12`, saturazione × 0.12,
  lightness 0.72, `depthWrite:false`. Clonare il materiale una volta e cacharlo in una `Map`.
  Ogni mesh conserva `userData.base` con il materiale originale.
- **Stratigrafia (esploso)**: `userData.home` (posizione a riposo) + `userData.explode`
  (distanza relativa) su ogni mesh; offset `d = explode * 0.8`, applicato come
  `y + d` e `x + d*0.35`. Il fotovoltaico deve restare **sopra** la copertura.
- **Picking**: raycaster sul canvas dello stage, filtrando solo i layer e le mesh
  visibili; tap valido se spostamento < 6px e durata < 400ms (evita conflitto con OrbitControls).
- **Viste**: preset camera+target calcolati dalle dimensioni della scena (`dims`),
  non hardcodati. La vista Sezione nasconde le campate fuori dal taglio.
- **Configuratore**: cambia la geometria (`scene.setInterposto(...)`) e aggiorna
  automaticamente l'elenco componenti e le etichette.

---

## 6. Contratto del modulo scena

`<nome>-scene.js` esporta tre cose:

```js
export const LAYER_INFO = [
  { key: 'tegoli_alari', keys: ['tegoli_alari'], label: '…', size: '…', color: '#F5F6F7' },
  // key = voce di elenco; keys = layer 3D raggruppati sotto quella voce
];

export const CAT = {
  tegoli_alari: { fam: 'Tegoli alari', spec: [['Altezza','70 · 87 · 95 · 110 cm'], …] }
};

export function build<Nome>(THREE) {
  // …
  return { root, layers, dims, setInterposto };
}
```

- `root` — `THREE.Group` con tutti i layer come figli, ognuno `group.name = key`
- `layers` — mappa `key → THREE.Group`
- `dims` — quote utili alle viste (`LX`, `LY`, `Q_COP`, `Q_TOP`, `PITCH`, …)
- Unità: **metri**. Sezioni disegnate in cm nei profili e divise per 100.
- Nomi materiali e mesh in italiano tecnico (`cls_tegolo_alare`, `lamiera_esterna`):
  finiscono nell'export OBJ/GLB.
- Helper tipici: `flat(name,color,opts)` per `MeshStandardMaterial`,
  `shapeFrom(pts)` per profili con bezier, `extrude(shape,len,axis)`.

---

## 7. Boot dello stage

```js
await import('./three-d-stage.js');
const stage = document.createElement('three-d-stage');
stage.setAttribute('background', '#F5F6F7');
stage.setAttribute('name', '<nome>');           // basename export
stage.style.cssText = 'display:block;width:100%;height:100%';
host.appendChild(stage);
const { THREE } = await stage.ready;
// nascondere toolbar interna: shadowRoot.querySelectorAll('.toolbar,.note') → display:none
const mod = await import('./<nome>-scene.js');
const scene = mod.build<Nome>(THREE);
stage.setObject(scene.root);
```

Import map three.js nel `<helmet>`, versione pinnata `0.184.0`:
`three`, `OrbitControls`, `OBJExporter`, `GLTFExporter`.

---

## 8. Contenuti

- Dati **generici di catalogo**, mai valori di un progetto specifico.
- Testi in italiano, tono tecnico e asciutto. Terminologia da catalogo Moioli
  (tegolo alare, interposto, coppella, Armatubo, luce netta, campata, arcareccio).
- Nessuna emoji, nessun gradiente, nessuna icona decorativa.
- Le quote nella barra dati sono intervalli ("70 – 110 cm"), non numeri esatti.

---

## 9. Props / Tweaks

Esporre nel `data-props` solo ciò che cambia il modello, non testi o colori
(quelli si editano in place):

```json
{
  "$preview": { "width": 1194, "height": 834 },
  "interposto": { "editor": "enum", "options": ["Sandwich","Coppella piana","Coppella curva"],
                  "default": "Sandwich", "tsType": "string", "section": "Configuratore" },
  "configurazione": { "editor": "enum", "options": ["Standard","Shed"],
                      "default": "Shed", "tsType": "string", "section": "Configuratore" },
  "fotovoltaico": { "editor": "boolean", "default": false, "tsType": "boolean",
                    "section": "Configuratore" }
}
```

Lettura sempre con fallback: `this.props.x ?? '…'`.

---

## 10. Checklist nuovo viewer

- [ ] geometria in `<nome>-scene.js`, `LAYER_INFO` + `CAT` + `build<Nome>`
- [ ] palette, font e layout 1194 × 834 identici
- [ ] selezione singola + ghosting 12% + esploso stratigrafia
- [ ] 4 viste preset derivate da `dims`
- [ ] hit target ≥ 44px, elenco collassabile, modalità presentazione
- [ ] dati di catalogo generici in barra inferiore e schede
- [ ] props configuratore dichiarati
- [ ] export standalone se serve la condivisione offline
