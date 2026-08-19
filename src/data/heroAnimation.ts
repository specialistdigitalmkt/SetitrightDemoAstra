/**
 * Configurazione dell'animazione dell'hero, portata da
 * assets/data/hero-concept-config.json del tema WordPress.
 * Nel tema veniva caricata via fetch e applicata a runtime; qui è un modulo,
 * così i valori finiscono nel CSS a build time senza richieste extra.
 */
export const heroAnimation = {
  theme: {
    backgroundColor: '#000000',
    elementColor: '#ffffff',
  },
  grid: {
    size: '40px',
    opacity: 0.06,
    pulseSpeed: '8s',
  },
  waves: {
    speed: '20s',
    opacity: 0.12,
  },
  orbits: {
    speed: '18s',
    particleSize: '6px',
    particlesPerOrbit: 4,
  },
  fusion: {
    pulseSpeed: '2.8s',
    ringSpeed: '3.2s',
  },
  words: {
    marketing: ['marketing', 'Brand', 'Content', 'Social', 'Strategia', 'Grafica', 'Campagne', 'SEO', 'Email'],
    it: ['it', 'Cloud', 'Database', 'API', 'DevOps', 'App', 'Deploy', 'Backend', 'Security'],
  },
};
