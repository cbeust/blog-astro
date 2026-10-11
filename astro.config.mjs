import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// Set to true once DNS for beust.com is pointed to GitHub Pages
const USE_CUSTOM_DOMAIN = false;

// Local development runs at root (http://localhost:4321/).
// In production builds, use '/blog-astro' for GitHub Pages unless USE_CUSTOM_DOMAIN is true.
const isDev = process.argv.includes('dev');

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
  base: isDev || USE_CUSTOM_DOMAIN ? '/' : '/blog-astro',
  integrations: [sitemap(), mdx()]
});
