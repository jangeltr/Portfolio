import { defineConfig } from 'astro/config';
// import nodejs from '@astrojs/node'; // for server-side rendering
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'http://localhost/jangeltr/',
  //----------------------------------
  // for server-side rendering
  // output: 'server',
  // adapter: nodejs({
  //   mode: 'standalone'
  // }),

  // for hybrid rendering //pero en cada componente hay que poner el modo
  // ---
  // export const prerender = true;  //para que sea estatico
  // export const prerender = 'false'; //para que sea dinamico
  // ---
  //output: 'hybrid',
  //----------------------------------

  // Esto sigue sin funcionarme
  // buildOptions: {
  //   baseUrl: '/MiApp/'
  // },
  // serveOptions: {
  //   port: 3000,
  //   baseUrl: '/MiApp/'
  // },
});
