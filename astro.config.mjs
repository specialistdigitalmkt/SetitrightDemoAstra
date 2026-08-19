// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.setitright.it',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Il progetto Moioli è stato rinominato su WordPress: il vecchio slug risponde
  // 301 sul sito live, quindi lo conserviamo anche qui.
  redirects: {
    '/progetto/una-direzione-marketing-esterna-non-un-semplice-intervento/':
      '/progetto/una-direzione-marketing-esterna-prefabbricati-moioli/',
  },
});
