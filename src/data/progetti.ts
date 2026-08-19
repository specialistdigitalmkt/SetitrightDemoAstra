export type Progetto = {
  slug: string;
  settore: string;
  titolo: string;
  cliente?: { nome: string; url: string };
  abstract: string;
  immagine: string;
  attivita: string[];
  risultati: string[];
};

export const progetti: Progetto[] = [
  {
    slug: 'una-direzione-marketing-esterna-non-un-semplice-intervento',
    settore: 'Settore B2B',
    titolo: 'Direzione marketing esterna',
    cliente: { nome: 'Prefabbricati Moioli', url: 'https://prefabbricatimoioli.it/' },
    abstract:
      'Analisi, strategia e attivazione operativa per trasformare un’azienda senza comunicazione in un brand strutturato, coerente e riconoscibile.',
    immagine: '/img/prefabbricati-moioli-set-it-right.webp',
    attivita: [
      'Analisi del posizionamento e della percezione di marca',
      'Definizione di strategia, target e piano editoriale',
      'Coordinamento di fornitori creativi e tecnici',
      'Presidio continuativo della comunicazione',
    ],
    risultati: [
      'Identità e messaggi coerenti su tutti i canali',
      'Un unico referente per marketing e tecnologia',
      'Attività pianificate invece che reattive',
    ],
  },
  {
    slug: 'scadenziario-app',
    settore: 'Settore B2B',
    titolo: 'Sviluppo Web App custom',
    cliente: { nome: 'Zigoli & Tosato', url: 'https://www.zigolietosato.it/' },
    abstract:
      'Gestione scadenze, assistenza tecnica e presenza digitale per una rete di oltre 1.100 dispositivi sul territorio.',
    immagine: '/img/Screenshot-2026-03-31-180038.png',
    attivita: [
      'Web app su misura per lo scadenziario dei dispositivi',
      'Flussi di assistenza tecnica e presa in carico interventi',
      'Integrazione con la presenza digitale esistente',
      'Manutenzione evolutiva e supporto operativo',
    ],
    risultati: [
      'Oltre 1.100 dispositivi monitorati in un unico strumento',
      'Scadenze e interventi tracciati, niente più fogli separati',
      'Meno tempo perso nel coordinamento interno',
    ],
  },
];
