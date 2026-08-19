// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.setitright.it',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
