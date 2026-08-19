export type Categoria = 'marketing' | 'it' | 'hybrid';

export type Blocco = { titolo: string; testo: string };
export type Risultato = { valore: string; etichetta: string; descrizione: string };

export type Progetto = {
  slug: string;
  titolo: string;
  cliente: { nome: string; url?: string };
  categoria: Categoria;
  categoriaLabel: string;
  tecnologie: string[];
  immagine: string;
  logo: string;
  abstract: string;
  panoramica: string[];
  sfide: Blocco[];
  soluzione: Blocco[];
  risultati: Risultato[];
};

/** Filtri della pagina portfolio, come nel tema WordPress. */
export const filtri: { id: 'all' | Categoria; label: string }[] = [
  { id: 'all', label: 'Tutti' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'it', label: 'IT' },
  { id: 'hybrid', label: 'Ibridi' },
];

export const progetti: Progetto[] = [
  {
    slug: 'una-direzione-marketing-esterna-prefabbricati-moioli',
    titolo: 'Una direzione marketing esterna – Prefabbricati Moioli',
    cliente: { nome: 'Prefabbricati Moioli', url: 'https://prefabbricatimoioli.it/' },
    categoria: 'hybrid',
    categoriaLabel: 'Marketing + IT',
    tecnologie: [
      'Brand Strategy',
      'Content Strategy',
      'Google Analytics',
      'Google Business Profile',
      'Meta Business Suite',
      'WordPress',
    ],
    immagine: '/img/prefabbricati-moioli-set-it-right.webp',
    logo: '/img/progetti/MOIOLI.svg',
    abstract: 'Il progetto nasce dall’esigenza di costruire una comunicazione aziendale completamente assente e non strutturata.',
    panoramica: [
      'Il progetto nasce dall’esigenza di costruire una comunicazione aziendale completamente assente e non strutturata.',
      'Prefabbricati Moioli operava senza un’identità definita, senza una presenza digitale attiva e senza una strategia di posizionamento, con una percezione limitata rispetto al reale valore tecnico dell’azienda.',
      'L’intervento ha portato alla definizione di una brand strategy completa, allo sviluppo di una nuova identità visiva e all’attivazione dei canali di comunicazione, con l’obiettivo di costruire una presenza coerente, riconoscibile e scalabile nel tempo.',
      'Brand Strategy, Rebranding, LinkedIn Strategy, Content Strategy',
    ],
    sfide: [
      { titolo: 'Assenza di identità strutturata', testo: 'Nessuna linea visiva o narrativa chiara, con comunicazione non coerente e poco riconoscibile.' },
      { titolo: 'Presenza digitale inesistente', testo: 'Assenza di canali attivi e mancanza totale di una strategia di comunicazione online.' },
      { titolo: 'Mancanza di direzione', testo: 'Attività e contenuti non coordinati, senza un sistema in grado di supportare crescita e posizionamento.' },
    ],
    soluzione: [
      { titolo: 'Costruzione dell’identità', testo: 'Sviluppo della brand strategy, creazione del logo, payoff e definizione delle linee guida visive.' },
      { titolo: 'Attivazione dei canali', testo: 'Creazione e gestione dei profili LinkedIn aziendali, con piano editoriale orientato alla reputazione.' },
      { titolo: 'Strutturazione della comunicazione', testo: 'Produzione di materiali aziendali, contenuti e impostazione di una direzione marketing continuativa.' },
    ],
    risultati: [
      { valore: '', etichetta: 'Identità aziendale definita', descrizione: 'Nuovo posizionamento chiaro e riconoscibile' },
      { valore: '', etichetta: 'Presenza digitale attivata', descrizione: 'Canali LinkedIn avviati e strutturati' },
      { valore: '', etichetta: 'Comunicazione coerente', descrizione: 'Allineamento tra contenuti, immagine e percezione' },
      { valore: '', etichetta: 'Base per la crescita futura', descrizione: 'Struttura pronta per sito, contenuti e sviluppo continuo' },
    ],
  },
  {
    slug: 'riposizionamento-strategico-e-crescita-digitale-brianteo-self-service',
    titolo: 'Riposizionamento strategico e crescita digitale — Brianteo Ristorante Self Service',
    cliente: { nome: 'Brianteo Ristorante Self Service' },
    categoria: 'marketing',
    categoriaLabel: 'Marketing',
    tecnologie: [
      'Elementor',
      'Google Analytics',
      'Google Business Profile',
      'WordPress',
    ],
    immagine: '/img/progetti/Screenshot-2026-04-02-171525-1024x471.png',
    logo: '/img/progetti/logo-brianteo-rotondo-.png',
    abstract: 'Il progetto nasce con l’obiettivo di trasformare un’attività locale in un brand riconoscibile e strutturato.',
    panoramica: [
      'Il progetto nasce con l’obiettivo di trasformare un’attività locale in un brand riconoscibile e strutturato.',
      'La situazione iniziale presentava identità debole, comunicazione frammentata e assenza di strategia digitale.',
      'L’intervento ha portato a un rebranding completo e alla costruzione di un ecosistema digitale integrato, capace di generare visibilità e crescita nel tempo.',
      'Rebranding, Web Design, Social Strategy, SEO',
    ],
    sfide: [
      { titolo: 'Comunicazione frammentata', testo: 'Presenza digitale discontinua, senza una linea chiara né una strategia di crescita.' },
      { titolo: 'Identità poco riconoscibile', testo: 'Brand privo di elementi distintivi, con logo e comunicazione poco efficaci.' },
      { titolo: 'Assenza di sistema', testo: 'Canali e contenuti non lavoravano insieme, impedendo una crescita strutturata.' },
    ],
    soluzione: [
      { titolo: 'Rebranding completo', testo: 'Nuova identità visiva con logo e insegna per aumentare riconoscibilità e coerenza.' },
      { titolo: 'Ecosistema digitale', testo: 'Sito web e social progettati come sistema integrato, non come elementi separati.' },
      { titolo: 'Strategia e crescita', testo: 'Analisi competitor, piano editoriale e contenuti orientati alla crescita organica.' },
    ],
    risultati: [
      { valore: '+78%', etichetta: 'Visualizzazioni contenuti', descrizione: 'Crescita organica della visibilità nel periodo analizzato' },
      { valore: '+41%', etichetta: 'Crescita community', descrizione: 'Follower acquisiti senza advertising, con pubblico reale e fidelizzato' },
      { valore: '62%', etichetta: 'Traffico da ricerca organica', descrizione: 'Il sito diventa canale attivo di acquisizione clienti' },
      { valore: '0', etichetta: 'DISPERSIONE DEI CONTENUTI', descrizione: 'Tutti i canali integrati in un unico sistema coerente' },
    ],
  },
  {
    slug: 'zigoli-tosato-website',
    titolo: 'Zigoli & Tosato — Website & Digital Recovery',
    cliente: { nome: 'Zigoli & Tosato', url: 'https://www.zigolietosato.it/' },
    categoria: 'hybrid',
    categoriaLabel: 'Marketing + IT',
    tecnologie: [
      'Elementor',
      'HTML / CSS',
      'Microsoft 365',
      'MySQL',
      'SEO On-Page',
      'WordPress',
    ],
    immagine: '/img/progetti/Screenshot-2026-08-19-110249-1024x466.png',
    logo: '/img/progetti/logo-zigoli-e-tosato-1024x1024.jpg',
    abstract: 'Il progetto nasce dall’esigenza di riorganizzare la presenza digitale di Zigoli & Tosato, a seguito di criticità tecniche e reputazionali legate al sito precedente.',
    panoramica: [
      'Il progetto nasce dall’esigenza di riorganizzare la presenza digitale di Zigoli & Tosato, a seguito di criticità tecniche e reputazionali legate al sito precedente.',
      'La piattaforma risultava compromessa dal punto di vista della sicurezza, con la presenza di pagine non autorizzate e contenuti estranei, che hanno portato il dominio a essere segnalato e limitato da alcuni provider.',
      'Questa situazione impattava direttamente sull’affidabilità percepita dell’azienda e sulla possibilità di essere contattati online.',
      'Parallelamente, il sito non comunicava in modo chiaro i servizi offerti, risultava poco strutturato e non ottimizzato per la ricerca, limitando la visibilità e la generazione di nuovi contatti.',
      'L’obiettivo è stato quindi duplice: ripristinare sicurezza e credibilità della piattaforma e costruire un nuovo ecosistema digitale in grado di supportare concretamente il posizionamento e lo sviluppo commerciale dell’azienda.',
      'L’intervento ha portato alla realizzazione di un nuovo sito web WordPress completamente riorganizzato, con una struttura basata su settori e categorie di prodotto, progettata per intercettare le ricerche locali e guidare l’utente verso il contatto.',
      'Il progetto ha incluso anche la bonifica completa della piattaforma, la rimozione delle criticità di sicurezza e il ripristino della corretta reputazione del dominio.',
      'Parallelamente, è stata gestita la migrazione degli strumenti digitali aziendali, trasferendo 7 caselle email da Aruba a Microsoft 365 e centralizzando oltre 300 GB di dati da Dropbox in un ambiente più sicuro, organizzato e condiviso(Sharepoint).',
      'Il risultato è un’infrastruttura digitale solida, affidabile e pronta a supportare la crescita operativa e commerciale dell’azienda.',
      'Zigoli e Tosato – Vendita registratori di cassa e assistenza tecnica per le attività',
      'Web design, sviluppo WordPress, SEO on-page, migrazione email e dati aziendali',
    ],
    sfide: [
      { titolo: 'Sicurezza e reputazione compromesse', testo: 'Il sito risultava vulnerabile e già compromesso, con contenuti non autorizzati e segnalazioni da parte di alcuni provider, compromettendo l’affidabilità del dominio.' },
      { titolo: 'Struttura inefficace e poco chiara', testo: 'L’architettura del sito non permetteva di comprendere facilmente servizi e soluzioni, rendendo difficile orientare l’utente e generare contatti.' },
      { titolo: 'Strumenti digitali non centralizzati', testo: 'Email e dati aziendali erano distribuiti su piattaforme diverse, limitando organizzazione, collaborazione interna e continuità operativa.' },
    ],
    soluzione: [
      { titolo: 'Bonifica e messa in sicurezza', testo: 'Abbiamo ripristinato l’integrità della piattaforma eliminando contenuti non autorizzati, risolvendo le criticità di sicurezza e riportando il dominio a una condizione affidabile.' },
      { titolo: 'Nuova struttura e ottimizzazione SEO', testo: 'Abbiamo progettato un sito completamente riorganizzato, basato su settori e categorie, con contenuti ottimizzati per il posizionamento locale e orientati alla conversione.' },
      { titolo: 'Centralizzazione dell’infrastruttura', testo: 'Abbiamo gestito la migrazione delle email verso Microsoft 365 e il trasferimento dei dati aziendali, creando un sistema più sicuro, condiviso e facilmente gestibile.' },
    ],
    risultati: [
      { valore: '01', etichetta: 'Piattaforma ripristinata e sicura', descrizione: 'Eliminazione delle vulnerabilità e ripristino della piena affidabilità del dominio.' },
      { valore: 'SEO', etichetta: 'Base solida per il posizionamento locale', descrizione: 'Architettura e contenuti progettati per intercettare ricerche strategiche in Lombardia e supportare la crescita organica nel tempo.' },
      { valore: '7', etichetta: 'Caselle email migrate', descrizione: 'Migrazione da Aruba a Microsoft 365 per migliorare continuità operativa, gestione centralizzata e affidabilità dell’infrastruttura email aziendale.' },
      { valore: '300GB+', etichetta: 'DATI CENTRALIZZATI', descrizione: 'Trasferimento dell’archivio aziendale da Dropbox a un ambiente più strutturato e condiviso, migliorando ordine, accessibilità e collaborazione interna.' },
    ],
  },
  {
    slug: 'e-learning-web-app',
    titolo: 'Piattaforma e-learning custom per la formazione interna',
    cliente: { nome: 'inLogico' },
    categoria: 'it',
    categoriaLabel: 'IT',
    tecnologie: [
      'CSS',
      'HTML',
      'JavaScript',
      'Markdown',
      'PostgreSQL',
      'Supabase',
    ],
    immagine: '/img/progetti/Screenshot-2026-04-02-000300-1024x513.png',
    logo: '/img/progetti/logo-inlogico-1024x683.png',
    abstract: 'Il progetto nasce dall’esigenza di strutturare e centralizzare la formazione interna di team operativi nel settore fundraising.',
    panoramica: [
      'Il progetto nasce dall’esigenza di strutturare e centralizzare la formazione interna di team operativi nel settore fundraising.',
      'I contenuti erano distribuiti tra file, chat e documenti condivisi, senza un percorso definito né strumenti per monitorare l’avanzamento degli utenti.',
      'L’intervento ha portato allo sviluppo di una web app custom, progettata per organizzare i contenuti, gestire ruoli e responsabilità e tracciare in tempo reale il progresso degli utenti, ottendo una riduzione del tempo di onboarding degli operatori.',
      'Web app development, UX/UI, Database design',
    ],
    sfide: [
      { titolo: 'Formazione dispersa', testo: 'I contenuti erano distribuiti su più strumenti, senza una struttura chiara né un percorso definito.' },
      { titolo: 'Nessuna visibilità', testo: 'Impossibilità di monitorare i progressi degli utenti e identificare criticità o necessità di supporto.' },
      { titolo: 'Gestione inefficiente', testo: 'Assenza di strumenti per assegnare percorsi, gestire ruoli e supervisionare il team in modo strutturato.' },
    ],
    soluzione: [
      { titolo: 'Piattaforma centralizzata', testo: 'Sviluppo di una web app che raccoglie tutti i contenuti formativi in un unico sistema accessibile.' },
      { titolo: 'Contenuti modulari dinamici', testo: 'Sistema basato su moduli in Markdown per aggiornamenti rapidi e gestione flessibile dei contenuti.' },
      { titolo: 'Controllo e supervisione', testo: 'Dashboard con gestione ruoli e tracciamento dei progressi in tempo reale per admin e team leader.' },
    ],
    risultati: [
      { valore: '26', etichetta: 'Moduli formativi strutturati', descrizione: 'Percorso organizzato e progressivo per gli utenti' },
      { valore: '4', etichetta: 'Livelli di accesso', descrizione: 'Gestione chiara di ruoli e responsabilità' },
      { valore: '100%', etichetta: 'TRACCIABILITÀ', descrizione: 'Monitoraggio completo dei progressi in tempo reale' },
      { valore: '1', etichetta: 'Sistema centralizzato', descrizione: 'Eliminazione della dispersione dei contenuti' },
    ],
  },
  {
    slug: 'scadenziario-app',
    titolo: 'Sistema di gestione scadenze per dispositivi fiscali – Zigoli & Tosato',
    cliente: { nome: 'Zigoli & Tosato', url: 'https://www.zigolietosato.it/' },
    categoria: 'it',
    categoriaLabel: 'IT',
    tecnologie: [
      'FPDF / FPDI',
      'jsQR',
      'MySQL',
      'PHP / WordPress',
      'React',
    ],
    immagine: '/img/Screenshot-2026-03-31-180038.png',
    logo: '/img/progetti/logo-zigoli-e-tosato-1024x1024.jpg',
    abstract: 'Il progetto nasce dall’esigenza di digitalizzare e centralizzare la gestione delle scadenze di manutenzione di oltre 1.100 registratori telematici distribuiti sul territorio. Il cliente operava con processi manuali, senza visibilità in tempo reale sullo stato del parco macchine e con il rischio concreto di perdere verifiche periodiche obbligatorie per legge.',
    panoramica: [
      'Il progetto nasce dall’esigenza di digitalizzare e centralizzare la gestione delle scadenze di manutenzione di oltre 1.100 registratori telematici distribuiti sul territorio. Il cliente operava con processi manuali, senza visibilità in tempo reale sullo stato del parco macchine e con il rischio concreto di perdere verifiche periodiche obbligatorie per legge.',
      'L’intervento ha portato alla creazione di un’applicazione web interna completa, integrando gestione dispositivi, clienti, manutenzioni, QR code dell’Agenzia delle Entrate e reportistica automatica — adattando ogni funzionalità al flusso operativo reale del cliente.',
      'Zigoli e Tosato – Vendita registratori di cassa e assistenza tecnica per le attività',
      'Sviluppo applicazione web custom, WordPress REST API, UI/UX React',
    ],
    sfide: [
      { titolo: 'Gestione manuale e rischio errori', testo: 'Centinaia di scadenze gestite manualmente, senza alert automatici e con elevato rischio di verifiche mancate.' },
      { titolo: 'Nessuna visione centralizzata', testo: 'Dati distribuiti tra strumenti diversi, senza collegamento tra dispositivi, clienti e storico interventi.' },
      { titolo: 'Processi non digitalizzati', testo: 'Le verifiche venivano gestite offline, senza tracciamento strutturato né archiviazione automatica.' },
    ],
    soluzione: [
      { titolo: 'Sistema centralizzato dispositivi', testo: 'Database unico per la gestione di oltre 1.100 RT con dati tecnici, QR code e storico interventi.' },
      { titolo: 'Automazione delle scadenze', testo: 'Sistema di alert automatici per monitorare verifiche periodiche e ridurre il rischio di errori.' },
      { titolo: 'Digitalizzazione delle verifiche', testo: 'Generazione documentazione digitale con integrazione processi e archiviazione automatica.' },
    ],
    risultati: [
      { valore: '1.135', etichetta: 'Dispositivi Gestiti', descrizione: 'Controllo completo e centralizzato del parco macchine' },
      { valore: '975', etichetta: 'CLIENTI CENTRALIZZATI', descrizione: 'Anagrafiche integrate con dispositivi e contratti' },
      { valore: '0%', etichetta: 'VERIFICHE PERSE', descrizione: 'Eliminazione totale del rischio di scadenze dimenticate' },
      { valore: '100%', etichetta: 'PROCESSI DIGITALIZZATI', descrizione: 'Dalla verifica alla firma digitale, tutto tracciato e archiviato' },
    ],
  },
];

/** I due progetti mostrati in home, nell'ordine del pattern originale. */
export const progettiInEvidenza = progetti.filter((p) =>
  ['una-direzione-marketing-esterna-prefabbricati-moioli', 'scadenziario-app'].includes(p.slug)
);
