export type Persona = {
  nome: string;
  ruolo: string;
  bio: string;
  linkedin: string;
  foto: string;
};

export const team: Persona[] = [
  {
    nome: 'Luca Pazzi',
    ruolo: 'Communication & IT Strategist · Co-founder',
    bio: 'Laurea in Comunicazione d’Impresa e Relazioni Pubbliche alla IULM, background tecnico ad indirizzo informatico. Ha lavorato come freelance nel digital marketing e nella gestione IT per PMI, ristoranti e professionisti — imparando sul campo che il problema reale non è mai uno strumento, ma la mancanza di coordinamento tra strumenti e persone. Da questa convinzione nasce Set It Right.',
    linkedin: 'https://www.linkedin.com/in/lucapazzi7/',
    foto: '/img/team/1738666190567-150x150.jpg',
  },
  {
    nome: 'Nello Mollo',
    ruolo: 'Cloud & Infrastructure Engineer',
    bio: 'Cloud Engineer con esperienza in ambienti enterprise e banking, specializzato in Microsoft Azure, Microsoft 365, Intune ed Entra ID. Ha gestito infrastrutture ibride on-premise e cloud per realtà fino a 1.000+ utenti, con focus su sicurezza, DevOps e automazione via Terraform e PowerShell. È la competenza che attiviamo quando l’infrastruttura deve essere solida, scalabile e conforme.',
    linkedin: 'https://www.linkedin.com/in/aniello-mollo-aa069a1a6/',
    foto: '/img/team/1758711679208-150x150.jpg',
  },
  {
    nome: 'Dan Cristian Clejanu',
    ruolo: 'IT Systems & web developer · Co-founder',
    bio: 'Laurea in Computer Science alla Titu Maiorescu University, diploma tecnico informatico. Ha lavorato come System Administrator e Cloud Architect per realtà internazionali, gestendo infrastrutture on-premise e cloud (AWS, Azure) con focus su sicurezza, continuità operativa e ottimizzazione delle performance. Certificato AWS Academy. Porta in Set It Right la competenza tecnica profonda che trasforma l’infrastruttura digitale da problema a vantaggio operativo.',
    linkedin: 'https://www.linkedin.com/in/dan-cristian-clejanu-2417261ba/',
    foto: '/img/team/1774889412269-1-150x150.jpg',
  },
  {
    nome: 'Davide Masotti',
    ruolo: 'Social Media & Business Development Specialist',
    bio: 'In formazione in Communication and Media Studies all’Università dell’Insubria. Ha costruito e gestito Lo Scout Inaspettato, pagina sportiva dedicata alle giovani promesse del calcio, curando la produzione dei contenuti, la crescita dell’audience e le relazioni con gli intervistati. Attivo in contesti commerciali internazionali tra Italia e Svizzera. Porta in Set It Right la capacità di costruire presenza digitale e aprire nuove relazioni commerciali.',
    linkedin: 'https://www.linkedin.com/in/davide-masotti-7a478835b/',
    foto: '/img/team/IMG_5412-150x150.webp',
  },
];

export const settori = [
  {
    titolo: 'Studi professionali',
    testo: 'Commercialisti, avvocati, consulenti. Gestiamo siti, CRM, strumenti digitali e fornitori tech.',
  },
  {
    titolo: 'Hospitality',
    testo: 'Hotel, agriturismi, ristoranti. Coordiniamo booking, comunicazione e infrastruttura digitale.',
  },
  {
    titolo: 'Aziende B2B tecniche',
    testo: 'Produzione, industria, ingegneria. Sistemi gestionali, cloud e presenza digitale strutturata.',
  },
  {
    titolo: 'Retail e servizi al pubblico',
    testo: 'Negozi, cliniche, studi medici. E-commerce, prenotazioni, social e strumenti operativi.',
  },
];

export const principi = [
  {
    titolo: 'Chiarezza',
    testo:
      'Parliamo in modo diretto. Niente buzzword, niente gergo tecnico inutile. Se qualcosa non è chiaro, non è colpa vostra.',
  },
  {
    titolo: 'Semplicità',
    testo:
      'Non complichiamo ciò che può essere semplice. Utilizziamo strumenti adeguati, non sempre i più nuovi. Funzionalità prima di tutto.',
  },
  {
    titolo: 'Responsabilità',
    testo:
      'Non siamo consulenti esterni che consegnano report. Prendiamo in carico la gestione operativa e rispondiamo dei risultati.',
  },
  {
    titolo: 'Continuità',
    testo:
      'Non siamo un progetto a tempo. Restiamo operativi nel tempo come punto di riferimento stabile per la vostra azienda.',
  },
];
