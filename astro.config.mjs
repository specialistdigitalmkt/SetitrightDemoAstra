// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.setitright.it',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // I redirect dai vecchi URL di WordPress sono 301 veri in public/.htaccess
  // (l'hosting è Aruba, Apache): qui genererebbero solo pagine HTML di rimando.
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/manutenzione/'),
    }),
  ],
});
