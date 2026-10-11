import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// Set to true once DNS for beust.com is pointed to GitHub Pages
const USE_CUSTOM_DOMAIN = false;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  site: USE_CUSTOM_DOMAIN ? 'https://beust.com' : 'https://cbeust.github.io',
  base: USE_CUSTOM_DOMAIN ? '/' : '/blog-astro',
  integrations: [sitemap(), mdx()]
});
