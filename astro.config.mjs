import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'http://localhost/jangeltr/',
  buildOptions: {
    baseUrl: '/MiApp/'
  },
  serveOptions: {
    // port: 3000,
    baseUrl: '/MiApp/'
  }
});
